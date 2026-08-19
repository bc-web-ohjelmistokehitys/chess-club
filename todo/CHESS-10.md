# CHESS-10: Hardcoded session secret

**Priority:** Medium | **File:** `server.js` line 25

## Description

The session secret is a hardcoded string `'injektiotehtava-secret-key'`. Anyone who reads the source code can forge session cookies.

## Suggested fix

Load the secret from an environment variable and refuse to start if it is missing.

## Suomeksi

### Kuvaus

Istunnon salaisuus on kovakoodattu merkkijono. Kuka tahansa lähdekoodin lukija voi väärentää istuntoevästeitä.

### Ehdotettu korjaus

Lataa salaisuus ympäristömuuttujasta ja kieltäydy käynnistymästä, jos se puuttuu.
