
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [
  {
    "url": "Build/build.data",
    "revision": "42029d2c0de76807f3c20e5e4efe8992"
  },
  {
    "url": "Build/build.framework.js",
    "revision": "5fddfe0d16030e5ec56409be429a61c1"
  },
  {
    "url": "Build/build.loader.js",
    "revision": "521b70268c8fab9841964e1b75279d0c"
  },
  {
    "url": "Build/build.wasm",
    "revision": "71b5fae62ed90fed4285a854625d9e06"
  },
  {
    "url": "index.html",
    "revision": "f962e8dd509c20597105f1c7a2f1fb9c"
  },
  {
    "url": "TemplateData/favicon.ico",
    "revision": "57b5a31d2566cf227c47819eb3e5acfa"
  },
  {
    "url": "TemplateData/fullscreen-button.png",
    "revision": "489a5a9723567d8368c9810cde3dc098"
  },
  {
    "url": "TemplateData/progress-bar-empty-dark.png",
    "revision": "781ae0583f8c2398925ecedfa04b62df"
  },
  {
    "url": "TemplateData/progress-bar-empty-light.png",
    "revision": "4412cb4b67a2ae33b3e99cccf8da54c9"
  },
  {
    "url": "TemplateData/progress-bar-full-dark.png",
    "revision": "99949a10dbeffcdf39821336aa11b3e0"
  },
  {
    "url": "TemplateData/progress-bar-full-light.png",
    "revision": "9524d4bf7c6e05b2aa33d1a330491b24"
  },
  {
    "url": "TemplateData/style.css",
    "revision": "8247e2feeec9be7b47ef86e55d1bdc41"
  },
  {
    "url": "TemplateData/unity-logo-dark.png",
    "revision": "59fa0334e801c9d8fe14af70400ee200"
  },
  {
    "url": "TemplateData/unity-logo-light.png",
    "revision": "3c8bc23981828d69f857a5feafc1b699"
  },
  {
    "url": "TemplateData/webgl-logo.png",
    "revision": "ddd95c65824da6c6223f48b961a583e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
