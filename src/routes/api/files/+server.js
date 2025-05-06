import { put } from '@vercel/blob';


export async function POST({ request, cookies }) {
    const formData = await request.formData();
    const data = formData.get('file');
    if (!data || data.name === 'undefined') {
        return fail(400, {
            error: true,
            message: 'You must provide a file to upload'
        });
    }
    const { url } = await put('data/' + data.name, data, { access: 'public' });
    return new Response(url, { status: 201 });
}
