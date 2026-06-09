/* ============ TWEENING & ANIMATION HELPER ============ */
class MotionHelper {
  constructor() {
    this.isReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }

  easeOut(p) {
    return 1 - Math.pow(1 - p, 3);
  }

  tween(dur, cb, done) {
    if (this.isReduced) {
      cb(1);
      if (done) done();
      return;
    }
    const t0 = performance.now();
    const self = this;
    requestAnimationFrame(function step(now) {
      const p = Math.min((now - t0) / dur, 1);
      cb(self.easeOut(p));
      if (p < 1) {
        requestAnimationFrame(step);
      } else if (done) {
        done();
      }
    });
  }

  animateBar(fill) {
    const target = +fill.dataset.w;
    this.tween(1000, (p) => {
      fill.style.width = p * target + "%";
    });
  }

  animateMetrics() {
    document
      .querySelectorAll("#metricWrap .fill")
      .forEach((fill) => this.animateBar(fill));
  }

  animateCounters() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      const target = +el.dataset.count;
      this.tween(1100, (p) => {
        el.textContent = Math.round(p * target);
      });
    });
  }

  revealEl(el, delay) {
    if (this.isReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    setTimeout(() => {
      this.tween(
        560,
        (p) => {
          el.style.opacity = p;
          el.style.transform = `translateY(${14 * (1 - p)}px)`;
        },
        () => {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.willChange = "auto";
        },
      );
    }, delay || 0);
  }

  revealAll() {
    document
      .querySelectorAll("[data-rev]")
      .forEach((el, i) => this.revealEl(el, i * 110));
  }
}

/* ============ LIVE CLOCK ============ */
class Clock {
  constructor(elementId = "clock") {
    this.element = document.getElementById(elementId);
    this.intervalId = null;
  }

