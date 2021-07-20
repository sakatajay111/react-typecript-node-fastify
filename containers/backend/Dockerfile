FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

EXPOSE 3001
COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build