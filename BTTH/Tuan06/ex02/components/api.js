import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://68d2c903cc7017eec5452e4e.mockapi.io',
  timeout: 10000,
});

export async function getProductById(id) {
  const res = await api.get(`/products/${id}`);
  return res.data;
}
