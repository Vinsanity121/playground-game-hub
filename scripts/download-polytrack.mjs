import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const release = '0.6.3';
const origin = `https://app-polytrack.kodub.com/${release}/`;
const output = path.resolve('games/polytrack');
const assetPattern = /["'`]((?:images|audio|fonts|models|data|lib|tracks)\/[^"'`\s]+?\.(?:svg|png|jpe?g|webp|gif|mp3|ogg|woff2?|json|wasm|glb|gltf|bin|track))["'`]/g;

await mkdir(output, { recursive: true });
const get = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`PolyTrack download failed: ${response.status} ${url}`);
  return response;
};
const save = async (relative, response) => {
  const clean = relative.replace(/^\.\//, '');
  const target = path.resolve(output, clean);
  if (!target.startsWith(output + path.sep)) throw new Error(`Unsafe asset path: ${relative}`);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, new Uint8Array(await response.arrayBuffer()));
};

const page = await (await get(origin + '?')).text();
const resources = new Set(['error_screen.bundle.js', 'main.bundle.js', 'manifest.json', 'forced_square.woff', 'lib/draco/draco_wasm_wrapper.js', 'lib/draco/draco_decoder.wasm']);
for (const match of page.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url = new URL(match[1], origin);
  if (url.origin === new URL(origin).origin && url.pathname.startsWith(new URL(origin).pathname)) {
    resources.add(decodeURIComponent(url.pathname.slice(new URL(origin).pathname.length)));
  }
}
const manifest = JSON.parse(await (await get(origin + 'manifest.json')).text());
for (const icon of manifest.icons ?? []) resources.add(icon.src);
const bundledAssets = [];
for (const bundle of ['error_screen.bundle.js', 'main.bundle.js']) {
  const source = await (await get(origin + bundle)).text();
  for (const match of source.matchAll(assetPattern)) bundledAssets.push(match[1]);
}
for (const asset of bundledAssets) resources.add(asset.replace(/^\.\//, ''));

const list = [...resources].filter(Boolean);
for (let offset = 0; offset < list.length; offset += 12) {
  await Promise.all(list.slice(offset, offset + 12).map(async (relative) => {
    const response = await get(new URL(relative, origin));
    await save(relative, response);
  }));
}

const indexPath = path.join(output, 'index.html');
let gamePage = await (await get(origin + '?')).text();
const config = '<script>window.polytrackModConfiguration = { unblocked: true };</script>';
gamePage = gamePage.replace('<script defer="defer" src="main.bundle.js"></script>', config + '<script defer="defer" src="main.bundle.js"></script>');
if (!gamePage.includes(config)) throw new Error('Could not add the required PolyTrack reupload configuration.');
await writeFile(indexPath, gamePage, 'utf8');
console.log(`Prepared PolyTrack ${release}: ${list.length} files`);
