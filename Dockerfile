# Stage 1: install dependencies

FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --chown=node:node package.json ./

COPY --chown=node:node yarn.lock ./

RUN yarn install

# RUN yarn install

 

# Stage 2: build

FROM node:16-alpine AS builder

WORKDIR /app

COPY --chown=node:node --from=deps /app/node_modules ./node_modules

COPY --chown=node:node --from=deps /app/package.json ./package.json

COPY --chown=node:node . .

RUN yarn build

 

# Stage 3: run

# FROM node:16-alpine

# WORKDIR /app

# COPY --chown=node:node --from=builder /app/next.config.js ./

# COPY --chown=node:node --from=builder /app/.next ./.next

# COPY --chown=node:node --from=builder /app/public ./public

# COPY --chown=node:node --from=builder /app/node_modules ./node_modules

# COPY --chown=node:node --from=builder /app/package.json ./

 

# CMD ["yarn", "start:production"]