const CACHE = 'mlo-v2';

const PRECACHE = [
  '/',
  '/o-szkole',
  '/profile',
  '/rekrutacja',
  '/matura',
  '/kontakt',
  '/kalendarz',
  '/podreczniki',
  '/favicon.svg',
  '/logo-mlo.svg',
  '/og-image.jpg',
];

// Install — precache key pages
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — Network First for pages, Cache First for assets
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  if (request.mode === 'navigate') {
    // Pages: Network first, fallback to cache
    e.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request))
    );
  } else {
    // Assets: Cache first
    e.respondWith(
      caches.match(request).then(cached => cached ||
        fetch(request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
          return res;
        })
      )
    );
  }
});
