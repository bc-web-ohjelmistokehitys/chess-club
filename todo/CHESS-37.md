# CHESS-37: No aria-current on active nav link

**Priority:** Accessibility | **File:** `views/layout.ejs` lines 14-20

## Description

The navigation does not indicate which page the user is currently on. Screen readers announce all links identically.

## Suggested fix

Add `aria-current="page"` to the link that matches the current route.

## Suomeksi

### Kuvaus

Navigaatio ei osoita, millä sivulla käyttäjä on. Ruudunlukijat ilmoittavat kaikki linkit samalla tavalla.

### Ehdotettu korjaus

Lisää `aria-current="page"` aktiiviseen linkkiin.
