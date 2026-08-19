# CHESS-27: Callback-style DB code is error-prone

**Priority:** Code quality | **File:** `config/database.js`, `server.js` (all routes)

## Description

Database operations use nested callbacks. It is easy to forget `db.close()` in error branches, and the deeply nested code is hard to follow.

## Suggested fix

Wrap the sqlite3 methods in promises and use `async/await` with `try/finally` to guarantee cleanup.

## Suomeksi

### Kuvaus

Tietokantaoperaatiot käyttävät sisäkkäisiä takaisinkutsuja. `db.close()` on helppo unohtaa virhetilanteissa, ja syvästi sisäkkäinen koodi on vaikealukuista.

### Ehdotettu korjaus

Kääri sqlite3-metodit lupauksiin ja käytä `async/await` sekä `try/finally`.
