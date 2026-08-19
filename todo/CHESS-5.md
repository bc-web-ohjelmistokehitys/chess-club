# CHESS-5: Broken logout

**Priority:** High | **File:** `server.js` line 123

## Description

The logout route only redirects to the front page without calling `req.session.destroy()`. The session remains valid, meaning a user who clicks "log out" is not actually logged out. Anyone with access to the browser (or the session cookie) can continue using the session.

## Suggested fix

Destroy the session and clear the cookie before redirecting.

## Suomeksi

### Kuvaus

Uloskirjautumisreitti ohjaa etusivulle kutsumatta `req.session.destroy()`-metodia. Istunto jää voimaan, joten käyttäjä ei oikeasti kirjaudu ulos.

### Ehdotettu korjaus

Tuhoa istunto ja tyhjennä eväste ennen uudelleenohjausta.
