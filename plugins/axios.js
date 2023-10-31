import axios from 'axios';

const instance = axios.create({
  baseURL: '/.netlify/functions/', // Relative path to your Netlify functions
});

export default instance;
