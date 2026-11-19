# Tera

Decision intelligence for zero-waste investment. Columbia M.S. Technology Management capstone MVP.

This is the public demo: a static site with no build step. AI features (document extraction, fit explanations, business case drafting) and saving are switched off here, because they rely on Claude artifact capabilities. Sample data and catalog values are fictional or illustrative.

- `index.html`: the app, including its landing page
- `partners.json`, `zips.json`, `njdep.json`: bundled partner directory and ZIP lookup data
- `archive/landing-2026-09.html`: the earlier standalone landing page

## Security

- `_headers` sets a strict Content-Security-Policy and other security headers on Netlify. Scripts only load from this site, so a new external script, font or API must be added there first.
- pdf.js 3.11.174 is self-hosted in `vendor/` and runs with `isEvalSupported:false`, which closes CVE-2024-4367 (code execution from a crafted PDF).
- All app text is HTML-escaped before rendering, and links only accept `http(s)` URLs.
- No API keys or secrets belong in this repo. When AI features return, keys go in Netlify environment variables and are used only inside Netlify Functions.
