# U.S. Sporting Arno 1979 — Sito Web Ufficiale

## 📁 Struttura della cartella

```
us-sporting-arno/
├── index.html          → Home page
├── societa.html        → La Società (storia, valori, staff)
├── squadre.html        → Squadre (rose per categoria)
├── calendario.html     → Calendario partite e risultati
├── allenamenti.html    → Orari allenamenti settimanali
├── notizie.html        → Notizie, comunicati ed eventi
├── contatti.html       → Contatti e modulo di contatto
├── iscrizioni.html     → Iscrizioni online
├── css/
│   ├── style.css       → Stili principali (colori logo, layout)
│   └── responsive.css  → Stili per mobile/tablet
├── js/
│   ├── main.js         → Animazioni, contatori, form, lightbox
│   ├── menu.js         → Menu hamburger mobile + sticky header
│   └── ticker.js       → Ticker notizie scorrevole in cima
└── images/
    ├── logo.png        → Logo U.S. Sporting Arno 1979
    └── [altre immagini da inserire]
```

---

## 🎨 Colori del logo utilizzati

| Variabile CSS | Valore | Uso |
|---|---|---|
| `--color-primary` | `#FC8ED8` | Rosa brillante — colore principale |
| `--color-primary-dark` | `#c4619e` | Rosa scuro — hover, accenti |
| `--color-primary-deeper` | `#8a1a6e` | Magenta scuro — testi su sfondo chiaro |
| `--color-accent` | `#B86CB1` | Viola-magenta — elementi secondari |
| `--color-dark` | `#1a1a1a` | Nero — sfondi scuri, header |
| `--color-white` | `#ffffff` | Bianco |

---

## 🖼️ Come inserire le immagini

Tutti i placeholder immagine sono contrassegnati con il commento `<!-- 💡 -->`.

**Immagini consigliate da aggiungere nella cartella `/images/`:**

| File | Pagina | Dimensioni consigliate |
|---|---|---|
| `hero-home.jpg` | Home — sezione hero | 1920 × 680 px |
| `about-home.jpg` | Home — sezione chi siamo | 800 × 420 px |
| `prima-squadra.jpg` | Squadre | 600 × 300 px |
| `juniores.jpg` | Squadre | 600 × 300 px |
| `allievi.jpg` | Squadre | 600 × 300 px |
| `giovanissimi.jpg` | Squadre | 600 × 300 px |
| `esordienti.jpg` | Squadre | 600 × 300 px |
| `pulcini.jpg` | Squadre | 600 × 300 px |
| `societa-foto.jpg` | La Società | 800 × 420 px |
| `news-1.jpg`, `news-2.jpg`... | Notizie | 600 × 200 px |
| `staff-presidente.jpg`... | La Società — Staff | 300 × 160 px (formato tessera) |

**Per sostituire un placeholder**, cerca nel file HTML il commento `<!-- 💡` e sostituisci il blocco `.placeholder` con il tag `<img>`.

---

## ✏️ Come personalizzare i testi

Tutti i testi da sostituire sono racchiusi tra parentesi quadre: `[Inserisci qui il testo]`.

Usa **Ctrl+Shift+H** in VS Code per cercare e sostituire in tutti i file.

**Stringhe da cercare e sostituire:**

| Cerca | Sostituisci con |
|---|---|
| `[Via e numero civico, Città]` | Indirizzo reale della società |
| `[Numero di telefono]` | Numero di telefono |
| `[email segreteria]` | Email reale |
| `[Orari segreteria]` | Orari reali |
| `[Nome Cognome]` | Nomi reali dello staff |
| `[Nome Allenatore]` | Nomi degli allenatori |
| `[gg/mm/aaaa]` | Date reali partite |
| `[HH:MM]` | Orari reali |
| `[Nome Avversario]` | Nome avversario reale |
| `[NUMERO]` | Numero WhatsApp (formato: 39XXXXXXXXXX) |

---

## 📰 Come aggiornare il ticker delle notizie

Apri `js/ticker.js` e modifica l'array `tickerItems`:

```javascript
const tickerItems = [
  'Benvenuti nel sito ufficiale!',
  'Partita sabato 21 giugno ore 15:00 — Sporting Arno vs [Avversario]',
  // aggiungi qui le tue notizie...
];
```

---

## 📅 Come aggiungere partite al calendario

In `calendario.html`, aggiungi righe alla tabella corrispondente:

```html
<tr data-team="prima">
  <td>6</td>
  <td>21/06/2025</td>
  <td>15:00</td>
  <td class="match-home-cell">U.S. Sporting Arno</td>
  <td>Nome Avversario</td>
  <td><span class="match-result result-w">2 - 0</span></td>
  <td>Campo Principale</td>
</tr>
```

**Classi risultato:** `result-w` (vittoria) · `result-d` (pareggio) · `result-l` (sconfitta) · `result-p` (da giocare)

---

## 🗺️ Come aggiungere la mappa Google Maps

1. Vai su [maps.google.com](https://maps.google.com)
2. Cerca l'indirizzo della società
3. Clicca **Condividi → Incorpora una mappa**
4. Copia il codice `<iframe>`
5. Vai in `contatti.html`, trova il commento `<!-- ESEMPIO iframe reale` e sostituisci il `<div class="map-placeholder">` con l'iframe

---

## 💬 Come configurare WhatsApp

Trova in tutti i file: `href="https://wa.me/[NUMERO]"`
Sostituisci `[NUMERO]` con il numero in formato internazionale senza il `+`: es. `393401234567`

---

## 🔗 Come aggiungere i link social

In ogni pagina, cerca:
```html
<a href="#" aria-label="Facebook">f</a>
```
Sostituisci `#` con il link reale: es. `https://www.facebook.com/ussportingarno`

---

## 🚀 Come aprire in VS Code

1. **Decomprimi** la cartella `us-sporting-arno`
2. Apri VS Code → **File → Apri cartella** → seleziona `us-sporting-arno`
3. Installa l'estensione **Live Server** (cerca nel pannello estensioni)
4. Clicca con il tasto destro su `index.html` → **Open with Live Server**
5. Il sito si aprirà automaticamente nel browser!

---

## 📦 Estensioni VS Code consigliate

- **Live Server** — anteprima in tempo reale
- **Prettier** — formattazione automatica del codice
- **HTML CSS Support** — autocompletamento CSS nelle classi HTML
- **Auto Rename Tag** — rinomina automaticamente i tag HTML accoppiati

---

*Creato per U.S. Sporting Arno 1979 — Tutti i diritti riservati*
