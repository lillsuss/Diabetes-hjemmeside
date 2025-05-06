import { db } from '$lib/server/db';
import { diaryPost } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const userId = request.user.id;
	const { title, content } = await request.json(); // Get the title and content from the request body

	// Insert the new diary post into the database
	const newPosts = await db
		.insert(diaryPost)
		.values({
			user_id: userId, // Use the user ID from the request
			title,
			content
		})
		.returning(); // Return the newly created post

	return json(newPosts[0], { status: 201 }); // Return the newly created post with a 201 status code
}

export async function GET({ request }) {
	const userId = request.user.id;

	// Fetch all diary posts for the user from the database
	const posts = await db.query.diaryPost.findMany({
		where: eq(diaryPost.user_id, userId) // Filter by user ID
	});
	return json(posts); // Return the posts as JSON
}
