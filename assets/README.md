# Assets folder

This folder holds the images and files used by the portfolio.

## Add your own profile photo

The site looks for a photo at `assets/profile.jpg`. To use your own picture:

1. Save your photo in this `assets/` folder.
2. Name it exactly **`profile.jpg`** (JPG) — or if it's a PNG, name it `profile.png`
   and update the `src` in `index.html` from `assets/profile.jpg` to `assets/profile.png`.
3. Refresh the page. Your photo appears automatically.

If no `profile.jpg` is found, the site falls back to the illustrated avatar
(`avatar.svg`) — a person with glasses and a beard — so the page never looks broken.

### Photo tips for a recruiter-friendly look
- Use a **square** image (e.g. 600×600 px) so it fills the circular frame cleanly.
- A head-and-shoulders shot with a simple background works best.
- Keep the file reasonably small (under ~500 KB) so the page loads fast.

## Files

| File | Purpose |
|------|---------|
| `avatar.svg` | Default illustrated avatar (glasses + beard), used if no photo is present |
| `favicon.svg` | Browser-tab icon ("SJ" monogram); edit the `SJ` text to change initials |
| `profile.jpg` | **(you add this)** your real profile photo |
| `dashboard.png` | **(optional)** screenshot for the Signature Project — only if it contains NO confidential data; the default is a privacy-safe snapshot, see EDITING-GUIDE.md |
| `Shivam-Jaiswal-Resume.pdf` | Résumé served by the "Download résumé" button |
