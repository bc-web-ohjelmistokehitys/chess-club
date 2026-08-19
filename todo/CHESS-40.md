# CHESS-40: Page title is always the site name

**Priority:** Accessibility | **File:** `views/layout.ejs` line 7

## Description

`<title>` is always `<%= t.siteTitle %>` regardless of which page the user is on. Browser tabs and screen readers cannot distinguish between open pages.

## Suggested fix

Pass a `pageTitle` variable from each route and render it as `<title><%= pageTitle %> – <%= t.siteTitle %></title>`.

## Suomeksi

### Kuvaus

`<title>` on aina `<%= t.siteTitle %>` sivusta riippumatta. Selainvälilehdet ja ruudunlukijat eivät erota sivuja toisistaan.

### Ehdotettu korjaus

Välitä `pageTitle` jokaiselta reitiltä ja renderöi se otsikossa.
