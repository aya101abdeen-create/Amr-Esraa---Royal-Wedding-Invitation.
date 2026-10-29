/* =====================================================================
   Amr & Esraa — Wedding Invitation  ·  script.js
   ---------------------------------------------------------------------
   Everything you may want to change is in the CONFIG block below.
   (Texts in both languages are in the TEXT block further down.)
   ===================================================================== */

const CONFIG = {
  // --- Wedding moment, expressed in CAIRO local time (the browser converts it correctly) ---
  timezone: "Africa/Cairo",
  year: 2026, month: 11, day: 20,      // month is 1–12
  hour: 20,   minute: 0,               // 24-hour clock → 20:00 = 8:00 PM

  // --- WhatsApp RSVP: international format, digits only, no "+" ---
  whatsappNumber: "201070278696",

  // --- Google Maps button. This is a Google Maps *search* link for the venue name.
  //     To point at an exact pin: open the venue in Google Maps → Share → Copy link,
  //     and paste that link between the quotes below. ---
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Pyramids+Golf+Egypt",

  // --- Music ---
  musicVolume: 0.35,                   // 0 (silent) … 1 (full)

  // Envelope animation length in milliseconds (before the main page is revealed)
  envelopeMs: 2300
};

/* ---------------------------------------------------------------------
   TEXT — English & Arabic
   --------------------------------------------------------------------- */
