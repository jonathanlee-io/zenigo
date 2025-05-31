# Multi-stage build for Spring Boot applications in a Gradle monorepo

# Build stage
FROM openjdk:21-slim AS build

WORKDIR /app

# Copy gradle files first for better layer caching
COPY ./gradle/ ./gradle/
COPY ./gradlew ./gradlew.bat ./settings.gradle.kts ./gradle.properties ./

# Make gradlew executable
RUN chmod +x ./gradlew

# Copy build configuration
COPY ./buildSrc/ ./buildSrc/

# Copy all subprojects
COPY ./app/ ./app/
COPY ./list/ ./list/
COPY ./utilities/ ./utilities/
COPY ./api-gateway/ ./api-gateway/
COPY ./feature-flags-service/ ./feature-flags-service/

# Build the project
RUN ./gradlew clean build -x test

# Runtime stage
FROM openjdk:21-slim

WORKDIR /app

# Arguments for specifying which app to run
ARG APP_NAME=api-gateway
ARG APP_VERSION=0.0.1-SNAPSHOT
ARG PORT=8080
ENV PORT=${PORT}

# Copy the built jar file from the build stage
# The default is to copy the 'app' jar, but can be overridden with --build-arg
COPY --from=build /app/${APP_NAME}/build/libs/${APP_NAME}-${APP_VERSION}.jar app.jar

# Set the default port - can be overridden at runtime
EXPOSE ${PORT}

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]