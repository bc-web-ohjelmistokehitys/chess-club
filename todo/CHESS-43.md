# CHESS-43: No skip link

**Priority:** Accessibility | **File:** `views/layout.ejs`

## Description

There is no "skip to content" link. Keyboard users must tab through the entire navigation on every page before reaching the main content.

## Suggested fix

Add a visually hidden skip link as the first focusable element that jumps to `<main>`.

## Suomeksi

### Kuvaus

Sivulla ei ole "siirry sisältöön" -linkkiä. Näppäimistökäyttäjien täytyy selata koko navigaation läpi jokaisella sivulla.

### Ehdotettu korjaus

Lisää visuaalisesti piilotettu skip-linkki, joka vie `<main>`-elementtiin.
