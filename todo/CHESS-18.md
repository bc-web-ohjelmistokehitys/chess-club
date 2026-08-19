# CHESS-18: No login rate limiting

**Priority:** Low | **File:** `server.js` (`POST /login`)

## Description

There is no limit on login attempts. An attacker can brute-force passwords without delay.

## Suggested fix

Add rate limiting (e.g. `express-rate-limit`) or account lockout after repeated failures.

## Suomeksi

### Kuvaus

Kirjautumisyritysten määrää ei ole rajoitettu. Hyökkääjä voi kokeilla salasanoja rajattomasti.

### Ehdotettu korjaus

Lisää nopeusrajoitus tai tilin lukitus toistuvien epäonnistumisten jälkeen.
