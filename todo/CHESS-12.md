# CHESS-12: No CSRF protection

**Priority:** Medium | **File:** `server.js` (all POST routes)

## Description

Login and message forms have no CSRF tokens. An attacker can create a page that automatically submits a form to the app using the victim's session.

## Suggested fix

Add CSRF tokens to all state-changing forms (e.g. with the `csurf` package or a custom token).

## Suomeksi

### Kuvaus

Kirjautumis- ja viestilomakkeissa ei ole CSRF-tunnisteita. Hyökkääjä voi luoda sivun, joka lähettää lomakkeen automaattisesti uhrin istunnolla.

### Ehdotettu korjaus

Lisää CSRF-tunnisteet kaikkiin tilan muuttaviin lomakkeisiin.
