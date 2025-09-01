## Week 14: Final Project - Complete Cloud Solution

### Architecture Requirements

#### Core Components
1. **Multi-tier Application**
   - Frontend (React/Angular)
   - API Gateway
   - Microservices
   - Database layer

2. **CI/CD Pipeline**
```yaml
name: Complete CI/CD
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: docker-compose -f docker-compose.test.yml up --abort-on-container-exit

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build images
        run: docker-compose build
      - name: Push to registry
        run: |
          echo ${{ secrets.REGISTRY_PASSWORD }} | docker login -u ${{ secrets.REGISTRY_USERNAME }} --password-stdin
          docker-compose push

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Azure
        uses: azure/webapps-deploy@v2
        with:
          app-name: ${{ secrets.AZURE_WEBAPP_NAME }}
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
```

3. **Security Implementation**
   - Network segmentation
   - Secret management
   - SSL/TLS encryption
   - Authentication/Authorization
   - Audit logging

4. **Monitoring Stack**
   - Application Insights
   - Log Analytics
   - Custom dashboards
   - Alert rules

### Deliverable Checklist
- [ ] Architecture diagram with all components
- [ ] Source code in GitHub repository
- [ ] Docker Compose configuration
- [ ] CI/CD pipeline configuration
- [ ] ARM templates for infrastructure
- [ ] Security documentation
- [ ] README with setup instructions
- [ ] Screenshots of running system
- [ ] Monitoring dashboard screenshots
- [ ] Performance metrics
- [ ] Cost analysis
- [ ] Demo video (optional but recommended)

### Grading Rubric

| Component | Weight | Criteria |
|-----------|--------|----------|
| Architecture | 25% | Completeness, scalability, best practices |
| Implementation | 25% | Code quality, functionality, error handling |
| CI/CD | 20% | Automation level, testing, deployment |
| Security | 15% | Authentication, encryption, network security |
| Documentation | 10% | Clarity, completeness, diagrams |
| Innovation | 5% | Creative solutions, advanced features |

---

## Study Resources

