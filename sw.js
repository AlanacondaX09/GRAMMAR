const CACHE_NAME = "grammar-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./Lessons.html",
    "./Exercises.html",
    "./Results.html",
    "./Settings.html",
    "./Style.css",
    "./script.js",
    "./lessons.js",
    "./exercises.js",
    "./results.js",
    "./manifest.json",
    "./icon/icon-192.png",
    "./icon/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        )
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
    );
});
