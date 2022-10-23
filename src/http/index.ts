import axios from 'axios';

export const API_URL = 'https://www.googleapis.com/books';

const $api = axios.create({
  baseURL: API_URL
});

export default $api;