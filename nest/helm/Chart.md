# NestJS Microservices Helm Chart

This Helm chart deploys NestJS microservices to Kubernetes using the provided Dockerfile.

## Services

The chart supports deployment of the following microservices:
- `api-gateway` - Main API gateway service
- `feedback-service` - Feedback management service
- `identity-service` - User identity and authentication service
- `payments-service` - Payment processing service
- `feature-flags-service` - Feature flags management service

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+
- Docker registry access
- kubectl configured to access your cluster

## Installation

### Quick Start

1. **Build and push Docker images:**
   ```bash
   # Build images for all services
   ./deploy.sh build

   # Or build for specific service
   docker build --build-arg TARGET_SERVICE=api-gateway -t your-registry/nestjs-microservices:api-gateway-latest .
   docker push your-registry/nestjs-microservices:api-gateway-latest
   ```

2. **Deploy services:**
   ```bash
   # Deploy all services
   ./deploy.sh deploy

   # Or deploy specific service
   helm install api-gateway ./helm-chart \
     --set service.name=api-gateway \
     --set image.repository=your-registry/nestjs-microservices \
     --set image.tag=api-gateway-latest \
     --values ./helm-chart/values/api-gateway.yaml
   ```

### Manual Installation

1. **Install API Gateway (with external access):**
   ```bash
   helm install api-gateway ./helm-chart \
     --values ./helm-chart/values/api-gateway.yaml \
     --set image.repository=your-registry/nestjs-microservices \
     --set image.tag=api-gateway-latest
   ```

2. **Install other services:**
   ```bash
   # Identity Service
   helm install identity-service ./helm-chart \
     --values ./helm-chart/values/identity-service.yaml \
     --set image.repository=your-registry/nestjs-microservices \
     --set image.tag=identity-service-latest

   # Feedback Service
   helm install feedback-service ./helm-chart \
     --values ./helm-chart/values/feedback-service.yaml \
     --set image.repository=your-registry/nestjs-microservices \
     --set image.tag=feedback-service-latest

   # Payments Service
   helm install payments-service ./helm-chart \
     --values ./helm-chart/values/payments-service.yaml \
     --set image.repository=your-registry/nestjs-microservices \
     --set image.tag=payments-service-latest

   # Feature Flags Service
   helm install feature-flags-service ./helm-chart \
     --values ./helm-chart/values/feature-flags-service.yaml \
     --set image.repository=your-registry/nestjs-microservices \
     --set image.tag=feature-flags-service-latest
   ```

## Configuration

### Common Configuration Options

| Parameter | Description | Default |
|-----------|-------------|---------|
| `service.name` | Name of the service | `api-gateway` |
| `service.type` | Kubernetes service type | `ClusterIP` |
| `service.port` | Service port | `8000` |
| `image.repository` | Docker image repository | `your-registry/nestjs-microservices` |
| `image.tag` | Docker image tag | `latest` |
| `replicaCount` | Number of replicas | `1` |
| `resources.limits.cpu` | CPU limit | `500m` |
| `resources.limits.memory` | Memory limit | `512Mi` |
| `env` | Environment variables | `{}` |
| `ingress.enabled` | Enable ingress | `false` |
| `autoscaling.enabled` | Enable HPA | `false` |

### Service-Specific Values

Each service has its own values file in the `values/` directory:
- `values/api-gateway.yaml` - External-facing service with ingress
- `values/identity-service.yaml` - Authentication service with higher resources
- `values/payments-service.yaml` - Payment service with PDB
- `values/feedback-service.yaml` - Basic internal service
- `values/feature-flags-service.yaml` - Feature flags service

### Environment Variables

Set environment variables through the `env` section in values: