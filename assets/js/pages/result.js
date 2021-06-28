jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function() {

        // Select box stacking order
        $('.result-filter-wrapper .select-wrapper').each(function(i) {
            $(this).css('z-index', 100 - i);
        });

        $('.result-wrapper').slick({
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 8,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
            ]
        });

        /* slider */

        $('.wrapper-cd-detail').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.wrapper-cd-detail-thumnail'
        });
        $('.wrapper-cd-detail-thumnail').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.wrapper-cd-detail',
            // centerMode: true,
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                    }
                }
            ]
        });

        $('.btn-book-tour').click(function(event) {
            /* Act on the event */
            event.preventDefault();
            $(this).parent().next('.timeline-book-block').toggleClass('show-book-block');
        });

        setTimeout(function() {
            if (window.innerWidth < 769) {

                $('.timeline-custom-col.content-col').each(function(index, el) {
                    var height_for_point = $(this).height()/2;
                    $(this).prev().css('top',height_for_point);
                });
                $('.timeline-block:last-child .timeline-point').css('height', $('.timeline-block:last-child .timeline-content').height()-150);
            }
            else {

                $('.timeline-custom-col.content-col').each(function(index, el) {
                    if ($(this).height() > 250) {

                        $(this).prev().css('top', '125px');            
                        $('.timeline-block:last-child .timeline-point').css('height', $('.timeline-block:last-child .content-col').height()-100);
                    }
                    else
                        $('.timeline-block:last-child .timeline-point').css('height', $('.timeline-block:last-child .content-col').height()-30);

                });
            }
        },2000);

    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.mainFunction();
    });

    /*======================================
    =          END INIT FUNCTIONS          =
    ======================================*/

});
