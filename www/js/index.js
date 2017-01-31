// var vrView;
// var playButton;
// var muteButton;
//
// function onLoad() {
//   // Load VR View.
//   vrView = new VRView.Player('#vrview', {
//     width: '100%',
//     video: 'https://www.pointsmap.com/video.mp4',
//     is_stereo: false,
//     inline: true,
//     // is_debug: true,
//     //default_heading: 90,
//     //is_yaw_only: true,
//     //is_vr_off: true,
//   });
//   vrView.on('ready', onVRViewReady);
//
//   playButton = document.querySelector('#toggleplay');
//   muteButton = document.querySelector('#togglemute');
//
//   playButton.addEventListener('click', onTogglePlay);
//   muteButton.addEventListener('click', onToggleMute);
// }
//
// function onVRViewReady() {
//   console.log('vrView.isPaused', vrView.isPaused);
//   // Set the initial state of the buttons.
//   if (vrView.isPaused) {
//     playButton.classList.add('paused');
//   } else {
//     playButton.classList.remove('paused');
//   }
// }
//
// function onTogglePlay() {
//   if (vrView.isPaused) {
//     vrView.play();
//     playButton.classList.remove('paused');
//   } else {
//     vrView.pause();
//     playButton.classList.add('paused');
//   }
// }
//
// function onToggleMute() {
//   var isMuted = muteButton.classList.contains('muted');
//   if (isMuted) {
//     vrView.setVolume(1);
//   } else {
//     vrView.setVolume(0);
//   }
//   muteButton.classList.toggle('muted');
// }
//
// window.addEventListener('load', onLoad);
var vid = document.getElementById('vid');
console.log(vid);

document.getElementById('play-button').addEventListener("click", function(e){
  this.style.display = 'none';
  vid.play();
}, false);
