# CHESS-9: Session stores full user row including password

**Priority:** High | **File:** `server.js` line 106

## Description

After login, the entire database row (including `salasana`) is stored in `req.session.user`. This means the plaintext password sits in the session store (memory by default) and could leak through logging, debugging, or serialization.

## Suggested fix

Store only `id`, `tunnus`, and `yllapitaja` in the session.

## Suomeksi

### Kuvaus

Kirjautumisen jälkeen koko tietokantarivi (mukaan lukien `salasana`) tallennetaan istuntoon. Selkokielinen salasana on istuntomuistissa ja voi vuotaa lokien tai sarjallistamisen kautta.

### Ehdotettu korjaus

Tallenna istuntoon vain `id`, `tunnus` ja `yllapitaja`.
