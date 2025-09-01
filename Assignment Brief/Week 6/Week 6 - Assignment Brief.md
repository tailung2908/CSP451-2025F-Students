# Week 6: ARM Templates and Infrastructure as Code
**CheckPoint 6 - Due: End of Week 6 (4% of final grade)**

## 🎯 Learning Objectives
- Create parameterized ARM templates
- Deploy infrastructure using Infrastructure as Code
- Implement template best practices
- Use Azure CLI for template deployment

## 📋 Assignment Requirements

### Part 1: Basic ARM Template (35 marks)
Create `azuredeploy.json` with following resources:

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    // Define at least 5 parameters
  },
  "variables": {
    // Define at least 3 variables
  },
  "resources": [
    // VM, NIC, Public IP, NSG, VNet, Storage Account
  ],
  "outputs": {
    // Output VM FQDN, SSH command, Resource IDs
  }
}
```

**Required Resources:**
1. Virtual Machine (Linux or Windows)
2. Network Interface
3. Public IP Address
4. Network Security Group
5. Virtual Network with Subnets
6. Storage Account for diagnostics

### Part 2: Advanced Template Features (35 marks)
1. **Parameterization**
   - VM size options (dropdown)
   - Admin credentials (secure)
   - Environment tag (dev/test/prod)
   - Location (default to RG location)
   - Enable/disable public IP

2. **Conditional Deployments**
   - Deploy public IP only if parameter is true
   - Different NSG rules based on OS type
   - Premium vs Standard storage based on environment

3. **Dependencies and Functions**
   - Use dependsOn for proper ordering
   - Implement copyIndex for multiple resources
   - Use resourceId() and reference() functions
   - Implement concat() and uniqueString()

### Part 3: Template Deployment (30 marks)
1. **Parameter File**
   Create `azuredeploy.parameters.json`:
   ```json
   {
     "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentParameters.json#",
     "contentVersion": "1.0.0.0",
     "parameters": {
       // Parameter values
     }
   }
   ```

2. **Deployment Methods**
   
   **Azure CLI Deployment:**
   ```bash
   az deployment group create \
     --resource-group Student-RG-<ID> \
     --template-file azuredeploy.json \
     --parameters @azuredeploy.parameters.json
   ```
   
   **Validation Before Deployment:**
   ```bash
   az deployment group validate \
     --resource-group Student-RG-<ID> \
     --template-file azuredeploy.json \
     --parameters @azuredeploy.parameters.json
   ```

3. **Version Control**
   - Store templates in Git repository
   - Create README with deployment instructions
   - Include example parameter files
   - Document all parameters

## 📦 Deliverables
- [ ] Complete ARM template (azuredeploy.json)
- [ ] Parameter file (azuredeploy.parameters.json)
- [ ] Deployment screenshot showing success
- [ ] Resources created screenshot
- [ ] GitHub repository with templates
- [ ] Deployment instructions README

## 📊 Grading Rubric
| Component | Weight | Criteria |
|-----------|--------|----------|
| Template Structure | 25% | Valid JSON, proper schema |
| Parameterization | 25% | Flexible, reusable |
| Resource Configuration | 25% | All resources properly defined |
| Deployment Success | 15% | Templates deploy without errors |
| Documentation | 10% | Clear instructions, comments |
