$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.header .main-header').addClass('sticky');
    }
    else {
        $('.header .main-header').removeClass('sticky');

    }
    if ($(window).scrollTop() >= 1000) {
        $('.yourplan-stripe').addClass('sticky');

    }
    else {
        $('.yourplan-stripe').removeClass('sticky');
    }
    if ($(window).scrollTop() >= 100) {
    }
    else {
        $('.header .sub-header').removeClass('sticky');
    }

});

$(document).ready(function () {
    $('#exampleModalLong').modal('show');
    //product page payment option see more
    $('.pay_see_more').click(function () {
        var _this = this;
        var text = $(_this).parents('.pay_see_more_div').find('.pay_see_more_text')
        var moreText = $(_this).parents('.pay_see_more_div').find('p span.d-none')
        $(_this).addClass('d-none')
        moreText.removeClass('d-none')
        text.fadeIn('fast');
        $(_this).parents('.pay_see_more_div').find('.pay_see_less').removeClass('d-none')
    })
    $('.pay_see_less').click(function () {
        var _this = this;
        var text = $(_this).parents('.pay_see_more_div').find('.pay_see_more_text')
        var moreText = $(_this).parents('.pay_see_more_div').find('p span')
        text.fadeOut('fast');
        moreText.addClass('d-none')
        $(_this).addClass('d-none')
        $(_this).parents('.pay_see_more_div').find('.pay_see_more').removeClass('d-none')
    })

    $(".numbers li").click(function (e) {
        $(".numbers li").removeClass("active");
        $(this).addClass("active");
    });

    //overlapping safari fixes
    $(".popup-advert .close-tracking").click(function () {
        $(".cookies-section-zain").addClass("overlapping_safari");
        $(".main-header").addClass("overlapping_safari");
        $(".sub-header").addClass("overlapping_safari");

    });

    //home new close section
    $("#cookie-close-zain").click(function () {
        $(".cookies-section-zain").addClass("d-none");
        $('.bodyoverlay2').removeClass("show");
    });
    $("#accept_cookies").click(function () {
        $(".cookies-section-zain").addClass("d-none");
        $('.bodyoverlay2').removeClass("show");
    });
    $("#decline_cookies").click(function () {
        $(".cookies-section-zain").addClass("d-none");
        $('.bodyoverlay2').removeClass("show");
    });
    $("#cross_notify").click(function () {
        $(".notify-bar").addClass("d-none");
        $(".sub-header.header_with_top_bar").addClass("top_barclosed");
    });


    $("#cookie-close-zain").click(function () {
        $(".cookies-section-zain").addClass("d-none");
    });

    $(".order-tracking-popup .close-tracking").click(function (e) {
        $('.order-tracking-popup').removeClass("show");
        $('.bodyoverlay').removeClass("show");
        $('.bodyoverlay1').removeClass("show");
        console.log("closed");
    });


    $("#popup-small .close-tracking").click(function (e) {
        $('.order-tracking-popup').removeClass("show");
        $('.bodyoverlay1').removeClass("show");
    });

    $(".homeline-section #plan-type .plan-box").click(function (e) {
        $('.border-line').removeClass('hide');
        $('#camera-type').removeClass('hide');
        $('#networking-type').removeClass('hide');
    });

    // For Right to laft Sliders
    var slideDirection = $('html').attr('dir');
    var rtl = slideDirection == 'ltr' ? false : true;
    // console.log(rtl);




    //Home- Banner Slider
    if ($('.banner-slider-wrapper').length) {
        $('.banner-slider-wrapper').slick({
            arrows: false,
            dots: true,
            pauseOnFocus: false,
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
            rtl: rtl
        });
    }

    //Home - plans Slider
    if ($('.plans_slider').length) {
        $('.plans_slider').slick({
            arrows: false,
            slidesToShow: 4,
            infinite: false,
            dots: false,
            rtl: rtl,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.6,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }]
        });
    }

    //Home - Product Slider
    if ($('.product_slider').length) {
        $('.product_slider').slick({
            arrows: false,
            slidesToShow: 4,
            infinite: false,
            dots: false,
            rtl: rtl,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.1,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.4,
                    dots: true,
                }
            }]
        });
    }



    // Home - Zain order slider
    if ($('.zain-order-slider').length) {
        $('.zain-order-slider').slick({
            arrows: true,
            dots: true,
            slidesToShow: 1,
            infinite: false,
            rtl: rtl,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }]
        });
    }

    // Home - Zain life slider
    if ($('.zainlife-slider, .offers-slider').length) {
        $('.zainlife-slider, .offers-slider').slick({
            arrows: true,
            dots: true,
            slidesToShow: 2,
            infinite: false,
            rtl: rtl,
            prevArrow: '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.05,
                    arrows: false,
                }
            }]
        });
    }

    if ($('.price_new').length) {
        var dir_val = false;
        if (document.getElementById("langs") != null) {
            dir_val = true;
        }
        $('.price_new').slick({
            arrows: true,
            slidesToShow: 3,
            rtl: dir_val,
            infinite: false,
            dots: true,
            prevArrow: '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    dots: false
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.1,
                    arrows: false,
                    dots: true,
                }
            }, {
                breakpoint: 768.98,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            }, {
                breakpoint: 460.98,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,
                    dots: true,
                }
            }]
        });
    }

    // Product Detail - Product slider
    if ($('.product-detail-slider').length) {
        $('.product-detail-slider .slider_nav').slick({
            arrows: true,
            slidesToShow: 4,
            infinite: false,
            vertical: true,
            dots: false,
            focusOnSelect: true,
            centerMode: false,
            asNavFor: '.product-detail-slider .slider_main',
            prevArrow: '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
        });
        $('.product-detail-slider .slider_main').slick({
            slidesToShow: 1,
            infinite: false,
            arrows: true,
            dots: false,
            rtl: rtl,
            asNavFor: '.product-detail-slider .slider_nav',
            prevArrow: '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '130px',
                }
            }, {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1.2,
                    centerMode: true,
                    centerPadding: '0px',
                }
            }]
        });
    }


    if ($('.product_slider_new').length) {
        var dir_val = false;
        if (document.getElementById("langs") != null) {
            dir_val = true;
        }
        $('.product_slider_new').slick({
            arrows: true,
            slidesToShow: 3,
            rtl: dir_val,
            infinite: false,
            dots: false,
            prevArrow: '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    dots: false
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.1,
                    arrows: false,
                    dots: true,
                }
            }, {
                breakpoint: 768.98,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            }, {
                breakpoint: 460.98,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,
                    dots: true,
                }
            }]
        });
    }

    // Product detail - plans Carousal
    if ($('.slick-plan-carousel').length) {
        $('.slick-plan-carousel').slick({
            slidesToShow: 4,
            arrows: true,
            dots: false,
            infinite: false,
            rtl: rtl,
            prevArrow: '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.1,
                    arrows: false,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false,
                    dots: true,
                }
            }]
        });
    }


    initJsComponents();

    $(window).on('load resize', function () {
        // Calling init JS Function
        initJsComponents();
        filterOpenClose();
    });

    if ($(".product-thumbnail .product-image .fav").length > 0) {
        $(".product-thumbnail .product-image .fav").click(function () {
            $(this).toggleClass("active");
            if ($(this).hasClass('active')) {
                $(this).find('i').removeClass('icon-heart-feel-grey');
                $(this).find('i').addClass('icon-favorite-heart-button1');
            } else {
                $(this).find('i').addClass('icon-heart-feel-grey');
                $(this).find('i').removeClass('icon-favorite-heart-button1');
            }
        })
    }


    // On tab click change plus and minus icon
    $('.features_accordian .btn-link').on('click', function () {
        if ($(this).find('i').hasClass('icon-add-1')) {
            $('.features_accordian .btn-link i').removeClass('icon-minus').addClass('icon-add-1');
            $(this).find('i').removeClass('icon-add-1').addClass('icon-minus');
        } else {
            $(this).find('i').removeClass('icon-minus').addClass('icon-add-1');
        }
    });


    // btn-group active
    $('.radio-wraper .btn input').on('click', function () {
        $(this).closest('.radio-wraper').find('.btn.active').removeClass('active');
        $(this).closest('.btn').addClass('active');
        var lableVal = $(this).val();
        $(this).closest('.radio-wraper').prev().find('.auto-lbl').html(lableVal);
    })
    $('.payment-option-pd .btn input').on('click', function () {
        var lableid = this.id + '-tab';
        $('.' + lableid).siblings('div').fadeOut('fast', function () {
            $('.' + lableid).fadeIn('slow')
        })
    })
    $('.payment-option-tab-group .gift-radio').change(function () {
        $('.payment-selection').removeClass('active-border')
        $(this).parents('.payment-selection').addClass('active-border')
        $('.add-to-cart-btn').removeAttr('disabled')
    })
    var viewMoreTextFlag = 0;
    $('.view-more-text').click(function () {
        if (viewMoreTextFlag % 2 == 0) {
            $(this).html($('html').attr('lang') == 'ar-SA' ? 'عرض أقل' : 'View less')
        } else {
            $(this).html($('html').attr('lang') == 'ar-SA' ? 'عرض المزيد' : 'View More')
        }
        viewMoreTextFlag++
        $('.ellipses-text').toggleClass('show-full-text')
    })
    if ($('.payment-option-tab-group .gift-radio:checked').length > 0) {
        $('.add-to-cart-btn').removeAttr('disabled')
    } else {
        $('.add-to-cart-btn').attr('disabled', 'disabled')
    }

    // Megamenu toggle
    $('[data-target-menu]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target-menu');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(target).removeClass('show');
            $('.bodyoverlay').removeClass('show');
        } else {
            $(this).addClass('active');
            $(target).addClass('show');
            $('.bodyoverlay').addClass('show');
        }
    });
    // Outside click close
    $('.bodyoverlay').on('click', function () {
        $('.cart-summary-dropdown, .search-autocomplete, .main-mobile-menu').removeClass('show');
        $('.bodyoverlay').removeClass('show');
        $('[data-target-menu]').removeClass('active');
        $('a[data-target-menu="#search"]').find('i').addClass('icon-magnifying-glass').removeClass('icon-cancel-1');
        $('.mobile-nav .mobile-menu-toggle>a').find('i').addClass('icon-hamburger').removeClass('icon-cancel-1');
        $('.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megamenu-level-2').removeClass('slide-left');
        $('.order-tracking-popup').removeClass('show');
        $(".plan-popup").css("display", "none");

    });

    $('.right-nav a[data-target-menu="#search"]').on('click', function () {
        // Changeing icon on click
        var crossIcon = $(this).find('i');
        if (crossIcon.hasClass('icon-magnifying-glass')) {
            crossIcon.removeClass('icon-magnifying-glass').addClass('icon-cancel-1');
        } else {
            crossIcon.addClass('icon-magnifying-glass').removeClass('icon-cancel-1');
        }
    });

    $('.mobile-nav .mobile-menu-toggle>a').on('click', function () {
        // Changeing icon on click
        var crossIcon = $(this).find('i');
        if (crossIcon.hasClass('icon-hamburger')) {
            crossIcon.removeClass('icon-hamburger').addClass('icon-cancel-1');
        } else {
            crossIcon.addClass('icon-hamburger').removeClass('icon-cancel-1');
            $('.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megamenu-level-2').removeClass('slide-left');
        }
    })

    // Defining the local dataset
    var devices = ['iPhone', 'iPhone 3G', 'iPhone 3GS', 'iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5C', 'iPhone 5S', 'iPhone 6 / 6 Plus', 'iPhone 6S / 6S Plus', 'iPhone SE', 'iPhone 7 / 7 Plus', 'iPhone 8 / 8 Plus', 'iPhone X', 'iPhone XS / XS Max', 'iPhone XR', 'iPhone 11', 'iPhone 11 Pro/11 Pro Max'];

    // Constructing the suggestion engine
    var devices = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: devices
    });

    // Initializing the typeahead
    $('.typeahead').typeahead({
        hint: false,
        highlight: true,
        /* Enable substring highlighting */
        minLength: 3,
        /* Specify minimum characters required for showing result */
        autoSelect: false

    }, {
        name: 'devices',
        source: devices
    });

    //Hide fixed-sect when footer comes on scroll
    if ($(window).width() <= 767) {
        $(window).scroll(function () {
            var hT = $('.product-listing-option').offset().top,
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT - wH)) {
                $('.fixed-sect').fadeOut();
            } else $('.fixed-sect').fadeIn();
        });


        var stripe = $('.bottom-stripe');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                stripe.show();
            } else {
                stripe.hide();
            }
        });


    }


    $('.kw #wrapper .radio-wraper .btn.custom-radio input[type="radio"][name="pay"]').change(function () {

        if (this.value == '20') {
            $(".month-details").removeClass('hide');
            $(".no-commitmentplans").addClass('hide');
        }
        else if (this.value == '40') {
            $(".month-details").removeClass('hide');
            $(".no-commitmentplans").addClass('hide');
        }
        else if (this.value == 'no-commitment') {
            $(".month-details").addClass('hide');
            $(".no-commitmentplans").removeClass('hide');

        }
    });


    $('.kw #wrapper .radio-wraper input[type="radio"][name="nc"]').change(function () {
        if (this.value == 'prepaid-plans') {
            $(".kw #wrapper .fixed-sect .chooseplan").removeClass('hide');
            $(".kw #wrapper .fixed-sect .buyplan").addClass('hide');
            $(".prepaid-plans").removeClass('hide');
            $(".deviceprice").addClass('hide');
        }
        else if (this.value == 'device-only') {
            $(".kw #wrapper .fixed-sect .buyplan").removeClass('hide');
            $(".kw #wrapper .fixed-sect .chooseplan").addClass('hide');
            $(".prepaid-plans").addClass('hide');
            $(".deviceprice").removeClass('hide');
        }

    });

    if ($("#popup-small").length > 0) {
        $("body").click(function () {
            $("#popup-small .popup_closer").trigger('click')
        })
        // Prevent events from getting pass .popup
        $("#popup-small").click(function (e) {
            e.stopPropagation();
        });
        $(".confirmed").click(function (e) {
            e.stopPropagation();
        });
        $(".declined").click(function (e) {
            e.stopPropagation();
        });
        $("#popup-small .popup_closer").click(function (e) {
            if ($(this).hasClass("accepted")) {
                $('#popup-small .offer-thankyou').fadeIn('slow', function () {
                    setTimeout(function () {
                        $(".bodyoverlay1").removeClass("show").addClass('hide');
                        //$(".bodyoverlay2").removeClass("show");
                        $("#popup-small").removeClass("show").addClass('hide');
                    }, 3000)
                })
            } else {
                if ($(this).hasClass("accept_offer")) {
                    console.log('confirmed');
                    $("#popup-small").removeClass("show").addClass('hide');
                    $(".confirmed").addClass('show');
                } else if ($(this).hasClass("decline_offer")) {
                    console.log('declined');
                    $("#popup-small").removeClass("show").addClass('hide');
                    $(".declined").addClass('show');
                } else {
                    $("#popup-small").removeClass("show").addClass('hide');
                    //$(".bodyoverlay2").removeClass("show");
                    $(".bodyoverlay1").removeClass("show").addClass('hide');
                }
            }
        });
    }

    $('.confirmed .popup_closer, .declined .popup_closer').click(function (event) {
        $(this).parents('.order-tracking-popup').removeClass("show").addClass('hide');
        $(".bodyoverlay1").removeClass("show").addClass('hide');
    })
});


