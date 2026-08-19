# CHESS-28: Admin checks use loose equality

**Priority:** Code quality | **File:** `server.js` line 64, `views/layout.ejs` line 17, `views/kayttajat.ejs` line 23

## Description

Admin status is checked with `== 1` (loose equality). This would match the string `"1"`, `true`, or other truthy values.

## Suggested fix

Use strict equality (`=== 1`) everywhere.

## Suomeksi

### Kuvaus

Ylläpitäjäoikeuksia tarkistetaan `== 1` (löysä vertailu). Tämä täsmäisi myös merkkijonoon `"1"` tai `true`.

### Ehdotettu korjaus

Käytä tarkkaa vertailua (`=== 1`) kaikkialla.
