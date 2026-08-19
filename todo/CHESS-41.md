# CHESS-41: 404 page uses h2 with no h1

**Priority:** Accessibility | **File:** `views/404.ejs`

## Description

The 404 page contains only an `<h2>`. With no `<h1>` on the page, the heading hierarchy is broken. Screen readers and outline tools see a page that starts at heading level 2.

## Suggested fix

Change `<h2>` to `<h1>`.

## Suomeksi

### Kuvaus

404-sivulla on vain `<h2>`. Ilman `<h1>`:tä otsikkohierarkia on rikki.

### Ehdotettu korjaus

Vaihda `<h2>` → `<h1>`.
