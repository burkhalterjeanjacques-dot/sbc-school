// ===============================
// SBC SCHOOL - SERVICE WORKER
// ===============================

const CACHE_NAME = "sbc-school-v1";

const FICHIERS_A_METTRE_EN_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];


// INSTALLATION
self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function(cache) {

                return cache.addAll(
                    FICHIERS_A_METTRE_EN_CACHE
                );

            })

    );

});


// ACTIVATION
self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys()
            .then(function(nomsCaches) {

                return Promise.all(

                    nomsCaches
                        .filter(function(nomCache) {

                            return nomCache !== CACHE_NAME;

                        })
                        .map(function(nomCache) {

                            return caches.delete(
                                nomCache
                            );

                        })

                );

            })

    );

});


// RÉCUPÉRATION DES FICHIERS
self.addEventListener("fetch", function(event) {

    event.respondWith(

        caches.match(event.request)
            .then(function(reponse) {

                return reponse ||
                    fetch(event.request);

            })

    );

});