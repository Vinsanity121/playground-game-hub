import { COOKIE_NAME, SESSION_SECONDS, encodeBase64Url, encoder } from './_middleware.js';

async function createSessionToken(secret) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const payload = encodeBase64Url(encoder.encode(JSON.stringify({ exp: Date.now() + SESSION_SECONDS * 1000 })));
  const signature = new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(payload)));
  return `${payload}.${encodeBase64Url(signature)}`;
}

function safeReturnPath(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || value.includes('\\')) return '/';
  return value;
}

function constantTimeEquals(left, right) {
  const length = Math.max(left.length, right.length);
  let difference = left.length ^ right.length;
  for (let index = 0; index < length; index += 1) {
    difference |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }
  return difference === 0;
}

export async function onRequestPost({ request, env }) {
  if (!env.SITE_ACCESS_CODE || !env.SESSION_SECRET) {
    return new Response('Site access is not configured.', { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return new Response('Invalid request.', { status: 400, headers: { 'Cache-Control': 'no-store' } });
  }

  const submittedCode = form.get('code');
  if (typeof submittedCode !== 'string' || submittedCode.length > 64 || !constantTimeEquals(submittedCode, env.SITE_ACCESS_CODE)) {
    const url = new URL('/login.html?error=1', request.url);
    const next = safeReturnPath(new URL(request.url).searchParams.get('next'));
    if (next !== '/') url.searchParams.set('next', next);
    return Response.redirect(url, 303);
  }

  const next = safeReturnPath(new URL(request.url).searchParams.get('next'));
  const token = await createSessionToken(env.SESSION_SECRET);
  return new Response(null, {
    status: 303,
    headers: {
      Location: next,
      'Set-Cookie': `${COOKIE_NAME}=${token}; Path=/; Max-Age=${SESSION_SECONDS}; HttpOnly; Secure; SameSite=Strict`,
      'Cache-Control': 'no-store',
      'Referrer-Policy': 'no-referrer',
    },
  });
}

