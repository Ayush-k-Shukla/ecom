import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('admin')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('admin')).token
    }`;
  }
  return req;
});

export const getProducts = () => API.get(`/products`);
export const createProduct = (newProduct) => API.post(`/products`, newProduct);

//admin
export const signIn = (formData) => API.post(`/admin/signin`, formData);
export const signUp = (formData) => API.post(`/admin/signup`, formData);
