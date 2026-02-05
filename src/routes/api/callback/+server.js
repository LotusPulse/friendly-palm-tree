import { env } from '$env/dynamic/private';

export const GET = async ({ url }) => {
    const code = url.searchParams.get('code');
    const clientId = env.GITHUB_CLIENT_ID;
    const clientSecret = env.GITHUB_CLIENT_SECRET;

    const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code
        })
    });

    const data = await response.json();

    if (data.error) {
        return new Response(`Error: ${data.error_description}`, { status: 400 });
    }

    // HTML to send the token back to Decap CMS
    const html = `
    <!DOCTYPE html>
    <html>
    <head><title>Authenticating...</title></head>
    <body>
        <script>
            const receiveMessage = (e) => {
                if (e.origin !== window.location.origin) return;
                
                window.opener.postMessage(
                    'authorization:github:success:${JSON.stringify({
        token: data.access_token,
        provider: 'github'
    })}',
                    e.origin
                );
                window.removeEventListener('message', receiveMessage, false);
            };
            window.addEventListener('message', receiveMessage, false);
            window.opener.postMessage('authorizing:github', '*');
        </script>
    </body>
    </html>
    `;

    return new Response(html, {
        headers: { 'Content-Type': 'text/html' }
    });
};
