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
        $('#fileDecCard').html('File (Max size 2MB)');
    }
});

$("#RSAdec").change(function() {
    if ($(this).prop("checked") == true) {

        $(this).val('true');
        $('#AESdec').val('false');
        $('#fileDecCard').html('File (Max size 10KB)');

            $('#collapseDecTextInner').text("Your New Header");
        // });
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

        $('#fileCard').html('File (Max size 2MB)');

        $('#myGroup2').find('.collapse.show').collapse('hide');

    }
});

var $myGroup = $('#myGroup');
$myGroup.on('show.bs.collapse', '.collapse', function() {
    $myGroup.find('.collapse.show').collapse('hide');
});

var $myGroup2 = $('#myGroup2');
$myGroup2.on('show.bs.collapse', '.collapse', function() {
    $myGroup2.find('.collapse.show').collapse('hide');
});

var $myDec = $('#myDec');
$myDec.on('show.bs.collapse', '.collapse', function() {
    $myDec.find('.collapse.show').collapse('hide');
});

var $myDec2 = $('#myDec2');
$myDec2.on('show.bs.collapse', '.collapse', function() {
    $myDec2.find('.collapse.show').collapse('hide');
});

$("#AES").change(function() {
    if ($(this).prop("checked") == true) {

        if ($('#encInputFile').is(":visible")) {
            if ($('#auto').prop("checked") != true) {
                $('#encInputFile').attr('style', 'pointer-events:auto');
                $('#encInputFile').attr('style', 'opacity:1.0');

                if ($('#collapseEncFile').is(":hidden")) {
                    $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncFile').collapse('show');
                }
            } else {
                if ($('#collapseEncAuto').is(":hidden")) {
                    $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncAuto').collapse('show');
                }
            }
        } else {
            if ($('#auto').prop("checked") != true) {

                $('#encInputText').attr('style', 'pointer-events:auto');
                $('#encInputText').attr('style', 'opacity:1.0');

                if ($('#collapseEncText').is(":hidden")) {
                    $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncText').collapse('show');
                }
            } else {
                if ($('#collapseEncAuto').is(":hidden")) {
                    $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncAuto').collapse('show');
                }
            }
        }
        $('#options').attr('style', 'pointer-events:auto');
        $('#options').removeAttr('disabled');
        $('#options').attr('style', 'opacity:1.0');

        $('#fileCard').html('File (Max size 2MB)');
    }

});

$("#RSA").change(function() {
    if ($(this).prop("checked") == true) {
        if ($('#encInputFile').is(":visible")) {
            if ($('#auto').prop("checked") != true) {
                $('#encInputFile').attr('style', 'pointer-events:auto');
                $('#encInputFile').attr('style', 'opacity:1.0');

  if ($('#collapseEncFile').is(":hidden")) {
                        $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncFile').collapse('show');
                }
            } else {
                if ($('#collapseEncAuto').is(":hidden")) {
                    $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncAuto').collapse('show');
                }
            }
        } else {
            if ($('#auto').prop("checked") != true) {

                $('#encInputText').attr('style', 'pointer-events:auto');
                $('#encInputText').attr('style', 'opacity:1.0');

                if ($('#collapseEncText').is(":hidden")) {
                    $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncText').collapse('show');
                }
            } else {
                if ($('#collapseEncAuto').is(":hidden")) {
                    $('#myGroup2').find('.collapse.show').collapse('hide');
                    $('#collapseEncAuto').collapse('show');
                }
            }
        }
        $('#options').attr('style', 'pointer-events:auto');
        $('#options').removeAttr('disabled');
        $('#options').attr('style', 'opacity:1.0');

        $('#fileCard').html('File (Max size 10KB)');
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

var b1 = $('#button1');
var b2 = $('#button2');
var b3 = $('#button3');
var b4 = $('#button4');

b1.on('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to(b1, duration, {
        scaleY: 1.6,
        ease: Expo.easeOut
    });
    TweenMax.to(b1, duration, {
        scaleX: 1.2,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [3],
        delay: delay
    });
    TweenMax.to(b1, duration * 1.25, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [6],
        delay: delay * 3
    });
});

b2.on('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to(b2, duration, {
        scaleY: 1.6,
        ease: Expo.easeOut
    });
    TweenMax.to(b2, duration, {
        scaleX: 1.2,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [3],
        delay: delay
    });
    TweenMax.to(b2, duration * 1.25, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [6],
        delay: delay * 3
    });
});

b3.on('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to(b3, duration, {
        scaleY: 1.6,
        ease: Expo.easeOut
    });
    TweenMax.to(b3, duration, {
        scaleX: 1.2,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [3],
        delay: delay
    });
    TweenMax.to(b3, duration * 1.25, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [6],
        delay: delay * 3
    });
});

b4.on('click', function() {
    var duration = 0.3,
        delay = 0.08;
    TweenMax.to(b4, duration, {
        scaleY: 1.6,
        ease: Expo.easeOut
    });
    TweenMax.to(b4, duration, {
        scaleX: 1.2,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [3],
        delay: delay
    });
    TweenMax.to(b4, duration * 1.25, {
        scaleX: 1,
        scaleY: 1,
        ease: Back.easeOut,
        easeParams: [6],
        delay: delay * 3
    });
});
