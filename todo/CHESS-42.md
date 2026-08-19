# CHESS-42: Message posts are unstructured

**Priority:** Accessibility | **File:** `views/viestit.ejs` lines 15-18

## Description

Each message is a pair of `<p>` elements with the author in `<b>`. There is no semantic grouping, so assistive technology cannot navigate between messages.

## Suggested fix

Wrap each message in an `<article>` element (or use an `<ol>` / `<ul>`).

## Suomeksi

### Kuvaus

Jokainen viesti on `<p>`-elementtipari, jossa lähettäjä on `<b>`-tagissa. Semanttista ryhmittelyä ei ole, joten avustavat teknologiat eivät pysty siirtymään viestien välillä.

### Ehdotettu korjaus

Kääri jokainen viesti `<article>`-elementtiin.
