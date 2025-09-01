# Week 5: Azure Virtual Machine Deployment
**CheckPoint 5 - Due: End of Week 5 (4% of final grade)**

## 🎯 Learning Objectives
- Deploy both Linux and Windows VMs in Azure
- Configure VMs with web servers (Apache/IIS)
- Implement proper security and networking
- Manage VMs using Azure CLI and Portal

## 📋 Assignment Requirements

### Part 1: Linux VM Deployment (35 marks)
1. **VM Specifications**
   - Name: `Linux-Web-<StudentID>`
   - Image: Ubuntu Server 20.04 LTS
   - Size: Standard_B2s
   - Region: Same as Resource Group
   - Authentication: SSH public key

2. **Post-Deployment Configuration**
   ```bash
   # Connect via SSH
   ssh azureuser@<public-ip>
   
   # Update and install Apache
   sudo apt update && sudo apt upgrade -y
   sudo apt install apache2 php libapache2-mod-php -y
   sudo systemctl enable apache2
   ```

3. **Web Server Setup**
   - Create custom index.html with student info
   - Configure virtual host
   - Enable HTTPS with self-signed certificate
   - Set up basic PHP info page

### Part 2: Windows VM Deployment (35 marks)
1. **VM Specifications**
   - Name: `Windows-Web-<StudentID>`
   - Image: Windows Server 2019 Datacenter
   - Size: Standard_B2ms
   - Region: Same as Resource Group
   - Authentication: Password (meet complexity requirements)

2. **IIS Configuration**
   - Install IIS with all features
   - Install ASP.NET support
   - Configure application pools
   - Create custom website
   - Set up HTTPS binding

3. **Required Features**
   - Web Server (IIS)
   - .NET Framework 4.8
   - ASP.NET
   - Management Tools

### Part 3: Security and Networking (30 marks)
1. **Network Configuration**
   - Place VMs in appropriate subnets
   - Configure static private IPs
   - Set up public IP with DNS label
   - Configure NSG rules specific to each VM

2. **Security Hardening**
   - Implement Azure Backup
   - Configure Azure Monitor
   - Enable boot diagnostics
   - Set up update management
   - Configure antimalware (Windows)

3. **Testing Requirements**
   - Test HTTP/HTTPS access from internet
   - Verify SSH/RDP connectivity
   - Test inter-VM communication
   - Validate NSG rules

## 📦 Deliverables
- [ ] Screenshots of both VMs running
- [ ] Public URLs for both web servers
- [ ] Apache/IIS configuration files
- [ ] Network configuration screenshots
- [ ] Security compliance checklist
- [ ] Cost estimate for monthly operation

## 📊 Grading Rubric
| Component | Weight | Criteria |
|-----------|--------|----------|
| Linux VM Setup | 30% | Proper configuration, Apache working |
| Windows VM Setup | 30% | IIS configured, website accessible |
| Security Config | 20% | Hardening measures implemented |
| Networking | 10% | Correct subnet placement, NSG rules |
| Documentation | 10% | Clear screenshots, configuration files |
