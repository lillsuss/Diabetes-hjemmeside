import { db } from '$lib/server/db'; // Import the database connection
import { user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export async function GET({ params }) {
	const { id } = params; // Extract the user ID from the request parameters
	const userData = await db.query.user.findFirst({
		where: eq(user.id, id) // Find the user by ID
	});
	if (userData.length === 0) {
		return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 }); // HTTP Not Found
	}
	return new Response(JSON.stringify(userData), { status: 200 }); // HTTP OK
}
