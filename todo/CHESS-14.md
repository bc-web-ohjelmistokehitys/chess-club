# CHESS-14: SELECT * exposes passwords on /kayttajat

**Priority:** Medium | **File:** `server.js` line 167

## Description

The user listing query is `SELECT * FROM kayttajat`, which retrieves passwords even though the view does not display them. If the template is modified later or debug logging is added, passwords could leak.

## Suggested fix

Select only the columns needed (`tunnus`, `sahkoposti`, `yllapitaja`).

## Suomeksi

### Kuvaus

Käyttäjälistauksen kysely on `SELECT * FROM kayttajat`, joka hakee myös salasanat, vaikka näkymä ei näytä niitä. Jos templaattia muutetaan tai lokitus lisätään, salasanat voivat vuotaa.

### Ehdotettu korjaus

Hae vain tarvittavat sarakkeet.
