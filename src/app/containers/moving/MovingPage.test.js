var request = require('supertest');
var app = require('../../app');
var assert = require('assert');

describe('GET /api/customers', function() {
  it('responds with customers', function(done) {
    request(app)
      .get('/api/moving-nbn')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        assert.equal(res.body[0].name, 'visionmedia');
      })
      .end(done);
  });
});
