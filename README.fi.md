# Shakkikerho (injektioharjoitus)

Opetuskäyttöön tarkoitettu Node.js-sivusto, joka näyttää shakkikerhon sovellukselta. Koodissa on tahallisia haavoittuvuuksia SQL-injektioiden, XSS:n ja puutteellisen pääsynhallinnan harjoitteluun. Tätä ei ole tarkoitettu oikeaksi tuotantosovellukseksi.

## Ominaisuudet

- Kirjautuminen ja istuntoon perustuvat sivut
- Viestitaulu (viestin lähettäjän nimi otetaan kirjautuneesta käyttäjästä)
- Pelit-sivu (paikanvaraaja; pelaamista ei ole vielä toteutettu)
- Ylläpitäjän navigaatio käyttäjälistaukseen ja tapahtumalokiin
- Uloskirjautuminen, joka palauttaa etusivulle
- SQLite-tietokanta luodaan automaattisesti ensimmäisellä käynnistyksellä

## Esivaatimukset

- Node.js
- Ei erillistä tietokantapalvelinta (käyttää SQLitea `sqlite3`-paketin kautta)

## Asennus

```bash
npm install
```

Sovellus luo tarvittaessa tiedoston `database/injection.db` käynnistyksen yhteydessä.

## Sovelluksen käynnistäminen

Käynnistä palvelin:

```bash
npm start
```

Kehitystila (automaattinen uudelleenkäynnistys):

```bash
npm run dev
```

Avaa sen jälkeen `http://localhost:3000`.

Palauta tietokanta oletuskäyttäjiin, -viesteihin ja -tapahtumiin:

```bash
npm run reset-db
```

## Sivut

| Polku | Kuka näkee | Kuvaus |
|---|---|---|
| `/` | Kaikki | Etusivu kirjautumislomakkeella. Ei navigaatiolinkkejä. |
| `/viestit` | Kirjautuneet käyttäjät | Viestitaulu |
| `/pelit` | Kirjautuneet käyttäjät | Pelien paikanvaraaja |
| `/kayttajat` | Ylläpitäjän navigaatio | Käyttäjälistaus |
| `/tapahtumat` | Ylläpitäjän navigaatio | Tapahtumaloki, uusin ensin |
| `/logout` | Kirjautuneet käyttäjät | Palauttaa etusivulle |

Kirjautumisen jälkeen navigaatiossa näkyvät **Viestitaulu**, **Pelit** ja **Kirjaudu ulos**. Ylläpitäjillä on lisäksi **Käyttäjät** ja **Tapahtumat**.

## Kielet

Käyttöliittymä on oletuksena suomeksi yllä olevissa poluissa. Samat sivut ovat saatavilla myös poluissa `/fi/` (suomi) ja `/en/` (englanti), esimerkiksi `/en/viestit`. Käyttöliittymässä ei ole kielenvalitsinta.

## Esimerkkitunnukset

| Käyttäjätunnus | Salasana | Rooli |
|---|---|---|
| hakkeri | hack123 | käyttäjä |
| timo | timo345 | käyttäjä |
| sara | sara123 | käyttäjä |
| admin | adminqwerty | ylläpitäjä |

## Tietoturvahuomautus

Tässä sovelluksessa on tahallisesti haavoittuvaa koodia opetuskäyttöä varten. Älä ota sitä käyttöön tuotantoympäristössä äläkä altista sitä internetille.

## Tiedostorakenne

```
/
├── server.js                 # Express-palvelin ja reitit
├── package.json
├── config/
│   └── database.js           # SQLite-yhteys, alustus ja palautus
├── scripts/
│   └── reset-db.js           # Palauta tietokanta oletussisältöön
├── database/
│   └── injection.db          # SQLite-tietokanta (luodaan automaattisesti)
├── locales/
│   ├── fi.js                 # Suomenkieliset käyttöliittymätekstit
│   └── en.js                 # Englanninkieliset käyttöliittymätekstit
├── views/
│   ├── layout.ejs            # Ulkoasu ja navigaatio
│   ├── home.ejs              # Kirjautuminen / etusivu
│   ├── viestit.ejs           # Viestitaulu
│   ├── pelit.ejs             # Pelien paikanvaraaja
│   ├── kayttajat.ejs         # Käyttäjälistaus
│   ├── tapahtumat.ejs        # Tapahtumaloki
│   └── 404.ejs
└── public/
    └── styles.css
```

## Käytetyt teknologiat

- **Taustajärjestelmä:** Node.js, Express.js (ES-moduulit)
- **Tietokanta:** SQLite (`sqlite3`)
- **Mallimoottori:** EJS
- **Tyylit:** CSS
