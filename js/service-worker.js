const CACHE_NAME = "hala-maye-v1";
const urlsToCache = [
  "/music/",
  "/music/index.html",
  "/music/style.css",
  "/music/script.js",
  "/music/halamaye-cover.png"
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

