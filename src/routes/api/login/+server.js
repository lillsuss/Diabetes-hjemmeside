import bcrypt from 'bcryptjs';
import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

export async function POST({ request, cookies }) {
	const { username, password } = await request.json();
	const userData = await db.query.user.findFirst({
		where: eq(user.username, username) // Find the user by username
	}); // Find the user by username
	if (!userData) {
		// No user found
		return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
	}
	const isPasswordValid = await bcrypt.compare(password, userData.password);

	if (!isPasswordValid) {
		// Password is incorrect
		return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
	}
	// Generate a session token, that the user can not tamper with
	const token = jwt.sign({ id: userData.id, username: username }, env.JWT_SECRET, {
		expiresIn: '1h'
	}); // 1 hour expiration
	// Set the session cookie with the token
	cookies.set('session', token, { path: '/', httpOnly: true, maxAge: 60 * 60 }); // 1 hour
	return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
}
