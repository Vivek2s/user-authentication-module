import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend URL

// Sign up method
export const signup = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/auth/signup`, {
    name,
    email,
    password,
  });
  return response.data;
};

// Sign in method
export const signin = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/signin`, {
    email,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem('userToken', response.data.accessToken); // Store JWT token
  }
  return response.data;
};

// Get user profile method
export const getProfile = async () => {
  const token = localStorage.getItem('userToken');
  const response = await axios.get(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Logout method
export const logout = () => {
  localStorage.removeItem('userToken');
};
