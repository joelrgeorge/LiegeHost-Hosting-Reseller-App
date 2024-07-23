// src/routes/whmcsRoutes.js
const express = require('express');
const router = express.Router();
const whmcsController = require('../controllers/whmcsController');

router.get('/client', whmcsController.getClient);
router.post('/client', whmcsController.createClient);
router.put('/client', whmcsController.updateClient);

module.exports = router;