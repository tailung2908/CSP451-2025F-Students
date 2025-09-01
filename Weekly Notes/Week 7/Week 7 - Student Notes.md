# Week 7: Linux Firewall and Azure Security

## iptables Configuration

### Basic Rules
```bash
# Set default policies
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT

# Allow loopback
sudo iptables -A INPUT -i lo -j ACCEPT

# Allow established connections
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow SSH
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Allow HTTP/HTTPS
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Enable logging
sudo iptables -A INPUT -j LOG --log-prefix "Dropped: "

# Save rules
sudo iptables-save > /etc/iptables/rules.v4
```

## NAT and Routing
```bash
# Enable IP forwarding
echo 1 > /proc/sys/net/ipv4/ip_forward

# Add to /etc/sysctl.conf
net.ipv4.ip_forward = 1

# Configure NAT
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT
sudo iptables -A FORWARD -i eth0 -o eth1 -m state --state RELATED,ESTABLISHED -j ACCEPT
```

## Azure Firewall Configuration
1. Create Azure Firewall resource
2. Configure firewall policy
3. Set up network rules
4. Configure application rules
5. Create UDRs to route traffic through firewall
6. Enable diagnostic logging
