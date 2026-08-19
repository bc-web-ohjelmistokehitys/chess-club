# CHESS-7: Missing admin check on /tapahtumat

**Priority:** High | **File:** `server.js` line 177

## Description

Same problem as CHESS-6 but for the event log. The `/tapahtumat` route only requires login, not admin privileges.

## Suomeksi

### Kuvaus

Sama ongelma kuin CHESS-6, mutta tapahtumalokille. `/tapahtumat`-reitti vaatii vain kirjautumisen, ei ylläpitäjäoikeuksia.
