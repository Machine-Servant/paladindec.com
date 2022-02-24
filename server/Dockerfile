FROM node:16.13.0-alpine3.11 as builder 

WORKDIR /usr/src/app

COPY package*.json ./
# COPY prisma ./prisma/

RUN npm ci

COPY . ./

RUN npm run build

FROM node:16.13.0-alpine3.11

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist/
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "run", "start:prod"]