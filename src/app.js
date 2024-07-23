// src/app.js
const express = require('express');
const app = express();
const whmcsRoutes = require('./routes/whmcsRoutes');
const enomRoutes = require('./routes/enomRoutes');

app.use(express.json());
app.use('/whmcs', whmcsRoutes);
app.use('/enom', enomRoutes);

module.exports = app;