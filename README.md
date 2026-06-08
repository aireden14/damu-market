# ITAKA General Trading Co. — Website

Static, single-page marketing site for **ITAKA General Trading Co. L.L.C** — critical energy minerals (Fluorspar, Rare Earth Elements) from Mongolia & Kazakhstan.

No build step, no frameworks, no dependencies. Just HTML, CSS and a little vanilla JavaScript — ready for GitHub Pages.

## v4 GitHub-only page

The `itaka-v4/` folder is the active GitHub Pages copy. The root `CNAME` file is intentionally not used, so the site stays available through the default GitHub Pages URL:

```text
https://aireden14.github.io/damu-market/itaka-v4/
```

## Files

```
index.html        — all page content
styles.css        — liquid-glass styling
script.js         — nav blur, mobile menu, scroll reveal
.nojekyll         — tells GitHub Pages to serve files as-is
assets/
  logo.svg        — ITAKA logo (inherits color via currentColor)
  favicon.svg     — browser tab icon
  img/            — photographs
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `itaka-website`).
2. Upload **all** files in this folder, keeping the structure (drag-and-drop the contents, not the parent folder).
3. In the repo go to **Settings → Pages**.
4. Under **Build and deployment → Source** choose **Deploy from a branch**.
5. Branch: `main`, folder: `/ (root)` → **Save**.
6. Wait ~1 minute. Your site is live at `https://<username>.github.io/itaka-website/`.

### Custom domain (optional, e.g. itaka.com.kz)
1. Settings → Pages → **Custom domain** → enter `itaka.com.kz` → Save.
2. At your domain registrar add a `CNAME` record pointing `www` to `<username>.github.io`
   (and the four GitHub `A` records for the apex domain).
3. Enable **Enforce HTTPS** once the certificate is issued.

## Editing content
All text is plain English in `index.html`. Search for the section you want and edit the text directly. Colours live at the top of `styles.css` under `:root`. Replace any photo by dropping a new file into `assets/img/` and updating the matching `src` in `index.html`.

## Contact details on the site
- Company: ITAKA General Trading Co. L.L.C
- CEO: Yermek Sadykov
- Email: yermek@itaka.com.kz · info@itaka.com.kz
- Phone: +7 701 543 4321 · WhatsApp: +39 380 693 0113
- Office: SS BC2, Jabal Ali Industrial First, Dubai, UAE
