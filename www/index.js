// var req = require.context("./js/", true, /^(.*\.(js$))[^.]*$/igm);
// req.keys().forEach(function(key){
//     req(key);
// });
// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('./js/', true, /\.js$/));
require("script-loader!./js/app.js");
require("script-loader!./js/lib/video.js");
require("script-loader!./js/lib/videojs-playlist.js");
require("script-loader!./js/lib/three.js");
require("script-loader!./js/lib/videojs-panorama.v5.min.js");
// import vjs  from './js/lib/video.js';
// window.videojs = vjs;

// require('imports?this=>window!videojs-playlist');




// import videojs from './js/lib/video.js'
// require './js/lib/videojs-playlist.js'
// require './js/lib/three.js'
// require './js/lib/videojs-panorama.v5.min.js'
