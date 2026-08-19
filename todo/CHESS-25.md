# CHESS-25: Error ignored in empty-message branch

**Priority:** Reliability | **File:** `server.js` lines 141-143

## Description

When the message field is empty, `haeViestit` is called but its error parameter is never checked. If the query fails, the error is silently swallowed and an empty list is shown.

## Suggested fix

Check `err` and render an error message.

## Suomeksi

### Kuvaus

Kun viestikenttä on tyhjä, `haeViestit`-funktion virhe jätetään tarkistamatta. Jos kysely epäonnistuu, virhe ohitetaan hiljaisesti.

### Ehdotettu korjaus

Tarkista `err` ja näytä virheilmoitus.
