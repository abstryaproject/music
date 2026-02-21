const CACHE_NAME = "halamaye-v3";

const APP_SHELL = [
  "/music/",
  "/music/index.html",
  "/music/css/style.css",
  "/music/js/app.js",
  "/music/js/data.js",
  "/music/js/anti-copy.js",
  "/music/assets/covers/halamaye-cover.png"
];

// ================= INSTALL =================
self.addEventListener("install", event => {
  console.log("SW: Installing...");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("SW: Caching app shell...");
        return cache.addAll(APP_SHELL);
      })
      .then(() => self.skipWaiting())
  );
});

// ================= ACTIVATE =================
self.addEventListener("activate", event => {
  console.log("SW: Activating...");
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log("SW: Removing old cache:", key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ================= FETCH =================
self.addEventListener("fetch", event => {
  const request = event.request;

  // 🎵 Audio → dynamic caching
  if (request.destination === "audio") {
    event.respondWith(cacheAudio(request));
    return;
  }

  // 🌐 Stale-While-Revalidate strategy
  event.respondWith(
    caches.match(request).then(cachedResponse => {

      const networkFetch = fetch(request)
        .then(response => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(request, response.clone()); // silent update
            return response;
          });
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkFetch;
    })
  );
});

// ================= AUDIO CACHE =================
async function cacheAudio(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) return cached;

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    console.log("SW: Audio cached:", request.url);
    return response;
  } catch {
    return new Response("Offline and audio not cached", {
      status: 503,
      statusText: "Offline"
    });
  }
}
