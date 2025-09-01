# Week 5: Azure Virtual Machines

## VM Creation Process

### Prerequisites
- Azure subscription (free tier acceptable)
- Resource group created
- Virtual network configured
- SSH key pair (Linux) or RDP credentials (Windows)

### Portal Deployment Steps
1. Navigate to Azure Portal
2. Create Resource → Virtual Machine
3. Configure:
   - Subscription and Resource Group
   - VM name and region
   - Availability options
   - Image (OS selection)
   - Size (compute resources)
   - Authentication method
   - Networking settings
   - Management options
   - Advanced settings

### Post-Deployment Configuration

**For Linux VMs:**
```bash
# Connect via SSH
ssh azureuser@<public-ip>

# Update system
sudo apt update && sudo apt upgrade -y

# Install web server
sudo apt install apache2 -y
sudo systemctl start apache2
sudo systemctl enable apache2
```

**For Windows VMs:**
1. Connect via RDP
2. Open Server Manager
3. Add Roles and Features
4. Select Web Server (IIS)
5. Configure IIS settings
6. Test with http://public-ip
