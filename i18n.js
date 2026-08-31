/**
 * ABRORJON MUHAMMADALIYEV | DATA ANALYST PORTFOLIO
 * I18N.JS - MULTILINGUAL DICTIONARY (UZ, RU, EN) & DYNAMIC TRANSLATION ENGINE
 */

const translations = {
  uz: {
    nav: {
      role: "/ Data Analyst",
      about: "Haqimda",
      skills: "Ko'nikmalar",
      dashboard: "Live Demo",
      projects: "Loyihalar",
      process: "Jarayon",
      experience: "Ta'lim & Tajriba",
      contact: "Bog'lanish"
    },
    hero: {
      status: "Yangi loyihalar & ish takliflari uchun ochiq",
      location: "Farg'ona, O'zbekiston",
      roles: [
        "Data Analyst",
        "Power BI & DAX Specialist",
        "Financial & Credit Risk Analyst",
        "SQL & Python Data Engineer"
      ],
      description: "Xom va tarqoq ma'lumotlarni aniq, harakatga undovchi biznes insightlariga aylantiraman. SQL, Python va Power BI / DAX yordamida moliya, kredit xavflari, savdo va operatsion jarayonlarni chuqur tahlil qilaman.",
      cta_projects: "Loyihalarni ko'rish",
      cta_demo: "Live BI Demo",
      cta_contact: "Bog'lanish",
      cta_cv: "Rezyume (CV)",
      core_stack: "Stack:"
    },
    about: {
      tag: "haqimda",
      title: "Raqamlar ortidagi tendensiya va qonuniyatlarni ko'raman",
      p1: "Men <strong>Farg'ona Davlat Texnika Universiteti</strong>da Bank ishi va Moliya yo'nalishida tahsil olganman. Shu bilan birga, <strong>Najot Ta'lim</strong> akademiyasida intensiv <em>Data Analytics</em> dasturini muvaffaqiyatli yakunlab, amaliy ma'lumotlar tahlili bo'yicha mustahkam ko'nikmalarga ega bo'ldim.",
      p2: "Asosiy ixtisosligim — <strong>SQL, Python va Power BI (DAX)</strong> yordamida biznes muammolarining tub sabablarini topish: savdo pasayishi omillari, mijozlar qoniqishi, anomaliyalarni filtrlash, kredit risklarini baholash va interaktiv boshqaruv panellari (dashboardlar) orqali kompaniya rahbarlariga qaror qabul qilishni osonlashtirish.",
      p3: "Hozirda bank-moliya va tijorat sohalari uchun analitik yechimlar yaratmoqdaman va xalqaro hamda mahalliy kompaniyalarga data-konsalting xizmatlarini ko'rsatishga tayyorman.",
      v1_title: "Aniq Qarorlar",
      v1_desc: "Taxminlarga emas, balki 100% tekshirilgan raqamlar va faktlarga tayangan strategiyalar.",
      v2_title: "Avtomatlashtirilgan ETL",
      v2_desc: "Qo'lda hisoblashlarni minimallashtirib, avtomatik yangilanuvchi hisobotlar tizimi.",
      v3_title: "Biznes Foydasi",
      v3_desc: "Xarajatlarni qisqartirish, daromad o'sish nuqtalarini va xavflarni oldindan aniqlash."
    },
    stats: {
      github: "GitHub Repositories",
      dashboards: "Power BI & Python Dashboards",
      rows: "Tahlil qilingan qatorlar (Rows)",
      accuracy: "Data Cleaning & Precision"
    },
    skills: {
      tag: "tech stack",
      title: "Ishlatadigan vositalarim & Kompetensiyalar",
      tab_all: "Barcha Vositalar",
      tab_bi: "BI & Vizualizatsiya",
      tab_code: "SQL & Python",
      tab_domain: "Moliya & Risk",
      sql_desc: "Murakkab Joinlar, Window Functions, Subqueries, CTEs, Indexing va ma'lumotlarni tozalash.",
      bi_desc: "Power Query orqali modellashtirish, dinamik DAX o'lchovlari, drill-through, KPI kartalar va dizayn.",
      py_desc: "Exploratory Data Analysis (EDA), Scipy statistik testlar, Matplotlib/Seaborn va skriptlar.",
      xl_desc: "Pivot jadvallar, murakkab formulalar (XLOOKUP, INDEX/MATCH), moliyaviy modellashtirish.",
      risk_desc: "Kredit portfeli tahlili, NPL / Default risk modellashtirish, kredit scoring tamoyillari.",
      story_desc: "Qaror qabul qiluvchi rahbarlar uchun tushunarli, shovqinsiz va ta'sirchan vizual hisobotlar tuzish."
    },
    dashboard: {
      tag: "interactive demo",
      title: "Jonli Tahliliy Dashboard Simulyatori",
      subtitle: "Quyidagi real vaqt rejimida ishlovchi interaktiv boshqaruv paneli orqali ma'lumotlarni tahlil qilish, filtrlash va vizualizatsiyani bevosita sinab ko'ring.",
      tab_sales: "E-Commerce Savdo",
      tab_credit: "Kredit Riski & NPL",
      tab_flights: "Aviatsiya & Kechikishlar",
      tab_churn: "Mijozlar Retention",
      filter_region: "Hudud:",
      filter_period: "Davr:",
      reg_all: "Barcha Hududlar",
      reg_fergana: "Farg'ona v.",
      reg_tashkent: "Toshkent sh.",
      reg_samarkand: "Samarqand v.",
      period_30: "Oxirgi 30 kun",
      period_90: "Oxirgi chorak (QTD)",
      period_ytd: "Yillik (YTD)",
      insight_label: "Avtomatlashtirilgan Insight:"
    },
    projects: {
      tag: "featured work",
      title: "Tanlangan Portfolio Loyihalari",
      subtitle: "Real biznes muammolarini hal qilish, ma'lumotlarni tozalash va vizual tahlilga qaratilgan ishlarim. Batafsil ko'rish uchun kartaga bosing.",
      filter_all: "Barchasi (8)",
      filter_bi: "Power BI",
      filter_py: "Python & EDA",
      filter_sql: "SQL & ETL",
      filter_risk: "Kredit & Moliya"
    },
    process: {
      tag: "workflow",
      title: "Ishlash Jarayonim & Metodologiya",
      s1_title: "Muammo & Savol",
      s1_desc: "Biznes muammosini tushunish, asosiy KPIlarni aniqlash va qaysi savollarga javob kerakligini belgilash.",
      s2_title: "Tozalash & ETL",
      s2_desc: "SQL va Python yordamida dublikatlar, yetishmayotgan qiymatlar va anomaliyalarni bartaraf etish.",
      s3_title: "Chuqur Tahlil (EDA)",
      s3_desc: "Korrelyatsiyalar, mavsumiy tendensiyalar va sabab-oqibat bog'liqliklarini aniqlash.",
      s4_title: "BI Vizualizatsiya",
      s4_desc: "Power BI'da interaktiv, intuitiv va qaror qabul qilishni tezlashtiruvchi dashboardlar qurish.",
      s5_title: "Amaliy Tavsiyalar",
      s5_desc: "Mijoz yoki kompaniya rahbariyati uchun aniq, daromad keltiruvchi biznes harakatlar rejasini taqdim etish."
    },
    exp: {
      tag: "background",
      title: "Ta'lim, Sertifikatlar & Xizmatlar",
      edu_title: "Ta'lim & Akademik Yo'nalish",
      edu1_title: "Farg'ona Davlat Texnika Universiteti",
      edu1_sub: "Bakalavr: Bank ishi va Moliya",
      edu1_desc: "Moliyaviy tahlil, buxgalteriya hisobi, bank risklarini boshqarish va iqtisodiy modellashtirish asoslari.",
      edu2_title: "Najot Ta'lim Akademiyasi",
      edu2_sub: "Intensiv Data Analytics Dasturi",
      edu2_desc: "Amaliy SQL (PostgreSQL), Python (Pandas/NumPy), Power BI, DAX, Data Storytelling va real biznes keyslari tahlili.",
      edu3_title: "Freelance Data Consulting",
      edu3_sub: "Kredit va Tijorat Tahlillari",
      edu3_desc: "Mahalliy bizneslarga sotuv hisobotlarini avtomatlashtirish va kredit portfeli tahlillarini yo'lga qo'yish.",
      services_title: "Qanday yordam bera olaman?",
      srv1_title: "Interaktiv Power BI Dashboardlar",
      srv1_desc: "Rahbariyat va bo'limlar uchun real vaqt rejimida yangilanuvchi, yuqori darajada moslashuvchan boshqaruv panellari.",
      srv2_title: "SQL Ma'lumotlar Bazasini Tayyorlash & ETL",
      srv2_desc: "Turli manbalardagi ma'lumotlarni yig'ish, tozalash, yagona tahliliy modelga keltirish va so'rovlarni optimallashtirish.",
      srv3_title: "Kredit & Moliyaviy Xatarlarni Baholash",
      srv3_desc: "Kredit qaytmaslik xatarlari, lending portfeli diagnostikasi va moliyaviy oqimlarni chuqur tahlil qilish.",
      srv4_title: "Python Bilan Avtomatlashtirish & EDA",
      srv4_desc: "Katta hajmdagi ma'lumotlarni skriptlar orqali qayta ishlash, qonuniyatlarni topish va hisobotlarni avtomatlashtirish."
    },
    contact: {
      tag: "get in touch",
      title: "Birgalikda Ishlaylikmi?",
      subtitle: "Ma'lumotlaringizni biznes foydasiga aylantirish, dashboard qurish yoki loyihalarni muhokama qilish uchun bemalol yozing.",
      direct_title: "To'g'ridan-to'g'ri Aloqa",
      direct_sub: "Tezkor javob olish uchun Telegram yoki Email orqali bog'lanishingiz mumkin.",
      phone: "Telefon",
      form_name: "Ismingiz *",
      form_email: "Email manzilingiz *",
      form_service: "Qanday xizmat kerak?",
      srv_opt1: "Power BI Dashboard yaratish",
      srv_opt2: "SQL / Database ETL & Tozalash",
      srv_opt3: "Kredit / Moliya Tahlili",
      srv_opt4: "Python Analitika & Avtomatlashtirish",
      srv_opt5: "To'liq stavka (Full-time) ish taklifi",
      srv_opt6: "Boshqa masala",
      form_msg: "Xabaringiz *",
      form_submit: "Xabarni Yuborish"
    },
    footer: {
      tagline: "Data-driven qarorlar orqali biznesingizni yangi bosqichga olib chiqing.",
      location: "Farg'ona, O'zbekiston.",
      tz: "Farg'ona Vaqti:"
    },
    modal: {
      problem_title: "Muammo & Maqsad",
      method_title: "Tahlil & Yechim Usuli",
      impact_title: "Biznes Foydasi & Asosiy Metrikalar",
      view_github: "GitHub'da ko'rish"
    },
    toasts: {
      copy_email: "Email nusxalandi!",
      copy_phone: "Telefon raqami nusxalandi!",
      form_sent: "Rahmat! Xabaringiz muvaffaqiyatli qabul qilindi.",
      theme_switched: "Mavzu o'zgartirildi",
      lang_switched: "Til o'zgartirildi: O'zbekcha",
      sound_on: "Ovoz effektlari yoqildi",
      sound_off: "Ovoz effektlari o'chirildi"
    }
  },

  ru: {
    nav: {
      role: "/ Data Analyst",
      about: "Обо мне",
      skills: "Навыки",
      dashboard: "Live Демо",
      projects: "Проекты",
      process: "Процесс",
      experience: "Опыт и Образование",
      contact: "Контакты"
    },
    hero: {
      status: "Открыт для новых проектов и предложений",
      location: "Фергана, Узбекистан",
      roles: [
        "Data Analyst",
        "Специалист Power BI & DAX",
        "Аналитик финансовых и кредитных рисков",
        "Инженер данных SQL & Python"
      ],
      description: "Превращаю сырые и разрозненные данные в четкие бизнес-инсайты для принятия решений. Анализирую финансы, кредитные риски, e-commerce и операционную эффективность с помощью SQL, Python и Power BI / DAX.",
      cta_projects: "Смотреть проекты",
      cta_demo: "Live BI Демо",
      cta_contact: "Связаться",
      cta_cv: "Резюме (CV)",
      core_stack: "Стек:"
    },
    about: {
      tag: "обо мне",
      title: "Вижу скрытые закономерности и тенденции за цифрами",
      p1: "Я обучался в <strong>Ферганском государственном техническом университете</strong> по направлению «Банковское дело и финансы». Дополнительно успешно завершил интенсивную программу <em>Data Analytics</em> в академии <strong>Najot Ta'lim</strong>, закрепив фундаментальные навыки практического анализа данных.",
      p2: "Моя ключевая специализация — использование <strong>SQL, Python и Power BI (DAX)</strong> для выявления первопричин проблем: падение продаж, удержание клиентов, оценка рисков дефолта (NPL) и создание интерактивных управленческих дашбордов для топ-менеджмента.",
      p3: "В настоящее время разрабатываю аналитические решения для финансово-банковского сектора и готов предоставить услуги дата-консалтинга международным и локальным проектам.",
      v1_title: "Точные решения",
      v1_desc: "Стратегии, основанные на 100% проверенных цифрах и фактах, а не на догадках.",
      v2_title: "Автоматизированный ETL",
      v2_desc: "Минимизация ручных расчетов и настройка автоматического обновления отчетности.",
      v3_title: "Польза для бизнеса",
      v3_desc: "Сокращение издержек, поиск точек роста прибыли и превентивное обнаружение рисков."
    },
    stats: {
      github: "Репозиториев на GitHub",
      dashboards: "Дашбордов Power BI & Python",
      rows: "Проанализированных строк данных",
      accuracy: "Очистка данных и точность"
    },
    skills: {
      tag: "tech stack",
      title: "Инструменты и Ключевые Компетенции",
      tab_all: "Все инструменты",
      tab_bi: "BI и Визуализация",
      tab_code: "SQL и Python",
      tab_domain: "Финансы и Риски",
      sql_desc: "Сложные соединения (Joins), оконные функции, CTE, подзапросы, индексация и очистка данных.",
      bi_desc: "Моделирование данных в Power Query, динамические метрики DAX, drill-through, KPI карточки.",
      py_desc: "Разведочный анализ данных (EDA), статистические тесты Scipy, визуализация в Matplotlib/Seaborn.",
      xl_desc: "Сводные таблицы, расширенные формулы (XLOOKUP, INDEX/MATCH), финансовые модели.",
      risk_desc: "Анализ кредитного портфеля, оценка NPL и риска неплатежей, основы скоринга.",
      story_desc: "Построение информативных, чистых и убедительных визуальных отчетов для лиц, принимающих решения."
    },
    dashboard: {
      tag: "interactive demo",
      title: "Интерактивный симулятор BI-дашборда",
      subtitle: "Протестируйте фильтрацию, переключение метрик и динамическую визуализацию данных в реальном времени.",
      tab_sales: "E-Commerce Продажи",
      tab_credit: "Кредитный Риск & NPL",
      tab_flights: "Авиация & Задержки",
      tab_churn: "Удержание Клиентов",
      filter_region: "Регион:",
      filter_period: "Период:",
      reg_all: "Все регионы",
      reg_fergana: "Ферганская обл.",
      reg_tashkent: "г. Ташкент",
      reg_samarkand: "Самаркандская обл.",
      period_30: "Последние 30 дней",
      period_90: "Последний квартал (QTD)",
      period_ytd: "С начала года (YTD)",
      insight_label: "Автоматический Инсайт:"
    },
    projects: {
      tag: "featured work",
      title: "Избранные Проекты Портфолио",
      subtitle: "Работы по решению реальных бизнес-задач, очистке данных и созданию аналитических панелей. Кликните по карточке для деталей.",
      filter_all: "Все (8)",
      filter_bi: "Power BI",
      filter_py: "Python & EDA",
      filter_sql: "SQL & ETL",
      filter_risk: "Кредиты и Финансы"
    },
    process: {
      tag: "workflow",
      title: "Мой Рабочий Процесс и Методология",
      s1_title: "Проблема & Вопрос",
      s1_desc: "Понимание бизнес-задачи, определение ключевых KPI и формулирование точных вопросов.",
      s2_title: "Очистка & ETL",
      s2_desc: "Устранение дубликатов, пропусков и выбросов с использованием SQL и Python.",
      s3_title: "Глубокий анализ (EDA)",
      s3_desc: "Поиск корреляций, сезонности и скрытых причинно-следственных связей.",
      s4_title: "BI Визуализация",
      s4_desc: "Создание интерактивных и интуитивно понятных дашбордов в Power BI.",
      s5_title: "Практические рекомендации",
      s5_desc: "Презентация четкого плана действий для роста выручки и оптимизации процессов."
    },
    exp: {
      tag: "background",
      title: "Образование, Сертификаты и Услуги",
      edu_title: "Образование и Академический профиль",
      edu1_title: "Ферганский Государственный Технический Университет",
      edu1_sub: "Бакалавр: Банковское дело и Финансы",
      edu1_desc: "Финансовый анализ, бухгалтерский учет, управление банковскими рисками и основы эконометрики.",
      edu2_title: "Академия Najot Ta'lim",
      edu2_sub: "Интенсивная программа Data Analytics",
      edu2_desc: "Практический SQL (PostgreSQL), Python (Pandas/NumPy), Power BI, DAX, Data Storytelling и бизнес-кейсы.",
      edu3_title: "Фриланс Консалтинг Данных",
      edu3_sub: "Кредитная и Коммерческая Аналитика",
      edu3_desc: "Автоматизация отчетности по продажам и аудит кредитных портфелей для малого и среднего бизнеса.",
      services_title: "Чем я могу помочь вашему бизнесу?",
      srv1_title: "Интерактивные дашборды Power BI",
      srv1_desc: "Качественные, обновляемые в реальном времени панели управления для руководителей и команд.",
      srv2_title: "Подготовка баз данных SQL & ETL",
      srv2_desc: "Сбор данных из различных источников, очистка, приведение к аналитической схеме «Звезда» и оптимизация запросов.",
      srv3_title: "Оценка кредитных и финансовых рисков",
      srv3_desc: "Диагностика невозвратных займов (NPL), сегментация заемщиков и финансовый стресс-анализ.",
      srv4_title: "Автоматизация и анализ на Python",
      srv4_desc: "Обработка больших таблиц скриптами, поиск трендов и генерация автоматических сводок."
    },
    contact: {
      tag: "get in touch",
      title: "Давайте Работать Вместе!",
      subtitle: "Напишите мне, чтобы обсудить разработку дашборда, аудит данных или вакансию.",
      direct_title: "Прямые Контакты",
      direct_sub: "Для быстрого ответа свяжитесь со мной через Telegram или Email.",
      phone: "Телефон",
      form_name: "Ваше имя *",
      form_email: "Ваш Email *",
      form_service: "Какая услуга вас интересует?",
      srv_opt1: "Разработка Power BI дашборда",
      srv_opt2: "SQL / База данных ETL и очистка",
      srv_opt3: "Кредитный / Финансовый анализ",
      srv_opt4: "Python аналитика и автоматизация",
      srv_opt5: "Предложение о постоянной работе (Full-time)",
      srv_opt6: "Другой вопрос",
      form_msg: "Ваше сообщение *",
      form_submit: "Отправить сообщение"
    },
    footer: {
      tagline: "Выводите бизнес на новый уровень на основе решений, подкрепленных данными.",
      location: "Фергана, Узбекистан.",
      tz: "Время в Фергане:"
    },
    modal: {
      problem_title: "Проблема и Цель",
      method_title: "Методология и Решение",
      impact_title: "Бизнес-эффект и Метрики",
      view_github: "Смотреть на GitHub"
    },
    toasts: {
      copy_email: "Email скопирован в буфер!",
      copy_phone: "Номер телефона скопирован!",
      form_sent: "Спасибо! Ваше сообщение успешно отправлено.",
      theme_switched: "Тема оформления изменена",
      lang_switched: "Язык интерфейса: Русский",
      sound_on: "Звуковые эффекты включены",
      sound_off: "Звуковые эффекты отключены"
    }
  },

  en: {
    nav: {
      role: "/ Data Analyst",
      about: "About",
      skills: "Skills",
      dashboard: "Live Demo",
      projects: "Projects",
      process: "Process",
      experience: "Experience & Edu",
      contact: "Contact"
    },
    hero: {
      status: "Available for new projects & full-time roles",
      location: "Fergana, Uzbekistan",
      roles: [
        "Data Analyst",
        "Power BI & DAX Specialist",
        "Financial & Credit Risk Analyst",
        "SQL & Python Data Engineer"
      ],
      description: "Transforming raw, complex datasets into actionable business intelligence. Specializing in SQL, Python, and Power BI / DAX to solve financial risk, sales trends, and operational bottlenecks.",
      cta_projects: "Explore Projects",
      cta_demo: "Live BI Demo",
      cta_contact: "Get in Touch",
      cta_cv: "Download CV",
      core_stack: "Stack:"
    },
    about: {
      tag: "about",
      title: "Discovering actionable stories behind numbers and data",
      p1: "I studied Banking and Finance at <strong>Fergana State Technical University</strong> and successfully completed the intensive <em>Data Analytics</em> program at <strong>Najot Ta'lim</strong> Academy, acquiring deep practical data modeling and reporting skills.",
      p2: "My core expertise lies in utilizing <strong>SQL, Python, and Power BI (DAX)</strong> to uncover root causes of business challenges: sales drops, customer churn, NPL credit defaults, and providing executive dashboards that empower data-driven decisions.",
      p3: "Currently building analytical pipelines for finance and commercial sectors, ready to deliver data consulting and analytics for international and local enterprises.",
      v1_title: "Precise Decisions",
      v1_desc: "Data-backed strategies relying on 100% verified facts, eliminating guesswork.",
      v2_title: "Automated ETL",
      v2_desc: "Minimizing manual spreadsheets with self-refreshing automated reporting pipelines.",
      v3_title: "Business ROI",
      v3_desc: "Cutting operational costs, identifying revenue growth drivers, and preventing risks."
    },
    stats: {
      github: "GitHub Repositories",
      dashboards: "Power BI & Python Dashboards",
      rows: "Rows of Data Analyzed",
      accuracy: "Data Cleaning & Precision"
    },
    skills: {
      tag: "tech stack",
      title: "Toolbox & Core Competencies",
      tab_all: "All Tools",
      tab_bi: "BI & Visualization",
      tab_code: "SQL & Python",
      tab_domain: "Finance & Risk",
      sql_desc: "Complex Joins, Window Functions, Subqueries, CTEs, Indexing, and data sanitization.",
      bi_desc: "Power Query modeling, dynamic DAX measures, drill-through pages, KPI scorecards.",
      py_desc: "Exploratory Data Analysis (EDA), Scipy statistical tests, Matplotlib/Seaborn visualization.",
      xl_desc: "Pivot Tables, advanced formulas (XLOOKUP, INDEX/MATCH), financial scenario modeling.",
      risk_desc: "Loan portfolio health, NPL / Default risk analysis, credit scoring fundamentals.",
      story_desc: "Crafting intuitive, noise-free, high-impact executive visual summaries for key stakeholders."
    },
    dashboard: {
      tag: "interactive demo",
      title: "Live BI Dashboard Simulator",
      subtitle: "Explore interactive filtering, metric toggles, and dynamic SVG charts in real-time below.",
      tab_sales: "E-Commerce Sales",
      tab_credit: "Credit Risk & NPL",
      tab_flights: "Aviation & Delays",
      tab_churn: "Customer Retention",
      filter_region: "Region:",
      filter_period: "Period:",
      reg_all: "All Regions",
      reg_fergana: "Fergana Reg.",
      reg_tashkent: "Tashkent City",
      reg_samarkand: "Samarkand Reg.",
      period_30: "Last 30 Days",
      period_90: "Quarter to Date (QTD)",
      period_ytd: "Year to Date (YTD)",
      insight_label: "Automated Insight:"
    },
    projects: {
      tag: "featured work",
      title: "Featured Portfolio Projects",
      subtitle: "End-to-end case studies solving real business challenges through rigorous data cleaning, EDA, and BI visualization. Click cards to view details.",
      filter_all: "All (8)",
      filter_bi: "Power BI",
      filter_py: "Python & EDA",
      filter_sql: "SQL & ETL",
      filter_risk: "Credit & Finance"
    },
    process: {
      tag: "workflow",
      title: "My Workflow & Analytical Methodology",
      s1_title: "Problem & Scoping",
      s1_desc: "Understanding business objectives, defining core KPIs, and establishing success metrics.",
      s2_title: "Data Cleaning & ETL",
      s2_desc: "Handling missing values, deduplication, and anomaly filtering via SQL and Python.",
      s3_title: "Deep EDA",
      s3_desc: "Finding correlations, seasonality patterns, and cause-and-effect drivers.",
      s4_title: "BI Dashboards",
      s4_desc: "Building clean, interactive Power BI dashboards designed for immediate decision-making.",
      s5_title: "Actionable Insights",
      s5_desc: "Delivering concrete strategic recommendations that directly improve ROI and efficiency."
    },
    exp: {
      tag: "background",
      title: "Education, Certifications & Services",
      edu_title: "Academic Background",
      edu1_title: "Fergana State Technical University",
      edu1_sub: "Bachelor's Degree: Banking and Finance",
      edu1_desc: "Financial analysis, accounting standards, banking risk management, and economic modeling fundamentals.",
      edu2_title: "Najot Ta'lim Academy",
      edu2_sub: "Intensive Data Analytics Program",
      edu2_desc: "Hands-on PostgreSQL, Python (Pandas/NumPy), Power BI, DAX, Data Storytelling, and real-world business case studies.",
      edu3_title: "Freelance Data Consulting",
      edu3_sub: "Credit and Commercial Analytics",
      edu3_desc: "Automating sales reports and conducting loan portfolio risk audits for regional businesses.",
      services_title: "How Can I Help Your Business?",
      srv1_title: "Interactive Power BI Dashboards",
      srv1_desc: "Executive and operational real-time reporting dashboards with modern UX and custom DAX metrics.",
      srv2_title: "SQL Database Prep & ETL",
      srv2_desc: "Aggregating disparate data sources, schema design (Star Schema), cleansing, and query optimization.",
      srv3_title: "Credit & Financial Risk Diagnostics",
      srv3_desc: "Non-performing loan (NPL) diagnostics, default risk modeling, and financial cash flow analysis.",
      srv4_title: "Python Data Automation & EDA",
      srv4_desc: "Large-scale batch processing, automated report generation, and statistical pattern discovery."
    },
    contact: {
      tag: "get in touch",
      title: "Let's Work Together!",
      subtitle: "Reach out to discuss building executive dashboards, solving data puzzles, or discussing full-time opportunities.",
      direct_title: "Direct Contact",
      direct_sub: "For quick inquiries, feel free to reach out via Telegram or Email.",
      phone: "Phone",
      form_name: "Your Name *",
      form_email: "Your Email *",
      form_service: "Service Required",
      srv_opt1: "Power BI Dashboard Development",
      srv_opt2: "SQL Database ETL & Cleaning",
      srv_opt3: "Credit & Financial Risk Analysis",
      srv_opt4: "Python Analytics & Automation",
      srv_opt5: "Full-time Job Opportunity",
      srv_opt6: "Other Inquiry",
      form_msg: "Your Message *",
      form_submit: "Send Message"
    },
    footer: {
      tagline: "Empowering business growth through data-driven decisions.",
      location: "Fergana, Uzbekistan.",
      tz: "Fergana Time:"
    },
    modal: {
      problem_title: "Problem & Objective",
      method_title: "Methodology & Solution",
      impact_title: "Business Impact & Key Metrics",
      view_github: "View on GitHub"
    },
    toasts: {
      copy_email: "Email copied to clipboard!",
      copy_phone: "Phone number copied!",
      form_sent: "Thank you! Your message was sent successfully.",
      theme_switched: "Theme changed",
      lang_switched: "Language set to: English",
      sound_on: "Sound effects enabled",
      sound_off: "Sound effects muted"
    }
  }
};

