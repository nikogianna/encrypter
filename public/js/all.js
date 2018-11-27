$("#decFile").change(function() {
    if ($(this).prop("checked") == true) {

        $('#decInputText').hide();
        $('#decInputFile').show();
        $('#decText').prop('checked', false);
    }
});

$("#decText").change(function() {
    if ($(this).prop("checked") == true) {
        $('#decInputText').show();
        $('#decInputFile').hide();
        $('#decFile').prop('checked', false);
    }
});

$("#AESdec").change(function() {
    if ($(this).prop("checked") == true) {

        $(this).val('true');
        $('#RSAdec').val('false');
    }
});

$("#RSAdec").change(function() {
    if ($(this).prop("checked") == true) {

        $(this).val('true');
        $('#AESdec').val('false');
    }
});

$("#textUpload").on("submit", function(e) {
    if (document.getElementById("auto").value != null) {
        $('#randomEncryptionKey').val(document.getElementById("auto").value);
    }
});

$("#fileToUpload").on("submit", function(e) {
    if (document.getElementById("auto").value != null) {
        $('#randomEncryptionKey').val(document.getElementById("auto").value);
    }
});

$("#SHA").change(function() {
    if ($(this).prop("checked") == true) {

        if ($('#encInputFile').is(":visible")) {
            $('#encInputFile').attr('style', 'pointer-events:none');
            $('#encInputFile').attr('style', 'opacity:0.4');
        } else {
            $('#encInputText').attr('style', 'pointer-events:none');
            $('#encInputText').attr('style', 'opacity:0.4');
        }
        $('#options').attr('style', 'pointer-events:none');
        $('#options').attr('disabled', 'disabled');
        $('#options').attr('style', 'opacity:0.4');
    }

});

$("#AES").change(function() {
    if ($(this).prop("checked") == true) {

        if ($('#encInputFile').is(":visible")) {
          if ($('#auto').prop("checked") != true) {
            $('#encInputFile').attr('style', 'pointer-events:auto');
            $('#encInputFile').attr('style', 'opacity:1.0');
          }
        } else {
          if ($('#auto').prop("checked") != true) {

            $('#encInputText').attr('style', 'pointer-events:auto');
            $('#encInputText').attr('style', 'opacity:1.0');
          }
        }
        $('#options').attr('style', 'pointer-events:auto');
        $('#options').removeAttr('disabled');
        $('#options').attr('style', 'opacity:1.0');
    }
});

$("#RSA").change(function() {
    if ($(this).prop("checked") == true) {
      if ($('#encInputFile').is(":visible")) {
        if ($('#auto').prop("checked") != true) {
          $('#encInputFile').attr('style', 'pointer-events:auto');
          $('#encInputFile').attr('style', 'opacity:1.0');
        }
      } else {
        if ($('#auto').prop("checked") != true) {

          $('#encInputText').attr('style', 'pointer-events:auto');
          $('#encInputText').attr('style', 'opacity:1.0');
        }
      }
      $('#options').attr('style', 'pointer-events:auto');
      $('#options').removeAttr('disabled');
      $('#options').attr('style', 'opacity:1.0');
    }
});

$("#auto").change(function() {
    if ($(this).prop("checked") == true) {

        $(this).val("auto");
        if ($('#encInputFile').is(":visible")) {
            $('#encInputFile').attr('style', 'pointer-events:none');
            $('#encInputFile').attr('style', 'opacity:0.4');

        } else {
            $('#encInputText').attr('style', 'pointer-events:none');
            $('#encInputText').attr('style', 'opacity:0.4');
        }
    }

});

$("#manualFile").change(function() {
    if ($(this).prop("checked") == true) {

        $('#auto').val(null);

        $('#encInputFile').attr('style', 'pointer-events:auto');
        $('#encInputFile').attr('style', 'opacity:1.0');
        $('#encInputText').hide();
    }
});

$("#manualText").change(function() {
    if ($(this).prop("checked") == true) {
        $('#auto').val(null);
        $('#encInputText').attr('style', 'pointer-events:auto');
        $('#encInputText').attr('style', 'opacity:1.0');
        $('#encInputText').show();
        $('#encInputFile').hide();
    }
});

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
