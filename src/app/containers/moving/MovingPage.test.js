var request = require('supertest');
var app = require('../../../../server/server');
var assert = require('assert');

describe('GET get moving page', function() {
  it('responds with moving page', function(done) {
    request(app)
      .get('/moving-nbn')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
