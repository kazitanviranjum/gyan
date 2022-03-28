$(document).ready(function (){

    // Pre-Loder Js Start
    $(window).on("load", function () {
        $('#pre_loder').fadeOut(300);
    })
    // ||Pre-Loder Js End||

    // Nav-Link-To-Hading Js Start
    $('a').on('click', function (e) {
        e.preventDefault()

        var hash = this.hash

        if (this.hash !== '') {
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                300
            )
        }
    })
    // ||Nav-Link-To-Hading Js End||

    // Nav-Fixd Js Start
    $(window).on('scroll', function () {
        var scrollSize = $(this).scrollTop();

        if (scrollSize > 150) {
            $('nav').addClass('animate')
        } else {
            $('nav').removeClass('animate')
        }        
    })
    // ||Nav-Fixd Js End||

    // Banner Slider Js Start
    $('.banner_slider').slick({
        prevArrow:'<i class="banner_arrow fa-solid fa-angle-left"></i>',
        nextArrow:'<i class="banner_arrow fa-solid fa-angle-right"></i>',
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
    })
    // ||Banner Slider Js End||

    // About Slider Js Start
    $('.about_slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        dotsClass: 'slider_dots',
    })
    // ||About Slider Js End||

    // Countdown Js Start
    $('.inc').spincrement({
        duration: 15000,
    })
    // ||Countdown Js End||

    // Our Courses Slider Js Start
    $('.our_course_slider').slick({
        prevArrow:'<i class="our_course_batton fa-solid fa-angle-left"></i>',
        nextArrow:'<i class="our_course_batton fa-solid fa-angle-right"></i>',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 3000,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
      });
    // ||Our Courses Slider Js End||

    // PB-Calendar Js Start
    $("#pb-calendar").pb_calendar({
        'next_month_button' :'<i class="fa fa-chevron-up icon"></i>',
        'prev_month_button' :'<i class="fa fa-chevron-down icon"></i>',
    });
    // ||PB-Calendar Js End||

    // Testimonial Slider Js Start
    $('.testimonial_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
    })
    // ||Testimonial Slider Js End||

    // Teacher Slider Js Start
    $('.teacher_slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
      });
    // ||Teacher Slider Js End||

    // Contact-Slider Js Start
    $('.contact_slider').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
      });
    // ||Contact-Slider Js End||

    // Back-To-Top Js Start
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > 600) {
            $('#top').fadeIn(300)
        } else {
            $('#top').fadeOut(300)
        }
    })

    $('#top').on('click', function () {
        $("html, body").animate({
            scrollTop:0
        },400)
    })
    // ||Back-To-Top Js End||
})