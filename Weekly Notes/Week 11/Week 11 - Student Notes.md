# Week 11: Docker Fundamentals

### Docker Concepts

#### Containers vs Virtual Machines
- **Containers**: Share host OS kernel, lightweight, fast startup
- **VMs**: Full OS virtualization, more isolation, higher overhead

### Essential Docker Commands
```bash
# Image management
docker images                    # List images
docker pull nginx                # Download image
docker build -t myapp .          # Build image
docker rmi image-id              # Remove image

# Container management
docker ps                        # List running containers
docker ps -a                     # List all containers
docker run -d -p 80:80 nginx    # Run container
docker stop container-id         # Stop container
docker rm container-id           # Remove container
docker logs container-id         # View logs
docker exec -it container-id bash # Enter container

# Docker Compose
docker-compose up                # Start services
docker-compose down              # Stop services
docker-compose logs              # View logs
docker-compose ps                # List services
```

### Dockerfile Example
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

### Docker Compose Example
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DEBUG=1
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

## Best Practices

### Dockerfile Optimization
```dockerfile
# Use specific version tags
FROM node:16-alpine

# Use multi-stage builds
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

### Security Considerations
- Use official base images
- Run containers as non-root user
- Scan images for vulnerabilities
- Keep images updated
- Use secrets management
- Limit container permissions

### Performance Tips
- Use .dockerignore file
- Minimize layers in Dockerfile
- Use image caching effectively
- Choose appropriate base images
- Implement health checks

## Assignment Preparation
1. Practice building multi-stage Dockerfiles
2. Create docker-compose.yml with multiple services
3. Test container networking and communication
4. Implement proper logging and monitoring
5. Practice pushing to Azure Container Registry

## Common Issues and Solutions
- **Port conflicts**: Use different host ports
- **Permission errors**: Check file ownership and permissions
- **Network issues**: Ensure containers are on same network
- **Volume mounting**: Use absolute paths for volumes
- **Image size**: Use alpine versions and multi-stage builds

