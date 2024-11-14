'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "23d9713040ebd2bd94057b0d9b0caaf5",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"index.html": "97ded87ec6e39f8733f15c58ed4cf864",
"/": "97ded87ec6e39f8733f15c58ed4cf864",
"main.dart.js": "5313e72fd2de15ab9b9b728af979ee56",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"assets/AssetManifest.json": "dd9f412ea7f97c6f4480d1dbc21f30ec",
"assets/NOTICES": "1071eeb17d1e93e034eface59ea109f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "db46d544a9196611e7a6d541856b03f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b04f32f4535e3ff7fb4b9b4377fc3ec9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "40381ef41f93eb11a7ac1c31df6782ae",
"assets/fonts/MaterialIcons-Regular.otf": "1cdced3b5a34e0f0312f17f25e75e49a",
"assets/assets/images/NWU/screen4.png": "0bc1d9e968691f661d56ea209601825c",
"assets/assets/images/NWU/screen5.png": "c27dc9926b9f1ffbe3a0be5f3c7d48b4",
"assets/assets/images/NWU/screen1.png": "99ff444574c25f9c265e9e45f11bf479",
"assets/assets/images/NWU/screen2.png": "49e282d99695d0a19ba56de90fa66f62",
"assets/assets/images/NWU/screen3.png": "3a23a45f4a8fb388a9fdef2fff3158f7",
"assets/assets/images/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/images/chat/screen4.png": "0b85d1cc132e6365cd343b5c850bc1ac",
"assets/assets/images/chat/screen1.png": "27a212bfda126fa946622d625b5116d0",
"assets/assets/images/chat/screen2.png": "21f2ba10d54e2e51729a32a3d142b854",
"assets/assets/images/chat/screen3.png": "f55255fffd5ec4bb7d5ed12b3c33e818",
"assets/assets/images/instagram.svg": "4c7ce1b03d039e985ccc196099fde994",
"assets/assets/images/discovery/screen7.png": "e129adb487e23a14f223339a927246ec",
"assets/assets/images/discovery/screen6.png": "e0e09c3e73cef8684af458d447d7a47b",
"assets/assets/images/discovery/screen4.png": "4604c10f8aca9d29e86667c872236100",
"assets/assets/images/discovery/screen5.png": "633589d863ff4d88a108a5e2b357ee2a",
"assets/assets/images/discovery/screen1.png": "30c0269d3c04502f42ce2e648eba65f5",
"assets/assets/images/discovery/screen0.png": "f53bc2a69d3d83d6689787e87b6ce9f6",
"assets/assets/images/discovery/screen2.png": "6148266e882afb908df34f469e2ca4e4",
"assets/assets/images/discovery/screen3.png": "2e53fe814e0b6831e50c28c2e0369ab4",
"assets/assets/images/discovery/screen8.png": "b8df78b2b47bca4c3a12ac084b8b1c04",
"assets/assets/images/discovery/screen9.png": "67ed310454905de80f1a18fe061d4228",
"assets/assets/images/discovery/screen1.mp4": "2eaebb75df486193ee2b496306b43e35",
"assets/assets/images/tap_white.json": "59e3752e5ebc9b9b617b800bc1787cbe",
"assets/assets/images/netflix/screen7.png": "fb4e975028dd05455d081872fba9074e",
"assets/assets/images/netflix/screen6.png": "8dd2e45c7b56a013346018241463a993",
"assets/assets/images/netflix/screen4.png": "9cf982caa450b7aa5689f4634fceeae6",
"assets/assets/images/netflix/screen5.png": "2dac005c18184f0f9002465c9e286a98",
"assets/assets/images/netflix/screen1.png": "5230781d12c5dc58f4a8067d5699300c",
"assets/assets/images/netflix/screen2.png": "4db89565803740f09b62e9cac2d839a2",
"assets/assets/images/netflix/screen3.png": "3db3daf16775c2564b32e617097675de",
"assets/assets/images/netflix/screen8.png": "52dfbd213c4432069c95c3bb938e64f3",
"assets/assets/images/netflix/screen9.png": "e27623edadc3be6ccd821c15f01d62c4",
"assets/assets/images/whatsapp.svg": "b956e0b3b48467befebb78a84c7c40de",
"assets/assets/images/ai/screen1.png": "79d867643648b25ea5d22615fed9314b",
"assets/assets/images/ai/screen1.mp4": "8c03e7c27d0e09ed261a298b9f5c42a1",
"assets/assets/images/chess/screen1.png": "fabc6d6d105b7bf7561a1e512b54a220",
"assets/assets/images/chess/screen1.mp4": "73c8e020bd5b7613200ebd9801aaca4e",
"assets/assets/images/linkedin.svg": "a82552a0f68d277c411257d020468438",
"assets/assets/images/mario/screen1.png": "3a9d27a66558a29750a8f76b1d657b90",
"assets/assets/images/mario/screen1.mp4": "083625ada0f978e2baf14c0ffd10a192",
"assets/assets/images/tap_black.json": "8e7c8c348b06cb9b29736e85f805751a",
"assets/assets/senior_certificate.pdf": "ca7e2b773498700a2a2e1c50f52ff594",
"assets/assets/golden_key.pdf": "3e1685628759077e97c788d0f5e94598",
"assets/assets/cv.pdf": "bd79fa6191e164ed4aa77dac0e474203",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
