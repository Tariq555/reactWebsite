# Stage 1: Build the React application
FROM node:latest as build

# Set the working directory in the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the React application using serve
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app/build .

# Expose the port that serve uses
EXPOSE 5000

# Serve the app on port 5000
CMD ["serve", "-s", ".", "-l", "5000"]
