const CACHE_NAME = "halamaye-v4";

// 🎯 App Shell (UI)
const APP_SHELL = [
  "/music/",
  "/music/index.html",
  "/music/css/style.css",
  "/music/js/app.js",
  "/music/js/data.js",
  "/music/js/anti-copy.js",
  "/music/assets/covers/halamaye-cover.png"
];

// 🎵 Pre-cached songs
const PRECACHE_AUDIO = [
  "/music/assets/audio/angon_sakina.mp3",
  "/music/assets/audio/gdss_lailaba.mp3"
];

// ================= INSTALL =================
self.addEventListener("install", event => {
  console.log("SW: Installing & pre-caching...");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      Promise.all([
        cache.addAll(APP_SHELL),
        cache.addAll(PRECACHE_AUDIO)
      ])
    ).then(() => self.skipWaiting())
  );
});

// ================= ACTIVATE =================
self.addEventListener("activate", event => {
  console.log("SW: Activating...");
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
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

  // 🌐 Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then(cached => {

      const networkFetch = fetch(request)
        .then(response =>
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, response.clone());
            return response;
          })
        )
        .catch(() => cached);

      return cached || networkFetch;
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
      status: 503
    });
  }
}
