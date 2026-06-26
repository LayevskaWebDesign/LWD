/* =========================================================
   Layevska Web Design — Service Worker
   Estrategia: cache-first para assets estáticos,
   network-first para HTML (para que siempre se vea el contenido más reciente).
   ========================================================= */

const CACHE_VERSION = 'layevska-v1';
const STATIC_CACHE = 'layevska-static-v1';
const RUNTIME_CACHE = 'layevska-runtime-v1';

// Recursos que se cachean en la instalación
const STATIC_ASSETS = [
  '/',
  '/03-Layevska-Interactiva.html',
  '/manifest.json',
  '/og-image.png',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/07-Errores-Layevska.pdf'
];

// ===== INSTALL =====
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      // Cachear cada asset uno por uno, ignorando los que fallen
      return Promise.all(
        STATIC_ASSETS.map(url =>
          cache.add(url).catch(err => console.log('SW: no se pudo cachear ' + url, err))
        )
      );
    })
  );
});

// ===== ACTIVATE — limpiar caches viejos =====
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ===== FETCH =====
self.addEventListener('fetch', event => {
  const request = event.request;

  // Solo GET
  if (request.method !== 'GET') return;
  // No interceptar requests externos (CDN, analytics, etc.)
  if (!request.url.startsWith(self.location.origin)) return;

  const isHTML = request.headers.get('accept') && request.headers.get('accept').includes('text/html');

  if (isHTML) {
    // HTML: network-first, fallback al cache
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match('/')))
    );
  } else {
    // Assets: cache-first
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') return response;
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => cache.put(request, responseClone));
          return response;
        });
      })
    );
  }
});
