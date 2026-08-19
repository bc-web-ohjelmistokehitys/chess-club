# CHESS-3: Stored XSS on the message board

**Priority:** Critical | **File:** `views/viestit.ejs` lines 16-17

## Description

Messages are rendered with unescaped EJS tags (`<%- %>`), meaning any HTML or JavaScript in a stored message is executed in every visitor's browser. An attacker can inject a `<script>` tag that steals cookies or redirects users.

## Suggested fix

Use escaped tags (`<%= %>`) or sanitize input before saving.

## Suomeksi

### Kuvaus

Viestit renderöidään EJS:n `<%- %>`-tageilla, jotka eivät koodaa HTML:ää. Tietokantaan tallennettu JavaScript suoritetaan jokaisen kävijän selaimessa.

### Ehdotettu korjaus

Käytä `<%= %>`-tageja tai puhdista syöte ennen tallennusta.
