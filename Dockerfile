# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .


# Expose the port your app will run on
EXPOSE 3000

# Define the command to start your app
CMD ["npm", "start"]
