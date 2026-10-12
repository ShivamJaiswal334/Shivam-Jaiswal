# Editing Guide — How to Change Your Portfolio

This guide explains **every section (module)** of the site and shows you exactly how to
**add, remove, and update** content. No coding experience needed — you copy a block,
change the words between the tags, and save.

## How the files fit together

| File | What it controls | When you edit it |
|------|------------------|------------------|
| `index.html` | All the **content** — text, sections, links | Most of your edits happen here |
| `styles.css` | The **look** — colours, spacing, fonts | Only when changing design |
| `script.js` | The **behaviour** — typing effect, theme toggle, menu | Rarely; only for interactive bits |
| `assets/` | Images and your résumé PDF | Add your photo / update résumé here |

### The golden rules of editing HTML
1. Tags come in **pairs**: an opener like `<p>` and a closer like `</p>`. Your text goes
   **between** them. Always keep both.
2. To **add** an item, copy an existing block (from one opener to its matching closer),
   paste it right below, and change the text.
3. To **remove** an item, delete the whole block from its opener to its closer.
4. Special characters: write `&amp;` for `&`. Save the file, then refresh the browser.
5. Make a copy of `index.html` before big changes, so you can undo by restoring it.

---

## 1. Page title & search/social preview (`<head>`)

Near the top of `index.html`, inside `<head>`. Controls the browser tab title and how the
link looks when shared on LinkedIn/WhatsApp.

**Update:** change the text inside these tags.
```html
<title>Shivam Jaiswal — Data Governance & AI Readiness</title>
<meta name="description" content="...your one-line summary..." />
<meta property="og:title" content="Shivam Jaiswal — Data Governance & AI Readiness" />
<meta property="og:description" content="...short pitch for social sharing..." />
```

---

## 2. Navigation menu (top bar)

Find the block starting with `<nav class="nav__links" id="navLinks">`.

Each menu item is one line:
```html
<a href="#about">About</a>
```
- **Update label:** change the word `About`.
- The `href="#about"` must match a section's `id="about"` further down — that's what makes
  the link jump to the right place.

**Add a new menu item** (example: a "Projects" link):
```html
<a href="#projects">Projects</a>
```
Only add this if you also create a section with `id="projects"` (see section 11).

**Remove a menu item:** delete its whole `<a ...>...</a>` line.

> The brand badge `SJ` is the little square at top-left: `<a href="#hero" class="nav__brand">SJ</a>`.
> Change `SJ` to your initials.

---

## 3. Hero (the big intro at the top)

Inside `<section class="hero" id="hero">`.

**Your name:**
```html
<h1 class="hero__title">Shivam Jaiswal</h1>
```

**The small line above your name:**
```html
<p class="hero__eyebrow">Data Governance • AI Readiness • Metadata &amp; Analytics</p>
```

**The intro paragraph:** edit the text inside `<p class="hero__pitch"> ... </p>`.

**The animated typing phrases** are NOT in the HTML — they live in `script.js`. See section 10.

### Buttons under the intro
```html
<a class="btn btn--primary" href="#contact">Get in touch</a>
<a class="btn btn--ghost" href="assets/Shivam-Jaiswal-Resume.pdf" download>↓ Download résumé</a>
```
- `btn--primary` = filled blue button. `btn--ghost` = outlined button.
- The résumé button points to the file in `assets/`. If you rename the PDF, update the
  `href` here to match exactly (see section 8).

### Contact links in the hero
```html
<a href="mailto:shivam.jaiswal334@gmail.com">✉ shivam.jaiswal334@gmail.com</a>
<a href="https://www.linkedin.com/in/shivam-j-78a992192/" target="_blank" rel="noopener">in LinkedIn</a>
<a href="tel:+918851780751">☎ +91 88517 80751</a>
```
- **Email:** keep `mailto:` then the address.
- **Phone:** keep `tel:` then the number. **To remove the phone number**, delete this whole line.
- **LinkedIn:** replace the URL with your own profile link.

### "Open to work" badge
```html
<span class="photo-badge">Open to work</span>
```
- **Change text:** e.g. `Available from Jan`.
- **Remove it:** delete the whole line.

---

