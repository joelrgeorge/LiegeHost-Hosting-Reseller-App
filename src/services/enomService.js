const axios = require('axios');

const ENOM_API_URL = process.env.ENOM_API_URL;
const ENOM_API_KEY = process.env.ENOM_API_KEY;
const ENOM_API_USERNAME = process.env.ENOM_API_USERNAME;

const enomService = {
  fetchDomainInfo: async (name) => {
    try {
      const response = await axios.get(`${ENOM_API_URL}/domain`, {
        headers: { 'Authorization': `Bearer ${ENOM_API_KEY}` },
        params: { name, username: ENOM_API_USERNAME },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching domain info:', error);
      throw error;
    }
  },
  registerDomain: async (domain, email) => {
    try {
      const response = await axios.post(`${ENOM_API_URL}/register`, { domain, email }, {
        headers: { 'Authorization': `Bearer ${ENOM_API_KEY}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error registering domain:', error);
      throw error;
    }
  },
  transferDomain: async (domain, email) => {
    try {
      const response = await axios.post(`${ENOM_API_URL}/transfer`, { domain, email }, {
        headers: { 'Authorization': `Bearer ${ENOM_API_KEY}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error transferring domain:', error);
      throw error;
    }
  },
  makeRequest: async (body) => {
    try {
      const response = await axios.post(`${ENOM_API_URL}/generic`, body, {
        headers: { 'Authorization': `Bearer ${ENOM_API_KEY}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error making ENOM request:', error);
      throw error;
    }
  },
};

module.exports = enomService;