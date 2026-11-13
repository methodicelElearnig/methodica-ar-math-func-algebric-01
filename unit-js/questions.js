'use strict';
/* ═══════════════════════════════════════════════════════════════════
   methodica-math-func-algebric-01 - question configs (יעד 22.1)
   ONE array for the whole unit; each component builds only its own range
   (window.PART_CONFIG in script.js). Copy, keys and feedback come from
   docs/forensics/slides-*.md - read from the deck XML + render, never
   inferred. The deck's blue (#019DE5) question lines take the subject
   colour (`q-ask`) - the deck is drawn in the science blue, the unit is maths.
   ═══════════════════════════════════════════════════════════════════ */

/* every math expression is an LTR isolate, so 𝑓(𝑥) never renders scrambled
   (the deck stores it as "(𝑥)f" in places - KICKOFF Q8) */
const M = (s) => `<span class="m" dir="ltr">${s}</span>`;
const FX = M('𝑓(𝑥)');
const X = M('𝑥');

/* ═══ component 01 · הוק והקניה · deck slides 3-37 ═══════════════════ */

/* deck 5: the converter, built from the notes' spec (no producer file) */
const S5_APPLET = `<div class="applet-embed fa-conv"><iframe src="assets/applets/currency-converter.html" title="تطبيق تحويل العملات" scrolling="no" loading="eager"></iframe></div>`;
const S5_FB = `<p>كشفت لنا الآلة الحاسبة أن شرب المخفوق في تايلاند أوفر!</p>`;


/* ═══ component 02 · תרגול סטנדרטי · deck slides 39-48 ═══════════════
   One screen per deck slide (Elad 21.10); a question's parts share their
   stepper station and their picture sits on the same rect on every part.
   Stepper = 4 stations (slide 39 and every note say 4; the deck's stepper art
   has 5 and parks the dog park on 5 - Elad 21.10: 4). Hints: "רמז אחרי טעות
   ראשונה" on 40, 42-46, 48 -> two attempts; "ללא רמז" on 41, 47. The minus is
   the true minus everywhere (the deck mixes U+2013, '-' and U+2212). */
const MINUS = '−';
/* THE fraction - intro-func-01's approved `qfr` (.fraction.fr-inline), lifted as is */
const FRAC = (t, b) => `<span class="fraction fr-inline"><span class="frac-top">${t}</span><span class="frac-bottom">${b}</span></span>`;

const S40_STORY = `<p>توجد على الرف ${X} من الأكواب الزجاجية. سقطت 7 أكواب وانكسرت.</p>`;
/* decorative, not informative (Elad 21.10, dslides 28-34): no magnifier, and larger -
   every question photo of the component takes the same 400x470 rect */
const S40_PIC = `<img class="fa-qpic fa-qpic--deco" src="assets/img/glasses-kitchen.jpg" alt="مطبخ، وعلى الأرض بقايا كؤوس زجاجية مكسورة" data-no-zoom>`;
const S40_FB = `<p>كان هناك ${X} من الأكواب، نطرح 7 انكسرت، فنحصل على أنه بقي ${M('𝑥 ' + MINUS + ' 7')}.</p>`;
const S41_FB = `<p>الدالة ${M('𝑓(𝑥) = 𝑥 ' + MINUS + ' 7')} تصف عدد الأكواب التي بقيت على الرف.</p>`;

const S42_STORY = `<p>تسير مجموعة من المتنزهين بسرعة ثابتة مقدارها 4.5 كم/س.</p>
      <p>${X} يمثّل عدد الساعات التي مرّت منذ لحظة انطلاقهم.</p>`;
const S42_PIC = `<img class="fa-qpic fa-qpic--deco" src="assets/img/hikers-watch.jpg" alt="مجموعة من المتنزّهين على المسار، وساعة يد تظهر على شاشتها الحرف x" data-no-zoom>`;
const S43_FX = `<p class="q-part">الدالة التي تصف المسافة التي قطعها المتنزهون بعد ${X} ساعات من المشي:</p>
      <p><strong>${M('𝑓(𝑥) = 4.5𝑥')}</strong></p>`;
const S42_FB = `<p>إذا قطع المتنزهون 4.5 كم في ساعة واحدة، فسيقطعون ${M('4.5𝑥')} كم في ${X} ساعات.<br>الدالة المناسبة هي:</p>
  <p class="fa-eq">${M('𝑓(𝑥) = 4.5𝑥')}</p>`;
const S43_FB = `<p>العدد 4 يمثّل عدد الساعات، ولذلك فهو عنصر في المجال. أي، ${M('𝑥 = 4')}.</p>
  <p>سنعوّض في الدالة ونحصل على:</p><p class="fa-eq">${M('𝑓(4) = 4.5⋅4 = 18')}</p><p>قطع المتنزهون مسافة 18 كم.</p>`;
const S44_FB = `<p>المعطى 22.5 يصف المسافة التي قطعها المتنزهون، ولذلك هو عنصر في المدى. أي: ${M('𝑓(𝑥) = 22.5')}</p>
  <p>لإيجاد العنصر المقابل له في المجال، نحلّ:</p><p class="fa-eq">${M('4.5𝑥 = 22.5')}<br>${M('𝑥 = 5')}</p>
  <p>العنصر 5 في المجال يقابل 22.5 في المدى، ولذلك سار المتنزهون 5 ساعات.</p>`;

const S45_STORY = `<p>جنى لاعبة كرة سلة في دوري السيدات. ستبدأ مباراة النهائي قريبًا.</p>
      <p>من المعروف أنّ جنى سجّلت 349 نقطة خلال الموسم (حتى مباراة النهائي).</p>
      <p>سنرمز بالرمز ${X} إلى عدد النقاط التي ستسجّلها جنى في المباراة النهائية نفسها.</p>`;
const S45_PIC = `<img class="fa-qpic fa-qpic--deco" src="assets/img/basketball-eden.jpg" alt="لاعبة كرة سلة تمسك كرة في صالة رياضية" data-no-zoom>`;
const S45_FB = `<p>إذا كان لدى جنى 349 نقطة وستسجّل ${X} أخرى، فستكون الدالة:</p><p class="fa-eq">${M('𝑓(𝑥) = 349 + 𝑥')}</p>`;
const S46_FB = `<p>لكي يتساوى عدد نقاطها مع عدد نقاط لانا على جنى أن تجمع 374 نقطة. أي: ${M('𝑓(𝑥) = 374')}</p>
  <p>نعوّض في الدالة ونحصل على: ${M('374 = 349 + 𝑥')}</p>
  <p>نحلّ فنحصل على أنه يجب على جنى تسجيل 25 نقطة كي تتعادل مع لانا.</p>`;

/* deck 47-48: the rectangle / triangle words carry the colours of their outlines
   in the picture (cyan / green), as the deck sets them */
const S47_STORY = `<p>في المتنزه البلدي توجد حديقة للكلاب على شكل <strong class="fa-rect-word">مستطيل</strong>، طولها 15 م وعرضها 10 م.</p>
      <p>قررت البلدية توسيع الحديقة بواسطة <strong>إضافة مساحة</strong> على شكل <strong class="fa-tri-word">مثلث</strong> قائم الزاوية، تكون ملاصقة للحديقة الحالية.</p>
      <p>أحد ضلعَي الزاوية القائمة في المثلث طوله 10 م، أما طول الضلع القائم الثاني فغير معروف.</p>`;
const S48_STORY = `<p>في المتنزه البلدي توجد حديقة للكلاب على شكل <strong class="fa-rect-word">مستطيل</strong>، طولها 15 م وعرضها 10 م.</p>
      <p>قررت البلدية توسيع الحديقة بواسطة <strong>إضافة</strong> على شكل <strong class="fa-tri-word">مثلث</strong> قائم الزاوية، طول أحد ضلعيه القائمين 10 م. طول الضلع القائم الثاني غير معروف.</p>
      <p><strong>${X} يمثّل طول الضلع القائم الثاني.</strong></p>`;
/* deck 48's notes: hovering each shape highlights it and shows its area formula
   inside it (the triangle's as a fraction). Regions in the picture's own px
   (1938x811); a tap / focus does the same, for touch boards and keyboards. */
/* the picture zooms (Elad 21.10) at its full 1938px: the approved 44px chip in a
   band ABOVE it (unit rule), placed by hand on both screens - the engine's wrapper
   would sit between the picture and its hover shapes */
