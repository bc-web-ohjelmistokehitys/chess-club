# CHESS-30: Inconsistent login error feedback

**Priority:** UX | **File:** `server.js` lines 88-93, `views/home.ejs`

## Description

Empty username silently shows the login page. Wrong credentials show "Kirjautuminen epäonnistui käyttäjälle X" without saying why. A SQL error shows a different red message. The user cannot tell what went wrong.

## Suggested fix

Always show a clear, consistent error like "Wrong username or password".

## Suomeksi

### Kuvaus

Tyhjä käyttäjänimi näyttää kirjautumissivun hiljaisesti. Väärät tunnukset näyttävät "Kirjautuminen epäonnistui" ilman syytä. SQL-virhe näyttää eri viestin.

### Ehdotettu korjaus

Näytä aina selkeä ja yhtenäinen virheilmoitus.
