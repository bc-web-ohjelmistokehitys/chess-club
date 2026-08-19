# CHESS-6: Missing admin check on /kayttajat

**Priority:** High | **File:** `server.js` line 165

## Description

The `/kayttajat` route only uses `requireLogin`. Any logged-in user can access the full user list (including email addresses and roles) by navigating directly to the URL, even though the nav link is only shown to admins. The `requireAdmin` middleware exists but is not attached.

## Suomeksi

### Kuvaus

`/kayttajat`-reitti käyttää vain `requireLogin`-väliohjelmistoa. Kuka tahansa kirjautunut käyttäjä voi avata käyttäjälistan suoraan URL:n kautta. `requireAdmin`-väliohjelmisto on olemassa mutta sitä ei käytetä.