const TEXT = {
  en: {
    pageTitle: "Amr & Esraa — Wedding Invitation",
    introKicker: "You are cordially invited",
    phrase: "Where Forever Begins",
    cardSmall: "The Wedding of",
    namesAmp: "Amr & Esraa",
    openBtn: "Open Your Invitation",
    skipBtn: "Skip animation",
    scrollAria: "Scroll down",

    kicker: "Together with their families",
    invite: "You are cordially invited to celebrate the wedding of",
    groom: "Amr", amp: "&", bride: "Esraa",
    dateLine: "Friday, November 20, 2026",
    timeLine: "8:00 PM — Cairo local time",
    venueName: "Hilton Pyramids Golf",
    country: "Egypt",

    cdTitle: "The Big Day Is Coming",
    cdDays: "Days", cdHours: "Hours", cdMins: "Minutes", cdSecs: "Seconds",
    cdSub: "Until 8:00 PM, Cairo time",
    cdDone: "Today begins our forever.",

    storyKicker: "A moment from our journey",
    storyTitle: "Our Story",
    videoAria: "Our story video",
    videoPlay: "Play video",
    videoError: "The video couldn't be loaded. Please check your connection and try again.",
    retry: "Try again",

    memTitle: "Our Memories",
    memSub: "A few of the moments that brought us here.",
    alt1: "Amr and Esraa leaning close together",
    alt2: "Esraa in her wedding gown as Amr kisses her hand",
    alt3: "A bouquet of roses and a card that reads “Qabiltu” — “I accept”",
    alt4: "Amr and Esraa smiling beneath glowing lanterns",

    venueKicker: "The celebration",
    venueDetail: "Friday, November 20, 2026 · 8:00 PM",
    mapBtn: "View on Google Maps",

    rsvpTitle: "Kindly RSVP",
    rsvpText: "Your presence will make our celebration complete. Please let us know if you will be joining us.",
    rsvpBtn: "Confirm on WhatsApp",
    rsvpNote: "This opens WhatsApp with a ready-made message — just press send to confirm.",
    waMessage: "Hello Amr & Esraa! I would like to confirm my attendance at your wedding on November 20, 2026.",

    musicPlay: "Play music", musicPause: "Pause music",
    musicFail: "Tap the music button to play",
    lbAria: "Photo viewer", lbClose: "Close", lbPrev: "Previous photo", lbNext: "Next photo",
    langButton: "العربية"
  },

  ar: {
    pageTitle: "عمرو وإسراء — دعوة زفاف",
    introKicker: "دعوة خاصة",
    phrase: "حيث يبدأ الأبد",
    cardSmall: "حفل زفاف",
    namesAmp: "عمرو وإسراء",
    openBtn: "افتح دعوتك",
    skipBtn: "تخطي",
    scrollAria: "مرّر للأسفل",

    kicker: "بكل محبة، مع عائلتيهما",
    invite: "يتشرفان بدعوتكم لحضور حفل زفاف",
    groom: "عمرو", amp: "و", bride: "إسراء",
    dateLine: "الجمعة 20 نوفمبر 2026",
    timeLine: "الساعة 8:00 مساءً — بتوقيت القاهرة",
    venueName: "هيلتون بيراميدز جولف",
    country: "مصر",

    cdTitle: "اليوم الكبير يقترب",
    cdDays: "أيام", cdHours: "ساعات", cdMins: "دقائق", cdSecs: "ثوانٍ",
    cdSub: "حتى الساعة 8:00 مساءً بتوقيت القاهرة",
    cdDone: "اليوم تبدأ حكايتنا إلى الأبد.",

    storyKicker: "لحظة من رحلتنا",
    storyTitle: "حكايتنا",
    videoAria: "فيديو حكايتنا",
    videoPlay: "تشغيل الفيديو",
    videoError: "تعذّر تحميل الفيديو. يرجى التحقق من الاتصال والمحاولة مجددًا.",
    retry: "حاول مجددًا",

    memTitle: "ذكرياتنا",
    memSub: "لحظات جميلة قادتنا إلى هنا.",
    alt1: "عمرو وإسراء متقاربان معًا",
    alt2: "إسراء بفستان الزفاف وعمرو يقبّل يدها",
    alt3: "باقة ورد وبطاقة مكتوب عليها «قبلت»",
    alt4: "عمرو وإسراء مبتسمان تحت الفوانيس المضيئة",

    venueKicker: "الاحتفال",
    venueDetail: "الجمعة 20 نوفمبر 2026 · 8:00 مساءً",
    mapBtn: "عرض الموقع على خرائط جوجل",

    rsvpTitle: "يرجى تأكيد الحضور",
    rsvpText: "حضوركم يكمل فرحتنا. يسعدنا أن تخبرونا بحضوركم.",
    rsvpBtn: "تأكيد الحضور عبر واتساب",
    rsvpNote: "سيُفتح واتساب برسالة جاهزة — اضغط «إرسال» لتأكيد حضورك.",
    waMessage: "مرحبًا عمرو وإسراء، أود تأكيد حضوري لحفل زفافكما يوم 20 نوفمبر 2026.",

    musicPlay: "تشغيل الموسيقى", musicPause: "إيقاف الموسيقى",
    musicFail: "اضغط زر الموسيقى للتشغيل",
    lbAria: "عارض الصور", lbClose: "إغلاق", lbPrev: "الصورة السابقة", lbNext: "الصورة التالية",
    langButton: "English"
  }
};

/* =====================================================================
   Helpers
   ===================================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function safeGet(k)    { try { return localStorage.getItem(k); } catch (e) { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

let lang = "en";

/* =====================================================================
   Language (EN ⇄ AR) — switches text, direction, WhatsApp message
   ===================================================================== */
