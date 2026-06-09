/* ============ TRANSLATIONS DATA ============ */
const translationsCache = {};
let currentLang = localStorage.getItem('lang') || 'en';

async function loadLanguage(lang) {
  if (translationsCache[lang]) {
    return translationsCache[lang];
  }
  try {
    const response = await fetch(`./locales/${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load locale: ${lang}`);
    const data = await response.json();
    translationsCache[lang] = data;
    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
}

/* ============ LIVE CLOCK ============ */
const clk = document.getElementById('clock');
function tick(){
  const d = new Date();
  clk.textContent = [d.getHours(),d.getMinutes(),d.getSeconds()].map(n=>String(n).padStart(2,'0')).join(':');
}
tick(); setInterval(tick,1000);

/* ============ TELEMETRY DATA ============ */
const TELE = {
  all:      {tag:'ALL',  note:'Aggregate signal across <b>16 years</b> of full-stack operations. Three disciplines, one operator.',
             bars:[['Backend Engineering',92],['Frontend / UI',90],['Data & Automation',86],['Server / DevOps',82],['Design Craft',88]]},
  python:   {tag:'PY',   note:'Mission profile: <b>backend + crypto data ops</b>. Async-first, monitored, Linux-native.',
             bars:[['Async I/O (asyncio)',95],['Crypto API Integ.',90],['Data Analysis',88],['Linux Ops',84],['Optimization',86]]},
  php:      {tag:'PHP',  note:'Mission profile: <b>platform engineering</b>. Built ad-tech from zero — billing, hierarchy, stats.',
             bars:[['Backend Services',93],['Ad Platform Build',95],['MySQL',88],['Server Config',82],['Custom APIs',85]]},
  frontend: {tag:'FE',   note:'Mission profile: <b>craft + delivery</b>. Pixel-accurate, cross-browser, design-led.',
             bars:[['HTML / CSS',96],['Photoshop Design',92],['Responsive Layout',94],['JS / jQuery',78],['Client Delivery',90]]}
};

const teleBars = document.getElementById('teleBars');
const teleNote = document.getElementById('teleNote');
const teleTag  = document.getElementById('teleTag');

function renderTele(key){
  const t = TELE[key];
  const translations = translationsCache[currentLang] || {};
  const translatedTag = translations['tele_tag_' + key] || t.tag;
  const translatedNote = translations['tele_note_' + key] || t.note;
  
  teleTag.textContent = translatedTag;
  teleNote.innerHTML = translatedNote;
  
  teleBars.innerHTML = t.bars.map(([n,v])=>{
    const normalizedKey = 'bar_' + n.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');
    const translatedName = translations[normalizedKey] || n;
    return `
      <div class="tele-bar">
        <div class="t-top"><span class="t-name">${translatedName}</span><span class="t-val">${v}%</span></div>
        <div class="bar"><div class="fill" data-w="${v}"></div></div>
      </div>`;
  }).join('');
  teleBars.querySelectorAll('.fill').forEach(animateBar);
}

/* ============ FILTERS ============ */
const filters = document.getElementById('filters');
const missions = [...document.querySelectorAll('.mission')];
filters.addEventListener('click', e=>{
  const btn = e.target.closest('.filter'); if(!btn) return;
  filters.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.f;
  missions.forEach(m=> m.classList.toggle('dim', f!=='all' && m.dataset.track!==f));
  renderTele(f);
});

/* ============ rAF TWEEN HELPERS (timeline-independent) ============ */
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const easeOut = p => 1 - Math.pow(1-p, 3);
function tween(dur, cb, done){
  if(REDUCED){ cb(1); if(done) done(); return; }
  const t0 = performance.now();
  (function step(now){
    const p = Math.min((now-t0)/dur, 1);
    cb(p);
    if(p<1) requestAnimationFrame(step); else if(done) done();
  })(performance.now());
}
function animateBar(fill){
  const target = +fill.dataset.w;
  tween(1000, p => { fill.style.width = (easeOut(p)*target) + '%'; });
}
function animateMetrics(){
  document.querySelectorAll('#metricWrap .fill').forEach(animateBar);
}
function animateCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target = +el.dataset.count;
    tween(1100, p => { el.textContent = Math.round(easeOut(p)*target); });
  });
}
function revealEl(el, delay){
  if(REDUCED){ el.style.opacity=1; el.style.transform='none'; return; }
  setTimeout(()=>{
    tween(560,
      p => { const e=easeOut(p); el.style.opacity=e; el.style.transform=`translateY(${14*(1-e)}px)`; },
      () => { el.style.opacity='1'; el.style.transform='none'; el.style.willChange='auto'; }
    );
  }, delay||0);
}
function revealAll(){
  document.querySelectorAll('[data-rev]').forEach((el,i)=>revealEl(el, i*110));
}

