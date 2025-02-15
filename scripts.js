// Parallax Effect for Header
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    $('header').css('background-position', 'center ' + (scrollPos * 0.5) + 'px');
});

// Animating Project Content on Scroll
$(document).ready(function () {
    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop();
        $('.project').each(function () {
            var topOffset = $(this).offset().top;
            if (scrollPos > topOffset - $(window).height() + 100) {
                $(this).addClass('animated');
            }
        });
    });
});
