# CHESS-4: Reflected XSS on failed login

**Priority:** Critical | **File:** `views/home.ejs` line 12

## Description

When login fails, `attemptedName` is rendered with `<%- %>` (unescaped). An attacker can craft a form that posts a malicious username containing `<script>` tags, and the response will execute it.

## Suggested fix

Use `<%= %>` to escape the output.

## Suomeksi

### Kuvaus

Epäonnistuneen kirjautumisen yhteydessä `attemptedName` renderöidään ilman HTML-koodausta. Hyökkääjä voi lähettää lomakkeen, jossa käyttäjänimi sisältää `<script>`-tageja.

### Ehdotettu korjaus

Käytä `<%= %>`-tagia.
