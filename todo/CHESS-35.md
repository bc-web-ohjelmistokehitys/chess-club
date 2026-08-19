# CHESS-35: Message-board errors not accessible

**Priority:** Accessibility | **File:** `views/viestit.ejs` lines 11-13

## Description

Error messages on the message board are plain `<p>` elements with `style="color: red"`. They are not linked to the textarea with `aria-describedby`, have no `role="alert"`, and rely on color alone to convey meaning. Screen readers will not announce the error, and colorblind users may miss it.

## Suggested fix

Give the error an `id`, add `aria-describedby` and `aria-invalid` on the textarea, and `role="alert"` on the error paragraph.

## Suomeksi

### Kuvaus

Viestitaulun virheilmoitukset ovat tavallisia `<p>`-elementtejä punaisella värillä. Niitä ei ole yhdistetty tekstikenttään `aria-describedby`-attribuutilla, niissä ei ole `role="alert"`, ja ne viestivät virheen vain värin kautta.

### Ehdotettu korjaus

Anna virheelle `id`, lisää `aria-describedby` ja `aria-invalid` tekstikenttään ja `role="alert"` virhe-elementtiin.
