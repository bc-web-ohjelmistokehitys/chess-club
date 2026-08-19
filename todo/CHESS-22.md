# CHESS-22: initializeDB connection never closed

**Priority:** Reliability | **File:** `config/database.js` line 97

## Description

`initializeDB()` opens a connection and returns it, but the caller in `server.js` never closes it. The connection stays open for the lifetime of the process doing nothing.

## Suggested fix

Close the connection after seeding completes, or reuse it as the shared app connection (see CHESS-21).

## Suomeksi

### Kuvaus

`initializeDB()` avaa yhteyden ja palauttaa sen, mutta kutsuja `server.js`:ssä ei sulje sitä koskaan. Yhteys jää auki prosessin elinkaaren ajaksi.

### Ehdotettu korjaus

Sulje yhteys alustuksen jälkeen tai käytä sitä jaettuna sovelluksen yhteytenä (katso CHESS-21).
