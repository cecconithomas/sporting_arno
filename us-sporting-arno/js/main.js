/* ============================================================
   U.S. SPORTING ARNO 1979 — main.js
   Utilità generali: fade-in, contatori, back-to-top, form
   ============================================================ */

(function () {
  'use strict';

  /* ===================== FADE-IN SCROLL ===================== */
  function initFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  /* ===================== CONTATORE NUMERI ===================== */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    const duration = 1800;
    const start = performance.now();

    const update = now => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString('it-IT');
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
  }

  /* ===================== BACK TO TOP ===================== */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===================== ANNO CORRENTE NEL FOOTER ===================== */
  function setCurrentYear() {
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ===================== FORM DI CONTATTO ===================== */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Invio in corso...';
      btn.disabled = true;

      // Simula invio (sostituisci con fetch() reale)
      setTimeout(() => {
        showFormMessage(form, 'success',
          '✅ Messaggio inviato con successo! Ti risponderemo al più presto.');
        form.reset();
        btn.textContent = origText;
        btn.disabled = false;
      }, 1500);
    });
  }

  /* ===================== FORM ISCRIZIONE ===================== */
  function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Invio in corso...';
      btn.disabled = true;

      setTimeout(() => {
        showFormMessage(form, 'success',
          '✅ Richiesta di iscrizione inviata! Verrai contattato dalla segreteria entro 48 ore.');
        form.reset();
        btn.textContent = origText;
        btn.disabled = false;
      }, 1500);
    });
  }

  function showFormMessage(form, type, text) {
    let msg = form.querySelector('.form-message');
    if (!msg) {
      msg = document.createElement('div');
      msg.className = 'form-message';
      form.appendChild(msg);
    }
    msg.style.cssText = `
      padding: 14px 20px; border-radius: 8px; margin-top: 16px;
      font-weight: 600; font-size: 0.9rem;
      background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
      color: ${type === 'success' ? '#155724' : '#721c24'};
      border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
    `;
    msg.textContent = text;
    msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    setTimeout(() => msg.remove(), 6000);
  }

  /* ===================== FILTRO SQUADRE CALENDARIO ===================== */
  function initCalendarFilter() {
    const filterBtns = document.querySelectorAll('[data-filter]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('[data-team]').forEach(row => {
          if (filter === 'all' || row.getAttribute('data-team') === filter) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  /* ===================== LIGHTBOX IMMAGINI ===================== */
  function initLightbox() {
    // Seleziona tutte le img con classe .lightbox-trigger
    document.querySelectorAll('.lightbox-trigger').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });
  }

  function openLightbox(src, alt) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,0.92);
      display:flex; align-items:center; justify-content:center;
      z-index:9999; cursor:zoom-out; padding:20px;
    `;
    const img = document.createElement('img');
    img.src = src; img.alt = alt;
    img.style.cssText = `
      max-width:90vw; max-height:88vh; border-radius:8px;
      box-shadow:0 20px 60px rgba(0,0,0,0.6);
    `;
    overlay.appendChild(img);
    overlay.addEventListener('click', () => overlay.remove());
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); }
    });
    document.body.appendChild(overlay);
  }

  /* ===================== INIT TUTTO ===================== */
  document.addEventListener('DOMContentLoaded', () => {
    initFadeIn();
    initCounters();
    initBackToTop();
    setCurrentYear();
    initContactForm();
    initRegistrationForm();
    initCalendarFilter();
    initLightbox();
  });
})();
