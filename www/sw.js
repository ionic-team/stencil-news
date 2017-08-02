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
    "revision": "0df97155b164335f5e9e8e2128f09874"
  },
  {
    "url": "build/app.registry.json",
    "revision": "1e97b249e009cc4d31c6e6b17a6e80d4"
  },
  {
    "url": "build/app\\3t1gedldn6t4.css",
    "revision": "16753566796c394451c57bd642cbeadf"
  },
  {
    "url": "build/app\\app.ehypaqtbz6um.ce.js",
    "revision": "066df9c7280ee9f07bc272b17db6ce31"
  },
  {
    "url": "build/app\\app.zmqmcdvksoyy.js",
    "revision": "24696c82e4e300dca7965f904c5213cc"
  },
  {
    "url": "build/app\\bgm9gptorepe.css",
    "revision": "dfae438557c3a8f2dc2edf48f3e97653"
  },
  {
    "url": "build/app\\ex7hcmgtcbiy.js",
    "revision": "a41291ba87df5e5257acf9b9e016fa44"
  },
  {
    "url": "build/app\\qopyj9ai3cuh.css",
    "revision": "f8be421ca5f8202aa3443735ff01e2de"
  },
  {
    "url": "build/app\\t3i6afkoo90s.js",
    "revision": "95d6132216909cbd81389b0f8a096a79"
  },
  {
    "url": "build/app\\tnkdug5xknry.js",
    "revision": "f8719c404da45e2e0bf3bbad51ca36a9"
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
    "revision": "67f2cd3b9daa9166b5af667c525d27cb"
  },
  {
    "url": "manifest.json",
    "revision": "7affde00c804e8fc7fc259b1b79b7499"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
