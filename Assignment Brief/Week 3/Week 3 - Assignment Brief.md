# Week 3: GitHub Actions and CI/CD Automation
**CheckPoint 3 - Due: End of Week 3 (4% of final grade)**

## 🎯 Learning Objectives
- Implement Continuous Integration workflows
- Automate testing and deployment processes
- Use GitHub Actions marketplace
- Implement security scanning and code quality checks

## 📋 Assignment Requirements

### Part 1: Basic CI Pipeline (35 marks)
Create `.github/workflows/ci.yml` with:

```yaml
name: CI Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
```

**Required Jobs:**
1. **Linting Job**
   - Set up Node.js environment
   - Install dependencies
   - Run ESLint
   - Run Prettier check

2. **Testing Job**
   - Run unit tests
   - Generate coverage report
   - Upload coverage to Codecov
   - Fail if coverage < 80%

3. **Build Job**
   - Build application
   - Upload artifacts
   - Cache dependencies

### Part 2: Advanced Workflows (35 marks)
1. **Scheduled Workflow**
   - Create daily dependency check
   - Run security audit
   - Create issue if vulnerabilities found

2. **Deployment Workflow**
   - Deploy to GitHub Pages on main branch push
   - Include environment variables
   - Add deployment status badge to README

3. **Custom Action**
   - Create composite action for reusable steps
   - Document action with README
   - Use in main workflow

### Part 3: Workflow Documentation (30 marks)
Create `WORKFLOWS.md` documenting:
- Purpose of each workflow
- Trigger conditions
- Job dependencies
- Secrets required
- Troubleshooting guide

## 📦 Deliverables
- [ ] Repository with 3+ workflow files
- [ ] Screenshot of successful workflow runs
- [ ] Actions tab showing green checkmarks
- [ ] README with status badges
- [ ] Workflow documentation file

## 📊 Grading Rubric
| Component | Weight | Criteria |
|-----------|--------|----------|
| CI Pipeline | 35% | All jobs functioning |
| Advanced Workflows | 35% | Scheduled and deployment working |
| Documentation | 20% | Clear, comprehensive |
| Best Practices | 10% | DRY principle, security |
