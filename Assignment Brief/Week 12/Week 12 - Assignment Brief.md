## Week 12: Multi-Component Docker Applications in Azure
**CheckPoint 9 - Due: End of Week 12 (4% of final grade)**

### 🎯 Learning Objectives
- Deploy complex containerized applications on Azure
- Integrate containers with Azure services
- Implement microservices architecture
- Create serverless functions for container interaction

### 📋 Assignment Requirements

#### Part 1: Azure VM Container Host Setup (25 marks)
1. **VM Configuration**
   ```bash
   # Create Ubuntu VM for Docker
   az vm create \
     --resource-group Container-RG \
     --name DockerHost \
     --image UbuntuLTS \
     --size Standard_D2s_v3 \
     --admin-username azureuser \
     --generate-ssh-keys
   ```

2. **Docker and Compose Installation**
   - Install Docker CE
   - Install Docker Compose
   - Configure Docker daemon
   - Set up logging driver
   - Enable remote API

3. **Security Configuration**
   - Open required ports (80, 443, 3000, 5000)
   - Configure NSG rules
   - Implement TLS for Docker daemon
   - Set up Docker secrets

#### Part 2: Microservices Application (40 marks)
1. **Application Architecture**
   Build e-commerce platform with:
   - **Product Service**: Node.js/Express
   - **Order Service**: Python/Flask
   - **User Service**: Java/Spring Boot
   - **Payment Service**: Go
   - **Notification Service**: .NET Core

2. **Service Requirements**
   Each service must have:
   - RESTful API endpoints
   - Database connection
   - Health check endpoint
   - Logging implementation
   - Error handling
   - Unit tests

3. **Inter-Service Communication**
   - Implement API Gateway
   - Service discovery
   - Circuit breaker pattern
   - Message queue integration
   - Event-driven architecture

#### Part 3: Azure Function Integration (35 marks)
1. **Function App Creation**
   ```javascript
   // Order processing function
   module.exports = async function (context, myQueueItem) {
       context.log('Processing order:', myQueueItem);
       
       // Call container API
       const response = await fetch('http://vm-ip:5000/api/orders', {
           method: 'POST',
           body: JSON.stringify(myQueueItem)
       });
       
       // Send notification
       await sendNotification(myQueueItem.userId);
       
       context.log('Order processed successfully');
   };
   ```

2. **Function Requirements**
   - HTTP triggered function for API
   - Timer triggered for cleanup
   - Queue triggered for async processing
   - Blob triggered for file processing
   - Event Grid for real-time updates

3. **Integration Points**
   - Connect to containerized services
   - Access Azure Storage
   - Send events to Event Grid
   - Write to Cosmos DB
   - Send emails via SendGrid

### 📦 Deliverables
- [ ] Architecture diagram with all components
- [ ] Docker Compose file with 5+ services
- [ ] Azure Functions code (3+ functions)
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Integration test results
- [ ] Performance benchmarks

### 📊 Grading Rubric
| Component | Weight | Criteria |
|-----------|--------|----------|
| VM Setup | 20% | Docker properly configured |
| Microservices | 35% | All services running, communicating |
| Azure Functions | 25% | Functions deployed, integrated |
| Architecture | 10% | Clean design, best practices |
| Documentation | 10% | API docs, setup instructions |

---

