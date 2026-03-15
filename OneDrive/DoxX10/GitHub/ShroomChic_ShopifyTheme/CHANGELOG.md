# Changelog

## Unreleased

- Added minified assets: `assets/shroom-chic.min.css`, `assets/shroom-chic.min.js` to improve load performance.
- Preload minified CSS and load minified JS in `layout/theme.liquid` and `layout/password.liquid` with fallback.
- Replaced several `<img>` usages with `<picture>` sources and added `loading="lazy" decoding="async"` where appropriate to improve image performance.
- Added `scripts/optimize-images.ps1` to generate WebP and responsive variants (ImageMagick required).
- Added HTML linting setup: `package.json`, `.htmlhintrc`, and `LINTING.md`; ran `htmlhint` and adjusted rules to avoid Liquid false positives.
- Accessibility fixes: ensured `alt` attributes and added lazy-loading for non-LCP images.

Files changed: many templates, `assets/` additions, lint configs, and scripts. See repository diff for full list.
