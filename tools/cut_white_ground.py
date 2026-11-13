"""Cut a character still off a WHITE studio ground (Turquoise_standing, 21.10.26).

Border-seeded, per the unit rule (memory 720-clip-background-removal): only
light, unsaturated pixels CONNECTED to the frame border are ground, so the
white of the eyes and teeth is never touched. The soft contact shadow under
the feet is grey and border-connected too, so it goes with the ground. The
fur fringe gets a saturation ramp instead of a hard edge.

    python3 -I tools/cut_white_ground.py <in.png> <out.png> [height]
"""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

src, dst = sys.argv[1], sys.argv[2]
target_h = int(sys.argv[3]) if len(sys.argv) > 3 else 0

rgb = np.asarray(Image.open(src).convert('RGB')).astype(np.float32)
mx, mn = rgb.max(2), rgb.min(2)
sat = mx - mn
lum = rgb.mean(2)

# ground candidates: light and grey (the shadow is ~190-230, sat < 12)
cand = (sat < 26) & (lum > 150)
lab, _ = ndimage.label(cand)
edge = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
ground = np.isin(lab, edge[edge > 0])
# a pocket of ground trapped between hair curls is enclosed, so the border
# seed misses it; take enclosed light regions that lie within 2% of the frame
# of the outside ground. The eyes sit deep inside the silhouette and stay.
reach = ndimage.binary_dilation(ground, iterations=max(8, rgb.shape[1] // 50))
for i in np.setdiff1d(np.unique(lab[cand & ~ground]), [0]):
    comp = lab == i
    if (comp & reach).any() and (comp & (lum > 225)).sum() > 0.5 * comp.sum():
        ground |= comp

# alpha: 0 on the ground, 1 inside; a 6px fringe ramps on saturation
alpha = np.where(ground, 0.0, 1.0)
near = ndimage.binary_dilation(ground, iterations=6) & ~ground
ramp = np.clip((sat - 10) / 40.0, 0, 1)
alpha[near] = np.maximum(alpha[near] * 0, ramp[near])

# drop specks under 0.4% of the frame (leftover shadow blobs)
lab2, n = ndimage.label(alpha > 0.5)
if n:
    sizes = ndimage.sum(np.ones_like(alpha), lab2, range(1, n + 1))
    keep = np.isin(lab2, 1 + np.flatnonzero(sizes >= 0.004 * alpha.size))
    alpha[(alpha > 0.5) & ~keep] = 0

out = np.dstack([rgb, alpha * 255]).astype(np.uint8)
im = Image.fromarray(out, 'RGBA')
im = im.crop(im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox())
if target_h and im.height > target_h:
    im = im.resize((round(im.width * target_h / im.height), target_h), Image.LANCZOS)
im.save(dst, optimize=True)
print(dst, im.size)
