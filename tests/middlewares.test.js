const request = require("supertest");
const express = require('express');
const axios = require('axios');

const app = express();

describe('CI test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1)
  })

  test('Should return router endpoint json', async () => {
    app.get('/api/time', (req, res)=>{
      res.json('')
    })
    await request(app)
      .get('/api/time')
      .expect('content-type', /json/)
  })

  test('Should return router endpoint json', async () => {
    app.put('/api/time', (req, res)=>{
      res.json('')
    })
    await request(app)
      .put('/api/time')
      .expect('content-type', /json/)
  })

})