const request = require('supertest');
const app = require('../index');

describe('Integration tests', () => {
  it('GET /health should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('OK');
  });

  it('POST /echo should return same body', async () => {
    const data = { name: 'John' };
    const res = await request(app).post('/echo').send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.body).toEqual(data);
  });
});
