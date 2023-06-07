import app from '../src/@app';
import request from 'supertest';

describe('Transaction', () => {
  let server;
  const postBody = {
    memo: `Memo - ${Math.floor(Math.random() * 100) + 1}`,
    amount: '1',
    to_acc: 'GDXMVIJPYWIEXHVUA2RZEVSHUK7374HUEZ3WBXJDO3JOBTQXYRHXNL5D',
    from_acc: process.env.ACC_ID,
    from_acc_secret: process.env.ACC_SECRET
  }

  beforeEach(() => {
    server = app.listen(process.env.PORT);
  });

  afterEach(() => {
    server.close();
  });

  it('should return submitted transaction result', async () => {
    const { body } = await request(app).post(`/tx-send-native-asset`).send(postBody);
    expect(body.memo).toEqual(postBody.memo);
  });
});
