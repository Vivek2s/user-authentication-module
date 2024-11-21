# Step 1: Use Node.js image as base
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY frontend/package*.json ./

RUN npm install
# Step 5: Install Vue CLI globally
RUN npm install -g @vue/cli

# Step 6: Copy frontend source files into the container
COPY frontend/ .

# Step 7: Build Vue files
RUN npm run build

# Step 8: Expose the port (adjust the port if necessary)
EXPOSE 8080

# Step 9: Start the frontend
CMD ["npm", "run", "serve"]