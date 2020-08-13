import request from 'supertest';
import app from '../../../app';


describe("GET /users", () => {
  it('should get all users', () => {
    return request(app).get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});
