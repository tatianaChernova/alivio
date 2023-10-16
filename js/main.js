
// Mobile menu

$('.header__menu-btn').on('click', function () {
    $('.header__menu-btn, .header__nav').toggleClass('active');
    $('.header__btn').toggleClass('active');
    $('.body').toggleClass('lock');
});

//Magnific popup initialization for .story block

$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