function applyLang(next) {
  lang = TEXT[next] ? next : "en";
  const t = TEXT[lang];
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t.pageTitle;

  $$("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
  $$("[data-i18n-aria]").forEach(el => { const v = t[el.dataset.i18nAria]; if (v !== undefined) el.setAttribute("aria-label", v); });
  $$("[data-i18n-alt]").forEach(el => { const v = t[el.dataset.i18nAlt]; if (v !== undefined) el.alt = v; });
  $$("[data-lang-toggle]").forEach(b => { b.textContent = t.langButton; });

  updateLinks();
  updateMusicLabel();
  updateCountdown();
  if (lightbox && !lightbox.hidden) renderLightbox();
  safeSet("invite-lang", lang);
}

function updateLinks() {
  // WhatsApp — real wa.me link with a URL-encoded, language-specific message
  const wa = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(TEXT[lang].waMessage)}`;
  $("#waBtn").href = wa;
  // Google Maps
  $("#mapBtn").href = CONFIG.mapUrl;
}

$$("[data-lang-toggle]").forEach(b => b.addEventListener("click", () => applyLang(lang === "en" ? "ar" : "en")));

/* =====================================================================
   Countdown — timezone-aware (Africa/Cairo, handles daylight-saving)
   ===================================================================== */
function tzOffsetMs(utcMs, tz) {
  // How far ahead of UTC is `tz` at the instant utcMs?
  const p = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone: tz, hourCycle: "h23",
    year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric"
  }).formatToParts(new Date(utcMs)).forEach(x => { p[x.type] = +x.value; });
  const asIfUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return asIfUtc - Math.floor(utcMs / 1000) * 1000;
}

function zonedTimeToUtcMs(y, mo, d, h, mi, tz) {
  const wall = Date.UTC(y, mo - 1, d, h, mi);          // the wall-clock time read as if it were UTC
  try {
    let utc = wall - tzOffsetMs(wall, tz);
    utc = wall - tzOffsetMs(utc, tz);                  // second pass settles DST edge cases
    return utc;
  } catch (e) {
    return wall - 2 * 3600 * 1000;                     // fallback: Cairo winter time (UTC+2)
  }
}

const TARGET = zonedTimeToUtcMs(CONFIG.year, CONFIG.month, CONFIG.day, CONFIG.hour, CONFIG.minute, CONFIG.timezone);
const pad = n => String(n).padStart(2, "0");

function updateCountdown() {
  const diff = TARGET - Date.now();
  const grid = $("#cdGrid"), sub = $("#cdSub"), done = $("#cdDone");
  if (diff <= 0) {
    grid.hidden = true; sub.hidden = true; done.hidden = false;
    return false;
  }
  grid.hidden = false; sub.hidden = false; done.hidden = true;
  const s = Math.floor(diff / 1000);
  $("#cdD").textContent = Math.floor(s / 86400);
  $("#cdH").textContent = pad(Math.floor(s % 86400 / 3600));
  $("#cdM").textContent = pad(Math.floor(s % 3600 / 60));
  $("#cdS").textContent = pad(s % 60);
  return true;
}
setInterval(updateCountdown, 1000);

/* =====================================================================
   Background music
   ===================================================================== */
const bgm = $("#bgm"), musicBtn = $("#musicBtn"), musicBox = $("#music"), toast = $("#musicToast");
bgm.volume = CONFIG.musicVolume;
let resumeAfterVideo = false, toastTimer;

function updateMusicLabel() {
  const playing = !bgm.paused;
  musicBtn.setAttribute("aria-pressed", String(playing));
  musicBtn.setAttribute("aria-label", TEXT[lang][playing ? "musicPause" : "musicPlay"]);
}
function showToast(msg) {
  toast.textContent = msg; toast.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.hidden = true; }, 4500);
}
function playMusic(fromUser) {
  bgm.preload = "auto";
  const p = bgm.play();
  if (p && p.catch) p.catch(() => { if (!fromUser) showToast(TEXT[lang].musicFail); else showToast(TEXT[lang].musicFail); });
}
bgm.addEventListener("play",  () => { toast.hidden = true; updateMusicLabel(); });
bgm.addEventListener("pause", updateMusicLabel);
bgm.addEventListener("error", () => { showToast(TEXT[lang].musicFail); updateMusicLabel(); });

musicBtn.addEventListener("click", () => {
  resumeAfterVideo = false;
  if (bgm.paused) playMusic(true); else bgm.pause();
});

/* =====================================================================
   Envelope intro
   ===================================================================== */
const intro = $("#intro"), main = $("#main"), openBtn = $("#openBtn"), skipBtn = $("#skipBtn");
let opened = false;

function revealSite() {
  intro.classList.add("leaving");
  main.inert = false;
  document.body.classList.remove("locked");
  musicBox.hidden = false;
  window.scrollTo(0, 0);
  setTimeout(() => { intro.hidden = true; }, 1100);
  initReveal();
  const first = $("#names"); if (first) { first.setAttribute("tabindex", "-1"); first.focus({ preventScroll: true }); }
}

function openInvitation(skip) {
  if (opened) return; opened = true;
  playMusic(false);                       // starts right after the visitor's tap
  if (skip || reduceMotion) { revealSite(); return; }
  intro.classList.add("open");
  setTimeout(revealSite, CONFIG.envelopeMs);
}
openBtn.addEventListener("click", () => openInvitation(false));
skipBtn.addEventListener("click", () => openInvitation(true));
main.inert = true;
openBtn.focus({ preventScroll: true });

/* =====================================================================
   Scroll reveal
   ===================================================================== */
function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window) || reduceMotion) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: .15, rootMargin: "0px 0px -6% 0px" });
  els.forEach((e, i) => { e.style.transitionDelay = (e.closest(".gallery") ? (i % 4) * 90 : 0) + "ms"; io.observe(e); });
}

/* =====================================================================
   Video
   ===================================================================== */
const video = $("#storyVideo"), vPlay = $("#videoPlay"), vErr = $("#videoError");

vPlay.addEventListener("click", () => { const p = video.play(); if (p && p.catch) p.catch(() => {}); });
video.addEventListener("play", () => {
  vPlay.classList.add("hide");
  if (!bgm.paused) { bgm.pause(); resumeAfterVideo = true; }   // let the video's sound be heard
});
function videoStopped() {
  vPlay.classList.remove("hide");
  if (resumeAfterVideo) { resumeAfterVideo = false; playMusic(false); }
}
video.addEventListener("pause", videoStopped);
video.addEventListener("ended", videoStopped);
function videoFailed() { vErr.hidden = false; vPlay.classList.add("hide"); }
video.addEventListener("error", videoFailed);
$("source", video).addEventListener("error", videoFailed);
$("#videoRetry").addEventListener("click", () => { vErr.hidden = true; vPlay.classList.remove("hide"); video.load(); });

/* =====================================================================
   Gallery lightbox
   ===================================================================== */
const lightbox = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbCount = $("#lbCount");
const thumbs = $$("#gallery .g-item");
let lbIndex = 0, lastFocus = null;

function renderLightbox() {
  const img = $("img", thumbs[lbIndex]);
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt;
  lbCap.textContent = img.alt;
  lbCount.textContent = `${lbIndex + 1} / ${thumbs.length}`;
}
function openLightbox(i) {
  lastFocus = document.activeElement;
  lbIndex = i; renderLightbox();
  lightbox.hidden = false; lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => lightbox.classList.add("show"));
  $("#lbClose").focus();
}
function closeLightbox() {
  lightbox.classList.remove("show"); lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { lightbox.hidden = true; }, 350);
  if (lastFocus) lastFocus.focus();
}
function stepLightbox(d) { lbIndex = (lbIndex + d + thumbs.length) % thumbs.length; renderLightbox(); }

thumbs.forEach((b, i) => b.addEventListener("click", () => openLightbox(i)));
$("#lbClose").addEventListener("click", closeLightbox);
$("#lbPrev").addEventListener("click", () => stepLightbox(-1));
$("#lbNext").addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", e => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") stepLightbox(-1);
  else if (e.key === "ArrowRight") stepLightbox(1);
  else if (e.key === "Tab") {                       // keep keyboard focus inside the viewer
    const f = $$("button", lightbox); const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

// swipe on touch screens
let touchX = null;
lightbox.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX; touchX = null;
  if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
}, { passive: true });

/* =====================================================================
   Start
   ===================================================================== */
const saved = safeGet("invite-lang");
const browserAr = (navigator.language || "").toLowerCase().startsWith("ar");
applyLang(saved || (browserAr ? "ar" : "en"));
updateCountdown();
