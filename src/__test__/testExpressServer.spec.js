const request = require('supertest');


describe('The server is up', () => {
    test('The server is up', async () => {
        const response = await request('http://localhost:8081').get('/');
        expect(response.statusCode).toBe(200);
    });
});

