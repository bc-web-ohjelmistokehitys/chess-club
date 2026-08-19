# CHESS-2: Message-board SQL injection

**Priority:** Critical | **File:** `server.js` line 148

## Description

The message insert uses string concatenation and `db.exec`, which allows stacked (multiple) SQL statements. An attacker can run arbitrary SQL through the message field — for example `'); DROP TABLE kayttajat; --`.

## Suggested fix

Use `db.run` with parameterized values.

## Suomeksi

### Kuvaus

Viestin lisäys käyttää merkkijonojen yhdistämistä ja `db.exec`-metodia, joka sallii useiden SQL-lauseiden suorittamisen. Hyökkääjä voi suorittaa mielivaltaista SQL:ää viestikentän kautta.

### Ehdotettu korjaus

Käytä `db.run`-metodia parametrisoiduilla arvoilla.
