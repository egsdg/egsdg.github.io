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
    "revision": "33e18f8dcea1c49e2c1c04ab3b7aff14"
  },
  {
    "url": "about/index.html",
    "revision": "3da2f6cd8c5180e85433a6fccd1ea3e2"
  },
  {
    "url": "app.js",
    "revision": "f35e0e17abcb730c60d5536370b8de5e"
  },
  {
    "url": "assets/main.css",
    "revision": "3ccc41e0ee906e813d6386b0f2625688"
  },
  {
    "url": "blog/index.html",
    "revision": "6cfb6d8661595fd34cd05457ad3efa72"
  },
  {
    "url": "cost/saving/2017/12/08/Cost-Saving.html",
    "revision": "f970cb86dc6ed0bf70ad0a5a3f5ecba7"
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
    "url": "favicon.ico",
    "revision": "de6c8ec71804205aa9074b3600fa7a1d"
  },
  {
    "url": "feed.xml",
    "revision": "a1dcd2dbbbd9b4b0a2d04488fbf1ea21"
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
    "url": "gis/2017/12/08/gis.html",
    "revision": "db18ddab932c15d0c5101fb23e5f1764"
  },
  {
    "url": "gmp/2017/12/08/Good-Manufacturing-Practice.html",
    "revision": "24bd57cdbcaa35e1c0b919fae728cac3"
  },
  {
    "url": "img/authors/ahmedcanvip.jpg",
    "revision": "224a664f849489f84ec4d8e7a4a84bbe"
  },
  {
    "url": "img/authors/alaa.jpg",
    "revision": "a21c94806e15a87f3f3d182eefbb3f0f"
  },
  {
    "url": "img/authors/mm.jpg",
    "revision": "94560eb27bce9cf083dcaa1b709632c4"
  },
  {
    "url": "img/authors/moh.jpg",
    "revision": "665f706eb6b8b7fe29d27dc22017805d"
  },
  {
    "url": "img/authors/photo.jpg",
    "revision": "0004cc30e1156aa1dbc9a75436746ef0"
  },
  {
    "url": "img/Cost.jpeg",
    "revision": "45b398dbd9a979ab805ad2e94e0e71ca"
  },
  {
    "url": "img/e.jpg",
    "revision": "1ab1e67c99f1a1b149725f2c8b247564"
  },
  {
    "url": "img/favicon.ico",
    "revision": "de6c8ec71804205aa9074b3600fa7a1d"
  },
  {
    "url": "img/gis.jpg",
    "revision": "c181c9c2b4100744d6d10f8b2b3b77ef"
  },
  {
    "url": "img/gmp.png",
    "revision": "a0afb5283a9634e0c948cae494570926"
  },
  {
    "url": "index.html",
    "revision": "7ee1cf71f3c5ca9f3f73444148da387c"
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
    "url": "usage/of/renewable/energy/sources/2017/12/08/Usage-of-Renewable-Energy-sources.html",
    "revision": "45f258b8aa4a1b3be650ff29b2f6ec4d"
  },
  {
    "url": "workbox-cli-config.js",
    "revision": "e93d9dab3b10d2108662077cfef727b5"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
