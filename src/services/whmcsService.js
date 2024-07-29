const axios = require('axios');

const WHMCS_API_URL = process.env.WHMCS_API_URL;
const WHMCS_API_KEY = process.env.WHMCS_API_KEY;

const whmcsService = {
  fetchClientDetails: async (id) => {
    try {
      const response = await axios.get(`${WHMCS_API_URL}/client`, {
        headers: { 'Authorization': `Bearer ${WHMCS_API_KEY}` },
        params: { id },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching client details:', error);
      throw error;
    }
  },
  createClient: async (clientData) => {
    try {
      const response = await axios.post(`${WHMCS_API_URL}/client`, clientData, {
        headers: { 'Authorization': `Bearer ${WHMCS_API_KEY}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  },
  updateClient: async (id, clientData) => {
    try {
      const response = await axios.put(`${WHMCS_API_URL}/client`, { id, ...clientData }, {
        headers: { 'Authorization': `Bearer ${WHMCS_API_KEY}` },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating client:', error);
      throw error;
    }
  },
};

module.exports = whmcsService;