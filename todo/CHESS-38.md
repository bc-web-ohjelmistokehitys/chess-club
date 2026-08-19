# CHESS-38: Empty nav landmark when logged out

**Priority:** Accessibility | **File:** `views/layout.ejs` lines 11-23

## Description

When no user is logged in, `<nav id="navi">` is rendered as an empty element. Screen readers still announce it as a navigation landmark with no content, which is confusing.

## Suggested fix

Only render the `<nav>` element when there are links, or add `aria-hidden="true"` when empty.

## Suomeksi

### Kuvaus

Kun käyttäjä ei ole kirjautunut, `<nav id="navi">` renderöidään tyhjänä. Ruudunlukijat ilmoittavat sen tyhjänä navigaatioalueena.

### Ehdotettu korjaus

Renderöi `<nav>` vain kun linkkejä on, tai lisää `aria-hidden="true"`.
