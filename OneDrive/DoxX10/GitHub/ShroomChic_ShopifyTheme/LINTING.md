Linting guide
------------

Quick steps to lint Liquid/HTML in this theme locally.

1) Install dev dependencies:

```bash
npm install
```

2) Run the HTML linter across Liquid templates:

```bash
npm run lint
```

Notes:
- This project includes `.htmlhintrc` to check HTML issues inside `.liquid` files.
- For Liquid-specific linting, consider adding a Liquid linter (e.g., `liquid-lint` or Shopify's Theme Check) and a CI workflow.
