# CHESS-32: No pagination

**Priority:** UX | **File:** `server.js` (viestit, kayttajat, tapahtumat routes)

## Description

All list pages fetch every row and render them at once. As data grows, pages will become slow and hard to use.

## Suggested fix

Add `LIMIT`/`OFFSET` (or cursor-based) pagination to queries and render page controls in the views.

## Suomeksi

### Kuvaus

Kaikki listauksensivut hakevat kaikki rivit ja renderöivät ne kerralla. Datan kasvaessa sivut hidastuvat.

### Ehdotettu korjaus

Lisää `LIMIT`/`OFFSET`-sivutus kyselyihin ja sivunvaihtonäppäimet näkymiin.
