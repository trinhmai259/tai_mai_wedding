'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "823242dadfab57a3896ce52493b9ab10",
"index.html": "e0e035c37f75f6b079b16ca890f503a8",
"/": "e0e035c37f75f6b079b16ca890f503a8",
"main.dart.js": "bfffb2f2e32b159832520064f4766176",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9fbac4b8c162d7f804eaa98fee0f6dcc",
".git/config": "ba2c5d9d76c615c803b66b6bf4a71829",
".git/objects/66/1b33bb201e4e5fb9a0f25d5c6efdc8b4c1cafd": "f47e7f478aa0c4e886d6427bbcb57a5d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/0b/68c38da83b3b8da27c78d402fca3c2d9d6dfe3": "9c9801e38a9b7eaa3fbc6c509ee5c56a",
".git/objects/94/4aa39b68b72b25b7acb9e7ee43697efedc20f2": "c9c8b7c427285e0f8eb61e941f683481",
".git/objects/5a/35a9ced931106cdd27efa087a77db8aa2f9bed": "a775eb2e0090ac91177f8bebca866cd7",
".git/objects/9d/d867c422e2b2d7ce86b6f14b549cfbcbab043a": "dc74564e1c6bb5f6c80462e0be3ea296",
".git/objects/a4/cd148f230881e387721e2dccd74a056bd92d0c": "a8d9b7b14dadcc2acd611dfef6dc876d",
".git/objects/d9/f5fb1f3734fa2065cc398bf57bed20779462b7": "f42344acf031b915ca8b61a36efa70f4",
".git/objects/d0/669ae1f76b90eac3ad0b00627998f2e68155e0": "5a95bbdc3b10ac96450af6d60707e2a4",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/a5/9e71d6c201e42a76cb88bfd8258b8f193be78d": "f3222c914351f8b3c70e12cd2cb2794f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/702359a06f540d3e3165867458068fab3860ed": "0ef8c12bfd6bde4f77ff078061330eaa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/da5ada6651f5f67b79ec5e64b7aad9ab99d508": "eda1d701cf1529f1bb5e9cbd13525e41",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/efaf1a90f211ca2cfa04ec0e8bad261e4d5a84": "2c492f0ad7e22bc36cb3ca0485138f59",
".git/objects/fd/68832039da68bcfe846f84bc86566da3929d93": "b0d6fa8fcc30db6bf72dd9cfa90644ae",
".git/objects/18/3491dd3cc11cdef161d35f2434bbaa1bbc504a": "955dc7a93b96052b4aea1641a12cd146",
".git/objects/27/feda4cf0f6a4680b423fb73d53f12d398f96c8": "34cf2088f1c0ce331c994138400f4b29",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/29/30001bc775c87850d8cebd7680435d795ab29b": "3404a1ab74d7397cb6d10767e8fc82db",
".git/objects/7c/5b764a89baf476d58845a9d53315c9f6c379cd": "ade1b4cc071a2d605b52678b8c02e099",
".git/objects/42/295fc914b4134b78e0d1c4341ca50a9ef6e9c3": "8ff1c6ee4af225d77bf4c323c79c538e",
".git/objects/42/2fbd2595024d5b5b863bc1b0ad246c16b8d9c3": "8c3ea4edf0df2f38b01e244bd7f87013",
".git/objects/1f/926353434c63e92489742794f172441cd8fd4b": "38b70acccf1beb8521cc316e91d597e0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/71bde91013aff76dae7cb2dcbc30c31afd6353": "38f634eeac5f4f9a2ad26e8c7ea413af",
".git/objects/1a/db2a707c90c3c25f899649bd8e967ce74183b6": "3c20ccb86670ae9f0c0d8fa239e26ef4",
".git/objects/1a/c6a1096a8fd925f2661d99b6977e56eb2ffd0f": "76c1072c626ca51ac4e5cc81034af210",
".git/objects/8a/70e87fef257af29e10a0631d4bb0f241b31bce": "4bfc7ce6c86c45c25996cae9b140b4df",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/b87a34057620785a6dd1243472c358dcebbbd7": "cdcc826706aced1b7675fd8c98d40e29",
".git/objects/26/bfb3a0cadbe8dcdcfc05d18f6d6bdb04610da4": "9f4aae80739f28165112e7872c1fb871",
".git/objects/21/3a58552377d5106baa382dda475bbd242d526c": "f5a9a098e7197289ac2dbd241b56045d",
".git/objects/86/d6f40172e4a345a2f235335b5b9263019380c4": "923cc2409c3dd638b2bad8c17d7e074c",
".git/objects/88/92a75e8094e151c01d3b433d232658fc21ac31": "3c4e4a7e818ce1d44fc50ff8e6f20b97",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/e02af274334bf192307ce5a89791e345005f75": "90d50c3edff4fd9ca82a02029e37590a",
".git/objects/54/9b351b82df063752cf2dddf94e2e8d37c2622a": "a3e8f1b742d8fa4685731b44da1cdf37",
".git/objects/98/60a450a9c2245ba745069eea82cad56687bfd9": "6fb4fbfe52fabc152d0e47e2ad77dcf2",
".git/objects/30/a735ac0c738ac3d4c3257a0ace6aea79d87fe9": "081e4b1acbb5bd22123e655f0a2fe88d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/08/b1d17b5f418db1aa8ada5a23e324ad141002ce": "d9ed20f3f691d4b0acfdce9670a0c8de",
".git/objects/52/dd1cafa339f9fc4a5a0e22c3c55e636d95fb2c": "a05a9f142326b562153bacbd1cac2a57",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/ba/1de56705619e8ccf7861a47d89ef849808f743": "8185a60a6ef1d9fcb15a9fd8bbd49560",
".git/objects/ba/2301585f1317924698d5bf0b8fc7e98918e2f1": "29d364b463cfb8fe4599092ae70afeb8",
".git/objects/a7/55c871369df64276c03aa642c6909d50a72a77": "d919ecf14318a0c6e69d7281685b3655",
".git/objects/d5/0b1db9b1f1c0184170ff7864842f0a731d9642": "76396b455ea121d4fba1e3a33f89e360",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/5c20203afed920d8d779190ba8daa51677f7ea": "449669bfceff371802be02796a29f472",
".git/objects/db/a397b69dee788b08d65861818848b2fd6e3867": "917cad38f75ae2bf5d901228d4ff358c",
".git/objects/b0/5cc25b4c55fe2fd2515bd674e2e0622730b22d": "38c4cf2d0d976b8afd9330ff98981f43",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d005f1650c9e5e328d46127c5121c5c7400c5e": "a4cc5263dbcf54a80e45185349ba0325",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/5863905f22c782e772a8b9306a82aeeaddd984": "f5294db598410d5b445fe6f841181472",
".git/objects/cd/216464d11aa6f2d3a0c93fe829e7065c1b8338": "838ff852b8b8e4e5a4ecacb2fc8252ff",
".git/objects/e8/5517f7054a8478dacfd85358e22feaee2a5b5e": "c1b865989f8f8d034389babc5b571a54",
".git/objects/ff/a7b01487a6fbde3c08168cab084edd0dabe024": "233beacd99f944b04bd5ef01790a7cbc",
".git/objects/e9/d526cde014bc283fa6ea4ea2d2db0f09671177": "ac1b575bb6b76b1131578046a96d76e9",
".git/objects/ce/287c7dbd7d440aef1c5cc442d3e7a216ac3d49": "703ec2981fe53f2c82cedc4d7d912b80",
".git/objects/e0/ffc35595edbe7420c0f8144ace22881661938c": "dc5b9b39c2341277b392a060d3d8b8cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/0c28fa772ee7322f88b5c0db16c7a432ae6d3a": "ab73a8ed6599d58541b1b29c0bb7174c",
".git/objects/1e/cbbbf26531477532bb1e818e5e93c50432fd3a": "e7392e6330916e6a6e48eb9691e039f1",
".git/objects/23/c220e9c048f9f6be90cb4a24cd7fdf408287ec": "db952815f05ef507cb8ff9263d1c20b0",
".git/objects/4f/848f419ac4870b9d1522adcdeadf1f9c1dda5a": "fc42c647be355f276432f453ac85aec5",
".git/objects/4f/90f2d2da51b2469966b3da38b9e2c528a64bfc": "7cb23757de0fceaf2c21b293a4ce9350",
".git/objects/15/09c0a89a5b52615f2e167a4eb9116fa3b0d4d4": "28a7b382b0a1073c149c1fae4081c04e",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/78/62acc37de786a06f980c102fc5ce39fb3f5747": "8f0597b2fa48106fbf24f9fb3668d24f",
".git/objects/78/35ecb9343dde314f555f97d8d15666362820e5": "8223d06f0b6b0e88ea1333ead21fea99",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd2d0ddc4f9d9413107e1528feed9a2f",
".git/logs/refs/heads/master": "5cc31bc83201f9f00acc0134acd77993",
".git/logs/refs/remotes/origin/master": "21cf35ec68403862bdd9a9857cd04843",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2630de8c660fb2ff82706ec941b827af",
".git/refs/remotes/origin/master": "2630de8c660fb2ff82706ec941b827af",
".git/index": "0764e73d1c63c28bdce4b7bf382ba338",
".git/COMMIT_EDITMSG": "9d4cc17a149de51899419108d4560b6d",
"assets/AssetManifest.json": "8ddbf6d015d8f26ae8659fe98d00b5b0",
"assets/NOTICES": "7f73890513f894ea7567f6e7917f6d1d",
"assets/FontManifest.json": "034fa0e9a5f66ea9ffb2e43a3df977be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/Vector.svg": "417b36956d193d36a284c4ce5b00a608",
"assets/assets/images/single/TT_03450.jpg": "56a5d755fb171695d8d1318ecebc9295",
"assets/assets/images/single/TT_03336.jpg": "7d30b5cf5d19012598fc353c10d2cfd7",
"assets/assets/images/single/TT_03757.jpg": "766d030241b867ecf9e55dbfe9032a99",
"assets/assets/images/single/TT_02891.jpg": "c8941cd021ccd00afd7261df63bc41f1",
"assets/assets/images/single/TT_03769.jpg": "8ab967ddca364e1776e4d0a63d269468",
"assets/assets/images/single/TT_03182.jpg": "ae84194c9b6bba51886fee34831eb72f",
"assets/assets/images/single/TT_02872.jpg": "5a857943577b46f5e8ccaac4c4d0b19b",
"assets/assets/images/single/TT_03611.jpg": "108264d966b69d7a8337911be6f68ab0",
"assets/assets/images/single/TT_03375.jpg": "eabb58fcc28a2045919bf3ca4f06ae5b",
"assets/assets/images/single/TT_03821.jpg": "521a467b04ac146bbba6de10ea24a574",
"assets/assets/images/single/TT_03565.jpg": "a7abdb1f19adad093eb399cb7a54901e",
"assets/assets/images/single/TT_03505.jpg": "235d478922ac149a7a6b1096038c7440",
"assets/assets/images/appbar.jpg": "14993d9052a25355ab90a54a68bb0da8",
"assets/assets/images/after_%2520info.jpg": "e733ef57edfdfac96bd96612c26d22a2",
"assets/assets/images/female_info.jpg": "531b13c5d34300bc40068d5d1d504d28",
"assets/assets/images/male_info.jpg": "e8fe9d2d770e954662dd9262e73fc2f6",
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
"assets/assets/fonts/new_york/NewYorkSmall-Bold.otf": "ecadebbb9cd2611df7b09e9dc49d19ca",
"assets/assets/fonts/new_york/NewYorkSmall-Medium.otf": "c8e0fbf7cbb14a641aeb5603aca48834",
"assets/assets/fonts/new_york/NewYorkLarge-Medium.otf": "afe758da32ca50ba9a9a6760f7782abb",
"assets/assets/fonts/new_york/NewYorkLarge-Black.otf": "7fb8d44f6ce4aef81c266fe460947957",
"assets/assets/fonts/new_york/NewYorkMedium-Medium.otf": "5de11e90a1b9283fcfa2aa6bdbdd84c7",
"assets/assets/fonts/new_york/NewYorkMedium-Heavy.otf": "1f0112b5a34c34c6db5748b8dcdfab33",
"assets/assets/fonts/new_york/NewYorkSmall-Black.otf": "e6d251e8eff035f0f254091d3ab9a1de",
"assets/assets/fonts/new_york/NewYorkLarge-Bold.otf": "7c554ab6568ae79af3241080d72843b8",
"assets/assets/fonts/new_york/NewYorkMedium-Bold.otf": "9eaaa4c76e8bf36f51041d85cf84a5db",
"assets/assets/fonts/new_york/NewYorkLarge-Heavy.otf": "75d6d04c3295cf61c0c1afdc0d8fd500",
"assets/assets/fonts/new_york/NewYorkMedium-Black.otf": "573fe0a8d401732db1f1f3e87e9ade1f",
"assets/assets/fonts/new_york/NewYorkLarge-Regular.otf": "bff39c1675b0ee3aa8b8d71536ba5b30",
"assets/assets/fonts/new_york/NewYorkLarge-Semibold.otf": "1ba941e63501690b5529fd13c3f07e86",
"assets/assets/fonts/new_york/NewYorkMedium-Regular.otf": "87d556de9221124a37df6133b9cd6eab",
"assets/assets/fonts/new_york/NewYorkMedium-Semibold.otf": "45b143a60858ec92cd78e129d9b35a82",
"assets/assets/fonts/new_york/NewYorkSmall-Regular.otf": "1c5766890c39da9633322655ceed781a",
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
