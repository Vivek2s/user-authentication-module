# Full Stack Application Setup

This repository contains the backend and frontend for a full-stack application. Follow the steps below to set up and run the application.

---

## Backend Setup

### Prerequisites

- Ensure MongoDB is installed and running. Start MongoDB with the following command if running both frontend & backend separately:

  ```bash
  mongod --dbpath ~/data/db


Steps
Navigate to the backend directory:

bash
Copy code
cd backend
Install the NestJS CLI globally:

bash
Copy code
npm install -g @nestjs/cli
Install dependencies:

bash
Copy code
npm install
Create a .env file:

bash
Copy code
touch .env
Add the following environment variables to the .env file:

env
Copy code
DATABASE_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=secret@123
ALLOWED_ORIGIN=http://localhost:8080
PORT=3000
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Steps
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the Vue CLI globally:

bash
Copy code
npm install -g @vue/cli
Install dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm run serve
Running Backend and Frontend Together
Steps
At the root directory of the project, run the following command to build and start both services using Docker Compose:

bash
Copy code
sudo docker-compose up --build