## 4. Profile photo

Inside the hero, the image tag:
```html
<img id="profileImg" class="profile-img"
     src="assets/profile.jpg"
     data-fallback="assets/avatar.svg"
     alt="Shivam Jaiswal" ... />
```

**To use your own photo:**
1. Put your picture in the `assets/` folder.
2. Name it `profile.jpg`. (If it's a PNG, name it `profile.png` and change
   `src="assets/profile.jpg"` to `src="assets/profile.png"`.)
3. Refresh. Done.

If the photo is missing, the site automatically shows the illustrated avatar
(`assets/avatar.svg`) — that automatic swap is handled in `script.js`. You don't need to
touch anything for the fallback to work.

(Also documented in `assets/README.md`.)

---

## 5. About section + the stat tiles

Inside `<section ... id="about">`.

- **Paragraphs:** edit the text inside the two `<p> ... </p>` blocks.
- **Bold a phrase:** wrap it in `<strong> ... </strong>`.

**Stat tiles** (the four number boxes):
```html
<div class="stat"><span class="stat__num">7+</span><span class="stat__label">Years in data</span></div>
```
- **Update:** change `7+` (the big number) and `Years in data` (the label).
- **Add a tile:** copy one `<div class="stat">...</div>` line, paste below, edit.
- **Remove a tile:** delete one whole `<div class="stat">...</div>` line.
- They sit in a 4-across grid; 2 or 4 tiles look most balanced.

---

## 6. Experience (job timeline)

Inside `<section ... id="experience">`, within `<div class="timeline">`.

Each job is **one `<article class="tl-item">` block**:
```html
<article class="tl-item">
  <div class="tl-head">
    <h3>Job Title Here</h3>
    <span class="tl-company">Company · Location</span>
    <span class="tl-date">Start – End</span>
  </div>
  <ul>
    <li>First achievement bullet.</li>
    <li>Second achievement — use <strong>numbers</strong> where you can.</li>
  </ul>
</article>
```

- **Update a job:** change the title, company, date, and `<li>` bullets.
- **Add a bullet:** add a new `<li> ... </li>` line inside the `<ul>`.
- **Remove a bullet:** delete one `<li> ... </li>` line.
- **Add a whole new job:** copy an entire `<article class="tl-item"> ... </article>` block
  and paste it where it should appear (jobs are listed newest first).
- **Remove a job:** delete the entire `<article ...> ... </article>` block.

---

## 7. Skills

Inside `<section ... id="skills">`, within `<div class="skills">`.

Each category is **one `<div class="skill-group">` block**:
```html
<div class="skill-group">
  <h3>Category Name</h3>
  <ul class="chips">
    <li>Skill One</li><li>Skill Two</li><li>Skill Three</li>
  </ul>
</div>
```

- **Update a category title:** change the text in `<h3>`.
- **Add a skill chip:** add `<li>New Skill</li>` inside the `<ul class="chips">`.
- **Remove a skill chip:** delete its `<li> ... </li>`.
- **Add a whole category:** copy a `<div class="skill-group"> ... </div>` block and edit it.
- **Remove a category:** delete the whole block.

---

## 8. Résumé download (the PDF)

The file lives in `assets/`. The button in the hero links to it (section 3).

- **Replace the résumé:** put your new PDF in `assets/` with the **same filename**, or use a
  new name and update the button's `href` to match.
- The file is already named cleanly as `Shivam-Jaiswal-Resume.pdf` (no spaces). If you rename
  it again, change the button's `href` to match:
  ```html
  <a class="btn btn--ghost" href="assets/Shivam-Jaiswal-Resume.pdf" download>↓ Download résumé</a>
  ```
- **Remove the download feature:** delete the PDF from `assets/` **and** delete the
  download button line in the hero, so there's no broken link.

> The filename in the `href` must match the real filename **exactly**, including spaces,
> capitals, and the `.pdf` extension.

---

## 8b. Recruiter-impact modules (fill in the placeholders!)

Several new sections were added to make the profile stand out. They contain **placeholders in
square brackets like `[ADD #]`** — replace these with your real numbers to maximise impact. The
site works with the placeholders in place, but filling them is what moves you to the shortlist.

