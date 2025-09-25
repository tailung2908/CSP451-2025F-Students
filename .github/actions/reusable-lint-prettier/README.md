# Reusable Lint & Prettier Action

This composite GitHub Action runs:

- `npm install`
- `ESLint` on `.js`, `.jsx`, `.ts`, `.tsx` files
- `Prettier` check

## Usage in a workflow

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: ./.github/actions/reusable-lint-prettier
