import request from 'supertest';
import App from '../app/App.js';

describe('Auth API', () => {
	it('should register a new user', async () => {
		const response = await request(new App().getApp())
			.post('/auth/register')
			.send({ username: 'testuser', email: 'testuser@example.com', password: 'password' });
		expect(response.statusCode).toBe(201);
		expect(response.body).toHaveProperty('message', 'User registered successfully');
	});

	it('should login a user', async () => {
		const response = await request(new App().getApp())
			.post('/auth/login')
			.send({ email: 'testuser@example.com', password: 'password' });
		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('token');
	});
});
