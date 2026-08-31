/**
 * ABRORJON MUHAMMADALIYEV | DATA ANALYST PORTFOLIO
 * TERMINAL.JS - INTERACTIVE DATA ANALYST CLI EMULATOR
 */

const Terminal = {
  inputEl: null,
  logsEl: null,
  bodyEl: null,
  history: [],
  historyIndex: -1,

  init() {
    this.inputEl = document.getElementById('term-input');
    this.logsEl = document.getElementById('term-logs');
    this.bodyEl = document.getElementById('term-body');

    if (!this.inputEl || !this.logsEl) return;

    this.bindEvents();
    this.startAutoTyping();
  },

  bindEvents() {
    this.inputEl.addEventListener('keydown', (e) => {
      if (window.playSound) window.playSound('key');

      if (e.key === 'Enter') {
        const cmd = this.inputEl.value.trim();
        if (cmd) {
          this.executeCommand(cmd);
          this.history.push(cmd);
          this.historyIndex = this.history.length;
          this.inputEl.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.inputEl.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.inputEl.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.inputEl.value = '';
        }
      }
    });

    // Make hints clickable in the terminal logs
    this.logsEl.addEventListener('click', (e) => {
      if (e.target.classList.contains('cmd-hint')) {
        const cmd = e.target.textContent.replace(/'/g, '');
        this.inputEl.value = cmd;
        this.executeCommand(cmd);
      }
    });
  },

  printLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `log-line ${className}`;
    line.innerHTML = text;
    this.logsEl.appendChild(line);
    this.bodyEl.scrollTop = this.bodyEl.scrollHeight;
  },

  executeCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase().trim();
    this.printLine(`abrorjon@data:~$ <span class="text-amber">${rawCmd}</span>`);

    switch (cmd) {
      case 'help':
        this.printLine(`
Available commands:<br>
  - <span class="text-cyan">skills</span>     : View primary analytical tech stack<br>
  - <span class="text-cyan">projects</span>   : List featured portfolio case studies<br>
  - <span class="text-cyan">risk</span>       : Print credit & financial risk formulas (NPL, PD)<br>
  - <span class="text-cyan">contact</span>    : View direct contact channels<br>
  - <span class="text-cyan">theme</span>      : Toggle obsidian dark / crisp slate light<br>
  - <span class="text-cyan">lang [uz|ru|en]</span> : Switch interface language<br>
  - <span class="text-cyan">cv</span>         : Trigger CV download / view<br>
  - <span class="text-cyan">clear</span>      : Clear terminal screen
        `);
        break;

      case 'skills':
        this.printLine(`
<span class="text-cyan">Analytical Stack & Tools:</span><br>
  • SQL (PostgreSQL, MySQL)    : Complex Joins, CTEs, Window Funcs (94%)<br>
  • Power BI & DAX              : Dynamic Measures, Star Schema, UX (96%)<br>
  • Python (Pandas, NumPy)     : EDA, Data Cleaning, Scipy Stats (90%)<br>
  • Advanced Excel & PowerPivot: Financial Modeling, Macros (88%)<br>
  • Financial/Credit Risk      : NPL Rates, Loan Vintage, PD/LGD (86%)
        `);
        break;

      case 'projects':
        this.printLine(`
<span class="text-cyan">Featured Portfolio Projects:</span><br>
  1. Bank Credit Risk & NPL Dashboard (Power BI / DAX)<br>
  2. E-Commerce RFM Customer Segmentation (Python / EDA)<br>
  3. Retail Sales Dynamics & Forecasting (Power BI / SQL)<br>
  4. Commercial Bank Loan Portfolio Analysis (SQL / PostgreSQL)<br>
  5. Aviation Flight Delays Root-Cause (Python / Seaborn)<br>
  6. Subscription Churn Predictive Diagnostics (Python / Power BI)<br>
<span class="text-dim">Scroll to #projects section to test the interactive modals.</span>
        `);
        break;

      case 'risk':
        this.printLine(`
<span class="text-amber">Credit Risk Analytics Snapshot:</span><br>
  • <strong>NPL Ratio</strong> = (Overdue Loans &gt; 90 Days / Total Portfolio) × 100%<br>
  • <strong>Expected Loss (EL)</strong> = PD (Probability of Default) × LGD (Loss Given Default) × EAD<br>
  • <strong>Vintage Analysis</strong>: Tracking default cohorts over monthly tranches.<br>
<span class="text-dim">Status: Model healthy, default mitigation implemented.</span>
        `);
        break;

      case 'contact':
        this.printLine(`
<span class="text-cyan">Direct Contact:</span><br>
  • Email   : <a href="mailto:abrorjon0514l@gmail.com" class="text-cyan">abrorjon0514l@gmail.com</a><br>
  • Phone   : <a href="tel:+998933933203" class="text-cyan">+998 93 393 32 03</a><br>
  • Telegram: <a href="https://t.me/Abrorjon_Muhammadaliyev" target="_blank" class="text-cyan">@Abrorjon_Muhammadaliyev</a><br>
  • GitHub  : <a href="https://github.com/abrorshox1129" target="_blank" class="text-cyan">github.com/abrorshox1129</a>
        `);
        break;

      case 'theme':
        if (window.ThemeManager) {
          window.ThemeManager.toggle();
          this.printLine(`Theme switched successfully.`);
        }
        break;

      case 'lang':
      case 'lang uz':
        if (window.setLanguage) window.setLanguage('uz');
        this.printLine(`Til o'zgartirildi: O'zbekcha (UZ)`);
        break;

      case 'lang ru':
        if (window.setLanguage) window.setLanguage('ru');
        this.printLine(`Язык изменен: Русский (RU)`);
        break;

      case 'lang en':
        if (window.setLanguage) window.setLanguage('en');
        this.printLine(`Language switched: English (EN)`);
        break;

      case 'cv':
        this.printLine(`Downloading Abrorjon Muhammadaliyev CV...`);
        const cvBtn = document.getElementById('hero-cv-btn');
        if (cvBtn) cvBtn.click();
        break;

      case 'clear':
      case 'cls':
        this.logsEl.innerHTML = '';
        this.printLine(`// Terminal cleared.`);
        break;

      default:
        this.printLine(`Command not found: "${rawCmd}". Type <span class="cmd-hint">'help'</span> for available commands.`, 'text-amber');
        break;
    }
  },

  startAutoTyping() {
    const roles = [
      "Data Analyst",
      "Power BI & DAX Specialist",
      "Financial & Credit Risk Analyst",
      "SQL & Python Data Engineer"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedEl = document.getElementById('role-typed');

    if (!typedEl) return;

    function type() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typedEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2200; // Pause at full word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400; // Pause before typing next
      }

      setTimeout(type, speed);
    }

    type();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Terminal.init();
});
