const CACHE_NAME = "halamaye";
const urlsToCache = [
  "/music/",
  "/music/index.html",
  "/music/css/style.css",
  "/music/js/app.js",
  "/music/js/anti-copy.js",
  "/music/js/data.js",
  "/misic/js/data.js",
  "/music/assets/covers/halamaye-cover.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

