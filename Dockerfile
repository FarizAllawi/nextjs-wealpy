FROM node:18-alpine
ENV NODE_ENV=production

# Set the working directory inside the container
RUN mkdir -p /nextjs-wealpy
WORKDIR /nextjs-wealpy

# Copy the entire project to the working directory
COPY . .

# install dependencies
RUN npm install

# Build the Next.js application for production
RUN npm run build

# Expose the container port (change the port number if necessary)
EXPOSE 3001

# Start the Next.js server
CMD ["npm", "start"]
