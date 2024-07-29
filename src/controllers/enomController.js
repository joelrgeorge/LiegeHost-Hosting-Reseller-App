const enomService = process.env.NODE_ENV === 'test' ? require('../services/enomMockService') : require('../services/enomService');
const mongoService = require('../services/mongoService');

const fetchDomainInfo = async (req, res) => {
    const { name } = req.query;
    try {
        console.log(`Fetching domain info for ${name}`);
        const domainInfo = await enomService.fetchDomainInfo(name);
        console.log('Domain info fetched:', domainInfo);
        await mongoService.logResponse('enom', { action: 'fetchDomainInfo', name, domainInfo });
        res.json({ domainInfo });
    } catch (error) {
        console.error('Error fetching domain info:', error);
        await mongoService.logResponse('enom', { action: 'fetchDomainInfo', name, error: error.message });
        res.status(500).json({ error: error.message });
    }
};

const registerDomain = async (req, res) => {
    const { domain, email } = req.body;
    try {
        console.log(`Registering domain ${domain} for email ${email}`);
        const registrationStatus = await enomService.registerDomain(domain, email);
        console.log('Domain registration status:', registrationStatus);
        await mongoService.logResponse('enom', { action: 'registerDomain', domain, email, registrationStatus });
        res.json({ registrationStatus });
    } catch (error) {
        console.error('Error registering domain:', error);
        await mongoService.logResponse('enom', { action: 'registerDomain', domain, email, error: error.message });
        res.status(500).json({ error: error.message });
    }
};

const transferDomain = async (req, res) => {
    const { domain, email } = req.body;
    try {
        console.log(`Transferring domain ${domain} for email ${email}`);
        const transferStatus = await enomService.transferDomain(domain, email);
        console.log('Domain transfer status:', transferStatus);
        await mongoService.logResponse('enom', { action: 'transferDomain', domain, email, transferStatus });
        res.json({ transferStatus });
    } catch (error) {
        console.error('Error transferring domain:', error);
        await mongoService.logResponse('enom', { action: 'transferDomain', domain, email, error: error.message });
        res.status(500).json({ error: error.message });
    }
};

const handleEnomRequest = async (req, res) => {
    try {
        console.log('Handling generic ENOM request');
        const response = await enomService.makeRequest(req.body);
        await mongoService.logResponse('enom', response);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error handling ENOM request:', error);
        await mongoService.logResponse('enom', { error: error.message });
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    fetchDomainInfo,
    registerDomain,
    transferDomain,
    handleEnomRequest
};