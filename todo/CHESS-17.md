# CHESS-17: Password field is type="text"

**Priority:** Low | **File:** `views/home.ejs` line 7

## Description

The password input uses `type="text"`, so the password is visible on screen and may be cached by the browser in form history.

## Suggested fix

Change to `type="password"`.

## Suomeksi

### Kuvaus

Salasanakenttä käyttää `type="text"`, joten salasana näkyy ruudulla ja selain voi tallentaa sen lomakehistoriaan.

### Ehdotettu korjaus

Vaihda `type="password"`.
