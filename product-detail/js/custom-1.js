$(document).ready(function () {


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
    if ($(window).width() <= 375) {
        $(window).scroll(function () {
            var hT = $('#nav-tabContent').offset().top,
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT - wH)) {
                $('.fixed-sect').fadeOut();
            } else $('.fixed-sect').fadeIn();
        });
    
    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 500) {
            $('.bottom-stripe').fadeIn();
        } else {
            $('.bottom-stripe').fadeOut();
        }

    });
    }
    
    
    $('.kw #wrapper .radio-wraper .btn.custom-radio input[type="radio"][name="pay"]').change(function() {
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
    
    $('.kw #wrapper .radio-wraper input[type="radio"][name="nc"]').change(function() {
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

    // expand and collaps detail page plans carousal content
    $('.plan-detail-wrapper .view-more').on('click', function (e) {
        e.preventDefault();
        var target = $(this).closest('.plan-detail-wrapper').find('.more-content');
        var textDirection = $('html').attr('dir');
        var rtl = textDirection == 'ltr' ? false : true;
        target.toggleClass('expand');
        if (target.hasClass('expand')) {
            if (rtl) {
                $(this).html('- عرض أقل');
            } else {
                $(this).html('- View Less');
            }
        } else {
            if (rtl) {
                $(this).html('+ عرض المزيد');

            } else {
                $(this).html('+ View More');
            }
        }
    });


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

    $('.btn.add-plan,.fixed-sect .btn').on('click', function (e) {
        var new_position = $('.device-only-tabs').offset();
        var buynow_position = $('.btn.btn-pc-3.btn-lrg').offset();
        var preorder_position = $('.pre-order-details').offset();
        var buttonname = $(this).attr('name');
        if(buttonname == 'preorder'){
            $('html, body').stop().animate({
                scrollTop: preorder_position.top
            }, 500);
        } else if (buttonname == 'buynow'){
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
            if ($(this).hasClass('active')) {} else {
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
    } else{
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
$(document).ready(function() {
  $('#iphoneXs').click(function(event) {
    var btn = this,
      toStatus = btn.checked;
    //loop through each checkbox
    $('.gift-1').fadeToggle();
  });
  $('#smarthomecamera').click(function(event) {
    var btn = this,
      toStatus = btn.checked;
    //loop through each checkbox
    $('.gift-2').fadeToggle();
  });  
    
  $('#gift_message_1').on('keydown', function(){
       var key = String.fromCharCode(event.which);
           if (!event.shiftKey) {
              key = key.toLowerCase();
           }
       $('#gift_message_2').val( $(this).val() + key );
  }); 
    
  $("#smarthomecamera").click(function(){
    $(".gift-message.gift-2 textarea").attr("id", "gift_message_3");
  });  
});