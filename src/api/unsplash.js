import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID BPKcZIt1trbxu-DHvayau81XOIPSc1nPzQ5YbQafybo',
  },
});