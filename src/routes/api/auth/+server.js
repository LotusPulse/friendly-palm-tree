import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET = async ({ url }) => {
    const clientId = env.GITHUB_CLIENT_ID;
    const scope = 'repo,user';
    const redirectUri = `${url.origin}/api/callback`;

    throw redirect(302, `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`);
};
