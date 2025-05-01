FROM --platform=linux/amd64 node:22.11.0-alpine3.20 AS development

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

USER node

FROM --platform=linux/amd64 node:22.11.0-alpine3.20 AS build

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN yarn run orchestrate:build

RUN yarn run widget:build:prod

COPY --chown=node:node ./apps/feature-flags-service/prisma ./dist/apps/feature-flags-service/prisma
COPY --chown=node:node ./apps/feedback-service/prisma ./dist/apps/feedback-service/prisma
COPY --chown=node:node ./apps/identity-service/prisma ./dist/apps/identity-service/prisma
COPY --chown=node:node ./apps/payments-service/prisma ./dist/apps/payments-service/prisma

USER node

FROM --platform=linux/amd64 node:22.11.0-alpine3.20 AS production

WORKDIR /

COPY --chown=node:node --from=build /usr/src/app/package.json ./package.json
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/widget/dist ./widget/dist

COPY --chown=node:node --from=build /usr/src/app/apps/feature-flags-service/generated /usr/src/app/apps/feature-flags-service/generated
COPY --chown=node:node --from=build /usr/src/app/apps/feedback-service/generated /usr/src/app/apps/feedback-service/generated
COPY --chown=node:node --from=build /usr/src/app/apps/identity-service/generated /usr/src/app/apps/identity-service/generated
COPY --chown=node:node --from=build /usr/src/app/apps/payments-service/generated /usr/src/app/apps/payments-service/generated

COPY --chown=node:node --from=build /usr/src/app/apps/feature-flags-service/prisma ./dist/apps/feature-flags-service/apps/feature-flags-service/prisma
COPY --chown=node:node --from=build /usr/src/app/apps/feedback-service/prisma ./dist/apps/feedback-service/apps/feedback-service/prisma
COPY --chown=node:node --from=build /usr/src/app/apps/identity-service/prisma ./dist/apps/identity-service/apps/identity-service/prisma
COPY --chown=node:node --from=build /usr/src/app/apps/payments-service/prisma ./dist/apps/payments-service/apps/payments-service/prisma

ARG TARGET_SERVICE=api-gateway
ENV SERVICE_PATH="./dist/apps/${TARGET_SERVICE}/main.js"

EXPOSE 3000

CMD node $SERVICE_PATH
