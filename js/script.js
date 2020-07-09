/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

// Top Navigation
$('.top-menu-toggle').on('click', function () {
    $(this).toggleClass('open-top-nav');
    $('.top-nav').toggleClass('open-top-nav');
});

$('.top-nav li a').click(function () {
    if ($('.top-nav').hasClass('open-top-nav')) {
        $('.top-nav').removeClass('open-top-nav');
        $('.top-menu-toggle').removeClass('open-top-nav');
    }
});

$('.top-menu-toggle').click(function () {
    if ($('.top-menu-toggle').hasClass('open-top-nav')) {
        $('.top-menu-toggle').addClass('active');
    } else {
        $('.top-menu-toggle').removeClass('active');
    }
});

// Sticky Navigation Landing Page
$(window).scroll(function () {

    if ($(window).scrollTop() > 750) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Sticky Navigation Work Page
$(window).scroll(function () {

    if ($(window).scrollTop() > 0) {
        $('.main_nav.work').addClass('sticky');
    } else {
        $('.main_nav.work').addClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function ($) {

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

});

/*----------------------------------------------------*/
/* Animation Fade In Top
------------------------------------------------------ */

TweenMax.staggerFrom(".heading", 1, { opacity: 0, y: -20, delay: 0.1 }, 0.5);

/*----------------------------------------------------*/
/* Experience Timeline effect
------------------------------------------------------ */

(function () {

    'use strict';

    var items = document.querySelectorAll(".timeline li,  .project-paragraph-img, .profile-img");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();

/*----------------------------------------------------*/
/* Contact Form
------------------------------------------------------ */

$(document).ready(function () {
    $('.submit-btn').click(function (event) {
        var name = $('.name-input').val();
        var statusName = $('.status-name');
        var email = $('.email-input').val();
        var statusEmail = $('.status-email');
        var message = $('.message-input').val();
        var statusMessage = $('.status-message');
        statusName.empty();
        statusEmail.empty();
        statusMessage.empty();

        if (name.length < 2) {
            event.preventDefault();
            statusName.append('<div>Name is not valid</div>');
        }

        if (email.length < 1) {
            event.preventDefault();
            statusEmail.append('<div>Email is not valid</div>');
        }

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        function validate() {
            var $result = $("#status-email");
            var email = $("#email").val();
            $result.text("");

            if (validateEmail(email)) {
                return true;
            } else {
                $result.text("Email is not valid");
            }
            return false;
        }

        $("#validate").on("click", validate);

        if (message.length < 10) {
            event.preventDefault();
            statusMessage.append('<div>Message is not valid</div>');
        }

    });
});

/*----------------------------------------------------*/
/* Back to top button
------------------------------------------------------ */

var btn = $('#back-to-top-btn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
