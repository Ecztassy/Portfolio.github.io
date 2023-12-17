$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').addClass('visible');
        } else {
            $('#back-to-top').removeClass('visible');
        }
    });
    
    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
});