// services/enomMockService.js

const { fetchDomainInfo, registerDomain, transferDomain } = require('../../mocks/enomMocks');

const enomService = {
  fetchDomainInfo: async (domain) => {
    try {
      console.log(`enomService: Fetching domain info for ${domain}`);  // Debug log
      const response = await fetchDomainInfo(domain);
      console.log(`enomService: Fetched domain info: ${JSON.stringify(response)}`);  // Debug log
      return response;
    } catch (error) {
      console.error('Error fetching domain info:', error);
      return undefined;
    }
  },
  registerDomain: async (domain, email) => {
    try {
      return await registerDomain(domain, email);
    } catch (error) {
      console.error('Error registering domain:', error);
      return undefined;
    }
  },
  transferDomain: async (domain, email) => {
    try {
      return await transferDomain(domain, email);
    } catch (error) {
      console.error('Error transferring domain:', error);
      return undefined;
    }
  }
};

module.exports = enomService;