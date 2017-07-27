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
    "revision": "b371106765a210bc9f111acbca38ce10"
  },
  {
    "url": "build/app.registry.json",
    "revision": "879f8161229f0c8d2c25238b873e5e8c"
  },
  {
    "url": "build/app\\04uq3upfrrsb.js",
    "revision": "2a4d3a492faea802c2729b690fd567d3"
  },
  {
    "url": "build/app\\3t1gedldn6t4.css",
    "revision": "16753566796c394451c57bd642cbeadf"
  },
  {
    "url": "build/app\\4k29d7juvmjz.js",
    "revision": "b5fb7f288bbad3ad72f1957141e777d9"
  },
  {
    "url": "build/app\\5odjhhzqkfo8.css",
    "revision": "99b98ff1af5241afa910768e01c47c92"
  },
  {
    "url": "build/app\\app.3zyhdklr31al.js",
    "revision": "74595e3ff8fe187eb92db812b5f7958c"
  },
  {
    "url": "build/app\\app.kj9hwkiyjauk.ce.js",
    "revision": "b4d49b71b44c02c6f67921c1f1b1ffda"
  },
  {
    "url": "build/app\\bttd2zlkhe15.css",
    "revision": "68633f6a373daa531787c33997360d93"
  },
  {
    "url": "build/app\\pyejo2xryul0.js",
    "revision": "1312d15839abddc8b421a9cc2b4dda9e"
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
    "revision": "db00ff3d13250206456ca399eec1f568"
  },
  {
    "url": "manifest.json",
    "revision": "70b8e3510a2e3886c114d15ac173289a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
