# CHESS-24: Messages have no id, timestamp, or ordering

**Priority:** Reliability | **File:** `config/database.js` line 22, `server.js` line 72

## Description

The `viestit` table has no `id` or `aikaleima` column, and the select query has no `ORDER BY`. Message display order is undefined and could change.

## Suggested fix

Add an auto-increment id and a timestamp, and order by timestamp descending (or ascending).

## Suomeksi

### Kuvaus

`viestit`-taulusta puuttuu `id` ja `aikaleima`, eikä SELECT-kyselyssä ole `ORDER BY`. Viestien näyttöjärjestys on määrittelemätön.

### Ehdotettu korjaus

Lisää id ja aikaleima ja järjestä niiden mukaan.
