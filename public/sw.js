// Stale PWA registrations may still request /sw.js; unregister and exit.
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister())
})
