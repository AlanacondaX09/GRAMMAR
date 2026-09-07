const CACHE_NAME = "grammar-v4";
const SHOW_UPDATE_NOTICE = false;

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
    "./icon/icon-512.png",
    "./Present Perfect .jpeg",
    "./Present Perfect Continuous .jpeg",
    "./Reported Speech .jpeg",
    "./Deduction,Advice and Regret.jpeg"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(FILES_TO_CACHE);
            })
    );

});

self.addEventListener("message", (event) => {
    if (event.data?.type === "GET_UPDATE_INFO") {
        event.ports[0]?.postMessage({
            showNotice: SHOW_UPDATE_NOTICE
        });
        return;
    }

    if (event.data?.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET" ||
        new URL(event.request.url).origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        fetch(event.request, { cache: "no-store" })
            .then((response) => {
                if (response.ok) {
                    const responseCopy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseCopy);
                    });
                }

                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
