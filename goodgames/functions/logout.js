import { COOKIE_NAME } from './_middleware.js';

export async function onRequestGet({ request }) {
  const login = new URL('/login.html', request.url);
  return new Response(null, {
    status: 303,
    headers: {
      Location: login,
      'Set-Cookie': `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`,
      'Cache-Control': 'no-store',
    },
  });
}

