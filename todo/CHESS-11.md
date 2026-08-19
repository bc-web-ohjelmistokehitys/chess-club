# CHESS-11: Insecure session cookie settings

**Priority:** Medium | **File:** `server.js` lines 24-29

## Description

`secure` is `false` (cookie sent over HTTP), `saveUninitialized` is `true` (empty sessions saved), and `httpOnly`/`sameSite` are not set.

## Suggested fix

Set `httpOnly: true`, `sameSite: 'lax'` (or `'strict'`), `secure: true` in production, and `saveUninitialized: false`.

## Suomeksi

### Kuvaus

`secure` on `false` (eväste lähetetään HTTP:n yli), `saveUninitialized` on `true` (tyhjät istunnot tallennetaan), eikä `httpOnly`/`sameSite` ole asetettu.

### Ehdotettu korjaus

Aseta `httpOnly: true`, `sameSite: 'lax'`, `secure: true` tuotannossa ja `saveUninitialized: false`.