function calculate(obj) {
    document.getElementById("output").innerHTML = obj.value;
}



// custom-number-input
if ($('.custom-number-input').length > 0) {
    $('.custom-number-input').on('click', '.btn', function () {
        var current_target = this;
        var cur_wrap = $(current_target).closest('.custom-number-input');
        var curr_input = cur_wrap.find('input');
        var curr_input_val = parseInt(curr_input.val());

        var max_val = curr_input.attr('maxlength');
        var min_val = curr_input.attr('minlength');

        if (this.classList.contains('btn-plus')) {
            if (curr_input_val < max_val) {
                curr_input_val++;
                $(curr_input).val(curr_input_val++);
            }
        } else if (this.classList.contains('btn-minus')) {
            if (curr_input_val > min_val) {
                curr_input_val--;
                $(curr_input).val(curr_input_val);
            }
        }
    });
}





// no-commitment
$('.pay-options').on('click', function () {
    if ($(this).find('#nc').closest('.custom-radio').hasClass('active')) {
        $('.no_commitment-sect').show();
    } else {
        $('.no_commitment-sect').hide();
    }
})

$('.footer-title').on('click', function (e) {
    e.preventDefault();
    var target = $(this).closest('.colunm-wrapper').find('.footer-links');
    if (target.hasClass('open')) {
        target.removeClass('open');
        $(this).find('i').removeClass('icon-minus');
    } else {
        $('.footer-content .colunm-wrapper .footer-links').removeClass('open');
        $('.footer-content .colunm-wrapper i').removeClass('icon-minus');
        target.addClass('open');
        $(this).find('i').addClass('icon-minus');
    }
})

