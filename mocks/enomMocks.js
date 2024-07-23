// mocks/enomMocks.js

const fetchDomainInfo = async (domain) => {
  if (domain === 'example.com') {
    return { domainName: 'example.com', status: 'active' };
  }
  return undefined;
};

const registerDomain = async (domain, email) => {
  if (domain && email) {
    return { success: true };
  }
  return undefined;
};

const transferDomain = async (domain, email) => {
  if (domain && email) {
    return { success: true };
  }
  return undefined;
};

module.exports = { fetchDomainInfo, registerDomain, transferDomain };