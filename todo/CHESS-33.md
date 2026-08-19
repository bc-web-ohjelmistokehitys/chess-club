# CHESS-33: No max length on input fields

**Priority:** UX | **File:** `views/home.ejs`, `views/viestit.ejs`, `config/database.js`

## Description

Username, password, and message fields have no `maxlength` attribute in the HTML and no length constraint in the database schema. A user (or attacker) can submit extremely long strings.

## Suggested fix

Add `maxlength` to the HTML inputs and length checks on the server side.

## Suomeksi

### Kuvaus

Käyttäjänimi-, salasana- ja viestikentissä ei ole `maxlength`-attribuuttia eikä tietokannassa pituusrajoitetta.

### Ehdotettu korjaus

Lisää `maxlength` HTML-kenttiin ja pituustarkistukset palvelimelle.
