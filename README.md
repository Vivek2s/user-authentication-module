
# Full Stack Application Setup

This repository contains the backend and frontend for a full-stack application. Follow the steps below to set up and run the application.

---

## Backend Setup

### Prerequisites

- Ensure MongoDB is installed and running. Start MongoDB with the following command only if running both frontend & backend separately:

  ```bash
  mongod --dbpath ~/data/db
  ```

### Steps

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the NestJS CLI globally:
   ```bash
   npm install -g @nestjs/cli
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file:
   ```bash
   touch .env
   ```

   Add the following environment variables to the `.env` file:

   ```env
   DATABASE_URI=mongodb://localhost:27017/auth-app
   JWT_SECRET=secret@123
   ALLOWED_ORIGIN=http://localhost:8080
   PORT=3000
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

---

## Frontend Setup

### Steps

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install the Vue CLI globally:
   ```bash
   npm install -g @vue/cli
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the frontend server:
   ```bash
   npm run serve
   ```

---

## Run Both Backend and Frontend Simultaneously

1. Navigate to the base directory of the project.

2. Run the following command:
   ```bash
   sudo docker-compose up --build
   ```
