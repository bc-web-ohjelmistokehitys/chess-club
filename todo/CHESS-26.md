# CHESS-26: body-parser is redundant

**Priority:** Code quality | **File:** `server.js` lines 3, 20-21, `package.json`

## Description

Express 4.16+ includes `express.urlencoded()` and `express.json()`, making the separate `body-parser` package unnecessary.

## Suggested fix

Replace `bodyParser.urlencoded(...)` and `bodyParser.json()` with `express.urlencoded(...)` and `express.json()`, and remove `body-parser` from dependencies.

## Suomeksi

### Kuvaus

Express 4.16+ sisältää `express.urlencoded()` ja `express.json()`, joten erillinen `body-parser`-paketti on tarpeeton.

### Ehdotettu korjaus

Korvaa `bodyParser`-kutsut Expressin omilla ja poista `body-parser` riippuvuuksista.
