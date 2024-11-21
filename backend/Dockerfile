# Step 1: Use Node.js image as base
FROM node:23.1.0

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available) from the backend directory
COPY backend/package*.json ./

# Step 4: Install global dependencies and backend dependencies
RUN npm install

# Step 5: Copy the backend source files into the container
COPY backend/ .

# Step 7: Expose the application port
EXPOSE 3000

# Step 8: Start the NestJS application
CMD ["npm", "start"]
