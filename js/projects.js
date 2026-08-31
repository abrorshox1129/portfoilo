/**
 * ABRORJON MUHAMMADALIYEV | DATA ANALYST PORTFOLIO
 * PROJECTS.JS - REAL CASE STUDIES DATASET, FILTERING & DEEP-DIVE MODALS
 */

const ProjectsData = [
  {
    id: 'proj-1',
    category: 'powerbi',
    tagCategory: 'Power BI & DAX',
    title: {
      uz: 'Bank Kredit Riski & NPL Portfelini Baholash',
      ru: 'Оценка Кредитных Рисков и NPL Портфеля Банка',
      en: 'Bank Credit Risk & NPL Portfolio Diagnostics'
    },
    desc: {
      uz: 'Tijorat banki kredit portfelidagi muammoli qarzlar (NPL >90 kun) dinamikasi, mijozlar kredit tarixi va to\'lov qobiliyatini chuqur tahlil qiluvchi interaktiv Power BI boshqaruv paneli.',
      ru: 'Интерактивный дашборд Power BI для мониторинга просроченной задолженности (NPL >90 дней), кредитной истории и платежеспособности заемщиков.',
      en: 'Interactive Power BI dashboard monitoring non-performing loans (NPL >90 days), borrower credit history trends, and solvency risk distributions.'
    },
    tech: ['Power BI', 'DAX', 'Star Schema', 'Credit Risk', 'Financial KPIs'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'Bank filiallarida kredit qaytmaslik darajasi oshib borayotgan edi, biroq risk-menejerlar qaysi mijozlar segmenti yoki hudud eng yuqori defolt xavfiga ega ekanligini tezkor ko\'ra olmas edilar.',
      ru: 'В филиалах банка наблюдался рост просрочек, но риск-менеджеры не имели оперативного инструмента для сегментации рискованных групп заемщиков.',
      en: 'The bank experienced rising loan delinquency rates, but risk managers lacked a consolidated real-time view of high-risk borrower demographics.'
    },
    methodology: {
      uz: 'Power Query orqali 100,000+ kredit shartnomalari tozalab olindi. Star Schema ma\'lumotlar modeli qurildi. Murakkab DAX o\'lchovlari (NPL Ratio, Expected Loss, Vintage Default Curves) va Drill-through imkoniyatlari kiritildi.',
      ru: 'С помощью Power Query обработано более 100,000 кредитных договоров. Построена модель «Звезда» и вычислены формулы NPL Ratio, Expected Loss и Vintage кривые.',
      en: 'Cleansed 100k+ loan records via Power Query. Constructed a Star Schema model with dynamic DAX metrics (NPL Ratio, Expected Loss, Vintage Delinquency Curves).'
    },
    metrics: [
      { uz: 'NPL darajasi 4.8% dan 3.18% gacha tushirildi', ru: 'Снижение уровня NPL с 4.8% до 3.18%', en: 'NPL delinquency reduced from 4.8% to 3.18%' },
      { uz: 'Risk hisobotlarini tayyorlash vaqti 3 kundan 5 daqiqaga qisqardi', ru: 'Ускорение подготовки отчетов с 3 дней до 5 минут', en: 'Report generation time cut from 3 days to 5 minutes' },
      { uz: 'Yuqori xavfli zayomlar berilishi 24% ga kamaytirildi', ru: 'Сокращение выдачи высокорисковых займов на 24%', en: 'High-risk loan disbursements decreased by 24%' }
    ]
  },

  {
    id: 'proj-2',
    category: 'python',
    tagCategory: 'Python & EDA',
    title: {
      uz: 'E-Commerce RFM Mijozlar Segmentatsiyasi & Savdo Tahlili',
      ru: 'RFM Сегментация Клиентов и Анализ E-Commerce Продаж',
      en: 'E-Commerce RFM Customer Segmentation & Sales EDA'
    },
    desc: {
      uz: 'Python (Pandas, Seaborn) yordamida online do\'konning 200,000+ tranzaksiyalari asosida mijozlarni Recency, Frequency va Monetary tamoyillari bo\'yicha klasterlash.',
      ru: 'Кластеризация клиентской базы онлайн-магазина (200K+ транзакций) на Python по методологии RFM (Recency, Frequency, Monetary).',
      en: 'Python EDA and customer clustering on 200,000+ transactions using Recency, Frequency, and Monetary (RFM) modeling.'
    },
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'RFM Clustering', 'EDA'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'Kompaniya barcha mijozlarga bir xil marketing xabarlarini yuborardi, bu esa konversiya pasayishiga va marketing byudjeti isrofiga olib kelardi.',
      ru: 'Маркетинговые кампании отправлялись по всей базе без дифференциации, что приводило к низкому ROI и выгоранию аудитории.',
      en: 'Marketing campaigns were untargeted across the entire user base, causing low conversion rates and wasted advertising budgets.'
    },
    methodology: {
      uz: 'Pandas orqali tranzaksiyalar tozalab chiqildi, anomaliyalar ajratildi. Har bir mijozga 1 dan 5 gacha R, F, M ballari berilib, "Sodiq", "Xavf ostida" va "Yangi" kabi 8 ta segment ajratildi.',
      ru: 'Очистка транзакций в Pandas, расчет RFM-скоринга от 1 до 5 и группировка на 8 когорт («VIP», «В зоне риска», «Новички»).',
      en: 'Calculated 1-5 RFM scores per customer using Pandas, identifying 8 actionable cohorts (Champions, At Risk, Potential Loyalists).'
    },
    metrics: [
      { uz: 'Xavf ostidagi mijozlarni qaytarish konversiyasi +31% ga oshdi', ru: 'Конверсия возврата клиентов из группы риска +31%', en: 'Reactivation conversion for at-risk users grew +31%' },
      { uz: 'Marketing byudjetining rentabelligi (ROAS) 1.8x ga ortdi', ru: 'Рост окупаемости рекламы (ROAS) в 1.8 раза', en: 'Return on Ad Spend (ROAS) improved by 1.8x' }
    ]
  },

  {
    id: 'proj-3',
    category: 'powerbi',
    tagCategory: 'Power BI & SQL',
    title: {
      uz: 'Chakana Savdo (Retail) Dinamikasi & Bashorati',
      ru: 'Динамика Розничных Продаж и Прогнозирование (Retail)',
      en: 'Retail Sales Dynamics & Revenue Forecasting Dashboard'
    },
    desc: {
      uz: 'Do\'konlar tarmog\'i bo\'yicha mahsulotlar qoldig\'i, top tovarlar marjinalligi va savdo dinamikasini aks ettiruvchi ko\'p sahifali Power BI hisoboti.',
      ru: 'Многостраничный аналитический дашборд Power BI по остаткам на складах, маржинальности топ-товаров и динамике выручки сети.',
      en: 'Multi-page Power BI dashboard analyzing store network turnover, SKU profit margins, stockout risks, and monthly sales dynamics.'
    },
    tech: ['Power BI', 'SQL Server', 'DAX', 'Time Intelligence', 'What-If Analysis'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'Do\'konlarda talab yuqori bo\'lgan tovarlar o\'z vaqtida yetkazib berilmasdan (Out-of-stock), sekin sotiladigan tovarlar esa omborlarda to\'planib qolardi.',
      ru: 'Торговая сеть регулярно сталкивалась с дефицитом популярных товаров и затовариванием неликвидной продукцией на складах.',
      en: 'The retail chain faced stockouts on bestselling SKUs and overstocking of low-velocity inventory across warehouse hubs.'
    },
    methodology: {
      uz: 'Time Intelligence funksiyalari (YTD, MoM, YoY) va What-If parametrlari orqali narx o\'zgarishining daromadga ta\'siri simulyatsiya qilindi.',
      ru: 'Применены функции Time Intelligence (YTD, MoM, YoY) и параметры What-If для моделирования эластичности спроса по цене.',
      en: 'Implemented DAX Time Intelligence metrics (YTD, MoM, YoY) and What-If scenario modeling for price-demand elasticity.'
    },
    metrics: [
      { uz: 'Omborda tovar qoldig\'i aylanmasi 18% ga tezlashdi', ru: 'Ускорение оборачиваемости запасов на 18%', en: 'Inventory turnover rate accelerated by 18%' },
      { uz: 'Out-of-stock yo\'qotishlari 2.4 barobar kamaytirildi', ru: 'Снижение потерь от нехватки товара в 2.4 раза', en: 'Lost revenue from stockouts dropped 2.4x' }
    ]
  },

  {
    id: 'proj-4',
    category: 'sql',
    tagCategory: 'SQL & Database',
    title: {
      uz: 'Tijorat Banki Tranzaksiyalari ETL & Murakkab SQL Tahlili',
      ru: 'ETL Банковских Транзакций и Анализ Данных на SQL',
      en: 'Commercial Banking Transaction ETL & Advanced SQL Queries'
    },
    desc: {
      uz: 'PostgreSQL bazasida 500,000+ bank o\'tkazmalarini CTEs, Window Functions va Subqueries yordamida tozalash, agregatsiya qilish va anomaliyalarni topish.',
      ru: 'Оптимизация и аналитическая обработка 500K+ банковских транзакций в PostgreSQL с применением CTE, Window Functions и индексации.',
      en: 'End-to-end PostgreSQL ETL pipeline processing 500,000+ bank transactions using CTEs, Window Functions, and query optimization.'
    },
    tech: ['PostgreSQL', 'CTEs', 'Window Functions', 'Data Cleaning', 'Indexing'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'Tranzaksiya ma\'lumotlari bir nechta formatda saqlanar, dublikatlar ko\'p bo\'lib, tahliliy hisobotlarni chiqarish soatlab vaqt olar edi.',
      ru: 'Транзакционные данные содержали дубликаты и нестыковки форматов, а выполнение тяжелых запросов блокировало сервер.',
      en: 'Transaction logs suffered from format inconsistencies and duplicates, with heavy reporting queries causing server timeouts.'
    },
    methodology: {
      uz: 'Tranzaksiyalarni normalizatsiya qilish uchun SQL skriptlari, PARTITION BY orqali oylik jami va harakatlanuvchi o\'rtacha (Moving Average) hisoblandi.',
      ru: 'Написан комплексный SQL-скрипт нормализации данных, вычисление скользящих средних через PARTITION BY и создание B-Tree индексов.',
      en: 'Wrote robust normalization scripts, rolling 30-day moving averages via PARTITION BY, and strategic B-Tree index optimisations.'
    },
    metrics: [
      { uz: 'So\'rovlar bajarilish tezligi 14x barobarga oshirildi', ru: 'Ускорение выполнения запросов в 14 раз', en: 'Query execution runtime improved by 14x' },
      { uz: '100% ma\'lumotlar aniqligi va dublikatlardan tozalashga erishildi', ru: '100% точность данных и полное устранение дубликатов', en: 'Achieved 100% data integrity and zero duplicate logs' }
    ]
  },

  {
    id: 'proj-5',
    category: 'python',
    tagCategory: 'Python & Statistics',
    title: {
      uz: 'Aviatsiya Parvozlari Kechikishi & Sabab-Oqibat Tahlili',
      ru: 'Анализ Задержек Авиарейсов и Факторов Риска',
      en: 'Aviation Flight Delays & Root-Cause Statistical Analysis'
    },
    desc: {
      uz: 'AQSH va xalqaro aviakompaniyalarning 1,000,000+ parvozlari ma\'lumotlarida kechikish omillari (ob-havo, samolyot yoshi, aeroport yuklanishi) tahlili.',
      ru: 'Исследование факторов задержек 1M+ авиарейсов на Python с проверкой статистических гипотез и визуализацией в Seaborn.',
      en: 'Statistical hypothesis testing and root-cause analysis of 1M+ flights investigating weather, carrier, and airspace congestion drivers.'
    },
    tech: ['Python', 'EDA', 'Scipy Stats', 'Matplotlib', 'Hypothesis Testing'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'Aviakompaniya kechikishlar tufayli katta jarimalar to\'lamoqda edi, biroq asosiy sabab ob-havomi yoki texnik kechikishlarmi ekanligi noaniq edi.',
      ru: 'Авиакомпания несла убытки из-за штрафов за задержки, но точные виновники (погода, наземные службы или расписание) не были оцифрованы.',
      en: 'Airlines suffered severe penalty costs from flight delays without quantified attribution between weather, ground handling, and routing.'
    },
    methodology: {
      uz: 'Korrelyatsiya matritsalari, ANOVA testlari va kechikish vaqtlari taqsimotini vizualizatsiya qilish orqali haftaning qaysi kunlari va soatlarida xavf yuqoriligi topildi.',
      ru: 'Построение корреляционных матриц, ANOVA-тесты и анализ распределений задержек по времени суток и дням недели.',
      en: 'Employed correlation matrices, ANOVA tests, and delay density distributions to isolate peak bottleneck runway slots.'
    },
    metrics: [
      { uz: 'Reyslar jadvalini qayta taqsimlash orqali kechikishlar 22% ga kamaytirildi', ru: 'Снижение задержек на 22% после оптимизации расписания', en: 'Average departure delays reduced by 22%' },
      { uz: 'Eng xavfli 3 ta marshrut aniqlanib, profilaktika choralari ko\'rildi', ru: 'Выявлены 3 самых проблемных маршрута для аудита', en: 'Identified top 3 high-risk flight corridors for preemptive buffering' }
    ]
  },

  {
    id: 'proj-6',
    category: 'risk',
    tagCategory: 'Moliya & Risk',
    title: {
      uz: 'Mikromoliya Tashkiloti Kredit Portfeli Sifati Audit Tahlili',
      ru: 'Аудит Качества Кредитного Портфеля МФО',
      en: 'Microfinance Institution Loan Quality & Delinquency Audit'
    },
    desc: {
      uz: 'Mikroqarzlar bo\'yicha to\'lov intizomi, kechiktirilgan foizlar va garov ta\'minoti yetarliligini baholovchi kompleks tahlil loyihasi.',
      ru: 'Комплексный аудит портфеля микрозаймов: платежная дисциплина, просрочки, дюрация и достаточность залогового обеспечения.',
      en: 'Comprehensive audit of micro-loan portfolios: borrower payment discipline, delinquency staging, and collateral coverage ratios.'
    },
    tech: ['Financial Modeling', 'Excel / PowerPivot', 'DAX', 'Risk Scenarios'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'Moliya tashkilotida berilgan qisqa muddatli qarzlarning qaytish ehtimoli pastligi sababli likvidlik tanqisligi xavfi yuzaga kelgan edi.',
      ru: 'Риск дефицита ликвидности из-за непредсказуемости возврата краткосрочных необеспеченных микрозаймов.',
      en: 'Liquidity buffer vulnerability driven by unpredicted default spikes in short-term unsecured microfinance lending.'
    },
    methodology: {
      uz: 'Qarz oluvchilar daromad darajasi, yoshi va qarz yuki (DTI - Debt-to-Income) nisbatlari bo\'yicha matritsa tuzilib, kredit berish limitlari o\'zgartirildi.',
      ru: 'Построение матрицы скоринга по DTI (Debt-to-Income), возрасту и доходу с установлением новых риск-лимитов.',
      en: 'Developed a risk matrix evaluating DTI (Debt-to-Income), age cohorts, and income tiers to calibrate strict exposure caps.'
    },
    metrics: [
      { uz: 'Likvidlik zahirasi xavfsiz darajaga ko\'tarildi (+16%)', ru: 'Увеличение резерва ликвидности на +16%', en: 'Liquidity reserve buffer increased safely by +16%' },
      { uz: 'Muddati o\'tgan qarzlarni undirish samaradorligi +28% oshdi', ru: 'Повышение эффективности взыскания на +28%', en: 'Late collection recovery rate improved by +28%' }
    ]
  },

  {
    id: 'proj-7',
    category: 'powerbi',
    tagCategory: 'Power BI & HR',
    title: {
      uz: 'HR Xodimlar Qo\'nimsizligi & Samaradorlik (KPI) Paneli',
      ru: 'Дашборд Текучести Кадров и Оценки KPI (HR Analytics)',
      en: 'HR Attrition & Employee Performance KPI Dashboard'
    },
    desc: {
      uz: 'Kompaniya xodimlarining ketishi sabablari, maosh qoniqishi, bo\'limlar kesimidagi samaradorlik ko\'rsatkichlarini tahlil qiluvchi Power BI hisoboti.',
      ru: 'Аналитика оттока сотрудников, удовлетворенности зарплатой и производительности труда по департаментам в Power BI.',
      en: 'HR analytics dashboard tracking employee attrition drivers, salary benchmarking, satisfaction scores, and department KPI metrics.'
    },
    tech: ['Power BI', 'DAX', 'HR Analytics', 'Data Storytelling'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'IT va savdo bo\'limlarida malakali kadrlarning ketish ko\'rsatkichi oshib, yangi xodimlarni o\'qitish xarajatlari ko\'payib ketgan edi.',
      ru: 'Высокая текучесть кадров в отделе продаж и IT увеличивала затраты на найм и адаптацию новичков.',
      en: 'Elevated talent turnover in sales and IT divisions escalated hiring and onboarding expenditures.'
    },
    methodology: {
      uz: 'Bo\'limlar, lavozimlar, oylik maosh va tajriba yillari kesimida kohort tahlili o\'tkazildi va risk guruhlari xaritasi tuzildi.',
      ru: 'Когортный анализ по стажу, отделам и уровню компенсаций для выявления критических точек выгорания.',
      en: 'Conducted tenure-based cohort analysis and salary parity benchmarks to spotlight critical retention inflection points.'
    },
    metrics: [
      { uz: 'Xodimlar qo\'nimsizligi 12 oylik muddatda 6.5% ga kamaydi', ru: 'Снижение текучести кадров на 6.5%', en: 'Employee turnover decreased by 6.5%' },
      { uz: 'HR xarajatlaridan $35,000+ mablag\' tejaldi', ru: 'Экономия более $35,000 на затратах найма', en: 'Saved $35,000+ in recruiting and onboarding costs' }
    ]
  },

  {
    id: 'proj-8',
    category: 'python',
    tagCategory: 'Python & Logistika',
    title: {
      uz: 'Logistika & Yetkazib Berish Muddatlari (Supply Chain) Tahlili',
      ru: 'Анализ Цепочек Поставок и Сроков Доставки (Supply Chain)',
      en: 'Logistics Supply Chain & Delivery Lead-Time Optimization'
    },
    desc: {
      uz: 'Ombordan xaridorga yetkazib berish yo\'nalishlari, kuryerlar tezligi va transport xarajatlarini optimallashtirish bo\'yicha Python tahlili.',
      ru: 'Оптимизация логистических маршрутов, времени доставки курьерами и транспортных расходов с помощью Python.',
      en: 'Supply chain lead-time analysis investigating warehouse dispatch cycles, courier routing, and transit cost efficiency.'
    },
    tech: ['Python', 'Pandas', 'Matplotlib', 'Supply Chain', 'Logistics'],
    github: 'https://github.com/abrorshox1129',
    problem: {
      uz: 'Buyurtmalarning 14% i va\'da qilingan muddatdan kechikib yetkazilar va bu mijozlarning qayta xarid qilishini tushirib yuborardi.',
      ru: '14% заказов доставлялись с опозданием, что напрямую снижало показатель повторных покупок.',
      en: '14% of customer packages suffered transit delays, detrimentally depressing repeat purchase rates.'
    },
    methodology: {
      uz: 'Hududlar bo\'yicha yetkazish muddatlari taqsimoti, ombordagi qadoqlash kechikishlari va kuryer yuklanishi tahlil qilindi.',
      ru: 'Анализ времени комплектации на складе и географии маршрутов для перераспределения зон доставки.',
      en: 'Analyzed order picking latency vs transit geography to rebalance courier hub boundaries and delivery routes.'
    },
    metrics: [
      { uz: 'O\'z vaqtida yetkazish darajasi (On-Time Delivery) 86% dan 96.4% ga oshdi', ru: 'Рост своевременных доставок с 86% до 96.4%', en: 'On-Time Delivery (OTD) rate increased from 86% to 96.4%' },
      { uz: 'O\'rtacha yetkazish vaqti 42 daqiqaga qisqardi', ru: 'Сокращение среднего времени доставки на 42 минуты', en: 'Average transit lead-time reduced by 42 minutes' }
    ]
  }
];

