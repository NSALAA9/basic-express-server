'use strict';
const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

// describe('Express Server', () => {
//   it('should respond with 404 error on a bad route', async () => {
//     const response = await request.get('/invalid-route');
//     expect(response.status).toEqual(404);
//   });

describe('Server test', () => {
  it('Handel not found pages', async () => {
    const res = await request.get('/items');
    expect(res.status).toEqual(404);
  })
  it('should respond with 404 error on a bad method', async () => {
    const response = await request.post('/person');
    expect(response.status).toBe(404);
  });

  it('Handle errors', async () => {
    const res = await request.get('/bad');
    expect(res.status).toEqual(500);
    expect(res.body.route).toEqual('/bad');

  });
});