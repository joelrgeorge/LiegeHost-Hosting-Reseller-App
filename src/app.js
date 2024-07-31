const express = require('express');
const app = express();
const whmcsRoutes = require('./routes/whmcsRoutes');
const enomRoutes = require('./routes/enomRoutes');

// Use mock services for testing
if (process.env.NODE_ENV === 'test') {
  const mockWhmcsService = require('./services/whmcsMockService');
  const mockEnomService = require('./services/enomMockService');
  
  // Override services in controllers
  const whmcsController = require('./controllers/whmcsController');
  const enomController = require('./controllers/enomController');
  
  whmcsController.whmcsService = mockWhmcsService;
  enomController.enomService = mockEnomService;
  
  console.log('Running in test environment, using mock services.');
} else {
  const whmcsService = require('./services/whmcsService');
  const enomService = require('./services/enomService');
  
  // Override services in controllers
  const whmcsController = require('./controllers/whmcsController');
  const enomController = require('./controllers/enomController');
  
  whmcsController.whmcsService = whmcsService;
  enomController.enomService = enomService;
}

app.use(express.json());
app.use('/whmcs', whmcsRoutes);
app.use('/enom', enomRoutes);

module.exports = app;