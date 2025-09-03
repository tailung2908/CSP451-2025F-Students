# 🎯 CSP451 Content Release Guide for Instructors

## 📋 Current Status
- **Students Can See**: Week 1 only
- **Hidden Content**: Weeks 2-14 (preserved locally, not in git tracking)
- **Repository**: https://github.com/DC-Seneca/CSP451-2025F-Students

## 🚀 Weekly Release Process

### To Release Week X Content:

#### 1. Navigate to Repository
```bash
cd "/path/to/CSP451-2025F-Students"
```

#### 2. Add Week X Files to Git Tracking
```bash
git add "Assignment Brief/Week X/" "Weekly Notes/Week X/"
```

#### 3. Commit with Descriptive Message
```bash
git commit -m "📚 Release Week X: [Topic Name - e.g., Azure Virtual Networks]

✅ New Content Available:
- Assignment Brief: Week X requirements and deliverables  
- Student Notes: Essential concepts and preparation materials

🎯 This Week's Focus: [Brief description of week's topic]
🗓️  Due Date: [Assignment due date]"
```

#### 4. Push to GitHub
```bash
git push origin main
```

#### 5. Announce to Students
Send announcement via your LMS or course communication channel:
```
📢 Week X materials are now available!

Update your local repository:
git pull origin main

New this week: [brief description]
Assignment due: [date]
```

## 📅 Semester Release Schedule Example

| Week | Release Date | Topic | Command |
|------|-------------|--------|---------|
| 2 | Sept 8, 2025 | Advanced Git & Collaboration | `git add "Assignment Brief/Week 2/" "Weekly Notes/Week 2/"` |
| 3 | Sept 15, 2025 | Azure Fundamentals | `git add "Assignment Brief/Week 3/" "Weekly Notes/Week 3/"` |
| 4 | Sept 22, 2025 | Virtual Networks & NSGs | `git add "Assignment Brief/Week 4/" "Weekly Notes/Week 4/"` |
| ... | ... | ... | ... |

## 🔧 Batch Release (Multiple Weeks)

To release multiple weeks at once:
```bash
git add "Assignment Brief/Week 2/" "Weekly Notes/Week 2/" \
        "Assignment Brief/Week 3/" "Weekly Notes/Week 3/" \
        "Assignment Brief/Week 4/" "Weekly Notes/Week 4/"

git commit -m "📚 Release Weeks 2-4: Git Mastery & Azure Foundations"
git push origin main
```

## 🚨 Emergency Content Hide

If you need to hide content that was accidentally released:
```bash
# Remove from tracking (keeps local files)
git rm --cached -r "Assignment Brief/Week X/" "Weekly Notes/Week X/"

# Commit the removal
git commit -m "🔒 Hide Week X content - Released early by mistake"
git push origin main
```

## 📁 File Verification Commands

### Check what students currently see:
```bash
git ls-files | grep -E "(Assignment Brief|Weekly Notes)"
```

### Check hidden content still exists locally:
```bash
ls -la "Assignment Brief/" | grep Week
ls -la "Weekly Notes/" | grep Week
```

### View git status before release:
```bash
git status
```

## 🎓 Student Instructions Template

Share this with students at semester start:

---

### 📥 For Students: Getting Course Updates

#### Initial Setup (One Time):
```bash
git clone https://github.com/DC-Seneca/CSP451-2025F-Students.git
cd CSP451-2025F-Students
```

#### Weekly Updates:
```bash
cd CSP451-2025F-Students
git pull origin main
```

#### If you have local changes:
```bash
git stash              # Save your changes
git pull origin main   # Get updates  
git stash pop          # Restore your changes
```

---

## 🔄 Automation Option

Create a release script (`release-week.sh`):
```bash
#!/bin/bash
WEEK_NUM=$1
TOPIC=$2

if [ -z "$WEEK_NUM" ] || [ -z "$TOPIC" ]; then
    echo "Usage: ./release-week.sh <week_number> '<topic_description>'"
    exit 1
fi

echo "🚀 Releasing Week $WEEK_NUM: $TOPIC"

git add "Assignment Brief/Week $WEEK_NUM/" "Weekly Notes/Week $WEEK_NUM/"
git commit -m "📚 Release Week $WEEK_NUM: $TOPIC"
git push origin main

echo "✅ Week $WEEK_NUM released successfully!"
echo "📢 Students can now run: git pull origin main"
```

**Usage:**
```bash
chmod +x release-week.sh
./release-week.sh 3 "Azure Fundamentals and Virtual Networks"
```

## ⚡ Quick Commands Reference

| Action | Command |
|--------|---------|
| **Release Week 2** | `git add "Assignment Brief/Week 2/" "Weekly Notes/Week 2/" && git commit -m "📚 Release Week 2" && git push origin main` |
| **Check Student View** | `git ls-files \| grep -E "(Assignment Brief\|Weekly Notes)"` |
| **Verify Local Files** | `find . -name "Week*" -type d` |
| **Emergency Hide Week X** | `git rm --cached -r "Assignment Brief/Week X/" "Weekly Notes/Week X/" && git commit -m "🔒 Hide Week X" && git push origin main` |

---

**Repository Status**: ✅ Week 1 visible to students | 🔒 Weeks 2-14 hidden and ready for progressive release
