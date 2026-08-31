/**
 * ABRORJON MUHAMMADALIYEV | DATA ANALYST PORTFOLIO
 * APP.JS - CORE ORCHESTRATION, UTILITIES, TOAST, COMMAND PALETTE, ANIMATIONS
 */

// 1. Toast Notification Utility
window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item ${type}`;
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

document.addEventListener('DOMContentLoaded', () => {

  // 2. Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.playSound) window.playSound('click');
    });
  }

  // 3. Mobile Navigation Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      if (window.playSound) window.playSound('click');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 4. Timezone Clock (Fergana Time UTC+5)
  function updateFerganaTime() {
    const timeEl = document.getElementById('live-time');
    if (!timeEl) return;

    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ferganaTime = new Date(utc + (3600000 * 5));

    const hours = String(ferganaTime.getHours()).padStart(2, '0');
    const minutes = String(ferganaTime.getMinutes()).padStart(2, '0');
    const seconds = String(ferganaTime.getSeconds()).padStart(2, '0');

    timeEl.textContent = `${hours}:${minutes}:${seconds} (UTC+5)`;
  }
  updateFerganaTime();
  setInterval(updateFerganaTime, 1000);

  // 5. Intersection Observer: Reveal animations & Stats Counter & Skill Bars
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger skill bars animation
        const barFill = entry.target.querySelector('.bar-fill');
        if (barFill) {
          const width = barFill.getAttribute('data-w');
          if (width) barFill.style.width = `${width}%`;
        }

        // Trigger stat numbers count-up animation
        const statNums = entry.target.querySelectorAll('.stat-num');
        statNums.forEach(numEl => {
          const target = parseInt(numEl.getAttribute('data-count'), 10);
          if (!isNaN(target) && !numEl.classList.contains('counted')) {
            numEl.classList.add('counted');
            animateCount(numEl, target, 1600);
          }
        });

        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  function animateCount(element, target, duration) {
    let start = 0;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start);
      }
    }, stepTime);
  }

  // 6. Copy-to-Clipboard Functionality
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const isEmail = text.includes('@');
          const toastKey = isEmail ? 'toasts.copy_email' : 'toasts.copy_phone';
          const msg = typeof t === 'function' ? t(toastKey) : 'Copied!';
          window.showToast(msg);
          if (window.playSound) window.playSound('success');
        });
      }
    });
  });

  // 7. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('form-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Yuborilmoqda...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span data-i18n="contact.form_submit">Xabarni Yuborish</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          `;
        }

        contactForm.reset();
        const msg = typeof t === 'function' ? t('toasts.form_sent') : 'Message sent successfully!';
        window.showToast(msg);
        if (window.playSound) window.playSound('success');
      }, 900);
    });
  }

  // 8. CV Download Trigger
  const cvBtn = document.getElementById('hero-cv-btn');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      window.showToast('Rezyume (CV) yuklab olinmoqda...');
      if (window.playSound) window.playSound('click');

      // Create synthetic printable HTML CV download
      const cvBlob = new Blob([`
        ============================================================
        ABRORJON MUHAMMADALIYEV - DATA ANALYST CV / RESUME
        ============================================================
        Location: Fergana, Uzbekistan
        Email: abrorjon0514l@gmail.com
        Phone: +998 93 393 32 03
        Telegram: @Abrorjon_Muhammadaliyev
        GitHub: https://github.com/abrorshox1129
        LinkedIn: https://www.linkedin.com/in/abrorjon-muhammadaliyev-920074333/

        SUMMARY:
        Data Analyst specializing in SQL, Python, Power BI, DAX, and Financial Risk Analytics.
        Skilled in ETL pipeline construction, Star Schema data modeling, RFM customer segmentation,
        and developing executive dashboards that optimize business decision-making.

        CORE COMPETENCIES:
        - Databases & ETL: PostgreSQL, MySQL, Complex Joins, CTEs, Window Functions, Indexing
        - BI & Visualization: Microsoft Power BI, Power Query, Dynamic DAX Measures, UX Storytelling
        - Programming & EDA: Python, Pandas, NumPy, Scipy, Matplotlib, Seaborn
        - Domain Knowledge: Financial Modeling, NPL Delinquency Staging, Loan Vintage Analytics, Retail Turnover

        EDUCATION & CERTIFICATION:
        - Fergana State Technical University (2022 - 2026): Banking and Finance (Bachelor)
        - Najot Ta'lim Academy (2025 - 2026): Intensive Data Analytics Graduate

        PORTFOLIO & CASE STUDIES:
        - Bank Credit Risk & NPL Portfolio Diagnostics (Power BI / DAX)
        - E-Commerce RFM Customer Segmentation & Sales EDA (Python / Pandas)
        - Retail Sales Dynamics & Revenue Forecasting Dashboard (Power BI / SQL)
        - Commercial Banking Transaction ETL & Advanced SQL Queries (PostgreSQL)
        ============================================================
      `], { type: 'text/plain;charset=utf-8' });

      const url = URL.createObjectURL(cvBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Abrorjon_Muhammadaliyev_Data_Analyst_CV.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // 9. Command Palette (Cmd + K / Ctrl + K)
  const cmdModal = document.getElementById('cmd-palette-modal');
  const cmdOpenBtn = document.getElementById('cmd-palette-btn');
  const cmdInput = document.getElementById('cmd-search-input');
  const cmdList = document.getElementById('cmd-results-list');

  const commands = [
    { title: 'Home / Hero', action: () => scrollToSection('hero'), shortcut: 'H' },
    { title: 'About / Bio', action: () => scrollToSection('about'), shortcut: 'A' },
    { title: 'Skills & Tech Stack', action: () => scrollToSection('skills'), shortcut: 'S' },
    { title: 'Live BI Dashboard Demo', action: () => scrollToSection('dashboard'), shortcut: 'D' },
    { title: 'Featured Projects', action: () => scrollToSection('projects'), shortcut: 'P' },
    { title: 'Education & Services', action: () => scrollToSection('experience'), shortcut: 'E' },
    { title: 'Get in Touch / Contact', action: () => scrollToSection('contact'), shortcut: 'C' },
    { title: 'Toggle Dark / Light Theme', action: () => window.ThemeManager && window.ThemeManager.toggle(), shortcut: 'T' },
    { title: 'Switch Language to O\'zbekcha (UZ)', action: () => window.setLanguage && window.setLanguage('uz'), shortcut: 'UZ' },
    { title: 'Switch Language to Русский (RU)', action: () => window.setLanguage && window.setLanguage('ru'), shortcut: 'RU' },
    { title: 'Switch Language to English (EN)', action: () => window.setLanguage && window.setLanguage('en'), shortcut: 'EN' },
    { title: 'Download Abrorjon\'s CV', action: () => cvBtn && cvBtn.click(), shortcut: 'CV' }
  ];

  function openCmdPalette() {
    if (!cmdModal) return;
    cmdModal.classList.add('open');
    cmdModal.setAttribute('aria-hidden', 'false');
    if (cmdInput) {
      cmdInput.value = '';
      cmdInput.focus();
    }
    renderCommands(commands);
    if (window.playSound) window.playSound('click');
  }

  function closeCmdPalette() {
    if (!cmdModal) return;
    cmdModal.classList.remove('open');
    cmdModal.setAttribute('aria-hidden', 'true');
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function renderCommands(list) {
    if (!cmdList) return;
    cmdList.innerHTML = list.map((c, i) => `
      <div class="cmd-item" data-index="${i}">
        <span>${c.title}</span>
        <span class="cmd-item-shortcut">${c.shortcut}</span>
      </div>
    `).join('');

    cmdList.querySelectorAll('.cmd-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        list[index].action();
        closeCmdPalette();
      });
    });
  }

  if (cmdOpenBtn) {
    cmdOpenBtn.addEventListener('click', openCmdPalette);
  }

  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) closeCmdPalette();
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = commands.filter(c => c.title.toLowerCase().includes(q) || c.shortcut.toLowerCase().includes(q));
      renderCommands(filtered);
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal && cmdModal.classList.contains('open')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
    } else if (e.key === 'Escape' && cmdModal && cmdModal.classList.contains('open')) {
      closeCmdPalette();
    }
  });

});
