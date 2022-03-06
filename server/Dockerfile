FROM node:16.13.0-alpine3.11 As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16.13.0-alpine3.11 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG SCRYFALL_API_URI=https://api.scryfall.com
ENV SCRYFALL_API_URI=${SCRYFALL_API_URI}
ARG FIREBASE_PROJECT_ID=paladindeck-45ae6
ENV FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}
ARG FIREBASE_CLIENT_EMAIL=firebase-adminsdk-qx63v@paladindeck-45ae6.iam.gserviceaccount.com
ENV FIREBASE_CLIENT_EMAIL=${FIREBASE_CLIENT_EMAIL}
ARG DOWNLOADS_DIR=downloads
ENV DOWNLOADS_DIR=${DOWNLOADS_DIR}
ARG BULK_DATA_FILE_NAME=bulk_data
ENV BULK_DATA_FILE_NAME=${BULK_DATA_FILE_NAME}

RUN apk add --no-cache curl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run prisma:generate

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/prisma ./prisma

CMD ["node", "--max_old_space_size=512" "dist/src/main"]