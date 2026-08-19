# CHESS-31: Login always redirects to /viestit

**Priority:** UX | **File:** `server.js` line 110

## Description

After login, the user is always sent to `/viestit`. If they originally tried to visit `/pelit` and were bounced to the login page, they lose their intended destination.

## Suggested fix

Store the original URL in the session before redirecting to login, and use it after successful authentication.

## Suomeksi

### Kuvaus

Kirjautumisen jälkeen käyttäjä ohjataan aina `/viestit`-sivulle. Jos käyttäjä yritti alun perin avata `/pelit`, alkuperäinen kohde katoaa.

### Ehdotettu korjaus

Tallenna alkuperäinen URL istuntoon ja käytä sitä kirjautumisen jälkeen.
