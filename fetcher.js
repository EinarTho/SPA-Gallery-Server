const axios = require('axios');
require('dotenv').config();

const fetcher = async (q, page) => {
  const baseUrl = 'https://api.unsplash.com/search/photos/?query=';
  const url = `${baseUrl}${q}&page=${page}&client_id=${process.env.ACCESS_KEY}`
  const data = await axios.get(url);
  console.log(data);
  return data.data;
};

module.exports = fetcher