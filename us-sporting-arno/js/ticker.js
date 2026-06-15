/* ============================================================
   U.S. SPORTING ARNO 1979 — ticker.js
   Gestione ticker notizie scorrevole in cima alla pagina
   ============================================================ */

(function () {
  'use strict';

  /**
   * Aggiorna le notizie nel ticker.
   * Per personalizzare: modifica l'array `tickerItems` oppure
   * sostituisci con una chiamata fetch() alle tue API/CMS.
   */
  const tickerItems = [
    'Benvenuti nel sito ufficiale della U.S. Sporting Arno 1979!',
    'Iscrizioni aperte per la stagione 2025/2026 — Contattaci per info',
    'Seguici sui social per tutti gli aggiornamenti della squadra',
    'Prossima partita: inserisci qui data e avversario',
    'Allenamenti ripresi — consulta gli orari nella sezione dedicata',
    'Nuovi kit disponibili — visita la segreteria per acquistare',
  ];

  function initTicker() {
    const contentEl = document.querySelector('.ticker-content');
    if (!contentEl) return;

    // Costruisce gli elementi del ticker
    const html = tickerItems
      .map(item => `<span class="ticker-item">${item}</span>`)
      .join('');

    // Duplica per loop continuo
    contentEl.innerHTML = html + html;
  }

  /**
   * Aggiunge/rimuove la classe 'paused' al passaggio del mouse
   * (il CSS gestisce animation-play-state)
   */
  function initHoverPause() {
    const wrap = document.querySelector('.ticker-wrap');
    if (!wrap) return;

    wrap.addEventListener('mouseenter', () => {
      wrap.querySelector('.ticker-content')?.style.setProperty('animation-play-state', 'paused');
    });
    wrap.addEventListener('mouseleave', () => {
      wrap.querySelector('.ticker-content')?.style.setProperty('animation-play-state', 'running');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTicker();
    initHoverPause();
  });
})();