$('.filter-option-group .btn-reset').on('click', function () {
    //$(this).parents('.left-content-area').toggleClass('open');
})
$('.filters-button-row .close-button-x, .filters-results-row .filter-results-button').on('click', function () {
    //$('.left-content-area').toggleClass('open');
    //$('.filter-results-tags-row').toggleClass('open');
    //$('.filters-button-control-row').toggleClass('open');
    // $('.filters-results-row-expand').toggleClass('open');
})

$('.filters-results-row-expand.filter-results-button').on('click', function () {
    //   $(this).parents('filters-results-row-expand').toggleClass('open');
})
$('.filters-results-row.filter-results-button').on('click', function () {
    //  $(this).parents('filters-results-row').toggleClass('open');
})

function filterOpenClose() {
    if ($('.left-content-area').length && $('.left-content-area').hasClass('open')) {
        $('.left-content-area').css({
            "width": "",
            "margin-left": "",
            "margin-right": "",
            "padding-left": "",
            "padding-right": "",
            "max-width": "",
            'position': '',
            'z-index': '',
            'top': ''
        });
        winWidth = $(window).width();
        leftContentWidth = $('.left-content-area').outerWidth();
        space = ((winWidth - leftContentWidth) / 2);
        topAlign = $('.filters-results-row.filter-expand').outerHeight();
        $('.left-content-area').css({
            "width": winWidth,
            "margin-left": space * -1,
            "margin-right": space * -1,
            "padding-left": space,
            "padding-right": space,
            "max-width": 'none',
            "position": "absolute !important",
            "z-index": "9",
            "top": topAlign
        });
    } else if ($('.left-content-area').length) {
        $('.left-content-area').css({
            "width": "",
            "margin-left": "",
            "margin-right": "",
            "padding-left": "",
            "padding-right": "",
            "max-width": "",
            'position': '',
            'z-index': '',
            'top': ''
        });
    }

    if ($('.filters-results-row').length && $('.filters-results-row').hasClass('filter-expand')) {
        $('.filters-results-row').css({
            "width": "",
            "margin-left": "",
            "margin-right": "",
            "padding-left": "",
            "padding-right": "",
            "max-width": "",
            'position': '',
            'z-index': '',
            'height': ''
        });
        winWidthF = $(window).width();
        leftContentWidthF = $('.filters-results-row').outerWidth();
        spaceF = ((winWidthF - leftContentWidthF) / 2);
        $('.filters-results-row').css({
            "width": winWidth,
            "margin-left": spaceF * -1,
            "margin-right": spaceF * -1,
            "padding-left": space,
            "padding-right": space,
            "max-width": 'none',
            "position": "absolute !important",
            "z-index": "9",
            "height": topAlign
        });
    } else if ($('.filters-results-row').length) {
        $('.filters-results-row').css({
            "width": "",
            "margin-left": "",
            "margin-right": "",
            "padding-left": "",
            "padding-right": "",
            "max-width": "",
            'position': '',
            'z-index': '',
            'height': ''
        });
    }
}

