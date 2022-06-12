FROM node:18-bullseye

WORKDIR /appFront

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "serve", "--", "--port", "4000"]
