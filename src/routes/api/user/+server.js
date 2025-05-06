import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema.js';
import bcrypt from 'bcryptjs';

export async function POST({ request }) {
	const { username, password } = await request.json();
	const hashedPass = await bcrypt.hash(password, 10); // Hash the password with bcrypt
	const createduser = await db.insert(user).values({ username, password: hashedPass }).returning();
	return new Response(JSON.stringify(createduser), { status: 201 }); // HTTP Created
}
export async function GET({ request }) {
	const allUsers = await db.select().from(user).execute();
	return new Response(JSON.stringify(allUsers), { status: 200 }); // HTTP OK
}