const ProjectsManager = {
  currentCategory: 'all',
  searchQuery: '',

  init() {
    this.render();
    this.bindEvents();
  },

  bindEvents() {
    // Category Filter Buttons
    const filterBtns = document.querySelectorAll('.proj-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.getAttribute('data-category');
        this.render();
      });
    });

    // Search Input
    const searchInput = document.getElementById('proj-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    // Modal Close
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('project-modal');
    if (modalCloseBtn && modalOverlay) {
      modalCloseBtn.addEventListener('click', () => this.closeModal());
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) this.closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
          this.closeModal();
        }
      });
    }

    // Language Change Listener
    window.addEventListener('languageChanged', () => {
      this.render();
    });
  },

  getFilteredProjects() {
    const lang = document.documentElement.lang || 'uz';
    return ProjectsData.filter(proj => {
      const matchesCat = (this.currentCategory === 'all') || (proj.category === this.currentCategory);
      const titleText = (proj.title[lang] || proj.title.uz).toLowerCase();
      const descText = (proj.desc[lang] || proj.desc.uz).toLowerCase();
      const techText = proj.tech.join(' ').toLowerCase();

      const matchesSearch = !this.searchQuery ||
        titleText.includes(this.searchQuery) ||
        descText.includes(this.searchQuery) ||
        techText.includes(this.searchQuery);

      return matchesCat && matchesSearch;
    });
  },

  render() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = this.getFilteredProjects();
    const lang = document.documentElement.lang || 'uz';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-dim); font-family: var(--font-mono);">
          <p>// Mos keluvchi loyiha topilmadi.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((proj, idx) => `
      <div class="project-card reveal visible" data-id="${proj.id}" data-sound="click">
        <div class="project-card-header">
          <span class="proj-cat-badge">${proj.tagCategory}</span>
          <span class="proj-index-badge">0${idx + 1}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">${proj.title[lang] || proj.title.uz}</h3>
          <p class="project-desc">${proj.desc[lang] || proj.desc.uz}</p>
          <div class="project-tech-tags">
            ${proj.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-card-footer">
            <span class="proj-view-details">
              <span>Batafsil tahlil</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            <a href="${proj.github}" target="_blank" rel="noopener" class="proj-github-icon" title="View Source on GitHub" onclick="event.stopPropagation();">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 11c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to cards to open modal
    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        this.openModal(id);
      });
    });
  },

  openModal(projectId) {
    const proj = ProjectsData.find(p => p.id === projectId);
    if (!proj) return;

    const lang = document.documentElement.lang || 'uz';
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    document.getElementById('modal-title').textContent = proj.title[lang] || proj.title.uz;
    document.getElementById('modal-meta').textContent = `${proj.tagCategory} • ${proj.tech.slice(0, 3).join(' • ')}`;
    document.getElementById('modal-problem').textContent = proj.problem[lang] || proj.problem.uz;
    document.getElementById('modal-method').textContent = proj.methodology[lang] || proj.methodology.uz;

    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = proj.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');
    }

    const metricsContainer = document.getElementById('modal-metrics');
    if (metricsContainer) {
      metricsContainer.innerHTML = proj.metrics.map(m => `
        <li>${m[lang] || m.uz}</li>
      `).join('');
    }

    const ghLink = document.getElementById('modal-github-link');
    if (ghLink) {
      ghLink.href = proj.github;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ProjectsManager.init();
});
