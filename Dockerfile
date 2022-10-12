#Build steps
FROM node:alpine3.10 as build-step

#RUN apt-get -y update
#RUN apt-get -y install git

RUN mkdir /app
WORKDIR /app

COPY package.json /app
#RUN npm install
COPY . /app

RUN npm run build

#Run steps
FROM nginx:1.19.8-alpine
COPY --from=build-step /app/build /usr/share/nginx/html