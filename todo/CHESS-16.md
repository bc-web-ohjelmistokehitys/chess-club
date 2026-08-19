# CHESS-16: Logout is a GET request

**Priority:** Medium | **File:** `server.js` line 123, `views/layout.ejs` line 20

## Description

Logout is a simple `<a href>` link handled by `GET /logout`. A malicious page can trigger logout by embedding an image or link.

## Suggested fix

Change to a POST form with a submit button, and handle it on the server with `app.post('/logout', ...)`.

## Suomeksi

### Kuvaus

Uloskirjautuminen on tavallinen `<a href>`-linkki, joka käsitellään `GET /logout`-reitillä. Haitallinen sivu voi laukaista uloskirjautumisen upottamalla kuvan tai linkin.

### Ehdotettu korjaus

Vaihda POST-lomakkeeksi.
