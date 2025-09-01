## Week 10: Comprehensive Security Implementation

### Milestone 1: Linux Firewall

#### Complete iptables Script
```bash
#!/bin/bash
# Comprehensive firewall configuration

# Flush existing rules
iptables -F
iptables -t nat -F
iptables -X

# Default policies
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Loopback
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# Established connections
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# SSH with rate limiting
iptables -A INPUT -p tcp --dport 22 -m recent --set --name SSH
iptables -A INPUT -p tcp --dport 22 -m recent --update --seconds 60 --hitcount 4 --name SSH -j DROP
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Web services
iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT

# Logging
iptables -N LOGGING
iptables -A INPUT -j LOGGING
iptables -A LOGGING -m limit --limit 2/min -j LOG --log-prefix "IPTables-Dropped: " --log-level 4
iptables -A LOGGING -j DROP

# Save configuration
iptables-save > /etc/iptables/rules.v4
```

### Milestone 2: Azure Deployment

#### Complete ARM Template for Web Server
```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "adminUsername": {
      "type": "string"
    },
    "adminPassword": {
      "type": "securestring"
    }
  },
  "variables": {
    "vmName": "WebServerVM",
    "nicName": "[concat(variables('vmName'), '-nic')]",
    "publicIpName": "[concat(variables('vmName'), '-ip')]",
    "vnetName": "ProductionVNet",
    "subnetName": "WebSubnet",
    "nsgName": "[concat(variables('vmName'), '-nsg')]"
  },
  "resources": [
    // Complete resource definitions for:
    // - Virtual Network
    // - Subnet
    // - NSG with rules
    // - Public IP
    // - Network Interface
    // - Virtual Machine
    // - VM Extension for web server setup
  ]
}
```

---

