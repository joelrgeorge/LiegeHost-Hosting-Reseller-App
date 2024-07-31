const express = require('express');
const router = express.Router();
const whmcsController = require('../controllers/whmcsController');

// Define routes and corresponding controller methods
router.get('/client/:id', whmcsController.getClientDetails);
router.post('/client', whmcsController.createClient);
router.put('/client', whmcsController.updateClient);

module.exports = router;