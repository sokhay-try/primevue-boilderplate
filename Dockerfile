FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Remove the existing node_modules (if any)
RUN rm -rf node_modules

# Install project dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port that your Vue.js application will run on (adjust as needed)
EXPOSE 5173

# Specify that /usr/src/app should be a volume
VOLUME /app

# Command to start your Vue.js application
# CMD ["yarn", "dev", "--host", "0.0.0.0", "--port", "5173"]
CMD ["yarn", "dev"]