let currentLang = localStorage.getItem('am_portfolio_lang') || 'uz';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'uz';
  currentLang = lang;
  localStorage.setItem('am_portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update UI Elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedTranslation(lang, key);
    if (value) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  // Update Flag & Code in Navbar
  const flagEl = document.getElementById('current-flag');
  const codeEl = document.getElementById('current-lang-code');
  if (flagEl && codeEl) {
    flagEl.textContent = lang.toUpperCase();
    codeEl.textContent = lang.toUpperCase();
  }

  // Update active state in language dropdown
  document.querySelectorAll('.lang-item').forEach(item => {
    if (item.getAttribute('data-lang') === lang) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Notify custom events for components
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function getNestedTranslation(lang, keyPath) {
  const keys = keyPath.split('.');
  let current = translations[lang];
  for (const k of keys) {
    if (current && current[k] !== undefined) {
      current = current[k];
    } else {
      return null;
    }
  }
  return current;
}

function t(keyPath) {
  return getNestedTranslation(currentLang, keyPath) || keyPath;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // Setup dropdown toggle
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.querySelector('.lang-dropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
      const isExpanded = langDropdown.classList.contains('open');
      langBtn.setAttribute('aria-expanded', isExpanded);
    });

    document.querySelectorAll('.lang-item').forEach(item => {
      item.addEventListener('click', () => {
        const selectedLang = item.getAttribute('data-lang');
        setLanguage(selectedLang);
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
        if (window.showToast) {
          window.showToast(t('toasts.lang_switched'));
        }
        if (window.playSound) window.playSound('click');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