$('.filters-results-row .filter-results-button, .filters-results-row .buttons-container .save-link-button, .filter-option-group .btn-save').on('click', function (e) {
    e.preventDefault();
    $('.filters-results-row').toggleClass('filter-expand');
    $('.left-content-area').toggleClass('open');
    $('.filter-results-tags-row').toggleClass('open');
    filterOpenClose();
})
$('.filters-results-row .buttons-container .reset-link, .filter-option-group .btn-reset').on('click', function (e) {
    e.preventDefault();
    $('.filters .filter-option-group input.checkbox').prop("checked", false);
});

$('.fav-comp .btn').on('click', function () {
    $(this).toggleClass('active');
})



// Open and Close Mobile Second level Menu
if ($('.mobile-megamenu li .mobile-megamenu-level-2').length) {
    $('.mobile-megamenu li .mobile-megamenu-level-2').closest('li').addClass('hasSubNav');
}
$('.mobile-megamenu li.hasSubNav a, .mobile-megamenu li.hasSubNav i.icon-right-arrow').on('click', function (e) {
    e.preventDefault();
    $(this).closest('li.hasSubNav').find('.mobile-megamenu-level-2').addClass('slide-left');
});
$('.mobile-megamenu-level-2 .back-link').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.mobile-megamenu-level-2').removeClass('slide-left');
});

// Mobile Second level Accordian open and close
$('.accordian-menu>li>a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).closest('li').find('.expandable-links');
    if (target.hasClass('expand')) {
        target.removeClass('expand');
        $(this).find('i').removeClass('icon-rotate-180');
    } else {
        $('.accordian-menu>li .expandable-links').removeClass('expand');
        $('.accordian-menu>li a i.icon-rotate-180').removeClass('icon-rotate-180');
        $(this).find('i').addClass('icon-rotate-180');
        target.addClass('expand');
    }
})

$('.btn.add-plan,.fixed-sect .btn.chooseplan').on('click', function (e) {

    $('#nav-home-tab').addClass('active show');
    $('#nav-profile-tab').removeClass('active show');
    $('#nav-home').addClass('active show');
    $('#nav-profile').removeClass('active show');

    var new_position = $('.kw #wrapper .slick-plan-carousel .plan-detail-wrapper.recomanded').offset();
    var buynow_position = $('.btn.btn-pc-3.btn-lrg').offset();
    var preorder_position = $('.pre-order-details').offset();
    var buttonname = $(this).attr('name');
    if (buttonname == 'preorder') {
        $('html, body').stop().animate({
            scrollTop: preorder_position.top
        }, 500);
    } else if (buttonname == 'buynow') {
        $('html, body').stop().animate({
            scrollTop: buynow_position.top
        }, 500);
    } else {
        $('html, body').stop().animate({
            scrollTop: new_position.top
        }, 500);
    }
    e.preventDefault();
})


// step progress find completed last child
$('.step.completed:has(+.step.active)').addClass('recent-completed');

//popup accept msg
var acptPopups = document.querySelectorAll('.acpt_popup');
if (acptPopups) {
    acptPopups.forEach(function (acptPopup) {
        acptPopup.addEventListener('click', function () {
            var parent = $(this).parent()
            parent.fadeOut('slow', function () {
                parent.removeClass('d-flex')
                parent.parent().find('.thanks_msg_accept').fadeIn('slow')
            })
        })
    })
}



// all JS components init inside this Function
function initJsComponents() {
    // For Right to laft Sliders
    var slideDirection = $('html').attr('dir');
    var rtl = slideDirection == 'ltr' ? false : true;
    //  console.log(rtl);

    // home - Top selected slider after 768px
    if ($('.top-selected_slider').length) {
        $('.top-selected_slider').not('.slick-initialized').slick({
            rtl: rtl,
            responsive: [{
                breakpoint: 4000,
                settings: 'unslick'
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.1,
                    dots: true,
                    centerMode: false,
                    infinite: false,
                    arrows: false
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.05,
                    dots: true,
                    centerMode: false,
                    infinite: false,
                    arrows: false
                }
            }]
        });
    }



    // search result custom slider
    var $status = $('.resultPagination');
    var $slickElement = $('.search-result_slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;

        var textDirection = $('html').attr('dir');
        var rtl = textDirection == 'ltr' ? false : true;


        if ($(window).width() < 1200 && !rtl) {
            $status.html('<strong>' + i + '</strong> of <span>' + slick.slideCount + '</span>');

        } else if ($(window).width() < 1200 && rtl) {
            $status.html('<strong>' + i + '</strong> من <span>' + slick.slideCount + '</span>');
        }
    });

    if ($('.search-result_slider').length) {

        $('.search-result_slider').not('.slick-initialized').slick({
            rtl: rtl,
            prevArrow: '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 4000,
                settings: 'unslick'
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.05,
                    dots: false,
                    centerMode: false,
                    infinite: false,
                    arrows: true
                }
            }]
        });
    }

    // Plans Hover Effact
    if (window.innerWidth > 1199) {
        $('.plans-wrapper .slide').on('mouseenter mouseleave touchstart touchend', function () {
            // debugger;
            if ($(this).hasClass('active')) { } else {
                $('.plans-wrapper .slide').addClass('hover-collapse');
                $('.plans-wrapper .slide').removeClass('active');
                $(this).addClass('active').removeClass('hover-collapse');
            }
        })
    } else {
        $(".plans_slider").on("swipe afterChange", function (event, slick, direction) {
            var curSlide = slick.currentSlide;
            $('.plans-wrapper .slide').removeClass('active').addClass('hover-collapse');
            $(slick.$slides[curSlide]).addClass('active').removeClass('hover-collapse');
        });
    }


    // Customs select Init
    if ($('.custom-select').length) {
        $('.custom-select').select2({
            minimumResultsForSearch: -1,
        });
    }

    if ($('.sub-header .custom-select').length) {
        $('.sub-header .custom-select').select2({
            minimumResultsForSearch: -1,
            dropdownAutoWidth: true,
            width: 'auto'
        });
    }

    if ($('.custom-scroll').length) {
        $(".custom-scroll").mCustomScrollbar({
            theme: "dark-3",
            axis: "y",
            autoHideScrollbar: true,
            alwaysShowScrollbar: 1,
        });
    }

    // Set Height of left content for filter section (Profuct Listing Page)
    // add this after-portlat-load function() in liferay
    filterHeight = $('.filters').height();
    $('.filters').closest('[class*=layout-]').css('min-height', filterHeight + 100);

    // set recomanded thumbneil height

    var thumbHeight = $('.product-thumbnail:not(.product-thumbnail.recomanded)').height();
    $('.product-thumbnail.recomanded .setbg img').css('min-height', thumbHeight + 5)

    // Add Content in mobile
    var dropdownmenu = $('.right-nav #cartdropdownmenu');
    if (window.innerWidth < 1200) {
        $('.mobile-nav .cart-dropdown').append(dropdownmenu);
    } else {
        $('.right-nav .cart-dropdown').append($('.mobile-nav .cart-dropdown #cartdropdownmenu'));
        $('.mobile-nav .cart-dropdown #cartdropdownmenu').remove();
    }
    //alert(1);
}

