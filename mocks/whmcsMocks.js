// mocks/whmcsMocks.js

const fetchClientDetails = (id) => {
  if (id === 1) {
    return { id, name: 'John Doe' }; // Mock response for valid client ID
  }
  return null; // Return null for invalid client ID
};

const createClient = (clientData) => {
  return { success: true }; // Mock response for client creation
};

const updateClient = (id, clientData) => {
  return { success: true }; // Mock response for client update
};

module.exports = {
  fetchClientDetails,
  createClient,
  updateClient
};