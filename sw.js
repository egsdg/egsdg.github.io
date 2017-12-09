'use strict';


importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@2.1.2/build/importScripts/workbox-sw.prod.v2.1.2.min.js');
const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});

workbox.router.registerRoute(/(.*)views(.*)\.(?:png|gif|jpg|html)/,
  workbox.strategies.networkFirst(),
                             

);

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox For Webpack';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
workbox.precache([
  {
    "url": "/index.html",
    "revision": "7dc612bd22a1710ad8c318480f474ea5"
  },
  {
    "url": "/assets/main.css",
    "revision": "7dcm12bd22a1710ad8c318480f474ea5"
  },
  {
    "url": "/app.js",
    "revision": "7dccv2bd22a1710ad8c318480f474ea5"
  },
  {
    "url": "/sw.js",
    "revision": "7dcc545bd22a1710ad8c318480f474ea5"
  },
  {
    "url": "/jekyll/update/2017/12/08/welcome-to-jekyll.html",
    "revision": "65622a1710ad8c318480f474ea5"
  }
]);












self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