const DOG_PARK = (hover) => `<div class="fa-zoom-band"><button type="button" class="applet-zoom-btn img-zoom-btn" aria-label="تكبير الصورة"
    onclick="const i=this.parentNode.nextElementSibling.querySelector('img');quizImageZoomOpen(i.src,i.alt,i)">${ZOOM_GLYPH}</button></div>
<div class="fa-dog">
  <img src="assets/img/dog-park.jpg" alt="منظر من الأعلى لحديقة كلاب: مستطيل 15 × 10 أمتار ومثلث قائم الزاوية ملاصق له، قاعدته x متر" data-no-zoom>
  ${hover ? `<svg class="fa-dog-svg" viewBox="0 0 1938 811" aria-hidden="true">
    <polygon class="fa-shape" data-shape="rect" points="214,96 1172,96 1172,618 214,618"/>
    <polygon class="fa-shape" data-shape="tri" points="1180,96 1180,618 1776,618"/>
  </svg>
  <button type="button" class="fa-shape-hit" data-shape="rect" aria-label="مساحة المستطيل: الطول ضرب العرض" style="left:11.04%;top:11.84%;width:49.43%;height:64.36%"
    onmouseenter="faShape(this,1)" onmouseleave="faShape(this,0)" onfocus="faShape(this,1)" onblur="faShape(this,0)" onclick="faShape(this,2)">
    <span class="fa-formula-tip"><strong>مساحة المستطيل:</strong><br>الطول × العرض</span></button>
  <button type="button" class="fa-shape-hit" data-shape="tri" aria-label="مساحة المثلث: القاعدة ضرب الارتفاع، مقسومًا على 2" style="left:60.89%;top:11.84%;width:30.75%;height:64.36%"
    onmouseenter="faShape(this,1)" onmouseleave="faShape(this,0)" onfocus="faShape(this,1)" onblur="faShape(this,0)" onclick="faShape(this,2)">
    <span class="fa-formula-tip"><strong>مساحة المثلث:</strong><br>${FRAC('القاعدة × الارتفاع', '2')}</span></button>` : ''}
</div>
${hover ? `<p class="fa-dog-cue"><span>مرّروا الفأرة فوق الأشكال وتذكّروا قوانين حساب المساحة</span><svg class="fa-hand" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11.2V5a1.5 1.5 0 0 1 3 0v5.2h.4V3.8a1.5 1.5 0 0 1 3 0v6.4h.4V5.5a1.5 1.5 0 0 1 3 0v8.7c0 4-2.6 7.3-6.5 7.3-2.5 0-4.2-1.1-5.6-3.1L3.5 14a1.4 1.4 0 0 1 2.2-1.8L9 15.4z" fill="currentColor"/></svg></p>` : ''}`;
const S47_FB = `<p>${X} هو المتغيّر المجهول، أي طول الضلع القائم الثاني.<br>${FX} يمثّل ما يُطلب منا إيجاده، أي مساحة الحديقة.</p>`;
const S48_FB = `<p>مساحة المثلث هي حاصل ضرب الضلعين القائمين مقسومًا على 2، أي <span class="m" dir="ltr">${FRAC('10𝑥', '2')}</span>.<br>مساحة المستطيل هي 150 م².</p>
  <p>المساحة الكلية هي مجموع هاتين المساحتين، ولذلك:</p>
  <p class="fa-eq"><span class="m" dir="ltr">𝑓(𝑥) = ${FRAC('10𝑥', '2')} + 150</span></p>
  <p>بعد اختزال الكسر نحصل على:</p><p class="fa-eq">${M('𝑓(𝑥) = 5𝑥 + 150')}</p>`;


/* ═══ component 03 · תרגול בסיסי וסטנדרטי · deck slides 50-62 ══════════
   As component 02 (Elad 21.10): one screen per deck slide, a stepper per set
   (basic = 4 stations, standard = 2), two attempts (no note states a count),
   decorative photos without a magnifier in the shared 400x470 rect. Hints per
   the notes: always on 51-53 and 55-58, none on 54, after a first wrong on 60-62. */
/* a select's option text cannot hold markup: an equation in it is wrapped in
   LRI ... PDI so it reads left to right inside the RTL list */
const LTR = (t) => '⁦' + t + '⁩';
const DECO = (src, alt) => `<img class="fa-qpic fa-qpic--deco" src="assets/img/${src}" alt="${alt}" data-no-zoom>`;

const S51_STORY = (more) => `<p>لدى أدهم مجموعة من بطاقات الأنمي.</p>
      <p>كان لديه ${X} من البطاقات وربح ${more} في لعبة مع أصدقائه.</p>`;
const S51_PIC = DECO('anime-cards.jpg', 'مجموعة بطاقات الأنمي');
const S51_FB = `<p>كان لدى أدهم ${X} من البطاقات وأضاف إليها 4، ولذلك أصبح لديه ${M('𝑥 + 4')} من البطاقات.</p>`;
const S52_FB = `<p>عدد البطاقات الكلي هو ${M('𝑥 + 4')} ولذلك: ${M('𝑓(𝑥) = 𝑥 + 4')}</p>`;
const S53_FB = `<p>وفقًا للتعبير، كانت في البداية كمية ${X}، ثم طُرح منها 12.</p>`;

const S54_STORY = `<p>زيّنت ريم الغرفة بـ 35 بالونًا لحفلة عيد ميلادها.</p>
      <p>أثناء انتظارها للضيوف، لعبت القطة ميمي في الغرفة وفجّرت ${X} من البالونات.</p>`;
const S54_PIC = DECO('balloons-cat.jpg', 'قطة تقفز بين بالونات ملوّنة في غرفة مزيّنة');
/* the deck's paragraph break splits "ופוצצה" in the correct box - kept whole (KICKOFF) */
const S54_FB = `<p>في السؤال مكتوب "لعبت القطة ميمي في الغرفة وفجّرت ${X} من البالونات".</p>`;
const S55_FB = `<p>في بداية القصة يوجد 35 بالونًا، ويجب أن نطرح منها ${X}.<br>نحصل على: ${M('𝑓(𝑥) = 35 ' + MINUS + ' 𝑥')}</p>`;
const S56_FB = `<p>${M('𝑥 = 7')}.<br>نعوّض به في الصيغة، وسنكتشف أن:</p><p class="fa-eq">${M('𝑓(7) = 35 ' + MINUS + ' 7 = 28')}</p>`;
/* deck 55: the bank right -> left as drawn (physical L->R "−, 𝑥, 35"); the
   equation is LTR, so zone 0 is the LEFTMOST slot */
const S55_LAYOUT = `<div class="fa-eqdnd" dir="ltr"><span class="fa-eqdnd-lhs">${M('𝑓(𝑥) =')}</span>{{0}}{{1}}{{2}}</div>`;

const S57_STORY = `<p><strong>أنا الساحرة العظيمة. أستطيع قراءة الأفكار.</strong></p>
      <p>1. اختاروا عددًا ولا تخبروني ما هو.</p>
      <p>2. اضربوا العدد في نفسه.</p>
      <p>3. أضيفوا 6.</p>
      <p>ستخبرونني ما هي النتيجة التي حصلتم عليها، وأنا سأكتشف ما هو العدد الذي اخترتموه...</p>`;
const S57_PIC = DECO('magician.jpg', 'ساحرة مغمضة العينين وأصابعها على صدغيها');
const S57_FB = `<p>سنضرب العدد ${X} في نفسه فنحصل على ${M('𝑥²')}، ثم نضيف 6.</p>`;
const S58_FB = `<p>النتيجة التي حصل عليها الطالب هي 150:</p>
  <p class="fa-eq">${M('𝑓(𝑥) = 150')}</p>
  <p>سنعوّض في المعادلة ونحلّ:</p>
  <p class="fa-eq">${M('150 = 𝑥² + 6')}<br>${M('150 ' + MINUS + ' 6 = 𝑥²')}<br>${M('144 = 𝑥²')}<br>${M('𝑥 = √144 = 12')}</p>
  <p>أي أن العدد الذي اختاره الطالب هو 12.</p>`;

const S60_STORY = `<p>قرّروا في بلدة "دوخيفات" بناء حي جديد.</p>
      <p>في كل شهر، يُنهي المقاول بناء 6 بيوت إضافية.</p>`;
const S60_PIC = DECO('neighbourhood.jpg', 'منظر من الأعلى لحي سكني جديد');
const S60_FB = `<p>وفقًا لمعطيات السؤال، تُضاف في كل شهر 6 بيوت جديدة، ولذلك بعد شهر واحد سيكون في الحي 6 بيوت.</p>`;
const S61_FB = `<p>إذا أُضيفت 6 بيوت كل شهر، فبعد ${X} أشهر سيكون هناك ${M('6𝑥')} بيوت جديدة.</p>`;
/* deck 62's feedback types "𝑥120" (a bidi slip) - built as 120𝑥 (KICKOFF) */
const S62_FB = `<p>في كل أسبوع وفّرت ياسمين 120 ₪.<br>بعد ${X} أسابيع، وفّرت ياسمين ${M('120𝑥')} ₪ من عملها كجليسة أطفال.</p>
  <p>سنضيف مبلغ المال الذي كان معها في البداية - 340 ₪، فنحصل على:</p><p class="fa-eq">${M('𝑓(𝑥) = 120𝑥 + 340')}</p>
  <p><strong>في البند ب،</strong> نعوّض 21 مكان ${X}، ونحصل على أن المبلغ 2,860 كان كافيًا لشراء الهاتف.</p>`;


/* ═══ component 05 · תרגול מתקדם · deck slides 70-79 ═════════════════
   As components 02-03: one screen per deck slide, a 4-station stepper, two
   attempts; hints after a first wrong answer on 71 and 73-77, none on 72, 78, 79. */

/* deck 71-72: the garden lot. The notes ask for a yellow square on the photo
   (the deck draws it as a dashed shape) and, on 72, the fence on its bottom
   edge. Both are laid over the picture in its own proportions (872x542). */
const GARDEN = (fence) => `<div class="fa-garden">
  <img src="assets/img/garden-lot.jpg" alt="منظر من الأعلى لحي سكني، وفيه قطعة أرض فارغة مُعلَّمة بمربّع أصفر" data-no-zoom>
  <svg class="fa-garden-svg" viewBox="0 0 872 542" aria-hidden="true"><rect x="251" y="161" width="239" height="215" fill="none" stroke="#FFFF00" stroke-width="7" stroke-dasharray="22 12"/></svg>
  ${fence ? `<img class="fa-fence" src="assets/img/fence.png" alt="سياج عالٍ على امتداد الضلع السفلي للقطعة" data-no-zoom>` : ''}
</div>`;
const S71_STORY = `<p>تقرر في حيّ سكني جديد تخصيص مساحة على شكل مربع لإقامة حديقة عامة لراحة السكان.</p>
      <p>طول ضلع المربع هو ${X} متر. نرمز بالرمز ${FX} إلى مساحة الحديقة.</p>`;
const S71_FB = (verb) => `<p>${verb} مساحة المربع بضرب الطول في العرض.<br>كل أضلاع المربع متساوية، ولذلك فإن مساحته هي:</p>
  <p class="fa-eq">${M('𝑓(𝑥) = 𝑥⋅𝑥 = 𝑥²')}</p>`;
