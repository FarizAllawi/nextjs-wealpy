# Base image
<<<<<<< HEAD
FROM node:18.15.0

# Create & set working directory
RUN mkdir -p /app

#Run apk
WORKDIR /app

# copy source files
COPY . /app
=======
FROM node:18-alpine
ENV NODE_ENV=production

# Set the working directory inside the container
RUN mkdir -p /nextjs-wealpy
WORKDIR /nextjs-wealpy

# Copy the entire project to the working directory
COPY . .
>>>>>>> feature/auth

# install dependencies
RUN npm install

<<<<<<< HEAD
# start app
RUN npm run build
EXPOSE 3000
CMD npm run start
=======
# Build the Next.js application for production
RUN npm run build

# Expose the container port (change the port number if necessary)
EXPOSE 3001

# Start the Next.js server
CMD ["npm", "start"]
>>>>>>> feature/auth
