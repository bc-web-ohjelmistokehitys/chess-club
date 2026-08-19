# CHESS-39: Tables have no caption or accessible name

**Priority:** Accessibility | **File:** `views/kayttajat.ejs`, `views/tapahtumat.ejs`

## Description

The user listing and event log tables have no `<caption>` or `aria-label`. Screen readers announce them as unnamed tables, making it hard to know what data they contain.

## Suggested fix

Add a `<caption>` element to each table (preferred over `aria-label`).

## Suomeksi

### Kuvaus

Käyttäjälistauksen ja tapahtumalokin taulukoissa ei ole `<caption>`- tai `aria-label`-elementtiä. Ruudunlukijat ilmoittavat ne nimettöminä taulukoina.

### Ehdotettu korjaus

Lisää `<caption>` jokaiseen taulukkoon.
