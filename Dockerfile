# pull official base image
FROM node:13.12.0-alpine

# set working directory

ENV NODE_ENV=production

ADD . /src
WORKDIR /src

# install app dependencies
#COPY package.json ./
#COPY package-lock.json ./


# add app
COPY . ./
RUN npm install --production

# start app
CMD ["npm", "start"]