import app from '../src/@app';
import request from 'supertest';

describe('Account', () => {
  let server;
  const acc_id = 'GDJF2J5YV6L3H5FEF5HPHUNNBZQBLZUWWVO6T2GIAG64SWQVMKBWW5QF';

  beforeEach(() => {
    server = app.listen(process.env.PORT);
  });

  afterEach(() => {
    server.close();
  });

  it('should return created account', async () => {
    const { body } = await request(app).post(`/acc-create`);
    expect(Object.keys(body)).toEqual(['accId', 'accSecret']);
  });

  it('should return account balance', async () => {
    const { body } = await request(app).get(`/acc-bal?acc=${acc_id}`);
    expect(body).toHaveProperty('balance');
  });

  it('should return account transactions', async () => {
    const { body } = await request(app).get(`/acc-txs?acc=${acc_id}`);
    expect(Object.keys(body.records)).not.toBeNull();
  });
});
