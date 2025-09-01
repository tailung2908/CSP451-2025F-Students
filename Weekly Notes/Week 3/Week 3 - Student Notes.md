# Week 3: GitHub Actions and CI/CD

## GitHub Actions Components

### Workflow Structure
```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test
      - run: npm build
```

## Trigger Events
- `push`: On code push
- `pull_request`: On PR creation/update
- `schedule`: Cron-based scheduling
- `workflow_dispatch`: Manual trigger
- `release`: On release creation

## Practical Implementation
1. Create `.github/workflows` directory
2. Add workflow YAML files
3. Define jobs and steps
4. Use marketplace actions
5. Store secrets in repository settings
6. Monitor workflow runs in Actions tab
