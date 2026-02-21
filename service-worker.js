const CACHE_NAME = "halamaye";
const urlsToCache = [
  "/music/",
  "/music/index.html",
  "/music/css/style.css",
  "/music/js/app.js",
  "/music/js/anti-copy.js",
  "/music/js/data.js",
  "/music/assets/covers/halamaye-cover.png"
];

// Install → cache static assets
self.addEventListener("install", event => {
  console.log("Service Worker: Installing and caching static assets...");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate → take control immediately
self.addEventListener("activate", event => {
  console.log("Service Worker: Activated");
  event.waitUntil(self.clients.claim());
});

// Fetch → serve from cache or network
self.addEventListener("fetch", event => {
  const request = event.request;

  // 🎵 If audio → cache dynamically
  if (request.destination === "audio") {
    event.respondWith(cacheAudio(request));
    return;
  }

  // 🌐 Normal files → cache-first
  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request))
      .catch(() => {
        // Optional: fallback for offline page
        if (request.destination === "document") {
          return caches.match("/music/index.html");
        }
      })
  );
});

// 🎵 Audio caching strategy
async function cacheAudio(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) return cached;

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    console.log("Audio cached for offline:", request.url);
    return response;
  } catch (err) {
    return new Response("Offline and audio not cached", {
      status: 503,
      statusText: "Offline"
    });
  }
}