  start() {
    this.tick();
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  tick() {
    if (!this.element) return;
    const d = new Date();
    this.element.textContent = [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map((n) => String(n).padStart(2, "0"))
      .join(":");
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

/* ============ LOCALIZATION MANAGER ============ */
class LocalizationManager {
  constructor() {
    this.translationsCache = {};
    this.currentLang = localStorage.getItem("lang") || "en";
    this.latestLang = this.currentLang;
  }

  async loadLanguage(lang) {
    if (this.translationsCache[lang]) {
      return this.translationsCache[lang];
    }
    try {
      const response = await fetch(`./locales/${lang}.json`);
      if (!response.ok) throw new Error(`Failed to load locale: ${lang}`);
      const data = await response.json();
      this.translationsCache[lang] = data;
      return data;
    } catch (err) {
      console.error(err);
      return {};
    }
  }

  async setLanguage(lang, onLanguageUpdated = null) {
    this.latestLang = lang;
    const translations = await this.loadLanguage(lang);

    if (this.latestLang !== lang) {
      return;
    }

    this.currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[key] !== undefined) {
        el.textContent = translations[key];
        if (el.dataset.text !== undefined) {
          el.dataset.text = translations[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (translations[key] !== undefined) {
        el.innerHTML = translations[key];
      }
    });

    if (translations["doc_title"]) {
      document.title = translations["doc_title"];
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    if (onLanguageUpdated) {
      onLanguageUpdated(lang, translations);
    }
  }
}

/* ============ TELEMETRY MODULE ============ */
class TelemetryModule {
  constructor(motionHelper) {
    this.motionHelper = motionHelper;
    this.teleBars = document.getElementById("teleBars");
    this.teleNote = document.getElementById("teleNote");
    this.teleTag = document.getElementById("teleTag");
    this.filters = document.getElementById("filters");

    this.data = {
      all: {
        tag: "ALL",
        note: "Aggregate signal across <b>16 years</b> of full-stack operations. Three disciplines, one operator.",
        bars: [
          ["Backend Engineering", 92],
          ["Frontend / UI", 90],
          ["Data & Automation", 86],
          ["Server / DevOps", 82],
          ["Design Craft", 88],
        ],
      },
      python: {
        tag: "PY",
        note: "Mission profile: <b>backend + crypto data ops</b>. Async-first, monitored, Linux-native.",
        bars: [
          ["Async I/O (asyncio)", 95],
          ["Crypto API Integ.", 90],
          ["Data Analysis", 88],
          ["Linux Ops", 84],
          ["Optimization", 86],
        ],
      },
      php: {
        tag: "PHP",
        note: "Mission profile: <b>platform engineering</b>. Built ad-tech from zero — billing, hierarchy, stats.",
        bars: [
          ["Backend Services", 93],
          ["Ad Platform Build", 95],
          ["MySQL", 88],
          ["Server Config", 82],
          ["Custom APIs", 85],
        ],
      },
      frontend: {
        tag: "FE",
        note: "Mission profile: <b>craft + delivery</b>. Pixel-accurate, cross-browser, design-led.",
        bars: [
          ["HTML / CSS", 96],
          ["Photoshop Design", 92],
          ["Responsive Layout", 94],
          ["JS / jQuery", 78],
          ["Client Delivery", 90],
        ],
      },
    };
  }

  render(key, currentLang, translations) {
    if (!this.teleTag || !this.teleNote || !this.teleBars) return;

    const t = this.data[key];
    if (!t) return;

    const translatedTag = translations["tele_tag_" + key] || t.tag;
    const translatedNote = translations["tele_note_" + key] || t.note;

    this.teleTag.textContent = translatedTag;
    this.teleNote.innerHTML = translatedNote;

    this.teleBars.innerHTML = t.bars
      .map(([n, v]) => {
        const normalizedKey =
          "bar_" +
          n
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "_")
            .replace(/_+/g, "_");
        const translatedName = translations[normalizedKey] || n;
        return `
        <div class="tele-bar">
          <div class="t-top"><span class="t-name">${translatedName}</span><span class="t-val">${v}%</span></div>
          <div class="bar"><div class="fill" data-w="${v}"></div></div>
        </div>`;
      })
      .join("");

    this.teleBars
      .querySelectorAll(".fill")
      .forEach((fill) => this.motionHelper.animateBar(fill));
  }
}

/* ============ BOOT SEQUENCE ============ */
class BootSequence {
  constructor(localizationManager) {
    this.localization = localizationManager;
    this.bootEl = document.getElementById("boot");
    this.bootlog = document.getElementById("bootlog");
    this.bootpf = document.getElementById("bootpf");
    this.isDone = false;
    this.intervalId = null;
    this.bootLines = [
      ["m", "boot_line1", "ok", "boot_val_ready"],
      ["m", "boot_line2", "ok", "boot_val_ok"],
      ["c", "boot_line3", "ok", "boot_val_ok"],
      ["m", "boot_line4", "ok", "boot_val_metrics"],
      ["c", "boot_line5", "ok", "boot_val_stack"],
      ["m", "boot_line6", "ok", "boot_val_ops"],
      ["c", "boot_line7", "ok", "boot_val_sync"],
      ["m", "boot_line8", "ok", "boot_val_live"],
      ["c", "boot_line9", "", ""],
    ];
  }

  run(onComplete) {
    if (!this.bootEl || !this.bootlog) {
      if (onComplete) onComplete();
      return;
    }

    let i = 0;
    const total = this.bootLines.length;

    this.intervalId = setInterval(() => {
      if (i >= total) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        setTimeout(() => this.finish(onComplete), 380);
        return;
      }

      const [cls, txtKey, okcls, okvKey] = this.bootLines[i];
      const translations =
        this.localization.translationsCache[this.localization.currentLang] ||
        {};
      const txt = translations[txtKey] || txtKey;
      const okv = translations[okvKey] || okvKey;

      const div = document.createElement("div");
      div.innerHTML = `<span class="${cls}">${txt}</span> ${okv ? `<span class="${okcls}">[${okv}]</span>` : ""}`;

      this.bootlog.appendChild(div);
      if (this.bootpf) {
        this.bootpf.style.width = Math.round(((i + 1) / total) * 100) + "%";
      }
      i++;
    }, 200);
  }

  finish(onComplete) {
    if (this.isDone) return;
    this.isDone = true;

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.bootEl) {
      this.bootEl.classList.add("gone");
      document.body.classList.remove("loading");

      const delay = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? 0
        : 600;
      setTimeout(() => {
        this.bootEl.style.display = "none";
      }, delay);
    }

    if (onComplete) onComplete();
  }
}

/* ============ PORTFOLIO APP COORDINATOR ============ */
class PortfolioApp {
  constructor() {
    this.motionHelper = new MotionHelper();
    this.clock = new Clock();
    this.localization = new LocalizationManager();
    this.telemetry = new TelemetryModule(this.motionHelper);
    this.boot = new BootSequence(this.localization);
    this.missions = [...document.querySelectorAll(".mission")];
    this.beam = document.getElementById("scanbeam");
    this.scanBtn = document.getElementById("scanBtn");
  }

  async init() {
    // Start clock
    this.clock.start();

    // Bind events
    this.bindEvents();

    // Load initial language
    await this.localization.setLanguage(
      this.localization.currentLang,
      (lang, translations) => {
        this.updateTelemetryLanguage(lang, translations);
      },
    );

    // Check reduced motion to run or skip boot sequence
    if (this.motionHelper.isReduced) {
      this.boot.finish(() => this.onAppStarted());
    } else {
      this.boot.run(() => this.onAppStarted());
    }
  }

  bindEvents() {
    // Esc key / Escape key to skip boot
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.boot.finish(() => this.onAppStarted());
      }
    });

