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

// Fetch handler
self.addEventListener("fetch", event => {
  const request = event.request;

  // 🎵 If audio → cache dynamically
  if (request.destination === "audio") {
    event.respondWith(cacheAudio(request));
    return;
  }

  // 🌐 Normal files
  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request))
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
    return response;
  } catch (err) {
    return new Response("Offline and audio not cached", {
      status: 503,
      statusText: "Offline"
    });
  }
}
