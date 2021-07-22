FROM node:14 as base
WORKDIR /home/frontend
COPY package*.json ./
RUN npm i
EXPOSE 3000
COPY . .
