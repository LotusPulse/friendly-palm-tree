import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, platform }) => {
    // In Cloudflare, env vars are in platform.env
    // In local dev, they might be in process.env or via $env/dynamic/private
    const clientId = platform?.env?.GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;

    if (!clientId) {
        return new Response('GITHUB_CLIENT_ID is not configured in Cloudflare Environment Variables', { status: 500 });
    }

    const scope = 'repo,user';
    const redirectUri = `${url.origin}/api/callback`;

    throw redirect(302, `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`);
};
