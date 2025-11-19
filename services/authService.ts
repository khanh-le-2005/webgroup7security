import axios from 'axios';
import { LoginResponse, User } from '../types';

// In a real app, you would configure axios with a base URL
const api = axios.create({
  baseURL: 'https://api.example.com/v1', // Placeholder
});

// Mock database for demonstration
const MOCK_ADMIN: User = {
  id: '1',
  email: 'admin@gmail.com',
  name: 'Administrator',
  role: 'admin',
};

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    // Simulate API latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock validation
    if (email === 'admin@gmail.com' && password === '123456') {
      return {
        token: 'mock-jwt-token-123456',
        user: MOCK_ADMIN,
      };
    }

    throw new Error('Thông tin đăng nhập không chính xác');
  },

  register: async (email: string, password: string, name: string): Promise<LoginResponse> => {
    // Simulate API latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return a mock new user
    return {
      token: 'mock-jwt-token-new-user',
      user: {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        role: 'user',
      },
    };
  },
  
  // Example of a real axios call structure (unused in mock but shows intent)
  fetchProfile: async (token: string) => {
    return api.get('/profile', {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
};