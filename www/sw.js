importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "ads/ad.html",
    "revision": "408aed0261024e1d5ff2c8a6b0458d2e"
  },
  {
    "url": "build/app.js",
    "revision": "bc36cf5a72b51b167f9db31439fdb9a7"
  },
  {
    "url": "build/app.registry.json",
    "revision": "00220991b4a356e85249d9029eceb817"
  },
  {
    "url": "build/app\\1n8lvhnyydjg.css",
    "revision": "baafb83f3858282509aec24f65b96749"
  },
  {
    "url": "build/app\\app.bqbgjybjwvhn.ce.js",
    "revision": "974cec4399fb86188ddd901db8a59f12"
  },
  {
    "url": "build/app\\app.bqqh45knywot.js",
    "revision": "37bb2e00b30a13fed8b76765baf0e2af"
  },
  {
    "url": "build/app\\idezlqeyxvxw.js",
    "revision": "f23b3def07788a369d4106dbcd8b6263"
  },
  {
    "url": "build/app\\oaq6p3msm4sr.css",
    "revision": "6c7848021d2930e6abe3fbf033a87db2"
  },
  {
    "url": "build/app\\uvtyendnba7o.js",
    "revision": "b5b75425a3b20420938fae445c581736"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "77c79238667c852af3557573fbe81118"
  },
  {
    "url": "manifest.json",
    "revision": "328fc52a095599d574d1ef56eb21ebf4"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
