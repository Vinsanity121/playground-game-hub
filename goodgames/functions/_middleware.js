const encoder = new TextEncoder();
const COOKIE_NAME = 'goodgames_session';
const SESSION_SECONDS = 60 * 60 * 12;

function encodeBase64Url(bytes) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function decodeBase64Url(value) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(base64 + '='.repeat((4 - (base64.length % 4)) % 4));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function sessionKey(secret) {
  return crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
}

async function hasValidSession(request, secret) {
  const cookies = request.headers.get('Cookie') || '';
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;

  const [payload, signature, extra] = match[1].split('.');
  if (!payload || !signature || extra) return false;

  try {
    const key = await sessionKey(secret);
    const verified = await crypto.subtle.verify('HMAC', key, decodeBase64Url(signature), encoder.encode(payload));
    if (!verified) return false;
    const data = JSON.parse(new TextDecoder().decode(decodeBase64Url(payload)));
    return Number.isSafeInteger(data.exp) && data.exp > Date.now();
  } catch {
    return false;
  }
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  if (url.pathname === '/login.html' || url.pathname === '/auth' || url.pathname === '/logout') return next();

  if (!env.SITE_ACCESS_CODE || !env.SESSION_SECRET) {
    return new Response('Site access is not configured. Add SITE_ACCESS_CODE and SESSION_SECRET in Cloudflare Pages settings.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }

  if (await hasValidSession(request, env.SESSION_SECRET)) return next();

  const target = url.pathname + url.search;
  const login = new URL('/login.html', url.origin);
  if (target !== '/') login.searchParams.set('next', target);
  return Response.redirect(login, 302);
}

export { COOKIE_NAME, SESSION_SECONDS, encodeBase64Url, encoder };

