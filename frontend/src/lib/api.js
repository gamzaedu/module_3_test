import axios from 'axios';
import { API_BASE_URL, API_VERSION } from './constants';

// Create axios instance
const api = axios.create({
  baseURL: `${API_BASE_URL}${API_VERSION}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add JWT token if available (Feature 3)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Extract data from response
    return response.data;
  },
  (error) => {
    // Handle errors
    const errorMessage = error.response?.data?.message || error.message || 'An error occurred';

    if (error.response) {
      // Server responded with error status
      console.error('API Error:', {
        status: error.response.status,
        message: errorMessage,
        url: error.config?.url,
      });
    } else if (error.request) {
      // Request was made but no response
      console.error('Network Error:', errorMessage);
    } else {
      // Something else happened
      console.error('Error:', errorMessage);
    }

    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

export { api };
export default api;
