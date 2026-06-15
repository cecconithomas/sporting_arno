/* ============================================================
   U.S. SPORTING ARNO 1979 — menu.js
   Gestione menu hamburger mobile e navigazione
   ============================================================ */

(function () {
  'use strict';

  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;

    // Toggle apertura/chiusura
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      // Blocca lo scroll del body quando il menu è aperto
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Chiude il menu al click su un link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Chiude con il tasto ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /**
   * Aggiunge la classe 'active' al link della pagina corrente
   */
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage ||
          (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Header: aggiunge classe 'scrolled' quando si scrolla
   */
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // applica subito al caricamento
  }

  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    setActiveNavLink();
    initStickyHeader();
  });
})();
