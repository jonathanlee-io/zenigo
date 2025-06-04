FROM --platform=linux/amd64 node:22.14.0-alpine3.21 AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

ARG BUILD_ENV="prod"

RUN yarn run build:${BUILD_ENV}


FROM --platform=linux/x86_64 nginx:1.27.2-alpine3.20

WORKDIR /app

COPY --from=builder /app/dist/ui/browser /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d

EXPOSE 80
