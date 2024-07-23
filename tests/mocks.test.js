// tests/mocks.test.js
const { enomMocks, whmcsMocks } = require('../mocks');

describe('Mocks', () => {
  test('enomMocks.fetchDomainInfo should be a function', () => {
    expect(typeof enomMocks.fetchDomainInfo).toBe('function');
  });

  test('whmcsMocks.fetchClientDetails should be a function', () => {
    expect(typeof whmcsMocks.fetchClientDetails).toBe('function');
  });
});