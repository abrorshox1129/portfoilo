/**
 * ABRORJON MUHAMMADALIYEV | DATA ANALYST PORTFOLIO
 * DASHBOARD.JS - INTERACTIVE LIVE BI SIMULATOR WITH SVG CHARTS
 */

const DashboardSimulator = {
  activeDataset: 'sales',
  activeRegion: 'all',
  activePeriod: '30d',

  datasets: {
    sales: {
      title: 'E-Commerce Savdo Tahlili',
      subtitle: 'Oylik tushum, buyurtmalar soni va o\'rtacha chek',
      kpis: [
        { label: 'Umumiy Tushum (GMV)', val: '$148,250', change: '+18.4%', trend: 'up', sub: 'O\'tgan davrga nisbatan' },
        { label: 'Buyurtmalar Soni', val: '3,840 ta', change: '+12.1%', trend: 'up', sub: 'Konversiya: 3.42%' },
        { label: 'O\'rtacha Chek (AOV)', val: '$38.60', change: '+5.7%', trend: 'up', sub: 'Yuqori talabli tovarlar' },
        { label: 'Qaytarilish Darajasi', val: '2.14%', change: '-0.8%', trend: 'up', sub: 'Xatolar bartaraf etildi' }
      ],
      chartData: [
        { label: 'Yan', val: 32, forecast: 30 },
        { label: 'Fev', val: 45, forecast: 42 },
        { label: 'Mar', val: 58, forecast: 55 },
        { label: 'Apr', val: 72, forecast: 68 },
        { label: 'May', val: 94, forecast: 88 },
        { label: 'Iyun', val: 112, forecast: 105 },
        { label: 'Iyul', val: 148, forecast: 135 }
      ],
      segments: [
        { name: 'Elektronika & Gadjetlar', val: '42%', width: 42 },
        { name: 'Kiyim & Aksessuarlar', val: '28%', width: 28 },
        { name: 'Uy & Maishiy Texnika', val: '18%', width: 18 },
        { name: 'Kitoblar & Boshqalar', val: '12%', width: 12 }
      ],
      insights: {
        uz: 'Farg\'ona va Toshkent hududlarida oxirgi 30 kunda sotuv hajmi +18.4% ga oshdi. Elektronika segmenti umumiy daromadning 42% ini ta\'minladi.',
        ru: 'В Ташкенте и Фергане объем продаж за 30 дней вырос на +18.4%. Категория «Электроника» обеспечила 42% общей выручки.',
        en: 'Sales revenue in Tashkent and Fergana grew by +18.4% over the last 30 days. The Electronics category drove 42% of total turnover.'
      }
    },

    credit: {
      title: 'Kredit Riski & NPL Portfeli',
      subtitle: 'Muddati o\'tgan qarzlar, defolt ehtimoli va portfel sifati',
      kpis: [
        { label: 'Jami Kredit Portfeli', val: '$2.84M', change: '+9.2%', trend: 'up', sub: 'Faol kreditlar: 1,420 ta' },
        { label: 'NPL Darajasi (>90 kun)', val: '3.18%', change: '-1.4%', trend: 'up', sub: 'Xavf chegarasidan past' },
        { label: 'O\'rtacha Kredit Hajmi', val: '$2,000', change: '+2.5%', trend: 'up', sub: 'Skoring balli: 720+' },
        { label: 'Qaytarilish Samaradorligi', val: '96.8%', change: '+0.9%', trend: 'up', sub: 'Ertachi ogohlantirish' }
      ],
      chartData: [
        { label: 'Q1', val: 4.8, forecast: 5.0 },
        { label: 'Q2', val: 4.2, forecast: 4.5 },
        { label: 'Q3', val: 3.8, forecast: 4.0 },
        { label: 'Q4', val: 3.5, forecast: 3.7 },
        { label: 'Q5', val: 3.2, forecast: 3.4 },
        { label: 'Q6', val: 3.18, forecast: 3.2 }
      ],
      segments: [
        { name: 'Standart (Xavfsiz)', val: '86%', width: 86 },
        { name: 'Kuzatuvdagi (Watchlist)', val: '8%', width: 8 },
        { name: 'Substandart (30-60 kun)', val: '3.8%', width: 3.8 },
        { name: 'NPL (>90 kun Muammoli)', val: '2.2%', width: 2.2 }
      ],
      insights: {
        uz: 'Skoring tizimini takomillashtirish orqali muammoli kreditlar (NPL) darajasi 4.8% dan 3.18% gacha pasaytirildi.',
        ru: 'Благодаря внедрению скоринговой фильтрации уровень проблемной задолженности (NPL) снизился с 4.8% до 3.18%.',
        en: 'By optimizing credit scoring risk thresholds, NPL delinquency rates decreased from 4.8% down to 3.18%.'
      }
    },

    flights: {
      title: 'Aviatsiya & Reyslar Kechikishi Tahlili',
      subtitle: 'Uchish kechikishlari, ob-havo omili va aeroport tirbandligi',
      kpis: [
        { label: 'Jami Reyslar Soni', val: '12,450', change: '+14.6%', trend: 'up', sub: 'O\'z vaqtida: 89.2%' },
        { label: 'O\'rtacha Kechikish', val: '14.2 daq', change: '-4.8 daq', trend: 'up', sub: 'Oldingi: 19.0 daq' },
        { label: 'Ob-havo Ta\'siri', val: '32.4%', change: '+1.2%', trend: 'down', sub: 'Qishki mavsum ta\'siri' },
        { label: 'Samolyot Yuklanishi', val: '84.8%', change: '+3.1%', trend: 'up', sub: 'Seat load factor' }
      ],
      chartData: [
        { label: 'Dush', val: 12, forecast: 14 },
        { label: 'Sesh', val: 10, forecast: 11 },
        { label: 'Chor', val: 15, forecast: 14 },
        { label: 'Pay', val: 18, forecast: 17 },
        { label: 'Jum', val: 24, forecast: 22 },
        { label: 'Shan', val: 21, forecast: 20 },
        { label: 'Yak', val: 14.2, forecast: 15 }
      ],
      segments: [
        { name: 'Aeroport Tirbandligi', val: '44%', width: 44 },
        { name: 'Noqulay Ob-havo', val: '32%', width: 32 },
        { name: 'Texnik Xizmat Ko\'rsatish', val: '15%', width: 15 },
        { name: 'Ekipaj Kechikishi', val: '9%', width: 9 }
      ],
      insights: {
        uz: 'Juma va Shanba kunlari aeroport tirbandligi eng yuqori nuqtaga yetadi. Reys jadvallarini qayta taqsimlash kechikishni 22% ga qisqartirdi.',
        ru: 'Пик задержек приходится на пятницу и субботу. Оптимизация слотов вылетов снизила среднее время ожидания на 22%.',
        en: 'Airport traffic peaks on Fridays and Saturdays. Rescheduling departure runway slots reduced average delay duration by 22%.'
      }
    },

    churn: {
      title: 'Mijozlar Ketishi & Retention',
      subtitle: 'Obunachilar tahlili, LTV va qayta jalb qilish choralari',
      kpis: [
        { label: 'Faol Foydalanuvchilar', val: '24,800', change: '+21.5%', trend: 'up', sub: 'MAU ko\'rsatkichi' },
        { label: 'Churn Rate (Ketish)', val: '1.92%', change: '-0.7%', trend: 'up', sub: 'Sanoat standarti: 3.5%' },
        { label: 'Mijoz Hayotiy Qiymati (LTV)', val: '$420', change: '+15.2%', trend: 'up', sub: 'O\'rtacha muddat: 14 oy' },
        { label: 'NPS Qoniqish Indeksi', val: '68 / 100', change: '+6 ball', trend: 'up', sub: 'A\'lo daraja' }
      ],
      chartData: [
        { label: '1-oy', val: 98, forecast: 95 },
        { label: '3-oy', val: 89, forecast: 85 },
        { label: '6-oy', val: 82, forecast: 78 },
        { label: '9-oy', val: 78, forecast: 74 },
        { label: '12-oy', val: 74, forecast: 70 },
        { label: '18-oy', val: 71, forecast: 67 }
      ],
      segments: [
        { name: 'Sodiq Foydalanuvchilar (>12 oy)', val: '58%', width: 58 },
        { name: 'O\'rtacha Faollar (3-12 oy)', val: '27%', width: 27 },
        { name: 'Xavf Guruhidagilar (<30 kun faolsiz)', val: '11%', width: 11 },
        { name: 'Kechikayotganlar', val: '4%', width: 4 }
      ],
      insights: {
        uz: 'Xavf guruhidagi foydalanuvchilarga avtomatik push-xabarlar yuborish orqali churn ko\'rsatkichi 1.92% gacha tushirildi.',
        ru: 'Таргетированные email/push кампании для группы риска удержали 78% сомневающихся клиентов, снизив Churn до 1.92%.',
        en: 'Targeted reactivation campaigns for high-risk cohorts preserved 78% of active accounts, reducing churn down to 1.92%.'
      }
    }
  },

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Dataset Tabs
    const tabs = document.querySelectorAll('.dash-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeDataset = tab.getAttribute('data-dataset');
        this.render();
      });
    });

    // Region Select
    const regSelect = document.getElementById('dash-region-select');
    if (regSelect) {
      regSelect.addEventListener('change', (e) => {
        this.activeRegion = e.target.value;
        this.render();
      });
    }

    // Period Select
    const periodSelect = document.getElementById('dash-period-select');
    if (periodSelect) {
      periodSelect.addEventListener('change', (e) => {
        this.activePeriod = e.target.value;
        this.render();
      });
    }

    // Language change listener
    window.addEventListener('languageChanged', () => {
      this.render();
    });

    // Theme change listener
    window.addEventListener('themeChanged', () => {
      this.renderCharts();
    });
  },

  render() {
    const data = this.datasets[this.activeDataset];
    if (!data) return;

    // Render KPI Cards
    const kpiGrid = document.getElementById('dash-kpi-grid');
    if (kpiGrid) {
      kpiGrid.innerHTML = data.kpis.map(kpi => `
        <div class="kpi-card">
          <span class="kpi-label">${kpi.label}</span>
          <div class="kpi-value-row">
            <span class="kpi-val">${kpi.val}</span>
            <span class="kpi-change ${kpi.trend}">${kpi.change}</span>
          </div>
          <span class="kpi-sub">${kpi.sub}</span>
        </div>
      `).join('');
    }

    // Render Insights Box
    const insightContent = document.getElementById('dash-insight-content');
    if (insightContent) {
      const lang = document.documentElement.lang || 'uz';
      insightContent.textContent = data.insights[lang] || data.insights.uz;
    }

    // Render Charts
    this.renderCharts();
  },

  renderCharts() {
    const data = this.datasets[this.activeDataset];
    if (!data) return;

    // 1. Render Side Segment Bars
    const sideBars = document.getElementById('dash-side-chart-bars');
    if (sideBars) {
      sideBars.innerHTML = data.segments.map(seg => `
        <div class="seg-row">
          <div class="seg-labels">
            <span class="seg-name">${seg.name}</span>
            <span class="seg-val">${seg.val}</span>
          </div>
          <div class="seg-track">
            <div class="seg-fill" style="width: ${seg.width}%;"></div>
          </div>
        </div>
      `).join('');
    }

    // 2. Render Main SVG Line Chart
    const svg = document.getElementById('dash-svg-chart');
    if (!svg) return;

    const width = 700;
    const height = 260;
    const padding = { top: 30, right: 30, bottom: 40, left: 50 };

    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const maxVal = Math.max(...data.chartData.map(d => Math.max(d.val, d.forecast))) * 1.15;
    const stepX = chartW / (data.chartData.length - 1);

    const points = data.chartData.map((d, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartH - (d.val / maxVal) * chartH;
      const yForecast = padding.top + chartH - (d.forecast / maxVal) * chartH;
      return { x, y, yForecast, label: d.label, val: d.val, forecast: d.forecast };
    });

    // Build SVG Path
    let pathActual = `M ${points[0].x} ${points[0].y}`;
    let pathForecast = `M ${points[0].x} ${points[0].yForecast}`;
    let areaActual = `M ${points[0].x} ${padding.top + chartH} L ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      // Smooth cubic bezier curves
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev.x + curr.x) / 2;

      pathActual += ` C ${cx} ${prev.y}, ${cx} ${curr.y}, ${curr.x} ${curr.y}`;
      pathForecast += ` C ${cx} ${prev.yForecast}, ${cx} ${curr.yForecast}, ${curr.x} ${curr.yForecast}`;
      areaActual += ` C ${cx} ${prev.y}, ${cx} ${curr.y}, ${curr.x} ${curr.y}`;
    }

    areaActual += ` L ${points[points.length - 1].x} ${padding.top + chartH} Z`;

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const gridColor = isLight ? '#e2e8f0' : '#1c2740';
    const textColor = isLight ? '#64748b' : '#8493ad';
    const cyanColor = isLight ? '#0284c7' : '#3ee8d8';
    const amberColor = isLight ? '#d97706' : '#ffb347';

    let gridLinesSvg = '';
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartH / 4) * i;
      gridLinesSvg += `<line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="${gridColor}" stroke-dasharray="3,3" />`;
    }

    let dotsSvg = points.map(p => `
      <g class="chart-point-group" cursor="pointer">
        <circle cx="${p.x}" cy="${p.y}" r="5" fill="${cyanColor}" stroke="#070b14" stroke-width="2" />
        <text x="${p.x}" y="${height - 12}" fill="${textColor}" font-size="11" font-family="JetBrains Mono" text-anchor="middle">${p.label}</text>
      </g>
    `).join('');

    svg.innerHTML = `
      <defs>
        <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${cyanColor}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${cyanColor}" stop-opacity="0.0"/>
        </linearGradient>
      </defs>

      <!-- Grid lines -->
      ${gridLinesSvg}

      <!-- Area fill -->
      <path d="${areaActual}" fill="url(#areaGrad)" />

      <!-- Forecast Line -->
      <path d="${pathForecast}" fill="none" stroke="${amberColor}" stroke-width="2" stroke-dasharray="5,5" />

      <!-- Actual Data Line -->
      <path d="${pathActual}" fill="none" stroke="${cyanColor}" stroke-width="3.5" stroke-linecap="round" />

      <!-- Data Points & Labels -->
      ${dotsSvg}
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DashboardSimulator.init();
});
