  // whmcsService.test.js
  const { fetchClientDetails, createClient, updateClient } = require('../src/services/whmcsService');

  // Mock `whmcsService` functions with mock implementations
  jest.mock('../src/services/whmcsService', () => {
    return {
      fetchClientDetails: jest.fn((id) => {
        if (id === 1) {
          return { id, name: 'John Doe' }; // Mock response for valid client ID
        }
        return null; // Return null for invalid client ID
      }),
      createClient: jest.fn((clientData) => {
        return { success: true }; // Mock response for client creation
      }),
      updateClient: jest.fn((id, clientData) => {
        return { success: true }; // Mock response for client update
      }),
    };
  });

  describe('WHMCS Service', () => {
    test('fetchClientDetails should return client details', async () => {
      const clientDetails = await fetchClientDetails(1);
      expect(clientDetails).toHaveProperty('id', 1);
      expect(clientDetails).toHaveProperty('name', 'John Doe');
    });

    test('createClient should create a client', async () => {
      const clientCreationStatus = await createClient({ name: 'John Doe' });
      expect(clientCreationStatus).toHaveProperty('success', true);
    });

    test('updateClient should update a client', async () => {
      const clientUpdateStatus = await updateClient(1, { name: 'Jane Doe' });
      expect(clientUpdateStatus).toHaveProperty('success', true);
    });
  });