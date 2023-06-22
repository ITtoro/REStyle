(jQuery)(function ($) {

    $(window).on('load resize', function () {

        if (
                (navigator.userAgent.match(/iPad/i)) && (navigator.userAgent.match(/iPad/i) != null)
                || (navigator.userAgent.match(/Android/i)) && (navigator.userAgent.match(/Android/i) != null)
                || (navigator.userAgent.match(/BlackBerry/i)) && (navigator.userAgent.match(/BlackBerry/i) != null)
                || (navigator.userAgent.match(/iemobile/i)) && (navigator.userAgent.match(/iemobile/i) != null)
                )
        {
            $(".header-wrapper").css({"position": "relative", "padding-top": "15px"});
        }

    })
    // HEADER

    if (!is_touch_device()) {
        function set_static_header() {
            var header_height = $(".header-wrapper.header-transparent").height();
            var top_bar_height = $('#top-bar-wrapper').height();
            var top_bar_position = $('#top-bar-wrapper').outerHeight();

            if ($(this).scrollTop() > header_height) {
                $(".header-wrapper.header-transparent").stop().animate({
                    top: -top_bar_position - top_bar_height - 13
                }, 50)
                        .addClass("solid-color");
            } else {
                $(".header-wrapper.header-transparent").stop().animate({
                    top: 0
                }, 50)
                        .removeClass("solid-color");
            }
        }

        $(window).on('scroll', function () {
            if ($(window).width() > 973) {
                set_static_header();
            }
        });
        $(window).resize('scroll', function () {
            if ($(window).width() > 973) {
                set_static_header();
            }
        });
        set_static_header();

    }

    // ON LARGE SCREENS SHOW DROPDOWN ON HOVER
    if ($(window).width() > 991) {
        $('.navbar .dropdown').hover(function () {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(200);
        }, function () {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200);
        });
    }

    //ACCORDION
    (function () {
        'use strict';

        function change_icon(e) {
            $(e.target).prev('.panel-heading').find(".indicator").toggleClass('fa-plus fa-minus');
        }
        $('#accordion').on('hidden.bs.collapse', change_icon);
        $('#accordion').on('shown.bs.collapse', change_icon);
    })();


    // SIMPLE GALLERY WITH THUMBNAILS
    $('.simple-gallery').on('click', '.gallery-thumb img', function () {
        var directory = $(this).attr("src");
        $('.gallery-main-image').hide();
        $('.gallery-main-image').fadeIn('fast');
        $('.gallery-main-image').attr("src", directory);
    });

    // SCROLL TO TOP 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scroll-up').removeClass('hide-scroll').addClass('show-scroll');
        } else {
            $('.scroll-up').removeClass('show-scroll').addClass('hide-scroll');
        }
    });

    $('.scroll-up').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // function to check is user is on touch device
    if (!is_touch_device()) {

        // ANIMATED CONTENT
        if ($(".animated")[0]) {
            jQuery('.animated').css('opacity', '0');
        }

        var currentRow = -1;
        var counter = 1;

        $('.triggerAnimation').waypoint(function () {
            var $this = $(this);
            var rowIndex = $('.row').index($(this).closest('.row'));
            if (rowIndex !== currentRow) {
                currentRow = rowIndex;
                $('.row').eq(rowIndex).find('.triggerAnimation').each(function (i, val) {
                    var element = $(this);
                    setTimeout(function () {
                        var animation = element.attr('data-animate');
                        element.css('opacity', '1');
                        element.addClass("animated " + animation);
                    }, (i * 250));
                });

            }

            //counter++;

        },
                {
                    offset: '70%',
                    triggerOnce: true
                }
        );

    }
    ;

    // function to check is user is on touch device
    function is_touch_device() {
        return Modernizr.touch;
    }

    // Placeholder fix for old browsers
    $('input, textarea').placeholder();

    /*
     * SVG COLOR CHANGING
     */
    jQuery('.icon-container img').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});









