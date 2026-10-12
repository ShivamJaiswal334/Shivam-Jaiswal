# Deployment Guide — Hosting Your Portfolio for Free

This site is a **static website** (just HTML, CSS, JS, and some images). That's the easiest
and cheapest kind of site to host — every option below is **100% free** for a personal
portfolio, with no credit card required.

> **TL;DR recommendation:** Use **Netlify drag-and-drop** if you want the fastest, no-git
> route (literally drag a folder onto a web page). Use **Cloudflare Pages** or **Vercel** if
> you want automatic redeploys whenever you push to GitHub.

---

## What you're deploying

Upload the **entire `Profile` folder**, keeping this structure intact:

```
Profile/
├── index.html          ← entry point (must stay named index.html)
├── styles.css
├── script.js
├── assets/
│   ├── avatar.svg
│   ├── favicon.svg
│   ├── profile.jpg      ← (optional) your photo
│   ├── dashboard.png    ← (optional) case-study screenshot
│   └── Shivam-Jaiswal-Resume.pdf
├── README.md
└── DEPLOYMENT.md
```

The host serves `index.html` automatically as the home page. No build step is needed.

---

## Option 1 — Netlify (easiest, no git required) ⭐

**Best for:** getting online in under 2 minutes with zero setup.

### Drag-and-drop method
1. Go to **https://app.netlify.com/drop**.
2. Sign up (free) with email, GitHub, or Google.
3. Drag your whole **`Profile`** folder onto the drop zone.
4. Done. Netlify gives you a live URL like `https://random-name-123.netlify.app`.
5. Rename it: **Site settings → Change site name** → e.g. `shivam-jaiswal` → your URL becomes
   `https://shivam-jaiswal.netlify.app`.

### To update later
Drag the folder again, or connect your GitHub repo (Netlify → Add new site → Import from Git)
so it redeploys automatically on every push.

**Free tier:** 100 GB bandwidth/month, HTTPS included, custom domain supported. Plenty for a portfolio.

---

## Option 2 — Cloudflare Pages (fastest network, generous free tier) ⭐

**Best for:** best performance worldwide and unlimited bandwidth on the free plan.

1. Push your site to a GitHub repo first (see *Option 4* for git commands), **or** use their
   direct upload option.
2. Go to **https://pages.cloudflare.com** and sign up (free).
3. **Create a project → Connect to Git → pick your repo.**
4. Build settings: leave **Build command empty** and **Build output directory** as `/` (root),
   since there's no build step.
5. Click **Save and Deploy**. You get `https://your-project.pages.dev`.

**Free tier:** unlimited bandwidth, unlimited sites, HTTPS, custom domains. Excellent choice.

---

## Option 3 — Vercel (great developer experience)

**Best for:** if you later turn this into a React/Next.js site.

1. Push your site to GitHub (see *Option 4*).
2. Go to **https://vercel.com** and sign up with GitHub (free).
3. **Add New → Project → Import** your repo.
4. Framework preset: **Other**. Leave build settings default (no build command needed).
5. **Deploy.** You get `https://your-project.vercel.app`.

**Free tier:** 100 GB bandwidth/month, HTTPS, custom domains, auto-deploy on push.

---

## Option 4 — GitHub Pages (if you prefer staying on GitHub)

**Best for:** keeping everything in one place on GitHub.

1. Create a repo. For a clean URL `https://<username>.github.io`, name it exactly
   `<username>.github.io`. Otherwise any name works (URL becomes `.github.io/<repo>/`).
2. From the `Profile` folder:
   ```powershell
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick `main` + `/ (root)`, Save.
4. Live in ~1 minute at the URL shown on that screen.

**Free tier:** 100 GB bandwidth/month (soft limit), HTTPS, custom domains.

---

## Comparison at a glance

| Host | No-git option | Auto-deploy from git | Bandwidth (free) | Custom domain | Best for |
|------|:---:|:---:|---|:---:|---|
| **Netlify** | ✅ drag & drop | ✅ | 100 GB/mo | ✅ | Fastest start |
| **Cloudflare Pages** | ✅ direct upload | ✅ | Unlimited | ✅ | Best performance |
| **Vercel** | ❌ | ✅ | 100 GB/mo | ✅ | Future React/Next |
| **GitHub Pages** | ❌ | ✅ | ~100 GB/mo | ✅ | Staying on GitHub |

All four give you free HTTPS (the padlock) automatically.

---

## Using a custom domain (optional, small cost for the domain only)

Hosting stays free, but a domain name like `shivamjaiswal.com` costs ~$8–12/year from a
registrar (Namecheap, Cloudflare Registrar, Google Domains, GoDaddy).

General steps (same idea on every host):
1. Buy the domain from a registrar.
2. In your host's dashboard, open **Domain / Custom domain settings** and add your domain.
3. The host shows you DNS records (usually a `CNAME` or `A` record). Copy them into your
   registrar's DNS settings.
4. Wait for DNS to propagate (minutes to a few hours). HTTPS is issued automatically.

Tip: **Cloudflare Registrar** sells domains at cost (no markup) and pairs naturally with
Cloudflare Pages.

---

## Things to consider before you publish

- **Your photo & résumé are public.** Anything in `assets/` is downloadable by anyone. The
  `Shivam-Jaiswal-Resume.pdf` and any `profile.jpg` will be visible. That's usually fine for a
  portfolio, but don't put private info in that folder.
- **Phone number / email exposure.** Your contact details are on the page and visible to
  scrapers. If you'd rather reduce spam, consider removing the phone number and keeping only
  email + LinkedIn, or use a contact form service (e.g. Formspree free tier).
- **File names.** The résumé is already named cleanly (`Shivam-Jaiswal-Resume.pdf`, no spaces),
  which is safest across hosts. Keep new files space-free and lowercase where possible.
- **Keep `index.html` at the root.** Hosts look for it there as the home page.
- **HTTPS is automatic** on all four hosts — no setup needed.
- **Updating content:** edit the files, then re-upload (Netlify drop) or `git push`
  (the others) and the site refreshes automatically.

---

## Recommended path for you

1. **Fill in the `[ADD ...]` placeholders** in the Signature Project and Experience sections
   with real numbers (see `EDITING-GUIDE.md`).
2. **Add your photo** as `assets/profile.jpg` (see `assets/README.md`).
3. **Deploy with Netlify drag-and-drop** to go live in 2 minutes, then rename the site to
   `shivam-jaiswal.netlify.app`.
4. Later, if you want auto-updates, push to GitHub and connect **Cloudflare Pages** or
   **Vercel**.
