// Instalación del Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activación
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Interceptación básica requerida
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => {
    // Aquí puedes manejar respaldo offline si lo deseas en el futuro
  }));
});
