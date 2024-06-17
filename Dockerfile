FROM node:22.

WORKDIR /usr/src

COPY . .

RUN apt-get update && apt-get install -y git && npm install