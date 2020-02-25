// const $ = require('jquery');

$(document).ready(function () {

    // slider navigation
    $('.section-navbar-wrapper-menu-burger-button').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('section-navbar-wrapper-menu-burger-button section-navbar-wrapper-menu-burger-button-active');
        $('.section-home-wrapper').toggleClass('section-home-wrapper-responsive');
        $('.section-navbar-wrapper').toggleClass('section-navbar-wrapper-responsive');
        $('.section-navbar-wrapper-menu').toggleClass('section-navbar-wrapper-responsive-menu');
        $('.section-navbar-wrapper-logo').toggleClass('section-navbar-wrapper-logo-hidden');
    });

    $('.bar').on('click', function(){
        $('.bar.selected').removeClass('selected');
        $(this).addClass('selected');
    });
});
