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
    "revision": "b54f7b85dc623a4d5642f9be9d41946e"
  },
  {
    "url": "build/app.registry.json",
    "revision": "3561cc07a0fd360334fb3d0c5948fdc4"
  },
  {
    "url": "build/app\\3t1gedldn6t4.css",
    "revision": "16753566796c394451c57bd642cbeadf"
  },
  {
    "url": "build/app\\6uxoobkxa0i3.js",
    "revision": "d66192f75e51775203cc89dab280db5e"
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
    "url": "build/app\\gazxuuiqsfug.css",
    "revision": "168ea834b7b37aacfe6068c79661c738"
  },
  {
    "url": "build/app\\jwsnrjrgtmzt.js",
    "revision": "d00e0e07bd4b74ce35bfe831d479bf27"
  },
  {
    "url": "build/app\\sjx79y562too.js",
    "revision": "d5664288a6b4d3e267a2d3974dcaeeef"
  },
  {
    "url": "build/app\\y92l16xw3acq.css",
    "revision": "1aaf9be52602c8508cfed42c39741cf4"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "0ff3262b3150bad2157a349058a81bd7"
  },
  {
    "url": "manifest.json",
    "revision": "cdf99c352a184f9fb27737e177a15f8d"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