### Impact-at-a-glance strip (in the hero)
```html
<ul class="hero__impact" aria-label="Impact at a glance">
  <li><strong>99.7%</strong> governance coverage</li>
  ...
</ul>
```
Edit the `<strong>` number and the label text. Add/remove `<li>` items as needed.

### Hero tagline (metric line under your name)
```html
<p class="hero__tagline">Driving <strong>99.7% governance coverage</strong> across enterprise data at Wood Mackenzie</p>
```
Keep one strong, specific number here — it's the first proof a recruiter sees.

### Signature Project (case study) — section `id="casestudy"`
This is your centerpiece. It's already filled with **real, verifiable numbers** from the
governance dashboard (95%+ coverage, 5,600+ objects, 118 schemas, 107 fully tagged). If those
figures change over time, update them in the `case__block` result list and the `case__scale`
row. Keep every number here consistent with the hero, impact strip, and About stats so nothing
contradicts.

#### Signature Project visual — screenshot ON vs OFF (important privacy note)

By default this section shows a **privacy-safe metrics snapshot** (the dark `metric-card` tile) —
a styled summary built from aggregate numbers only (coverage %, object/schema counts). It shows
**no** database names, schema names, or any internal data, so it's safe to publish.

> ⚠️ **Do NOT publish a raw screenshot of an internal company dashboard** if it shows real
> database/schema names, domain values, or any confidential data (e.g. the Snowflake estate
> view). That can expose employer data. The safe snapshot is the recommended default. Keep a
> real screenshot for live demos / screen-shares in interviews instead.

**To keep it OFF (default, recommended):** do nothing. The `metric-card` snapshot stays.

**To change the snapshot numbers:** edit the numbers inside the `<div class="metric-card">` block
in `index.html` (the big coverage %, the four grid tiles, and the bar `width` percentage).

**To turn a real screenshot ON** (only if it contains no confidential data — e.g. a demo with
dummy data):
1. Save the image as `assets/dashboard.png`.
2. In the `case__media` block, **delete** the whole `<div class="metric-card"> ... </div>` block.
3. Add an image tag in its place:
   ```html
   <img class="case__img" src="assets/dashboard.png" alt="Governance dashboard" loading="lazy" />
   ```
4. Update the `<figcaption>` text if needed.

**To hide the visual entirely:** delete the whole `<figure class="case__media"> ... </figure>`
block — the text side will simply span the full width.

**Add a proof link** (GitHub / write-up): in `case__links`, uncomment the `<a class="btn ...>`
line and set its `href`.

### Experience scale numbers
The senior role now states `5,600+ data objects`, `118 schemas`, `95%+` coverage, and
`107 of 118 schemas fully tagged` — all from your dashboard. Update these if the real figures
change, keeping them consistent with the Signature Project section.

### Currently exploring strip (in Skills) — shows growth mindset
```html
<div class="exploring">
  <span class="exploring__label">⚡ Currently exploring</span>
  <ul class="exploring__items"><li>...</li></ul>
</div>
```
Edit, add, or remove `<li>` items. Remove the whole `<div class="exploring">` block to hide it.

### Testimonials — section `id="testimonials"`
Replace the `[ADD a short quote...]`, `[Name]`, `[Title]`, `[Company]` placeholders with a real
quote. Each quote is a `<blockquote class="quote">` block — copy for more, delete for fewer.
**No quote yet?** Hide the whole section by wrapping `<section ... id="testimonials"> ... </section>`
in `<!--` and `-->` until you collect one.

### Favicon
The browser-tab icon is `assets/favicon.svg` (an "SJ" monogram). To change the initials, open
that file and edit the `>SJ<` text.

---

## 9. Highlights, Education, Contact

**Highlights** — inside `<section ... id="highlights">`. Each card:
```html
<article class="card">
  <h3>Project / Highlight Title</h3>
  <p>One or two sentences describing it and the impact.</p>
  <ul class="card__tags"><li>Tag</li><li>Tag</li></ul>
</article>
```
Add/remove a card by copying or deleting a whole `<article class="card"> ... </article>` block.

