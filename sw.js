importScripts('workbox-sw.prod.v1.3.0.js');

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
    "url": "super-storage/index.html",
    "revision": "a0f763e0846d7dd8786c475ba7e3dfad"
  },
  {
    "url": "super-storage/inline.7bea69908ed1d08ded9f.bundle.js",
    "revision": "a2705c6799176ad7e9f104fe12f21b5a"
  },
  {
    "url": "super-storage/main.5ecfebdcc8bc507fccc1.bundle.js",
    "revision": "2fc6d415794ac4a3905ab1143bcb1d7d"
  },
  {
    "url": "super-storage/polyfills.3ae08eaf6129a55130cb.bundle.js",
    "revision": "4d6e297c5c881a487e1e111ae4b363e3"
  },
  {
    "url": "super-storage/vendor.518078ab7344217ed4cd.bundle.js",
    "revision": "066268c9138fb459564959b26463e960"
  },
  {
    "url": "super-storage/styles.e00dd1aeb19b6b60125c.bundle.css",
    "revision": "e00dd1aeb19b6b60125c5e6b111ed4df"
  },
  {
    "url": "super-storage/assets/avatar.png",
    "revision": "bda9b390221c6fd0e98869cca64cfa25"
  },
  {
    "url": "super-storage/assets/sda-control.svg",
    "revision": "7c6ac1a4d214dad88548deb55572c2a3"
  },
  {
    "url": "super-storage/assets/super-store.svg",
    "revision": "8df0df15b5f843c322ac92e58e34fcce"
  },
  {
    "url": "super-storage/assets/games\\bomber.jpg",
    "revision": "ffaf4b552f9d4a4f4bcf428a00a0acaa"
  },
  {
    "url": "super-storage/assets/games\\captain.jpg",
    "revision": "592fadaed0f6733746e9b80cf22afd54"
  },
  {
    "url": "super-storage/assets/games\\cdino.jpg",
    "revision": "7078e176e06937810c24dba8e5ab4fe4"
  },
  {
    "url": "super-storage/assets/games\\cdino.png",
    "revision": "20633b39dd474e3dc772140c395e94e1"
  },
  {
    "url": "super-storage/assets/games\\chrono.jpg",
    "revision": "a45acf65462797b1eab3527d5a723e9e"
  },
  {
    "url": "super-storage/assets/games\\diablo.jpg",
    "revision": "bd64fc374afa1e1ac088f3df07181672"
  },
  {
    "url": "super-storage/assets/games\\dk.jpg",
    "revision": "88483aefbd82d7f371e2f9cc4fb0092c"
  },
  {
    "url": "super-storage/assets/games\\doom.jpg",
    "revision": "f1b71617abc0b3d5a2b7174de49d5f33"
  },
  {
    "url": "super-storage/assets/games\\final-fight.jpg",
    "revision": "09df5c429e9f36d36cd1fd71d650aee0"
  },
  {
    "url": "super-storage/assets/games\\fzero.jpg",
    "revision": "32f24b1f5432b269b22c006355c8b1b7"
  },
  {
    "url": "super-storage/assets/games\\ga.jpg",
    "revision": "4c9f917ab622ffded18c3c41aee727b6"
  },
  {
    "url": "super-storage/assets/games\\goof.jpg",
    "revision": "16fc1012adcde166c5c5a5dbfd42c771"
  },
  {
    "url": "super-storage/assets/games\\ki.jpg",
    "revision": "d30d9db3d47c21e787d5a8680cd7291d"
  },
  {
    "url": "super-storage/assets/games\\mario.jpg",
    "revision": "8696e995a1b0c46c204100681cd226dc"
  },
  {
    "url": "super-storage/assets/games\\megaman.png",
    "revision": "d946b148aa9b3fb6315637cf3519cc8c"
  },
  {
    "url": "super-storage/assets/games\\metal-gear.jpg",
    "revision": "565b0089d685460efa8a72c9f9906f3a"
  },
  {
    "url": "super-storage/assets/games\\mortal-kombat.jpg",
    "revision": "df65bfd138fcd7c1eba21a3f1956f726"
  },
  {
    "url": "super-storage/assets/games\\pokemon.jpg",
    "revision": "8f054f90ed3563c575aa0b1db6482d1a"
  },
  {
    "url": "super-storage/assets/games\\rock.jpg",
    "revision": "70c27527bfa38e75a86658b3df4f9c94"
  },
  {
    "url": "super-storage/assets/games\\sm.jpg",
    "revision": "c94405378210e7f685b345b44639de9d"
  },
  {
    "url": "super-storage/assets/games\\sonic2.jpg",
    "revision": "193919534e6f0344c8642b03b1bbc2ff"
  },
  {
    "url": "super-storage/assets/games\\street-fighter.jpg",
    "revision": "ededc61895683e62a556814cd86015ff"
  },
  {
    "url": "super-storage/assets/games\\sunset.jpg",
    "revision": "17ee1d2de9f47f3cc6f01d1d8873bcfc"
  },
  {
    "url": "super-storage/assets/games\\tomb.jpg",
    "revision": "9d96f10d8e9ec6dfd6412f38b2d7b81e"
  },
  {
    "url": "super-storage/assets/games\\topgear.jpg",
    "revision": "0559335f257af6d2a20d09986a43974b"
  },
  {
    "url": "super-storage/assets/games\\zelda.jpg",
    "revision": "cdbd74723de6000474d9a5797d8fa8c7"
  },
  {
    "url": "super-storage/manifest.json",
    "revision": "029fc024b5468eb94bbfeb91e5605ded"
  },
  {
    "url": "super-storage/fontawesome-webfont.af7ae505a9eed503f8b8.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "super-storage/fontawesome-webfont.fee66e712a8a08eef580.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "super-storage/?utm_source=pwa",
    "revision": "6cfc069e95d1830307fad902ada8d885"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