const S72_FB = `<p>مساحة الحديقة هي 441 م².<br>ضلع الحديقة هو ${M('√441')}، أي 21 م.<br>سياج طوله 20 م سيكون قصيرًا جدًا ولذلك <strong>لا يناسب</strong>.</p>`;

const S73_STORY = `<p>طلى الأخوان سلمى وسامر سياجًا معًا خلال يومين.</p>
      <p>في نهاية اليوم الأول، طلت سلمى 6 أمتار أكثر من سامر.</p>
      <p>رمّزوا بـ ${X} إلى عدد الأمتار التي طلاها سامر في اليوم الأول.</p>`;
const S73_FX = (lead) => `<p class="q-part"><strong>${lead}</strong> التي تعبّر بواسطة ${X} عن طول السياج الذي طُلي في اليوم الأول:</p>
      <p class="fa-eq">${M('𝑓(𝑥) = 2𝑥 + 6')}</p>`;
/* five LTR slots after f(x) = ; the bank wraps in two rows like the deck's
   (3 tiles on top, 4 under - wrap-reverse puts the first 4 on the bottom row) */
const EQ5 = `<div class="fa-eqdnd" dir="ltr"><span class="fa-eqdnd-lhs">${M('𝑓(𝑥) =')}</span>{{0}}{{1}}{{2}}{{3}}{{4}}</div>`;
const S73_FB_OK = `<p>طول السياج الذي طلاه سامر - ${X}<br>طول السياج الذي طلته سلمى - ${M('𝑥 + 6')}<br>طول السياج كله هو مجموع الطولين:</p>
  <p class="fa-eq">${M('𝑓(𝑥) = 𝑥 + 6 + 𝑥')}</p><p>نجمع الحدود المتشابهة فنحصل على:</p><p class="fa-eq">${M('𝑓(𝑥) = 2𝑥 + 6')}</p>`;
const S73_FB_NO = `<p>طول السياج الذي طلاه سامر: ${X}<br>طول السياج الذي طلته سلمى: ${M('𝑥 + 6')}<br>طول السياج كله هو مجموع الطولين:</p>
  <p class="fa-eq">${M('𝑓(𝑥) = 𝑥 + 6 + 𝑥')}</p><p>نجمع الحدود المتشابهة فنحصل على:</p><p class="fa-eq">${M('𝑓(𝑥) = 2⋅𝑥 + 6')}</p>`;
const S74_FB = `<p>طلت سلمى وسامر 60 م من السياج في يومين.<br>في كل يوم طليا 30 م.<br>القيمة 30 هي عنصر في مدى الدالة، ولذلك:</p>
  <p class="fa-eq">${M('𝑓(𝑥) = 30')}</p><p>نعوّض ونحصل على:</p><p class="fa-eq">${M('30 = 2𝑥 + 6')}</p><p>سنحلّ ونحصل على:</p><p class="fa-eq">${M('𝑥 = 12')}</p>`;
const S75_FB = (verb) => `<p>طول السياج 270 م، وفي كل يوم ${verb} 30 م منه.</p><p>نقسم طول السياج على 30 ونحصل على:</p>
  <p class="fa-eq"><span class="m" dir="ltr">${FRAC('270', '30')} = 9</span></p>`;

const S76_STORY = `<p>خرج هادي في رحلة إلى النقب، في مسار طوله 300 كم.</p>
      <p>في كل يوم مشى مقطعًا طوله 13 كم.</p>
      <p>نرمز بالحرف ${X} إلى عدد الأيام التي مضت منذ بداية المسار.</p>`;
/* taller than the shared 470 (Elad 21.10, dslide 59) - the trail is a portrait photo */
const S76_PIC = DECO('negev-trail.jpg', 'منظر من الأعلى لصحراء ومسار مشي مُعَلَّم').replace('fa-qpic--deco', 'fa-qpic--deco fa-qpic--tall');
const S76_FB = `<p>في البداية تبقّى لهادي 300 كم.<br>بعد ${X} أيام قطع ${M('13𝑥')} كم.<br>عدد الكيلومترات المتبقية له هو:</p>
  <p class="fa-eq">${M('𝑓(𝑥) = 300 ' + MINUS + ' 13𝑥')}</p>`;
/* deck 77: "23.07" - 300/13 = 23.0769..., so 23.08 (KICKOFF) */
const S77_FB = `<p>في نهاية المسار يتبقّى لهادي أن يمشي <strong>0 كم.</strong><br>نعوّض ${M('𝑓(𝑥) = 0')} ونحصل على معادلة:</p>
  <p class="fa-eq">${M('0 = 300 ' + MINUS + ' 13𝑥')}</p>
  <p>حل المعادلة يعطي عددًا غير صحيح هو 23.08.<br>أي أننا نحتاج إلى أكثر من 23 يومًا لإنهاء المسار، لكن أقل من 24.</p>
  <p><strong>الاستنتاج: خلال اليوم الـ 24 سيُنهي هادي المسار.</strong></p>`;

/* deck 78-79: the graph REDRAWN (notes: "יש לעצב מחדש את הגרף") from the story's
   data - II = Yoko 20 -> 0 in 20 days, I = Ono 14 -> 0 in 28 days, both from day 0;
   the y-axis reads מספר השקים (the art said משקל האורז - KICKOFF) */
const S78_GRAPH = `<img class="fa-graph" src="assets/img/rice-graph.png" alt="رسم بياني لخطين مستقيمين متجهين إلى الأسفل: الخط II يبدأ من نقطة مرتفعة وينخفض بسرعة، والخط I يبدأ من نقطة أقل ارتفاعًا وينخفض ببطء. المحور y يمثّل عدد الأكياس، والمحور x يمثّل عدد الأيام التي مرّت">`;
const S78_STORY = `<p>تلقّى مطعمان في بداية الشهر شحنة من أكياس الأرز.</p>
      <p>حصل <strong>مطعم Yoko</strong> على 20 كيس أرز، ويستخدم كيسًا واحدًا من الأرز كل يوم.</p>
      <p>حصل <strong>مطعم Ono</strong> على 14 كيس أرز، ويستخدم كيسًا واحدًا من الأرز كل يومين.</p>`;
const S78_FB = `<p>يبدأ مطعم Yoko بـ 20 كيسًا، ويبدأ مطعم Ono بـ 14 كيسًا.</p>`;
const S79_FB = `<p>يبدأ مطعم Yoko بـ 20 كيسًا وفي كل يوم ينقص من مخزونه كيس واحد:</p><p class="fa-eq">${M('ℎ(𝑥) = 20 ' + MINUS + ' 𝑥')}</p>
  <p>يبدأ مطعم Ono بـ 14 كيسًا، ويقل مخزونه بمقدار كيس واحد كل يومين، أي ما يعادل نصف كيس كل يوم:</p><p class="fa-eq">${M('𝑗(𝑥) = 14 ' + MINUS + ' 0.5𝑥')}</p>`;
const ROW = (fx) => `<span class="fa-ddrow-fx">${M(fx)}</span> تتوافق مع الرسم البياني `;


/* ═══ component 06 · שאלת הערכה (תאילנד) · deck slides 81-84 ═══════════
   One screen per deck slide, as every component of this unit (the notes'
   "גלילה לאורך כל סעיפי השאלה" - Elad's choice for 02 applied); no stepper (a
   peak question, as in 23.1); 2 attempts. The exchange photo fills the left
   column full height as drawn; its sign is large and legible, so no magnifier. */
const BLEED = (src, alt) => `<img class="fa-bleed" src="assets/img/${src}" alt="${alt}" data-no-zoom>`;
const PILL = (t) => `<p class="fa-secpill"><span>${t}</span></p>`;
const LETTER = (l) => `<strong class="fa-letter">${l}.</strong>`;
const S82_PIC = BLEED('money-exchange-sign.jpg', 'لافتة تحويل العملات: دولار واحد يساوي 33 بات، ودولار واحد يساوي 3 شواكل.');
const S84_PIC = BLEED('money-phones.jpg', 'يدان تمسكان هاتفين، على شاشة أحدهما رمز البات وعلى شاشة الآخر رمز الشيكل، وفي الخلفية لافتة لتحويل العملات');
/* deck 82 / 88: the hint's table of values (the deck's own rtl table) */
const HINT_TABLE = (head, rows) => `<p>أكملوا جدول القيم لإيجاد قاعدة الدالة:</p>
  <table class="car-table fa-hint-table"><thead><tr><th>${head[0]}</th><th>${head[1]}</th></tr></thead>
  <tbody>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table>`;
const S82_FB = (we) => `<p>عند التحويل من البات إلى الدولار ${we} نبدأ بالعدد 33 ويجب أن نحصل على 1.<br>العملية المناسبة هي القسمة على 33:</p>
  <p class="fa-eq"><span class="m" dir="ltr">𝑓(𝑥) = ${FRAC('𝑥', '33')}</span></p>`;
const S83_FB = `<p>عند التحويل من الدولار إلى الشيكل نبدأ بـ 1، ويجب أن نحصل على 3.<br>العملية المناسبة هي الضرب في 3:</p><p class="fa-eq">${M('𝑔(𝑥) = 3𝑥')}</p>`;
/* deck 84: both popups said "הסכום שקיבלנו, 1,428 דולר" and the wrong one opened
   with 𝑓(47,124) - leftovers of another number set; built with 14,025 -> 425 (KICKOFF) */
const S84_FB = `<p>أولًا سنحوّل من البات إلى الدولار. سنعوّض في الدالة بالمبلغ بالبات، 14,025، ونحصل على:</p>
  <p class="fa-eq"><span class="m" dir="ltr">𝑓(14,025) = ${FRAC('14,025', '33')} = 425</span></p>
  <p>بعد ذلك نحوّل من الدولار إلى الشيكل. نعوّض في الدالة المبلغ الذي حصلنا عليه، <strong>425 دولارًا</strong>، ونحصل على:</p>
  <p class="fa-eq">${M('𝑔(425) = 3⋅425 = 1,275')}</p>
  <p>لذلك يكلّف الهاتف في تايلاند 1,275 شيكلًاًًاا، مقابل 1,300 شيكل في البلاد.</p>`;
