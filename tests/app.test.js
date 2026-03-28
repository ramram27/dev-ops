const request = require('supertest');
const app = require('../index')


describe('math api', ()=>{

   test('POST /add should return sum', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 5, b: 3 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });
})