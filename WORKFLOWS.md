# Workflow Documentation

## 1. CI Pipeline (`.github/workflows/ci.yml`)
**Purpose:** Lint code, run Prettier checks, and run unit tests with coverage.  
**Triggers:** 
- Push to `main` or `develop` branches  
- Pull requests to `main`  
**Jobs and dependencies:** 
- `lint-and-test` runs all linting, formatting, and tests  
**Secrets required:** 
- `CODECOV_TOKEN` for uploading coverage reports  
**Troubleshooting:** 
- If Prettier fails, run `npx prettier --write .` locally  
- If tests fail, check `test/test.js` and ensure coverage >= 80%

---

## 2. Daily Dependency & Security Check (`.github/workflows/schedule.yml`)
**Purpose:** Automatically check for npm dependency vulnerabilities.  
**Triggers:** 
- Scheduled daily at midnight UTC  
- Manual trigger via workflow_dispatch  
**Jobs and dependencies:** 
- `audit` job runs npm audit and creates an issue if vulnerabilities are found  
**Secrets required:** 
- None (issues are created using the GitHub token automatically)  
**Troubleshooting:** 
- Ensure `npm install` runs without errors  
- Check `audit.json` for vulnerabilities  

---

## 3. Deployment Workflow (`.github/workflows/deploy.yml`)
**Purpose:** Deploy project to GitHub Pages.  
**Triggers:** 
- Push to `main` branch  
**Jobs and dependencies:** 
- `deploy` job builds the project and publishes to GitHub Pages  
**Secrets required:** 
- `GH_PAT` (GitHub personal access token) if deploying to private repo  
**Troubleshooting:** 
- Ensure the `build` script exists in `package.json`  
- Check the GitHub Pages settings for the correct branch/folder  

---

## 4. Reusable Composite Actions (`.github/actions/`)
**Purpose:** Run reusable steps like linting, formatting, Node setup, or dependency installation.  
**Usage:** Include in any workflow by `uses: ./.github/actions/<action-folder>`  
**Secrets required:** None  
**Troubleshooting:** 
- Make sure `action.yml` exists and includes the `shell` for each `run` step  
- Ensure paths to actions are correct relative to the workflow