### Official Documentation
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Azure Documentation](https://docs.microsoft.com/azure)
- [Docker Documentation](https://docs.docker.com)

### Recommended Learning Paths
1. Microsoft Learn - Azure Fundamentals
2. GitHub Learning Lab
3. Docker Getting Started
4. Linux Academy - Cloud courses

### Practice Environments
- GitHub free account with unlimited public repos
- Azure free tier ($200 credit for 30 days)
- Docker Desktop for local development
- WSL2 for Windows users

### Tips for Success
1. Start assignments early
2. Use version control for everything
3. Document as you go
4. Test incrementally
5. Ask questions in class/forums
6. Form study groups
7. Practice with personal projects
8. Keep security in mind always

---

## Azure Budget Management (10% of Final Grade)

### Initial Setup (Week 1)

#### Create Budget Alerts
```bash
# Create budget using Azure CLI
az consumption budget create \
  --budget-name "CSP451-Student-Budget" \
  --resource-group "Student-RG-<StudentID>" \
  --amount 100 \
  --time-grain Monthly \
  --start-date 2025-05-01 \
  --end-date 2025-08-31

# Set up alerts at different thresholds
az consumption budget create \
  --budget-name "CSP451-Student-Budget" \
  --notifications-enabled true \
  --notification-threshold 50 \
  --notification-threshold 75 \
  --notification-threshold 90 \
  --notification-emails "student@email.com"
```

#### Cost Management Best Practices

### Resource Management Guidelines

#### VM Cost Optimization
```bash
# Auto-shutdown configuration
az vm auto-shutdown \
  --resource-group Student-RG \
  --name MyVM \
  --time 1800 \
  --timezone "Eastern Standard Time"

# Use B-series VMs for development
az vm create \
  --size Standard_B2s  # Burstable, cost-effective
```

#### Storage Optimization
- Use Standard HDD for non-critical data
- Delete unattached disks immediately
- Use lifecycle management for blob storage
- Clean up old snapshots regularly

#### Network Cost Control
- Delete unused public IPs (charged even when not attached)
- Use Basic SKU for Load Balancers in dev/test
- Clean up unused Application Gateways (expensive!)

### Weekly Cost Tracking

#### Required Weekly Report Format
```markdown
## Week X Cost Report - [Student Name]

### Current Spending
- Total spent this week: $X.XX
- Total spent to date: $XX.XX
- Remaining budget: $XX.XX

### Resource Breakdown
| Resource Type | Cost | Percentage |
|--------------|------|------------|
| Virtual Machines | $X.XX | XX% |
| Storage | $X.XX | XX% |
| Networking | $X.XX | XX% |
| Other | $X.XX | XX% |

### Cost Optimization Actions
- [Action taken to reduce costs]
- [Resources deleted]
- [Settings optimized]

### Next Week Plan
- Estimated spending: $X.XX
- Resources needed: [List]
```

### Cost Analysis Queries

#### Useful Azure CLI Commands
```bash
# Get current month's cost
az consumption usage list \
  --start-date 2025-05-01 \
  --end-date 2025-05-31 \
  --query "[].{Resource:instanceName, Cost:pretaxCost}" \
  --output table

# List all resources in resource group
az resource list \
  --resource-group Student-RG-<ID> \
  --query "[].{Name:name, Type:type}" \
  --output table

# Find expensive resources
az consumption usage list \
  --top 10 \
  --order-by pretaxCost \
  --output table
```

### Resource Cleanup Scripts

#### End of Lab Cleanup
```bash
#!/bin/bash
# cleanup.sh - Run after each lab session

RESOURCE_GROUP="Student-RG-<StudentID>"

# Stop all VMs
az vm stop --ids $(az vm list -g $RESOURCE_GROUP --query "[].id" -o tsv)

# Deallocate VMs to stop billing
az vm deallocate --ids $(az vm list -g $RESOURCE_GROUP --query "[].id" -o tsv)

# Delete unattached disks
az disk list -g $RESOURCE_GROUP --query "[?diskState=='Unattached'].{Name:name}" -o tsv | \
  xargs -I {} az disk delete -g $RESOURCE_GROUP -n {} --yes

# Delete unattached NICs
az network nic list -g $RESOURCE_GROUP --query "[?virtualMachine==null].{Name:name}" -o tsv | \
  xargs -I {} az network nic delete -g $RESOURCE_GROUP -n {} --yes

# Delete unattached Public IPs
az network public-ip list -g $RESOURCE_GROUP --query "[?ipConfiguration==null].{Name:name}" -o tsv | \
  xargs -I {} az network public-ip delete -g $RESOURCE_GROUP -n {} --yes

echo "Cleanup complete! Resources stopped/deleted."
```

### Common Cost Pitfalls to Avoid

1. **Leaving VMs Running**: Even stopped VMs incur storage costs
2. **Premium Storage**: Use only when absolutely necessary
3. **Large VM Sizes**: Start small, scale up only if needed
4. **Multiple Public IPs**: Each costs ~$3-5/month
5. **Application Gateway**: Costs ~$200/month, delete after labs
6. **Azure Firewall**: Expensive (~$1.25/hour), use NSGs instead for labs
7. **Backup Storage**: Accumulates quickly, clean old backups
8. **Log Analytics**: Set appropriate retention periods
9. **Unattached Resources**: Disks, NICs, IPs still cost money
10. **Cross-region transfers**: Keep resources in same region

### Budget Management Grading Rubric

| Component | Weight | Evaluation Criteria |
|-----------|--------|-------------------|
| Budget Compliance | 40% | Stay within $100 monthly limit |
| Resource Cleanup | 30% | No orphaned resources after labs |
| Weekly Reports | 20% | Submitted on time with required details |
| Cost Optimization | 10% | Evidence of proactive cost reduction |

### Tips for Staying Within Budget

- **Use Azure Free Services**: Many services have free tiers
- **Schedule VM Auto-shutdown**: Set to shutdown at 6 PM daily
- **Delete Everything After Labs**: Don't leave resources overnight
- **Use Spot Instances**: Up to 90% discount for interruptible workloads
- **Choose Right Region**: Some regions are cheaper than others
- **Monitor Daily**: Check costs every day, not weekly
- **Use Tags**: Tag resources by lab/week for easy tracking
- **Set Up Alerts**: Get notified before overspending
- **Share Resources**: Use same VNet, Storage Account across labs
- **Clean Up Failed Deployments**: They still consume quota

Remember: Good cloud engineers optimize costs as much as they optimize performance!

---

## Important Reminders
- Check Blackboard regularly for updates
- Submit assignments before deadlines
- Maintain 50% average across assessments
- Manage Azure budget responsibly (10% of grade)
- Keep all work in GitHub for portfolio
- Document everything thoroughly