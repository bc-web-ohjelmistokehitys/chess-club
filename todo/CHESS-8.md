# CHESS-8: Passwords stored in plaintext

**Priority:** High | **File:** `config/database.js` lines 28-31

## Description

Passwords in the `kayttajat` table are stored as plain text. If the database file is compromised, all passwords are immediately readable.

## Suggested fix

Hash passwords with a slow algorithm like bcrypt or Argon2 before storing, and compare hashes during login.

## Suomeksi

### Kuvaus

Salasanat `kayttajat`-taulussa ovat selkokielisinä. Jos tietokantatiedosto vuotaa, kaikki salasanat ovat heti luettavissa.

### Ehdotettu korjaus

Tiivistä salasanat hitaalla algoritmilla (bcrypt/Argon2) ennen tallennusta ja vertaa tiivisteitä kirjautumisessa.
