'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "823242dadfab57a3896ce52493b9ab10",
"index.html": "0e665f3de59168a2dd7f12a3d88b369f",
"/": "0e665f3de59168a2dd7f12a3d88b369f",
"main.dart.js": "1d25313e8c23c64913c1f55899087350",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9fbac4b8c162d7f804eaa98fee0f6dcc",
"assets/AssetManifest.json": "02318f152575d61ab464e9b67ea209ba",
"assets/NOTICES": "7f73890513f894ea7567f6e7917f6d1d",
"assets/FontManifest.json": "c7c29f145c50453a93b607972f6c2971",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/sparkle.svg": "417b36956d193d36a284c4ce5b00a608",
"assets/assets/images/single/TT_03450.jpg": "82be14b0a2548c16ffeb2b067abf8609",
"assets/assets/images/single/TT_03336.jpg": "29358d34716287d30353bcb7efaf0a53",
"assets/assets/images/single/TT_03757.jpg": "058859239acbab492b82a7e1f05b1b6b",
"assets/assets/images/single/TT_02891.jpg": "559ac4599ecbf4f26eb7152116a9fbc9",
"assets/assets/images/single/TT_03769.jpg": "320aa363b36e4859a477167a3bcfc32d",
"assets/assets/images/single/TT_03182.jpg": "b017ecbafdd966ba15a645d457d218c0",
"assets/assets/images/single/TT_02872.jpg": "e0aca7a31d173648113be549b653db48",
"assets/assets/images/single/TT_03611.jpg": "cbe3b6048e857f9019612a6024b9dfa5",
"assets/assets/images/single/TT_03375.jpg": "d7c1139755b5abce7d379acc6b75be8e",
"assets/assets/images/single/TT_03821.jpg": "a6a7e541fdb55a59570dbdceb70ce1c6",
"assets/assets/images/single/TT_03565.jpg": "f55ebb60a6fc2ea87267314471ed67f2",
"assets/assets/images/single/TT_03505.jpg": "704adbb7e96a120fcf761b7612a54e17",
"assets/assets/images/appbar.jpg": "14993d9052a25355ab90a54a68bb0da8",
"assets/assets/images/after_%2520info.jpg": "e733ef57edfdfac96bd96612c26d22a2",
"assets/assets/images/female_info.jpg": "f1d186b24157b905f359952b373e1dc5",
"assets/assets/images/male_info.jpg": "f60f8e24ccc2e6ad329befd9f67d42d8",
"assets/assets/images/album/To%25CC%259B%25CC%2580_08.jpg": "e5e7547db41a051d34c7285cfcbf0411",
"assets/assets/images/album/To%25CC%259B%25CC%2580_11.jpg": "5429637ccc36a965a1a48ee72a5c60e5",
"assets/assets/images/album/To%25CC%259B%25CC%2580_10.jpg": "0102f04b65473a469ce42a489e9b6788",
"assets/assets/images/album/To%25CC%259B%25CC%2580_04.jpg": "984b7310b5af2975ce15de8899874016",
"assets/assets/images/album/To%25CC%259B%25CC%2580_12.jpg": "176748a976e7cf05e04df52b7f21f233",
"assets/assets/images/album/To%25CC%259B%25CC%2580_07.jpg": "e9b04749ef9e059239cd85d56f7087e1",
"assets/assets/images/album/To%25CC%259B%25CC%2580_13.jpg": "5f9f2589c6f08574ddd2448729f39b1f",
"assets/assets/images/album/To%25CC%259B%25CC%2580_03.jpg": "4328a16cb533e76f8b90b66c24ebfaa0",
"assets/assets/images/album/To%25CC%259B%25CC%2580_02.jpg": "4b29271da5132e1a84275a8cf14db673",
"assets/assets/images/album/To%25CC%259B%25CC%2580_01.jpg": "c4470ba4a68281d655fbce3777eae072",
"assets/assets/fonts/new_york/NewYorkSmall-BoldItalic.otf": "6c605992723dc5c23197e37cd5dd97c6",
"assets/assets/fonts/new_york/NewYorkSmall-Bold.otf": "ecadebbb9cd2611df7b09e9dc49d19ca",
"assets/assets/fonts/new_york/NewYorkSmall-BlackItalic.otf": "cc4fb81f75c91294b594bdbdf3f91c07",
"assets/assets/fonts/new_york/NewYorkSmall-Medium.otf": "c8e0fbf7cbb14a641aeb5603aca48834",
"assets/assets/fonts/new_york/NewYorkSmall-HeavyItalic.otf": "5dc1edd22a7b2ce20250a9be30155694",
"assets/assets/fonts/new_york/NewYorkSmall-Black.otf": "e6d251e8eff035f0f254091d3ab9a1de",
"assets/assets/fonts/new_york/NewYorkSmall-SemiboldItalic.otf": "9b9ffce38f359fb0db09dfa89690b5a8",
"assets/assets/fonts/new_york/NewYorkSmall-Semibold.otf": "036d27f931af34ccd967824a6ed65844",
"assets/assets/fonts/new_york/NewYorkSmall-RegularItalic.otf": "37633cea335eeeaaa6e96388a235595f",
"assets/assets/fonts/new_york/NewYorkSmall-Heavy.otf": "2da431e8a357a4292a17e2e5a4719415",
"assets/assets/fonts/new_york/NewYorkSmall-Regular.otf": "1c5766890c39da9633322655ceed781a",
"assets/assets/fonts/new_york/NewYorkSmall-MediumItalic.otf": "a1d099dd871428313b7269f98a3c3982",
"assets/assets/fonts/great_vibes/GreatVibes-Regular.ttf": "4bd0ed00ca8deac6c6706a092d9afd13",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
