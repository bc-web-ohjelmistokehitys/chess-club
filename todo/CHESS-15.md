# CHESS-15: Session not regenerated after login

**Priority:** Medium | **File:** `server.js` line 106

## Description

The session ID is not regenerated after successful authentication. This allows session fixation attacks: an attacker who knows (or sets) a session ID before login can hijack the session afterward.

## Suggested fix

Call `req.session.regenerate()` before storing the user in the session.

## Suomeksi

### Kuvaus

Istuntotunnistetta ei uusita onnistuneen kirjautumisen jälkeen. Tämä mahdollistaa istunnon kiinnittämishyökkäyksen: hyökkääjä, joka tietää istuntotunnisteen ennen kirjautumista, voi kaapata istunnon.

### Ehdotettu korjaus

Kutsu `req.session.regenerate()` ennen käyttäjän tallentamista istuntoon.
