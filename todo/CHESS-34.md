# CHESS-34: Login form needs autocomplete and aria attributes

**Priority:** UX | **File:** `views/home.ejs`

## Description

The login form is missing `autocomplete="username"` and `autocomplete="current-password"`, so browsers and password managers may not fill it correctly. Login errors are not associated with inputs via `aria-describedby` or `aria-invalid`, making them invisible to screen readers in context.

## Suggested fix

Add the `autocomplete` attributes and link errors to inputs with ARIA.

## Suomeksi

### Kuvaus

Kirjautumislomakkeesta puuttuu `autocomplete`-attribuutit, joten selaimet ja salasanahallintaohjelmat eivät ehkä täytä sitä oikein. Virheilmoituksia ei ole yhdistetty kenttiin `aria-describedby`-attribuutilla.

### Ehdotettu korjaus

Lisää `autocomplete`-attribuutit ja yhdistä virheet kenttiin ARIA:lla.
