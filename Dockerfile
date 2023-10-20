FROM node:lts-alpine

WORKDIR /app

COPY . .
COPY package.*json .

RUN npm install 
RUN npm install pm2 -g
EXPOSE 3000

CMD ["npm", "run", "start"]
