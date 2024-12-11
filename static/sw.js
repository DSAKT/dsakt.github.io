const cacheName = 'todo-{{ now.Format "2006-01-02" }}';
const staticAssets = [
    './',
    './index.html',
    './manifest.json',
    './docs/**/*',
    './favicon/favicon.png',
    './favicon/favicon.png',
    './favicon/favicon.png',
    './favicon/favicon.png',
    './favicon/favicon.png',
    './favicon/favicon.png',
    './css/home.min.*.css',
    './css/docs.min.*.css',
    './js/home.min.*.js',
    './js/docs.min.*.js',
];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}