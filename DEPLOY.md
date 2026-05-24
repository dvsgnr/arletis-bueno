# Deploy in 5 minutes — quick reference

## A. Push to GitHub

```bash
git init
git add .
git commit -m "Initial prototype"
git branch -M main
git remote add origin git@github.com:YOUR-USER/arletis-bueno.git
git push -u origin main
```

## B. Create the app on DigitalOcean

1. <https://cloud.digitalocean.com/apps> → **Create App**
2. Source: **GitHub** → pick your repo → branch `main`
3. Type: **Static Site** (auto-detected)
4. Build command: *empty*
5. Output directory: `/`
6. Plan: **Starter ($0)**
7. Launch — first deploy in ~2 minutes

## C. Custom domain

App → Settings → Domains → Add `arletisbueno.com`. Copy the DNS records DO gives you into your domain registrar.

## D. Update workflow

```bash
git add . && git commit -m "..." && git push
```

Auto-redeploys in ~60 s.

---

See `README.md` for full detail.
