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
    "revision": "fdd58529c3eb8bcd85aca8a299200e6c"
  },
  {
    "url": "build/app.registry.json",
    "revision": "eee496ed21e220f7be999cb68741fba4"
  },
  {
    "url": "build/app\\3t1gedldn6t4.css",
    "revision": "16753566796c394451c57bd642cbeadf"
  },
  {
    "url": "build/app\\9xuervfc3ecy.css",
    "revision": "faddfe54ef3762fdfae5fd8421368b63"
  },
  {
    "url": "build/app\\app.gpsuqcrkyawe.js",
    "revision": "cd2407a4c217a39ce8d4fdbab37c7dbc"
  },
  {
    "url": "build/app\\app.zl1d3inmkul0.ce.js",
    "revision": "72d5a85bff70ea45217700cccb6d047f"
  },
  {
    "url": "build/app\\bgm9gptorepe.css",
    "revision": "dfae438557c3a8f2dc2edf48f3e97653"
  },
  {
    "url": "build/app\\nocanrjeydzn.js",
    "revision": "57e306798b91289977a14101603a0713"
  },
  {
    "url": "build/app\\t3i6afkoo90s.js",
    "revision": "95d6132216909cbd81389b0f8a096a79"
  },
  {
    "url": "build/app\\w2slvz9rltap.js",
    "revision": "8bc11b17d33b843bf3f5a69a17aad2ad"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "firebase-messaging-sw.js",
    "revision": "5bde178351ddd4de96ff915c113a23f3"
  },
  {
    "url": "index.html",
    "revision": "e874e0bf5180f559351d43485452208c"
  },
  {
    "url": "manifest.json",
    "revision": "7affde00c804e8fc7fc259b1b79b7499"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
