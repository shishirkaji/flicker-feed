FROM node:14-alpine
WORKDIR /server
COPY package*.json /server/
RUN npm ci --only=production && npm cache clean --force
COPY . /server/
CMD npm run server
EXPOSE 9999