const FCARD = (cap, fx) => `<div class="fa-fcard"><p class="fa-fcard-cap">${cap}</p><p class="fa-fcard-fx">${fx}</p></div>`;


/* ═══ component 07 · שאלת הערכה (פריז) · deck slides 86-89 ═════════════
   As component 06: one screen per slide, no stepper, 2 attempts, the airport
   photo full height on the left, fraction dropdowns where the options divide. */
const S87_PIC = BLEED('airport-exchange.jpg', 'لافتة تحويل العملات: 1 دولار يساوي 3 شواكل، و1 يورو يساوي 3.5 شواكل.');
const S87_STORY = (ask) => `<p>يسافر هارون ويوسف إلى باريس، حيث يستخدمون عملة اليورو €.</p>
      <p>في المطار توجد لافتة لتحويل العملات: 1 دولار = 3 ₪، 1 يورو = 3.5 ₪.</p>
      <p>هارون: ميزانيتي للرحلة هي 1,200 € (يورو).</p>
      <p>يوسف: ميزانيتي للرحلة هي 1,500 $ (دولار).</p>
      ${ask ? `<p><strong>كم تساوي ميزانية يوسف باليورو؟</strong></p>` : ''}`;
const S87_FB = `<p>كل دولار يساوي 3 شواكل.<br>إذا كان لدينا مثلًا 5 دولارات، فهي تساوي 15 ₪، لذلك الدالة المناسبة هي:</p><p class="fa-eq">${M('𝑓(𝑥) = 3𝑥')}</p>`;
const S88_FB = `<p>عند التحويل من الشيكل إلى اليورو، نبدأ بـ 3.5 ونريد الحصول على 1.<br>العملية المناسبة هي القسمة على 3.5:</p>
  <p class="fa-eq"><span class="m" dir="ltr">𝑔(𝑥) = ${FRAC('𝑥', '3.5')}</span></p>`;
const S89_FB = `<p>أولًا، سنحوّل من الدولار إلى الشيكل.<br>سنعوّض في الدالة المبلغ بالدولار، فنحصل على:</p>
  <p class="fa-eq">${M('𝑓(1,500) = 3⋅1,500 = 4,500')}</p>
  <p>بعد ذلك سنحوّل الشيكل إلى اليورو. سنعوّض في الدالة المبلغ بالشيكل، ونحصل على:</p>
  <p class="fa-eq"><span class="m" dir="ltr">𝑔(4,500) = ${FRAC('4,500', '3.5')} = 1,285.7</span></p>
  <p>بعد أن نقرّب الإجابة إلى عدد صحيح، سنحصل على 1,286 يورو.</p>`;

