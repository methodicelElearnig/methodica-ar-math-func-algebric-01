'use strict';
/* ═══════════════════════════════════════════════════════════════════
   methodica-math-func-algebric-01 - unit behaviour (יעד 22.1, פונקציה
   בייצוג אלגברי). Started 21.10.26 from read-visual-rep-01's shared layer
   (the 2.3 engine package via intro-func-01 / liquid-uses-01: pointer-drag
   standard, zoom-must-enlarge, ?screen=N). That unit's screen hooks are not
   carried over; this unit's live below.
   Screens keep ONE global 0..N numbering across all seven components;
   window.PART_CONFIG (each component's script.js) bounds the range.
   ═══════════════════════════════════════════════════════════════════ */

/* KICKOFF.md screen map; goTo() skips a number with no section. Component 01
   = 0-26 (the guided flows run one screen per deck slide, as the approved
   RevealCallout template does); component 02 = 27-36 (one screen per deck
   slide, Elad 21.10); component 03 = 37-49; component 04 = 50-51; component 05 = 52-61; component 06 = 62-65; component 07 = 66-69 (the whole unit). */
const TOTAL_SCREENS = 70;

/* Two companions, chosen on screen 0 (deck slide 3): the White (grey) one and
   the Turquoise one. The producer supplies every pose for both (hq-21.10). */
const CHARACTER_IDS = ['character-white', 'character-turquoise'];
const DEFAULT_CHARACTER = 'character-white';
const CHARACTER_STORAGE_KEY = 'funcalg01_selectedCharacter';

const CHARACTER_ASSETS = {
  'character-white': {
    standing: '../unit-assets/img/character-white.png',
    mango:    '../unit-assets/img/white-mango.png',      /* deck 9 */
    story:    '../unit-assets/img/white-story.png',      /* deck 10 */
    video:    '../unit-assets/img/white-video.png',      /* deck 10 */
    trip:     '../unit-assets/img/white-trip.png',       /* deck 24, 25, 32 */
    tripIntro: '../unit-assets/video/character-white-trip.mp4',      /* deck 24 - producer clip 21.10 */
    muscleClip: '../unit-assets/video/character-white-muscle.mp4',  /* deck 39 = screen 27 - producer clip 22.10 */
    workoutClip: '../unit-assets/video/character-white-workout.mp4',  /* deck 50 = screen 37 - producer clip 22.10 */
    liftClip: '../unit-assets/video/character-white-lift.mp4',  /* screen 46 - producer clip 22.10 */
    cheerClip: '../unit-assets/video/character-white-cheer.mp4',  /* screen 50 - producer clip 22.10 */
    flyClip: '../unit-assets/video/character-white-fly.mp4',  /* screen 52 - producer clip 22.10 */
    finalClip: '../unit-assets/video/character-white-final.mp4',  /* screens 62 + 66 - producer clip 22.10 */
  },
  'character-turquoise': {
    standing: '../unit-assets/img/character-turquoise.png',
    mango:    '../unit-assets/img/turquoise-mango.png',
    story:    '../unit-assets/img/turquoise-story.png',
    video:    '../unit-assets/img/turquoise-video.png',
    trip:     '../unit-assets/img/turquoise-trip.png',
    tripIntro: '../unit-assets/video/character-turquoise-trip.mp4',  /* deck 24 - producer clip 21.10 */
    muscleClip: '../unit-assets/video/character-turquoise-muscle.mp4',  /* screen 27 - producer clip 22.10 */
    workoutClip: '../unit-assets/video/character-turquoise-workout.mp4',  /* screen 37 - producer clip 22.10 */
    liftClip: '../unit-assets/video/character-turquoise-lift.mp4',  /* screen 46 - producer clip 22.10 */
    cheerClip: '../unit-assets/video/character-turquoise-cheer.mp4',  /* screen 50 - producer clip 22.10 */
    flyClip: '../unit-assets/video/character-turquoise-fly.mp4',  /* screen 52 - producer clip 22.10 */
    finalClip: '../unit-assets/video/character-turquoise-final.mp4',  /* screens 62 + 66 - producer clip 22.10 */
  },
};

window.lomdaState = window.lomdaState || { selectedCharacter: null };

function getStoredCharacter() {
  try {
    const v = localStorage.getItem(CHARACTER_STORAGE_KEY);
    return CHARACTER_IDS.includes(v) ? v : null;
  } catch (e) { return null; }
}
window.lomdaState.selectedCharacter = getStoredCharacter();

function characterAsset(pose) {
  const id = CHARACTER_IDS.includes(window.lomdaState.selectedCharacter)
    ? window.lomdaState.selectedCharacter : DEFAULT_CHARACTER;
  return CHARACTER_ASSETS[id][pose] || CHARACTER_ASSETS[id].standing;
}

/* Every companion slot in the unit is an <img data-char-pose="…">; on entry
   the slot takes the chosen companion's asset for that pose, and is tagged
   with who is showing (CSS sizes the two by their own proportions). A pose the
   producer supplied as a CLIP swaps the slot to a <video> (and back to an <img>
   for a pose that is a still). */
function faPaintCharacters(scope) {
  const who = CHARACTER_IDS.includes(window.lomdaState.selectedCharacter)
    ? window.lomdaState.selectedCharacter : DEFAULT_CHARACTER;
  (scope || document).querySelectorAll('[data-char-pose]').forEach(el => {
    const want = characterAsset(el.dataset.charPose);
    const isClip = /\.mp4$/.test(want);
    if (isClip !== (el.tagName === 'VIDEO')) {
      const n = document.createElement(isClip ? 'video' : 'img');
      [...el.attributes].forEach(a => { if (a.name !== 'src') n.setAttribute(a.name, a.value); });
      if (isClip) { n.muted = true; n.loop = true; n.autoplay = true; n.playsInline = true; n.setAttribute('preload', 'auto'); }
      el.replaceWith(n);
      el = n;
    }
    if (el.getAttribute('src') !== want) el.setAttribute('src', want);
    if (isClip) { el.currentTime = 0; el.play().catch(() => {}); }
    el.dataset.char = who;
  });
}

/* ═══════════════════════════════════════════════════════════════════
   S0 · deck slide 3 - TwoOptionSelection (library template, verbatim
   behaviour). Selection persists under CHARACTER_STORAGE_KEY.
   ═══════════════════════════════════════════════════════════════════ */
function selectOption(cardEl) {
  document.querySelectorAll('#s0 .option-card').forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-checked', 'false');
  });
  cardEl.classList.add('selected');
  cardEl.setAttribute('aria-checked', 'true');
  window.lomdaState.selectedCharacter = cardEl.dataset.value;
  try { localStorage.setItem(CHARACTER_STORAGE_KEY, cardEl.dataset.value); } catch (e) {}
  const cont = document.getElementById('s0-continue');
  if (cont) cont.disabled = false;
}

function s0Enter() {
  const saved = window.lomdaState.selectedCharacter;
  document.querySelectorAll('#s0 .option-card').forEach(card => {
    const isSel = !!saved && card.dataset.value === saved;
    card.classList.toggle('selected', isSel);
    card.setAttribute('aria-checked', isSel ? 'true' : 'false');
  });
  const cont = document.getElementById('s0-continue');
  if (cont) cont.disabled = !saved;
}

