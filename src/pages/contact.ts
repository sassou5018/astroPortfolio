import type { APIRoute } from 'astro'
import sendEmail from '../utils/nodeMailer'
export const post: APIRoute = async ({ request }) => {
    const body = await request.json()
    console.log(body)
    try {
        await sendEmail({
            from: body.email,
            text: body.message,
        })
    } catch (e) {
        console.log(e)
        return new Response(JSON.stringify({ message: 'error' }), {
            headers: {
                'content-type': 'application/json',
            },
            status: 500,
        })
    }
    return new Response(JSON.stringify({ message: 'ok' }), {
        headers: {
            'content-type': 'application/json',
        },
        status: 200,
    })
}
