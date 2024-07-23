// enomRoutes.js

const express = require('express');
const { fetchDomainInfo, registerDomain, transferDomain } = require('../controllers/enomController');

const router = express.Router();

router.get('/domain', fetchDomainInfo);
router.post('/register', registerDomain);
router.post('/transfer', transferDomain);

module.exports = router;