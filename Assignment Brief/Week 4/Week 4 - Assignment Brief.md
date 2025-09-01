# Week 4: Azure Networking and Security Groups
**CheckPoint 4 - Due: End of Week 4 (4% of final grade)**

## 🎯 Learning Objectives
- Design and implement Azure Virtual Networks
- Configure Network Security Groups with proper rules
- Implement Route Tables for traffic control
- Use Azure CLI for network management

## 📋 Assignment Requirements

### Part 1: Network Architecture Design (30 marks)
1. **Create Resource Group**
   ```bash
   az group create --name Student-RG-<StudentID> --location eastus
   ```

2. **Virtual Network Setup**
   - Address space: 10.0.0.0/16
   - Create 4 subnets:
     - WebSubnet: 10.0.1.0/24
     - AppSubnet: 10.0.2.0/24
     - DataSubnet: 10.0.3.0/24
     - ManagementSubnet: 10.0.250.0/24

3. **Document Network Design**
   - Create network diagram using draw.io
   - Explain subnet segregation strategy
   - Justify IP address allocation

### Part 2: Network Security Configuration (40 marks)
1. **NSG Creation and Rules**
   
   **Web Tier NSG Requirements:**
   - Allow HTTPS (443) from Internet
   - Allow HTTP (80) from Internet  
   - Allow SSH (22) from Management subnet only
   - Deny all other inbound traffic
   
   **App Tier NSG Requirements:**
   - Allow port 8080 from Web subnet only
   - Allow SSH (22) from Management subnet only
   - Deny all other inbound traffic
   
   **Data Tier NSG Requirements:**
   - Allow MySQL (3306) from App subnet only
   - Allow PostgreSQL (5432) from App subnet only
   - Deny all other inbound traffic

2. **NSG Association**
   - Associate each NSG with corresponding subnet
   - Verify associations using Azure CLI
   - Test rule effectiveness

### Part 3: Routing Configuration (30 marks)
1. **Route Table Setup**
   - Create custom route table
   - Add route to Internet (0.0.0.0/0)
   - Add route for on-premises (192.168.0.0/16)
   - Associate with appropriate subnets

2. **Azure CLI Commands**
   Execute and document output for:
   ```bash
   az network vnet list --output table
   az network nsg list --output table
   az network route-table list --output table
   az network vnet subnet list --resource-group Student-RG-<ID> --vnet-name <VNetName>
   ```

## 📝 Questions to Answer
1. **What is the role of a Route Table in Azure networking?** (200 words)
2. **Explain how Routes within a Route Table determine packet flow** (200 words)
3. **Why are Route Table associations necessary?** (150 words)
4. **Compare NSG rules for Windows vs Linux VMs** (250 words)
5. **Why must SSH/RDP ports remain open? What are the security implications?** (200 words)
6. **What happens if you delete SSH/RDP rules while connected?** (150 words)

## 📦 Deliverables
- [ ] Network architecture diagram
- [ ] Screenshots of all Azure resources
- [ ] Azure CLI command outputs
- [ ] Written answers to all questions
- [ ] Cost analysis screenshot
- [ ] Reflection paper (500 words)

## 📊 Grading Rubric
| Component | Weight | Criteria |
|-----------|--------|----------|
| Network Design | 25% | Proper segmentation, documentation |
| NSG Configuration | 30% | Correct rules, associations |
| Route Tables | 20% | Proper routing setup |
| Written Answers | 15% | Accuracy, depth |
| Documentation | 10% | Screenshots, clarity |