var $navLinks = $('.search-results .nav-item.nav-link');
var $navExpandLinks = $('.search-results .nav-item.nav-link.expand-link');

$navLinks.on('click', function (event) {
    $navLinks.toggleClass('active-link');
    $navLinks.toggleClass('expand-link');
    $(this).toggleClass('active-link');
    if (window.innerWidth < 768) {
        $('.search-results .nav-tabs').toggleClass('open-tabs');
    }
});



// Textarea Message box
$(document).ready(function () {
    $('#iphoneXs').click(function (event) {
        var btn = this,
            toStatus = btn.checked;
        //loop through each checkbox
        $('.gift-1').fadeToggle();
    });
    $('#smarthomecamera').click(function (event) {
        var btn = this,
            toStatus = btn.checked;
        //loop through each checkbox
        $('.gift-2').fadeToggle();
    });

    $('#gift_message_1').on('keydown', function () {
        var key = String.fromCharCode(event.which);
        if (!event.shiftKey) {
            key = key.toLowerCase();
        }
        $('#gift_message_2').val($(this).val() + key);
    });

    $("#smarthomecamera").click(function () {
        $(".gift-message.gift-2 textarea").attr("id", "gift_message_3");
    });
});


// Added for New Pages dated 03-04-2020

$(document).ready(function (e) {
    // added for simcard

    $(".replace-sim .btn").click(function (e) {
        if ($(".replace-existing-sim").hasClass("active")) {
            $("#replace-existing-sim-wraper").hide();
            $(".replace-sim").addClass("voice-border");
            $("#validate-sec").show();
        } else {
            $("#replace-existing-sim-wraper").show();
            $(".replace-sim").removeClass("voice-border");
            $("#validate-sec").hide();

        }
    });

    $(".noslider").slick('unslick');


    // added for popup
    $(".check-availability-action").click(function (e) {
        $(".bodyoverlay,.availability-popup").addClass("show");
    });

    $(".availability-popup .close-availability,.kw #wrapper .bodyoverlay.show").click(function (e) {
        $(".bodyoverlay,.availability-popup").removeClass("show");
    });



    $(".kw #wrapper .product-thumbnail .product-detail .tab-placement-box").hide();

    $(".add-close-tab .add-sign").click(function (e) {
        $(this).parents(".product-thumbnail").find(".tab-placement-box").slideDown();
        $(this).hide();
        $(this).parents(".product-thumbnail").find(".close-sign").show();
        clc = 0;
    });
    $(".add-close-tab .close-sign").click(function (e) {
        $(this).parents(".product-thumbnail").find(".tab-placement-box").slideUp();
        $(this).hide();
        $(this).parents(".product-thumbnail").find(".add-sign").show();
        clc = 0;
    });

    /*Added for card valu*/

    clc = 0;
    $(".value-span").click(function (e) {

        getboxedID = $(this).attr("id");

        clc++;

        finalprice = $(this).parents(".product-detail").find(".price-tag h4").attr("id");

        if (clc == 1) {
            finalprice = $(this).parents(".product-detail").find(".price-tag h4").text();
            finalprice = finalprice.split(" ");
            finalprice = finalprice[1];
            $(this).parents(".product-detail").find(".price-tag h4").attr("id", finalprice)
        } else {

        }

        getpriceV = $(this).find("span").text();

        $(this).parents(".product-detail").find(".value-span").removeClass("active");
        $(this).addClass("active");

        iNum1 = parseInt(finalprice);
        iNum2 = parseInt(getpriceV);

        updatedprice = iNum1 + iNum2;

        $(this).parents(".product-detail").find("h4").text("KD " + updatedprice);

        $(this).parents(".product-detail").find(".form-control").val("1");

    });


    /*Added for filters*/

    $(".left-content-area .custom-checkbox input").prop("checked", false);

    $(".right-content-area .row .col-md-4").each(function (index, element) {
        $(this).addClass("filter-items");
    });


    ///-featured

    $(".left-content-area .custom-checkbox label").click(function (e) {

        $(".right-content-area .row .filter-items").hide();

        $(".viewmore-link").hide();

        if ($(this).parents(".custom-checkbox").find("input").prop("checked") == false) {
            $(this).parents(".custom-checkbox").addClass("active");
        } else {
            $(this).parents(".custom-checkbox").removeClass("active");
        }

        var item_data_info_vals = 0;

        var sel_filters_nums = $(".left-content-area .custom-checkbox.active").length;

        $(".left-content-area .custom-checkbox.active").each(function (index, element) {  ///

            var getfilters = $(this).attr("id");
            var item_data_info = $(this).attr("item-data-info");

            if (item_data_info == 1) {
                item_data_info_vals = item_data_info_vals + 1;
            }/*else{

				setTimeout(function(){
					$(".right-content-area ."+getfilters+" ").fadeIn();
				}, 350);
			} */

            if (sel_filters_nums == item_data_info_vals && item_data_info_vals > 0) {

                //$(".right-content-area .row .filter-items").show();

                if ($(".right-content-area .featured_info").length) {
                    $(".right-content-area .featured_info").show();
                }

                $(".viewmore-link").show();
                $(".right-content-area ." + getfilters + " ").fadeIn();

            } else if (item_data_info_vals > 0) {

                if ($(".right-content-area .featured_info").length) {
                    $(".right-content-area .featured_info").show();
                }

                $(".viewmore-link").show();
                $(".right-content-area ." + getfilters + " ").fadeIn();

            } else {

                setTimeout(function () {
                    $(".right-content-area ." + getfilters + " ").fadeIn();

                }, 350);
            }

        });

        if ($(".right-content-area .tmp_featured_info").length) {
            $(".right-content-area .tmp_featured_info").show();
        }

        /*setTimeout(function(){
            if(item_data_info_vals >0){
                $(".right-content-area .featured_info").show();
            }
        }, 350); */


        //col-md-4 col-sm-6 pay_montly home entertainment health lifestyle under20 filter-items

        getactive = $(".left-content-area .custom-checkbox.active").length

        if (getactive == 0) {
            $(".right-content-area .row .filter-items").fadeIn();
            $(".viewmore-link").show();

            $(".right-content-area .row .featured_info").hide();
            //$(".viewmore-link").hide();
        } else {

        }

    });

    $(".filters-results-row .save-link-button, .filters .btn-save").click(function (e) {

        $(".selected-filtes-mobile").html("");
        $(".left-content-area .custom-checkbox.active").each(function (index, element) {
            getSelectFilter = $(this).attr("id");
            getSelectText = $(this).find("label").text();

            $(".selected-filtes-mobile").append('<a id="' + getSelectFilter + '" class="filter-results-tags">' + getSelectText + '<span class="close-tag-icon">x</span></a>');

        });

    });

    jQuery(document).on("click", '.filter-results-tags .close-tag-icon', function (event) {

        getTheSelectFilter = $(this).parents("a").attr("id");

        $(this).parents("a").remove();
        //$(".left-content-area .custom-checkbox label").trigger("click");

        $(".filters div#" + getTheSelectFilter + " label").trigger("click");
        //$(".filters #"+getTheSelectFilter).find("input").prop("checked",false);

        //alert(getOBJ)

    });

    $(".btn-reset,.reset-link").click(function (e) {

        $(".filters").find("input").prop("checked", false);
        $(".filters .custom-checkbox").each(function (index, element) {
            $(this).removeClass("active");
        });

    });

    $(".bands-group .custom-radio:first-child").click(function (e) {
        $('.colorwatch-wrapper').addClass("hide");
        $('.colorwatch-wrapper.sport-band').removeClass("hide");
    });
    $(".bands-group .custom-radio:nth-child(2)").click(function (e) {
        $('.colorwatch-wrapper').addClass("hide");
        $('.colorwatch-wrapper.sport-loop').removeClass("hide");
    });
    $(".bands-group .custom-radio:nth-child(3)").click(function (e) {
        $('.colorwatch-wrapper').addClass("hide");
        $('.colorwatch-wrapper.sport-leather').removeClass("hide");
    });
    $(".bands-group .custom-radio:nth-child(4)").click(function (e) {
        $('.colorwatch-wrapper').addClass("hide");
        $('.colorwatch-wrapper.sport-steel').removeClass("hide");
    });
    $(".order-tracking-popup .close-tracking").click(function (e) {
        $('.order-tracking-popup').removeClass("show");
        $('.bodyoverlay').removeClass("show");
        $('.bodyoverlay1').removeClass("show");
        console.log("closed");
    });



    $(".arrowd-btn").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('toggle');
    });
    $(".special-procs li a").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $("#validate-sec .btn").click(function (e) {
        $('.verify-account').addClass("show");
        $('.bodyoverlay').addClass("show");
    });
    $(".resend-otp").click(function (e) {
        e.preventDefault();
        $('.otp-popup').removeClass("show");
        $('.resend-box').addClass("show");
    });

    $(".verify-account .btn").click(function (e) {
        e.preventDefault();
        $('.verify-account .alert-otp').show();
        $('.verify-account .otp-digits').addClass('red');
    });

    $(".resend-box .btn").click(function (e) {
        e.preventDefault();
        $('.plan-popup').show();
        $('.resend-box').hide();
    });
    $(".plan-popup .close-tracking").click(function (e) {
        $('.plan-popup').hide();
    });

    $(".existing-number > a").click(function (e) {
        e.preventDefault();
        $('.existing-number .search-area').slideToggle();
        $('.new-number .search-area').hide();
    });
    $(".new-number > a").click(function (e) {
        e.preventDefault();
        $('.new-number .search-area').slideToggle();
        $('.existing-number .search-area').hide();
    });

    $("ul.size_clr li .sizes_in a").click(function (e) {
        e.preventDefault();
        $('ul.size_clr li .sizes_in a').removeClass('active');
        $(this).addClass('active');
    });

    $("ul.size_clr li .colur_in a").click(function (e) {
        e.preventDefault();
        $('ul.size_clr li .colur_in a').removeClass('active');
        $(this).addClass('active');
    });

    $("#plan-type .plan-box").click(function (e) {
        $('#plan-type .plan-box').removeClass('active');
        $(this).addClass('active');
        $('#line-type').removeClass('hide');
        $('#choose-type').remove();
        $('.plan-section').removeClass('active');
        $("#plan-type").removeClass('active');


    });


    $(".number-sec > div > a").click(function (e) {
        $('.number-sec > div > a').removeClass("active");
        $(this).addClass('active');
    });


    $("#line-type .boardband-sec").click(function (e) {
        e.preventDefault();
        $('#line-type .plan-box').removeClass('active');
        $(this).addClass('active');
        $('#commitment-type').removeClass('hide');
        $('#network-type').removeClass('hide');
        $('#extras-type').removeClass('hide');
        $('#extras-type2').addClass('hide');
        $('#sim-type').removeClass('hide');
        $('#number-type').removeClass('hide');
        $('#smartphone').removeClass('hide');
        $('#secondary').removeClass('hide');
        $('#subscription-type').removeClass('hide');
        $('.range-slider').addClass('hide');
        $('.row').removeClass('hide-sec');
        $("#line-type").removeClass('active');
        $('#line-type .plan-circle').removeClass('active');
        $('#smartphone').removeClass('active');
        $('.yourplan-stripe .action button').prop("disabled", false);
        fillPopup();

    });


    $("#line-type .smartphone-sec").click(function (e) {
        e.preventDefault();
        $('#line-type .plan-box').removeClass('active');
        $(this).addClass('active');
        $('#commitment-type').addClass('hide');
        $('#network-type').addClass('hide');
        $('#extras-type').addClass('hide');
        $('#extras-type2').removeClass('hide');
        $('#sim-type').removeClass('hide');
        $('#number-type').removeClass('hide');
        $('#smartphone').removeClass('hide');
        $('#secondary').addClass('hide');
        $('#subscription-type').addClass('hide');
        $('.range-slider').removeClass('hide');
        $('.row').removeClass('hide-sec');
        $("#line-type").removeClass('active');
        $('#line-type .plan-circle').removeClass('active');
        $('#smartphone').addClass('active');

        $('.yourplan-stripe .action button').prop("disabled", false);

        fillPopup();

    });



    $("#sim-type .plan-box").click(function (e) {
        e.preventDefault();
        $('#sim-type .plan-box').removeClass('active');
        $(this).addClass('active');

        var lineType = $("#line-type .active h3").html();

        if (lineType == "Smartphone") {
            calcNewPlanCost();
        } else {
            calcNewPlanCostCommitment();
        }

    });
    $("#network-type .plan-box").click(function (e) {
        e.preventDefault();
        $('#network-type .plan-box').removeClass('active');
        $(this).addClass('active');

        calcNewPlanCostCommitment();
    });
    $("#commitment-type .plan-box").click(function (e) {
        e.preventDefault();
        $('#commitment-type .plan-box').removeClass('active');
        $(this).addClass('active');

        calcNewPlanCostCommitment();

    });

    $("#extras-type2 .extra-icons li a").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');

        calcNewPlanCost();
        fillPopup();

    });

    // Commitment extras
    $("#extras-type .extra-icons li a").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');

        calcNewPlanCostCommitment();
    });

    $("#plan-type .plan-box").click(function () {
        fillPopup();
        $('html, body').animate({ scrollTop: eval(($('#line-type').offset().top) - 380) }, 'slow');
    });

    $(".commitment-boxes .plan-box").click(function () {
        $('html, body').animate({ scrollTop: eval(($('.commitment-boxes').offset().top) - 80) }, 'slow');
    });

    $("#sim-type .network-boxes .plan-box").click(function () {
        $('html, body').animate({ scrollTop: eval(($('#sim-type .network-boxes').offset().top) - 80) }, 'slow');
    });

    // Calculate customise-plan.html priceValue
    var yourSmartphone = false;
    $("#double-label-slider2, #double-label-slider3, #double-label-slider4, #double-label-slider5").click(function () {
        calcNewPlanCost();
        fillPopup();
    });

    // Commitment Data (GB) Slider
    $("#double-label-slider").click(function () {
        calcNewPlanCostCommitment();
    });

    function calcNewPlanCost() {
        var newPlanCost = 0;
        /*var dataGB = $("#double-label-slider2 .ui-slider-pip-selected .ui-slider-label").attr('data-value');
        var zainMins = $("#double-label-slider3 .ui-slider-pip-selected .ui-slider-label").attr('data-value');
        var localMins = $("#double-label-slider4 .ui-slider-pip-selected .ui-slider-label").attr('data-value');
        var intMins = $("#double-label-slider5 .ui-slider-pip-selected .ui-slider-label").attr('data-value');*/

        var dataGB = $("#double-label-slider2 .ui-slider-pip-selected .ui-slider-label i").html();
        var zainMins = $("#double-label-slider3 .ui-slider-pip-selected .ui-slider-label i").html();
        var localMins = $("#double-label-slider4 .ui-slider-pip-selected .ui-slider-label i").html();
        var intMins = $("#double-label-slider5 .ui-slider-pip-selected .ui-slider-label i").html();

        var extras = 0;
        if ($("#extras-type2 .extra-icons li a").hasClass("active") == true) {
            var inputs = $("#extras-type2 .extra-icons li .active");

            for (var i = 0; i < inputs.length; i++) {
                extras += parseInt($(inputs[i]).data("price"));
            }

            newPlanCost += extras;
        }

        // Sim type
        if ($(".network-boxes .plan-box").hasClass("active") == true) {
            newPlanCost += 2;
        }

        if (dataGB > 0) {
            newPlanCost += parseInt(dataGB);
        }

        if (zainMins > 0) {
            newPlanCost += parseInt(zainMins);
        }

        if (localMins > 0) {
            newPlanCost += parseInt(localMins);
        }

        if (intMins > 0) {
            newPlanCost += parseInt(intMins);
        }

        if (yourSmartphone == true) {
            newPlanCost += 26;
        }

        document.getElementById('customise-price').innerHTML = newPlanCost;
    };

    // Caludate price for Commitment
    function calcNewPlanCostCommitment() {
        var newPlanCost = 0;

        // Your Commitment
        if ($("#commitment-type .plan-box").hasClass("active") == true) {
            newPlanCost += 2;
        }

        // Your Network Type
        if ($("#network-type .plan-box").hasClass("active") == true) {
            newPlanCost += 2;
        }

        // Your Data GB
        var dataGB = $("#double-label-slider .ui-slider-pip-selected .ui-slider-label i").html();
        if (dataGB > 0) {
            $(".cmt-data-gb-price").html("KD " + dataGB + "/month");
            $(".cmt-data-gb-price-ar").html("KD " + dataGB + "/شهر");
            newPlanCost += parseInt(dataGB);
        }

        // Extras
        var extras = 0;
        if ($("#extras-type .extra-icons li a").hasClass("active") == true) {
            var inputs = $("#extras-type .extra-icons li .active");

            for (var i = 0; i < inputs.length; i++) {
                extras += parseInt($(inputs[i]).data("price"));
            }

            newPlanCost += extras;
        }

        // Your Network Type
        if ($("#sim-type .plan-box").hasClass("active") == true) {
            newPlanCost += 2;
        }

        // Your smartphone
        if (yourSmartphone == true) {
            newPlanCost += 29;
        }

        document.getElementById('customise-price').innerHTML = newPlanCost;
    }

    // On tab click change plus and minus icon
    $('.new-number .search-area li a').on('click', function () {
        $(".new-number .selected-number").html($(this).attr("data-number"));
        $('.new-number .search-area').slideToggle();
        $('.existing-number .search-area').hide();
        fillPopup();
    });

    // On tab click change plus and minus icon
    $('.existing-number .search-area li a').on('click', function () {
        $(".existing-number .selected-number").html($(this).attr("data-number"));
        $('.existing-number .search-area').slideToggle();
        $('.new-number .search-area').hide();
        fillPopup();
    });

    $('.network-boxes .plan-box').on('click', function () {
        fillPopup();
    });

    // smartphone selection
    $("#smartphone .product-detail .btn").on('click', function () {

        if (yourSmartphone == false) {
            $(this).html('Remove from my plan');
            yourSmartphone = true;
        } else {
            $(this).html('Add to plan');
            yourSmartphone = false;
        }

        var lineType = $("#line-type .active h3").html();

        if (lineType == "Smartphone") {
            calcNewPlanCost();
        } else {
            calcNewPlanCostCommitment();
        }
    });

    // View added items action
    $(".yourplan-stripe .action .btn-link").on('click', function () {
        // Show popup
        $('.bodyoverlay').addClass('show');
        $('.customise-popup').addClass('show');
    });

    // Fill popup with values
    function fillPopup() {
        var planType = $("#plan-type .plan-box h3").html();
        var lineType = $("#line-type .plan-box h3").html();
        var dataGB = $("#double-label-slider2 .ui-slider-pip-selected .ui-slider-label i").html();
        var zainMins = $("#double-label-slider3 .ui-slider-pip-selected .ui-slider-label i").html();
        var localMins = $("#double-label-slider4 .ui-slider-pip-selected .ui-slider-label i").html();
        var intMins = $("#double-label-slider5 .ui-slider-pip-selected .ui-slider-label i").html();
        var extras = '';
        if ($("#extras-type2 .extra-icons li a").hasClass("active") == true) {
            var inputs = $("#extras-type2 .extra-icons li .active span");

            for (var i = 0; i < inputs.length; i++) {
                if (extras == "") {
                    extras = $(inputs[i]).html();
                } else {
                    extras = extras + ", " + $(inputs[i]).html();
                }
            }
        }
        var simType = $(".network-boxes .active h3").html();
        var number = $(".new-number .selected-number").html();
        if (number != '') {
            number = "New: " + number;
        }
        var existing = $(".existing-number .selected-number").html();
        if (existing != '') {
            existing = "Existing: " + existing;
        }

        var smartphone = $(".slick-active .product-name").html();
        var smartphone = $(".slick-active .product-name").html();
        var size = "<br />" + $(".product-detail .sizes_in .active").html();
        var colour = "<br />" + $(".product-detail .colur_in .active").data("colour");
        $(".order-tracking-popup .items-sec .plan-type").html(planType);
        $(".order-tracking-popup .items-sec .line-type").html(lineType);
        $(".order-tracking-popup .items-sec .data").html(dataGB);
        $(".gb-data-price").html("KD " + dataGB);
        $(".order-tracking-popup .items-sec .zain-mins").html(zainMins);
        $(".zain-mins-price").html("KD " + zainMins);
        $(".order-tracking-popup .items-sec .local-mins").html(localMins);
        $(".local-mins-price").html("KD " + localMins);
        $(".order-tracking-popup .items-sec .int-mins").html(intMins);
        $(".int-mins-price").html("KD " + intMins);
        $(".order-tracking-popup .items-sec .extras").html(extras);
        $(".order-tracking-popup .items-sec .number").html(number + existing);
        $(".order-tracking-popup .items-sec .smartphone").html(smartphone + size + colour);
    };
    //.order-tracking-popup .items-sec

    // Fill popup with values
    function fillPopupCommitment() {

    }

    $('.product_slider_new').on('click', '.extra-cart-box .icon-exclamatory', function () {
        if ($(this).parents(".extra-cart-box").hasClass("show")) {
            $(this).parents(".extra-cart-box").removeClass("show");
        } else {
            $(".kw #wrapper .product-thumbnail.extra-cart-box").removeClass("show");
            $(this).parents(".extra-cart-box").addClass("show");
        }

    });

    // Search function for existing Number
    $("#txt-existing-number").keyup(function () {
        searchExistingNumber();
    });

    function searchExistingNumber() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('txt-existing-number');
        filter = input.value.toUpperCase();
        ul = document.getElementById("existing-number-list");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    $(".close-existing-number").click(function (e) {
        e.preventDefault();
        $('.existing-number .search-area').slideToggle();
        $('.new-number .search-area').hide();
    });

    $(".smartphone .plan-box").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $(".home-plan .icon-exclamatory").click(function (e) {
        $(this).closest(".device-boxes").toggleClass('active');
    });
    $("#plan-type .plan-box a").click(function (e) {
        e.preventDefault();
        $(".plan-popup").css("display", "block");
        $(".bodyoverlay").addClass("show");
    });



    if ($(window).width() <= 767) {
        $(".yourplan-stripe h2").append("<b></b>");
        $(".yourplan-stripe .action").hide();
        $(".yourplan-stripe h2 b").click(function () {
            $(this).toggleClass('active');
            $(".yourplan-stripe .action").slideToggle();
        });

    }


    $(".box-one").click(function () {
        $("#onoff-type").toggleClass("hide-box");
    });
    $(".box-two").click(function () {
        $("#dimmer-type").toggleClass("hide-box");
    });
    $(".box-three").click(function () {
        $("#shutter-type").toggleClass("hide-box");
    });
    $(".box-four").click(function () {
        $("#cameras-type").toggleClass("hide-box");
    });
    $(".box-five").click(function () {
        $("#alarms-type").toggleClass("hide-box");
    });
    $(".box-six").click(function () {
        $("#remote-type").toggleClass("hide-box");
    });
    $(".box-seven").click(function () {
        $("#accessories-type").toggleClass("hide-box");
    });
    $(".box-eight").click(function () {
        $("#networking-type").toggleClass("hide-box");
    });
    $(".box-nine").click(function () {
        $("#climate-type").toggleClass("hide-box");
    });
    $(".box-ten").click(function () {
        $("#assistance-type").toggleClass("hide-box");
    });

    $(".kw #wrapper .product-thumbnail .home-plan .abslut_btn .btn").click(function () {

        $(this).closest(".kw #wrapper .device-boxes").toggleClass('pink-border');
        $(this).text($(this).text() == 'Remove' ? 'Select device' : 'Remove');

    });


    $(".buttons-container.actual .reset-link").click(function () {
        $(this).hide();
    });

    $(".kw #wrapper .custom-checkbox input").change(function () {
        if ($('.kw #wrapper .custom-checkbox input:checked').length) {
            $('.buttons-container.actual').fadeIn();
        }
        else {
            $('.buttons-container.actual').fadeOut();
        }
    });


});


// expand and collaps detail page plans carousal content
var i = 0;
$('.plan-detail-wrapper .view-more').on('click', function (e) {
    e.preventDefault();
    // 30nov
    var target = $(this).closest('.plan-detail-wrapper').find('.show-more');
    if ($(this).hasClass('english')) {
        var x = $(this);
        if (x.html() === "+ View More") {
            $(this).html('- View Less');
        } else {
            $(this).html('+ View More');
        }
    }
    if ($(this).hasClass('arabic')) {
        var x = $(this);
        if (x.html() === "- مشاهدة أقل") {
            $(this).html('+ مشاهدة المزيد');
        } else {
            $(this).html('- مشاهدة أقل');
        }
    }
    target.slideToggle('slow');
    if (target.hasClass('expand')) {
    }
});







