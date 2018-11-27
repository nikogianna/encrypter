var $button1 = document.querySelector('.button1');
$button1.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button1, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button1, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button1, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
var $button2 = document.querySelector('.button2');
$button2.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button2, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button2, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button2, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
var $button3 = document.querySelector('.button3');
$button3.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button3, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button3, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button3, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
var $button4 = document.querySelector('.button4');
$button4.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button4, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button4, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button4, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});
