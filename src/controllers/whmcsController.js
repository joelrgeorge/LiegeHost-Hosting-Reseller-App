// whmcsController.js

const whmcsService = require('../services/whmcsService');
const mongoService = require('../services/mongoService');

exports.getClient = async (req, res) => {
  const { id } = req.query;
  try {
    console.log(`Fetching client details for ID ${id}`);
    const clientDetails = await whmcsService.fetchClientDetails(Number(id));
    if (clientDetails) {
      console.log('Client details fetched:', clientDetails);
      await mongoService.logResponse('whmcs', { action: 'getClient', id, clientDetails });
      res.status(200).json({ clientDetails });
    } else {
      console.warn('Client not found for ID', id);
      await mongoService.logResponse('whmcs', { action: 'getClient', id, error: 'Client not found' });
      res.status(404).send('Client not found');
    }
  } catch (error) {
    console.error('Error fetching client details:', error);
    await mongoService.logResponse('whmcs', { action: 'getClient', id, error: error.message });
    res.status(500).json({ error: error.message });
  }
};

exports.createClient = async (req, res) => {
  const clientData = req.body;
  try {
    console.log('Creating client with data:', clientData);
    const clientCreationStatus = await whmcsService.createClient(clientData);
    console.log('Client creation status:', clientCreationStatus);
    await mongoService.logResponse('whmcs', { action: 'createClient', clientData, clientCreationStatus });
    res.status(201).json({ clientCreationStatus });
  } catch (error) {
    console.error('Error creating client:', error);
    await mongoService.logResponse('whmcs', { action: 'createClient', clientData, error: error.message });
    res.status(500).json({ error: error.message });
  }
};

exports.updateClient = async (req, res) => {
  const { id, ...clientData } = req.body;
  try {
    console.log('Updating client with ID:', id, 'Data:', clientData);
    const clientUpdateStatus = await whmcsService.updateClient(id, clientData);
    console.log('Client update status:', clientUpdateStatus);
    await mongoService.logResponse('whmcs', { action: 'updateClient', id, clientData, clientUpdateStatus });
    res.status(200).json({ clientUpdateStatus });
  } catch (error) {
    console.error('Error updating client:', error);
    await mongoService.logResponse('whmcs', { action: 'updateClient', id, clientData, error: error.message });
    res.status(500).json({ error: error.message });
  }
};