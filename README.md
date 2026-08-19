# Shakkikerho

Educational Node.js site that looks like a chess club application. It contains intentionally vulnerable code for learning SQL injection, XSS, and broken access control. Do not treat it as a real production app.

## Features

- Login and session-based pages
- Message board (poster name taken from the logged-in user)
- Games page (placeholder; playing is not implemented yet)
- Admin navigation for user listing and event log
- Logout that returns to the front page
- SQLite database created automatically on first run

## Prerequisites

- Node.js
- No separate database server (uses SQLite via `sqlite3`)

## Installation

```bash
npm install
```

The application creates `database/injection.db` on startup if needed.

## Running the Application

Start the server:

```bash
npm start
```

Development (auto-restart):

```bash
npm run dev
```

Then open `http://localhost:3000`.

Reset the database to default users, messages, and events:

```bash
npm run reset-db
```

## Pages

| Path | Who sees it | Description |
|---|---|---|
| `/` | Everyone | Front page with login form. No navigation links. |
| `/viestit` | Logged-in users | Message board |
| `/pelit` | Logged-in users | Games placeholder |
| `/kayttajat` | Admin nav item | User listing |
| `/tapahtumat` | Admin nav item | Event log, newest first |
| `/logout` | Logged-in users | Returns to the front page |

After login, navigation shows **Viestitaulu**, **Pelit**, and **Kirjaudu ulos**. Admins also get **Käyttäjät** and **Tapahtumat**.

## Languages

The UI is Finnish by default at the paths above. The same pages are also available under `/fi/` (Finnish) and `/en/` (English), for example `/en/viestit`. There is no language switcher in the UI.

## Sample accounts

| Username | Password | Role |
|---|---|---|
| hakkeri | hack123 | user |
| timo | timo345 | user |
| sara | sara123 | user |
| admin | adminqwerty | admin |

## Security Notice

This application contains intentionally vulnerable code for educational purposes. Do not deploy it in a production environment or expose it to the internet.

## File Structure

```
/
├── server.js                 # Express server and routes
├── package.json
├── config/
│   └── database.js           # SQLite connection, init, and reset
├── scripts/
│   └── reset-db.js           # Restore default database contents
├── database/
│   └── injection.db          # SQLite database (auto-created)
├── locales/
│   ├── fi.js                 # Finnish UI strings
│   └── en.js                 # English UI strings
├── views/
│   ├── layout.ejs            # Layout and navigation
│   ├── home.ejs              # Login / front page
│   ├── viestit.ejs           # Message board
│   ├── pelit.ejs             # Games placeholder
│   ├── kayttajat.ejs         # User listing
│   ├── tapahtumat.ejs        # Event log
│   └── 404.ejs
└── public/
    └── styles.css
```

## Technologies Used

- **Backend:** Node.js, Express.js (ES modules)
- **Database:** SQLite (`sqlite3`)
- **Template engine:** EJS
- **Styling:** CSS