    // Skip boot button click
    const bootSkipBtn = document.getElementById("bootskip");
    if (bootSkipBtn) {
      bootSkipBtn.addEventListener("click", () => {
        this.boot.finish(() => this.onAppStarted());
      });
    }

    // Language switcher buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.localization.setLanguage(
          btn.dataset.lang,
          (lang, translations) => {
            this.updateTelemetryLanguage(lang, translations);
          },
        );
      });
    });

    // SCAN button
    if (this.scanBtn) {
      this.scanBtn.addEventListener("click", () => {
        if (this.beam) {
          this.beam.classList.remove("run");
          void this.beam.offsetWidth; // Trigger reflow to restart animation
          this.beam.classList.add("run");
        }
        this.motionHelper.animateMetrics();
        this.triggerTelemetryReplay();
      });
    }

    // Telemetry filter buttons
    if (this.telemetry.filters) {
      this.telemetry.filters.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter");
        if (!btn) return;

        this.telemetry.filters
          .querySelectorAll(".filter")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const f = btn.dataset.f;
        this.missions.forEach((m) => {
          m.classList.toggle("dim", f !== "all" && m.dataset.track !== f);
        });

        this.renderTelemetryWithActiveFilter(f);
      });
    }
  }

  updateTelemetryLanguage(lang, translations) {
    if (this.boot.isDone) {
      const activeFilterBtn = this.telemetry.filters
        ? this.telemetry.filters.querySelector(".filter.active")
        : null;
      const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.f : "all";
      this.telemetry.render(activeFilter, lang, translations);
    }
  }

  triggerTelemetryReplay() {
    const activeFilterBtn = this.telemetry.filters
      ? this.telemetry.filters.querySelector(".filter.active")
      : null;
    const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.f : "all";
    this.renderTelemetryWithActiveFilter(activeFilter);
  }

  renderTelemetryWithActiveFilter(filterKey) {
    const lang = this.localization.currentLang;
    const translations = this.localization.translationsCache[lang] || {};
    this.telemetry.render(filterKey, lang, translations);
  }

  onAppStarted() {
    this.motionHelper.revealAll();
    this.motionHelper.animateMetrics();
    this.motionHelper.animateCounters();
    this.renderTelemetryWithActiveFilter("all");
  }
}

// Instantiate and start app
document.addEventListener("DOMContentLoaded", () => {
  const app = new PortfolioApp();
  app.init();
});
