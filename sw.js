const CACHE_NAME = 'scientific-calculator-v20250919-2355';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event with network-first strategy
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // If successful, add to cache
        return caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(event.request, response.clone());
            return response;
          });
      })
      .catch(function() {
        // If network fails, return from cache
        return caches.match(event.request);
      })
  );
});
