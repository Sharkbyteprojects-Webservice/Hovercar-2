importScripts("./wbox.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.__precacheManifest = [
  {
    "url": "Build/build.data",
    "revision": "46468bdf1c91aea0451207355295558f"
  },
  {
    "url": "Build/build.framework.js",
    "revision": "2b39c6adf02ca231daff5e82d04fa02d"
  },
  {
    "url": "Build/build.loader.js",
    "revision": "521b70268c8fab9841964e1b75279d0c"
  },
  {
    "url": "Build/build.wasm",
    "revision": "6d84f2e5de20ab29dc004cbecc9e8492"
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
