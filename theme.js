/**
 * ABRORJON MUHAMMADALIYEV | DATA ANALYST PORTFOLIO
 * THEME.JS - OBSIDIAN DARK TECH & CRISP SLATE LIGHT THEME MANAGER
 */

const ThemeManager = {
  storageKey: 'am_portfolio_theme',

  init() {
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark');

    this.applyTheme(initialTheme);
    this.bindEvents();
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);

    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    if (moonIcon && sunIcon) {
      if (theme === 'light') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      }
    }

    // Trigger canvas & chart color refresh
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  },

  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);

    if (window.playSound) window.playSound('toggle');
    if (window.showToast) {
      const msg = typeof t === 'function' ? t('toasts.theme_switched') : 'Theme changed';
      window.showToast(`${msg}: ${newTheme.toUpperCase()}`);
    }
  },

  bindEvents() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Listen to OS theme changes if user has no preference stored
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.storageKey)) {
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
});
