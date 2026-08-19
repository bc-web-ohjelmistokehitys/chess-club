# Project backlog

Tickets from a code review. Short form for the team; pick up in priority order.

## Critical

- [ ] [**CHESS-1**](todo/CHESS-1.md) Login SQL injection (`POST /login`): query is built with string concatenation of `tunnus` and `salasana`. Use parameterized queries.
- [ ] [**CHESS-2**](todo/CHESS-2.md) Message-board SQL injection (`POST /viestit`): insert is concatenated and run with `db.exec` (stacked statements possible). Use a parameterized `run`/`all`.
- [ ] [**CHESS-3**](todo/CHESS-3.md) Stored XSS on the message board: `viestit.ejs` renders `nimi` and `viesti` unescaped (`<%- %>`). Escape output (or sanitize on save).
- [ ] [**CHESS-4**](todo/CHESS-4.md) Reflected XSS on failed login: `home.ejs` renders `attemptedName` unescaped. Escape it.

## High

- [ ] [**CHESS-5**](todo/CHESS-5.md) Broken logout: `GET /logout` redirects but does not destroy the session. Call `req.session.destroy()` (and clear the cookie).
- [ ] [**CHESS-6**](todo/CHESS-6.md) Missing admin check on `/kayttajat`: Any logged-in user can open the user list.
- [ ] [**CHESS-7**](todo/CHESS-7.md) Missing admin check on `/tapahtumat`: same as CHESS-6 for the event log.
- [ ] [**CHESS-8**](todo/CHESS-8.md) Passwords stored in plaintext in `kayttajat`. Hash with a slow hash (e.g. Argon2/bcrypt) and stop selecting/storing the hash in the session.
- [ ] [**CHESS-9**](todo/CHESS-9.md) Session stores the full user row from `SELECT *`, including `salasana`. Persist only id / tunnus / role.

## Medium

- [ ] [**CHESS-10**](todo/CHESS-10.md) Hardcoded session secret (`injektiotehtava-secret-key`). Load from env; fail closed if missing.
- [ ] [**CHESS-11**](todo/CHESS-11.md) Session cookie: `secure: false`, `saveUninitialized: true`. Set `httpOnly`, `sameSite`, and `secure` in production; do not save empty sessions.
- [ ] [**CHESS-12**](todo/CHESS-12.md) No CSRF protection on login or message POST. Add tokens (or equivalent) to state-changing forms.
- [ ] [**CHESS-13**](todo/CHESS-13.md) Login event insert concatenates `tunnus` into SQL. Parameterize that insert too.
- [ ] [**CHESS-14**](todo/CHESS-14.md) `/kayttajat` runs `SELECT * FROM kayttajat` (passwords included) even though the view does not show them. Select only the columns you need.
- [ ] [**CHESS-15**](todo/CHESS-15.md) Session not regenerated after login. Call `req.session.regenerate()` to prevent session fixation.
- [ ] [**CHESS-16**](todo/CHESS-16.md) Logout is a GET. Use POST so it cannot be triggered by a mere link/image request.

## Low

- [ ] [**CHESS-17**](todo/CHESS-17.md) Password field in login is `type="text"`. Use `type="password"`.
- [ ] [**CHESS-18**](todo/CHESS-18.md) No login rate limiting / lockout. Brute force is unrestricted.
- [ ] [**CHESS-19**](todo/CHESS-19.md) No security headers (CSP, `X-Content-Type-Options`, `X-Frame-Options` / `frame-ancestors`). Add Helmet or equivalent.

## Reliability

- [ ] [**CHESS-20**](todo/CHESS-20.md) Server calls `listen` before `initializeDB` finishes. First requests can hit missing tables. Await init, then listen.
- [ ] [**CHESS-21**](todo/CHESS-21.md) New SQLite connection on every query; no `busy_timeout`. Under load this logs spam and can throw `SQLITE_BUSY`. Reuse one connection (or a small pool) and set a busy timeout.
- [ ] [**CHESS-22**](todo/CHESS-22.md) The connection opened in `initializeDB` is never closed.
- [ ] [**CHESS-23**](todo/CHESS-23.md) `kayttajat.tunnus` has no UNIQUE constraint. Duplicate usernames are allowed.
- [ ] [**CHESS-24**](todo/CHESS-24.md) `viestit` has no id/timestamp and `SELECT * FROM viestit` has no `ORDER BY`. Message order is undefined. Add timestamp and use it.
- [ ] [**CHESS-25**](todo/CHESS-25.md) Empty-message branch on `POST /viestit` ignores `haeViestit` errors.

## Code quality

- [ ] [**CHESS-26**](todo/CHESS-26.md) `body-parser` is redundant on Express 4.16+. Switch to `express.urlencoded` / `express.json`.
- [ ] [**CHESS-27**](todo/CHESS-27.md) Callback-style DB helpers make it easy to skip `db.close()`. Wrap sqlite in promises and use `try/finally`.
- [ ] [**CHESS-28**](todo/CHESS-28.md) Admin checks use `== 1` (view + `requireAdmin`). Use strict equality against a real boolean/int.

## UX / i18n

- [ ] [**CHESS-29**](todo/CHESS-29.md) `GET /` always renders with `user: null`, so a logged-in user sees the login page with no nav.
- [ ] [**CHESS-30**](todo/CHESS-30.md) Empty username on login shows no error; failed login with a name vs SQL error use different patterns. Always show a clear message.
- [ ] [**CHESS-31**](todo/CHESS-31.md) After login, always redirect to `/viestit`. Preserve the original URL (e.g. `/pelit`) when `requireLogin` bounces to `/`.
- [ ] [**CHESS-32**](todo/CHESS-32.md) No pagination on messages, users, or events. Lists will grow without bound.
- [ ] [**CHESS-33**](todo/CHESS-33.md) No max length on username/message fields (DB or UI).
- [ ] [**CHESS-34**](todo/CHESS-34.md) Login errors are not tied to the inputs (`aria-describedby`). Add `autocomplete="username"` / `autocomplete="current-password"`.

## Accessibility

- [ ] [**CHESS-35**](todo/CHESS-35.md) Message-board errors (`viestit.ejs`) are a loose red `<p>`. Give the error an `id`, set `aria-invalid` / `aria-describedby` on the textarea, and `role="alert"` on the message.
- [ ] [**CHESS-36**](todo/CHESS-36.md) `<nav>` has no accessible name. Add `aria-label` (e.g. main navigation).
- [ ] [**CHESS-37**](todo/CHESS-37.md) Nav does not indicate the current page. Set `aria-current="page"` on the active link.
- [ ] [**CHESS-38**](todo/CHESS-38.md) Logged-out layout still outputs an empty `<nav>` landmark. Render `<nav>` only when there are links (or `aria-hidden="true"` on the empty bar).
- [ ] [**CHESS-39**](todo/CHESS-39.md) User and event tables have no name. Add a `<caption>` (preferred) or `aria-label`.
- [ ] [**CHESS-40**](todo/CHESS-40.md) `<title>` is always the site name. Include the current page title so tabs/screen readers can tell pages apart.
- [ ] [**CHESS-41**](todo/CHESS-41.md) 404 uses `<h2>` with no `<h1>`. Use `<h1>`.
- [ ] [**CHESS-42**](todo/CHESS-42.md) Message board posts are unstructured `<p>`s. Wrap each as `<article>`.
- [ ] [**CHESS-43**](todo/CHESS-43.md) No skip link. Add "skip to content" pointing at `main`.
- [ ] [**CHESS-44**](todo/CHESS-44.md) No `:focus-visible` styles. Add a visible focus ring so keyboard users can see where they are.
