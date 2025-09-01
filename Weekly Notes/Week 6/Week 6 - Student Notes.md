# Week 6: ARM Templates and Infrastructure as Code

## ARM Template Structure

### Basic Template
```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "vmName": {
      "type": "string",
      "metadata": {
        "description": "Name of the Virtual Machine"
      }
    }
  },
  "variables": {
    "location": "[resourceGroup().location]",
    "networkInterfaceName": "[concat(parameters('vmName'), '-nic')]"
  },
  "resources": [
    {
      "type": "Microsoft.Compute/virtualMachines",
      "apiVersion": "2021-07-01",
      "name": "[parameters('vmName')]",
      "location": "[variables('location')]",
      "properties": {
        // VM properties
      }
    }
  ],
  "outputs": {
    "vmId": {
      "type": "string",
      "value": "[resourceId('Microsoft.Compute/virtualMachines', parameters('vmName'))]"
    }
  }
}
```

## Deployment Methods

### Azure CLI
```bash
az deployment group create \
  --resource-group MyResourceGroup \
  --template-file template.json \
  --parameters @parameters.json
```

### PowerShell
```powershell
New-AzResourceGroupDeployment `
  -ResourceGroupName "MyResourceGroup" `
  -TemplateFile "template.json" `
  -TemplateParameterFile "parameters.json"
```

## Best Practices
1. Use parameters for environment-specific values
2. Leverage variables for repeated values
3. Define dependencies explicitly
4. Use outputs for important values
5. Store templates in version control
6. Validate templates before deployment
