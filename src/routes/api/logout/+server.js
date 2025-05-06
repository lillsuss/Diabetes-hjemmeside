export async function POST({ cookies }) {
	// Clear the session cookie
	cookies.delete('session', { path: '/' });

	return new Response(JSON.stringify({ message: 'Logged out successfully' }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
