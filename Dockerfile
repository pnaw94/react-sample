FROM node:10

COPY public /opt/app/public
COPY src /opt/app/src
COPY package.json /opt/app

WORKDIR /opt/app/src

RUN npm install --silent

CMD ["npm", "start"]
