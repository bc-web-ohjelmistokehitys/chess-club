# CHESS-13: Login event insert concatenates username

**Priority:** Medium | **File:** `server.js` line 107

## Description

The event log insert concatenates the username into SQL: `'Käyttäjä ${results[0].tunnus} kirjautui sisään.'`. While `tunnus` comes from the database (not directly from user input), the original login query is injectable, so the stored username could contain SQL.

## Suggested fix

Parameterize this insert.

## Suomeksi

### Kuvaus

Tapahtumalokin lisäys yhdistää käyttäjänimen SQL:ään. Vaikka `tunnus` tulee tietokannasta, alkuperäinen kirjautumiskysely on injektoitavissa, joten tallennettu käyttäjänimi voi sisältää SQL:ää.

### Ehdotettu korjaus

Parametrisoi lisäys.