document.addEventListener('keydown', e => {
  const card = e.target.closest && e.target.closest('#s0 .option-card, #s6 .option-card');
  if (card && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    if (card.closest('#s6')) faSelectPath(card); else selectOption(card);
  }
});

/* ═══════════════════════════════════════════════════════════════════
   The learning path (deck 10): read = deck 15-22 (screens 8-10), watch = deck 11 + 14
   (screens 7 + 11 - the summary sits AFTER the reading screens, Elad 21.10, so a 0..N
   walk meets every screen; each path routes around the other's).
   Both meet at the restaurant applet (deck 23). The mode switch on the
   path screens hops between the two (deck 11, 14, 15-22 draw it).
   ═══════════════════════════════════════════════════════════════════ */
const PATH_STORAGE_KEY = 'funcalg01_learnPath';
const FA_PATH_FIRST = { read: 8, video: 7 };
window.faPath = (() => { try { return localStorage.getItem(PATH_STORAGE_KEY); } catch (e) { return null; } })();

function faSetPath(p) {
  window.faPath = p;
  try { localStorage.setItem(PATH_STORAGE_KEY, p); } catch (e) {}
}
function faSelectPath(cardEl) {
  document.querySelectorAll('#s6 .option-card').forEach(c => {
    const on = c === cardEl;
    c.classList.toggle('selected', on);
    c.setAttribute('aria-checked', on ? 'true' : 'false');
  });
  faSetPath(cardEl.dataset.value);
  const cont = document.getElementById('s6-continue');
  if (cont) cont.disabled = false;
}
function s6Enter() {
  document.querySelectorAll('#s6 .option-card').forEach(c => {
    const on = c.dataset.value === window.faPath;
    c.classList.toggle('selected', on);
    c.setAttribute('aria-checked', on ? 'true' : 'false');
  });
  const cont = document.getElementById('s6-continue');
  if (cont) cont.disabled = !window.faPath;
}
function faGoPath(p) {
  faSetPath(p);
  goTo(FA_PATH_FIRST[p]);
}
/* deck 23 is reached from either path; חזרה returns along the one taken */
function faBackFromApplet() { goTo(window.faPath === 'video' ? 11 : 10); }

/* ─── per-screen entry ─────────────────────────────────────── */
function resetScreenState(n) {
  /* The DEV harness re-sends DEV_GOTO until the component answers, and goTo()
     has no same-screen guard - a staged reveal must NOT restart on those
     repeats. Mark the entry fresh only when the screen actually CHANGED. */
  p3Fresh = (p3LastScreen !== n);
  p3LastScreen = n;
  if (typeof quizResetScreenState === 'function') quizResetScreenState(n);
  const sec = document.querySelector(`.screen[data-screen="${n}"]`);
  faPaintCharacters(sec);
  faLayout(sec);
  switch (n) {
    /* ── component 01 · deck 3-37 ── */
    case 0: s0Enter(); break;                  /* deck 3: character choice */
    case 1: p3Stage('s1'); break;              /* QA 11.11: the complaint first, then the answer */
    case 4: faPollEnter(); break;              /* deck 7+8: poll, then the flip cards */
    case 6: s6Enter(); break;                  /* deck 10: read / watch */
    case 7: faSetPath('video'); break;
    case 8: faSetPath('read'); faHotspotEnter(8); break;    /* deck 15 */
    case 9: faSetPath('read'); faHotspotEnter(9); break;    /* deck 16 */
    case 10: faSetPath('read'); faAccEnter('s10'); break;   /* deck 17-22 */
    case 51: faAccEnter('s51'); break;                     /* deck 65-68: the class task */
    case 11: faSetPath('video'); p3Stage('s11'); break;     /* deck 14: rows rise one by one */
    case 21: case 22: case 23: break;
    case 24: faBlink(); break;                 /* deck 35: the card's question changed */
  }
}

/* ─── Speech-bubble frame (Figma 551:12741 / 551:12742), vendored verbatim
   from the approved builds. engine.js calls decorateBubbles(screen) on every
   goTo. ─── */
function bubblePathBottom(w, h, tx) {
  const r = 10, i = 1, td = 15.3, tw = 17;
  const cx = Math.min(w - r - tw - 2, Math.max(r + tw + 2, w * (isFinite(tx) ? tx : 0.5)));
  return `M ${i + r} ${i} H ${w - i - r} A ${r} ${r} 0 0 1 ${w - i} ${i + r}` +
    ` V ${h - i - r} A ${r} ${r} 0 0 1 ${w - i - r} ${h - i}` +
    ` H ${cx + tw} L ${cx} ${h - i + td} L ${cx - tw} ${h - i}` +
    ` H ${i + r} A ${r} ${r} 0 0 1 ${i} ${h - i - r}` +
    ` V ${i + r} A ${r} ${r} 0 0 1 ${i + r} ${i} Z`;
}

function bubblePathSideLeft(w, h) {
  const r = 8.5, i = 1, cy = h / 2, td = 17.6, th = 11.3;
  return `M ${i + r} ${i} H ${w - i - r} A ${r} ${r} 0 0 1 ${w - i} ${i + r}` +
    ` V ${h - i - r} A ${r} ${r} 0 0 1 ${w - i - r} ${h - i}` +
    ` H ${i + r} A ${r} ${r} 0 0 1 ${i} ${h - i - r}` +
    ` V ${cy + th} L ${i - td} ${cy} L ${i} ${cy - th}` +
    ` V ${i + r} A ${r} ${r} 0 0 1 ${i + r} ${i} Z`;
}

function bubblePathSideRight(w, h) {
  const r = 8.5, i = 1, cy = h / 2, td = 17.6, th = 11.3;
  return `M ${i + r} ${i} H ${w - i - r} A ${r} ${r} 0 0 1 ${w - i} ${i + r}` +
    ` V ${cy - th} L ${w - i + td} ${cy} L ${w - i} ${cy + th}` +
    ` V ${h - i - r} A ${r} ${r} 0 0 1 ${w - i - r} ${h - i}` +
    ` H ${i + r} A ${r} ${r} 0 0 1 ${i} ${h - i - r}` +
    ` V ${i + r} A ${r} ${r} 0 0 1 ${i + r} ${i} Z`;
}

