# CHESS-20: Server listens before DB init finishes

**Priority:** Reliability | **File:** `server.js` lines 18, 194

## Description

`initializeDB()` is called but not awaited. `app.listen()` runs immediately, so the first requests may arrive before tables exist.

## Suggested fix

Make `initializeDB` return a promise, await it, then call `listen`.

## Suomeksi

### Kuvaus

`initializeDB()` kutsutaan mutta sitä ei odoteta. `app.listen()` suoritetaan heti, joten ensimmäiset pyynnöt voivat saapua ennen taulujen luontia.

### Ehdotettu korjaus

Palauta `initializeDB`:stä lupaus, odota sitä ja kutsu sitten `listen`.
