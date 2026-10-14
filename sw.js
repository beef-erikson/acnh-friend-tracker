// Island Friends service worker: caches the app + villager images for offline use.
const CACHE = 'acnh-tracker-v3';
const CORE = ['./', './index.html', './data.js', './museum-data.js', './manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // let house renders & fonts hit the network
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      const fetched = fetch(e.request).then(res => {
        if (res && res.ok){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || fetched; // serve cached first (icons/photos), refresh in background
    })
  );
});
