/**
 * ABRORJON MUHAMMADALIYEV | DATA ANALYST PORTFOLIO
 * SOUND.JS - SYNTHESIZED WEB AUDIO API SOUND SYSTEM
 */

const SoundManager = {
  audioCtx: null,
  isMuted: true, // Default muted for unobtrusive UX
  storageKey: 'am_portfolio_sound_muted',

  init() {
    const savedMute = localStorage.getItem(this.storageKey);
    if (savedMute !== null) {
      this.isMuted = savedMute === 'true';
    }
    this.updateIcons();
    this.bindEvents();
  },

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  play(type) {
    if (this.isMuted) return;

    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'toggle') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.06);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.07); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.14); // G5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'key') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800 + Math.random() * 200, now);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
        osc.start(now);
        osc.stop(now + 0.02);
      }
    } catch (e) {
      // Audio autoplay policy catch
    }
  },

  toggle() {
    this.isMuted = !this.isMuted;
    localStorage.setItem(this.storageKey, this.isMuted);
    this.updateIcons();

    if (!this.isMuted) {
      this.play('success');
      if (window.showToast) {
        const msg = typeof t === 'function' ? t('toasts.sound_on') : 'Sound enabled';
        window.showToast(msg);
      }
    } else {
      if (window.showToast) {
        const msg = typeof t === 'function' ? t('toasts.sound_off') : 'Sound muted';
        window.showToast(msg);
      }
    }
  },

  updateIcons() {
    const soundOn = document.getElementById('sound-icon-on');
    const soundOff = document.getElementById('sound-icon-off');

    if (soundOn && soundOff) {
      if (this.isMuted) {
        soundOn.style.display = 'none';
        soundOff.style.display = 'block';
      } else {
        soundOn.style.display = 'block';
        soundOff.style.display = 'none';
      }
    }
  },

  bindEvents() {
    const toggleBtn = document.getElementById('sound-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Attach sound to elements with data-sound
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-sound]');
      if (target) {
        const soundType = target.getAttribute('data-sound') || 'click';
        this.play(soundType);
      }
    });
  }
};

window.playSound = (type) => SoundManager.play(type);

document.addEventListener('DOMContentLoaded', () => {
  SoundManager.init();
});
