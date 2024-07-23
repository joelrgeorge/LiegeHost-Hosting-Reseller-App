// mocks/whmcsMocks.js

const fetchClientDetails = jest.fn((id) => {
  if (id === 1) {
    return { id, name: 'John Doe' }; // Mock response for valid client ID
  }
  return null; // Return null for invalid client ID
});

const createClient = jest.fn((clientData) => {
  return { success: true }; // Mock response for client creation
});

const updateClient = jest.fn((id, clientData) => {
  return { success: true }; // Mock response for client update
});

module.exports = {
  fetchClientDetails,
  createClient,
  updateClient,
};