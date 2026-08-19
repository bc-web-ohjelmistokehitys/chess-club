# CHESS-1: Login SQL injection

**Priority:** Critical | **File:** `server.js` line 92

## Description

The login query is built by concatenating user input directly into the SQL string: `SELECT * FROM kayttajat WHERE tunnus = '${tunnus}' AND salasana = '${salasana}'`. An attacker can bypass authentication or extract data by injecting SQL in the username or password field (e.g. `' OR 1=1 --`).

## Suggested fix

Use parameterized queries with `db.all(sql, [tunnus, salasana], ...)`.

## Suomeksi

### Kuvaus

Kirjautumisen SQL-kysely rakennetaan liittämällä käyttäjän syöte suoraan SQL-merkkijonoon. Hyökkääjä voi ohittaa tunnistautumisen tai lukea tietokannasta tietoja syöttämällä SQL-koodia tunnus- tai salasanakenttään.

### Ehdotettu korjaus

Käytä parametrisoituja kyselyitä.
