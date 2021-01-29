$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        navText: ["<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"],
        responsive: {
            0: {
                items: 1
            },
            801: {
                items: 3
            }
        }
    });
});

const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    nav.classList.toggle("nav-show");
    burger.classList.toggle("toggle");
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('nav-bg');
    } else {
        $('nav').removeClass('nav-bg');
    }
});