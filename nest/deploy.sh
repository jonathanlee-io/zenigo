#!/bin/bash

# Deployment script for NestJS microservices
set -e

# Configuration
NAMESPACE="zenigo-nestjs-microservices"
CHART_PATH="./helm"
DOCKER_REGISTRY="jonathanleedev"
IMAGE_TAG="${IMAGE_TAG:-"0.0.1"}-$(date +%s)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to build and push Docker image
build_and_push_image() {
    local service=$1
    log_info "Building Docker image for $service..."
    
    docker build \
        --build-arg TARGET_SERVICE=$service \
        -t $DOCKER_REGISTRY/zenigo-nestjs-microservices-$service:$IMAGE_TAG \
        -f Dockerfile .
    
    log_info "Pushing Docker image for $service..."
    docker push $DOCKER_REGISTRY/zenigo-nestjs-microservices-$service:$IMAGE_TAG
}

# Function to deploy service
deploy_service() {
    local service=$1
    local values_file="values/$service.yaml"
    
    log_info "Deploying $service..."
    
    if [ ! -f "$CHART_PATH/$values_file" ]; then
        log_warn "Values file $values_file not found, using default values"
        values_file=""
    fi
    
    helm upgrade --install $service $CHART_PATH \
        --namespace $NAMESPACE \
        --create-namespace \
        --set image.repository=$DOCKER_REGISTRY/zenigo-nestjs-microservices-$service \
        --set image.tag=$IMAGE_TAG \
        --set service.name=$service \
        ${values_file:+--values $CHART_PATH/$values_file} \
        --wait \
        --force
    
    log_info "Successfully deployed $service"
}

# Main deployment logic
main() {
    local command=${1:-"deploy"}
    local services=${2:-"api-gateway feedback-service identity-service payments-service feature-flags-service"}
    
    case $command in
        "build")
            log_info "Building Docker images..."
            for service in $services; do
                build_and_push_image $service
            done
            ;;
        "deploy")
            log_info "Deploying services..."
            for service in $services; do
                deploy_service $service
            done
            ;;
        "build-deploy")
            log_info "Building and deploying services..."
            for service in $services; do
                build_and_push_image $service
                deploy_service $service
            done
            ;;
        "status")
            log_info "Checking deployment status..."
            kubectl get pods -n $NAMESPACE
            kubectl get services -n $NAMESPACE
            ;;
        "logs")
            local service_name=${2:-"api-gateway"}
            log_info "Showing logs for $service_name..."
            kubectl logs -f deployment/$service_name -n $NAMESPACE
            ;;
        "delete")
            log_warn "Deleting all deployments..."
            for service in $services; do
                helm uninstall $service -n $NAMESPACE || true
            done
            ;;
        *)
            echo "Usage: $0 {build|deploy|build-deploy|status|logs|delete} [services]"
            echo "  build         - Build and push Docker images"
            echo "  deploy        - Deploy services to Kubernetes"
            echo "  build-deploy  - Build images and deploy services"
            echo "  status        - Show deployment status"
            echo "  logs          - Show logs for a service"
            echo "  delete        - Delete all deployments"
            echo ""
            echo "Services: api-gateway feedback-service identity-service payments-service feature-flags-service"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"