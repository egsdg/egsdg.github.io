importScripts('workbox-sw.prod.v2.1.2.js');

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
    "url": "404.html",
    "revision": "6a0fe4d94e0a00f270f545554ec682e7"
  },
  {
    "url": "about/index.html",
    "revision": "eccf02f8193622bfb8e82f69056a29af"
  },
  {
    "url": "app.js",
    "revision": "0063b2b2a446a83eb65a7005cce9e427"
  },
  {
    "url": "assets/main.css",
    "revision": "3ccc41e0ee906e813d6386b0f2625688"
  },
  {
    "url": "blog/index.html",
    "revision": "0618e908c4551696b16d8bd3243f5a6e"
  },
  {
    "url": "css/body.css",
    "revision": "a6a5c3d339b1ef21e5afee8bd30da767"
  },
  {
    "url": "css/card.css",
    "revision": "0e86894fc8d32e774a4cc35472e32feb"
  },
  {
    "url": "css/normalize.css",
    "revision": "3bc2f546340fb700ab9a155ff6bf45ab"
  },
  {
    "url": "css/pattern.css",
    "revision": "6cc3a4b5498b4518efeaed881a4bd2a7"
  },
  {
    "url": "feed.xml",
    "revision": "be5112754a9601ba11a3cc7adbca95fd"
  },
  {
    "url": "fonts/font-awesome/css/font-awesome.css",
    "revision": "3f05a51a1e5260f4179db8ca65307a6a"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "f7c2b4b747b1a225eb8dee034134a1b0"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "2980083682e94d33a66eef2e7d612519"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.ttf",
    "revision": "706450d7bba6374ca02fe167d86685cb"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "d9ee23d59d0e0e727b51368b458a0bff"
  },
  {
    "url": "fonts/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "97493d3f11c0a3bd5cbd959f5d19b699"
  },
  {
    "url": "fonts/font-awesome/fonts/FontAwesome.otf",
    "revision": "0b462f5cc07779cab3bef252c0271f2b"
  },
  {
    "url": "img/a.jpg",
    "revision": "22c567910dbce5a131f748477103f86a"
  },
  {
    "url": "img/authors/mm.jpg",
    "revision": "94560eb27bce9cf083dcaa1b709632c4"
  },
  {
    "url": "img/b.jpg",
    "revision": "3835b57bff0004f150039b9d18e4cb23"
  },
  {
    "url": "img/c.jpg",
    "revision": "0eb29a3a478844132ffa1b40a1358d96"
  },
  {
    "url": "img/d.jpg",
    "revision": "1762338f11c69d1248cb9a3781432200"
  },
  {
    "url": "img/e.jpg",
    "revision": "01ab7014533e199d25c45dad33c60903"
  },
  {
    "url": "img/f.jpg",
    "revision": "b37dcf8437f927a15d46e9167ff03add"
  },
  {
    "url": "img/favicon.ico",
    "revision": "de6c8ec71804205aa9074b3600fa7a1d"
  },
  {
    "url": "index.html",
    "revision": "e3499f415e86470439c9e2c9a2cc9ddd"
  },
  {
    "url": "jekyll/update/2017/12/08/welcome-to-jekyll.1.html",
    "revision": "de32ff19628a86d8eb5e31a8c5425ab9"
  },
  {
    "url": "jekyll/update/2017/12/08/welcome-to-jekyll.html",
    "revision": "c3b658d744e9987a1fc90aeca7b3c721"
  },
  {
    "url": "js/Card-circle.js",
    "revision": "975fde631c7ab4fbc611e49b0bfbce9f"
  },
  {
    "url": "js/modern-blog.js",
    "revision": "de087ab1ed99ecebdaa58e79514441c3"
  },
  {
    "url": "js/vendors/cash.min.js",
    "revision": "9a9f1e5b7458c5d31f75ee6c129f3cdd"
  },
  {
    "url": "js/vendors/html5.min.js",
    "revision": "7823f6077f5a74235073650bb753a4df"
  },
  {
    "url": "js/vendors/ScrollToPlugin.min.js",
    "revision": "aadb7767cc8d6e50b1760809c3212c1a"
  },
  {
    "url": "js/vendors/trianglify.min.js",
    "revision": "04965e43cb508724836343712ebd6bcb"
  },
  {
    "url": "js/vendors/TweenMax.min.js",
    "revision": "1d4514e6131e1758432e33301e4bf1a4"
  },
  {
    "url": "manifest.json",
    "revision": "b882061d5365225b38804452ef094ed9"
  },
  {
    "url": "package.json",
    "revision": "674acfcaf212c8d96fd069ed82574193"
  },
  {
    "url": "sw.js",
    "revision": "a2baa7aec792d0402a52a3fcc506818f"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
