# Week 4: Azure Networking Fundamentals

## Network Components

### Virtual Networks (VNets)
- Private network in Azure cloud
- IP address space definition (e.g., 10.0.0.0/16)
- Subnet segmentation for resource organization

### Network Security Groups (NSGs)
- Virtual firewall for Azure resources
- Inbound and outbound security rules
- Priority-based rule evaluation (100-4096)

### Route Tables and Routes
```bash
# Azure CLI commands
az network route-table create \
  --resource-group Student-RG-xxxxxx \
  --name MyRouteTable

az network route-table route create \
  --resource-group Student-RG-xxxxxx \
  --route-table-name MyRouteTable \
  --name ToInternet \
  --address-prefix 0.0.0.0/0 \
  --next-hop-type Internet
```

## NSG Rules Configuration
```json
{
  "name": "AllowSSH",
  "properties": {
    "protocol": "Tcp",
    "sourcePortRange": "*",
    "destinationPortRange": "22",
    "sourceAddressPrefix": "*",
    "destinationAddressPrefix": "*",
    "access": "Allow",
    "priority": 100,
    "direction": "Inbound"
  }
}
```

## Critical Ports
- **SSH (Linux)**: Port 22
- **RDP (Windows)**: Port 3389
- **HTTP**: Port 80
- **HTTPS**: Port 443
