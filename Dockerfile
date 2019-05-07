FROM node:8

# Create app directory
WORKDIR /opt/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./opt/app

RUN npm cache clean --force && npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /opt/app

EXPOSE 1005

CMD [ "npm", "start" ]