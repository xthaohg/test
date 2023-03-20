'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "93df7a35e34fe7bb9543b539b1b9f518",
"index.html": "464398450dff4529d0f36e638082df7a",
"/": "464398450dff4529d0f36e638082df7a",
"main.dart.js": "26e64e2afc51d9f3e7d9dc61b919dda3",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1ee4643df6a56f3770ac8413901c82b",
"assets/AssetManifest.json": "b8b8b2b3f83021e70f9a282583b3fee4",
"assets/NOTICES": "248dfcd46139054feb1145cf29e908cb",
"assets/FontManifest.json": "b89bdb0fa569f2e6714b8ea795851db2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/check.png": "5ef53db1752ac43e35a93d48f26372e3",
"assets/assets/images/no_demnify.png": "a80e0ccfcb17b3ca0c0c64cc6b0b0a57",
"assets/assets/images/vn.png": "407437c202b64e77a6bfe25ad832f220",
"assets/assets/images/1.5x/no_demnify.png": "e45e196084763d816502c88ca20398d2",
"assets/assets/images/1.5x/wellcome.png": "392b478a5ff7caf7438d03932139ed3c",
"assets/assets/images/1.5x/oto.png": "5cbe0ccbcf5f560dab9a13e25aa6e876",
"assets/assets/images/background_account.png": "239d2c2250141b5380c5777bf780703f",
"assets/assets/images/home_bg_bottom_top.png": "6eef1f74b1d5f8437eb0e489fae63519",
"assets/assets/images/package.png": "8e2d8cdc6f83f974a4484ec59a86b7c3",
"assets/assets/images/2.0x/no_demnify.png": "0794d4a9c0a4ac94746101584cb7aeaf",
"assets/assets/images/2.0x/wellcome.png": "e363c7366532941f9fd40d95a5c444a0",
"assets/assets/images/2.0x/oto.png": "7af1ff2bf3ecc79529954bf7579842f8",
"assets/assets/images/icon_logo_progress.png": "8978028ece5f9b58690c8d9cbc339c38",
"assets/assets/images/avt.png": "72ac37cc05f02020c451b02470ec0856",
"assets/assets/images/banner_new_detail.png": "b403275ff6f9a76ac987974419242082",
"assets/assets/images/no_value_search.png": "d60c3f70125345d9bc4b957ef2dc9b85",
"assets/assets/images/take_picture.png": "65cdf8afd673261d76a4f6a49a234e7a",
"assets/assets/images/face_id.png": "852d361e11294596d9e54d9809b68075",
"assets/assets/images/img.png": "65cdf8afd673261d76a4f6a49a234e7a",
"assets/assets/images/logo_pti_care2.svg": "77ca431379a6e0a8177cc4f4d70db755",
"assets/assets/images/3.0x/no_demnify.png": "d1d766e1c4124e720adba8648e0c40e1",
"assets/assets/images/3.0x/wellcome.png": "3708e15222cfaf7aa92dcbd05b3dd70b",
"assets/assets/images/3.0x/oto.png": "91a50d77176e5dcda1adbb23e5b68295",
"assets/assets/images/wellcome.png": "fc872c53c7de5d17bf36c9a86ae96d2e",
"assets/assets/images/4.0x/no_demnify.png": "17f6ae254526f87dfa1d6766e46f559b",
"assets/assets/images/4.0x/wellcome.png": "d233e3e8c8f2f453c604833e6dee1d4a",
"assets/assets/images/4.0x/oto.png": "afc639e11b40a27bd54e19d5b96c3aad",
"assets/assets/images/fingerprint.png": "7d4f82eb5a767562559549f366bda0f3",
"assets/assets/images/package2.png": "4c57e0b8bb613f4efbfbf5c40f943e4e",
"assets/assets/images/icon_camera2.png": "6a4990419ad56558c0824d8db3e0b508",
"assets/assets/images/oto.png": "f1ae95cf954ddb59516dc9fe978c1a4a",
"assets/assets/images/header_home.jpg": "e59b1193df681bb6077f745302d08786",
"assets/assets/images/package1.png": "2b75acd51b3808203338fd6f7202b8c6",
"assets/assets/images/hq.png": "7b40af9b23ab292f64c50fa76abecc5c",
"assets/assets/images/progress_indicator.gif": "0300791d128b81d3eca489c5d23854b9",
"assets/assets/images/next.png": "8d8cde8adff56ab88ade23f94d04c391",
"assets/assets/images/page4.png": "95a320603d83f562de4dcbb21a1333bc",
"assets/assets/images/back.png": "52fee5012988e2fac45223071595bca3",
"assets/assets/images/page1.png": "762362022e2676d0e104d060594082d2",
"assets/assets/images/page3.png": "3e70136fde5d9e1be66915f35ff8b83d",
"assets/assets/images/placeholder_image.jpeg": "8865f01b09e3902c0a7c342fa11a0234",
"assets/assets/images/home_bg_top.png": "9b45c60a0d5ca89d9d73526d8c4f5363",
"assets/assets/images/english.png": "f6b495f7c88fa3111cd327010d9ffb2f",
"assets/assets/images/bg_statis_home_view.png": "0f064754a61395bd2a68497cf124a349",
"assets/assets/images/page2.png": "59fcb07f3134f5f03ed9c1f5b93c30ba",
"assets/assets/html/web.html": "8ee885476daac2d7eb4f4b1b8df8bf8a",
"assets/assets/svgs/icon_car.svg": "36f3fb7babae718dede0d9eb2ac5c2e7",
"assets/assets/svgs/banner_news.svg": "263fa1790e3dea9e1bd7309543e89be6",
"assets/assets/svgs/icon_call.svg": "4842be9744f84ec0ede8d30acdfe46b0",
"assets/assets/svgs/icon_ring.svg": "e9c37c93b769c0d1bc1ba24a185884ed",
"assets/assets/svgs/logoPTIPrimary_new.svg": "ee3d198386584f3a1113eb368980055c",
"assets/assets/svgs/icon_welcome.svg": "019aba51ea37a27392ec69db25899efe",
"assets/assets/svgs/arrow_left.svg": "b1866f5f19560e98f0225735b7c705f6",
"assets/assets/svgs/avatar_blank.svg": "c7107409850993dbd665c2f4620707eb",
"assets/assets/svgs/icon_close.svg": "96e9de1aac7353608e9b5a736f20027e",
"assets/assets/svgs/icon_rectangle.svg": "5e0257600cb27dbde818cd9921e08212",
"assets/assets/svgs/arrow_right.svg": "beb7b668e941206b3fea67db6a4d6dbc",
"assets/assets/svgs/icon_edit.svg": "0074c0290f5afab257e809f09065b7de",
"assets/assets/svgs/icon_recbin.svg": "433ff4f5cc86241548d62a98e0ec37ea",
"assets/assets/svgs/icon_checkbox.svg": "5da5afa552bee67d4e4ce2162c7446f9",
"assets/assets/svgs/icon_utilities.svg": "68851d061e0fe5c5995d70a3499dada7",
"assets/assets/svgs/icon_checkbox_selected.svg": "51cc3c2d0828a1c10674c8cead9c3f21",
"assets/assets/svgs/icon_camera.svg": "5c08c632d6975eeeb606b44115bbcd59",
"assets/assets/svgs/icon_seach.svg": "f56c2fdcdd37b39bc3c46fdf27d9dd60",
"assets/assets/svgs/icon_edit_overview.svg": "e9d0acbbc1596e5957382cfefa0c6e66",
"assets/assets/svgs/icon_search_town.svg": "f82ef3954b887b55d8d44ac2038b7d29",
"assets/assets/svgs/icon_location.svg": "e97a3ffe19dd15ccef8cdf66d2252b09",
"assets/assets/svgs/icon_more_certificate.svg": "5786e9179e005cd27ab8e5f05d44137a",
"assets/assets/svgs/oto.svg": "5cbe04fcd4fdf72e96130b7f1b6f46dd",
"assets/assets/svgs/icon_arrow.svg": "71211bd5305a75359605c39e7b7816ec",
"assets/assets/svgs/icon_bike.svg": "ff8fc3d48262a03b12f22f6acf4f0c0d",
"assets/assets/json/config_vehicle_render_test.json": "fa0410ed86f716e058f7f12af8a63a3e",
"assets/assets/json/config_person_asbd_render.json": "bb9097f19550e0fe84a12447cf32fba4",
"assets/assets/json/config_person_tour_render.json": "3acc87f0e03dc62638dd64334b18c3dd",
"assets/assets/json/config_vehicle_render.json": "b13b67916de8f3318cb10683b2363f31",
"assets/assets/json/config_tai_nan_render.json": "c6bf8931b1be7c213adaf5fafb29eb73",
"assets/assets/json/config_person_render.json": "ce0ce50bcb98bbcb5394737b721b1aed",
"assets/assets/json/config_house_render.json": "de132ace6a5407db62b77c17f360c07e",
"assets/assets/json/config_vehicle_all_render.json": "594c8cf0a87575f8be9a78c615de9aa3",
"assets/assets/json/config_motor_render.json": "a5873194a8d758d9030df9bd2020ac21",
"assets/assets/json/config_credit_render.json": "afcdf1bf603efdb8b5ad73196e9adc49",
"assets/assets/json/config_hiem_ngheo_render.json": "3600686df455716dd167feb43cbdd96f",
"assets/assets/icons/icon_request_empty.svg": "a74d7c0645718d61c5a75d6031f5cee4",
"assets/assets/icons/icon_seller.svg": "87a84d3697b913177d7304bfd21fec66",
"assets/assets/icons/history_insurance.svg": "c1d4dfa2dfd65608aaa593867ec286c8",
"assets/assets/icons/not_start.svg": "975a62122295b8d24b75b8d3d8bc2476",
"assets/assets/icons/icon_list_bank.svg": "34dd3633608eec3a218d13ed53d8cd91",
"assets/assets/icons/icon_avt_default.png": "dfc5fdf399a46380ef6db2865cccdeaf",
"assets/assets/icons/document_text.svg": "f7a58c67bb2617e8e0b5fcf83e2e571a",
"assets/assets/icons/icon_request_success.svg": "9b4686abf5f23bf53fcc7d39b166a929",
"assets/assets/icons/user.svg": "fb70e6bb0fa706684d19c6cda4a236a6",
"assets/assets/icons/icon_pti_qr.png": "0cdfc29d8623cb0692fb62dd9d1f1c08",
"assets/assets/icons/vector_step.svg": "0706e9831138f03d80375819bb26e3e8",
"assets/assets/icons/icon_vertical.svg": "7cc09f069e912bc37dadc0feb27dfec5",
"assets/assets/icons/icon_phone.svg": "f861981c6b1391da2b96782024b440d2",
"assets/assets/icons/icon_gcn.svg": "cc96f2c3913bb3d26da4f90908f99f96",
"assets/assets/icons/Vector.svg": "9ca08b2892016b8eb774c82efeb00a44",
"assets/assets/icons/step_four.svg": "7c4d56a03873d0aff8c42fa7b863e124",
"assets/assets/icons/coppy.svg": "cf8f005105fc8a2e4bd804515365c223",
"assets/assets/icons/support_home.svg": "81c568d5a124b266848ef9416db02d5c",
"assets/assets/icons/lock.svg": "98dfbfacdaa2abb270c3924c711d19de",
"assets/assets/icons/icon_download.svg": "72f05197b70f64d25985394548a851ed",
"assets/assets/icons/support_arrow.svg": "9edb82ea82803bdf369d9862cf18a4ea",
"assets/assets/icons/icon_eclipse.png": "9d323b304c510b21cc9685c7602b4233",
"assets/assets/icons/people_insurance.svg": "20f553f909a26575f107ffde3059795f",
"assets/assets/icons/start_select.svg": "cba85c03c370dceb8acfa760363576bc",
"assets/assets/icons/arrowright.svg": "9ca08b2892016b8eb774c82efeb00a44",
"assets/assets/icons/icon_search.svg": "50aa8338e7273df463ea822fa7a4b420",
"assets/assets/icons/sms.svg": "0c97d572a04632ed2914efed58c4ba52",
"assets/assets/icons/myinsurance_home_select.svg": "20fcff5d05e1122693c696410f22c888",
"assets/assets/icons/icon_document.svg": "3132a83e5c36fa6bb89285c85ad74660",
"assets/assets/icons/icon_register_success.svg": "d582682da690003d3735348b4a2e267f",
"assets/assets/icons/step_one.svg": "b563162cc232ff32e7e80a05d2164fcc",
"assets/assets/icons/support_arrow1.svg": "789e53273e54563737c715adc7d11ae4",
"assets/assets/icons/icon_line.svg": "5089e9e50385a9042899c2af38bee9db",
"assets/assets/icons/icon_more.svg": "5caec6e8d5cf26a39874ee884aa35f7e",
"assets/assets/icons/logoPTI_ste.svg": "1dc25abb89e80a58e24fb829048215f7",
"assets/assets/icons/call_calling.svg": "da4bbd79934f518c1c65c42f85e2e1d4",
"assets/assets/icons/icon_search_notify.png": "34f0124103935cd0bd8f49e520cec8d9",
"assets/assets/icons/support.svg": "eb9103abd79afadfe479239bc42a24be",
"assets/assets/icons/vn.svg": "d82b22a114eeab12b6754629d449ea85",
"assets/assets/icons/icon_show_update.svg": "0ec7e70f89d0c9af34c26fd88dfdaf4d",
"assets/assets/icons/icon_edit.svg": "36fc70d1d26ac2fda7cb4241011a61d7",
"assets/assets/icons/user_home_select.svg": "c87368fb7f62ca174c025f77f184f8a6",
"assets/assets/icons/english.svg": "b4c0a2ff94e3a5eba31ae6b3a3fd19a2",
"assets/assets/icons/icon_update_avt.png": "eb21b28af941d4b021f2d7eb182c2978",
"assets/assets/icons/footer_my_insurance.svg": "acfbbca06e2b976d62cfdc09db000a38",
"assets/assets/icons/welcome.svg": "d1327107b189f1e15a320802df6fb3e3",
"assets/assets/icons/icon_sms.svg": "1507bf9836e44ac4038ee531e4e1a81f",
"assets/assets/icons/eye-slash.svg": "3db09e587296b4220c780615bed96f13",
"assets/assets/icons/icon_location_register.svg": "6c51ad241b27f05f52532a85fb841427",
"assets/assets/icons/history_indemnify.svg": "f45970e511460095ee2f57c9c47e2082",
"assets/assets/icons/icon_mail.svg": "37672ce825cf727d65e741596dc60e17",
"assets/assets/icons/user_home.svg": "080a91f91aacc0f778e747931e076df8",
"assets/assets/icons/step_two.svg": "c6ac4b930234f2ec49c1a90c4998d4c0",
"assets/assets/icons/identify.svg": "687bcc8174c38c76096e64fce0f21460",
"assets/assets/icons/icon_home_select.svg": "a8bd78b82e9bdae1566f8931adca4b1b",
"assets/assets/icons/step_three.svg": "77911e9af4010ccaa555917ee7b70ce2",
"assets/assets/icons/icon_add.svg": "2e415d8d44f10bd94490361b905d8d84",
"assets/assets/icons/icon_demo_history.svg": "b5fbdc591985ece16ba8e44c4e5b5975",
"assets/assets/icons/bank.svg": "537ab40f9b5b448bcf9984b33fddf8fb",
"assets/assets/icons/icon_start_process.svg": "0f85812c6ce3b16dca85b5515d9f2689",
"assets/assets/icons/icon_user_insurance.svg": "3141640dcb49307c10cf97e39456dac6",
"assets/assets/icons/frame1.svg": "2782466caf85374f79382ec932905a35",
"assets/assets/icons/icon_camera.svg": "f7baed19ff67072e61892a737f55f74c",
"assets/assets/icons/headphone.svg": "a1d2286a0c0f527dbfc635deff570c2a",
"assets/assets/icons/icon_car_insurance.svg": "7f4330baef7a9952912d786e38ea669e",
"assets/assets/icons/logoPTI_step.svg": "9b803425a0ef82c6d7a2b5c6e57db227",
"assets/assets/icons/logoptiprimary.svg": "10b28a9ac3540847921c555904b7c628",
"assets/assets/icons/hq.svg": "3bf9b62a04c16dcf8cb09b7688cc6cfe",
"assets/assets/icons/icon_home.svg": "3b407c9792e3c9579d3593fb4597d563",
"assets/assets/icons/frame2.svg": "7a00ae56a909e0c9db4401b0801e2b20",
"assets/assets/icons/icon_user.svg": "320ca2316fbd85a2f9462131974560be",
"assets/assets/icons/myinsurance_home.svg": "48f6d6b0eb4de92005d8cb705fbb4398",
"assets/assets/icons/calendar.svg": "042088d1cb101dff67b4c13bcc77fedc",
"assets/assets/icons/infor.svg": "90f9458960a9cb449feba0d189e74f58",
"assets/assets/icons/frame3.svg": "836eacb07174f3ab0467d68c237799b0",
"assets/assets/icons/icon_location.svg": "0fa42e7e215c0fb4d2b1f9cbf3156f8a",
"assets/assets/icons/mes_question.svg": "882418844441560fb94b11f213667c53",
"assets/assets/icons/icon_seller_select.svg": "7c4d388a4d2dcf3cfc4aff838d9fbce4",
"assets/assets/icons/bchh.svg": "d414fa9f1d26bcbe18926391f5d7e894",
"assets/assets/icons/back1.svg": "57186c85ce35441690dd29e65b94020f",
"assets/assets/icons/frame4.svg": "399e67d772c524c5f1ec01f2c2469849",
"assets/assets/icons/icon_dot.png": "419c8f29ee510f4d454b829d46f00ae8",
"assets/assets/icons/test.svg": "95f5c65f8ce4726d4d0051249af9ea7d",
"assets/assets/icons/icon_update_avt.svg": "631cf490557d865ed93e7ae3006b288a",
"assets/assets/icons/back2.svg": "9e483ae6df77449d1b7a92faaec0005b",
"assets/assets/fonts/helveticaneueregular.ttf": "ea05f6114b3efb842e31b45781e087cf",
"assets/assets/fonts/helveticaneuelight.ttf": "0a4d37b22558e86fc49120e96fcc2d01",
"assets/assets/fonts/helveticaneuebold.ttf": "0b929abbf4c28007eb424cd8c6f19506",
"assets/assets/fonts/helveticaneuemedium.ttf": "bd96bc9a5d9c3b07b628529db257e176",
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
