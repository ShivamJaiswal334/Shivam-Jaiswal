# Shivam Jaiswal — Portfolio

Personal portfolio for **Shivam Jaiswal**, a Data Governance & AI Readiness specialist (7+ years)
who makes enterprise data trustworthy, discoverable, and ready for AI/ML and analytics.

A fast, responsive, single-page website. Pure HTML, CSS, and JavaScript — no build step, no
dependencies, no framework. Includes a light/dark theme, mobile navigation, and scroll animations.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and all content |
| `styles.css` | Styling, responsive layout, light/dark theme |
| `script.js` | Theme toggle, typing effect, mobile menu, scroll reveal, image fallback |
| `assets/` | Avatar, favicon, your profile photo, dashboard screenshot, and the résumé PDF |
| `EDITING-GUIDE.md` | **How to add / remove / update every part of the site** |
| `DEPLOYMENT.md` | How to host the site online for free (Netlify, Cloudflare, Vercel, GitHub) |
| `assets/README.md` | How to add your own profile photo |

## Editing the site

See **[`EDITING-GUIDE.md`](EDITING-GUIDE.md)** for a full, beginner-friendly walkthrough of
every section (navigation, hero, about, experience, skills, highlights, education, contact)
and exactly how to add, remove, and update content — plus how to change the photo, résumé,
typing phrases, colours, and how to add a brand-new section.

## Run locally

Just open `index.html` in a browser. That's it.

Or serve it with a tiny local server (optional):

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages (free)

1. **Create a repository** on GitHub.
   - For a personal site at `https://<username>.github.io`, name the repo exactly `<username>.github.io`.
   - Otherwise name it anything (e.g. `portfolio`); the site will live at `https://<username>.github.io/portfolio/`.

2. **Push these files** to the repo (from this folder):

   ```powershell
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. **Enable Pages**: on GitHub, go to **Settings → Pages → Build and deployment**, set **Source** to `Deploy from a branch`, pick branch `main` and folder `/ (root)`, then **Save**.

4. Wait ~1 minute. Your site goes live at the URL shown on that Pages settings screen.

## Custom domain (optional)

Buy a domain, then in **Settings → Pages → Custom domain** enter it and follow the DNS instructions. Add a `CNAME` file (GitHub creates it for you) containing your domain.

## Updating content

Edit `index.html` for text, `styles.css` for look and feel. The step-by-step instructions for
every section are in **[`EDITING-GUIDE.md`](EDITING-GUIDE.md)**. After editing, commit and push
again (or re-drag the folder on Netlify) and the site redeploys automatically.