function decorateBubbles(scope) {
  (scope || document).querySelectorAll('.speech-bubble').forEach(b => {
    const w = b.offsetWidth, h = b.offsetHeight;
    if (!w || !h) return;
    const key = w + 'x' + h;
    if (b.dataset.bubbleSize === key) return;
    b.dataset.bubbleSize = key;
    const stale = b.querySelector('.bubble-shape');
    if (stale) stale.remove();
    if (!b.dataset.bubbleWatched) {
      b.dataset.bubbleWatched = '1';
      if (window.ResizeObserver) {
        new ResizeObserver(() => decorateBubbles(b.parentElement || b)).observe(b);
      }
    }
    let svg;
    if (b.classList.contains('side-bubble--right')) {
      const td = 18;
      svg = `<svg class="bubble-shape" style="left:0;top:0;width:${w + td}px;height:${h}px" ` +
        `viewBox="0 0 ${w + td} ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
        `<path d="${bubblePathSideRight(w, h)}" fill="white" stroke-width="2" stroke-linejoin="round"/></svg>`;
    } else if (b.classList.contains('side-bubble')) {
      const td = 18;
      svg = `<svg class="bubble-shape" style="left:${-td}px;top:0;width:${w + td}px;height:${h}px" ` +
        `viewBox="${-td} 0 ${w + td} ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
        `<path d="${bubblePathSideLeft(w, h)}" fill="white" stroke-width="2" stroke-linejoin="round"/></svg>`;
    } else {
      const td = 17;
      svg = `<svg class="bubble-shape" style="left:0;top:0;width:${w}px;height:${h + td}px" ` +
        `viewBox="0 0 ${w} ${h + td}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
        `<path d="${bubblePathBottom(w, h, parseFloat(b.dataset.tailAt))}" fill="white" stroke-width="2" stroke-linejoin="round"/></svg>`;
    }
    b.insertAdjacentHTML('afterbegin', svg);
  });
}
function advanceScreen() { goTo(currentScreen + 1); }

/* ── the DRAG-gesture hint (Figma 2915:35185 "Cursor Drag", Math variant) ──
   show over the FIRST draggable element only; hide as soon as the learner
   starts dragging it. */
function makeDragHint(id) {
  const el = document.createElement('div');
  el.className = 'drag-hint';
  el.id = id;
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML =
    '<div class="drag-hint__travel">' +
      '<div class="drag-hint__ripple"><img src="../unit-assets/img/hint/ripple-ring-2.svg" alt=""></div>' +
      '<div class="drag-hint__cursor"><img src="../unit-assets/img/hint/cursor.svg" alt=""></div>' +
    '</div>';
  return el;
}

/* The stage is CSS-scaled: a delta read from getBoundingClientRect() is in
   SCREEN px and has to come back to layout px before it is written as a
   style inside that stage. */
function stageScale() {
  const app = document.getElementById('app');
  if (!app) return 1;
  const m = new DOMMatrixReadOnly(getComputedStyle(app).transform);
  return m.a || 1;
}

/* ── the click-hint sprite (percent-04's `makeClickHint`, verbatim) ── */
const SPARK_DIRS = [
  [0, -80], [56.57, -56.57], [80, 0], [56.57, 56.57],
  [0, 80], [-56.57, 56.57], [-80, 0], [-56.57, -56.57],
];
function makeClickHint(id) {
  const el = document.createElement('div');
  el.className = 'click-hint';
  el.id = id;
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML =
    '<div class="click-hint__ripple1"><img src="../unit-assets/img/hint/ripple-ring-1.svg" alt=""></div>' +
    '<div class="click-hint__ripple2"><img src="../unit-assets/img/hint/ripple-ring-2.svg" alt=""></div>' +
    SPARK_DIRS.map(([dx, dy], i) =>
      `<div class="click-hint__spark" style="--dx:${dx}px; --dy:${dy}px; --d:${i * 3}ms"><img src="../unit-assets/img/hint/spark.svg" alt=""></div>`
    ).join('') +
    '<div class="click-hint__cursor"><img src="../unit-assets/img/hint/cursor.svg" alt=""></div>';
  return el;
}
/* a click-hint centred on `target`, measured on entry (a hidden screen measures 0) */
function faPlaceHint(sec, target, id) {
  if (!sec || !target || document.getElementById(id)) return;
  const hint = makeClickHint(id);
  sec.appendChild(hint);
  requestAnimationFrame(() => {
    const k = stageScale(), sr = sec.getBoundingClientRect(), r = target.getBoundingClientRect();
    hint.style.left = ((r.left - sr.left) / k + r.width / k / 2 - 150) + 'px';
    hint.style.top = ((r.top - sr.top) / k + r.height / k / 2 - 150) + 'px';
  });
}

/* ═══════════════════════════════════════════════════════════════════
   Photo layers. A story photo fills its stage with object-fit: cover; the
   bubbles, hotspots and cut-outs that belong to the PICTURE live in a
   .fa-layer laid out in the photo's own pixels (data-w × data-h) and follow
   the same cover maths, so a bubble stays at the speaker's mouth and a
   hotspot on its object at any canvas width.
   ═══════════════════════════════════════════════════════════════════ */
function faLayout(scope) {
  (scope || document).querySelectorAll('.fa-layer').forEach(layer => {
    const stage = layer.parentElement;
    const W = stage.clientWidth, H = stage.clientHeight;
    if (!W || !H) return;
    const w = Number(layer.dataset.w), h = Number(layer.dataset.h);
    const fy = layer.dataset.fy != null ? Number(layer.dataset.fy) : 0.5;   /* object-position y */
    const s = Math.max(W / w, H / h);
    const ox = (W - w * s) / 2, oy = (H - h * s) * fy;
    layer.style.width = w + 'px';
    layer.style.height = h + 'px';
    layer.style.transform = `translate(${ox}px, ${oy}px) scale(${s})`;
    layer.style.setProperty('--fa-s', s);   /* children can undo the photo scale */
    if (layer.hasAttribute('data-keep-in')) faKeepBubblesIn(layer, W, s, ox);
  });
}
/* QA 11.11.26 (dslide 1, "the bubbles are not responsive"): on a stage
   narrower than the photo's shape the cover crop cut the bubbles at the sides.
   A [data-keep-in] layer keeps its bubbles inside the stage (25px margins,
   side by side in their deck order), shrinks them only when the row cannot
   fit, and re-aims a moved bubble's tail at its speaker's head (data-aim, photo px). */
function faKeepBubblesIn(layer, W, s, ox) {
  const M = 25, GAP = 16;
  const bs = [...layer.querySelectorAll(':scope > .speech-bubble')];
  if (!bs.length) return;
  const row = bs.map(b => {
    if (b.dataset.x0 == null) {
      b.dataset.x0 = parseFloat(getComputedStyle(b).left);
      b.dataset.t0 = parseFloat(b.dataset.tailAt) || 0.5;
    }
    const x0 = Number(b.dataset.x0), w = b.offsetWidth;
    const aim = b.dataset.aim != null ? Number(b.dataset.aim) : x0 + Number(b.dataset.t0) * w;  /* speaker's head, photo px */
    return { b, w, x0, t0: Number(b.dataset.t0), anchor: ox + aim * s };
  }).sort((a, c) => a.x0 - c.x0);
  const total = row.reduce((t, r) => t + r.w * s, 0) + GAP * (row.length - 1);
  const k = Math.min(1, (W - 2 * M) / total);
  row.forEach(r => { r.ws = r.w * s * k; r.L = Math.min(Math.max(ox + r.x0 * s, M), W - M - r.ws); });
  for (let i = 1; i < row.length; i++) row[i].L = Math.max(row[i].L, row[i - 1].L + row[i - 1].ws + GAP);
  const last = row[row.length - 1];
  last.L = Math.min(last.L, W - M - last.ws);
  for (let i = row.length - 2; i >= 0; i--) row[i].L = Math.min(row[i].L, row[i + 1].L - GAP - row[i].ws);
  row.forEach(r => {
    r.b.style.left = ((r.L - ox) / s) + 'px';
    r.b.style.transformOrigin = '0 0';
    r.b.style.transform = k < 1 ? `scale(${k})` : '';
    const moved = k < 1 || Math.abs(r.L - (ox + r.x0 * s)) > 0.5;   /* in place = the approved deck tail */
    const t = (moved ? Math.min(0.92, Math.max(0.08, (r.anchor - r.L) / r.ws)) : r.t0).toFixed(3);
    if (r.b.dataset.tailAt !== t) { r.b.dataset.tailAt = t; delete r.b.dataset.bubbleSize; decorateBubbles(layer); }
  });
}
window.addEventListener('resize', () => faLayout(document.querySelector('.screen.active')));
/* QA 03.11.26 (dslide 8 on the client platform): the player resizes its frame
   after load without a usable window resize, so the layer kept the first
   (taller) stage's offsets and the bubble sat low. Each stage now re-lays its
   own layer whenever ITS size changes - any window, any player. */
if (typeof ResizeObserver === 'function') {
  const faRO = new ResizeObserver(entries => entries.forEach(e => faLayout(e.target)));
  const faWatch = () => document.querySelectorAll('.fa-layer').forEach(l => faRO.observe(l.parentElement));
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', faWatch);
  else faWatch();
}
window.addEventListener('load', () => faLayout(document.querySelector('.screen.active')));

/* ═══════════════════════════════════════════════════════════════════
   S4 · deck slides 7+8 - one screen, two states. Notes: "הלומד עונה על
   השאלה בראש העמוד (ללא משוב), ומיד לאחר מענה קופץ משוב: 'פונקציות הן
   חלק...' והקלפים המתהפכים." No key (an opinion poll). متابعة once all three
   cards are flipped (FlipCardsReveal rule).
   ═══════════════════════════════════════════════════════════════════ */
const faFlip = { polled: null, flipped: {} };
function faPoll(el) {
  document.querySelectorAll('#s4 .fa-poll .scq-opt').forEach(o => {
    const on = o === el;
    o.classList.toggle('selected', on);
    o.setAttribute('aria-checked', on ? 'true' : 'false');
  });
  faFlip.polled = el.dataset.id;
  const sec = document.getElementById('s4');
  if (!sec.classList.contains('is-polled')) {
    sec.classList.add('is-polled');
    faFlipHint();
  }
  faFlipGate();
}
function faFlipCard(cardEl) {
  const i = Number(cardEl.dataset.index);
  if (!cardEl.classList.contains('is-flipped')) {
    cardEl.classList.add('is-flipped');
    cardEl.setAttribute('aria-expanded', 'true');
    const front = cardEl.querySelector('.frc-card-front');
    const back = cardEl.querySelector('.frc-card-back');
    if (front) front.setAttribute('aria-hidden', 'true');
    if (back) back.removeAttribute('aria-hidden');
  }
  faFlip.flipped[i] = true;
  const h = document.getElementById('s4-hint-cards');
  if (h) h.remove();
  faFlipGate();
}
function faFlipGate() {
  const c = document.getElementById('s4-continue');
  if (c) c.disabled = !faFlip.polled || [0, 1, 2].some(i => !faFlip.flipped[i]);
}
function faFlipHint() {
  if (Object.keys(faFlip.flipped).length) return;
  const sec = document.getElementById('s4');
  faPlaceHint(sec, sec.querySelector('.frc-card[data-index="0"]'), 's4-hint-cards');
}
function faPollEnter() {
  faFlipGate();
  if (faFlip.polled) faFlipHint();
}

/* ═══════════════════════════════════════════════════════════════════
   S8 / S9 · deck slides 15-16 - the story photos with a clickable object.
   Notes 15: "מעבר עכבר על מעטפה מעלה חיווי ללחיצה. ללא כפתור متابعة, אלא
   לחיצה על מעטפה מעבירה לעמוד הבא." Notes 16: "לאחר לחיצה קופץ פופ-אפ
   'התיבה נעולה...', וכפתור 'متابعة' הופך לפעיל." The glow is the deck's own:
   a cut-out of the object (from the deck's mock) with a yellow halo.
   ═══════════════════════════════════════════════════════════════════ */
const faBox = { opened: false };
function faHotspot(n) {
  const h = document.getElementById(`s${n}-hint-hot`);
  if (h) h.remove();
  if (n === 8) { goTo(9); return; }
  faBox.opened = true;
  const pop = document.getElementById('s9-locked');
  if (pop) pop.hidden = false;
  const c = document.getElementById('s9-continue');
  if (c) c.disabled = false;
}
function faHotspotEnter(n) {
  if (n === 9) {
    const pop = document.getElementById('s9-locked');
    if (pop) pop.hidden = !faBox.opened;
    const c = document.getElementById('s9-continue');
    if (c) c.disabled = !faBox.opened;
    if (faBox.opened) return;
  }
  const sec = document.getElementById(`s${n}`);
  /* after the layer has its transform */
  /* QA 03.11.26 (client player): the hint lives INSIDE the hotspot, centred by
     CSS, so it rides the photo layer at any frame size - no measuring */
  const hot = sec && sec.querySelector('.fa-hot');
  if (hot && !document.getElementById(`s${n}-hint-hot`)) hot.appendChild(makeClickHint(`s${n}-hint-hot`));
}
document.addEventListener('keydown', e => {
  const hot = e.target.closest && e.target.closest('.fa-hot');
  if (hot && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); hot.click(); }
});

/* ═══════════════════════════════════════════════════════════════════
   S10 · deck slides 17-22 - AccordionText (proportion-03 / ratio-04 S7
   markup, ratio-04's s7Toggle behaviour): one item open at a time, متابعة once
   all five were opened. Notes 22: "ייתכן ויהיה צריך גלילה בחלון בעקבות
   ההרחבות" - the item column scrolls (bar on the right).
   ═══════════════════════════════════════════════════════════════════ */
/* shared by every accordion screen (deck 17-22 on screen 10, the class task on
   screen 51): state per screen id */
const faAcc = {};
function faAccToggle(btn) {
  const item = btn.closest('.acc-item');
  const sec = item.closest('.screen');
  sec.querySelectorAll('.acc-item').forEach(el => {
    if (el !== item) {
      el.classList.remove('open');
      el.querySelector('.acc-head').setAttribute('aria-expanded', 'false');
    }
  });
  const open = item.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) {
    (faAcc[sec.id] = faAcc[sec.id] || {})[item.id] = true;
    /* bring the opened item to the top of the scroller, as the deck draws each state */
    const sc = sec.querySelector('.fa-acc-scroll');
    if (sc) sc.scrollTo({ top: item.offsetTop - sc.offsetTop, behavior: 'smooth' });
  }
  faAccGate(sec);
}
function faAccGate(sec) {
  const c = sec.querySelector('.btn-continue');
  const seen = faAcc[sec.id] || {};
  if (c) c.disabled = [...sec.querySelectorAll('.acc-item')].some(it => !seen[it.id]);
}
function faAccEnter(id) { const sec = document.getElementById(id); if (sec) faAccGate(sec); }

/* ═══════════════════════════════════════════════════════════════════
   Staged reveals (2.3's p3Stage, verbatim behaviour).
   ═══════════════════════════════════════════════════════════════════ */
const P3_STAGE = {
  /* deck 4 (QA 11.11): Turquoise's bubble, then White's answer */
  s1: { sel: '.fa-s1-b1, .fa-s1-b2', step: 1600, first: 400, gate: true },
  /* deck 14: "השורות עולות בהדרגה." */
  s11: { sel: '.p3-step-line', step: 700, first: 500, gate: true },
};
const P3_FADE_MS = 300;                 /* matches the opacity transition in styles.css */
const p3StageTimers = {};
let p3LastScreen = null;   /* see resetScreenState: repeat-entry guard */
let p3Fresh = true;

function p3Stage(id) {
  const el = document.getElementById(id);
  const cfg = P3_STAGE[id];
  if (!el || !cfg) return;
  if (!p3Fresh) return;                   /* duplicate DEV_GOTO for this entry */
  (p3StageTimers[id] || []).forEach(clearTimeout);
  p3StageTimers[id] = [];
  const items = [...el.querySelectorAll(cfg.sel)];
  el.classList.add('is-revealing');
  items.forEach(it => it.classList.remove('is-in'));
  void el.offsetWidth;                    /* commit the hidden state first */
  items.forEach((it, i) => {
    p3StageTimers[id].push(setTimeout(() => it.classList.add('is-in'), cfg.first + i * cfg.step));
  });

  if (!cfg.gate || !items.length) return;
  /* Released on a timer rather than `transitionend`: an interrupted
     transition fires no end event, and the button must never stay locked. */
  const btn = el.querySelector('.btn-continue');
  if (!btn) return;
  btn.disabled = true;
  const last = cfg.first + (items.length - 1) * cfg.step + P3_FADE_MS + 60;
  p3StageTimers[id].push(setTimeout(() => { btn.disabled = false; }, last));
}

/* ═══════════════════════════════════════════════════════════════════
   Guided Instruction Flow - REVEAL CALLOUT (template-library
   GuidedInstructionFlow-RevealCallout, the project default; percent-08
   approved 10.09.26), one screen per deck slide as read-visual-rep-01 ran it.
   Behaviour copied verbatim: the answer reveals on the click, no צדקתי step,
   no ✗ on a wrong pick, the bar button unlocks as متابعة. Extensions for
   this deck (KICKOFF): a screen title per flow, a step can carry a TABLE of
   dropdown slots instead of pills (deck 26), the card can change mid-flow
   and blinks when it does (deck 35), and the observe steps show the
   companion in the callout's column (deck 25, 32).
   ═══════════════════════════════════════════════════════════════════ */
function inPartFa(n) {
  const p = window.PART_CONFIG;
  return !p || (n >= p.start && n <= p.end);
}

const guidedState = {};

/* the plain-bulb icon the approved step card carries in its top corner */
const GC_BULB = `<svg class="gc-bulb" viewBox="0 0 20.997 27.9988" fill="none" aria-hidden="true">
  <path d="M17.4818 2.65764C15.2512 0.668476 12.2563 -0.275357 9.25683 0.0699765C4.59833 0.60431 0.748334 4.35748 0.103168 8.99148C-0.387999 12.5078 0.894168 16.0031 3.532 18.34C4.99267 19.6338 5.83033 21.5191 5.83033 23.5095V23.9155C5.83033 26.1671 7.662 27.9988 9.91367 27.9988H11.0803C13.332 27.9988 15.1637 26.1671 15.1637 23.9155V23.5095C15.1637 21.5308 16.0072 19.6321 17.4877 18.3143C19.6108 16.4243 20.9968 13.6885 20.9968 10.6666C20.9968 7.51914 19.6435 4.58398 17.4818 2.65764ZM13.9968 23.9155C13.9968 25.5236 12.6885 26.8319 11.0803 26.8319H9.91367C8.3055 26.8319 6.99717 25.5236 6.99717 23.9155V23.6666H13.9968V23.9155ZM16.7117 17.4441C15.1252 18.8546 14.1655 20.7801 13.9968 22.4996H12.2503V15.4996C12.2503 15.1776 11.9888 14.9161 11.6668 14.9161C11.3448 14.9161 11.0833 15.1776 11.0833 15.4996V22.4996H9.91367V15.4996C9.91367 15.1776 9.65217 14.9161 9.33017 14.9161C9.00817 14.9161 8.74667 15.1776 8.74667 15.4996V22.4996H6.99717C6.83433 20.7906 5.87233 18.8686 4.30667 17.4791C1.97967 15.4166 0.850168 12.3373 1.28217 9.15181C1.85183 4.95064 5.32617 1.68881 9.34733 1.23231C11.9958 0.928476 14.6432 1.76381 16.6118 3.51864C18.5233 5.22314 19.8298 7.81948 19.8298 10.6666C19.8298 13.3348 18.5967 15.7626 16.7117 17.4441Z" fill="currentColor"/>
</svg>`;

/* math is LTR-isolated everywhere (questions.js M / FX / X) */
const G_FX = M('𝑓(𝑥)');
const G_X = M('𝑥');

/* deck 25-31: the Ein Gedi story card. The sign floats at the card's bottom-
   left so the last lines wrap beside it (the deck lets it cross the card
   border on 25 and cover a line on 29 - KICKOFF). It zooms: the prices on it
   are the data. */
const G_EX_A = `
  <p>يخطط طلاب وطالبات الصف الثامن 3 للخروج في رحلة إلى محمية عين جدي الطبيعية في صحراء يهودا.</p>
  <p>المعلّمة التي تنظّم الرحلة تريد أن تعرف مسبقًا <strong>كم ستكلّف تذاكر الدخول للمجموعة</strong>.</p>
  <p class="g-gap">هي تعرف أنه <strong>سيخرج إلى الرحلة بالتأكيد شخصان بالغان</strong> (المعلّمة ومرافق آخر). لكن <strong>لا يُعرف بعد كم طالبة وطالبًا</strong> سيشاركون في الرحلة.</p>
  <span class="fa-sign img-zoom-wrap"><img src="assets/img/ein-gedi-sign.jpg" alt='لافتة "محمية عين جدي الطبيعية - الأسعار": سعر تذكرة الطالب: 17 شيكلًا. سعر تذكرة البالغ: 23 شيكلًا.' data-no-zoom><button type="button" class="applet-zoom-btn img-zoom-btn" aria-label="تكبير الصورة" onclick="faZoomSign(this)">${ZOOM_GLYPH}</button></span>
  <!-- QA 02.11.26: one flowing sentence - no break after "הכולל" -->
  <p class="g-gap"><strong>ساعدوا المعلّمة في إيجاد الدالة التي تصف المبلغ الإجمالي لتذاكر الدخول للبالغين ولصف فيه ${G_X} من الطالبات والطلاب.</strong></p>`;
const G_EX_A_NOSIGN = G_EX_A.replace(/\s*<span class="fa-sign[\s\S]*?<\/button><\/span>/, '');

/* the data bullets the callout gathers step by step (deck 27-31) */
const G_DATA = [
  `عدد الطالبات والطلاب في الصف: ${G_X}`,
  `المبلغ الإجمالي للطلاب والبالغين: ${G_FX}`,
  `سعر التذاكر لشخصين بالغَين: 46 ₪`,
  `سعر تذكرة للطالب أو الطالبة: 17 شيكلًاًًاا`,
  `التعبير الجبري لحساب مجموع ثمن جميع تذاكر الطلاب والطالبات: ${M('17𝑥')}`,
];
const gData = (n, tail = '') => `<ul class="g-data">${G_DATA.slice(0, n).map(d => `<li>${d}</li>`).join('')}${tail}</ul>`;

/* deck 32-36: flow B's card - the data summary, the function, ONE question
   (question 1 on 32-34, question 2 from 35). All right-aligned (Elad 21.10; the deck
   centres the function and question 1). */
const G_EX_B = (qn) => `
  <ul class="g-data g-data--card">${G_DATA.slice(0, 4).map(d => `<li>${d}</li>`).join('')}<li>التعبير الجبري لحساب مجموع ثمن جميع تذاكر الطلاب والطالبات: ${M('17𝑥')}</li></ul>
  <p>الدالة التي تمثّل السعر الإجمالي: ${M('𝑓(𝑥) = 17𝑥 + 46')}</p>
  ${qn === 1
    ? `<p class="g-qline"><strong>1. ما هو السعر الإجمالي للتذاكر لمجموعة فيها 13 طالبة وطالبًا؟</strong></p>`
    : `<p class="g-qline fa-blink"><strong>2. إذا عُلم أن مجموعة أخرى دفعت سعرًا إجماليًا قدره 522 ₪ مقابل التذاكر، فكم طالبة وطالبًا خرجوا في الرحلة؟</strong></p>`}`;

const G_TITLE_A = 'دعونا نحل التمرين الأول معًا';
const G_TITLE_B = 'الآن يمكننا استخدام الدالة لحل سؤالين';
/* QA 02.11.26: full width above the card, so it reads as one line */
const G_INTRO_A = '<strong>تأمّلوا التمرين التالي. لا تحلّوه، فقط انظروا إلى المعطيات وفكّروا في اتجاه للحل.</strong>';

/* deck 26's dropdown pool, as the notes list it (`(𝑥)` lost its f - KICKOFF Q4) */
const G_TABLE_POOL = ['𝑥', '𝑓(𝑥)', '17𝑥'];

const GUIDED = [
  /* deck 25 - observe only; the companion on its trip, bubble up-right. */
  { screen: 14, title: G_TITLE_A, intro: G_INTRO_A, ex: G_EX_A,
    char: { pose: 'trip', bubble: 'هيا نتابع ونحل معًا خطوة بعد خطوة' } },
  /* deck 26 - the data table: two dropdown slots, keys 𝑥 / 𝑓(𝑥) (notes).
     The visible line types "מסורת"; the hidden duplicate "מסודרת" (KICKOFF). */
  { screen: 15, title: G_TITLE_A, intro: G_INTRO_A, introHidden: true, ex: G_EX_A,
    card: `<p>في كل سؤال، سنبدأ بكتابة منظمة للمعطيات.</p><p><strong>أكملوا:</strong></p>`,
    table: { rows: [['عدد الطالبات والطلاب في الصف', '𝑥'], ['المبلغ الإجمالي للطلاب والبالغين', '𝑓(𝑥)']] } },
  /* deck 27 - key 46 ש"ח (2 x 23). Options right -> left as rendered. */
  { screen: 16, title: G_TITLE_A, intro: G_INTRO_A, introHidden: true, ex: G_EX_A,
    card: `${gData(2)}<p>الآن سنكتشف أجزاء الدالة.</p><p>لنبدأ بالمعطى المعروف لنا: تذكرتان للبالغين.</p>
           <p class="g-gap"><strong>ما هو سعر تذكرتَي البالغين؟</strong></p>`,
    q: { opts: ['23 شيكل', '46 شيكل'], correct: 1 } },
  /* deck 28 - key 17 ש"ח. */
  { screen: 17, title: G_TITLE_A, intro: G_INTRO_A, introHidden: true, ex: G_EX_A,
    card: `${gData(3)}<p class="g-gap"><strong>ما هو المبلغ الذي سيدفعه كل طالب أو طالبة؟</strong></p>`,
    q: { opts: ['17 شيكل', '23 شيكل'], correct: 0 } },
  /* deck 29 - key 17𝑥 (stored "𝑥17" / "𝑥 + 17", rendered 17𝑥 / 17 + 𝑥). */
  { screen: 18, title: G_TITLE_A, intro: G_INTRO_A, introHidden: true, ex: G_EX_A,
    card: `${gData(4)}<p class="g-gap">إذًا، <strong>ما هو التعبير الجبري المناسب لحساب المجموع الكلي لتذاكر الطلاب والطالبات؟</strong></p>`,
    q: { opts: [M('17𝑥'), M('17 + 𝑥')], correct: 0 } },
  /* deck 30 - key 17𝑥 + 46. */
  /* QA 03.11.26: dslide 19 shows no sign image (Elad) */
  { screen: 19, title: G_TITLE_A, intro: G_INTRO_A, introHidden: true, ex: G_EX_A_NOSIGN,
    card: `${gData(5)}<p class="g-gap"><strong>ما هو التعبير الجبري الذي يمثّل السعر الكلي لجميع التذاكر (الطلاب والبالغين)؟</strong></p>`,
    q: { opts: [M('17 + 17𝑥'), M('17𝑥 + 46')], correct: 1 } },
  /* deck 31 - key תלמידים. The function in full for the first time. */
  { screen: 20, title: G_TITLE_A, intro: G_INTRO_A, introHidden: true, ex: G_EX_A,
    card: `${gData(5, `<li>الدالة التي تمثل السعر الكلي:<br>${M('𝑓(𝑥) = 17𝑥 + 46')}</li>`)}
           <p class="g-gap">بعبارة أخرى، تُقابِل الدالة كلَّ عددٍ من _____ بسعر التذاكر الكلي للدخول.</p>`,
    q: { opts: ['البالغين', 'التذاكر', 'الطلاب'], correct: 2 } },

  /* deck 32 - flow B observe; the deck's en dash in the bubble is a hyphen here (unit rule). */
  { screen: 21, title: G_TITLE_B, ex: G_EX_B(1),
    char: { pose: 'trip', bubble: 'فكّروا - ما الطريقة التي يجب أن نستخدمها هنا للإجابة عن الأسئلة؟' } },
  /* deck 33 - key 𝑓(13) = 17⋅13 + 46. */
  { screen: 22, title: G_TITLE_B, ex: G_EX_B(1),
    card: `<p>نعوّض في الدالة المعطى 13 مكان ${G_X}.</p><p>ما هو التعبير الصحيح؟</p>`,
    q: { opts: [M('𝑓(13) = 17 + 13 + 46'), M('𝑓(13) = 17⋅13 + 46')], correct: 1 } },
  /* deck 34 - key 267 (17 x 13 + 46). */
  { screen: 23, title: G_TITLE_B, ex: G_EX_B(1),
    card: `<p>وفق صيغة الحساب التي وجدناها:</p><p>${M('𝑓(13) = 17⋅13 + 46')}</p><p>السعر الإجمالي لـ 13 طالبة وطالبًا هو:</p>`,
    q: { opts: [M('𝑓(13) = 1,003'), M('𝑓(13) = 267')], correct: 1 } },
  /* deck 35 - question 2 replaces question 1 in the card, which blinks
     (notes: "להבהב את שורות השאלה כדי שישימו לב שהתחלפה"). */
  { screen: 24, title: G_TITLE_B, ex: G_EX_B(2),
    card: `<p>نعوّض 522 مكان السعر الكلي الممثَّل بواسطة ${G_FX}.</p><p class="g-gap">المعادلة الصحيحة ستكون:</p>`,
    q: { opts: [M('522 = 17𝑥 + 46'), M('𝑓(𝑥) = 17⋅522 + 46')], correct: 0 } },
  /* deck 36 - key 28 ((522 - 46) / 17). */
  { screen: 25, title: G_TITLE_B, ex: G_EX_B(2),
    card: `<p>وفق صيغة الحساب التي وجدناها:</p><p>${M('522 = 17𝑥 + 46')}</p><p>إذا كان السعر الكلي للتذاكر هو 522 ₪،</p><p>عدد الطالبات والطلاب الذين خرجوا في الرحلة هو:</p>`,
    q: { opts: ['28', '33'], correct: 0 } },
];

function guidedTableHTML(cfg) {
  const opts = ['<option value="" selected disabled>اختاروا</option>']
    .concat(G_TABLE_POOL.map(v => `<option value="${v}">${v}</option>`)).join('');
  return `<table class="car-table fa-gtable">
      <thead><tr><th>الوصف</th><th>الترميز</th></tr></thead>
      <tbody>${cfg.table.rows.map(([label], r) => `
        <tr><td>${label}</td>
          <td><span class="g-slot" data-row="${r}"><select class="g-select" dir="ltr" aria-label="الترميز: ${label.replace('<br>', ' ')}"
            onchange="guidedTablePick(${cfg.screen}, ${r}, this)">${opts}</select></span></td></tr>`).join('')}
      </tbody>
    </table>`;
}

function buildGuidedScreens() {
  const app = document.getElementById('app');
  const backRef = document.getElementById('quiz-hint-overlay');
  GUIDED.forEach((cfg) => {
    if (!inPartFa(cfg.screen)) return;
    guidedState[cfg.screen] = { done: false, selected: null, picks: {} };
    const sec = document.createElement('section');
    sec.className = 'screen g-screen';
    sec.dataset.screen = cfg.screen;
    sec.id = `g${cfg.screen}`;

    const opts = cfg.q ? `<div class="gc-opts" role="radiogroup" aria-label="إمكانيات الإجابة">
      ${cfg.q.opts.map((o, i) => `
        <div class="gc-opt" role="radio" aria-checked="false" tabindex="0" data-idx="${i}"
             onclick="guidedAnswer(${cfg.screen}, this)"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();guidedAnswer(${cfg.screen}, this);}">${o}</div>`).join('')}
    </div>` : '';

    /* an observe step keeps the callout's column EMPTY (the card never moves) and
       the companion takes the unit's one companion spot - the shared widget,
       bottom-left above متابعة, bubble above it (Elad 21.10, memory 720-companion-placement) */
    const side = cfg.char
      ? `<div class="g-charcol" aria-hidden="true"></div>`
      : `<aside class="g-callout" aria-label="تعليمات المرحلة">
          ${GC_BULB}
          <div class="gc-text">${cfg.card}</div>
          ${cfg.table ? guidedTableHTML(cfg) : opts}
        </aside>`;

    const interactive = cfg.q || cfg.table;
    sec.innerHTML = `
      <h1 class="g-title">${cfg.title}</h1>
      ${cfg.intro ? `<p class="g-intro${cfg.introHidden ? ' is-hidden' : ''}">${cfg.intro}</p>` : ''}
      <div class="g-layout g-layout--low${cfg.intro ? '' : ' g-layout--nointro'}">
        <div class="g-right">
          <div class="g-frame">
            <div class="g-story">${cfg.ex}</div>
          </div>
        </div>
        ${side}
      </div>
      ${cfg.table
        ? `<button class="btn-continue" id="g${cfg.screen}-check" disabled onclick="guidedTableCheck(${cfg.screen})">هل إجابتي صحيحة؟</button>`
        : interactive
        ? `<button class="btn-continue" id="g${cfg.screen}-check" disabled onclick="goTo(${cfg.screen + 1})">متابعة</button>`
        : `<button class="btn-continue" onclick="goTo(${cfg.screen + 1})">متابعة</button>`}
      <button class="btn-back" onclick="goTo(${cfg.screen - 1})">رجوع</button>
      ${cfg.char ? `<div class="character-widget p3-char p3-char-left">
           <div class="speech-bubble">${cfg.char.bubble}</div>
           <img data-char-pose="${cfg.char.pose}" src="" alt="الشخصية المرافقة" data-no-zoom>
         </div>` : ''}`;
    app.insertBefore(sec, backRef);
  });
}

function guidedAnswer(screen, el) {
  const st = guidedState[screen];
  if (st.done) return;
  st.done = true;
  st.selected = Number(el.dataset.idx);
  const cfg = GUIDED.find(g => g.screen === screen);
  document.querySelectorAll(`#g${screen} .gc-opt`).forEach(o => {
    const idx = Number(o.dataset.idx);
    o.classList.add('locked');
    o.classList.remove('selected');
    o.setAttribute('aria-checked', o === el ? 'true' : 'false');
    if (idx === cfg.q.correct) o.classList.add('correct');
    else if (idx === st.selected) o.classList.add('chosen');
  });
  document.getElementById(`g${screen}-check`).disabled = false;
}

/* deck 26 (Elad 21.10): the learner picks BOTH slots freely, then checks.
   هل إجابتي صحيحة؟ opens once both are picked; the check marks each slot ✓ / ✗ and a
   wrong slot shows the right symbol beside it; the button then becomes
   متابعة. One check (RevealCallout: the key is revealed, no retry). */
function guidedTablePick(screen, row, sel) {
  const st = guidedState[screen];
  const cfg = GUIDED.find(g => g.screen === screen);
  if (st.done) return;
  st.picks[row] = sel.value;
  const btn = document.getElementById(`g${screen}-check`);
  btn.disabled = Object.keys(st.picks).length < cfg.table.rows.length;
}
function guidedTableCheck(screen) {
  const st = guidedState[screen];
  const cfg = GUIDED.find(g => g.screen === screen);
  const btn = document.getElementById(`g${screen}-check`);
  if (st.done) { goTo(screen + 1); return; }
  st.done = true;
  document.querySelectorAll(`#g${screen} .g-slot`).forEach(slot => {
    const row = Number(slot.dataset.row);
    const key = cfg.table.rows[row][1];
    const sel = slot.querySelector('select');
    sel.disabled = true;
    const right = st.picks[row] === key;
    slot.classList.add(right ? 'is-right' : 'is-wrong');
    if (!right) slot.insertAdjacentHTML('afterend',
      `<span class="g-slot-key" aria-label="الإجابة الصحيحة: ${key}"><span class="m" dir="ltr">${key}</span></span>`);
  });
  btn.textContent = 'متابعة';
}

/* the sign in the story card zooms like every question figure */
function faZoomSign(btn) {
  const img = btn.parentElement.querySelector('img');
  quizImageZoomOpen(img.src, img.alt, img);
}

/* deck 35: the new question blinks on entry */
function faBlink() {
  if (!p3Fresh) return;
  const q = document.querySelector('#g24 .fa-blink');
  if (!q) return;
  q.classList.remove('is-blinking');
  void q.offsetWidth;
  q.classList.add('is-blinking');
}

document.addEventListener('DOMContentLoaded', buildGuidedScreens);

/* ═══════════════════════════════════════════════════════════════════
   S36 · deck slide 48 - the dog park's shapes. Notes: "בעת מעבר עכבר על
   כל צורה, היא תודגש מעט ובתוכה אליה תופיע הנוסחה לחישוב השטח." Hover and
   keyboard focus show it while they last; a tap (touch boards) toggles it.
   ═══════════════════════════════════════════════════════════════════ */
function faShape(btn, mode) {
  const wrap = btn.closest('.fa-dog');
  const shape = btn.dataset.shape;
  const poly = wrap.querySelector(`.fa-shape[data-shape="${shape}"]`);
  const on = mode === 2 ? !btn.classList.contains('is-pinned') : !!mode || btn.classList.contains('is-pinned');
  if (mode === 2) btn.classList.toggle('is-pinned', on);
  btn.classList.toggle('is-on', on);
  if (poly) poly.classList.toggle('is-on', on);
}

/* ═══════════════════════════════════════════════════════════════════
   Fraction dropdowns (deck 82-88 notes: "תשובות עם חילוק יופיעו עם קו
   שבר"). A native <select> cannot draw a stacked fraction, so on a question
   marked `fracSelect: true` each select gets a twin: a button that shows the
   chosen option with a real fraction and a listbox drawn the same way. The
   native select stays in the DOM, hidden, and remains the source of truth -
   picking an option sets its value and fires its change, so the engine's
   checking, marking and answer reveal are untouched. Its marks (✓ / ✗) and
   its locked state are mirrored onto the twin.
   ═══════════════════════════════════════════════════════════════════ */
/* "𝑓(𝑥) = 𝑥/33" -> an LTR math run with 𝑥 over 33 */
function faFracHTML(text) {
  if (!text) return 'اختاروا';
  if (!/\//.test(text) && !/[𝑥𝑓𝑔]/u.test(text)) return text;
  const html = text.replace(/([^\s/=]+)\/([^\s/=]+)/g, (_, a, b) => FRAC(a, b));
  return `<span class="m" dir="ltr">${html}</span>`;
}
function faFracSelect(sel) {
  if (sel.dataset.fsel) return;
  sel.dataset.fsel = '1';
  const wrap = document.createElement('span');
  wrap.className = 'fa-fsel';
  sel.parentNode.insertBefore(wrap, sel);
  wrap.appendChild(sel);
  sel.classList.add('fa-fsel-native');
  sel.tabIndex = -1;
  sel.setAttribute('aria-hidden', 'true');
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'fa-fsel-btn';
  btn.setAttribute('aria-haspopup', 'listbox');
  btn.setAttribute('aria-expanded', 'false');
  const list = document.createElement('ul');
  list.className = 'fa-fsel-list';
  list.setAttribute('role', 'listbox');
  list.hidden = true;
  [...sel.options].filter(o => o.value).forEach(o => {
    const li = document.createElement('li');
    li.className = 'fa-fsel-opt';
    li.setAttribute('role', 'option');
    li.tabIndex = -1;
    li.dataset.value = o.value;
    li.innerHTML = faFracHTML(o.value);
    li.addEventListener('click', () => {
      sel.value = o.value;
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      close(); btn.focus();
    });
    li.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); li.click(); }
      if (e.key === 'ArrowDown' && li.nextElementSibling) { e.preventDefault(); li.nextElementSibling.focus(); }
      if (e.key === 'ArrowUp' && li.previousElementSibling) { e.preventDefault(); li.previousElementSibling.focus(); }
      if (e.key === 'Escape') { close(); btn.focus(); }
    });
    list.appendChild(li);
  });
  const render = () => {
    btn.innerHTML = `<span class="fa-fsel-val">${faFracHTML(sel.value)}</span>`;
    btn.classList.toggle('is-placeholder', !sel.value);
    ['correct', 'wrong', 'mark-ok', 'mark-bad'].forEach(c => btn.classList.toggle(c, sel.classList.contains(c)));
    btn.disabled = sel.disabled;
    btn.setAttribute('aria-label', sel.getAttribute('aria-label') || 'اختاروا إجابة');
  };
  const close = () => { list.hidden = true; btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    const open = list.hidden;
    document.querySelectorAll('.fa-fsel-list').forEach(l => { l.hidden = true; });
    list.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    /* QA 11.11.26 (dslides 67-68): the list always opens DOWN, like a native
       select; on a short window it stops at the screen's bottom edge and scrolls
       inside instead of being cut */
    if (open) {
      list.style.maxHeight = '';
      const scr = btn.closest('.screen');
      const floor = Math.min(window.innerHeight, scr ? scr.getBoundingClientRect().bottom : Infinity);
      const r = list.getBoundingClientRect();
      const k = r.height / list.offsetHeight || 1;          /* the stage may be scaled */
      const room = (floor - r.top - 6) / k;
      if (list.offsetHeight > room) list.style.maxHeight = Math.max(120, room) + 'px';
    }
    if (open) (list.querySelector(`[data-value="${CSS.escape(sel.value)}"]`) || list.firstElementChild).focus();
  });
  document.addEventListener('click', e => { if (!wrap.contains(e.target)) close(); });
  sel.addEventListener('change', render);
  new MutationObserver(render).observe(sel, { attributes: true, attributeFilter: ['class', 'disabled'] });
  wrap.appendChild(btn);
  wrap.appendChild(list);
  render();
}
const faBaseQuizBuild = quizBuildScreens;
quizBuildScreens = function () {
  faBaseQuizBuild();
  QUESTIONS.filter(q => q.fracSelect).forEach(q => {
    document.querySelectorAll(`#q${q.screen} .dd-select`).forEach(faFracSelect);
  });
};
/* the engine's answer reveal sets the value AND a mark class together, so the
   class observer above redraws the twin - no other hook is needed */
