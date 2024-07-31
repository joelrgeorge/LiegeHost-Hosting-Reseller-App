// src/services/whmcsMockService.js
const { fetchClientDetails, createClient, updateClient } = require('../../mocks/whmcsMocks');

const whmcsService = {
  fetchClientDetails: async (id) => {
    try {
      return await fetchClientDetails(id);
    } catch (error) {
      console.error('Error fetching client details:', error);
      return undefined;
    }
  },
  createClient: async (clientData) => {
    try {
      return await createClient(clientData);
    } catch (error) {
      console.error('Error creating client:', error);
      return undefined;
    }
  },
  updateClient: async (id, clientData) => {
    try {
      return await updateClient(id, clientData);
    } catch (error) {
      console.error('Error updating client:', error);
      return undefined;
    }
  }
};

module.exports = whmcsService;