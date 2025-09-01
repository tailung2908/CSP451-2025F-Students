## Week 12: Multi-Component Docker Applications

### Architecture Design

#### Components
1. **Frontend**: React/Angular/Vue application
2. **Backend API**: Node.js/Python/Java service
3. **Database**: PostgreSQL/MySQL/MongoDB
4. **Cache**: Redis for session/data caching
5. **Message Queue**: RabbitMQ/Kafka for async processing

### Implementation on Azure VM

#### Setup Script
```bash
#!/bin/bash
# Azure VM Docker setup

# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add user to docker group
sudo usermod -aG docker $USER

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker
```

### Azure Function Integration
```javascript
// Azure Function to interact with Docker containers
module.exports = async function (context, req) {
    const axios = require('axios');
    
    try {
        // Call containerized API
        const response = await axios.get('http://vm-public-ip:5000/api/data');
        
        context.res = {
            status: 200,
            body: response.data
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: "Error connecting to container"
        };
    }
};
```

---

