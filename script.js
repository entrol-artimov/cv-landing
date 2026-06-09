/* ============ TRANSLATIONS DATA ============ */
const TRANSLATIONS = {
  en: {
    doc_title: "ARTEM MAZUR // FULL-STACK DEV CONSOLE",
    boot_sub: "FULL-STACK DEVELOPER CONSOLE // v2.4.1",
    boot_skip: "PRESS [ESC] TO SKIP ▸",
    scan_btn: "SCAN",
    topbar_crumb: "/ profile / <b>artem_mazur</b> / full-stack",
    topbar_sys: "SYS <span class=\"on\">● ONLINE</span>",
    topbar_location: "CHIȘINĂU",
    id_kicker: "// IDENTITY_MODULE — UID 479789",
    id_role: "Full-Stack Developer",
    badge_status: "STATUS: ACTIVE — READY FOR DEPLOYMENT",
    badge_age: "AGE",
    badge_license: "LICENSE",
    badge_mode: "MODE",
    badge_mode_val: "REMOTE / HYBRID",
    comms_title: "<span class=\"tag\">▣</span> COMMS_LINK <span class=\"hline\"></span><span class=\"idx\">[3]</span>",
    comms_email: "EMAIL",
    comms_phone: "PHONE",
    comms_location: "LOCATION",
    comms_location_val: "Chișinău, Moldova",
    metrics_title: "<span class=\"tag\">▤</span> CORE_METRICS // PROFICIENCY <span class=\"hline\"></span><span class=\"idx\">[01]</span>",
    metric_js: "JavaScript",
    metric_html: "HTML5",
    metric_css: "CSS3 / Responsive",
    metric_design: "Web Design",
    metric_photoshop: "Photoshop",
    metric_api: "API Development",
    yr_8: "· 8Y",
    yr_6: "· 6Y",
    metrics_years: "Years Active",
    metrics_missions: "Missions",
    metrics_languages: "Languages",
    matrix_title: "<span class=\"tag\">▦</span> TECH_MATRIX // STACK <span class=\"hline\"></span><span class=\"idx\">[02]</span>",
    tech_backend: "BACKEND",
    tech_framework: "FRAMEWORK",
    tech_concurrency: "CONCURRENCY",
    tech_async_http: "ASYNC HTTP",
    tech_frontend: "FRONTEND",
    tech_interface: "INTERFACE",
    tech_paradigm: "PARADIGM",
    tech_database: "DATABASE",
    tech_server_admin: "SERVER ADMIN",
    tech_container: "CONTAINER",
    tech_monitoring: "MONITORING",
    matrix_secondary: "SECONDARY: jQuery · DataLife CMS · Excel/CSV · JIRA · DevTools · ServiceDesk KB",
    diagnostics_title: "<span class=\"tag\">▥</span> UNDER_THE_HOOD // DIAGNOSTICS <span class=\"hline\"></span><span class=\"idx\">[03]</span>",
    diag_line1: "Architecture built <b>from scratch</b> — clean, modular, self-designed",
    diag_line2: "OOP applied across <b>JavaScript · PHP · Python</b> with deep principle grasp",
    diag_line3: "Deep-dive <b>system debugging</b> — digging into internals to find the best path",
    diag_line4: "Priority: <b>code clarity & optimization</b> over shortcuts",
    diag_line5: "REST API + server-side logic · Linux admin (nginx, php, mysql, python)",
    diag_line6: "Crypto automation — arbitrage, calculation & analysis scripts",
    diag_line7: "Rapidly onboards new tools · joins at any project stage",
    lang_title: "<span class=\"tag\">◭</span> LANGUAGE_PACKS <span class=\"hline\"></span><span class=\"idx\">[3]</span>",
    lang_ru: "Russian",
    lang_ru_lvl: "NATIVE / FLUENT",
    lang_en: "English",
    lang_en_lvl: "BASIC",
    lang_ro: "Romanian",
    lang_ro_lvl: "BASIC",
    meta_sector: "SECTOR",
    meta_sector_val: "IT / Technology",
    meta_avail: "AVAIL",
    meta_avail_val: "Open to engagement",
    meta_mobility: "MOBILITY",
    meta_mobility_val: "Cat.B license · own vehicle",
    experience_title: "<span class=\"tag\">▶</span> MISSION_HISTORY // EXPERIENCE LOG <span class=\"hline\"></span><span class=\"idx\">[04]</span>",
    experience_filter_all: "All Ops",
    experience_filter_python: "Python",
    experience_filter_php: "PHP",
    experience_filter_frontend: "Front-End",
    experience_role_py: "Python Developer",
    experience_org_py: "FREELANCE · CHIȘINĂU",
    experience_date_py: "DEC 2023 — PRESENT<span class=\"dur\">1Y 9M · ACTIVE</span>",
    exp_py_p1: "Built & maintained Python backend tooling for live operations",
    exp_py_p2: "Crypto APIs — real-time data collection & analysis",
    exp_py_p3: "Async programming with <b>asyncio</b> &amp; <b>aiohttp</b>",
    exp_py_p4: "Blockchain networks — I/O logic & optimal-path routing",
    exp_py_p5: "Linux server deploy (python, mysql) · monitoring & logging",
    experience_role_php: "PHP Developer",
    experience_org_php: "FREELANCE · CHIȘINĂU",
    experience_date_php: "NOV 2018 — DEC 2023<span class=\"dur\">5Y 1M</span>",
    exp_php_p1: "Built a custom advertising platform from scratch (PHP + JS)",
    exp_php_p2: "Billing calculations, hierarchy systems, statistics & user cabinets",
    exp_php_p3: "PHP backend services · custom API services",
    exp_php_p4: "Database work & server config — Linux, nginx, MySQL",
    exp_php_p5: "Ad creative, banners & landing pages",
    experience_role_fe: "Front-End Developer & UI Designer",
    experience_org_fe: "FREELANCE · CHIȘINĂU",
    experience_date_fe: "MAR 2010 — NOV 2018<span class=\"dur\">8Y 9M</span>",
    exp_fe_p1: "Built sites & CMS templates (incl. DataLife Engine)",
    exp_fe_p2: "HTML, CSS — cross-browser responsive layout",
    exp_fe_p3: "Photoshop — mockups, logos, banners & graphics",
    exp_fe_p4: "Early JavaScript & jQuery interactivity",
    exp_fe_p5: "Direct client comms & end-to-end project delivery",
    telemetry_title: "<span class=\"tag\">◈</span> TELEMETRY <span class=\"hline\"></span><span class=\"idx\" id=\"teleTag\">ALL</span>",
    tele_tag_all: "ALL",
    tele_tag_python: "PY",
    tele_tag_php: "PHP",
    tele_tag_frontend: "FE",
    tele_note_all: "Aggregate signal across <b>15 years</b> of full-stack operations. Three disciplines, one operator.",
    tele_note_python: "Mission profile: <b>backend + crypto data ops</b>. Async-first, monitored, Linux-native.",
    tele_note_php: "Mission profile: <b>platform engineering</b>. Built ad-tech from zero — billing, hierarchy, stats.",
    tele_note_frontend: "Mission profile: <b>craft + delivery</b>. Pixel-accurate, cross-browser, design-led.",
    bar_backend_engineering: "Backend Engineering",
    bar_frontend_ui: "Frontend / UI",
    bar_data_automation: "Data & Automation",
    bar_server_devops: "Server / DevOps",
    bar_design_craft: "Design Craft",
    bar_async_io_asyncio: "Async I/O (asyncio)",
    bar_crypto_api_integ: "Crypto API Integ.",
    bar_data_analysis: "Data Analysis",
    bar_linux_ops: "Linux Ops",
    bar_optimization: "Optimization",
    bar_backend_services: "Backend Services",
    bar_ad_platform_build: "Ad Platform Build",
    bar_mysql: "MySQL",
    bar_server_config: "Server Config",
    bar_custom_apis: "Custom APIs",
    bar_html_css: "HTML / CSS",
    bar_photoshop_design: "Photoshop Design",
    bar_responsive_layout: "Responsive Layout",
    bar_js_jquery: "JS / jQuery",
    bar_client_delivery: "Client Delivery",
    boot_line1: "> initializing kernel ...................",
    boot_line2: "> mounting /profile/artem_mazur ..........",
    boot_line3: "> loading identity_module [UID 479789] ...",
    boot_line4: "> compiling core_metrics .................",
    boot_line5: "> indexing tech_matrix ...................",
    boot_line6: "> parsing mission_history ................",
    boot_line7: "> calibrating telemetry array ............",
    boot_line8: "> establishing comms_link ................",
    boot_line9: "> all systems nominal",
    boot_val_ready: "READY",
    boot_val_ok: "OK",
    boot_val_metrics: "6/6",
    boot_val_stack: "12",
    boot_val_ops: "3 OPS",
    boot_val_sync: "SYNC",
    boot_val_live: "LIVE"
  },
  ru: {
    doc_title: "АРТЕМ МАЗУР // КОНСОЛЬ ФУЛСТЭК-РАЗРАБОТЧИКА",
    boot_sub: "КОНСОЛЬ ФУЛСТЭК-РАЗРАБОТЧИКА // v2.4.1",
    boot_skip: "НАЖМИТЕ [ESC] ДЛЯ ПРОПУСКА ▸",
    scan_btn: "СКАНИРОВАТЬ",
    topbar_crumb: "/ профиль / <b>artem_mazur</b> / фулстэк",
    topbar_sys: "СИС <span class=\"on\">● ОНЛАЙН</span>",
    topbar_location: "КИШИНЁВ",
    id_kicker: "// МОДУЛЬ_ИДЕНТИФИКАЦИИ — UID 479789",
    id_role: "Full-Stack разработчик",
    badge_status: "СТАТУС: АКТИВЕН — ГОТОВ К РАЗВЕРТЫВАНИЮ",
    badge_age: "ВОЗРАСТ",
    badge_license: "ПРАВА",
    badge_mode: "ФОРМАТ",
    badge_mode_val: "УДАЛЕНКА / ГИБРИД",
    comms_title: "<span class=\"tag\">▣</span> КАНАЛ_СВЯЗИ <span class=\"hline\"></span><span class=\"idx\">[3]</span>",
    comms_email: "EMAIL",
    comms_phone: "ТЕЛЕФОН",
    comms_location: "ЛОКАЦИЯ",
    comms_location_val: "Кишинёв, Молдова",
    metrics_title: "<span class=\"tag\">▤</span> КЛЮЧЕВЫЕ_МЕТРИКИ // ЭФФЕКТИВНОСТЬ <span class=\"hline\"></span><span class=\"idx\">[01]</span>",
    metric_js: "JavaScript",
    metric_html: "HTML5",
    metric_css: "CSS3 / Адаптив",
    metric_design: "Веб-дизайн",
    metric_photoshop: "Photoshop",
    metric_api: "API Разработка",
    yr_8: "· 8 ЛЕТ",
    yr_6: "· 6 ЛЕТ",
    metrics_years: "Лет опыта",
    metrics_missions: "Миссии",
    metrics_languages: "Языки",
    matrix_title: "<span class=\"tag\">▦</span> ТЕХ_МАТРИЦА // СТЕК <span class=\"hline\"></span><span class=\"idx\">[02]</span>",
    tech_backend: "БЭКЕНД",
    tech_framework: "ФРЕЙМВОРК",
    tech_concurrency: "АСИНХРОННОСТЬ",
    tech_async_http: "ASYNC HTTP",
    tech_frontend: "ФРОНТЕНД",
    tech_interface: "ИНТЕРФЕЙС",
    tech_paradigm: "ПАРАДИГМА",
    tech_database: "БАЗА ДАННЫХ",
    tech_server_admin: "АДМИН. СЕРВЕРОВ",
    tech_container: "КОНТЕЙНЕРЫ",
    tech_monitoring: "МОНИТОРИНГ",
    matrix_secondary: "ДОПОЛНИТЕЛЬНО: jQuery · DataLife CMS · Excel/CSV · JIRA · DevTools · ServiceDesk KB",
    diagnostics_title: "<span class=\"tag\">▥</span> ПОД_КАПОТОМ // ДИАГНОСТИКА <span class=\"hline\"></span><span class=\"idx\">[03]</span>",
    diag_line1: "Архитектура создана <b>с нуля</b> — чистая, модульная, собственной разработки",
    diag_line2: "ООП применяется в <b>JavaScript · PHP · Python</b> с глубоким пониманием принципов",
    diag_line3: "Глубокая <b>отладка систем</b> — погружение во внутренности для поиска лучшего решения",
    diag_line4: "Приоритет: <b>чистота кода и оптимизация</b> вместо простых путей",
    diag_line5: "REST API + серверная логика · Администрирование Linux (nginx, php, mysql, python)",
    diag_line6: "Крипто-автоматизация — скрипты арбитража, расчетов и анализа",
    diag_line7: "Быстро осваивает новые инструменты · подключается на любом этапе проекта",
    lang_title: "<span class=\"tag\">◭</span> ЯЗЫКОВЫЕ_ПАКЕТЫ <span class=\"hline\"></span><span class=\"idx\">[3]</span>",
    lang_ru: "Русский",
    lang_ru_lvl: "РОДНОЙ / СВОБОДНЫЙ",
    lang_en: "Английский",
    lang_en_lvl: "БАЗОВЫЙ",
    lang_ro: "Румынский",
    lang_ro_lvl: "БАЗОВЫЙ",
    meta_sector: "ОТРАСЛЬ",
    meta_sector_val: "IT / Технологии",
    meta_avail: "ДОСТУПЕН",
    meta_avail_val: "Открыт для предложений",
    meta_mobility: "МОБИЛЬНОСТЬ",
    meta_mobility_val: "Права кат. B · личный автомобиль",
    experience_title: "<span class=\"tag\">▶</span> ИСТОРИЯ_МИССИЙ // ЖУРНАЛ ОПЫТА <span class=\"hline\"></span><span class=\"idx\">[04]</span>",
    experience_filter_all: "Все Ops",
    experience_filter_python: "Python",
    experience_filter_php: "PHP",
    experience_filter_frontend: "Фронтенд",
    experience_role_py: "Python разработчик",
    experience_org_py: "ФРИЛАНС · КИШИНЁВ",
    experience_date_py: "ДЕК 2023 — НАСТ. ВРЕМЯ<span class=\"dur\">1Г 9М · АКТИВЕН</span>",
    exp_py_p1: "Разрабатывал и поддерживал бэкенд на Python для реальных операций",
    exp_py_p2: "Crypto API — сбор и анализ данных в реальном времени",
    exp_py_p3: "Асинхронное программирование с использованием <b>asyncio</b> и <b>aiohttp</b>",
    exp_py_p4: "Блокчейн-сети — логика ввода-вывода и маршрутизация оптимального пути",
    exp_py_p5: "Развертывание серверов Linux (python, mysql) · мониторинг и логирование",
    experience_role_php: "PHP разработчик",
    experience_org_php: "ФРИЛАНС · КИШИНЁВ",
    experience_date_php: "НОЯ 2018 — ДЕК 2023<span class=\"dur\">5 ЛЕТ 1 МЕС</span>",
    exp_php_p1: "Разработал рекламную платформу с нуля (PHP + JS)",
    exp_php_p2: "Расчеты биллинга, иерархические системы, статистика и личные кабинеты пользователей",
    exp_php_p3: "Бэкенд-сервисы на PHP · разработка кастомных API",
    exp_php_p4: "Работа с базами данных и конфигурация серверов — Linux, nginx, MySQL",
    exp_php_p5: "Рекламные креативы, баннеры и лендинги",
    experience_role_fe: "Фронтенд-разработчик и UI-дизайнер",
    experience_org_fe: "ФРИЛАНС · КИШИНЁВ",
    experience_date_fe: "МАРТ 2010 — НОЯ 2018<span class=\"dur\">8 ЛЕТ 9 МЕС</span>",
    exp_fe_p1: "Создавал сайты и шаблоны для CMS (включая DataLife Engine)",
    exp_fe_p2: "HTML, CSS — кроссбраузерная адаптивная верстка",
    exp_fe_p3: "Photoshop — макеты, логотипы, баннеры и графика",
    exp_fe_p4: "Ранняя интерактивность на JavaScript и jQuery",
    exp_fe_p5: "Прямое общение с клиентами и сдача проектов «под ключ»",
    telemetry_title: "<span class=\"tag\">◈</span> ТЕЛЕМЕТРИЯ <span class=\"hline\"></span><span class=\"idx\" id=\"teleTag\">ВСЕ</span>",
    tele_tag_all: "ВСЕ",
    tele_tag_python: "ПИ",
    tele_tag_php: "ПХП",
    tele_tag_frontend: "ФЭ",
    tele_note_all: "Агрегированный сигнал за <b>15 лет</b> фулстэк-работы. Три дисциплины, один оператор.",
    tele_note_python: "Профиль миссии: <b>бэкенд + крипто-операции с данными</b>. Async-first, под мониторингом, Linux-native.",
    tele_note_php: "Профиль миссии: <b>платформенная инженерия</b>. Разработал рекламную платформу с нуля — биллинг, иерархия, статистика.",
    tele_note_frontend: "Профиль миссии: <b>мастерство + поставка</b>. Пиксельная точность, кроссбраузерность, упор на дизайн.",
    bar_backend_engineering: "Разработка бэкенда",
    bar_frontend_ui: "Фронтенд / UI",
    bar_data_automation: "Данные и автоматизация",
    bar_server_devops: "Сервера / DevOps",
    bar_design_craft: "Дизайн и верстка",
    bar_async_io_asyncio: "Async I/O (asyncio)",
    bar_crypto_api_integ: "Интеграция Crypto API",
    bar_data_analysis: "Анализ данных",
    bar_linux_ops: "Операции Linux",
    bar_optimization: "Оптимизация",
    bar_backend_services: "Бэкенд-сервисы",
    bar_ad_platform_build: "Разработка рекл. платформ",
    bar_mysql: "MySQL",
    bar_server_config: "Конфигурация серверов",
    bar_custom_apis: "Кастомные API",
    bar_html_css: "HTML / CSS",
    bar_photoshop_design: "Дизайн в Photoshop",
    bar_responsive_layout: "Адаптивная верстка",
    bar_js_jquery: "JS / jQuery",
    bar_client_delivery: "Сдача проектов",
    boot_line1: "> инициализация ядра ...................",
    boot_line2: "> монтирование /profile/artem_mazur .....",
    boot_line3: "> загрузка модуля_личности [UID 479789] ..",
    boot_line4: "> компиляция ключевых_метрик ...........",
    boot_line5: "> индексация тех_матрицы ...............",
    boot_line6: "> анализ истории_миссий ................",
    boot_line7: "> калибровка массива телеметрии .........",
    boot_line8: "> установка соединения comms_link ......",
    boot_line9: "> все системы работают штатно",
    boot_val_ready: "ГОТОВО",
    boot_val_ok: "ОК",
    boot_val_metrics: "6/6",
    boot_val_stack: "12",
    boot_val_ops: "3 ОПС",
    boot_val_sync: "СИНХ",
    boot_val_live: "АКТИВ"
  },
  ro: {
    doc_title: "ARTEM MAZUR // CONSOLA DEZVOLTATORULUI FULL-STACK",
    boot_sub: "CONSOLA DEZVOLTATORULUI FULL-STACK // v2.4.1",
    boot_skip: "APĂSAȚI [ESC] PENTRU A SĂRI ▸",
    scan_btn: "SCANARE",
    topbar_crumb: "/ profil / <b>artem_mazur</b> / full-stack",
    topbar_sys: "SYS <span class=\"on\">● ONLINE</span>",
    topbar_location: "CHIȘINĂU",
    id_kicker: "// MODULE_IDENTITATE — UID 479789",
    id_role: "Dezvoltator Full-Stack",
    badge_status: "STATUS: ACTIV — PREGĂTIT PENTRU DEPLOY",
    badge_age: "VÂRSTĂ",
    badge_license: "PERMIS",
    badge_mode: "MOD",
    badge_mode_val: "LA DISTANȚĂ / HIBRID",
    comms_title: "<span class=\"tag\">▣</span> COMMS_LINK <span class=\"hline\"></span><span class=\"idx\">[3]</span>",
    comms_email: "EMAIL",
    comms_phone: "TELEFON",
    comms_location: "LOCAȚIE",
    comms_location_val: "Chișinău, Moldova",
    metrics_title: "<span class=\"tag\">▤</span> METRICI_PRINCIPALE // COMPETENȚĂ <span class=\"hline\"></span><span class=\"idx\">[01]</span>",
    metric_js: "JavaScript",
    metric_html: "HTML5",
    metric_css: "CSS3 / Machetare Adaptivă",
    metric_design: "Web Design",
    metric_photoshop: "Photoshop",
    metric_api: "Dezvoltare API",
    yr_8: "· 8 ANI",
    yr_6: "· 6 ANI",
    metrics_years: "Ani Activi",
    metrics_missions: "Misiuni",
    metrics_languages: "Limbi",
    matrix_title: "<span class=\"tag\">▦</span> MATRICEA_TEHNICĂ // STACK <span class=\"hline\"></span><span class=\"idx\">[02]</span>",
    tech_backend: "BACKEND",
    tech_framework: "FRAMEWORK",
    tech_concurrency: "CONCURRENCY",
    tech_async_http: "ASYNC HTTP",
    tech_frontend: "FRONTEND",
    tech_interface: "INTERFAȚĂ",
    tech_paradigm: "PARADIGMĂ",
    tech_database: "BAZĂ DE DATE",
    tech_server_admin: "ADMIN SERVER",
    tech_container: "CONTAINER",
    tech_monitoring: "MONITORIZARE",
    matrix_secondary: "SECUNDAR: jQuery · DataLife CMS · Excel/CSV · JIRA · DevTools · ServiceDesk KB",
    diagnostics_title: "<span class=\"tag\">▥</span> SUB_CAPOTĂ // DIAGNOSTICĂ <span class=\"hline\"></span><span class=\"idx\">[03]</span>",
    diag_line1: "Arhitectură construită <b>de la zero</b> — curată, modulară, design propriu",
    diag_line2: "OOP aplicat în <b>JavaScript · PHP · Python</b> cu înțelegere profundă a principiilor",
    diag_line3: "<b>Depanare de sistem</b> avansată — analiză internă pentru găsirea căii optime",
    diag_line4: "Prioritate: <b>claritatea codului și optimizarea</b> în loc de scurtături",
    diag_line5: "REST API + logică server-side · Administrare Linux (nginx, php, mysql, python)",
    diag_line6: "Automatizare crypto — scripturi de arbitraj, calcul și analiză",
    diag_line7: "Asimilează rapid instrumente noi · se alătură în orice etapă a proiectului",
    lang_title: "<span class=\"tag\">◭</span> PACHETE_DE_LIMBĂ <span class=\"hline\"></span><span class=\"idx\">[3]</span>",
    lang_ru: "Rusă",
    lang_ru_lvl: "MATERNĂ / FLUENT",
    lang_en: "Engleză",
    lang_en_lvl: "BASIC",
    lang_ro: "Română",
    lang_ro_lvl: "BASIC",
    meta_sector: "SECTOR",
    meta_sector_val: "IT / Tehnologie",
    meta_avail: "DISPONIBIL",
    meta_avail_val: "Disponibil pentru colaborare",
    meta_mobility: "MOBILITATE",
    meta_mobility_val: "Permis cat. B · vehicul propriu",
    experience_title: "<span class=\"tag\">▶</span> ISTORICUL_MISIUNILOR // LOG EXPERIENȚĂ <span class=\"hline\"></span><span class=\"idx\">[04]</span>",
    experience_filter_all: "Toate Ops",
    experience_filter_python: "Python",
    experience_filter_php: "PHP",
    experience_filter_frontend: "Front-End",
    experience_role_py: "Dezvoltator Python",
    experience_org_py: "FREELANCE · CHIȘINĂU",
    experience_date_py: "DEC 2023 — PREZENT<span class=\"dur\">1AN 9L · ACTIV</span>",
    exp_py_p1: "Dezvoltarea și întreținerea instrumentelor backend Python pentru operațiuni live",
    exp_py_p2: "API-uri Crypto — colectare și analiză de date în timp real",
    exp_py_p3: "Programare asincronă cu <b>asyncio</b> &amp; <b>aiohttp</b>",
    exp_py_p4: "Rețele Blockchain — logică I/O și rutare pe calea optimă",
    exp_py_p5: "Deploy pe servere Linux (python, mysql) · monitorizare & logging",
    experience_role_php: "Dezvoltator PHP",
    experience_org_php: "FREELANCE · CHIȘINĂU",
    experience_date_php: "NOV 2018 — DEC 2023<span class=\"dur\">5 ANI 1 LUNĂ</span>",
    exp_php_p1: "Dezvoltarea unei platforme publicitare personalizate de la zero (PHP + JS)",
    exp_php_p2: "Calcule de facturare, sisteme ierarhice, statistici și cabinete de utilizator",
    exp_php_p3: "Servicii backend PHP · servicii API personalizate",
    exp_php_p4: "Lucru cu baze de date & config server — Linux, nginx, MySQL",
    exp_php_p5: "Creativitate publicitară, bannere & pagini de destinație",
    experience_role_fe: "Dezvoltator Front-End & UI Designer",
    experience_org_fe: "FREELANCE · CHIȘINĂU",
    experience_date_fe: "MAR 2010 — NOV 2018<span class=\"dur\">8 ANI 9 LUNI</span>",
    exp_fe_p1: "Dezvoltare site-uri & șabloane CMS (inclusiv DataLife Engine)",
    exp_fe_p2: "HTML, CSS — machetare adaptivă cross-browser",
    exp_fe_p3: "Photoshop — machete, logo-uri, bannere & grafică",
    exp_fe_p4: "Interactivitate JavaScript timpurie & jQuery",
    exp_fe_p5: "Comunicare directă cu clienții & livrare de proiecte end-to-end",
    telemetry_title: "<span class=\"tag\">◈</span> TELEMETRIE <span class=\"hline\"></span><span class=\"idx\" id=\"teleTag\">ALL</span>",
    tele_tag_all: "TOATE",
    tele_tag_python: "PY",
    tele_tag_php: "PHP",
    tele_tag_frontend: "FE",
    tele_note_all: "Semnal agregat pe parcursul a <b>15 ani</b> de operațiuni full-stack. Trei discipline, un singur operator.",
    tele_note_python: "Profil de misiune: <b>backend + operațiuni date crypto</b>. Async-first, monitorizat, Linux-native.",
    tele_note_php: "Profil de misiune: <b>platform engineering</b>. Dezvoltat publicitate ad-tech de la zero — facturare, ierarhie, statistici.",
    tele_note_frontend: "Profil de misiune: <b>măiestrie + livrare</b>. Pixel-perfect, cross-browser, ghidat de design.",
    bar_backend_engineering: "Inginerie Backend",
    bar_frontend_ui: "Frontend / UI",
    bar_data_automation: "Date & Automatizare",
    bar_server_devops: "Server / DevOps",
    bar_design_craft: "Design Craft",
    bar_async_io_asyncio: "I/O Asincron (asyncio)",
    bar_crypto_api_integ: "Integrare API Crypto",
    bar_data_analysis: "Analiză de Date",
    bar_linux_ops: "Operațiuni Linux",
    bar_optimization: "Optimizare",
    bar_backend_services: "Servicii Backend",
    bar_ad_platform_build: "Construire Platformă Ad",
    bar_mysql: "MySQL",
    bar_server_config: "Configurare Server",
    bar_custom_apis: "API-uri Personalizate",
    bar_html_css: "HTML / CSS",
    bar_photoshop_design: "Design Photoshop",
    bar_responsive_layout: "Machetare Adaptivă",
    bar_js_jquery: "JS / jQuery",
    bar_client_delivery: "Livrare Clienți",
    boot_line1: "> inițializare kernel ...................",
    boot_line2: "> montare /profile/artem_mazur ..........",
    boot_line3: "> încărcare module_identitate [UID 479789] ...",
    boot_line4: "> compilare metrici_principale .................",
    boot_line5: "> indexare matrice_tehnică ...................",
    boot_line6: "> analiză istoric_misiuni ................",
    boot_line7: "> calibrare matrice telemetrie ............",
    boot_line8: "> stabilire legătură comms_link ................",
    boot_line9: "> toate sistemele nominale",
    boot_val_ready: "PREGĂTIT",
    boot_val_ok: "OK",
    boot_val_metrics: "6/6",
    boot_val_stack: "12",
    boot_val_ops: "3 OPS",
    boot_val_sync: "SYNC",
    boot_val_live: "LIVE"
  }
};

