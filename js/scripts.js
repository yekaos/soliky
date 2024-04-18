/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const audioControl = document.getElementById('audio-control');
const audioPlayer = document.querySelector('.audio-player');

audioControl.addEventListener('click', () => {
if (audioPlayer.paused) {
    audioPlayer.play();
} else {
    audioPlayer.pause();
}
});
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});