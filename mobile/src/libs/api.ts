import axios from 'axios';

export const api = axios.create({
  // Change localhost to your ip address
  baseURL: 'http://localhost:3333',
});
