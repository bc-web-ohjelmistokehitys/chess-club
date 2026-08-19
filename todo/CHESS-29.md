# CHESS-29: Logged-in user sees login page at /

**Priority:** UX | **File:** `server.js` line 79

## Description

`GET /` always renders the login form with `user: null`, even if the visitor is already logged in. The layout therefore shows no navigation.

## Suggested fix

Check `req.session.user` and redirect to `/viestit` (or show a landing page with nav).

## Suomeksi

### Kuvaus

`GET /` näyttää aina kirjautumislomakkeen `user: null` -arvolla, vaikka käyttäjä olisi kirjautunut. Tällöin navigaatiota ei näy.

### Ehdotettu korjaus

Tarkista `req.session.user` ja ohjaa `/viestit`-sivulle.
