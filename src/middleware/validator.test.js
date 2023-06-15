'use strict'
const supertest = require('supertest');

const {app} = require('../server');
const req = supertest(app);
describe('validator test', () => {
    it('handle name', async () => {
      const res = await req.get('/person?name=Alaa');
      expect (res.body).toEqual({name: `Alaa`})
      expect(res.status).toEqual(200);
    })
    it('Empty', async () => {
        
          const res = await req.get('/person?name= ');
          expect(res.status).toEqual(500);
        })
        // it('Specific name', async () => {
            
        //       const res = await req.get('/person?name=55');
        //       console.log(res)
        //       expect(res.status).toEqual(500);
        // })
})