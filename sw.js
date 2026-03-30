self.addEventListener('install', (e) => {
  self.skipWaiting(); // Force la mise à jour immédiate
});

self.addEventListener('fetch', (e) => {
  // Indispensable pour la PWA mais laisse passer les mises à jour
});