import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createUsers`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/updateUser/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/deleteUser/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};