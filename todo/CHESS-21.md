# CHESS-21: New DB connection per query

**Priority:** Reliability | **File:** `config/database.js` (`connectDB`), `server.js` (every route)

## Description

Every route handler opens a new SQLite connection and closes it after the query. This causes connection churn, "Tietokantayhteys muodostettu" log spam, and potential `SQLITE_BUSY` errors under concurrent access.

## Suggested fix

Open one connection at startup (or use a small pool) and set `busy_timeout`.

## Suomeksi

### Kuvaus

Jokainen reittikäsittelijä avaa uuden SQLite-yhteyden ja sulkee sen kyselyn jälkeen. Tämä aiheuttaa yhteyksien vaihtumista, lokitulvaa ja mahdollisia `SQLITE_BUSY`-virheitä.

### Ehdotettu korjaus

Avaa yksi yhteys käynnistyksen yhteydessä ja aseta `busy_timeout`.
