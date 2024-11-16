'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1bcc2e654c917f43862be699fdf9ffa1",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"index.html": "97ded87ec6e39f8733f15c58ed4cf864",
"/": "97ded87ec6e39f8733f15c58ed4cf864",
"main.dart.js": "ebe5ca9a428df7cd5a8ba04bb5873293",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
".git/config": "c08d0345dc45d213ca43d61ac78a08b6",
".git/objects/66/c51bb7a9d855bf0557c3f57d70bb5e76eb72f5": "55204a4c478e280c5f446599a34f130a",
".git/objects/66/c70eab5007298a1a89af48374506b52769f59d": "b6281ae33d0559df70b861ff2c7b1e60",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/308d5f6c07228feb2e4f41a99a7014d77f6809": "dbb50314cb0e552c2f34254800ccf3f5",
".git/objects/6a/2effbbede0308bdfc18da0c1f05791dd09944e": "57c3433665abe7742a8b14e55bdff472",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/cb86dc30d0006e59d704fdcde2e12c616ef018": "1e4dd6651b3523709a53e1604ae29626",
".git/objects/69/0b8d66d8dc78ea68917d10473bcf6ebb39d0d0": "4255d7ff6bf1fc80ca9e5e48e0780a74",
".git/objects/69/c1d2eac031276e31121fc78634668e3ce4f4b7": "ee9ab792c0f21907f17f1cd3b6af5909",
".git/objects/69/a7b0674767e32543fe68c874b52e6ce0bc1eed": "4fb188f29f50d09ad8bb19c6ff0484c8",
".git/objects/3c/be80e6986ca1f7649270b91d07c1ed1e02291f": "c04d5b81611cdfbf32f901285ec3aa22",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/0b/b1e61df344928680cfb4002855e9ea0c30dc01": "cc1857f46b1091ce43c9d81981dd1975",
".git/objects/93/7f1ec0371884aa6d340e57f522eba199147267": "4a0f5a99838d4bb685d82b20cad0fe4b",
".git/objects/94/ff6ff532f54395d6e4b8c0856dd6190431cfaa": "f4a45845b37f9c23798ec27683ea94dd",
".git/objects/60/fd15f8c1c87ef32aa83af90d4cb16572bb87b1": "d26d4cf3da3bad0cccc9a6af3f07814a",
".git/objects/34/7c6907602c563e52481998d7a72cf31eeddac1": "d2ee90fcf1941dd3089ab6d5c12a1a89",
".git/objects/33/4a87c9c4ef86f2a6b128ec03d658bb1b919edd": "0eaae6749d6d19d08345e5d1b832208c",
".git/objects/9d/0375ce477ec9baa93da5347ca85e478167d6a0": "4e4e0bc44af51a2707ce65b277798fd2",
".git/objects/a4/836dc78209484d2eb22a705da99f2d41d4fd11": "6d529338a4101513d8ba1da9465b66c0",
".git/objects/a3/8dafa5487e5ecdaad842aebe3bf3c49469c33b": "a9bcffc9f5af6451711794a089dae4e8",
".git/objects/b5/0fa73cc30d02559fc066eaa17e2a43ffd8191e": "9ed30f01543a8382001623f8bd0620ad",
".git/objects/b2/2cccd8d0fe383096769a023d4ece517fea7799": "24293fd497166b34883438f31d3c53ea",
".git/objects/d9/0fef37d7e2674ff1fffb0842a0578c679484a1": "7bd19c84d9f14facaf70f659c0f1600a",
".git/objects/ac/59df5dda70e43a2573a1d5443b0f147803cb77": "35bcc2e758a3a505f4b45b154ef12b3d",
".git/objects/ac/d4fc11899b6be18541a781fc2dadcd85ba78c8": "82eaac56916cd8e424317e2da1b73f66",
".git/objects/d0/73bf55f6a8b00aed5098ffeccda5563a5ec1ce": "0c8caa29d4b23d32356fac3cb818bae6",
".git/objects/d0/a26f8e5a94eb11fcb7b4a308861e1f76c3f71a": "b203318b979bfaf522a711641f193201",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/649a1e8dd4dfa57b543d96b77ee1f4c3d52967": "9d8a8899eb8ea8e7ee82c5bb4da4abf0",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/241183600ee86d0418827649946379f92c0097": "3645eb7c76a5d823b0ef8891c9253ab0",
".git/objects/a2/e9ef9f83b90b87169403005f3cf517f911a4cc": "7fd0b321aa6b535e3c9689a9d5fbd22b",
".git/objects/a5/0ae862d8dd1b27eb35602e6bc6c5831e8e7513": "9b29ac5f210832982fbbb8c0d1d96921",
".git/objects/a5/351654a3ab7cc4bc0dd96b43dbf34df4927f69": "77d2bbcbfb4cb009779eddec196246eb",
".git/objects/a5/b4865355f8d33a225cdab326e875ea873dc0a9": "4278a86db8488ad1ba49b5ab35b7419d",
".git/objects/bd/9bd14fcdf1bb3a1d6f3faa3aa02de051ed5c71": "debe645abc3a318ef9f842175f059302",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/6132b8aea2ace85e3a6503b564311ab2f5fb6f": "6a5546eea36d768510ea555dc181fd9a",
".git/objects/d8/9ed88ac730ecf3b7866fdf19554a65a48abd3a": "847f071e4584a350e3138d32ce25f1d0",
".git/objects/ab/ba08e56caf2ecd5770538fa06d89e8dc1ab42a": "4280d2381f25e01f49c6e59573753f43",
".git/objects/e5/f3d016bb1fe834bfbdf9273660afd812e14e0c": "2ac56e47e1d2e456dbd21bfca7bb8ea9",
".git/objects/e2/a41474b8f0ffae3070a7bf6a68f5a06aba7b86": "622be472f1a5fb6dea730f3168f3e320",
".git/objects/f4/2b5faa1a1fd9f6a7b637b3f32e33cb3625573f": "9642d808dc324fdf822aff592fa14dcb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/008d73f8175c26b8ffe30a22ddebb35ee3fb51": "40accd24e19ad2a4a348eb2445ffda89",
".git/objects/c9/d92cfe64bd8940df4d89bf6a7f51c34a01093d": "a4bc08f4a3f3b74f5f05a43f675cfa50",
".git/objects/fc/328ab38ab524a86c8c657f302d7d2a4ff558aa": "9133078d0d0ca8f10d11ffc054a632f2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/8be2dbfa6037ef4c1dbd4863fc549077dcd9df": "c27fef7620ea08088961fd25a5c3a1ed",
".git/objects/cf/e0f939ec205371e286ce7caa58b2bbfea52d48": "65f7ce6058bb56eb0107653b9e7dbbf4",
".git/objects/e4/6c22adbcee805155bcb67292108e8400be1376": "3cc014c341ff5a580977dde480b386c9",
".git/objects/ed/d1e9133f5232c8e7b72d864f88e8dcaceb0cd9": "f9213b12a729d1fc3f1031df4971aaa4",
".git/objects/ec/f1281e325d13665b53570d93f47996a355e6ea": "289364c818e32f596a48708ff3b263c6",
".git/objects/27/f9c2c11c112f998d2bbd4ec0018966cb8500a9": "46fa3ea563f07e6da8548a12620bcf99",
".git/objects/27/4c18bc394118538f37ca2837b9f1a265b07391": "96d9cbe6b7b7e09e435d71d3aeab0e22",
".git/objects/42/20b06d2a8be68defc5ba44167fa5b8333cb169": "4b0acf36e85dd5d3a4f008559f67094b",
".git/objects/89/1c9f2b682925cf4f917a0d75c8dea3717096fc": "b0a1d7f23ad9bdc00dddd5ed9a2664df",
".git/objects/45/d6cf556f233b11a0cc3e98dc10c7b56463ba77": "8a918dabbd7a29cb7944afdb86054b6c",
".git/objects/73/2994253d0e671d9018f140af768868eaeb6aa4": "9638355ffb0511ca21016aa0f1640b85",
".git/objects/73/fae8ab56a067a4af3fc600553b1cd8dc800248": "f9765a414bf1c5908aea741ebd010058",
".git/objects/73/9881eec8b61ca97417ac5af31d06208d55e95d": "ec8af6e1e4a103867a131ee5df29496a",
".git/objects/80/7297ef5e112730f359236d249ff0ae711d1784": "1972f8d0567578b9be73a06e48751a7d",
".git/objects/74/8d4493dbd70fa86159ff0bf9e6ca13b5ec8e31": "5e33756defe7e9818ecf55ab463936b9",
".git/objects/7b/6fb08151c1dfa02f40c7f2dbeaca64331356ca": "66d7824f8fe705da9b3b933ee7d08d0f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6f0e1a915e88f3d45a28e1d205f55eac167268": "7b99d809bf30c9e4701d4c522c8de063",
".git/objects/72/96feddb207e430c13d01a5e4a7595e38ec0b48": "635a83244def3bb9b0dff73827e3d175",
".git/objects/72/558b2833213ea02c2baa2bfbf350ae42809c00": "c73e07e4d95c0bde7671050534e24a5a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/0bcd839454041be53ca8e78f87d4c206321c76": "24462b9e73b472c5d841f67536bdf5da",
".git/objects/2a/380c3e6aed95af188bbbdde302ae50f31a5ac6": "b16b80ec2e03a4595d1cfb28cd12927c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/09fee421556facea999415ff67f03f9f81b52a": "e9d37613bca0455e2a6b61e791a146fd",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/4f3c9b054937898cec56f27c4e12b8263be503": "9d6dedf7a82fd4ad7e656256571358c1",
".git/objects/38/8dc0d10e0f0f42ecb598f89b658f9ec30e6bdc": "ec465c64c3c1d23eaa2917b87ec835e5",
".git/objects/6e/788209e6ce01507b4bac190dc02f41bfdb8607": "5b9b8154ef7f140a84290c569c2a6c38",
".git/objects/9a/0d9d7a6df767e3d9af66537fadd839752910d5": "dd6a4fffa376068e199beac63df3e89d",
".git/objects/9a/b43cbb0fffda651ae73a0785af63cb018b9b13": "fdfe4db43c29e23560c9e307a888850e",
".git/objects/36/2fb8326ec4b3f83ee5d4900104206f7c75aa58": "440186e3c73789b2278762b1933bb3ba",
".git/objects/5c/5522a4a2246ddea7f118887ed5f1ac18d8b940": "cbbce7c2e89b7cee8e783bb9eb7dbec8",
".git/objects/09/4594289ca6e25e3747d6f89e43cc6ef24da01c": "e62bf998ca4576889c4db73bf1eccf56",
".git/objects/5d/e9016cf3ae0695a178b3db5798799cd905b77b": "e44bf1e10af0a688fa2639a54610e533",
".git/objects/5d/ac9c36e66a9f9b2dcfd6eea116cb3236f63576": "31258935e0614448b1e8f23f6fe42210",
".git/objects/31/da2bbc0c7e6e8868a7488a67645fec389535bd": "2edd97414bcb8ee74d6b0a9f0499790f",
".git/objects/31/00c67f2f2f71fd474c4220c4d677d56ff6f3d8": "0a456f365a3deb647e573e5d680e4e0c",
".git/objects/91/d960ed691d86fda4648821db46b10a6287da62": "e988f3fd1bab6685a18f414d6ddcd731",
".git/objects/62/fa6aa82e748260f3cd5ec81ba3b7c42cff1bd7": "95c232eec3ee0d4126ab5b7cf6a8ae0e",
".git/objects/96/0205252556fb725cbf3341861b8e9e5d155364": "e3300b66cc76e821bb0373dd94582e38",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/c304c5cba2a85499bcfe6f2f8361ace9cef43e": "435219539e7e84d436bfa4e21b59ec01",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/66ed7926579014674ac068f60d2c2582a210d7": "c0cd8531ffdbad955c7e1a9d91a635fc",
".git/objects/30/add7b224ee7b33132d01a4479735719163f4cc": "84bb51a000714e05ffe50dd23a74de4b",
".git/objects/5b/89d867883f37d42f6a9e31fb9dec31d8cb148c": "af7dbf3f6a5fd15eacce8f79a40635db",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/08/0d424704f3c05ea45d5c80d4bad9aba76bf941": "901cd362f4c0dd9fe978ad91d35639d1",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/eb84b51044ad91694ea2dbb53b5e402f56bf06": "97a86c773fc19acab72c99c0ba7683c3",
".git/objects/01/b828886d08849802a908892450bf6f378e2172": "ef4abf7efcaa3a01bb9fdfa0076cb6f6",
".git/objects/39/0f20044e9a7d24c38d687f21732dfd86f4c815": "cc629d748535cf56e1497be32332c4e9",
".git/objects/55/79a25dc4910585b9690ff5e39c0bb280579275": "bc882dbe11a7ed7944d9c2ba379a1b5a",
".git/objects/55/6299da7163935688548b79e873fd54caf378a0": "3c2af19e010c4ef61f1db14c7463d9cb",
".git/objects/55/6855e71612979375159b72c1bb186faa790a89": "7b208839f70611f21a22ec7cb761162e",
".git/objects/0a/fe9b0b1dceec6af8541f1565a92d49a9d4c337": "12e7874b36f646d639741be60f43f05a",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/03d149a21ea2577c858fcaf2e6d6371846be43": "ee9f401cfc6d482786e2007921c07a21",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5f7eeb4daa0273c777a62255ebb5278b45a9e0": "8dd98813fba25418bbc4a545de015fce",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/fbd6b15e42f3e40fc435f742ef31288d4608fa": "49845ab67f448b0b14b3566760564bc2",
".git/objects/a9/7c0d0668c43b6a830a7eb19dbf9311631aa81d": "4c162c7662154acfe0cdedf22c5bdc0a",
".git/objects/d2/8ed09b26189af041a658456e39f750a5955389": "d632198494caa13404ad0bce77a2d88e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/eb3d847f289dd2e4b7bbe18f47c005cc726372": "e587de98a217a032a0c6344ffe0d0f5b",
".git/objects/a8/140dd377203c6daf60d256caed3a042ce56e62": "93faf1c6236edaeed1a4cdb798b5f0b9",
".git/objects/a8/999438e0eb377da3dc576cf07db11e14be2c90": "6cbb6f8d9a9c3dd2314e890ea4b89fe3",
".git/objects/de/b76f704941f61c132181e340377dee2857d5e2": "ac0f38e3695ee3e42c96ec2dad3b32de",
".git/objects/b0/764f337ee3c2dc3070b76bf76d8cc018a8527f": "e9a4f03c68c680bac6937833d6add498",
".git/objects/a6/8f11e012de02888d27ffad60a9719907a679de": "4b97327a0ee0e160ec338f8600b9773f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/f9e539656408f06cba4f1f2ddf5aca1afa8520": "2af3cb2b27ab0b513b503539f1909d67",
".git/objects/a1/024fb287dfa8bd858a25bf1415c7c0b37f1e21": "a0963a8070865f06bc2705292ba2e10f",
".git/objects/ea/560c041aed54e876cec98d6c0caab7c3215fe4": "540b11a7ec78e6bea3edf63b3557166c",
".git/objects/e6/5c8173fcd64dea1a856dcc4e990a2bebcb079c": "738c1e069462e845cbb3e0f1bebc3262",
".git/objects/f9/fc0d494a530b31b2dbb55abf8f49c1d4895421": "c0b8c455d0316d274f6bcbc0c81ab4eb",
".git/objects/f9/ae09b3157768e0d9a8d12fc327907ee41947aa": "74fb8a7acc6c3c186e5157cc9e5c9205",
".git/objects/f0/5993bf10cc5d31ae89dcf90e7423ffdd41a1c2": "5b045bccbd2e40d7fa05aad33d89d2be",
".git/objects/e8/0532559370f6d233c4dc6c696d69a499436691": "6208abf13655c293080a38ed49f38c87",
".git/objects/fa/1ce72142028f8236a29fc744e70738c6acf025": "d67aeec46d3060ffea48ade9a2b43c9d",
".git/objects/fa/a64a1b6bbf37d574ba7428000079c3d4cb0df2": "85a12a1d2c2d1e15ef981065e35693b3",
".git/objects/fa/d44762f93c2e7c8274bddd6c8a48e2445d8837": "69184f28be7cc8245d77993470202eb9",
".git/objects/c2/2613bf90a7d5fb8de97ac4a2e4695a20a13f31": "2d27192002687429dbc32c23870d3ef5",
".git/objects/cb/753125f1f262c0979d2b7f301398557cf880d7": "b7328aa65ba6b0dd77d0f73daeb901ae",
".git/objects/ce/7d84390ed062bf8f2b36a06b764e20b98d41d1": "5261fb50444b544e2e5ad6cd3a3f9eef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5b00ec16e146c955936f31944394a43c647375": "da954d6e7fee50285a635ea4d264c21e",
".git/objects/79/176f6604183500548b5ac405a9696c1ba59300": "6a9f826edd63e9d30c9c745b68ba115f",
".git/objects/83/71c7fb1d1e94e9bd395b2c4f3acffb3172f3c2": "29818c6ed2dc58d96df9633582eeb277",
".git/objects/1b/a59e07c48b2dd9cd8418860abdc491806462d0": "005c4ed040e98d82434458dc8db3231b",
".git/objects/77/5b6a8c7209f77738c8fb67dfcc42899c1c284d": "82fcc74bed323c21f8486983772d1109",
".git/objects/1e/e9685a490f02aaefb80a6a968725f8dbc3c5db": "bd4c41e0c3a527c4e4f9adf656b06aa7",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/23/cf8d6947bf872e368a8d26c14ea40fbe640126": "0bb1dd11756ab09e5e7ea9bf6baed26c",
".git/objects/8d/0001423c7eae387b2c0b202303c83311a48184": "4669959d24f320d6661d1ea80ff03337",
".git/objects/15/3811bcb0bd31bc8c00e8bfdcbc19cb747695c4": "277183c05dda19ca18e13792465355fd",
".git/objects/85/29e298e3575702f8fb52b23bcfd1831787d827": "eb3dc966aa861ee709bb680dca664a91",
".git/objects/71/cc45a83262aee104ca6dc48c4e0ccad4eed569": "3859707fe8ee25183ff34a90020af825",
".git/objects/82/88bf55346f3dd3e4e69b1cc595e11e40b928df": "59f5c5cbf8ee4a6f28d00896d3559175",
".git/objects/40/1f260c60833e09338ab1e5e2175a4342ecdcd5": "4c343620a581fc469b512708597dbcea",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8e/cce260c4dbd0843bbcd8812a9b54a93d5ec0ba": "c5bb342a38a8374ff2551c59ca6f4fdb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d2d6da8958a1168eb3962bb29886781",
".git/logs/refs/heads/main": "5d2d6da8958a1168eb3962bb29886781",
".git/logs/refs/remotes/origin/main": "415dbbc24ed18a0dd2900cd0a79b0445",
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
".git/refs/heads/main": "0bebfd337e650d1e2d3ff59dadf159c6",
".git/refs/remotes/origin/main": "799e8abdab1226481b59c0de92d3960e",
".git/index": "060eb219a07b0c718b2a57cc83601d50",
".git/COMMIT_EDITMSG": "d5653b44f01a6b1eafb70ae0acf16250",
".git/FETCH_HEAD": "bd16ad9781c098d9da298e591ee5cfae",
"assets/AssetManifest.json": "dd9f412ea7f97c6f4480d1dbc21f30ec",
"assets/NOTICES": "1071eeb17d1e93e034eface59ea109f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "db46d544a9196611e7a6d541856b03f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d499923a2a829b6473185e3be013408f",
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
