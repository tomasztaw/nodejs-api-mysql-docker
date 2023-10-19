FROM node:14.17.0 
# w przykładzie jest 17.2.0
WORKDIR /usr/code
COPY package.json .
RUN npm install
COPY . .
ENV SERVER_PORT 3000
EXPOSE $SERVER_PORT
CMD ["npm", "run", "start:prod"]
