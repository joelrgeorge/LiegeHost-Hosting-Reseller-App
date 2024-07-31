const request = require('supertest'); // Add this import
const app = require('../src/app'); // Ensure this path is correct

// Ensure the environment is set to test
process.env.NODE_ENV = 'test';

describe('WHMCS Service API', () => {
  test('GET /whmcs/client/:id should return client details', async () => {
    const response = await request(app).get('/whmcs/client/1'); // Correct path with parameter
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('clientDetails');
  }, 10000);

  test('POST /whmcs/client should create a client', async () => {
    const response = await request(app)
      .post('/whmcs/client')
      .send({ name: 'John Doe' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('clientCreationStatus');
  }, 10000);

  test('PUT /whmcs/client should update a client', async () => {
    const response = await request(app)
      .put('/whmcs/client')
      .send({ id: 1, name: 'Jane Doe' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('clientUpdateStatus');
  }, 10000);
});

describe('ENOM Service API', () => {
  test('GET /enom/domain should return domain info', async () => {
    const response = await request(app).get('/enom/domain?name=example.com');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('domainInfo');
  }, 10000); // Increase timeout to 10000 ms

  test('POST /enom/register should register a domain', async () => {
    const response = await request(app)
      .post('/enom/register')
      .send({ domain: 'example.com', email: 'user@example.com' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('registrationStatus');
  }, 10000); // Increase timeout to 10000 ms

  test('POST /enom/transfer should transfer a domain', async () => {
    const response = await request(app)
      .post('/enom/transfer')
      .send({ domain: 'example.com', email: 'user@example.com' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('transferStatus');
  }, 10000); // Increase timeout to 10000 ms
});