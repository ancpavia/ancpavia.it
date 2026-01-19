# Sito ANC Sezione di Pavia

Sito statico one‑page (home) + pagine dedicate (contatti, galleria, volontariato) alimentato da `assets/data.js` e renderizzato da `assets/app.js`. Include tema chiaro/scuro automatico, slider home, FAQ e contenuti configurabili da un unico file dati.

## Struttura
- `index.html`, `contatti.html`, `galleria.html`, `volontariato.html`: layout base e hook per i dati.
- `assets/data.js`: tutte le stringhe, immagini, menu, meta per pagina.
- `assets/app.js`: rendering dinamico, slider, FAQ, form, menu.
- `assets/style.css`: stile (light/dark), componenti e responsive.
- `assets/images/`: loghi e immagini usate dal sito.

## Avvio
È un sito statico: apri gli HTML in un browser o servi la cartella con un semplice server statico (es. `npx serve .`).

## Configurazione contenuti (unico punto: `assets/data.js`)
- `general`: titolo sito, meta description di default, logo, footer.
- `meta`: title/description/og:image per ciascuna pagina (`index.html`, `volontariato.html`, `galleria.html`, `contatti.html`).
- `menu`: voci di navigazione e link.
- `home`: hero (immagine, testi, CTA primario/secondario), numeri, cosa facciamo, slider, why join, about, 5x1000.
- `fullGallery`: titolo/intro e lista immagini archivio.
- `volunteers`: titolo/intro e lista volontari (nome, ruolo, descrizione, immagine).
- `contact`: titolo pagina, dettagli, telefoni, social, trasporti, privacy, titoli FAQ/form.
- `faq`: domande/risposte (HTML consentito nelle risposte).

Per cambiare testi o immagini, modifica i valori in `assets/data.js`; non serve toccare gli HTML.

## Tema e accessibilità
- Tema scuro/chiaro auto con `prefers-color-scheme`; contrasto ottimizzato per testi e componenti.
- Slider con pulsanti; FAQ con `aria-expanded`/`aria-controls`; menu mobile aggiorna `aria-expanded`.

## Performance
- Immagini slider/galleria lazy con `sizes`; hero prioritario; volontari lazy/async.

## Disattivare/Riattivare la sezione volontariato
Per rimuovere completamente la pagina/voce volontariato:
- Elimina `volontariato.html` (o lascialo ma non linkato).
- In `assets/data.js` togli l’entry dal `menu` e rimuovi/azzera `volunteers`.
- In `assets/style.css` puoi eliminare il blocco `/* --- VOLONTARI --- */` se non è usato altrove.
- In `assets/app.js` rimuovi il branch `volontariato.html` così il JS non prova a renderizzare la pagina.

Per riattivare la sezione, ripristina i punti sopra (file, voce menu, dati, stile, branch JS).

## Nota su nascondere il bottone hero
Se vuoi nascondere il bottone primario in home senza rimuovere logica/dati, puoi commentarlo in `index.html` con un commento HTML, es. `<!-- <a id="hero-cta" class="btn"></a> -->`. Togli il commento per mostrarlo di nuovo.
