# Week 7: Linux Firewall Configuration and Azure Security
**CheckPoint 7 - Due: End of Week 7 (4% of final grade)**

## 🎯 Learning Objectives
- Configure comprehensive iptables firewall rules
- Deploy and configure Azure Firewall
- Implement defense-in-depth security strategy
- Set up logging and monitoring for security events

## 📋 Assignment Requirements

### Part 1: Linux Firewall with iptables (40 marks)
1. **Basic Firewall Setup**
   ```bash
   # Create and run firewall script
   sudo nano /etc/firewall.sh
   sudo chmod +x /etc/firewall.sh
   sudo ./firewall.sh
   ```

2. **Required iptables Rules**
   ```bash
   # Default policies
   iptables -P INPUT DROP
   iptables -P FORWARD DROP
   iptables -P OUTPUT ACCEPT
   
   # Essential services
   iptables -A INPUT -i lo -j ACCEPT
   iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
   iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # SSH
   iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # HTTP
   iptables -A INPUT -p tcp --dport 443 -j ACCEPT # HTTPS
   ```

3. **Advanced Security Features**
   - Implement rate limiting for SSH
   - Add SYN flood protection
   - Configure port knocking for SSH
   - Set up logging for dropped packets
   - Implement fail2ban integration

4. **NAT and Routing Configuration**
   - Enable IP forwarding
   - Configure MASQUERADE for outbound
   - Set up DNAT for port forwarding
   - Implement source-based routing

### Part 2: Azure Firewall Deployment (35 marks)
1. **Azure Firewall Setup**
   - Create Azure Firewall instance
   - Configure Firewall Policy
   - Set up rule collections:
     - Network rules
     - Application rules
     - NAT rules

2. **Traffic Routing**
   - Create UDR to route through firewall
   - Configure spoke VNets
   - Implement hub-spoke topology
   - Test traffic flow

3. **Firewall Rules Implementation**
   - Allow web traffic to specific subnets
   - Block social media sites
   - Allow Windows Updates
   - Implement FQDN filtering
   - Configure threat intelligence

### Part 3: Security Monitoring (25 marks)
1. **Logging Configuration**
   - Enable Azure Firewall logs
   - Configure Log Analytics workspace
   - Set up diagnostic settings
   - Create custom log queries

2. **Alerting Setup**
   - Create security alerts
   - Configure action groups
   - Set up email notifications
   - Implement automated responses

3. **Security Testing**
   - Perform penetration testing
   - Document security vulnerabilities
   - Test firewall rules effectiveness
   - Validate logging and alerting

## 📦 Deliverables
- [ ] Linux firewall script (/etc/firewall.sh)
- [ ] iptables rules documentation
- [ ] Azure Firewall configuration screenshots
- [ ] Network topology diagram
- [ ] Security test results report
- [ ] Log query examples and results

## 📊 Grading Rubric
| Component | Weight | Criteria |
|-----------|--------|----------|
| iptables Configuration | 30% | Comprehensive rules, security features |
| Azure Firewall | 30% | Proper setup, rule implementation |
| Monitoring/Logging | 20% | Logs configured, alerts working |
| Documentation | 10% | Clear, thorough documentation |
| Security Testing | 10% | Penetration test results |
