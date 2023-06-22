# Base image
FROM node:18.15.0

# Create & set working directory
RUN mkdir -p /app

#Run apk
WORKDIR /app

# copy source files
COPY . /app

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start