**Education & Certification** — inside `<section ... id="education">`. Each entry:
```html
<div class="edu__item">
  <h3>Degree / Certificate</h3>
  <span class="edu__meta">Institution · Location</span>
  <span class="edu__meta">Date</span>
</div>
```
Add a `<span class="edu__meta">` line for an extra detail; copy the whole `edu__item` block
for a new entry.

#### Optional "Verify credential" link
Each certification can show a **Verify** link so recruiters can confirm it — but it's
**optional**. It only appears if you add it. In the certification's `edu__item` block there's
a commented-out link:
```html
<!--
<a class="verify-link" href="PASTE_CERTIFICATE_URL_HERE" target="_blank" rel="noopener">
  Verify credential ↗
</a>
-->
```
- **To show it:** paste your certificate URL in place of `PASTE_CERTIFICATE_URL_HERE`, then
  delete the two comment markers `<!--` and `-->` around the link so it becomes active.
  For LinkedIn Learning, open the certificate and copy its public share URL.
- **To hide it again:** wrap the `<a ...>...</a>` back in `<!--` and `-->`, or delete it.
- **To add a verify link to any other entry** (e.g. your degree): copy the active `<a class="verify-link" ...>` line into that entry's `edu__item` block and set its `href`.

If you leave it commented out, nothing shows and the layout stays clean — exactly as intended.

**Contact** — inside `<section ... id="contact">`. Edit the paragraph in
`<p class="contact__lead">` and the three buttons (same format as the hero links in section 3).

**Footer** — at the very bottom. The year updates automatically. Change the right-hand text in:
```html
<span>Built as a static site · Hosted on GitHub Pages</span>
```

---

## 10. The animated typing text (`script.js`)

The rotating phrases in the hero ("AI-ready assets", "clean, governed metadata"…) are a
**list in `script.js`**, not in the HTML. Open `script.js` and find:
```js
const phrases = [
  'something teams trust.',
  'AI-ready assets.',
  'clean, governed metadata.',
  'decisions, not guesswork.',
  'a competitive advantage.'
];
```
- **Edit a phrase:** change the words inside the quotes `'...'`.
- **Add a phrase:** add a new `'your phrase.',` line (keep the comma).
- **Remove a phrase:** delete one line.
- Keep each phrase in quotes and lines separated by commas.

The static lead-in text "I turn data into" is in the HTML:
`<span class="hero__static">I turn data into</span>`.

---

## 11. (Optional) Adding a brand-new section — e.g. "Projects"

Three steps:

**Step 1 — add a nav link** (section 2):
```html
<a href="#projects">Projects</a>
```

**Step 2 — add the section** in `index.html` (paste between two existing `<section>` blocks
inside `<main>`). Alternate `section--alt` for the striped background effect:
```html
<section class="section section--alt" id="projects">
  <div class="container">
    <h2 class="section__title"><span class="section__num">07</span> Projects</h2>
    <div class="cards">
      <article class="card">
        <h3>Project name</h3>
        <p>What it does and the impact.</p>
        <ul class="card__tags"><li>Tool</li><li>Tool</li></ul>
      </article>
    </div>
  </div>
</section>
```
That's it — the `cards` grid styling is reused automatically, so it looks consistent with
the Highlights section.

**Step 3 — renumber** the `section__num` labels (01, 02, …) if you want them in order.

---

## 12. Quick colour change (optional)

Open `styles.css`, very top, find `:root { ... }`. The main accent colour is:
```css
--accent: #2563eb;
```
Change the hex code (e.g. `#0ea5e9` for a brighter blue, `#059669` for green) and the whole
site's accent updates. The matching dark-mode colours are under `html[data-theme="dark"]`.

---

## 13. After editing — see and publish your changes

1. **See it:** double-click `index.html` to open it in your browser (or refresh if already open).
2. **Publish it:** follow `DEPLOYMENT.md`. If you used Netlify drag-and-drop, drag the folder
   again. If you used GitHub / Cloudflare / Vercel, run `git add . && git commit -m "Update" && git push`
   and the site redeploys automatically.

If something looks broken after an edit, you probably deleted half of a tag pair — check that
every `<tag>` still has its matching `</tag>`.
