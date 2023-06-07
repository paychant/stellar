import app from '../src/@app';
import request from 'supertest';

describe('Ping', () => {
  let server;

  beforeEach(() => {
    server = app.listen(process.env.PORT);
  });

  afterEach(() => {
    server.close();
  });

  it('should return ledger object', async () => {
    const response = await request(app).get('/ping');
    expect(response.body[0]).toHaveProperty('id');
  });
});
