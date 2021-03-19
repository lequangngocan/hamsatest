$(document).ready(function() {
    $(window).on('load', function() {
        $('body').removeClass('preloading');
        $('.preloader').delay(1000).fadeOut('fast');
     });
});
