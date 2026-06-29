/* =============================================
   sw.js — Service Worker (PWA Offline Cache)
   ============================================= */

const CACHE_NAME = 'united-education-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/base.css',
  '/css/header.css',
  '/css/hero.css',
  '/css/services.css',
  '/css/universities.css',
  '/css/team.css',
  '/css/contact.css',
  '/css/footer.css',
  '/css/responsive.css',
  '/js/main.js',
  '/manifest.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
