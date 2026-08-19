# CHESS-44: No focus-visible styles

**Priority:** Accessibility | **File:** `public/styles.css`

## Description

There are no `:focus` or `:focus-visible` styles. The default browser focus ring may be invisible or very faint against the black nav background or white content area. Keyboard users cannot see which element is focused.

## Suggested fix

Add `:focus-visible` outlines with sufficient contrast.

## Suomeksi

### Kuvaus

Sivulla ei ole `:focus`- tai `:focus-visible`-tyylejä. Selaimen oletusfokusrengas voi olla näkymätön mustaa navigaatiota tai valkoista sisältöaluetta vasten.

### Ehdotettu korjaus

Lisää `:focus-visible`-ääriviivat riittävällä kontrastilla.
