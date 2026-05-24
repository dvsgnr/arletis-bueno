# Arletis Bueno — Website

> Bilingual wellness/nutrition site for Arletis Bueno. Plain HTML + React (via CDN) + CSS — no build step, no backend.

## Stack

- **HTML / CSS / JS** — vanilla, no preprocessor
- **React 18** loaded from unpkg CDN
- **Babel Standalone** transpiles JSX in the browser
- **Google Fonts** (Newsreader + Manrope) loaded via `<link>`
- **No server** — contact form is currently a UI simulation. When you're ready, wire it to Formspree, Resend, or any form service.

## File map

```
index.html             # entry point
styles.css             # all styling, brand tokens (--ab-accent, --ab-bg, etc.)
content.js             # bilingual copy — edit this to change any text
components.jsx         # Header, Footer, shared bits
page-home.jsx          # Home page
page-others.jsx        # Planes, Sobre mí, Contacto
app.jsx                # routing + state shell
tweaks-panel.jsx       # in-design tweak controls (ignored on prod)
assets/                # logos + photos
.do/app.yaml           # DigitalOcean App Platform deploy spec
```

To change site copy: edit **`content.js`**. To change colors: edit **`styles.css`** (the `:root { --ab-* }` block at the top).

---

## Local preview

Any static-file server works. The two easiest:

```bash
# If you have Python 3:
python3 -m http.server 8080

# Or with Node:
npx serve .
```

Then open <http://localhost:8080>.

**Don't open `index.html` by double-clicking** — the JSX scripts use relative URLs that browsers block under `file://`.

---

## Deploy to DigitalOcean App Platform — step by step

### 1. Put the code on GitHub

```bash
cd /path/to/this/project
git init
git add .
git commit -m "Initial commit — Arletis Bueno prototype"

# Create an empty repo on github.com (don't init with README), then:
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/arletis-bueno.git
git push -u origin main
```

### 2. Tell DigitalOcean about it

1. Log into <https://cloud.digitalocean.com/apps>
2. Click **Create App** → **GitHub** → authorize DO if you haven't already
3. Pick the `arletis-bueno` repo, branch `main`
4. DO will auto-detect it as a **Static Site**. Confirm these settings:
   - **Build Command:** *(leave empty)*
   - **Output Directory:** `/`
   - **HTTP Routes:** `/` → catch-all `index.html`
5. Resource size: **Starter ($0/mo)** is fine — 1 GB bandwidth, plenty for a small business
6. Click **Create Resource** → **Launch App**

First deploy takes ~2 minutes. DO gives you a free `*.ondigitalocean.app` URL immediately.

### 3. Wire up your custom domain (`arletisbueno.com`)

1. In the DO app → **Settings** → **Domains** → **Add Domain**
2. Enter `arletisbueno.com` (mark as PRIMARY) and `www.arletisbueno.com` (mark as ALIAS)
3. DO will show you DNS records to add. Log into your domain registrar (whoever you bought the domain from) and add:
   - An **`A` record** pointing the apex (`@`) to the IP DO shows
   - A **`CNAME` record** pointing `www` to `arletisbueno.com`
4. SSL certificate is provisioned automatically once DNS resolves (~5–30 min after you update DNS)

### 4. Future updates

Just push to GitHub:

```bash
git add .
git commit -m "Update plan prices"
git push
```

DO auto-redeploys every push to `main`. Takes ~60 seconds.

---

## Cost expectation

- **Hosting:** $0/mo on Starter (no credit-card-charge for tiny traffic; DO's free static-site tier covers 1 GB outbound/month — way more than this site will use)
- **Domain:** ~$15/year, depends on registrar
- **TLS / CDN:** free, bundled with App Platform

If traffic blows up past 1 GB/mo, the next tier is **Basic at $3/mo** — and that's still cheap.

---

## Production hardening (do these before going fully public)

These aren't blocking client review, but flag them when going live for real users:

1. **Wire up the contact form** — currently simulates success. Drop in [Formspree](https://formspree.io/) (free 50 submissions/mo) by changing one `fetch()` URL in `page-others.jsx`. I can do this in 10 min when you're ready.
2. **Replace placeholder content** — the credentials/years and pricing on Planes are best-guess fillers. Confirm with Arletis and edit `content.js`.
3. **Add real SEO meta tags** — title, description and Open Graph image (for WhatsApp/social shares). About 5 minutes of work.
4. **(Optional) Pre-compile JSX** — currently Babel transpiles in the browser on every load (~1–2 s extra on slow connections). Migrating to Astro or Next.js makes this instant. Not urgent unless the site sees real volume.

---

## Brand assets

- Primary: `#D2DE32` (chartreuse)
- Secondary: `#A2C579` (sage)
- Fonts: **Lovan** (display) + **NT Marley** (body) — currently substituted with Newsreader + Manrope on the web. License Lovan / NT Marley as web fonts when you want pixel fidelity to brand.
