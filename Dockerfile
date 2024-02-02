FROM node:20.11.0-alpine

#creates a directory in the container
WORKDIR /usr/src/app
COPY package*.json ./
#run clean install
RUN npm ci --omit=dev 
COPY ./src ./src
CMD npm start