const QUESTIONS = [
  /* ═══ screen 2 · deck slide 5 · converter + "where is the shake cheaper" ═══
     Notes: "אין רמז", attempts not stated - two options, so ONE attempt
     (maven §1i). Key = تايلاند (#00B050 radio + pill border; the feedback;
     70 x 0.0911 = 6.38 < 35). Options right -> left as rendered. */
  {
    screen: 2,
    type: 'single',
    stem: `<p class="q-ask"><strong>كم هو سعر المخفوق فعلًا؟</strong></p>
      <p class="q-part"><strong>أ. أدخلوا 70 بات في الآلة الحاسبة واكتشفوا كم تساوي بالشيكل</strong></p>
      <p class="q-part"><strong>ب. يكلّف مخفوق المانجو في إسرائيل نحو 35 ₪. في أي دولة يكون المخفوق أرخص؟</strong></p>`,
    content: S5_APPLET,
    options: [
      { id: 'a', html: 'إسرائيل' },
      { id: 'b', html: 'تايلاند' },
    ],
    correct: 'b',
    maxAttempts: 1,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S5_FB },
      wrong:   { title: 'العكس هو الصحيح.', body: S5_FB },
    },
  },

  /* ═══ screen 28 · deck slide 40 · Q1 א (glasses) ═══ key 𝑥 − 7 (green radio = feedback) */
  {
    screen: 28,
    step: { group: 'c02', index: 1, total: 4 },
    type: 'single',
    stem: `${S40_STORY}
      <p class="q-ask q-part"><strong>أ. ما التعبير الجبري الذي يصف عدد الأكواب التي بقيت على الرف؟</strong></p>`,
    content: S40_PIC,
    options: [
      { id: 'a', html: M('𝑥 + 7') },
      { id: 'b', html: M('𝑥 ' + MINUS + ' 7') },
      { id: 'c', html: M('𝑥') },
      { id: 'd', html: M('7𝑥') },
    ],
    correct: 'b',
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>كم كوبًا كان في البداية؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S40_FB },
      wrong:   { title: 'غير دقيق.', body: S40_FB },
    },
  },

  /* ═══ screen 29 · deck slide 41 · Q1 ב ═══ key 𝑓(𝑥) = 𝑥 − 7. Notes: "ללא רמז". */
  {
    screen: 29,
    step: { group: 'c02', index: 1, total: 4 },
    type: 'single',
    stem: `${S40_STORY}
      <p class="q-ask q-part"><strong>ب. أيّ مما يلي يصف دالة تحسب عدد الأكواب المتبقية على الرف إذا كان عليه في البداية ${X} من الأكواب؟</strong></p>`,
    content: S40_PIC,
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 𝑥 ' + MINUS + ' 7') },
      { id: 'b', html: M('𝑓(𝑥) = 7 ' + MINUS + ' 𝑥') },
      { id: 'c', html: M('𝑓(𝑥) = 𝑥 + 7') },
    ],
    correct: 'a',
    maxAttempts: 2,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S41_FB },
      wrong:   { title: 'غير دقيق.', body: S41_FB },
    },
  },

  /* ═══ screen 30 · deck slide 42 · Q2 א (hikers) ═══ key 𝑓(𝑥) = 4.5𝑥 */
  {
    screen: 30,
    step: { group: 'c02', index: 2, total: 4 },
    type: 'single',
    stem: `${S42_STORY}
      <p class="q-ask q-part"><strong>أ. ما هي الدالة التي تصف المسافة التي قطعها المتنزهون بعد ${X} ساعات من المشي؟</strong></p>
      <p>استخدموا الصيغة: حاصل ضرب الزمن في السرعة يساوي المسافة.</p>`,
    content: S42_PIC,
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 4.5 ' + MINUS + ' 𝑥') },
      { id: 'b', html: M('𝑓(𝑥) = 4.5 + 𝑥') },
      { id: 'c', html: M('𝑓(𝑥) = 4.5𝑥') },
    ],
    correct: 'c',
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>السرعة 4.5 كم/س تعني أنهم قطعوا 4.5 كم في كل ساعة.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S42_FB },
      wrong:   { title: 'غير دقيق. إليكم التوضيح:', body: S42_FB },
    },
  },

  /* ═══ screen 31 · deck slide 43 · Q2 ב ═══ the box inside the sentence; key 18
     (notes = green box = feedback; 4.5 x 4 = 18) */
  {
    screen: 31,
    step: { group: 'c02', index: 2, total: 4 },
    type: 'value-input',
    stem: `${S42_STORY}
      ${S43_FX}`,
    sentence: ['<strong class="fa-ask">ب. إذا مشى المتنزهون 4 ساعات فإنهم قطعوا</strong> ', ' <strong class="fa-ask">كم.</strong>'],
    inputLabels: ['المسافة بالكيلومترات'],
    correctInputs: ['18'],
    content: S42_PIC,
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>عوّضوا المعطيات في الدالة.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S43_FB },
      wrong:   { title: 'هذا خطأ. لا بأس، الإجابة الصحيحة معروضة.', body: S43_FB },
    },
  },

  /* ═══ screen 32 · deck slide 44 · Q2 ג ═══ key 5 (4.5𝑥 = 22.5). The deck's hint
     repeats 43's word for word (KICKOFF). */
  {
    screen: 32,
    step: { group: 'c02', index: 2, total: 4 },
    type: 'value-input',
    stem: `${S42_STORY}
      ${S43_FX}
      <p class="q-ask q-part"><strong>ج. أكملوا:</strong></p>`,
    sentence: ['قطع المتنزهون 22.5 كم، ولذلك مشوا ', ' ساعات.'],
    inputLabels: ['عدد الساعات'],
    correctInputs: ['5'],
    content: S42_PIC,
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>عوّضوا المعطيات في الدالة.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S44_FB },
      wrong:   { title: 'هذا خطأ، الإجابة الصحيحة معروضة.', body: S44_FB },
    },
  },

  /* ═══ screen 33 · deck slide 45 · Q3 א (basketball) ═══ key 𝑓(𝑥) = 349 + 𝑥.
     Option 1 types "349 x" with a space - built as the product 349𝑥 (KICKOFF). */
  {
    screen: 33,
    step: { group: 'c02', index: 3, total: 4 },
    type: 'single',
    stem: `${S45_STORY}
      <p class="q-ask q-part"><strong>أ. ما هي الدالة التي تقابل بين قيمة ${X} وبين العدد الكلي للنقاط التي ستجمعها جنى في الموسم كله؟</strong></p>`,
    content: S45_PIC,
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 349𝑥') },
      { id: 'b', html: M('𝑓(𝑥) = 349 + 𝑥') },
      { id: 'c', html: M('𝑓(𝑥) = 𝑥 ' + MINUS + ' 349') },
    ],
    correct: 'b',
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>كان لدى جنى بالفعل 349 نقطة.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S45_FB },
      wrong:   { title: 'هذا خطأ، إليكم الشرح:', body: S45_FB },
    },
  },

  /* ═══ screen 34 · deck slide 46 · Q3 ב ═══ key 25 (374 − 349); the unit word
     نقاط to the box's LEFT, as drawn */
  {
    screen: 34,
    step: { group: 'c02', index: 3, total: 4 },
    type: 'value-input',
    stem: `${S45_STORY}
      <p class="q-part"><strong>الدالة</strong> التي تقابل بين ${X} وبين العدد الكلي لنقاط جنى هي: ${M('𝑓(𝑥) = 349 + 𝑥')}</p>
      <p class="q-ask q-part"><strong>ب. بطلة النقاط في النادي هي لانا التي سجّلت 374 نقطة في موسم واحد، ولن تشارك في المباراة النهائية.</strong></p>
      <p class="q-ask q-part"><strong>كم نقطة يجب أن تسجّل جنى كي يتساوى مجموع نقاطها في الموسم مع مجموع نقاط لانا؟</strong></p>`,
    sentence: ['', ' نقاط'],
    inputLabels: ['عدد النقاط'],
    correctInputs: ['25'],
    content: S45_PIC,
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>استعينوا بالدالة التي وجدناها في البند السابق:</p><p class="fa-eq">${M('𝑓(𝑥) = 349 + 𝑥')}</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S46_FB },
      wrong:   { title: 'هذا تمرين معقّد قليلًا، تعلّموا من الخطأ:', body: S46_FB },
    },
  },

  /* ═══ screen 35 · deck slide 47 · Q4 א (dog park) ═══ dropdown, pool in the
     notes' order; key طول الضلع القائم الثاني. Notes: "ללא רמז". */
  {
    screen: 35,
    step: { group: 'c02', index: 4, total: 4 },
    type: 'dropdown',
    stem: `${S47_STORY}
      <p class="q-ask q-part"><strong>أ. أكملوا:</strong></p>`,
    content: DOG_PARK(false),
    sentence: [`${X} يمثّل `, ''],
    blanks: [{ pool: ['مساحة الحديقة', 'طول الضلع القائم الثاني', 'عرض المستطيل'], correct: 'طول الضلع القائم الثاني' }],
    maxAttempts: 2,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S47_FB },
      wrong:   { title: 'ليس تمامًا، هكذا ستنجحون:', body: S47_FB },
    },
  },

  /* ═══ screen 36 · deck slide 48 · Q4 ב ═══ key 𝑓(𝑥) = 150 + 5𝑥 (150 + 10𝑥/2).
     The shapes in the picture show their area formula on hover / tap (notes). */
  {
    screen: 36,
    step: { group: 'c02', index: 4, total: 4 },
    type: 'single',
    stem: `${S48_STORY}
      <p class="q-ask q-part"><strong>ب. ما هي الدالة المناسبة لحساب مساحة الحديقة كلها؟</strong></p>`,
    content: DOG_PARK(true),
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 150 + 10𝑥') },
      { id: 'b', html: M('𝑓(𝑥) = 5𝑥') },
      { id: 'c', html: M('𝑓(𝑥) = 150 + 5𝑥') },
    ],
    correct: 'c',
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>مساحة الحديقة تتكوّن من مجموع مساحتي المثلث والمستطيل.<br>مرّروا مؤشر الفأرة فوق الأشكال وتذكّروا قوانين حساب المساحة.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S48_FB },
      wrong:   { title: 'ليس تمامًا، هكذا ستنجحون:', body: S48_FB },
    },
  },

  /* ═══ screen 38 · deck slide 51 · basic Q1 א (cards) ═══ key 𝑥 + 4 */
  {
    screen: 38,
    step: { group: 'c03a', index: 1, total: 4 },
    type: 'single',
    stem: `${S51_STORY('4 بطاقات إضافية')}
      <p class="q-ask q-part"><strong>أ. كم بطاقة لديه الآن؟</strong></p>`,
    content: S51_PIC,
    options: [
      { id: 'a', html: M('4 ' + MINUS + ' 𝑥') },
      { id: 'b', html: M('𝑥 ' + MINUS + ' 4') },
      { id: 'c', html: M('𝑥 + 4') },
      { id: 'd', html: M('4𝑥') },
    ],
    correct: 'c',
    maxAttempts: 2,
    hintPolicy: 'immediate',
    hint: { body: `<p>ما هي العملية الحسابية بين 4 و${X}؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S51_FB },
      wrong:   { title: 'الإجابة غير صحيحة.', body: S51_FB },
    },
  },

  /* ═══ screen 39 · deck slide 52 · basic Q1 ב ═══ key 𝑓(𝑥) = 𝑥 + 4. The stem's
     wording differs from 51 (עוד 4 / 4 נוספים) - each kept as its slide writes it. */
  {
    screen: 39,
    step: { group: 'c03a', index: 1, total: 4 },
    type: 'single',
    stem: `${S51_STORY('4 بطاقات أخرى')}
      <p class="q-ask q-part"><strong>ب. أيّ من الدوال الآتية تصف العدد الكلي للبطاقات التي لدى أدهم؟</strong></p>`,
    content: S51_PIC,
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 4𝑥') },
      { id: 'b', html: M('𝑓(𝑥) = 𝑥 ' + MINUS + ' 4') },
      { id: 'c', html: M('𝑓(𝑥) = 4 ' + MINUS + ' 𝑥') },
      { id: 'd', html: M('𝑓(𝑥) = 𝑥 + 4') },
    ],
    correct: 'd',
    maxAttempts: 2,
    hintPolicy: 'immediate',
    hint: { body: `<p>ماذا يمثّل ${FX}؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S52_FB },
      wrong:   { title: 'هذا خطأ. لا بأس، سنتعلّم منه:', body: S52_FB },
    },
  },

  /* ═══ screen 40 · deck slide 53 · basic Q2 ═══ key: the cookies (𝑥 − 12). No picture. */
  {
    screen: 40,
    step: { group: 'c03a', index: 2, total: 4 },
    type: 'single',
    stem: `<p>الدالة المعطاة هي ${M('𝑓(𝑥) = 𝑥 ' + MINUS + ' 12')}.</p>
      <p class="q-ask q-part"><strong>أيّ من الجمل التالية يمكن أن يناسبها التعبير؟</strong></p>`,
    options: [
      { id: 'a', html: `كانت لديّ 12 حبة حلوى وأكلت ${X} منها` },
      { id: 'b', html: `كان لدي 12 برتقالة وقطفت ${X} برتقالات أخرى من الشجرة` },
      { id: 'c', html: `كانت لديّ ${X} قطعة بسكويت وأكل أخي الصغير 12 منها` },
      { id: 'd', html: `كان عندي ${X} قطط وتبنّيت 12 قطة أخرى` },
    ],
    correct: 'c',
    maxAttempts: 2,
    hintPolicy: 'immediate',
    hint: { body: `<p>ما هو الوضع الابتدائي حسب الدالة؟<br>بما أن التعبير يبدأ بالحرف ${X}، فهذا هو الوضع الابتدائي.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S53_FB },
      wrong:   { title: 'غير صحيح، إليكم التفسير:', body: S53_FB },
    },
  },

  /* ═══ screen 41 · deck slide 54 · basic Q3 א (balloons) ═══ dropdown glued to "ש";
     key انفجرت. Notes: "ללא רמז". */
  {
    screen: 41,
    step: { group: 'c03a', index: 3, total: 4 },
    type: 'dropdown',
    stem: `${S54_STORY}
      <p class="q-ask q-part"><strong>أ. عرّفوا ${X}:</strong></p>`,
    content: S54_PIC,
    sentence: [`${X} - عدد البالونات التي`, ''],
    blanks: [{ pool: ['كانت في البداية', 'انفجرت', 'بقيت في النهاية'], correct: 'انفجرت' }],
    maxAttempts: 2,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S54_FB },
      wrong:   { title: 'هذا خطأ. الإجابة الصحيحة تظهر الآن.', body: S54_FB },
    },
  },

  /* ═══ screen 42 · deck slide 55 · basic Q3 ב ═══ drag the three tiles into
     𝑓(𝑥) = 35 − 𝑥 (notes "TextOnlyDragAndDropQuestion"; the approved pointer-drag
     flow). Bank right -> left: 35, 𝑥, − (the deck draws −, 𝑥, 35 left to right). */
  {
    screen: 42,
    step: { group: 'c03a', index: 3, total: 4 },
    type: 'dnd',
    stem: `${S54_STORY}
      <p class="q-ask q-part"><strong>ب. أنشئوا دالة تحسب لكل ${X} من البالونات التي انفجرت عدد البالونات المتبقية.</strong></p>
      <p class="q-ask"><strong>اسحبوا أجزاء الدالة إلى أماكنها:</strong></p>`,
    content: S54_PIC,
    tokens: ['35', '𝑥', MINUS],
    layout: S55_LAYOUT,
    wrapClass: 'fa-eqdnd-wrap',
    zones: [{ correct: 0 }, { correct: 2 }, { correct: 1 }],
    maxAttempts: 2,
    hintPolicy: 'immediate',
    hint: { body: `<p>فكّروا أولًا: كم بالونًا يوجد في البداية؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S55_FB },
      wrong:   { title: 'ليس تمامًا.', body: S55_FB },
    },
  },

  /* ═══ screen 43 · deck slide 56 · basic Q3 ג ═══ key 28 (35 − 7) */
  {
    screen: 43,
    step: { group: 'c03a', index: 3, total: 4 },
    type: 'dropdown',
    stem: `${S54_STORY}
      <p class="q-part"><strong>الدالة</strong> التي تحسب لكل ${X} من البالونات التي انفجرت عدد البالونات المتبقية:</p>
      <p class="fa-eq">${M('𝑓(𝑥) = 35 ' + MINUS + ' 𝑥')}</p>
      <p class="q-ask q-part"><strong>ج. إذا فجّرت ميمي 7 بالونات، فكم بالونًا سليمًا بقي في الغرفة؟</strong></p>`,
    content: S54_PIC,
    sentence: ['بقي ', ' بالونات سليمة في الغرفة.'],
    blanks: [{ pool: ['38', '7', '28', '42'], correct: '28' }],
    maxAttempts: 2,
    hintPolicy: 'immediate',
    hint: { body: `<p>هل الأعداد في السؤال هي عناصر في المجال أم في المدى؟<br>أي هل تمثّل ${X} أم ${FX}؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'رائع!', body: S56_FB },
      wrong:   { title: 'ليس تمامًا.', body: S56_FB },
    },
  },

  /* ═══ screen 44 · deck slide 57 · basic Q4 א (magician) ═══ key 𝑓(𝑥) = 𝑥² + 6 */
  {
    screen: 44,
    step: { group: 'c03a', index: 4, total: 4 },
    type: 'single',
    stem: `${S57_STORY}
      <p class="q-ask q-part"><strong>أ. إذا عُلم أن العدد الذي اخترتموه هو ${X}، فأيّ الدوال التالية تناسب النتيجة التي ستحصلون عليها؟</strong></p>`,
    content: S57_PIC,
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 𝑥 + 6') },
      { id: 'b', html: M('𝑓(𝑥) = 36 + 𝑥²') },
      { id: 'c', html: M('𝑓(𝑥) = 𝑥² + 6') },
    ],
    correct: 'c',
    maxAttempts: 2,
    hintPolicy: 'immediate',
    hint: { body: `<p>اتبعوا تعليمات الساحرة.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S57_FB },
      wrong:   { title: 'أخطأتم. من المهم مواصلة التدرّب.', body: S57_FB },
    },
  },

  /* ═══ screen 45 · deck slide 58 · basic Q4 ב ═══ key 12. The deck's hint asks
     about "200" - the question is 150; built with 150 (KICKOFF). */
  {
    screen: 45,
    step: { group: 'c03a', index: 4, total: 4 },
    type: 'single',
    /* QA 02.11.26: the magician's instructions from part א stay on screen */
    /* QA 03.11.26: the function found in part א, under "אתם תאמרו מה..." */
    stem: `${S57_STORY}
      <p>وجدنا أن الدالة هي ${M('𝑓(𝑥) = 𝑥² + 6')}.</p>
      <p class="q-ask q-part"><strong>ب. بادر أحد الطلاب وقال إن نتيجته هي 150.</strong></p>
      <p class="q-ask"><strong>ما العدد الذي اختاره الطالب؟</strong></p>`,
    content: S57_PIC,
    options: [
      { id: 'a', html: '20' },
      { id: 'b', html: '12' },
      { id: 'c', html: '14' },
    ],
    correct: 'b',
    maxAttempts: 2,
    hintPolicy: 'immediate',
    hint: { body: `<p>هل 150 يمثّل ${X} أم ${FX}؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S58_FB },
      wrong:   { title: 'هذا خطأ. لكن نتعلّم أيضًا من الأخطاء!', body: S58_FB },
    },
  },

  /* ═══ screen 47 · deck slide 60 · standard Q1 א (houses) ═══ key 6. The notes
     name an applet art (Application_standart, a months slider) - the slide draws the
     neighbourhood photo, which is what is built (KICKOFF). */
  {
    screen: 47,
    step: { group: 'c03b', index: 1, total: 2 },
    type: 'value-input',
    stem: `${S60_STORY}
      <p class="q-ask q-part"><strong>أ. كم بيتًا كان في الحي في نهاية الشهر الأول من السنة؟</strong></p>`,
    sentence: ['في نهاية الشهر الأول كان هناك ', ' بيوت.'],
    inputLabels: ['عدد البيوت'],
    correctInputs: ['6'],
    content: S60_PIC,
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>كم بيتًا كان قبل أن يبدأ المقاول العمل؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S60_FB },
      wrong:   { title: 'ليس تمامًا.', body: S60_FB },
    },
  },

  /* ═══ screen 48 · deck slide 61 · standard Q1 ב ═══ key 𝑓(𝑥) = 6𝑥. Options 1
     and 3 are the same function (x + 6 / 6 + x) - kept as the deck lists them. */
  {
    screen: 48,
    step: { group: 'c03b', index: 1, total: 2 },
    type: 'single',
    stem: `${S60_STORY}
      <p class="q-ask q-part"><strong>ب. نرمز بـ ${X} إلى عدد الأشهر التي مرّت منذ بداية البناء.</strong></p>
      <p class="q-ask"><strong>أيّ مما يلي يناسب الدالة التي تصف عدد البيوت في الحي بعد ${X} أشهر؟</strong></p>`,
    content: S60_PIC,
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 𝑥 + 6') },
      { id: 'b', html: M('𝑓(𝑥) = 6 ' + MINUS + ' 𝑥') },
      { id: 'c', html: M('𝑓(𝑥) = 6 + 𝑥') },
      { id: 'd', html: M('𝑓(𝑥) = 6𝑥') },
    ],
    correct: 'd',
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>حاولوا أن تعوّضوا قيمًا مختلفة لـ ${X}.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S61_FB },
      wrong:   { title: 'ليس تمامًا.', body: S61_FB },
    },
  },

  /* ═══ screen 49 · deck slide 62 · standard Q2 (phone) ═══ two dropdowns: א the
     function (key 120𝑥 + 340), ب نعم (2,860 ≥ 2,800). Pool in the notes' order. */
  {
    screen: 49,
    step: { group: 'c03b', index: 2, total: 2 },
    type: 'dropdown',
    answerToggle: true,   /* QA 02.11.26: show my answer on final wrong */
    stem: `<p>تريد ياسمين شراء جهاز هاتف جديد سعره 2,800 ₪، لكن لديها في الحصّالة 340 ₪ فقط.</p>
      <p>وجدت عملًا كجليسة أطفال وتنجح في إضافة 120 ₪ إلى الحصّالة كل أسبوع.</p>
      <p>رمِّزوا بالحرف ${X} إلى عدد الأسابيع التي مرّت منذ بداية الادخار.</p>
      <p class="q-ask q-part"><strong>أ. ما هي الدالة التي تصف كمية المال في حصّالة ياسمين بعد ${X} أسابيع؟</strong></p>`,
    sentence: ['', '<p class="q-ask q-part fa-dd-q"><strong>ب. هل أصبح لديها بعد 5 أشهر (21 أسبوعًا) المبلغ المطلوب لشراء الهاتف؟</strong></p>', ''],
    blanks: [
      { pool: [LTR('𝑓(𝑥) = 120𝑥 + 340'), LTR('𝑓(𝑥) = 2,800 + 340 + 120𝑥'), LTR('𝑓(𝑥) = 2,800 ' + MINUS + ' 120𝑥')], correct: LTR('𝑓(𝑥) = 120𝑥 + 340') },
      { pool: ['نعم', 'لا'], correct: 'نعم' },
    ],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>أ. كم كان في البداية وكم أُضيف في كل أسبوع؟<br>ب. عوّضوا قيمًا مناسبة في الدالة.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S62_FB },
      wrong:   { title: 'أخطأتم، لكن كل خطأ يقوّي قدرتكم!<br>الإجابة الصحيحة معروضة.', body: S62_FB },
    },
  },

  /* ═══ screen 53 · deck slide 71 · Q1 א (garden) ═══ key 𝑓(𝑥) = 𝑥² */
  {
    screen: 53,
    step: { group: 'c05', index: 1, total: 4 },
    type: 'single',
    stem: `${S71_STORY}
      <p class="q-ask q-part"><strong>أ. أيّ دالة تناسب وصف مساحة الحديقة حسب قيمة ${X}؟</strong></p>`,
    content: GARDEN(false),
    options: [
      { id: 'a', html: M('𝑓(𝑥) = 4⋅𝑥') },
      { id: 'b', html: `<span class="m" dir="ltr">𝑓(𝑥) = ${FRAC('𝑥', '4')}</span>` },
      { id: 'c', html: M('𝑓(𝑥) = 𝑥²') },
      { id: 'd', html: M('𝑓(𝑥) = 2𝑥') },
    ],
    correct: 'c',
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>كيف نحسب مساحة المربع؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S71_FB('نحسب') },
      wrong:   { title: 'هذا خطأ. لا بأس.', body: S71_FB('لنحسب') },
    },
  },

  /* ═══ screen 54 · deck slide 72 · Q1 ב (fence) ═══ key לא. The question now asks about the fence
     (Elad 02.11; the deck asked about "ששת המתקנים"). No hint. */
  {
    screen: 54,
    step: { group: 'c05', index: 1, total: 4 },
    type: 'dropdown',
    stem: `${S71_STORY}
      <p class="q-part"><strong>الدالة</strong> المناسبة لوصف مساحة الحديقة بحسب قيمة ${X}:</p>
      <p class="fa-eq">${M('𝑓(𝑥) = 𝑥²')}</p>
      <p class="q-part">على امتداد أحد أضلاع الحديقة المطلّ على الشارع، تقرّر بناء سياج مرتفع يمنع الكرات الشاردة من الطيران إلى الشارع.</p>
      <p>طول السياج العالي 20 م.</p>
      <p>المعطى أن مساحة الحديقة هي 441 م².</p>
      <p class="q-ask q-part"><strong>ب. هل يكفي طول السياج لتسييج ضلع الحديقة المطلّ على الشارع كله؟</strong></p>`,
    content: GARDEN(true),
    sentence: ['', ''],
    blanks: [{ pool: ['نعم', 'لا'], correct: 'لا' }],
    maxAttempts: 1,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح!', body: S72_FB },
      wrong:   { title: 'أخطأتم. الإجابة الصحيحة معروضة.', body: S72_FB },
    },
  },

  /* ═══ screen 55 · deck slide 73 · Q2 א (painting the fence) ═══ drag 2 ⋅ 𝑥 + 6
     into five slots; 12 and − are distractors. Only the deck's order is keyed
     (equivalent orders - KICKOFF Q). */
  {
    screen: 55,
    step: { group: 'c05', index: 2, total: 4 },
    type: 'dnd',
    stem: `${S73_STORY}
      <p class="q-ask q-part"><strong>أ. اسحبوا وركّبوا دالة تعبّر، بواسطة ${X}، عن طول السياج الذي طُلي في اليوم الأول:</strong></p>`,
    tokens: [MINUS, '+', '6', '⋅', '12', '2', '𝑥'],
    layout: EQ5,
    wrapClass: 'fa-eqdnd-wrap fa-eq5',
    zones: [{ correct: 5 }, { correct: 3 }, { correct: 6 }, { correct: 1 }, { correct: 2 }],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>اكتبوا تعابير جبرية لطول السياج الذي طلاه كل واحد من الأولاد.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S73_FB_OK },
      wrong:   { title: 'أخطأتم. الإجابة الصحيحة معروضة.', body: S73_FB_NO },
    },
  },

  /* ═══ screen 56 · deck slide 74 · Q2 ב ═══ key 12 (30 = 2𝑥 + 6) */
  {
    screen: 56,
    step: { group: 'c05', index: 2, total: 4 },
    type: 'value-input',
    stem: `${S73_FX('الدالة')}
      <p class="q-ask q-part"><strong>ب. في اليوم الثاني طلى كل واحد من الإخوة عدد الأمتار نفسه الذي طلاه في اليوم الأول.</strong></p>
      <p class="q-ask"><strong>من المعروف أنهم خلال اليومين طلوا معًا 60 م من السياج.</strong></p>
      <p class="q-ask"><strong>كم مترًا من السياج طلى سامر في كل يوم من اليومين؟</strong></p>`,
    sentence: ['طلى سامر ', ' أمتار من السياج في كل يوم من الأيام.'],
    inputLabels: ['عدد الأمتار'],
    correctInputs: ['12'],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>كم مترًا طلوا في كل يوم على حدة؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S74_FB },
      wrong:   { title: 'تعلّموا من الخطأ.', body: S74_FB },
    },
  },

  /* ═══ screen 57 · deck slide 75 · Q2 ג ═══ key 9 (270 / 30). The hint's "last
     day" fits 77, not 75 (KICKOFF) - kept. Wrong body: "מ''" -> "מ'". */
  {
    screen: 57,
    step: { group: 'c05', index: 2, total: 4 },
    type: 'value-input',
    stem: `${S73_FX('نذكّر: الدالة')}
      <p>من المعروف أنهم خلال اليومين طلوا معًا 60 م من السياج.</p>
      <p class="q-ask q-part"><strong>ج. الطول الكلي للسياج هو 270 م.</strong></p>
      <p class="q-ask"><strong>إذا واصل الإخوة الطلاء كل يوم بالوتيرة نفسها كما في اليومين الأولين،</strong></p>
      <p class="q-ask"><strong>كم يوم عمل سيحتاجون لإنهاء طلاء السياج كله؟</strong></p>`,
    sentence: ['', ' أيام عمل.'],
    inputLabels: ['عدد أيام العمل'],
    correctInputs: ['9'],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>تذكروا كم مترًا يطلون كل يوم، ولا تنسوا أن تتحققوا مما يحدث في اليوم الأخير نفسه.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S75_FB('يطلون') },
      wrong:   { title: 'هذا خطأ، الإجابة الصحيحة معروضة.', body: S75_FB('تُطلى') },
    },
  },

  /* ═══ screen 58 · deck slide 76 · Q3 א (the Negev trail) ═══ drag 300 − 13 ⋅ 𝑥
     (notes: "בתשובה הנכונה יש כפל בין هـ-13 ל-x"); + and 287 are distractors */
  {
    screen: 58,
    step: { group: 'c05', index: 3, total: 4 },
    type: 'dnd',
    stem: `${S76_STORY}
      <p class="q-ask q-part"><strong>أ. اسحبوا وركّبوا دالة تحسب عدد الكيلومترات المتبقية حتى نهاية المسار بعد ${X} أيام من المشي.</strong></p>`,
    content: S76_PIC,
    tokens: ['⋅', '𝑥', '13', '287', '+', MINUS, '300'],
    layout: EQ5,
    wrapClass: 'fa-eqdnd-wrap fa-eq5',
    /* 13 ⋅ 𝑥 = 𝑥 ⋅ 13: either order is right (Elad 02.11) */
    zones: [{ correct: 6 }, { correct: 5 }, { correct: 2, accept: [1] }, { correct: 0 }, { correct: 1, accept: [2] }],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>ماذا يحدث للدالة كلما مرّت أيام أخرى؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S76_FB },
      wrong:   { title: 'الإجابة خاطئة. الإجابة الصحيحة معروضة.', body: S76_FB },
    },
  },

  /* ═══ screen 59 · deck slide 77 · Q3 ב ═══ key 24 (notes = green box = feedback);
     the box inline after "هـ-" */
  {
    screen: 59,
    step: { group: 'c05', index: 3, total: 4 },
    type: 'value-input',
    stem: `<p>الدالة التي تمثل عدد الكيلومترات المتبقية حتى نهاية المسار بعد ${X} من أيام المشي:</p>
      <p class="fa-eq"><strong>${M('𝑓(𝑥) = 300 ' + MINUS + ' 13𝑥')}</strong></p>
      <p class="q-ask q-part"><strong>ب. في أي يوم من أيام المشي سيُنهي هادي المسار؟</strong></p>`,
    sentence: ['خلال اليوم', ''],
    inputLabels: ['رقم اليوم'],
    correctInputs: ['24'],
    content: S76_PIC,
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>كم كيلومترًا تبقّى لهادي حتى نهاية المسار؟</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S77_FB },
      wrong:   { title: 'هذا خطأ، هيا نتعلّم منه.<br>الإجابة الصحيحة معروضة.', body: S77_FB },
    },
  },

  /* ═══ screen 60 · deck slide 78 · Q4 א (rice) ═══ I = Ono, II = Yoko (start values
     14 / 20; the redrawn graph agrees). No hint. */
  {
    screen: 60,
    step: { group: 'c05', index: 4, total: 4 },
    type: 'dropdown',
    stem: `${S78_STORY}
      <p class="q-ask q-part"><strong>أ. أكملوا:</strong></p>`,
    content: S78_GRAPH,
    /* the two dropdowns in ONE column (Elad 21.10): both labels take the same width */
    sentence: ['<span class="fa-ddrow"><span class="fa-ddrow-lbl">يصف الرسم البياني I عدد أكياس مطعم</span> ', '</span><span class="fa-ddrow"><span class="fa-ddrow-lbl">يصف الرسم البياني II عدد أكياس مطعم</span> ', '</span>'],
    blanks: [
      { pool: ['Ono', 'Yoko'], correct: 'Ono' },
      { pool: ['Ono', 'Yoko'], correct: 'Yoko' },
    ],
    maxAttempts: 1,   /* QA 11.11.26: two options only = one attempt */
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S78_FB },
      wrong:   { title: 'تعلّموا من الخطأ. الإجابة الصحيحة معروضة.', body: S78_FB },
    },
  },

  /* ═══ screen 61 · deck slide 79 · Q4 ב ═══ four functions, each matched to a graph
     (notes: I / II / ولا واحد منها): 14 − 2𝑥 none · 20 + 𝑥 none · 20 − 𝑥 II · 14 − 0.5𝑥 I.
     The feedback formulas are stored scrambled in the deck - typeset here. */
  {
    screen: 61,
    step: { group: 'c05', index: 4, total: 4 },
    type: 'dropdown',
    stem: `${S78_STORY}
      <p><strong>${X}</strong> يمثّل عدد الأيام التي مرّت منذ بداية الشهر.</p>
      <p class="q-ask q-part"><strong>ب. أمامكم تمثيل جبري لـ 4 دوال مختلفة.</strong></p>
      <p class="q-ask"><strong>استعينوا بمعطيات القصة وطابقوا بين الدالة والرسم البياني المناسب:</strong></p>`,
    content: S78_GRAPH,
    sentence: [`<span class="fa-ddrow">${ROW('𝑓(𝑥) = 14 ' + MINUS + ' 2𝑥')}`, `</span><span class="fa-ddrow">${ROW('𝑔(𝑥) = 20 + 𝑥')}`,
      `</span><span class="fa-ddrow">${ROW('ℎ(𝑥) = 20 ' + MINUS + ' 𝑥')}`, `</span><span class="fa-ddrow">${ROW('𝑗(𝑥) = 14 ' + MINUS + ' 0.5𝑥')}`, '</span>'],
    blanks: [
      { pool: ['I', 'II', 'ولا واحد منها'], correct: 'ولا واحد منها' },
      { pool: ['I', 'II', 'ولا واحد منها'], correct: 'ولا واحد منها' },
      { pool: ['I', 'II', 'ولا واحد منها'], correct: 'II' },
      { pool: ['I', 'II', 'ولا واحد منها'], correct: 'I' },
    ],
    maxAttempts: 2,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S79_FB },
      wrong:   { title: 'تعلّموا من الخطأ.', body: S79_FB },
    },
  },

  /* ═══ screen 63 · deck slide 82 · parts א + ב (baht -> dollar) ═══ keys לחלק ב-33,
     𝑓(𝑥) = 𝑥/33. FLAG: the notes' option list for ب was pasted from 83 (factor 3,
     key 3𝑥); the slide and feedback need 𝑥/33 - built with the same four forms over
     33 (KICKOFF Q). Fractions drawn as fractions (notes). */
  {
    screen: 63,
    type: 'dropdown',
    answerToggle: true,
    fracSelect: true,
    stem: `<p>يريد نادر شراء جهاز هاتف سعره في البلاد 1,300 ₪.</p>
      <p>سعر الجهاز في تايلاند هو 14,025 بات.</p>
      <p>أين يكون شراء الهاتف أرخص، في إسرائيل أم في تايلاند؟</p>
      <p><strong>في الخطوة الأولى سنحوّل من البات إلى الدولار.</strong></p>
      <p><strong>${X} - السعر بالبات.</strong></p>`,
    content: S82_PIC,
    sentence: [`<span class="fa-ddq">${LETTER('أ')} ماذا يجب أن نفعل بعدد البات لتحويله إلى دولارات؟</span>`,
      `<span class="fa-ddq">${LETTER('ب')} الدالة التي تصف التحويل من البات إلى الدولار:</span>`, ''],
    blanks: [
      { pool: ['القسمة على 33', 'الضرب في 33', 'إضافة 33', 'طرح 33'], correct: 'القسمة على 33' },
      { pool: ['𝑓(𝑥) = 𝑥 + 33', '𝑓(𝑥) = 𝑥/33', '𝑓(𝑥) = 33/𝑥', '𝑓(𝑥) = 33𝑥'], correct: '𝑓(𝑥) = 𝑥/33' },
    ],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: HINT_TABLE([`${X} - السعر بالبات`, `${FX} - السعر بالدولار`], [['33฿', '1$'], ['66฿', '2$'], ['330฿', '10$'], [`${X}฿`, '?']]) },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S82_FB('') },
      wrong:   { title: 'هذا خطأ. الإجابة الصحيحة تظهر الآن.', body: S82_FB('نحن ') },
    },
  },

  /* ═══ screen 64 · deck slide 83 · parts ג + ד (dollar -> shekel) ═══ keys לכפול ב-3,
     𝑔(𝑥) = 3𝑥. The notes say both "רמז אחרי טעות ראשונה" and "ללא רמז"; the slide
     has no hint - none. */
  {
    screen: 64,
    type: 'dropdown',
    answerToggle: true,
    fracSelect: true,
    /* QA 11.11.26: black bold line instead of the purple pill */
    stem: `<p><strong>في الخطوة الثانية سنحوّل من الدولار إلى الشيكل.</strong></p>
      <p><strong>${X} - السعر بالدولار.</strong></p>`,
    content: S82_PIC,
    sentence: [`<span class="fa-ddq">${LETTER('ج')} ماذا يجب أن نفعل لتحويل الدولارات إلى شواكل؟</span>`,
      `<span class="fa-ddq">${LETTER('د')} الدالة التي تصف التحويل من الدولار إلى الشيكل:</span>`,
      `<span class="fa-ddq fa-note">*انتبهوا: لا أهمية خاصة لاختيار الحرف ${M('𝑔')} بدلًا من ${M('𝑓')} في الدالة.</span>`],
    blanks: [
      /* QA 11.11.26: reshuffled so the order differs from 63 (keys unchanged) */
      { pool: ['إضافة 3', 'طرح 3', 'الضرب في 3', 'القسمة على 3'], correct: 'الضرب في 3' },
      { pool: ['𝑔(𝑥) = 𝑥/3', '𝑔(𝑥) = 𝑥 + 3', '𝑔(𝑥) = 3/𝑥', '𝑔(𝑥) = 3𝑥'], correct: '𝑔(𝑥) = 3𝑥' },
    ],
    maxAttempts: 2,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S83_FB },
      wrong:   { title: 'هذا خطأ. الإجابة الصحيحة تظهر الآن.', body: S83_FB },
    },
  },

  /* ═══ screen 65 · deck slide 84 · part ה (the final conversion) ═══ key תאילנד
     (425 $ -> 1,275 ₪ < 1,300 ₪). A two-way pick: ONE attempt (house rule §1i), so
     the notes' hint "after the first mistake" is shown from the start instead. */
  {
    screen: 65,
    type: 'dropdown',
    nextLabel: 'انتهيت',   /* QA 02.11.26: the last slide of a peak question */
    answerToggle: true,
    stem: `${PILL('التحويل النهائي')}
      <p>استخدموا الدوال التي كوّنتموها واحسبوا أين يكون شراء الهاتف أرخص:</p>
      <div class="fa-fcards">${FCARD('بات ← دولار', `<span class="m" dir="ltr">𝑓(𝑥) = ${FRAC('𝑥', '33')}</span>`)}${FCARD('دولار ← شيكل', M('𝑔(𝑥) = 3𝑥'))}</div>`,
    content: S84_PIC,
    sentence: [`${LETTER('هـ')} أكملوا: شراء الهاتف أرخص في`, ''],
    blanks: [{ pool: ['إسرائيل', 'تايلاند'], correct: 'تايلاند' }],
    maxAttempts: 1,
    hintPolicy: 'immediate',
    hint: { body: `<p>نفّذوا التحويل على مرحلتين.<br>ابدأوا بالتحويل من البات إلى الدولار.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S84_FB },
      wrong:   { title: 'هذا خطأ، تعلّموا منه، الإجابة الصحيحة معروضة.', body: S84_FB },
    },
  },

  /* ═══ screen 67 · deck slide 87 · dollar -> shekel ═══ key 𝑓(𝑥) = 3𝑥 (canvas = notes
     = feedback). Notes: "ללא רמז". Options in the notes' order. */
  {
    screen: 67,
    type: 'dropdown',
    answerToggle: true,
    fracSelect: true,
    stem: `${S87_STORY(true)}
      ${PILL('التحويل من الدولار إلى الشيكل')}`,
    content: S87_PIC,
    sentence: [`<span class="fa-ddq">الدالة ${FX}، التي تقرن كل مبلغ بالدولار (${X})<br>بالمبلغ المقابل له بالشيكل، هي:</span>`, ''],
    blanks: [{ pool: ['𝑓(𝑥) = 3/𝑥', '𝑓(𝑥) = 3 + 𝑥', '𝑓(𝑥) = 3 ' + MINUS + ' 𝑥', '𝑓(𝑥) = 3𝑥'], correct: '𝑓(𝑥) = 3𝑥' }],
    maxAttempts: 2,
    hintPolicy: 'none',
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S87_FB },
      wrong:   { title: 'هذا خطأ. الإجابة الصحيحة تظهر الآن.', body: S87_FB },
    },
  },

  /* ═══ screen 68 · deck slide 88 · shekel -> euro ═══ key 𝑔(𝑥) = 𝑥/3.5 (canvas =
     feedback; the notes mark none). The hint table's header said 𝑓(𝑥) - this slide's
     function is 𝑔(𝑥) (KICKOFF). */
  {
    screen: 68,
    type: 'dropdown',
    answerToggle: true,
    fracSelect: true,
    stem: `${S87_STORY(true)}
      ${PILL("الخطوة ب: التحويل من الشيكل إلى اليورو")}`,
    content: S87_PIC,
    sentence: [`<span class="fa-ddq">الدالة ${M('𝑔(𝑥)')}، التي تُقابل كل مبلغ بالشيكل (${X}) بالمبلغ المقابل له باليورو، هي:</span>`, ''],
    blanks: [{ pool: ['𝑔(𝑥) = 3.5𝑥', '𝑔(𝑥) = 3.5/𝑥', '𝑔(𝑥) = 𝑥 + 3.5', '𝑔(𝑥) = 𝑥/3.5'], correct: '𝑔(𝑥) = 𝑥/3.5' }],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: HINT_TABLE([`${X} - السعر بالشيكل`, `${M('𝑔(𝑥)')} - السعر باليورو`], [['3.5 ₪', '1 €'], ['7 ₪', '2 €'], ['14 ₪', '4 €'], [`${X} شيكل`, '?']]) },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S88_FB },
      wrong:   { title: 'هذا خطأ.', body: S88_FB },
    },
  },

  /* ═══ screen 69 · deck slide 89 · the final conversion ═══ key 1,286 (notes: "בין
     ערך של 1,285 ל-1,286" - 1,285, 1,285.7 and 1,286 all accepted). The card on the
     slide drew 𝑔(𝑥) = 3.5/𝑥 - inverted; 88 and this slide's feedback use 𝑥/3.5 (KICKOFF). */
  {
    screen: 69,
    type: 'value-input',
    nextLabel: 'انتهيت',   /* QA 02.11.26: the last slide of a peak question */
    stem: `${S87_STORY(true)}
      ${PILL("الخطوة ج: التحويل النهائي")}
      <p>استخدموا الدوال التي كوّنتموها وأجيبوا عن السؤال:</p>
      <div class="fa-fcards">${FCARD('دولار ← شيكل', M('𝑓(𝑥) = 3𝑥'))}${FCARD('شيكل ← يورو', `<span class="m" dir="ltr">𝑔(𝑥) = ${FRAC('𝑥', '3.5')}</span>`)}</div>`,
    content: S87_PIC,
    sentence: ['ميزانية يوسف هي 1,500$ (دولار) وتساوي حوالي € ', ' (يورو).<br><span class="fa-note">*انتبهوا - يمكن تقريب الإجابة.</span>'],
    inputLabels: ['الميزانية باليورو'],
    correctInputs: ['1286'],
    altInputs: [['1285'], ['1285.7'], ['1285.71'], ['1285.714']],
    maxAttempts: 2,
    hintPolicy: 'after-wrong',
    hint: { body: `<p>نفّذوا التحويل على مرحلتين.<br>ابدأوا بالتحويل من الدولار إلى الشيكل.</p>` },
    fb: {
      retry: 'هذا خطأ، حاولوا مرة أخرى!',
      correct: { title: 'صحيح جدًا‎!', body: S89_FB },
      wrong:   { title: 'هذا خطأ. اقرؤوا الشرح:', body: S89_FB },
    },
  },
];
