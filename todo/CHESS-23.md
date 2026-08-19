# CHESS-23: No UNIQUE constraint on tunnus

**Priority:** Reliability | **File:** `config/database.js` line 8

## Description

The `kayttajat` table definition has no UNIQUE constraint on the `tunnus` column. Nothing prevents inserting two users with the same username, which would break login (both rows would match).

## Suggested fix

Add `UNIQUE` to the `tunnus` column.

## Suomeksi

### Kuvaus

`kayttajat`-taulun `tunnus`-sarakkeessa ei ole UNIQUE-rajoitetta. Mikään ei estä samannimisten käyttäjien lisäämistä, mikä rikkoisi kirjautumisen.

### Ehdotettu korjaus

Lisää `UNIQUE` `tunnus`-sarakkeeseen.
