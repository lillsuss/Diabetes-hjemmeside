import { env } from '$env/dynamic/private'; // Import environment variables
import jwt from 'jsonwebtoken'; // Import JWT library

export async function handle({ event, resolve }) {
	console.log(event.url.pathname);
	const token = event.cookies.get('session');
	if (['/', '/login', '/api/login', '/api/user'].includes(event.url.pathname)) {
		return await resolve(event);
	}
	if (token) {
		try {
			// Verify the token and extract user information
			const decoded = jwt.verify(token, env.JWT_SECRET);
			event.request.user = decoded; // Store user information in locals for later use
			return await resolve(event); // Proceed to the requested route
		} catch (err) {
			console.error('Token verification failed:', err);
		}
	}
	//Reject the request if the token is not present or invalid
	return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
}