/* ============ SCAN BUTTON ============ */
const beam = document.getElementById('scanbeam');
document.getElementById('scanBtn').addEventListener('click', ()=>{
  beam.classList.remove('run'); void beam.offsetWidth; beam.classList.add('run');
  animateMetrics();
  renderTele(filters.querySelector('.filter.active').dataset.f);
});

/* ============ BOOT SEQUENCE ============ */
const bootLines = [
  ['m','boot_line1','ok','boot_val_ready'],
  ['m','boot_line2','ok','boot_val_ok'],
  ['c','boot_line3','ok','boot_val_ok'],
  ['m','boot_line4','ok','boot_val_metrics'],
  ['c','boot_line5','ok','boot_val_stack'],
  ['m','boot_line6','ok','boot_val_ops'],
  ['c','boot_line7','ok','boot_val_sync'],
  ['m','boot_line8','ok','boot_val_live'],
  ['c','boot_line9','',''],
];
const bootlog = document.getElementById('bootlog');
const bootpf  = document.getElementById('bootpf');
const bootEl  = document.getElementById('boot');
let bdone=false;

function finishBoot(){
  if(bdone) return; bdone=true;
  bootEl.classList.add('gone');
  document.body.classList.remove('loading');
  setTimeout(()=>{ bootEl.style.display='none'; }, REDUCED?0:600);
  revealAll();
  animateMetrics();
  animateCounters();
  renderTele('all');
}

function runBoot(){
  let i=0;
  const total=bootLines.length;
  const iv = setInterval(()=>{
    if(i>=total){ clearInterval(iv); setTimeout(finishBoot, 380); return; }
    const [cls,txtKey,okcls,okvKey] = bootLines[i];
    const translations = translationsCache[currentLang] || {};
    const txt = translations[txtKey] || txtKey;
    const okv = translations[okvKey] || okvKey;
    const div=document.createElement('div');
    div.innerHTML = `<span class="${cls}">${txt}</span> ${okv?`<span class="${okcls}">[${okv}]</span>`:''}`;
    bootlog.appendChild(div);
    bootpf.style.width = Math.round(((i+1)/total)*100)+'%';
    i++;
  }, 200);
}
document.getElementById('bootskip').addEventListener('click', finishBoot);
window.addEventListener('keydown', e=>{ if(e.key==='Escape') finishBoot(); });

/* ============ LOCALIZATION HANDLER ============ */
let latestLang = currentLang;
async function setLanguage(lang) {
  latestLang = lang;
  
  const translations = await loadLanguage(lang);
  
  if (latestLang !== lang) {
    return;
  }
  
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key] !== undefined) {
      el.textContent = translations[key];
      if (el.dataset.text !== undefined) {
        el.dataset.text = translations[key];
      }
    }
  });
  
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[key] !== undefined) {
      el.innerHTML = translations[key];
    }
  });
  
  if (translations['doc_title']) {
    document.title = translations['doc_title'];
  }
  
  // Update telemetry details if they exist in the DOM
  if (teleTag && teleNote && teleBars) {
    const activeFilterBtn = filters ? filters.querySelector('.filter.active') : null;
    const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.f : 'all';
    renderTele(activeFilter);
  }
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Bind language switcher buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// Initialize
(async () => {
  await setLanguage(currentLang);
  
  if(REDUCED){
    bootEl.style.display='none'; bdone=true;
    document.body.classList.remove('loading');
    revealAll();
    animateMetrics(); animateCounters(); renderTele('all');
  } else {
    runBoot();
  }
})();
