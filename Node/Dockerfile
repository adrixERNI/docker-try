FROM node:22-alpine

WORKDIR /app

COPY linkedout/package*.json ./

RUN npm install

COPY linkedout/ ./

RUN npm run build

EXPOSE 3000

CMD ["npm","run"]