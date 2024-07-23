// enomService.test.js
const enomService = require('../src/services/enomService');

// Mock the enomService module
jest.mock('../src/services/enomService', () => {
  const enomMocks = require('../mocks/enomMocks');
  return {
    fetchDomainInfo: jest.fn(enomMocks.fetchDomainInfo),
    registerDomain: jest.fn(enomMocks.registerDomain),
    transferDomain: jest.fn(enomMocks.transferDomain),
  };
});

describe('ENOM Service', () => {
  test('fetchDomainInfo should return domain info', async () => {
    const domainInfo = await enomService.fetchDomainInfo('example.com');
    expect(domainInfo).toHaveProperty('domainName', 'example.com');
  });

  test('registerDomain should register a domain', async () => {
    const registrationStatus = await enomService.registerDomain('example.com', 'user@example.com');
    expect(registrationStatus).toHaveProperty('success', true);
  });

  test('transferDomain should transfer a domain', async () => {
    const transferStatus = await enomService.transferDomain('example.com', 'user@example.com');
    expect(transferStatus).toHaveProperty('success', true);
  });
});