# Week 2: Git Branching and Collaboration

## Core Concepts

### Branching Strategy
- **Main/Master Branch**: Production-ready code
- **Feature Branches**: Individual features or fixes
- **Naming Convention**: `feature/description` or `bugfix/issue-number`

## Branch Operations
```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# List all branches
git branch -a

# Switch between branches
git checkout main
git checkout feature/new-feature

# Merge branch into main
git checkout main
git merge feature/new-feature

# Delete branch after merging
git branch -d feature/new-feature

# Force delete unmerged branch
git branch -D feature/new-feature
```

## Pull Request Best Practices
1. Create descriptive PR titles
2. Write comprehensive descriptions
3. Link related issues
4. Request appropriate reviewers
5. Address feedback promptly
6. Squash commits if necessary

## Merge Conflict Resolution
```bash
# When conflicts occur:
1. Open conflicted files
2. Look for conflict markers:
   <<<<<<< HEAD
   Your changes
   =======
   Their changes
   >>>>>>> branch-name
3. Manually resolve conflicts
4. Remove conflict markers
5. Stage and commit resolved files
```
