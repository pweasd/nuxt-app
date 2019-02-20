importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c50a92db3247652c971.js",
    "revision": "6c7c8033e35db775ffce340c2086943d"
  },
  {
    "url": "/_nuxt/5595c7443ba20fdc9e29.js",
    "revision": "ab7a72c7d1c4a3609885c8427a0f45d5"
  },
  {
    "url": "/_nuxt/56b05f4836b956da5ac9.js",
    "revision": "55329ef9e95cad8c19a9c0c255adbe05"
  },
  {
    "url": "/_nuxt/f6633684b3132ae3dcde.js",
    "revision": "ca680f6a37fce5b1fc0e0e79056982ab"
  }
], {
  "cacheId": "nuxt-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
