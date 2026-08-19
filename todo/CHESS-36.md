# CHESS-36: Nav has no accessible name

**Priority:** Accessibility | **File:** `views/layout.ejs` line 11

## Description

The `<nav>` element has no `aria-label` or `aria-labelledby`. When a page has multiple landmarks (or when a screen reader lists landmarks), users cannot tell what navigation region this is.

## Suggested fix

Add `aria-label="Päänavigaatio"` (or the localized equivalent via `t`).

## Suomeksi

### Kuvaus

`<nav>`-elementillä ei ole `aria-label`- tai `aria-labelledby`-attribuuttia. Ruudunlukija ei pysty kertomaan, mikä navigaatioalue on kyseessä.

### Ehdotettu korjaus

Lisää `aria-label` käännettynä kielen mukaan.