/* ============ LIVE CLOCK ============ */
const clk = document.getElementById('clock');
function tick(){
  const d = new Date();
  clk.textContent = [d.getHours(),d.getMinutes(),d.getSeconds()].map(n=>String(n).padStart(2,'0')).join(':');
}
tick(); setInterval(tick,1000);

/* ============ TELEMETRY DATA ============ */
const TELE = {
  all:      {tag:'ALL',  note:'Aggregate signal across <b>15 years</b> of full-stack operations. Three disciplines, one operator.',
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

let currentLang = localStorage.getItem('lang') || 'en';

function renderTele(key){
  const t = TELE[key];
  const translatedTag = TRANSLATIONS[currentLang]['tele_tag_' + key] || t.tag;
  const translatedNote = TRANSLATIONS[currentLang]['tele_note_' + key] || t.note;
  
  teleTag.textContent = translatedTag;
  teleNote.innerHTML = translatedNote;
  
  teleBars.innerHTML = t.bars.map(([n,v])=>{
    const normalizedKey = 'bar_' + n.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');
    const translatedName = TRANSLATIONS[currentLang][normalizedKey] || n;
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
    const txt = TRANSLATIONS[currentLang][txtKey] || txtKey;
    const okv = TRANSLATIONS[currentLang][okvKey] || okvKey;
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
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
  
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
  
  if (TRANSLATIONS[lang]['doc_title']) {
    document.title = TRANSLATIONS[lang]['doc_title'];
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
setLanguage(currentLang);

if(REDUCED){
  bootEl.style.display='none'; bdone=true;
  document.body.classList.remove('loading');
  revealAll();
  animateMetrics(); animateCounters(); renderTele('all');
} else {
  runBoot();
}
