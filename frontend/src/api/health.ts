import axios from 'axios';
import { getBaseUrl } from '../config/env';

const baseUrl = getBaseUrl();

export const checkHealth = async () => {
  try {
    const response = await axios.get(`${baseUrl}/health`);
    return response.data;
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
};
