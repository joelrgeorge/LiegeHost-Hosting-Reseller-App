// tests/config.test.js

require('dotenv').config(); // Ensure this line is at the top

const { ENOM_API_URL, ENOM_API_KEY, ENOM_API_USERNAME, WHMCS_API_URL, WHMCS_API_KEY } = process.env;

describe('Configuration', () => {
  test('ENOM API URL should be set', () => {
    expect(ENOM_API_URL).toBeTruthy();
  });

  test('ENOM API Key should be set', () => {
    expect(ENOM_API_KEY).toBeTruthy();
  });

  test('ENOM API Username should be set', () => {
    expect(ENOM_API_USERNAME).toBeTruthy();
  });

  test('WHMCS API URL should be set', () => {
    expect(WHMCS_API_URL).toBeTruthy();
  });

  test('WHMCS API Key should be set', () => {
    expect(WHMCS_API_KEY).toBeTruthy();
  });
});