## Week 11: Docker Fundamentals and Containerization
**CheckPoint 8 - Due: End of Week 11 (4% of final grade)**

### 🎯 Learning Objectives
- Understand containerization concepts
- Build and manage Docker images
- Deploy multi-container applications
- Implement Docker best practices

### 📋 Assignment Requirements

#### Part 1: Docker Basics (30 marks)
1. **Environment Setup**
   ```bash
   # Install Docker on Azure VM
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo usermod -aG docker $USER
   ```

2. **Image Creation**
   Create three Dockerfiles:
   
   **Web Application Dockerfile:**
   ```dockerfile
   FROM node:14-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

3. **Container Management**
   - Build custom images
   - Run containers with proper flags
   - Implement health checks
   - Configure restart policies
   - Set resource limits

#### Part 2: Multi-Container Application (40 marks)
1. **Docker Compose Setup**
   Create `docker-compose.yml`:
   ```yaml
   version: '3.8'
   services:
     web:
       build: ./web
       ports:
         - "80:3000"
       environment:
         - NODE_ENV=production
       depends_on:
         - db
         - cache
     
     db:
       image: postgres:13
       volumes:
         - db_data:/var/lib/postgresql/data
       environment:
         - POSTGRES_PASSWORD=${DB_PASSWORD}
     
     cache:
       image: redis:alpine
       command: redis-server --appendonly yes
   
   volumes:
     db_data:
   ```

2. **Application Requirements**
   - Frontend service (React/Angular/Vue)
   - Backend API service
   - Database service (PostgreSQL/MySQL)
   - Cache service (Redis)
   - Message queue (RabbitMQ/Kafka)

3. **Networking Configuration**
   - Create custom bridge network
   - Implement service discovery
   - Configure internal communication
   - Set up reverse proxy

#### Part 3: Production Deployment (30 marks)
1. **Azure Container Registry**
   ```bash
   # Create ACR
   az acr create --name <acrName> --resource-group <rgName> --sku Basic
   
   # Push images
   docker tag myapp:latest <acrName>.azurecr.io/myapp:latest
   docker push <acrName>.azurecr.io/myapp:latest
   ```

2. **Security Implementation**
   - Scan images for vulnerabilities
   - Implement secrets management
   - Use multi-stage builds
   - Run as non-root user
   - Implement least privilege

3. **Performance Optimization**
   - Minimize image size
   - Implement caching strategies
   - Use .dockerignore
   - Optimize layer caching

### 📦 Deliverables
- [ ] Three working Dockerfiles
- [ ] Complete docker-compose.yml
- [ ] Running application screenshots
- [ ] Docker images in ACR
- [ ] Performance metrics report
- [ ] Security scan results

### 📊 Grading Rubric
| Component | Weight | Criteria |
|-----------|--------|----------|
| Dockerfiles | 25% | Best practices, optimization |
| Docker Compose | 30% | Multi-container orchestration |
| Deployment | 20% | Successfully running on Azure |
| Security | 15% | Scanning, secrets management |
| Documentation | 10% | Clear instructions, comments |

---

