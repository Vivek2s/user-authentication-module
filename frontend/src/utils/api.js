// src/utils/api.js
import axios from "axios";

// Create an axios instance with a base URL from environment variables
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
 
export default apiClient;
