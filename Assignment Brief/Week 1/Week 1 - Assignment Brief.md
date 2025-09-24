# Week 1: Introduction to GitHub and Version Control

**CheckPoint 1 - Due: End of Week 1 (4% of final grade)**

## 🎯 Learning Objectives

- Understand the fundamentals of version control systems
- Master basic Git commands and workflows
- Create and manage GitHub repositories effectively
- Write professional documentation using Markdown syntax

## 📋 Assignment Requirements

### Part 1: Version Control Understanding (20 marks)

Write a 500-word document explaining:

- How version control helps track changes in software development
- Three specific collaboration benefits with examples
- How Git's backup and recovery mechanisms work
- Difference between Git and GitHub

### Part 2: Git Repository Setup (30 marks)

1. **Create Local Repository**

   ```bash
   mkdir csp451-checkpoint1
   cd csp451-checkpoint1
   git init
   ```

2. **Initial Files Required**
   - `README.md` - Project documentation
   - `.gitignore` - Ignore file with at least 5 patterns
   - `index.html` - Basic HTML page
   - `style.css` - Basic styling
   - `script.js` - JavaScript file with console output

3. **Commit Requirements**
   - Minimum 5 meaningful commits
   - Each commit message must follow format: `type: description`
   - Types: `feat`, `fix`, `docs`, `style`, `refactor`

### Part 3: GitHub Repository (25 marks)

1. Create public repository named `CSP451-CheckPoint1-YourName`
2. Add comprehensive README with:
   - Project title and description
   - Installation instructions
   - Usage examples
   - Contributing guidelines
   - License information
3. Push local repository to GitHub
4. Configure repository settings (description, topics, website)

### Part 4: Branching Exercise (25 marks)

1. Create feature branch: `feature/add-about-page`
2. Add `about.html` file with personal information
3. Make at least 3 commits on feature branch
4. Create Pull Request with:
   - Descriptive title
   - Detailed description
   - Assign instructor as reviewer
5. Merge after approval and delete feature branch

## 📦 Deliverables

- [ ] GitHub repository link
- [ ] PDF export of README.md
- [ ] Screenshot of commit history (showing 5+ commits)
- [ ] Screenshot of successful PR merge
- [ ] Written document on version control (Part 1)

## 📊 Grading Rubric

| Component                | Weight | Criteria                            |
| ------------------------ | ------ | ----------------------------------- |
| Version Control Document | 20%    | Clarity, accuracy, examples         |
| Repository Structure     | 20%    | All required files present          |
| Commit Quality           | 20%    | Meaningful messages, atomic commits |
| README Quality           | 20%    | Comprehensive, well-formatted       |
| Branching/PR             | 20%    | Proper workflow followed            |

## ⏰ Submission Instructions

1. Submit via Blackboard by 11:59 PM on Friday
2. Include all screenshots in a single PDF
3. Ensure repository is public for grading
