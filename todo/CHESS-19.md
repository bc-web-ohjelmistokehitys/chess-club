# CHESS-19: No security headers

**Priority:** Low | **File:** `server.js` (global middleware)

## Description

The application sets no security-related HTTP headers. Missing headers include `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, and `Strict-Transport-Security`.

## Suggested fix

Add the `helmet` middleware or set headers manually.

## Suomeksi

### Kuvaus

Sovellus ei aseta tietoturvaan liittyviä HTTP-otsakkeita. Puuttuvat otsakkeet: `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options` ja `Strict-Transport-Security`.

### Ehdotettu korjaus

Lisää `helmet`-väliohjelmisto tai aseta otsakkeet manuaalisesti.
