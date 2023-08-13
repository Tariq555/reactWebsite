# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app will listen on
EXPOSE 3000

# Command to run your application using npm start
CMD ["npm", "start"]
