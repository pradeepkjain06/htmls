$(document).ready(function () {
  // wiyana card calculation





  // Adding data-* for calculation

  $('.heading_sec_wiyana .total_price_wrap').attr('primary', 0)
  $('.heading_sec_wiyana .total_price_wrap').attr('insurance', 0)
  $('.heading_sec_wiyana .total_price_wrap').attr('data-deviceprice', 0)

  function formData(allData) {
    // sum of all data-*
    var values = Object.values(allData)
    var sum = values.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)

    return sum
  }

  // for primary device select
  $('.outbound_input_wrapper select').change(function () {
    var selectValue = $('option:selected', this).data('price')

    var deviceType = $('option:selected', this).attr('type-device');

    if(deviceType == 'ios') {
      $(this).closest('.localminutes-ssection').find('.ios_accessories_wrap').removeClass('hide');
      $(this).closest('.localminutes-ssection').find('.andriod_accessories_wrap').addClass('hide');
      $(this).closest('.localminutes-ssection').find('.ios_accessories_wrap .product_input_select_wrap .form-select').prop("disabled", false);
    }else if(deviceType == 'andriod'){
      $(this).closest('.localminutes-ssection').find('.ios_accessories_wrap .product_input_select_wrap .form-select').prop("disabled", true);
      $(this).closest('.localminutes-ssection').find('.andriod_accessories_wrap').removeClass('hide');
      $(this).closest('.localminutes-ssection').find('.ios_accessories_wrap').addClass('hide');
    }


    if(selectValue > 0) {
      $(this)
      .closest('.localminutes-ssection')
      .find('.desvices_outblound_add #outbound_var_price')
      .text('+KD' + selectValue)
    }else {
      $(this)
      .closest('.localminutes-ssection')
      .find('.desvices_outblound_add #outbound_var_price')
      .text('FREE')
    }
  

    // set value for primary
    $(this)
      .closest('.wiyana_go_card')
      .find('.heading_sec_wiyana .total_price_wrap')
      .data('primary', selectValue)
    var allData = $(this)
      .closest('.wiyana_go_card')
      .find('.total_price_wrap')
      .data()
    var allSum = formData(allData)
    //set value for data
    $(this)
      .closest('.wiyana_go_card')
      .find('.total_price_wrap span')
      .text(allSum);

      $(this)
      .closest('.wiyana_go_card')
      .find('.pricing_card_buy .buy_now_btn span')
      .text(allSum);

  })
  // for Insurance Input device Checkbox
  $('.custom-checkbox.checkbox_price .form-group input').change(function () {
    var checkboxPrice = 0
    if ($(this).is(':checked')) {
      checkboxPrice = $(this).data('price')
      $(this)
        .closest('.wiyana_go_card')
        .find('.heading_sec_wiyana .total_price_wrap')
        .data('insurance', checkboxPrice)
    } else {
      checkboxprice = 0
      $(this)
        .closest('.wiyana_go_card')
        .find('.heading_sec_wiyana .total_price_wrap')
        .data('insurance', checkboxprice)
    }
    var allData = $(this)
      .closest('.wiyana_go_card')
      .find('.total_price_wrap')
      .data()
    // calling function to sum of all data-*
    var checkboxSum = formData(allData)
    //set value for data
    $(this)
      .closest('.wiyana_go_card')
      .find('.total_price_wrap span')
      .text(checkboxSum);

      $(this)
      .closest('.wiyana_go_card')
      .find('.pricing_card_buy .buy_now_btn span')
      .text(checkboxSum);

  })

  // wiyana card calculation END

  $(
    '.delivery_date_slot.form_control_delivery select.nationality-select',
  ).change(function () {
    if ($(this).val() == '' || $(this).val() == 'default')
      $(this).css({ color: '#aaa' })
    else $(this).attr('style', 'color: #2e2e2e !important')
  })

  $('select.form-control option:first').addClass('placeholder')

  $('.custom-prefilled-radio .edit_default_btn a').click(function (e) {
    e.preventDefault()
    $(this).closest('.default_options_outter_mob').addClass('to_be_removed')

    $('.order-tracking-popup.confirmation_popup')
      .removeClass('hide')
      .addClass('show')
    $('.bodyoverlay').addClass('show')
  })

  // $('.outbound_input_wrapper select').on('change', function(){
  //   if (document.getElementById('langs') != null) {
  //     $(this).closest('.youalso-get-ssection').find('.desvices_outblound_add').append('<span>+5 د.ك</span>');
  //   }else {
  //     $(this).closest('.youalso-get-ssection').find('.desvices_outblound_add').append('<span>+KD 5</span>');
  //   }

  // })

  //removing class for disabled popup button

  $('.cl-custom-check').change(function () {
    if ($(this).is(':checked')) {
      console.log(this);
      $(this).closest('.table_wrap').find('.total_price_wrap .total_price_button .button_select_phonesec').removeClass('disabled');
      var privceDevice = $(this).attr('data-device-price');
      if(privceDevice > 0){
        $(this).closest('.table_wrap').find('.total_price_wrap h2').text(privceDevice);
        $(this).closest('.table_wrap').find('.total_price_button .button_select_phonesec span').text(privceDevice);
      }


    }

  })

  // adding dynamic class of input id on popup

  $(document).on('click', '.secondary_device_popover', function () {
    var idOptionClick = $(this).find('.form-control').attr('id')
    $('.order-tracking-popup.add_new_device').addClass(`show ${idOptionClick}`)
    $('.bodyoverlay').addClass('show')
  })

  // search functionality of popup phone search
  $('#searchmobfile').on('keyup', function () {
    var value = $(this).val().toLowerCase()
    $('.list_box.links_pops_phones ul li').filter(function () {
      $(this).toggle($(this).find('a').text().toLowerCase().indexOf(value) > -1)
    })
  })

  // global function for removiingclass when partial name is known
  function removeClassStartingWith(node, begin) {
    node.removeClass(function (index, className) {
      return (
        className.match(new RegExp('\\b' + begin + '\\S+', 'g')) || []
      ).join(' ')
    })
  }

  // finding a class name when partial class name is known
  $.fn.hasPartialClass = function (partial) {
    var classes = this.prop('class').split(' ')
    for (var i = 0, len = classes.length; i < len; i++) {
      if (new RegExp(partial).test(classes[i])) {
        return classes[i]
      }
    }
    return false
  }

  //button on submit button for popup on mobile devices selection

  $('.button_select_phonesec').click(function () {
    var activephone = $('.list_box.links_pops_phones ul li a.active').text()
    var selectedDevice = $('.table_wrap.active')
      .find('.cl-custom-check:checked')
      .val()

    var selectedDeviceName = activephone + selectedDevice
    var checkwhichID = $(
      '.order-tracking-popup.add_new_device',
    ).hasPartialClass('deviceselect')

    $('#' + checkwhichID).val(selectedDeviceName)

    var devicePopupPrice = $('.table_wrap.active')
      .find('.cl-custom-check:checked')
      .attr('data-device-price')

    //Adding Price with secodary device heading

    if(devicePopupPrice > 0) {
      $('#' + checkwhichID)
      .closest('.product_input_select_wrap')
      .find('.desvices_outblound_add .outbound_var_price')
      .text('+KD' + devicePopupPrice)
    }else {
      $('#' + checkwhichID)
      .closest('.product_input_select_wrap')
      .find('.desvices_outblound_add .outbound_var_price')
      .text('FREE')
    }

   

    // calculating total for wiyana slide
    $('#' + checkwhichID)
      .closest('.wiyana_go_card')
      .find('.heading_sec_wiyana .total_price_wrap')
      .data(`deviceprice${checkwhichID}`, parseInt(devicePopupPrice))
    var allData = $('#' + checkwhichID)
      .closest('.wiyana_go_card')
      .find('.total_price_wrap')
      .data()
    console.log(allData)
    // calling function to sum of all data-*
    var checkboxSum = formData(allData)
    //set value for data
    $('#' + checkwhichID)
      .closest('.wiyana_go_card')
      .find('.total_price_wrap span')
      .text(checkboxSum)

      $('#' + checkwhichID)
      .closest('.wiyana_go_card')
      .find('.pricing_card_buy .buy_now_btn span')
      .text(checkboxSum);

    //checking if option is selected

    if ($('#' + checkwhichID).val() != '') {
      $('#' + checkwhichID)
        .closest('.add_extra_outbound')
        .find('.link_another_bound')
        .removeClass('disabled')
    }

    $('.order-tracking-popup.add_new_device').removeClass('show')
    removeClassStartingWith(
      $('.order-tracking-popup.add_new_device'),
      'deviceselect',
    )
    $('.bodyoverlay').removeClass('show')
  })

  // tabs functionality for popup for mobile selection
  $('.list_box.links_pops_phones a').click(function () {
    $('.list_box.links_pops_phones a').removeClass('active')
    $(this).addClass('active')
    var idElement = $(this).attr('id')
    $('.tables_wrapper_right .table_wrap').removeClass('active')
    $('.' + idElement).addClass('active')
  })

  // $('.outbound_input_wrapper select').on('change', function(){
  //   if (document.getElementById('langs') != null) {
  //     $(this).closest('.youalso-get-ssection').find('.desvices_outblound_add').append('<span>+5 د.ك</span>');
  //   }else {
  //     $(this).closest('.youalso-get-ssection').find('.desvices_outblound_add').append('<span>+KD 5</span>');
  //   }

  // })

  var linkscounterInput = 0
  $('.link_another_bound').click(function () {
    if (document.getElementById('langs') != null) {
      var html_to_append = `\
      <div class="product_input_select_wrap my-3">\
      <div class="desvices_outblound_add">\
      <h4 class="devices_title_outbound">الأجهزة الثانوية</h4>\
      <span class="outbound_var_price"></span>\
      </div>\
      <div class="select_wrap_single w-100 secondary_device_popover outbound_input_wrapper">\
      <input id='deviceselect${linkscounterInput}' type="text" placeholder="اختر جهازا" class="form-control">\
      </div>\
  </div>\
      `

      $(this).before(html_to_append)
    } else {
      var html_to_append = `\
      <div class="product_input_select_wrap my-3">\
      <div class="desvices_outblound_add">\
        <h4 class="devices_title_outbound">Secondary Devices</h4>\
        <span class="outbound_var_price"></span>\
        </div>\
      <div class="select_wrap_single w-100 secondary_device_popover outbound_input_wrapper">\
      <input id='deviceselect${linkscounterInput}' type="text" placeholder="select a device" class="form-control">\
      </div>\
  </div>\
      `

      $(this).before(html_to_append)
    }

    $(this).addClass('disabled')

    linkscounterInput++
  })

  $('.link_another_bound_accesories').click(function () {
    if (document.getElementById('langs') != null) {
      var html_to_append =
        '\
      <div class="product_input_select_wrap my-3">\
      <h4 class="devices_title_outbound">الملحقات الأساسية</h4>\
      <div class="select_wrap_single w-100 outbound_input_wrapper">\
          <select class="form-select" aria-label="Default select example">\
              <option selected="">Iphone 13 Pro Max - 256GB - Red</option>\
              <option value="1">Iphone 13 Pro Max - 512GB - Red</option>\
              <option value="2">Iphone 13 Pro Max - 1TB - Red</option>\
            </select>\
      </div>\
  </div>\
      '
      $(this).before(html_to_append)
    } else {
      var html_to_append =
        '\
    <div class="product_input_select_wrap my-3">\
    <h4 class="devices_title_outbound">Primary Accessories</h4>\
    <div class="select_wrap_single w-100 outbound_input_wrapper">\
        <select class="form-select" aria-label="Default select example">\
            <option selected="">Iphone 13 Pro Max - 256GB - Red</option>\
            <option value="1">Iphone 13 Pro Max - 512GB - Red</option>\
            <option value="2">Iphone 13 Pro Max - 1TB - Red</option>\
          </select>\
    </div>\
</div>\
    '
      $(this).before(html_to_append)
    }
  })

  if ($('.dropdown-profile').length > 0) {
    $('.mobile-bottom-links').addClass('position_unset_375')
  }

  // function showDropdown(elem) {
  $('.cart-dropdown-tag').click(function () {
    $('#ctm_country_popup').removeClass('show')
    $('.bodyoverlay').removeClass('show')
    $('.cart-summary-dropdown').removeClass('show')
    $('.main-mobile-menu').removeClass('show')
    $('.mobile-nav .mobile-menu-toggle>a i')
      .addClass('icon-hamburger-new')
      .removeClass('icon-close')
    $('.profile-btn .profile-image').removeClass('active')

    $('.mobile-nav .search-dropdown a').removeClass('open')
    $(
      '.right-nav a[data-target-menu="#search"], .right-nav a[data-target-menu="#search2"]',
    ).removeClass('open')
    $('.bodyoverlay').removeClass('show')
    $('.ctm_search_bar').removeClass('show')
    $('.ctm_search_bar').slideUp(function () {
      $('.popular_products_slider.slick-initialized').slick('destroy')
    })
    const elem = this
    var state = elem.dataset.state
    var dropDown = $('#cartdropdownmenu')
    if (state === 'closed') {
      dropDown.addClass(['add_animate', 'show'])
      elem.dataset.state = 'opened'
    } else {
      dropDown.removeClass(['add_animate', 'show'])
      dropDown.addClass('closing_animate')
      setTimeout(function () {
        $('.cart-dropdown')
          .find('.cart-summary-dropdown')
          .removeClass('closing_animate')
      }, 500)
      elem.dataset.state = 'closed'
    }
  })
  // }
  if ($('#cartdropdownmenu').length) {
    document
      .getElementById('cartdropdownmenu')
      .addEventListener('click', function (event) {
        console.log('here')
        event.stopPropagation()
      })
  }
  $(document).on('click', '#cartdropdownmenu, .cart-summary-link a', function (
    event,
  ) {
    console.log('here')
    event.stopPropagation()
  })

  window.onclick = function (event) {
    if (
      !event.target.matches('.icon-cart-new') &&
      !event.target.matches('.cart-numbers')
    ) {
      var dropDown = $('#cartdropdownmenu')[0]
      if (dropDown && dropDown.classList.contains('show')) {
        $(dropDown).removeClass(['add_animate', 'show'])
        $(dropDown).addClass('closing_animate')
        setTimeout(function () {
          $('.cart-dropdown')
            .find('.cart-summary-dropdown')
            .removeClass('closing_animate')
        }, 500)
        $('.cart-dropdown > a').attr('data-state', 'closed')
      }
    }
  }

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  if (isSafari) {
    $('body').addClass('safari')
  } else {
    $('body').addClass('regular_broswer')
  }

  /* menu tranisition effects */

  $(document).click(function () {
    if ($('.mobile-menu-toggle').find('.main-mobile-menu').hasClass('show')) {
      $('body').addClass('overflow-hidden-new')
    } else {
      $('body').removeClass('overflow-hidden-new')
    }
  })

  $('.menu_item_new')
    .closest('.megamenu-container')
    .find('.nav_navigation_new')
    .css({ 'max-height': '0px', 'min-height': '0px' })
  $('.menu_item_new').hover(
    function () {
      console.log('hover in')
      var _this = $(this)
      _this.closest('.megamenu-container').addClass('open')
      var navigation_submenu_location = _this.attr('id')
      _this
        .closest('.megamenu-container')
        .find('.nav_navigation_new')
        .addClass('show')
      setTimeout(function () {
        var navigation_submenu = $('#' + navigation_submenu_location)
          .closest('.megamenu-container')
          .find('.nav_navigation_new .row_new_nav')
          .height()
        navigation_submenu = navigation_submenu + 70
        console.log(_this)
        _this
          .closest('.megamenu-container')
          .find('.nav_navigation_new')
          .css({
            'min-height': navigation_submenu + 'px',
            'max-height': navigation_submenu + 'px',
          })
        // if (navigation_submenu > 310) {
        //   _this.closest('.megamenu-container').find('.nav_navigation_new').css({ "min-height": navigation_submenu + 'px', "max-height": navigation_submenu + 'px' });
        // }
      }, 50)
    },
    function () {
      console.log('hover out')
      var _this = $(this)
      //  $(this).closest('.megamenu-container').find('.nav_navigation_new').slideUp("600");
      $(this).closest('.megamenu-container').removeClass('open')
      _this
        .closest('.megamenu-container')
        .find('.nav_navigation_new')
        .removeClass('show')
      console.log(_this)
      // $('.menu_item_new', this).closest('.megamenu-container').find('.nav_navigation_new')/*.not('.in .nav_navigation_new.megamenu').stop(false, true) */.css({ "max-height": '0px', "min-height": '0px' });;
      _this
        .closest('.megamenu-container')
        .find('.nav_navigation_new')
        .css({ 'max-height': '0px', 'min-height': '0px' })
    },
  )

  $('.nav_navigation_new').hover(
    function () {
      _this = $(this)
      var navigation_submenu = _this.find('.row_new_nav').height()
      navigation_submenu = navigation_submenu + 70
      _this.css({
        'min-height': navigation_submenu + 'px',
        'max-height': navigation_submenu + 'px',
      })
      if (navigation_submenu > 310) {
        _this.css({
          'min-height': navigation_submenu + 'px',
          'max-height': navigation_submenu + 'px',
        })
      }
      _this.parents('.megamenu-container').addClass('open')
      $(this).addClass('show')
    },
    function () {
      $('.megamenu-container').removeClass('open')
      $('.megamenu-container').find('.nav_navigation_new').removeClass('show')
      $('.megamenu-container')
        .find('.nav_navigation_new')
        .css({ 'max-height': '0px', 'min-height': '0px' })
    },
  )

  $('.nav-link span').hover(
    function () {
      var file = $(this).closest('.nav-link').attr('href')
      var newfile = file.split('#').pop()
      $('.nav_navigation_new').removeClass('tranisition_height')
      var _this = $(this)
      setTimeout(function () {
        var heightelement = $('#' + newfile).height()
        console.log(heightelement)
        heightelement = heightelement + 50
        if (heightelement > 310) {
          $('body').css('--heightnav', heightelement + 'px')
          $(_this)
            .closest('.nav_navigation_new')
            .css({
              'min-height': heightelement + 'px',
              'max-height': heightelement + 'px',
            })
        } else {
          $('body').css('--heightnav', 310 + 'px')
          $(_this)
            .closest('.nav_navigation_new')
            .css({ 'min-height': '310px', 'max-height': '310px' })
        }
      }, 50)
    },

    function () {
      $('.nav_navigation_new').removeClass('local_weight')
    },
  )

  /* menu tranisition effects END */

  if ($('.cart-summary-link > a').length) {
    $('.cart-summary-link a').click(function () {
      $(this).parents('.product-item').remove()
    })
  }

  //first, we need to show tab-content on mouseover
  $('.nav-tabs.new_navigation .nav-link span').mouseover(function () {
    $(this).closest('.nav-link').tab('show')
  })

  // on quick hover, we need to remove the active class from the related tab panel
  $('.nav-tabs.new_navigation .nav-link').on('show.bs.tab', function (e) {
    const tabPanelId = e.relatedTarget.getAttribute('href')
    $(tabPanelId).removeClass('show active')
  })

  $('.megamenu-container').hover(
    function () {
      var _this = $(this)

      //  _this.toggleClass('open');
      const elementnav = _this.closest('li').find('.tabs_new_navigation:first')
      const newcheck = $('.tabs_new_navigation').hasClass('active')

      if (!newcheck) {
        $('.nav-tabs.new_navigation .nav-link').removeClass('show active')
        $('.nav-tabs.new_navigation .nav-link:first').addClass('show active')
        setTimeout(function () {
          // console.log('added');
          elementnav.addClass('show active')
        }, 500)
      }
    },
    function () {
      var _this = $(this)

      _this.toggleClass('open')

      $('.tabs_new_navigation').removeClass('active')
    },
  )

  if ($('.ctm-bar .progress .progress-bar').length) {
    const colors = ['#028666', '#9E6900', '#C70024']
    var progressBar = $('.ctm-bar .progress .progress-bar')
    var val = progressBar.attr('aria-valuenow')
    console.log(val)
    if (val > 67) {
      progressBar.css('background-color', colors[2])
    } else if (val > 33) {
      progressBar.css('background-color', colors[1])
    } else {
      progressBar.css('background-color', colors[0])
    }
  }
  if ($('.ctm-cll-ul').length) {
    $('.ctm-cll-ul li a').click(function () {
      $('.ctm-cll-ul li a').removeClass('active')
      $(this).addClass('active')
    })
  }

  if ($('#date_current').length > 0) {
    document.getElementById('date_current').valueAsDate = new Date()
  }

  // empty the input file on close

  $('#btn_passport').on('click', function () {
    $('#uploaded-front-pass .uploaded-wrap .uploaded-btns .delete').click()
  })

  $('#upload-front-pass').change(function () {
    $('.finish-btn').attr('disabled', false)
    $('.drag-file').removeClass('show').addClass('hide')
    $('.uploaded-front-pass').addClass('show').removeClass('hide')
  })

  $('.close-tracking, .finish-btn').on('click', function () {
    $('#uploaded-front-pass').val('')
  })

  //remove whole line scenarios

  $('.remove_line').click(function () {
    $(this).closest('.shopping_items_wrap_zain').addClass('to_be_removed')
    $('.order-tracking-popup.confirmation_popup')
      .removeClass('hide')
      .addClass('show')
    $('.bodyoverlay').removeClass('hide').addClass('show')
  })

  $('.form-control.datepicker22').click(function (event) {
    event.preventDefault()
    return false
  })

  $('.wrapper_control_frm .form-control.nationality-select').change(
    function () {
      if ($('#mySelectBox').val() != 'default') {
        $(this).closest('.form-group').addClass('data-valid')
      } else {
        $(this).closest('.form-group').removeClass('data-valid')
      }
    },
  )

  if ($('.overlay_checkout').length > 0) {
    $(document).click(function () {
      if ($('.overlay_checkout').hasClass('show')) {
        $('body').addClass('overflow-hidden-new')
      } else {
        $('body').removeClass('overflow-hidden-new')
      }
    })
  }

  $('.osn__tabs li a').click(function (e) {
    e.preventDefault()
    e.stopImmediatePropagation()
    $(this).tab('show')
  })

  // upload id functionality

  $('#btn_civilID').click(function () {
    $('#main_upload_document').removeClass('show').addClass('hide')
    $('#civil_ID').removeClass('hide').addClass('show')
    $('#continue_front').attr('disabled', 'disabled')
  })
  $('#btn_passport').click(function () {
    $('#main_upload_document').removeClass('show').addClass('hide')
    $('#passport_upload').removeClass('hide').addClass('show')
  })
  $('#id_upload_btn').click(function (e) {
    e.preventDefault()
    $('.bodyoverlay').addClass('show')
    $('#main_upload_document').removeClass('hide').addClass('show')
  })

  $('#continue_front').click(function () {
    $(this)
      .closest('.active')
      .removeClass('active')
      .next('li')
      .addClass('active')
    $('#front-tab').removeClass('active')
    $('#back-tab').addClass('active')
  })

  // Addon add remove effect

  if ($('.addon_add_button').length) {
    $('.single_price_single .addon_add_button').click(function () {
      if (
        $(this).hasClass('active') &&
        document.getElementById('langs') != null
      ) {
        $(this).removeClass('active').text('جمع')
      } else if (document.getElementById('langs') != null) {
        $(this).addClass('active').text('إلغاء الأمر')
      } else if (
        $(this).hasClass('active') &&
        document.getElementById('langs') == null
      ) {
        $(this).removeClass('active').text('ADD')
      } else {
        $(this).addClass('active').text('CANCEL')
      }
    })
  }

  //ezee-flexi.html
  if ($('.custom-switch-input').length) {
    $('.custom-switch-input').change(function () {
      var _this = $(this)
      var total = $('.price__zain-span').attr('data-price')
      if (_this.is(':checked')) {
        total = parseFloat(total) + parseInt(_this.attr('data-val'))
      } else {
        total = parseFloat(total) - parseInt(_this.attr('data-val'))
      }
      $('.price__zain-span').attr('data-price', total).html(total)
    })
  }

  $('#txt_change_click').click(function () {
    if (document.getElementById('langs') != null) {
      this.innerText = 'جدد خطتك'
    } else {
      this.innerText = 'Renew your Plan'
    }
  })

  if ($('#save-card').length) {
    $('#save-card').click(function () {
      var _this = $(this)
      if (_this.is(':checked')) {
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.product_signle_second')
          .removeClass('d-none')
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.gift-text-areas')
          .removeClass('d-none')
      } else {
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.product_signle_second')
          .addClass('d-none')
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.gift-text-areas')
          .addClass('d-none')
      }
    })
    $('.wrap_input_gift select').change(function () {
      var _this = $(this)
      var value = this.value
      _this.parents('.product_signle_second').find('h2 span').html(value)
      var html_txt = ''
      if ($('html').attr('lang') == 'ar') {
        for (var i = 0; i < value; i++) {
          html_txt +=
            '<div class="text_area_wrapper_nrm d-flex flex-column"> <label for="gift-messaage">استمتع بهديتك!</label><textarea placeholder="استمتع بهديتك!" id="gift-messaage" name="gift-message" class="input-control"></textarea></div>'
        }
      } else {
        for (var i = 0; i < value; i++) {
          html_txt +=
            '<div class="text_area_wrapper_nrm d-flex flex-column">  <label for="gift-messaage">Gift Message</label><textarea placeholder="Enjoy your gift!" id="gift-messaage" name="gift-message" class="input-control"></textarea></div>'
        }
      }
      $('.gift-text-areas').empty().html(html_txt)
    })
  }

  if ($('#save-card1').length) {
    $('#save-card1').click(function () {
      var _this = $(this)
      if (_this.is(':checked')) {
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.product_signle_second')
          .removeClass('d-none')
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.gift-text-areas')
          .removeClass('d-none')
      } else {
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.product_signle_second')
          .addClass('d-none')
        _this
          .parents('.wrapper_content_gift_xrm')
          .find('.gift-text-areas')
          .addClass('d-none')
      }
    })
    $('.wrap_input_gift select').change(function () {
      var _this = $(this)
      var value = this.value
      _this.parents('.product_signle_second').find('h2 span').html(value)
      var html_txt = ''
      if ($('html').attr('lang') == 'ar') {
        for (var i = 0; i < value; i++) {
          html_txt +=
            '<div class="text_area_wrapper_nrm d-flex flex-column"><label for="gift-messaage">  استمتع بهديتك!</label><textarea id="gift-messaage" name="gift-message" class="input-control">استمتع بهديتك!</textarea></div>'
        }
      } else {
        for (var i = 0; i < value; i++) {
          html_txt +=
            '<div class="text_area_wrapper_nrm d-flex flex-column"><label for="gift-messaage">Enjoy your gift!</label><textarea id="gift-messaage" name="gift-message" class="input-control">Enjoy your gift!</textarea></div>'
        }
      }
      $('.gift-text-areas').empty().html(html_txt)
    })
  }

  if ($('.list_buttonssss .new_btn_mn').length) {
    var _this = $(this)
    _this.click(function () {
      var activeInputs = $('.list_buttonssss .new_btn_mn.active').length
      console.log(activeInputs)
      if (activeInputs >= 1) {
        $('.placeorder-btn').removeAttr('disabled')
      } else {
        $('.placeorder-btn').attr('disabled', 'disabled')
      }
    })
  }

  if ($('.curr_plan').length) {
    $('.curr_plan').change(function () {
      var activeTab = $('#pills-tabContent .tab-pane.active')
      activeTab.find('.pricing_card_buy .price').html(this.value)
    })
    $('.nav-item').click(function () {
      $('.curr_plan')[0].click()
    })
  }

  if ($('.product_action_wrap .delete-button').length) {
    $('.product_action_wrap .delete-button').click(function () {
      //$(this).parents('.shopping_item_single_zain').remove()
    })
  }
  if ($('.chnage_number_wrap .delete-button').length) {
    $('.chnage_number_wrap .delete-button').click(function () {
      //$(this).parents('.shopping_item_single_zain').remove()
      changeCartPrice()
      changeMobCartPrice()
    })
  }
  if ($('.chnage_number_wrap .delete-button-with-heading').length) {
    $('.chnage_number_wrap .delete-button-with-heading').click(function () {
      $(this).parents('.shopping_item_single_zain').remove()
      $('.heading_content_wrap').remove()
      changeCartPrice()
      changeMobCartPrice()
    })
  }
  if ($('.product_action_wrap .edit-button').length) {
    $('.product_action_wrap .edit-button').click(function () {
      // var editBtn = $('.product_remove_wrap .edit-button')
      $(this).closest('.product_name_outter_zain').find('.product_input_select_wrap').removeClass('d-none').addClass('d-flex');
      $(this).closest('.product_name_outter_zain').find('.product_input_select_wrap1').removeClass('d-block').addClass('d-none');
      $(this).closest('.product_name_outter_zain').find('.product_update_wrap').fadeIn();
      $(this).parent().fadeOut();
      $(this).closest('.product_name_outter_zain').find('.col-mem').addClass('d-none').removeClass('d-flex');
    });
  }
  
  if ($('.product_update_wrap .update-button').length) {
    $('.product_update_wrap .update-button').click(function () {
      // var editBtn = $('.product_remove_wrap .edit-button')
      $(this).closest('.product_name_outter_zain').find('.product_input_select_wrap').removeClass('d-flex').addClass('d-none');
      $(this).closest('.product_name_outter_zain').find('.product_input_select_wrap1').removeClass('d-none').addClass('d-block');
      $(this).closest('.product_name_outter_zain').find('.product_action_wrap').fadeIn();
      $(this).parent().fadeOut();
      // $('.product_update_wrap').fadeOut();
      var memory =  $(this).closest('.product_name_outter_zain').find('.memory').find(':selected').text();
      var color =  $(this).closest('.product_name_outter_zain').find('.color').find(':selected').text();
      $(this).closest('.product_name_outter_zain').find('.col-mem h2')
        .empty()
        .text(color + ' - ' + memory);
      $('.col-mem').removeClass('d-none').addClass('d-flex');
    })
  }

  if ($('.single-product button').length) {
    $('.single-product button').click(function () {
      var _this = $(this)
      _this
        .empty()
        .html(
          '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
        )
        .addClass('add-spinner')
      if (_this.hasClass('added')) {
        var btnTxt =
          $('html').attr('lang') == 'ar' ? 'اضف الى سلة التسوق' : 'Add to cart'
        setTimeout(function () {
          _this
            .empty()
            .html(btnTxt)
            .removeClass('added')
            .removeClass('add-spinner')
          $('.cart-product-removed').fadeIn(function () {
            setTimeout(function () {
              $('.cart-product-removed').fadeOut()
            }, 1000)
          })
        }, 2000)
      } else {
        setTimeout(function () {
          var btnTxt = $('html').attr('lang') == 'ar' ? 'أبعد' : 'Remove'
          _this
            .empty()
            .html(btnTxt)
            .addClass('added')
            .removeClass('add-spinner')
          $('.cart-product-added').fadeIn(function () {
            setTimeout(function () {
              $('.cart-product-added').fadeOut()
            }, 1000)
          })
        }, 2000)
      }
    })
  }

  if ($('.side_wrap_cart_zain').length) {
    $('.side_wrap_cart_zain .btn_wrapper .btn-pc-1a').click(function () {
      var thus = $(this)
      thus.find('.spinner-border').removeClass('d-none')
      thus.find('.text_checkout').addClass('d-none')
    })
  }

  if ($('.variable-product button').length) {
    $('.variable-product button').click(function () {
      var _this = $(this)
      if (_this.hasClass('added')) {
        _this
          .empty()
          .html(
            '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
          )
          .addClass('add-spinner')
        var btnTxt =
          $('html').attr('lang') == 'ar' ? 'اضف الى سلة التسوق' : 'Add to cart'
        setTimeout(function () {
          _this
            .empty()
            .html(btnTxt)
            .removeClass(['added', 'selected'])
            .removeClass('add-spinner')
          $('.device_specs_list').find('.memory_in a').removeClass('active')
          $('.device_specs_list').find('.colur_in a').removeClass('active')
          $('.cart-product-removed').fadeIn(function () {
            setTimeout(function () {
              $('.cart-product-removed').fadeOut()
            }, 1000)
          })
        }, 2000)
      } else {
        if (_this.hasClass('selected')) {
          _this
            .parents('.products_single_slide')
            .find('.content_single_box .device_specs_list')
            .addClass('d-none')
          _this.removeClass('selected')
        } else {
          _this
            .parents('.products_single_slide')
            .find('.content_single_box .device_specs_list')
            .removeClass('d-none')
          _this.addClass('selected')
        }
        if (
          $('.device_specs_list').find('.memory_in a').hasClass('active') &&
          $('.device_specs_list').find('.colur_in a').hasClass('active')
        ) {
          _this
            .empty()
            .html(
              '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
            )
            .addClass('add-spinner')
          setTimeout(function () {
            var btnTxt = $('html').attr('lang') == 'ar' ? 'أبعد' : 'Remove'
            _this
              .empty()
              .html(btnTxt)
              .addClass('added')
              .removeClass('add-spinner')
            $('.cart-product-added').fadeIn(function () {
              setTimeout(function () {
                $('.cart-product-added').fadeOut()
              }, 1000)
            })
          }, 2000)
        }
      }
    })
  }

  if ($('.custom-prefilled-radio .pay_option').length) {
    $('.custom-prefilled-radio .pay_option').click(function () {
      if ($(this).is('#default-master')) {
        $('.custom-prefilled-radio .summary-form.new-card-form').fadeOut()
      }

      var value = $(this).val()
      console.log(value)
      if (value == 'new-card2') {
        $(this)
          .closest('.custom-prefilled-radio .custom-radio')
          .find('.custom-prefilled-radio .summary-form.new-card-form')
          .fadeIn()
      } else {
        $(this)
          .closest('.custom-prefilled-radio .custom-radio')
          .find('.custom-prefilled-radio .summary-form.new-card-form')
          .fadeOut()
      }
      $('.placeorder-btn').removeAttr('disabled')
    })
  }

  if ($('.pay_option').length) {
    $('.pay_option').click(function () {
      if ($(this).is('#default-master')) {
        $('.summary-form.new-card-form').fadeOut()
      }

      var value = $(this).val()
      console.log(value)
      if (value == 'new-card') {
        $(this)
          .closest('.custom-radio')
          .find('.summary-form.new-card-form')
          .fadeIn()
      } else {
        $(this)
          .closest('.payment-box')
          .find('.summary-form.new-card-form')
          .fadeOut()
      }
      $('.placeorder-btn').removeAttr('disabled')
    })
  }

  if ($('.delivery_date_slot.form_control_delivery').length) {
    $('.pay_option').click(function () {
      var value = $(this).val()
      console.log(value)
      if (value == 'expressd') {
        $(this)
          .closest('.custom-radio')
          .find('.summary-form.form_delivery_slot')
          .fadeIn()
      } else {
        $(this)
          .closest('.payment-box')
          .find('.summary-form.form_delivery_slot')
          .fadeOut()
      }
    })
  }


  if ($('.delivery_date_slot.form_control_delivery').length) {
    $('.pay_option').click(function () {
      var value = $(this).val()
      console.log(value)


    const hasCLS =  $(this).hasClass('withdefault');
       
  if (hasCLS) {
      $(this)
        .closest('.custom-radio')
        .find('.summary-form.new-card-form')
        .fadeIn()
  } else {
      $(".pay_option.withdefault")
        .closest('.payment-box')
        .find('.summary-form.new-card-form')
        .fadeOut()
    }
    })
  }




  if ($('.view_details_cart_zain').length) {
    var i = 0
    $('.view_details_cart_zain').click(function () {
      console.log('clicked')
      if (i) {
        $('.cart_scroll_inner').fadeOut()
        $(this).html('View Details')
        i = 0
      } else {
        $('.cart_scroll_inner').fadeIn()
        $(this).html('Hide Details')
        i = 1
      }
    })
  }

  function changeCartPrice() {
    var price_spans = $('.product_signle_second h2 span')
    var new_check_price = 0
    for (var i = 0; i < price_spans.length; i++) {
      new_check_price += parseFloat($(price_spans)[i].innerHTML)
    }
    $('.total_item_price span').html(new_check_price.toFixed(1))
    $('.price_total.sub_total span').html(new_check_price.toFixed(1))
  }
  function changeMobCartPrice() {
    var price_spans = $('.product_signle_second h2 span')
    var new_check_price = 0
    for (var i = 0; i < price_spans.length; i++) {
      new_check_price += parseFloat($(price_spans)[i].innerHTML)
    }
    $('.order_summary_mob_list span').html(new_check_price.toFixed(1))
    $('.dues_total_mob span').html(new_check_price.toFixed(1))
  }
  if ($('.promo_input').length) {
    $('.promo_input').keyup(function () {
      if (this.value) {
        $('.btn_promo').removeAttr('disabled')
      } else {
        $('.btn_promo').attr('disabled', 'disabled')
      }
    })
  }
  if ($('.add_promo_mob').length) {
    $('.add_promo_mob').click(function () {
      $(this)
        .parents('.coupon_code_mob')
        .find('.promo_outter_input_row')
        .fadeIn()
      $(this).fadeOut()
    })
  }
  if ($('.btn_promo').length) {
    var width = $(document).width()
    $('.btn_promo').click(function () {
      if (width < 767) {
        var promo_input = $(this)
          .parents('.coupon_code_mob')
          .find('.promo_input')
      } else {
        var promo_input = $(this)
          .parents('.coupon_code_desktop')
          .find('.promo_input')
      }
      if (promo_input.val() != '' && promo_input.val().length > 4) {
        $('.promo_success').removeClass('d-none')
        $('.promo_error').addClass('d-none')
      } else {
        $('.promo_success').addClass('d-none')
        $('.promo_error').removeClass('d-none')
      }
    })
  }
  if ($('.btn-plus').length) {
    $('.btn-plus').click(function () {
      var qty = $(this).parent().find('input').val()
      qty++
      if (qty == 11) {
        return false
      }
      var curr_price = $(this)
        .parents('.product_signle_second')
        .find('h2 span')
        .html()
      var orgi_price = $(this)
        .parents('.product_signle_second')
        .attr('data-price')
      var new_price = parseFloat(orgi_price) + parseFloat(curr_price)
      $(this)
        .parents('.product_signle_second')
        .find('h2 span')
        .html(new_price.toFixed(1))
      changeCartPrice()
    })
  }
  if ($('.btn-minus').length) {
    $('.btn-minus').click(function () {
      var qty = $(this).parent().find('input').val()
      qty--
      if (qty == 0) {
        return false
      }
      var curr_price = $(this)
        .parents('.product_signle_second')
        .find('h2 span')
        .html()
      var orgi_price = $(this)
        .parents('.product_signle_second')
        .attr('data-price')
      var new_price = parseFloat(curr_price) - parseFloat(orgi_price)
      $(this)
        .parents('.product_signle_second')
        .find('h2 span')
        .html(new_price.toFixed(1))
      changeCartPrice()
    })
  }
  if ($('.shopping_items_wrap_zain .product_remove_wrap a').length) {
    $('.shopping_items_wrap_zain .product_remove_wrap a').click(function () {
      $(this).closest('.shopping_item_single_zain').addClass('to_be_removed')
      $('.order-tracking-popup.confirmation_popup')
        .removeClass('hide')
        .addClass('show')
      $('.bodyoverlay').removeClass('hide').addClass('show')
    })
  }

  if ($('.shopping_items_wrap_zain .product_remove_wrap1 a.delete-button').length) {
    $('.shopping_items_wrap_zain .product_remove_wrap1 a.delete-button').click(function () {
      $(this).closest('.shopping_item_single_zain').addClass('to_be_removed')
      $('.order-tracking-popup.confirmation_popup')
        .removeClass('hide')
        .addClass('show')
      $('.bodyoverlay').removeClass('hide').addClass('show')
    })
  }

  $('.remove_item_yes').click(function () {
    $('.to_be_removed').remove()
    changeCartPrice()
    changeMobCartPrice()
    var items = $('.shopping_item_single_zain').length
    $('.heading_content_wrap span').html('(' + items + ')')
    $('.title_total.sub_total span').html('(' + items + ')')
  })

  $('.cancel_from_popover').click(function () {
    $('.shopping_item_single_zain.to_be_removed').removeClass('to_be_removed')
  })

  if ($('.item_qty').length) {
    $('.item_qty').change(function () {
      var value = $(this).val()
      var orgi_price = $(this)
        .parents('.product_single_first')
        .attr('data-price')
      var new_price = value * orgi_price
      $(this)
        .parents('.shopping_item_single_zain')
        .find('.product_signle_second h2 span')
        .html(new_price.toFixed(1))
      changeMobCartPrice()
    })
  }
})

//Product carousel overlap issue
$(function () {
  $(document).ready(function () {
    if ($('.ezee_slider_mobile_phones').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.ezee_slider_mobile_phones').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:
          "<img class='a-left arrow_mobile_ezee_left control-c prev slick-prev' src='./images/arrow_left_ezee.svg'>",
        nextArrow:
          "<img class='a-right arrow_mobile_ezee_right control-c next slick-next' src='./images/arrow_left_ezee.svg'>",
        arrows: true,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        centerPadding: '0px',
        dots: false,
        variableWidth: true,
        infinite: true,
        rtl: dir_val,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      })
    }
    $('.mobile_inner_single[data-slide]').click(function (e) {
      e.preventDefault()
      var slideno = $(this).data('slide')
      $('.ezee_slider_mobile_phones').slick('slickGoTo', slideno - 2)
    })

    if ($('.wearable_slider_for').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.wearable_slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        rtl: dir_val,
        fade: false,
        adaptiveHeight: true,
        infinite: true,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
        ],
      })
    }

    if ($('.wearable_slider_nav').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.wearable_slider_nav')
        .on('init', function (event, slick) {
          $('.wearable_slider_nav .slick-slide.slick-current').addClass(
            'is-active',
          )
        })
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
          infinite: true,
          dots: false,
          focusOnSelect: false,
          asNavFor: '.wearable_slider_for',
          rtl: dir_val,
          cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              },
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              },
            },
          ],
        })
    }

    $('.order-tracking-popup').scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.order-tracking-popup-header').addClass('pop-sticky')
      } else {
        $('.order-tracking-popup-header').removeClass('pop-sticky')
      }
    })

    //ezee mobile tabs - Slider
    if ($('.mob_slide_ezee_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.mob_slide_ezee_slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1.2,
        rtl: dir_val,
        slidesToScroll: 1,
        arrows: false,
      })
    }

    //ezee content - Slider

    if ($('.choose-ezee-plan-slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.choose-ezee-plan-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: dir_val,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      })
    }

    //Wiyana Hero - Slider
    if ($('.new_plan_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.new_plan_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        rtl: dir_val,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      })
    }

    // gaming_product - Slider
    if ($('.gaming_product_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.gaming_product_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        rtl: dir_val,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              dots: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              dots: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: 2,
            },
          },
        ],
      })
    }

    // Wearable - Slider
    if ($('.wiyana_round_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.wiyana_round_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: dir_val,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '25px',
              slidesToShow: 1.1,
            },
          },
        ],
      })
    }

    $('.youAlsoGet-h1').bind('click dblclick', function () {
      $(this).parent().find('.youAlsoGet-p1').toggleClass('active')
    })
    $('.youAlsoGet-h2').bind('click dblclick', function () {
      $(this).parent().find('.youAlsoGet-p2').toggleClass('active')
    })
    // var i = 1;
    $('.faq-view-more').click(function () {
      var _this = $(this)
      _this
        .parents('.subscribe-ssection')
        .find('.hidden')
        .fadeToggle(function () {
          // if(i) {
          // _this.html($("html").attr("lang") == "ar" ? 'عرض أقل' : 'View less')
          _this.fadeOut()
          // i = 0;
          // } else {
          //   // _this.html($("html").attr("lang") == "ar" ? 'عرض المزيد' : 'View more')
          //   // i = 1;
          // }
        })
    })

    // Wearable - Slider
    if ($('.wearable_slider1').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.wearable_slider1').slick({
        infinite: true,
        slidesToShow: 3,
        asNavFor: '.wearable_slider_for1',
        centerMode: false,
        focusOnSelect: true,
        slidesToScroll: 1,
        rtl: dir_val,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              arrows: true,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1.1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1.1,
            },
          },
        ],
      })
    }

    //Wearable Slider For
    if ($('.wearable_slider_for1').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.wearable_slider_for1').slick({
        arrows: false,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.wearable_slider1',
        rtl: dir_val,
        infinite: false,
        dots: false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 1,
              dots: true,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 460.98,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true,
            },
          },
        ],
      })
    }

    // Smart TV - Slider
    if ($('.smart_tv_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.smart_tv_slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        rtl: dir_val,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              arrows: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              dots: true,
              centerPadding: '20px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1,
            },
          },
        ],
      })
    }

    // stay_connected - Slider
    if ($('.stay_connected_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.stay_connected_slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: dir_val,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1.2,
            },
          },
        ],
      })
    }

    // Wiyana Products master page - Slider
    if ($('#products_zainmaster_slider.products_zain_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('#products_zainmaster_slider.products_zain_slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: dir_val,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1.2,
            },
          },
        ],
      })
    }

    // Wiyana Products - Slider
    if ($('.products_zain_slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.products_zain_slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: dir_val,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1439,
            settings: {
              arrows: false,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1.2,
            },
          },
        ],
      })
    }

    // Wiyana Products - Slider
    if ($('.simcard-products-slider').length) {
      var dir_val = false
      if (document.getElementById('langs') != null) {
        dir_val = true
      }
      $('.simcard-products-slider').slick({
        infinite: false,
        autoplay: false,
        draggable: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        rtl: dir_val,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              arrows: false,
              slidesToShow: 3,
              centerMode: false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 2,
              draggable: true,
              centerMode: false,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: 1.2,
              draggable: true,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: 1.2,
              draggable: true,
              dots: true,
            },
          },
        ],
      })
    }

    // Slick Slider
    $('.slick_slider_wiyana').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    })

    $('.slick_slider_wiyana').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    })

    //multiple-add-on
    $('.perfect-pairing').click(function () {
      // console.log(this.checked)
      $(this)
        .parents('.perfect-parings-wrapper')
        .toggleClass('perfect-parings-wrapper-active')
      // if(this.checked) {
      //   $(this).parents('.perfect-parings-wrapper').addClass('perfect-parings-wrapper-active')
      // } else {
      //   $(this).parents('.perfect-parings-wrapper').removeClass('perfect-parings-wrapper-active')
      // }
      console.log($('.perfect-pairing:checked').length)
      if ($('.perfect-pairing:checked').length) {
        $('.add-service button').removeAttr('disabled')
      } else {
        $('.add-service button').attr('disabled', 'disabled')
      }
    })

    //Safari for appointment-ar
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      $('.safari_newp').click(function () {
        $('.select2-container.select2-container--default').css(
          'display',
          '-webkit-box',
        )
      })
    }

    //home new close section
    $('#cookie-close-zain').click(function () {
      $('.cookies-section-zain').addClass('d-none')
    })

    // $("#registration_form input").on('keyup', function() {
    //   $(".remember button").attr("disabled", false);
    // });

    $('.footer-title').on('click', function (e) {
      e.preventDefault()
      var target = $(this).closest('.colunm-wrapper').find('.footer-links')
      if (target.hasClass('open')) {
        target.removeClass('open')
        $(this).find('i').removeClass('icon-minus')
      } else {
        $('.footer-content .colunm-wrapper .footer-links').removeClass('open')
        $('.footer-content .colunm-wrapper i').removeClass('icon-minus')
        target.addClass('open')
        $(this).find('i').addClass('icon-minus')
      }
    })

    $('#monthly_limit_id').on('keypress', function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false
      }
      $('.paybill a').removeClass('disabled-btn')
      $('.cancel-button').removeClass('disabled-link')
    })

    $('.custom-switch-input').on('change', function () {
      // console.log($('#home_delivery'));
      if ($(this).is(':checked')) {
        // console.log($('#home_delivery'));
        $('.enter-limit').removeClass('hide')
        $('.error-msg').css('display', 'flex')
      } else {
        $('.enter-limit').addClass('hide')
        $('.error-msg').css('display', 'none')
      }
    })

    $('.expand-sharing p').on('click', function () {
      $('.Internet-sharing').slideToggle('slow')
      // $('html').attr('lang') ? is_arabic = 1 :
      // var is_arabic = ;
      // console.log(is_arabic);
      if ($('html').attr('lang') == 'ar') {
        if ($(this).find('span').html() === 'رأي') {
          $(this).find('span').html('إخفاء')
          $('.expand-sharing p').find('img').css('transform', 'rotate(180deg)')
          // $('.plain-slider').get(0).slick.setPosition();
          $('.plain-slider').slick('setPosition')
        } else {
          $(this).find('span').html('رأي')
          $('.expand-sharing p').find('img').css('transform', 'rotate(0deg)')
        }
      } else {
        if ($(this).find('span').html() === 'View') {
          $(this).find('span').html('Hide')
          $('.expand-sharing p').find('img').css('transform', 'rotate(180deg)')
          // $('.plain-slider').get(0).slick.setPosition();
          $('.plain-slider').slick('setPosition')
        } else {
          $(this).find('span').html('View')
          $('.expand-sharing p').find('img').css('transform', 'rotate(0deg)')
        }
      }
    })

    var txtValue = ''
    var findPos = 0
    var newNum = ''
    var strongValue = ''

    // Action to get div heights
    $('.progress').hover(
      function () {
        var val1 = $(this).children('.progress-bar-success').data('mins')
        var val2 = $(this).children('.progress-bar-warning').data('mins')
        var total = val1 + val2
        $(this)
          .parent('li')
          .find('.total')
          .html('<strong>' + total + '</strong>')
        $(this)
          .parent('li')
          .find('.cat1-val')
          .html(val1 + ' Mins')
        $(this)
          .parent('li')
          .find('.cat2-val')
          .html(val2 + ' Mins')
        $(this)
          .parent('li')
          .find('.cat1-sms')
          .html(val1 + ' SMS')
        $(this)
          .parent('li')
          .find('.cat2-sms')
          .html(val2 + ' SMS')
        $(this)
          .parent('li')
          .find('.cat1-gb')
          .html(val1 + ' GB')
        $(this)
          .parent('li')
          .find('.cat2-gb')
          .html(val2 + ' GB')
        $(this).parent('li').find('.tool-tip').show()
      },
      function () {
        $(this).parent('li').find('.tool-tip').hide()
      },
    )
    $('.tool-tip').hover(
      function () {
        $(this).show()
      },
      function () {
        $(this).hide()
      },
    )

    var totalMins = 0
    // Fill all divs dynamically
    $.each($('div.monthly-progress-bar'), function () {
      $(this).css('width', $(this).attr('data-width') + '%')
    })

    // START - Myzain Offers Search
    $('.filter-results-button').click(function () {
      if ($('.filter-box').hasClass('hide')) {
        $('.filter-box').removeClass('hide').fadeIn(1000)
        $('.icon-filter').addClass('d-none')
        $('.icon-filter-filled').removeClass('d-none')
      } else {
        $('.filter-box').fadeOut(1000).addClass('hide')
        $('.icon-filter').removeClass('d-none')
        $('.icon-filter-filled').addClass('d-none')
      }
    })

    $(
      '.filter-box .filter-header .save, .filter-box .filter-header .cancel',
    ).click(function () {
      $('.filter-box').fadeOut(1000).addClass('hide')
      $('.icon-filter').removeClass('d-none')
      $('.icon-filter-filled').addClass('d-none')
    })
    // END - Myzain Offers Search

    function insertErrorAfter(id, name, label) {
      var formGroup = $(id).parents('.form-group')
      if (formGroup.find('label.error').length < 1) {
        formGroup.append(
          '<label id="' +
            name +
            '-error" class="error" for="' +
            name +
            '" style="display: inline-block !important;">' +
            label +
            '</label>',
        )
      }
    }
    function removeError(id) {
      $(id).parents('.form-group').find('label.error').remove()
    }
    function validateCustomEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
      return emailReg.test($email)
    }

    function validateForm() {
      //var namepop = $("#namepop").val();
      //namepop = namepop.trim();
      var emailpop = $('#emailpop').val()
      emailpop = emailpop.trim()
      //var numberpop = $("#numberpop").val();
      //numberpop = numberpop.trim();
      //var topicpop = $("#topicpop").val();
      //topicpop = topicpop.trim();
      //var captchaText = $("#captchaText").val();
      //captchaText = captchaText.trim();

      var valid = '1'

      // if (namepop == '') {
      //     valid = '0';
      //     $("#namepop").addClass("error");
      //     insertErrorAfter('#namepop', 'namepop', 'Please enter Login Id')
      // } else {
      //     $("#namepop").removeClass("error");
      //     removeError('#namepop')
      // }
      if (emailpop == '') {
        valid = '0'
        $('#emailpop').addClass('error')
        var errTxt =
          $('html').attr('lang') == 'ar'
            ? 'الرجاء إدخال عنوان البريد الإلكتروني'
            : 'Please enter Email Address'
        insertErrorAfter('#emailpop', 'emailpop', errTxt)
      } else if (!validateCustomEmail(emailpop)) {
        valid = '0'
        $('#emailpop').addClass('error')
        removeError('#emailpop')
        var errTxt =
          $('html').attr('lang') == 'ar'
            ? 'الرجاء إدخال عنوان بريد إلكتروني صالح'
            : 'Please enter valid Email Address'
        insertErrorAfter('#emailpop', 'emailpop', errTxt)
      } else {
        $('#emailpop').removeClass('error')
        removeError('#emailpop')
      }
      // if (numberpop == '') {
      //     valid = '0';
      //     $("#numberpop").addClass("error");
      //     insertErrorAfter('#numberpop', 'numberpop', 'Please enter Login Id')
      // } else {
      //     $("#numberpop").removeClass("error");
      //     removeError('#numberpop')
      // }
      // if (topicpop == '') {
      //     valid = '0';
      //     $("#topicpop").addClass("error");
      //     insertErrorAfter('#topicpop', 'topicpop', 'Please enter Login Id')
      // } else {
      //     $("#topicpop").removeClass("error");
      //     removeError('#topicpop')
      // }
      // if (captchaText == '') {
      //     valid = '0';
      //     $("#captchaText").addClass("error");
      //     insertErrorAfter('#captchaText', 'captchaText', 'Please enter Login Id')
      // } else {
      //     $("#captchaText").removeClass("error");
      //     removeError('#captchaText')
      // }

      return valid
    }
    $('#submit_chat_btn').click(function (e) {
      e.preventDefault()
      var isValid = validateForm()
      if (isValid == 1) {
        // $('#startchatForm').submit(); //page will refresh
        $(this).parents('.live-chat').removeClass('show')
        $('.zBot').addClass('show')
        startCounter()
      }
    })
    $('#send_msg').click(function (e) {
      e.preventDefault()
      if ($('#message').val() != '') {
        var msgText =
          '<p><img src="./images/input-user.svg" alt=""> <strong>Juan Llerena:</strong> ' +
          $('#message').val() +
          '</p>'
        $('.zBot-box').append(msgText)
        $('.zBot-box')[0].scrollTop = $('.zBot-box')[0].scrollHeight
        $('#message').val('')
      }
    })

    function startCounter() {
      var secs = 00
      var mins = 00
      var hrs = 00
      var interval = setInterval(function () {
        secs++
        if (secs > 59) {
          mins++
          if (mins > 59) {
            hrs++
            $('.connected-time .hours').html(formatedTime(hrs))
            mins = 00
          }
          $('.connected-time .minutes').html(formatedTime(mins))
          secs = 00
        }
        $('.connected-time .seconds').html(formatedTime(secs))
      }, 1000)
    }

    function formatedTime(time) {
      if (time < 10) {
        return '0' + time
      }
      return time
    }
  })

  // START: myinbox.html functions
  countStartupAlerts() // load count new alerts at startup

  var that = null
  $('.inbox-icons .delete-icon').click(function (e) {
    e.preventDefault() // disable # href.
    // Show delete confirmation popup.
    that = this
    $('#popup-small').removeClass('hide')
    $('.bodyoverlay').removeClass('hide')
    $('#popup-small').addClass('show')
    $('.bodyoverlay').addClass('show')
  })

  // Delete confirmation Yes action
  $('.popup-action .close-popup-small').click(function (e) {
    if ($(this).text() === 'Yes') {
      $(that).closest('.product_wrapper').hide()
      countNewAlerts()
    }
  })

  // Unread email icon action
  $('.nav-item a').click(function (e) {
    var filterVal = $(this).find('span:first').html()
    $('.extra-mobile span').html(filterVal)
  })
  // Unread email icon action
  $('.inbox-icon').click(function (e) {
    e.preventDefault() // disable # href.
    var imgSrc = $(this).find('img').attr('src')

    if (imgSrc.search('inbox.svg') > 0) {
      $(this)
        .parents('.product_wrapper')
        .find('.notification-alert span')
        .removeClass('before-dot')

      $(this).find('img').attr('src', './images/inbox-open.svg')
      countNewAlerts()
    }
  })

  // START - Autopay

  /* $(".monthly-amount-display span:first, .recharge-amount-display span:first, .search-input span:last"
   ).click(function () {
     $(this).parents(".main-linecontent").find(".existing-line-list").show();
   });*/
  /* 23-02-2021 starts */
  if ($("input[type='checkbox'].quick-check-cls").length) {
    /* .recharge-amount-display span:first, */
    $('.monthly-amount-display span:first, .search-input span:last').click(
      function () {
        $(this).parents('.main-linecontent').find('.existing-line-list').show()
      },
    )
  } else {
    $(
      '.monthly-amount-display span:first, .recharge-amount-display span:first, .search-input span:last, .dropdown-arrow img',
    ).click(function () {
      $(this).parents('.main-linecontent').find('.existing-line-list').show()
    })
  }

  $('#recharge-amount-id, #monthly_limit_id, #transfer_to_id').blur(
    function () {
      setTimeout(function () {
        //$(".existing-line-list").hide();
      }, 300)
    },
  )

  $(document).mouseup(function (e) {
    var auto_number_input_box = $('.area-section .existing-line-input')
    var auto_number_menu_options = $('.existing-line-list')
    //var auto_number_menu_options = $(".existing-line-list");
    // if the target of the click isn't the container nor a descendant of the container

    // console.log(auto_number_input_box)
    // console.log(auto_number_input_box.has(e.target).length)
    // console.log(auto_number_menu_options)
    if (
      !auto_number_input_box.is(e.target) &&
      auto_number_input_box.has(e.target).length === 0
    ) {
      $('.existing-line-list').hide()
    }
  })
  /* 23-02-2021 ends */
  $(document).on('click', '.autopay-list ul li a', function () {
    if (
      $(this).data('name') == 'Other amount' ||
      $(this).data('name') == 'كمية اخرى'
    ) {
      $(this)
        .parents('.autopay-inner')
        .find('.other_amount_block')
        .fadeIn(1000, function () {
          $(this).find('input').focus()
        })
    } else {
      $(this)
        .parents('.autopay-inner')
        .find('.other_amount_block')
        .fadeOut(1000)
    }
  })
  $(document).on('click', '.autopay-list1 ul li a', function () {
    if (
      $(this).data('name') == 'Other amount' ||
      $(this).data('name') == 'كمية اخرى'
    ) {
      $(this)
        .parents('.nmbr-sec')
        .find('.other_amount_block')
        .fadeIn(1000, function () {
          $(this).find('input').focus()
        })

      if ($(this).data('lang') != 'ar') {
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:first')
          .text($(this).data('name'))
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:nth-child(2)')
          .text('')
      } else {
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:first')
          .text($(this).data('namear'))
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:nth-child(2)')
          .text('')
      }
    } else {
      $(this)
        .parents('.area-section')
        .find('.recharge-amount-display span:first')
        .text($(this).data('number'))
      $(this)
        .parents('.area-section')
        .find('.recharge-amount-display span:first')
        .attr('data-price', $(this).data('price'))
      $(this)
        .parents('.area-section')
        .find('.recharge-amount-display span:nth-child(2)')
        .text($(this).data('name'))
      $(this)
        .parents('.autopay-inner')
        .find('.other_amount_block')
        .fadeOut(1000)
    }
    //currapp_ez_recharge_cal_total();
    currapp_other_number_cal_total()
  })

  $(document).on('click', '.autopay-list ul li a', function () {
    $(this).parents('.area-section').find('.search-input input').val('')
    if (
      $(this).data('name') == 'Other amount' ||
      $(this).data('name') == 'كمية اخرى'
    ) {
      // Other amount
      if ($(this).data('lang') != 'ar') {
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:first')
          .text($(this).data('name'))
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:nth-child(2)')
          .text('')
      } else {
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:first')
          .text($(this).data('namear'))
        $(this)
          .parents('.area-section')
          .find('.recharge-amount-display span:nth-child(2)')
          .text('')
      }

      $('#other_amount_block').fadeIn(1000, function () {
        $('#other_amount_block input').focus()
      })
    } else {
      //$(this).closest(".recharge-amount-display span:first").text($(this).data("number"));
      $(this)
        .parents('.area-section')
        .find('.recharge-amount-display span:first')
        .text($(this).data('number'))
      $(this)
        .parents('.area-section')
        .find('.recharge-amount-display span:nth-child(2)')
        .text($(this).data('name'))

      /* added on 23 feb 2021 starts for changing selected h2 number */
      //$(".autopay-inner .autopay-recharge h2.sel-rechargable-number").html($(this).data("number"));
      //$(".autopay-inner .autopay-recharge span.sel-rechargable-number").html($(this).data("number"));

      var recharge_text_val = $(this).data('recharge-text')
      var recharge_class_val = $(this).data('recharge-class')
      var ret_txt =
        '<span class="autopay-input-data"> ' +
        recharge_text_val +
        ' <span class="' +
        recharge_class_val +
        '"></span> </span>'
      $(this).parents('.area-section').find('.auto-value').html(ret_txt)
      /* added on 23 feb 2021 ends */

      $('#other_amount_block').fadeOut(1000)
    }
  })

  // Monthly limit dropdown action
  $(document).on('click', '.monthly_autopay_list ul li a', function () {
    $('.monthly-amount-display span:first').text($(this).data('number'))
    if (
      $(this).data('number') == 'My Numbers' ||
      $(this).data('number') == 'أرقامي'
    ) {
      $('#hidden-div').fadeIn(1000)
    }
  })

  // Auto Pay Popup Cancel Button Action
  var that = null
  $('.autopay_switch input').change(function () {
    that = this
  })

  $('.extra-switch input').change(function () {
    that = this
    $('.bein_sports_popup').removeClass('hide').addClass('show')
    $('.overlay-page').removeClass('hide').addClass('show')
  })

  $(document).on('click', '.auto_pay_cancel', function () {
    $(that).prop('checked', false)
    $('.radius-bg').css('background', '#d12b8a')
    calcPlanPrice()
  })

  $('.auto_renew_switch input').change(function () {
    that = this

    if ($(this).is(':checked')) {
      $('.auto-renew-popup').removeClass('hide').addClass('show')
      $('.overlay-page').removeClass('hide').addClass('show')
    } else {
      $('.bill-generated a').removeClass('disabled-btn')
    }
  })

  $(document).on('click', '.auto_renew_enable', function () {
    $('.bill-generated a').addClass('disabled-btn')
  })
  // END - Autopay

  // START - Saved Payment Methods
  $('input:radio[name="payOption"]').change(function () {
    $('.payOption-cvv').fadeOut()
    $(this).siblings('label').children('.payOption-cvv').fadeIn('slow')
  })
  // END - Saved Payment Methods

  // START - Credit Transfer

  // New line input keyup action
  $('#transfer_to_id')
    .keyup(function () {
      searchTransferTo($(this).val())
    })
    .keyup()

  $('#other_amount')
    .keyup(function () {
      var inputVal = parseInt($(this).val())
      console.log('my val::' + inputVal)
      if (inputVal > 30) {
        $('.other_error').attr('style', 'display: flex !important')
        $('.paybill a').addClass('disabled-btn')
      } else {
        $('.other_error').attr('style', 'display: none !important')
        $('.paybill a').removeClass('disabled-btn')
      }
    })
    .keyup()

  $('.transf_btn').click(function () {
    $('.overlay-page').removeClass('hide').addClass('show')
    $('.resent-otp').removeClass('show').addClass('hide')
    $('.confirm-popup').removeClass('hide').addClass('show')
  })

  $('#transfer_to_id').focus(function () {
    searchTransferTo('')
  })

  // OTP Verification

  $('.transf_otp_btn').click(function () {
    // var display = $('#fetch_down_time_counter_1');
    // startTimer(10, display);
    // console.log(duration);

    $('.verify-account').removeClass('hide').addClass('show')
    $('.bodyoverlay').removeClass('hide').addClass('show')
    startTimer(1) // start timer
  }) // Transfer OTP Button Action ends here

  $('.close-tracking').click(function () {
    clearInterval(interval)
  })

  $('.resend-pin-credit').click(function () {
    $('.verify-account').removeClass('show').addClass('hide')
    $('.resent-otp').removeClass('hide').addClass('show')
    $('.bodyoverlay').removeClass('hide').addClass('show')
    startTimer(2)
  })

  // END - Credit Transfer

  // START - Manage Plan
  $('.monthly_charges')
    .mouseover(function () {
      $('html,body').css('cursor', 'pointer')
      $(this).next('.tool-tip').show()
    })
    .mouseout(function () {
      $(this).next('.tool-tip').hide()
      $('html,body').css('cursor', 'default')
    })
  // END - Manage Plan

  // START - Manage Plan Customise

  $('.social_wa_input, .social_input, .social_yt_input').change(function () {
    calcPlanPrice()
  })

  $(
    '#double-label-slider2, #double-label-slider3, #double-label-slider4, #double-label-slider5',
  ).click(function () {
    calcPlanPrice()
  })

  // Calculat Plan Prices
  function calcPlanPrice() {
    if ($('.mylines-stripe')[0]) {
      $('.mobile-footer').addClass('mb-225')
    } else {
      $('.mobile-footer').addClass('mb-150')
    }

    $('.price-total-sticky').fadeIn(1000)

    var internet = $(
      '#double-label-slider2 .ui-slider-pip-selected .ui-slider-label i',
    ).html()

    var zainMins = $(
      '#double-label-slider3 .ui-slider-pip-selected .ui-slider-label i',
    ).html()

    if (!$.isNumeric(zainMins)) {
      zainMins = 0
    }

    var localMins = $(
      '#double-label-slider4 .ui-slider-pip-selected .ui-slider-label i',
    ).html()

    if (!$.isNumeric(localMins)) {
      localMins = 0
    }

    var intlMins = $(
      '#double-label-slider5 .ui-slider-pip-selected .ui-slider-label i',
    ).html()

    var socialPacksPrice = 0
    if ($('.social_wa_input').is(':checked')) {
      socialPacksPrice += parseInt(
        $('.social_wa_input').parent().attr('data-price'),
      )
    }

    if ($('.social_input').is(':checked')) {
      socialPacksPrice += parseInt(
        $('.social_input').parent().attr('data-price'),
      )
    }

    if ($('.social_yt_input').is(':checked')) {
      socialPacksPrice += parseInt(
        $('.social_yt_input').parent().attr('data-price'),
      )
    }
    //social_yt_input
    //social_input
    //social_wa_input

    var totalPlanPrice =
      parseInt(internet) +
      parseFloat(zainMins) +
      parseInt(localMins) +
      parseInt(intlMins) +
      parseInt(socialPacksPrice)

    totalPlanPrice = parseInt(totalPlanPrice)
    $('.total_plan_price').html(totalPlanPrice)
  }

  /* 1st slider script starts */
  if ($('#double-label-slider').length > 0) {
    var doubleLabels1 = [
      '<i>2</i><span><small>2</small> local mins</span>',
      '<i>5</i><span><small>5</small> local mins</span>',
      '<i>10</i><span><small>10</small> local mins</span>',
      '<i>50</i><span><small>50</small> local mins</span>',
      '<i>100</i><span><small>100</small> local mins</span>',
      '<i>500</i><span><small>500</small> local mins</span>',
      '<i>1T</i><span>1T local mins</span>',
    ]

    $('#double-label-slider')
      .slider({
        max: doubleLabels1.length - 1,
        min: 0,
        value: 0,
        animate: 400,
        slide: function (event, ui) {
          var step_val = ui.value
          var totl_steps = doubleLabels1.length - 1
          var avg_step_val = 100 / totl_steps
          var step_perc_val = avg_step_val * step_val

          setTimeout(function () {
            $('#double-label-slider').css(
              'background',
              'linear-gradient(90deg, #D12B8A ' +
                step_perc_val +
                '%, #cccccc 0%)',
            )

            if (step_val == 0) {
              $('#double-label-slider .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 1) {
              $('#double-label-slider .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 2) {
              $('#double-label-slider .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 3) {
              $('#double-label-slider .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 4) {
              $('#double-label-slider .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 5) {
              $('#double-label-slider .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 6) {
              $('#double-label-slider .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
            }
          }, 270)
        },
      })
      .slider('pips', {
        rest: 'label',
        labels: doubleLabels1,
      })

    $('#double-label-slider .ui-slider-label').click(function () {
      var sel_slider_item1 = $(this).attr('data-value')
      var max_data_item_val1 = doubleLabels1.length - 1

      if (sel_slider_item1 == max_data_item_val1) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })

    $('#double-label-slider .ui-slider-pip-label').click(function () {
      if ($(this).hasClass('ui-slider-pip-last')) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })
  }
  /* 1st slider script ends */

  /* 2nd slider script starts */

  if ($('#double-label-slider2').length > 0) {
    var doubleLabels2 = [
      '<i>0</i>',
      '<i>05</i>',
      '<i>10</i>',
      '<i>25</i>',
      '<i>50</i>',
      '<i>200</i>',
    ]

    $('#double-label-slider2')
      .slider({
        max: doubleLabels2.length - 1,
        min: 0,
        value: 0,
        animate: 400,
        slide: function (event, ui) {
          var step_val = ui.value
          var totl_steps = doubleLabels2.length - 1
          var avg_step_val = 100 / totl_steps
          var step_perc_val = avg_step_val * step_val

          setTimeout(function () {
            $('#double-label-slider2').css(
              'background',
              'linear-gradient(90deg, #D12B8A ' +
                step_perc_val +
                '%, #cccccc 0%)',
            )

            if (step_val == 0) {
              $('#double-label-slider2 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 1) {
              $('#double-label-slider2 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 2) {
              $('#double-label-slider2 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 3) {
              $('#double-label-slider2 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 4) {
              $('#double-label-slider2 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider2 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 5) {
              $('#double-label-slider2 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 6) {
              $('#double-label-slider2 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider2 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
            }
          }, 270)
        },
      })
      .slider('pips', {
        rest: 'label',
        labels: doubleLabels2,
      })

    $('#double-label-slider2 .ui-slider-label').click(function () {
      var sel_slider_item1 = $(this).attr('data-value')
      var max_data_item_val1 = doubleLabels2.length - 1

      if (sel_slider_item1 == max_data_item_val1) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })

    $('#double-label-slider2 .ui-slider-pip-label').click(function () {
      if ($(this).hasClass('ui-slider-pip-last')) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })
  }
  /* 2nd slider script ends */

  /* 3rd slider script starts */
  if ($('#double-label-slider3').length > 0) {
    var doubleLabels3 = [
      '<i>0</i>',
      '<i>100</i>',
      '<i>200</i>',
      '<i>500</i>',
      '<i>UL</i>',
    ]

    $('#double-label-slider3')
      .slider({
        max: doubleLabels3.length - 1,
        min: 0,
        value: 0,
        animate: 400,
        slide: function (event, ui) {
          var step_val = ui.value
          var totl_steps = doubleLabels3.length - 1
          var avg_step_val = 100 / totl_steps
          var step_perc_val = avg_step_val * step_val

          setTimeout(function () {
            $('#double-label-slider3').css(
              'background',
              'linear-gradient(90deg, #D12B8A ' +
                step_perc_val +
                '%, #cccccc 0%)',
            )

            if (step_val == 0) {
              $('#double-label-slider3 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 1) {
              $('#double-label-slider3 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 2) {
              $('#double-label-slider3 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 3) {
              $('#double-label-slider3 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 4) {
              $('#double-label-slider3 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider3 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 5) {
              $('#double-label-slider3 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 6) {
              $('#double-label-slider3 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider3 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
            }
          }, 270)
        },
      })
      .slider('pips', {
        rest: 'label',
        labels: doubleLabels3,
      })

    $('#double-label-slider3 .ui-slider-label').click(function () {
      var sel_slider_item1 = $(this).attr('data-value')
      var max_data_item_val1 = doubleLabels3.length - 1

      if (sel_slider_item1 == max_data_item_val1) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })

    $('#double-label-slider3 .ui-slider-pip-label').click(function () {
      if ($(this).hasClass('ui-slider-pip-last')) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })
  }
  /* 3rd slider script ends */

  /* 4th slider script starts */
  if ($('#double-label-slider4').length > 0) {
    var doubleLabels4 = [
      '<i>0</i>',
      '<i>50</i>',
      '<i>100</i>',
      '<i>200</i>',
      '<i>500</i>',
      '<i>UL</i>',
    ]

    $('#double-label-slider4')
      .slider({
        max: doubleLabels4.length - 1,
        min: 0,
        value: 0,
        animate: 400,
        slide: function (event, ui) {
          var step_val = ui.value
          var totl_steps = doubleLabels4.length - 1
          var avg_step_val = 100 / totl_steps
          var step_perc_val = avg_step_val * step_val

          setTimeout(function () {
            $('#double-label-slider4').css(
              'background',
              'linear-gradient(90deg, #D12B8A ' +
                step_perc_val +
                '%, #cccccc 0%)',
            )

            if (step_val == 0) {
              $('#double-label-slider4 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 1) {
              $('#double-label-slider4 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 2) {
              $('#double-label-slider4 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 3) {
              $('#double-label-slider4 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 4) {
              $('#double-label-slider4 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider4 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 5) {
              $('#double-label-slider4 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 6) {
              $('#double-label-slider4 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider4 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
            }
          }, 270)
        },
      })
      .slider('pips', {
        rest: 'label',
        labels: doubleLabels4,
      })

    $('#double-label-slider4 .ui-slider-label').click(function () {
      var sel_slider_item1 = $(this).attr('data-value')
      var max_data_item_val1 = doubleLabels4.length - 1

      if (sel_slider_item1 == max_data_item_val1) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })

    $('#double-label-slider4 .ui-slider-pip-label').click(function () {
      if ($(this).hasClass('ui-slider-pip-last')) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })
  }
  /* 4th slider script ends */

  /* 5th slider script starts */
  if ($('#double-label-slider5').length > 0) {
    var doubleLabels5 = [
      '<i>0</i>',
      '<i>500</i>',
      '<i>1000</i>',
      '<i>2000</i>',
      '<i>5000</i>',
      '<i>120</i>',
    ]

    $('#double-label-slider5')
      .slider({
        max: doubleLabels5.length - 1,
        min: 0,
        value: 0,
        animate: 400,
        slide: function (event, ui) {
          var step_val = ui.value
          var totl_steps = doubleLabels5.length - 1
          var avg_step_val = 100 / totl_steps
          var step_perc_val = avg_step_val * step_val

          setTimeout(function () {
            $('#double-label-slider5').css(
              'background',
              'linear-gradient(90deg, #D12B8A ' +
                step_perc_val +
                '%, #cccccc 0%)',
            )

            if (step_val == 0) {
              $('#double-label-slider5 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 1) {
              $('#double-label-slider5 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 2) {
              $('#double-label-slider5 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 3) {
              $('#double-label-slider5 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 4) {
              $('#double-label-slider5 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
              $('#double-label-slider5 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 5) {
              $('#double-label-slider5 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#C2B7D1',
              )
            }

            if (step_val == 6) {
              $('#double-label-slider5 .ui-slider-pip-1 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-2 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-3 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-4 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-5 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
              $('#double-label-slider5 .ui-slider-pip-6 .ui-slider-line').css(
                'background',
                '#D12B8A',
              )
            }
          }, 270)
        },
      })
      .slider('pips', {
        rest: 'label',
        labels: doubleLabels5,
      })

    $('#double-label-slider5 .ui-slider-label').click(function () {
      var sel_slider_item1 = $(this).attr('data-value')
      var max_data_item_val1 = doubleLabels5.length - 1

      if (sel_slider_item1 == max_data_item_val1) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })

    $('#double-label-slider5 .ui-slider-pip-label').click(function () {
      if ($(this).hasClass('ui-slider-pip-last')) {
        $('#product_detail_btn').css('display', 'block')
      } else {
        $('#product_detail_btn').css('display', 'none')
      }
    })
  }
  /* 5th slider script starts */
  $('.buy_plan_btn').click(function () {
    $('.bodyoverlay').removeClass('hide').addClass('show')
    $('.confirm-plan').removeClass('hide').addClass('show')
  })

  // END - Manage Plan Customise
})

var interval
var duration = 579
var view = 1
// Start and End Timer
function startTimer(view) {
  if (interval) {
    // console.log(interval);
    // console.log('Hello');
    clearInterval(interval)
  }
  var timer = duration,
    minutes,
    seconds
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    if (view == 1) {
      $('#fetch_down_time_counter_1').html(minutes + ':' + seconds)
    } else {
      $('#fetch_down_time_counter_2').html(minutes + ':' + seconds)
    }

    console.log(minutes + ':' + seconds)
    if (--timer < 0) {
      clearInterval(interval)
      timer = '00:00'
    }
  }, 1000)
}
// Search existing number
function searchTransferTo(searchText) {
  // Declare variables
  var listItems = $('.transfer_to_list li')
  listItems.each(function (idx, li) {
    var product = $(li)
    txtValue = product.text()
    findPos = txtValue.toUpperCase().indexOf(searchText)
    if (findPos > -1) {
      newNum = txtValue.substring(findPos, findPos + searchText.length)
      strongValue = txtValue.replace(newNum, '<strong>' + newNum + '</strong>')

      $(li).find('span span').html(strongValue)
      $(li).show()
    } else {
      $(li).hide()
    }
    // and the rest of your code
  })
}

function countNewAlerts() {
  var allNewAlerts = $('.tab-content .active .before-dot').parents(
    '.product_wrapper:visible',
  ).length
  allNewAlerts = '(' + allNewAlerts + ')'
  $('.nav-item .active span span').html(allNewAlerts)
}

function countStartupAlerts() {
  var all = $('.tab-content #all .before-dot').length
  var totalOffers = $('.tab-content #offers .before-dot').length
  var totalOrders = $('.tab-content #orders .before-dot').length

  all = '(' + all + ')'
  totalOffers = '(' + totalOffers + ')'
  totalOrders = '(' + totalOrders + ')'

  $('#inbox-all span span').html(all)
  $('#inbox-offers span span').html(totalOffers)
  $('#inbox-orders span span').html(totalOrders)
}

// END: myinbox.html functions

$(function () {
  var width = $(document).width()
  $('.one-content-down').click(function () {
    $('#one-div-second').slideDown('slow')
    if (!(width < 1200)) {
      $('#one-div-first').slideUp('slow')
    }
    $('.one-content-down').hide()
  })
  $('.one-content-up').click(function () {
    $('#one-div-second').slideUp('slow')
    $('#one-div-first').slideDown('slow')
    $('.one-content-down').show()
  })
  $('.two-content-down').click(function () {
    $('#two-div-second').slideDown('slow')
    if (!(width < 1200)) {
      $('#two-div-first').slideUp('slow')
    }
    $('.two-content-down').hide()
  })
  $('.two-content-up').click(function () {
    $('#two-div-second').slideUp('slow')
    $('#two-div-first').slideDown('slow')
    $('.two-content-down').show()
  })
  $('.three-content-down').click(function () {
    $('#three-div-second').slideDown('slow')
    if (!(width < 1200)) {
      $('#three-div-first').slideUp('slow')
    }
    $('.three-content-down').hide()
  })
  $('.three-content-up').click(function () {
    $('#three-div-second').slideUp('slow')
    $('#three-div-first').slideDown('slow')
    $('.three-content-down').show()
  })
  $('.four-content-down').click(function () {
    $('#four-div-second').slideDown('slow')
    if (!(width < 1200)) {
      $('#four-div-first').slideUp('slow')
    }
    $('.four-content-down').hide()
  })
  $('.four-content-up').click(function () {
    $('#four-div-second').slideUp('slow')
    $('#four-div-first').slideDown('slow')
    $('.four-content-down').show()
  })
  $('.five-content-down').click(function () {
    $('#five-div-second').slideDown('slow')
    if (!(width < 1200)) {
      $('#five-div-first').slideUp('slow')
    }
    $('.five-content-down').hide()
  })
  $('.five-content-up').click(function () {
    $('#five-div-second').slideUp('slow')
    $('#five-div-first').slideDown('slow')
    $('.five-content-down').show()
  })
  $('.six-content-down').click(function () {
    $('#six-div-second').slideDown('slow')
    if (!(width < 1200)) {
      $('#six-div-first').slideUp('slow')
    }
    $('.six-content-down').hide()
  })
  $('.six-content-up').click(function () {
    $('#six-div-second').slideUp('slow')
    $('#six-div-first').slideDown('slow')
    $('.six-content-down').show()
  })
})

$(function () {
  $('.product-detail-opts').click(function () {
    $('.product-detail-rm').toggleClass('addon-button')
  })
})

//replace this code
$('#example_01').change(function () {
  if ($(this).is(':checked')) {
    $('.radius-bg').css('background', '#7ec33f')
    $('.monthly-autopay > li > p#english').html('Monthly Autopay is active')
    $('.monthly-autopay > li > p#arabic').html('الدفع التلقائي الشهري نشط')
    $('#popup-small').removeClass('hide').addClass('show')
    $('.overlay-page').removeClass('hide').addClass('show')
    $('.setting-icon').show()
  } else {
    $('.radius-bg').css('background', '#d12b8a')
    $('.monthly-autopay > li > p#english').html('Monthly Autopay is not active')
    $('.monthly-autopay > li > p#arabic').html('الدفع التلقائي الشهري غير نشط')
    $('.setting-icon').hide()
  }
})

$('.extra-add').click(function () {
  $('#popup-small').removeClass('hide').addClass('show')
  $('.overlay-page').removeClass('hide').addClass('show')
})
$(function () {
  $('.close-down-arrow').click(function () {
    $('.postpaid-dropdown').slideToggle('slow')
  })
})
$(document).click(function () {
  $('.postpaid-dropdown').slideUp('slow')
})
//new
$('.expand-past-bills').click(function () {
  if ($('.past-bills-div').is(':hidden')) {
    $(this)
      .find('p#en')
      .html(
        'Hide past bills<a href="javascript:void;"><img src="images/kd-monthly-up.svg" alt=""></a>',
      )
    $(this)
      .find('p#en-bill')
      .html(
        'Hide Details<a href="javascript:void;"><img src="images/kd-monthly-up.svg" alt=""></a>',
      )
    $(this)
      .find('p#ar')
      .html(
        'عرض الفواتير السابقة<a href="javascript:void;"><img src="images/kd-monthly-up.svg" alt=""></a>',
      )
    $(this)
      .find('p#ar-bill')
      .html(
        'عرض الفواتير السابقة<a href="javascript:void;"><img src="images/kd-monthly-up.svg" alt=""></a>',
      )
  } else {
    $(this)
      .find('p#en')
      .html(
        'View past bills<a href="javascript:void;"><img src="images/kd-monthly-down.svg" alt=""></a>',
      )
    $(this)
      .find('p#en-bill')
      .html(
        'View Details<a href="javascript:void;"><img src="images/kd-monthly-down.svg" alt=""></a>',
      )
    $(this)
      .find('p#ar')
      .html(
        'عرض الفواتير السابقة<a href="javascript:void;"><img src="images/kd-monthly-down.svg" alt=""></a>',
      )
    $(this)
      .find('p#ar-bill')
      .html(
        'عرض الفواتير السابقة<a href="javascript:void;"><img src="images/kd-monthly-down.svg" alt=""></a>',
      )
  }

  $('.past-bills-div').slideToggle('slow')
})
$(function () {
  $('.tox-progress').each(function () {
    var value = $(this).data('progress')
    // var span = $(this).find('.progress-bar');
    if (value >= 90) {
      $(this).attr('data-color', '#e25d5e')
    } else if (value < 90 && value >= 50) {
      $(this).attr('data-color', '#f5d06e')
    } else if (value < 50 && value >= 30) {
      $(this).attr('data-color', '#d12b8a')
    } else {
      $(this).attr('data-color', '#7cc53f')
    }
  })
  var value = $('#circle1').data('progress')
  if (value >= 90) {
    $('#expiring-data').show()
  }
})
//HAMZA CODE END
$('.postpaid-dropdown').click(function (e) {
  e.stopPropagation()
})
$('.close-down-arrow').click(function (e) {
  e.stopPropagation()
})
$('#add-nickname').click(function () {
  $('.postpaid-input').show('slide')
})
$('.postpaid-button').click(function () {
  $('.postpaid-input').fadeOut()
  $('#add-nickname span a').html($('#nickname-txt').val())
})

$(function () {
  $('#card-upload-button').click(function () {
    $('.bodyoverlay').removeClass('hide')
    $('.bodyoverlay').addClass('show')
    $('.order-tracking-popup').removeClass('hide')
    $('.order-tracking-popup').addClass('show')
  })
})

// CODE BY HAMZA
$(function () {
  $('.report-btn').click(function () {
    $('.report-selection').toggleClass('hide')
    $('.report-success-msg .alert').toggleClass('hide')
    // $('.report-success-msg .alert').addClass('show ');
    $('.report-btn').toggleClass('hide')
    $('.cancel-btn').toggleClass('hide')
    $('.close-btn').toggleClass('hide')
    // $('.close-btn').show();
  })
})

$(function () {
  $('#upload-front').change(function () {
    $('#continue_front').prop('disabled', false)
    readFrontURL(this)
  })
})
$(function () {
  $('#upload-front-pass').change(function () {
    readFrontURL(this)
  })
})

$(function () {
  $('#upload-back').change(function () {
    readBackURL(this)
  })
})

$(function () {
  $('.solution-1 .special-procs li:first-child a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[0].src =
      'images/have-a-good-night.png'
    document.getElementsByClassName('box-title')[0].innerHTML = 'test 1'
    document.getElementsByClassName('box-price')[0].innerHTML = '15'
    document.getElementsByClassName('box-content')[0].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })
  $('.solution-1 .special-procs li:nth-child(2) a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[0].src =
      'images/True-cenima.png'
    document.getElementsByClassName('box-title')[0].innerHTML = 'test 2'
    document.getElementsByClassName('box-price')[0].innerHTML = '25'
    document.getElementsByClassName('box-content')[0].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })
  $('.solution-1 .special-procs li:nth-child(3) a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[0].src =
      'images/have-a-good-night.png'
    document.getElementsByClassName('box-title')[0].innerHTML = 'test 3'
    document.getElementsByClassName('box-price')[0].innerHTML = '35'
    document.getElementsByClassName('box-content')[0].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })

  $('.solution-2 .special-procs li:first-child a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[1].src =
      'images/have-a-good-night.png'
    document.getElementsByClassName('box-title')[1].innerHTML = 'test 1'
    document.getElementsByClassName('box-price')[1].innerHTML = '15'
    document.getElementsByClassName('box-content')[1].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })
  $('.solution-2 .special-procs li:nth-child(2) a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[1].src =
      'images/True-cenima.png'
    document.getElementsByClassName('box-title')[1].innerHTML = 'test 2'
    document.getElementsByClassName('box-price')[1].innerHTML = '25'
    document.getElementsByClassName('box-content')[1].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })
  $('.solution-2 .special-procs li:nth-child(3) a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[1].src =
      'images/have-a-good-night.png'
    document.getElementsByClassName('box-title')[1].innerHTML = 'test 3'
    document.getElementsByClassName('box-price')[1].innerHTML = '35'
    document.getElementsByClassName('box-content')[1].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })

  $('.solution-3 .special-procs li:first-child a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[2].src =
      'images/have-a-good-night.png'
    document.getElementsByClassName('box-title')[2].innerHTML = 'test 1'
    document.getElementsByClassName('box-price')[2].innerHTML = '15'
    document.getElementsByClassName('box-content')[2].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })
  $('.solution-3 .special-procs li:nth-child(2) a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[2].src =
      'images/True-cenima.png'
    document.getElementsByClassName('box-title')[2].innerHTML = 'test 2'
    document.getElementsByClassName('box-price')[2].innerHTML = '25'
    document.getElementsByClassName('box-content')[2].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })
  $('.solution-3 .special-procs li:nth-child(3) a').on('click', function (e) {
    e.preventDefault()
    document.getElementsByClassName('special-img')[2].src =
      'images/have-a-good-night.png'
    document.getElementsByClassName('box-title')[2].innerHTML = 'test 3'
    document.getElementsByClassName('box-price')[2].innerHTML = '35'
    document.getElementsByClassName('box-content')[2].innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })
})

$('.planline-top > span').on('click', function () {
  $(this).closest('.planline-top').toggleClass('active')
  $(this).closest('.planline-wrapper').toggleClass('active')
})

$('.kw #wrapper .extras-popup ul.list_buttonssss .btn.btn-lrg').on(
  'click',
  function () {
    $(this).toggleClass('active')
  },
)

$('.review-popup .fa-star').on('click', function () {
  $(this).removeClass('White-star')
})

$('.review-popup .fa-star:nth-child(2)').on('click', function () {
  $('.fa-star:nth-child(1)').removeClass('White-star')
  $(this).removeClass('White-star')
})

$('.review-popup .fa-star:nth-child(3)').on('click', function () {
  $('.fa-star:nth-child(1)').removeClass('White-star')
  $('.fa-star:nth-child(2)').removeClass('White-star')
  $(this).removeClass('White-star')
})

$('.review-popup .fa-star:nth-child(4)').on('click', function () {
  $('.fa-star:nth-child(1)').removeClass('White-star')
  $('.fa-star:nth-child(2)').removeClass('White-star')
  $('.fa-star:nth-child(3)').removeClass('White-star')
  $(this).removeClass('White-star')
})

$('.review-popup .fa-star:nth-child(5)').on('click', function () {
  $('.fa-star:nth-child(1)').removeClass('White-star')
  $('.fa-star:nth-child(2)').removeClass('White-star')
  $('.fa-star:nth-child(3)').removeClass('White-star')
  $('.fa-star:nth-child(4)').removeClass('White-star')
  $(this).removeClass('White-star')
})

$(function () {
  $('.number-1 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '91079990'
  })
})
$(function () {
  $('.number-2 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '92079990'
  })
})
$(function () {
  $('.number-3 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '93079990'
  })
})
$(function () {
  $('.number-4 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '94079990'
  })
})
$(function () {
  $('.number-5 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '95079990'
  })
})

$(function () {
  $('.number-6 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '96079990'
  })
})
$(function () {
  $('.number-7 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '97079990'
  })
})
$(function () {
  $('.number-8 a').click(function () {
    document.getElementById('profile-contact').innerHTML = '98079990'
  })
})

$(function () {
  $('.helpful').click(function () {
    $(this).addClass('active')
    document.getElementById('help1').innerHTML = '(1)'
  })
})
$(function () {
  $('.helpful2').click(function () {
    $(this).addClass('active')
    document.getElementById('help2').innerHTML = '(1)'
  })
})
$(function () {
  $('.helpful3').click(function () {
    $(this).addClass('active')
    document.getElementById('help3').innerHTML = '(1)'
  })
})
$(function () {
  $('.helpful4').click(function () {
    $(this).addClass('active')
    document.getElementById('help4').innerHTML = '(1)'
  })
})
$(function () {
  $('.helpful5').click(function () {
    $(this).addClass('active')
    document.getElementById('help5').innerHTML = '(1)'
  })
})
$(function () {
  $('.helpful6').click(function () {
    $(this).addClass('active')
    document.getElementById('help6').innerHTML = '(1)'
  })
})

$(function () {
  $('.comment1').click(function () {
    $(this).toggleClass('active')
    $('.report1').removeClass('active')
    $('#comment-sec1').slideToggle()
    $('#report-sec1').hide()
  })
  $('.subcomment-btn').click(function (event) {
    $('#subcomment-sec').slideToggle()
  })
  $('.subcomment-res').click(function (event) {
    $('#subcomment-res').slideToggle()
  })
  $('.comment2').click(function () {
    $(this).toggleClass('active')
    $('.report2').removeClass('active')
    $('.report-sec2').removeClass('active')
    $('#report-sec2').hide()
    $('#comment-sec2').slideToggle()
  })
  $('.report-sec2').click(function () {
    $(this).toggleClass('active')
    $('.comment2').removeClass('active')
    $('#comment-sec2').hide()
    $('#report-sec2').slideToggle()
  })
  $('.comment3').click(function () {
    $(this).toggleClass('active')
    $('#comment-sec3').slideToggle()
  })
  $('.comment4').click(function () {
    $(this).toggleClass('active')
    $('#comment-sec4').slideToggle()
  })
  $('.comment5').click(function () {
    $(this).toggleClass('active')
    $('#comment-sec5').slideToggle()
  })
  $('.comment6').click(function () {
    $(this).toggleClass('active')
    $('#comment-sec6').slideToggle()
  })
  $('.review-button a').click(function (event) {
    event.preventDefault()
    $('.review-popup').addClass('show')
    $('.bodyoverlay').addClass('show')
  })
  $('.completed-btn').click(function (event) {
    event.preventDefault()
    $('.completed-popup').addClass('show')
    $('.activate-popup').removeClass('show')
  })
  $('.error-btn').click(function (event) {
    event.preventDefault()
    $('.error-popup').addClass('show')
    $('.activate-popup').removeClass('show')
  })

  $('.planline-wrapper:first-child .planline-top ul li:last-child').click(
    function (event) {
      event.preventDefault()
      $('.remove1').addClass('show')
      $('.bodyoverlay').addClass('show')
    },
  )

  $('.remove1 .btn.btn-pc-3:first-child').click(function (event) {
    event.preventDefault()
    $('.planline-wrapper:first-child').fadeOut()
    $('.remove1').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })
  $('.remove1 .btn.btn-pc-3:last-child').click(function (event) {
    event.preventDefault()
    $('.remove1').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })

  $('.maintop-content p').click(function (event) {
    event.preventDefault()
    $('.remove5').addClass('show')
    $('.bodyoverlay').addClass('show')
  })

  $('.remove5 .btn.btn-pc-3:first-child').click(function (event) {
    event.preventDefault()
    $('.main-linecontent.line1').fadeOut()
    $('.remove5').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })
  $('.remove5 .btn.btn-pc-3:last-child').click(function (event) {
    event.preventDefault()
    $('.remove5').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })

  $('.planline-wrapper:nth-child(2) .planline-top ul li:last-child').click(
    function (event) {
      event.preventDefault()
      $('.remove2').addClass('show')
      $('.bodyoverlay').addClass('show')
    },
  )

  $('.remove2 .btn.btn-pc-3:first-child').click(function (event) {
    event.preventDefault()
    $('.planline-wrapper:nth-child(2)').fadeOut()
    $('.remove2').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })
  $('.remove2 .btn.btn-pc-3:last-child').click(function (event) {
    event.preventDefault()
    $('.remove2').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })

  $('.planline-wrapper:nth-child(3) .planline-top ul li:last-child').click(
    function (event) {
      event.preventDefault()
      $('.remove3').addClass('show')
      $('.bodyoverlay').addClass('show')
    },
  )

  $('.remove3 .btn.btn-pc-3:first-child').click(function (event) {
    event.preventDefault()
    $('.planline-wrapper:nth-child(3)').fadeOut()
    $('.remove3').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })
  $('.remove3 .btn.btn-pc-3:last-child').click(function (event) {
    event.preventDefault()
    $('.remove3').removeClass('show')
    $('.bodyoverlay').removeClass('show')
  })
})

if ($(window).width() < 991) {
  $(function () {
    $('.solution-dropdown select').change(function () {
      if ($(this).val() == 'connectivity') {
        $('#products-section .nav-tabs + .tab-content .tab-pane').removeClass(
          'active show',
        )
        $('#connectivity-content').addClass('active show')
      } else if ($(this).val() == 'communication') {
        $('#products-section .nav-tabs + .tab-content .tab-pane').removeClass(
          'active show',
        )
        $('#communication-content').addClass('active show')
      } else if ($(this).val() == 'datacenter') {
        $('#products-section .nav-tabs + .tab-content .tab-pane').removeClass(
          'active show',
        )
        $('#datacenter-content').addClass('active show')
      } else if ($(this).val() == 'saas') {
        $('#products-section .nav-tabs + .tab-content .tab-pane').removeClass(
          'active show',
        )
        $('#saas-content').addClass('active show')
      } else if ($(this).val() == 'video') {
        $('#products-section .nav-tabs + .tab-content .tab-pane').removeClass(
          'active show',
        )
        $('#video-content').addClass('active show')
      }
    })
  })
}
// For Mobile sticky
/*$(window).on("scroll", function () {
  if ($(window).width() < 768 && $(window).scrollTop() >= 60) {
    $("section.my-zain-stripe").addClass("sticky");
  } else {
    $(".my-zain-stripe").removeClass("sticky");
  }
})*/

// }

if ($('.fixed-cta').length > 0) {
  $(document).click(function () {
    if ($('.form-control').is(':focus')) {
      $('.cart_scroll_mob_main.fixed-cta').addClass('focused_input')
    } else {
      $('.cart_scroll_mob_main.fixed-cta').removeClass('focused_input')
    }
  })

  const headings12 = gsap.utils.toArray('.fixed-cta')

  headings12.forEach((title, index) => {
    gsap.to(title, {
      scrollTrigger: {
        trigger: '.main-footer2',
        start: 'top bottom',
        end: 'bottom top',
        toggleClass: { targets: '.fixed-cta', className: 'postion_cta' },

      },
    })
  })
}

//WINDOW SCROLL FUNCTION WITH RESPECT TO FOOTER
$(window).scroll(function () {
  // console.log("footer top:" + $(".main-footer").offset().top);
  // console.log("cart top:" + $(".car_total_mob_new").offset().top);
  if ($(window).scrollTop() >= 60) {
    $('.header .main-header').addClass('sticky')
    $('.header .main-header.main-header-addon').removeClass('sticky')
    $('.header.thank-you-header .main-header').removeClass('sticky')
    //generic-templates.html right and left menu sticky added
    $('.generic-left-sticky .menuitem-list').addClass('left-menu-sticky')
    $('.generic-right-sticky .text-and-img').addClass('right-img-sticky')
  } else {
    $('.header .main-header').removeClass('sticky')
  }

  if ($('.main-footer').get(0)) {
    if (
      $(window).scrollTop() >= $('.main-footer').offset().top - 570 ||
      $(window).scrollTop() < 60
    ) {
      //generic-templates.html right and left menu sticky removed
      $('.generic-left-sticky .menuitem-list').removeClass('left-menu-sticky')
      $('.generic-right-sticky .text-and-img').removeClass('right-img-sticky')
    }

    /*
    //buying-newline.html mobile view
    console.log('main footer')
    if (
      $('.cart_scroll_mob_main').offset().top >= $('.main-footer').offset().top
    ) {
      console.log('not sticky')
      $('.cart_scroll_mob_main').css('position', 'inherit')
    }
    // console.log($(window).scrollTop() < $('.main-footer').offset().top - $(window).height())
    if (
      $(window).scrollTop() <
      $('.main-footer').offset().top - $(window).height()
    ) {
      // console.log('sticky')
      $('.cart_scroll_mob_main').css('position', 'fixed')
    }

    */
  }

  /*
  if ($('.main-footer2').get(0)) {
    console.log('main footer 2')
    if (
      $(window).scrollTop() <
      $('.main-footer2').offset().top - $(window).height()
    ) {
      console.log('sticky')
      $('.cart_scroll_mob_main').css('position', 'fixed')
    }
    if (
      $('.cart_scroll_mob_main').offset().top >= $('.main-footer2').offset().top
    ) {
      console.log('not sticky')
      $('.cart_scroll_mob_main').css('position', 'inherit')
    }
  }
  */

  if ($(window).width() < 768 && $(window).scrollTop() >= 60) {
    $('section.my-zain-stripe').addClass('sticky')
  } else {
    $('.my-zain-stripe').removeClass('sticky')
  }

  if ($(window).scrollTop() >= 60) {
    $('.mylines-stripe').addClass('sticky')
  } else {
    $('.mylines-stripe').removeClass('sticky')
  }
  if ($(window).scrollTop() >= 60) {
    $('.responsive-strpe').addClass('sticky')
  } else {
    $('.responsive-strpe').removeClass('sticky')
  }
})

$(window).scroll(function () {
  var scroll = $(window).scrollTop()
  // Check the mobile version scroll position
  if (scroll >= 310) {
    $('.filter-header').addClass('sticky')
  } else {
    $('.filter-header').removeClass('sticky')
  }

  if ($(window).scrollTop() >= 60) {
    $('.mylines-stripe').addClass('sticky')
  } else {
    $('.mylines-stripe').removeClass('sticky')
  }
  if ($(window).scrollTop() >= 60) {
    $('.responsive-strpe').addClass('sticky')
  } else {
    $('.responsive-strpe').removeClass('sticky')
  }
})

$(document).ready(function () {
  if ($('input[name="planets"]').length) {
    $('input[name="planets"]').amsifySuggestags({
      type: 'amsify',
      suggestions: [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupitor',
        'Uranus',
        'Neptune',
        'Pluto',
      ],
      whiteList: true,
    })
  }

  if ($('.specifications.battery').length) {
    // grab the initial top offset of the navigation
    var stickyNavTop = $('.specifications.battery').offset().top

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
      var scrollTop = $(window).scrollTop() // our current vertical position from the top

      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) {
        $('.compare-table-head').addClass('sticky')
      } else {
        $('.compare-table-head').removeClass('sticky')
      }
    }

    stickyNav()
    // and run it again every time you scroll
    $(window).scroll(function () {
      stickyNav()
    })
  }
})

$(document).ready(function () {
  if (document.getElementById('langs') != null) {
    dir_val = true
  }
  //Home- Banner Slider
  if ($('.banner-slider-wrapper').length) {
    $('.banner-slider-wrapper').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2500,
      infinite: true,
      rtl: dir_val,
    })
  }

  // home - Top selected slider after 768px
  if ($('.top-selected_slider').length) {
    $('.top-selected_slider').slick({
      rtl: dir_val,
      responsive: [
        {
          breakpoint: 4000,
          settings: 'unslick',
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1.1,
            dots: true,
            centerMode: false,
            infinite: false,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
            centerMode: false,
            infinite: false,
            arrows: false,
          },
        },
      ],
    })
  }

  if (document.getElementById('langs') != null) {
    dir_val = true
  }
  //Home - plans Slider
  if ($('.plans_slider').length) {
    $('.plans_slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: false,
      dots: false,
      rtl: dir_val,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1.6,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    })
  }

  if (document.getElementById('langs') != null) {
    dir_val = true
  }
  //Home - Product Slider
  if ($('.product_slider').length) {
    $('.product_slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: false,
      dots: false,
      rtl: dir_val,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.1,
            dots: true,
          },
        },
      ],
    })
  }

  if (document.getElementById('langs') != null) {
    dir_val = true
  }
  // Home - Zain life slider
  if ($('.zainlife-slider, .offers-slider').length) {
    $('.zainlife-slider, .offers-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 2,
      infinite: false,
      rtl: dir_val,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }

  if ($('.pagezainlife-slider').length) {
    $('.pagezainlife-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      infinite: false,
      rtl: dir_val,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }

  if ($('.partner-slider').length) {
    $('.partner-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 5,
      infinite: false,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }

  if ($('.zain-solutions_slider').length) {
    $('.zain-solutions_slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 4,
      infinite: false,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
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
      prevArrow:
        '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
    })
    $('.product-detail-slider .slider_main').slick({
      slidesToShow: 1,
      infinite: false,
      arrows: true,
      dots: false,
      asNavFor: '.product-detail-slider .slider_nav',
      prevArrow:
        '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
    })
  }

  // Product detail - plans Carousal
  if ($('.slick-plan-carousel').length) {
    $('.slick-plan-carousel').slick({
      slidesToShow: 4,
      arrows: true,
      dots: false,
      infinite: false,
      prevArrow:
        '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            arrows: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    })
  }

  $('.slick-plan-carousel.noslider').slick('unslick')

  //Extras - Slider
  if ($('.product_slider_new').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.product_slider_new').slick({
      arrows: true,
      slidesToShow: 3,
      rtl: dir_val,
      infinite: false,
      dots: false,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.2,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Manage-Plan - 1th
  if ($('.manage-slider-inner.before-after-slider-inner').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.manage-slider-inner.before-after-slider-inner').slick({
      arrows: true,
      slidesToShow: 4,
      rtl: dir_val,

      infinite: false,
      dots: true,
      slidesToScroll: 4,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
            slidesToScroll: 4,
          },
        },
      ],
    })
  }

  //Manage-Plan - 1th
  if ($('.manage-slider-inner').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.manage-slider-inner').slick({
      arrows: true,
      slidesToShow: 6,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 8,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Manage-Plan - Full width
  if ($('.my-future-plan').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.my-future-plan').slick({
      arrows: true,
      slidesToShow: 8,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 8,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Manage-Plan - 2nd
  if ($('.manage-slider-snd-inner').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.manage-slider-snd-inner').slick({
      arrows: true,
      slidesToShow: 3,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  $(function () {
    $('.zain-circle').each(function () {
      var value = $(this).data('value')
      var span = $(this).find('.progress-bar')
      if (value >= 75) {
        span.addClass('progress-bar-red')
      } else if (value < 75 && value >= 50) {
        span.addClass('progress-bar-yellow')
      } else {
        span.addClass('progress-bar-green')
      }
    })
    var value = $('#circle1').data('value')
    if (value >= 90) {
      $('#expiring-data').show()
    }
  })

  //My Zain Dashboard progress circle
  $(function () {
    $('.zain-circle').each(function () {
      var value = $(this).attr('data-value')
      var left = $(this).find('.progress-left .progress-bar')
      var right = $(this).find('.progress-right .progress-bar')

      if (value > 0) {
        if (value <= 50) {
          right.css(
            'transform',
            'rotate(' + percentageToDegrees(value) + 'deg)',
          )
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css(
            'transform',
            'rotate(' + percentageToDegrees(value - 50) + 'deg)',
          )
        }
      }
    })

    function percentageToDegrees(percentage) {
      return (percentage / 100) * 360
    }
  })

  //Zain Dashboard - Slider
  if ($('.plain-slider').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.plain-slider').slick({
      arrows: true,
      slidesToShow: 2,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Zain Dashboard - Extras
  if ($('.ex-slider-outter').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.ex-slider-outter').slick({
      arrows: true,
      slidesToShow: 6,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.8,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Manage Plan - Slider
  if ($('.manage-plan').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.manage-plan').slick({
      arrows: true,
      slidesToShow: 4,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Manage Plan - Slider
  if ($('.manage-plan-snd').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.manage-plan-snd').slick({
      arrows: true,
      slidesToShow: 4,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.6,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //My Zain Listing Main - Slider
  if ($('.main-slider-myzain').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.main-slider-myzain').slick({
      arrows: true,
      slidesToShow: 3,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Wiyana Hero - Slider
  if ($('.choose-wiyana-plan-slider').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    function getSliderSettings() {
      return {
        arrows: false,
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        rtl: dir_val,
        infinite: false,
        dots: true,
        prevArrow:
          '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
        nextArrow:
          '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4.2,
              dots: true,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3.2,
              dots: true,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3.2,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2.2,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1.2,
              arrows: false,
              dots: true,
            },
          },
        ],
      }
    }
    $('.choose-wiyana-plan-slider').slick(getSliderSettings())

    $('#search_input').on('keyup', function () {
      var value = $(this).val().toLowerCase()
      $('.choose-wiyana-plan-slider .plan_single').filter(function () {
        $(this).toggle(
          $(this)
            .find('.heading_sec_wiyana h3')
            .text()
            .toLowerCase()
            .indexOf(value) > -1,
        )
      })
    })

    $('.addon_filter_wiyana').on('change', function () {
      $('.choose-wiyana-plan-slider').slick('slickUnfilter')
      $(this).addClass('active')
      if ($(this).prop('checked')) {
        var filter = $(this).data('filter')
        console.log(filter)
        if ($(this).hasClass('active')) {
          $('.choose-wiyana-plan-slider').slick('slickFilter', '.' + filter)
        }
      }
    })

    $('.left-btn-wrap .wiyana_slick_filter').on('click', function () {
      $('.choose-wiyana-plan-slider').slick('slickUnfilter')
      var filter = $(this).data('filter')
      $('.right-btn-wrap .wiyana_slick_filter').removeClass('active')
      $(this).toggleClass('active')
      console.log(filter)
      if ($(this).hasClass('active')) {
        $('.choose-wiyana-plan-slider').slick('slickFilter', '.' + filter)
      }
    })
    $('.right-btn-wrap .wiyana_slick_filter').on('click', function () {
      $('.choose-wiyana-plan-slider').slick('slickUnfilter')
      var filter = $(this).data('filter')
      $('.left-btn-wrap .wiyana_slick_filter').removeClass('active')
      $(this).toggleClass('active')
      console.log(filter)
      if ($(this).hasClass('active')) {
        $('.choose-wiyana-plan-slider').slick('slickFilter', '.' + filter)
      }
    })
  }

  $('.left-btn-wrap .eezee_slick_filter').on('click', function () {
    $('.eezee-simcard').slick('slickUnfilter')
    var filter = $(this).data('filter')
    $('.right-btn-wrap .eezee_slick_filter').removeClass('active')
    $(this).toggleClass('active')
    console.log(filter)
    if ($(this).hasClass('active')) {
      $('.eezee-simcard').slick('slickFilter', '.' + filter)
    }
  })
  $('.right-btn-wrap .eezee_slick_filter').on('click', function () {
    $('.eezee-simcard').slick('slickUnfilter')
    var filter = $(this).data('filter')
    $('.left-btn-wrap .eezee_slick_filter').removeClass('active')
    $(this).toggleClass('active')
    console.log(filter)
    if ($(this).hasClass('active')) {
      $('.eezee-simcard').slick('slickFilter', '.' + filter)
    }
  })

  //Wiyana Hero - Slider
  if ($('.main-hero-slider').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.main-hero-slider').slick({
      arrows: false,
      infinite: false,
      autoplay: true,
      slidesToShow: 1,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Zain Dashboard Product - Slider
  if ($('.special-produt').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.special-produt').slick({
      arrows: true,
      slidesToShow: 4,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.3,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  if ($('.related_slider_new').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.related_slider_new').slick({
      arrows: true,
      slidesToShow: 4,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  if ($('.offering_slider_new').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.offering_slider_new').slick({
      arrows: true,
      slidesToShow: 3,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  if ($('.price_new').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.price_new').slick({
      arrows: true,
      slidesToShow: 3,
      rtl: dir_val,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  if ($('.saved_slider_new').length) {
    var dir_val = false
    if (document.getElementById('langs') != null) {
      dir_val = true
    }
    $('.saved_slider_new').slick({
      arrows: true,
      slidesToShow: 3,
      rtl: dir_val,
      infinite: false,
      dots: false,
      prevArrow:
        '<div class="btn prev"><i class="icon-arrow-pointing-to-right"></i></div>',
      nextArrow:
        '<div class="btn next"><i class="icon-arrow-pointing-to-right"></i></div>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2.1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1.1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  //Favorites - Slider
  if ($('.product_slider_new_new').length) {
    $('.product_slider_new_new').slick({
      arrows: true,
      slidesToShow: 4,
      infinite: false,
      dots: false,
      prevArrow:
        '<div class="btn prev"><i class="icon-arrow-pointing-to-right"></i></div>',
      nextArrow:
        '<div class="btn next"><i class="icon-arrow-pointing-to-right"></i></div>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          },
        },
      ],
    })
  }

  // Plans Hover Effact
  $('.plans-wrapper .slide').on(
    'mouseenter mouseleave touchstart touchend',
    function () {
      if ($(this).hasClass('active')) {
        // $(this).removeClass('active');
        // $('.plans-wrapper .slide').removeClass('hover-collapse');
      } else {
        $('.plans-wrapper .slide').addClass('hover-collapse')
        $('.plans-wrapper .slide').removeClass('active')
        $(this).addClass('active').removeClass('hover-collapse')
      }
    },
  )
  // $('.plans-wrapper .slide').hover(function () {
  //     if ($(this).hasClass('active')) {
  //         // $(this).removeClass('active');
  //         // $('.plans-wrapper .slide').removeClass('hover-collapse');
  //     } else {
  //         $('.plans-wrapper .slide').addClass('hover-collapse');
  //         $('.plans-wrapper .slide').removeClass('active');
  //         $(this).addClass('active').removeClass('hover-collapse');
  //     }
  // })

  initJsComponents()

  $(window).on('load resize', function () {
    // Calling init JS Function
    initJsComponents()
    filterOpenClose()
  })

  if ($('.product-thumbnail .product-image .fav').length > 0) {
    $('.product-thumbnail .product-image .fav').click(function () {
      $(this).toggleClass('active')
      if ($(this).hasClass('active')) {
        $(this).find('i').removeClass('icon-heart-feel-grey')
        $(this).find('i').addClass('icon-favorite-heart-button1')
      } else {
        $(this).find('i').addClass('icon-heart-feel-grey')
        $(this).find('i').removeClass('icon-favorite-heart-button1')
      }
    })
  }

  // On tab click change plus and minus icon
  $('#accordionExample .btn-link').on('click', function () {
    if ($(this).find('i').hasClass('icon-add-1')) {
      $('#accordionExample .btn-link i')
        .removeClass('icon-minus')
        .addClass('icon-add-1')
      $(this).find('i').removeClass('icon-add-1').addClass('icon-minus')
      $('.slick-slider').slick('refresh')
    } else {
      $(this).find('i').removeClass('icon-minus').addClass('icon-add-1')
    }
  })
  $('#accordionExample2 .btn-link').on('click', function () {
    if ($(this).find('i').hasClass('icon-add-1')) {
      $('#accordionExample2 .btn-link i')
        .removeClass('icon-minus')
        .addClass('icon-add-1')
      $(this).find('i').removeClass('icon-add-1').addClass('icon-minus')
      $('.slick-slider').slick('refresh')
    } else {
      $(this).find('i').removeClass('icon-minus').addClass('icon-add-1')
    }
  })
  $('#accordionExample3 .btn-link').on('click', function () {
    if ($(this).find('i').hasClass('icon-add-1')) {
      $('#accordionExample3 .btn-link i')
        .removeClass('icon-minus')
        .addClass('icon-add-1')
      $(this).find('i').removeClass('icon-add-1').addClass('icon-minus')
      $('.slick-slider').slick('refresh')
    } else {
      $(this).find('i').removeClass('icon-minus').addClass('icon-add-1')
    }
  })
  $('#accordionExample4 .btn-link').on('click', function () {
    if ($(this).find('i').hasClass('icon-add-1')) {
      $('#accordionExample4 .btn-link i')
        .removeClass('icon-minus')
        .addClass('icon-add-1')
      $(this).find('i').removeClass('icon-add-1').addClass('icon-minus')
      $('.slick-slider').slick('refresh')
    } else {
      $(this).find('i').removeClass('icon-minus').addClass('icon-add-1')
    }
  })
  $('#accordionExample5 .btn-link').on('click', function () {
    if ($(this).find('i').hasClass('icon-add-1')) {
      $('#accordionExample5 .btn-link i')
        .removeClass('icon-minus')
        .addClass('icon-add-1')
      $(this).find('i').removeClass('icon-add-1').addClass('icon-minus')
      $('.slick-slider').slick('refresh')
    } else {
      $(this).find('i').removeClass('icon-minus').addClass('icon-add-1')
    }
  })
  $('#accordionExample6 .btn-link').on('click', function () {
    if ($(this).find('i').hasClass('icon-add-1')) {
      $('#accordionExample6 .btn-link i')
        .removeClass('icon-minus')
        .addClass('icon-add-1')
      $(this).find('i').removeClass('icon-add-1').addClass('icon-minus')
      $('.slick-slider').slick('refresh')
    } else {
      $(this).find('i').removeClass('icon-minus').addClass('icon-add-1')
    }
  })

  $('.kw #wrapper .tabs-wrapper .nav-tabs.order-history-nav i').on(
    'click',
    function () {
      $('.kw #wrapper .tabs-wrapper .nav-tabs.order-history-nav').toggleClass(
        'active',
      )
    },
  )
  $('.kw #wrapper .tabs-wrapper .nav-tabs.order-history-nav a').click(
    function () {
      $('.kw #wrapper .tabs-wrapper .nav-tabs.order-history-nav').removeClass(
        'active',
      )
    },
  )

  // btn-group active
  $('.radio-wraper .btn input').on('click', function () {
    $(this).closest('.radio-wraper').find('.btn.active').removeClass('active')
    $(this).closest('.btn').addClass('active')
    var lableVal = $(this).val()
    $(this).closest('.radio-wraper').prev().find('.auto-lbl').html(lableVal)
  })

  // Megamenu toggle
  $('[data-target-menu]').on('click', function (e) {
    e.preventDefault()
    $('#ctm_country_popup').removeClass('show')
    var target = $(this).attr('data-target-menu')
    var do_close = $(this).attr('data-close-other')
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(target).removeClass('show')
      $('.bodyoverlay').removeClass('show')
    } else {
      console.log(do_close)
      if (do_close == 'true') {
        $('.main-mobile-menu').removeClass('show')
        $('.mobile-nav .mobile-menu-toggle > a i')
          .addClass('icon-hamburger-new')
          .removeClass(['icon-close', 'active'])
        var targets = $('.right-nav.right-nav-new > li > a.active')
        targets.each((index, element) => {
          var target_1 = $(element).attr('data-target-menu')
          // if (target == '#search') {
          //   $('.right-nav.right-nav-new > li > a.active > i').addClass('icon-search-new').removeClass('icon-cancel-1')
          // }
          $(element).removeClass('active')
          $(target_1).removeClass('show')
        })
      }
      $(this).addClass('active')
      $(target).addClass('show')
      $('.bodyoverlay').addClass('show')
    }
  })

  // Outside click close
  $('.bodyoverlay').on('click', function () {
    // setTimeout(function () {
    //   $('.bodyoverlay.overlay_mob').removeClass('overlay_mob');
    // }, 1000);
    $(
      '.cart-summary-dropdown, .search-autocomplete, .main-mobile-menu',
    ).removeClass('show')
    $('.bodyoverlay').removeClass('show')
    $('.order-tracking-popup').removeClass('show')
    $('.term-and-condition-modal').removeAttr('style')
    $('[data-target-menu]').removeClass('active')
    $('a[data-target-menu="#search"]')
      .find('i')
      .addClass('icon-magnifying-glass')
      .removeClass('icon-cancel-1')
    $('.mobile-nav .mobile-menu-toggle>a')
      .find('i')
      .addClass('icon-hamburger-new')
      .removeClass('icon-close')
    $(
      '.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megamenu-level-2',
    ).removeClass('slide-left')
    $(
      '.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megainnermenu-level1',
    ).removeClass('slide-left')
    $('#form_pp').removeClass('show')
    $('#register_pp').removeClass('show')

    $('.mobile-nav .search-dropdown a').removeClass('open')
    $(
      '.right-nav a[data-target-menu="#search"], .right-nav a[data-target-menu="#search2"]',
    ).removeClass('open')
    $('.ctm_search_bar').removeClass('show')
    $('.ctm_search_bar').slideUp(function () {
      $('.popular_products_slider').slick('destroy')
    })
  })

  $('#form_pp .customer-box').on('click', function () {
    $('#form_pp').removeClass('show')
    $('.bodyoverlay').removeClass('show')
    $('.profile-btn a').removeClass('active')
  })

  $('#register_pp .customer-box').on('click', function () {
    $('#register_pp').removeClass('show')
    $('.bodyoverlay').removeClass('show')
    $('.profile-btn a').removeClass('active')
  })

  $('#form_pp .btn-pc-4').on('click', function () {
    $(
      '.cart-summary-dropdown, .search-autocomplete, .main-mobile-menu',
    ).removeClass('show')
    $('#form_pp').removeClass('show')
  })

  $(
    '.right-nav a[data-target-menu="#search"], .right-nav a[data-target-menu="#search2"]',
  ).on('click', function () {
    // Changeing icon on click
    var crossIcon = $(this)
    crossIcon.toggleClass('open')
    if (crossIcon.hasClass('open')) {
      // crossIcon.removeClass('icon-magnifying-glass').removeClass('icon-search-new').addClass('icon-cancel-1')
      $('.ctm_search_bar').addClass('show')
      $('.ctm_search_bar').slideDown()
      $('.bodyoverlay').addClass('show')

      console.log('hello')
      if ($('.popular_products_slider').length) {
        var dir_val = false
        if (document.getElementById('langs') != null) {
          dir_val = true
        }
        $('.popular_products_slider').slick({
          infinite: false,
          autoplay: false,
          draggable: true,
          centerPadding: '0px',
          slidesToShow: 6,
          slidesToScroll: 3,
          centerMode: false,
          rtl: dir_val,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                arrows: false,
                slidesToShow: 4,
                centerMode: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 3,
                draggable: true,
                centerMode: false,
                dots: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
                draggable: true,
                dots: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 2.7,
                slidesToScroll: 3,
                draggable: true,
                dots: true,
              },
            },
          ],
        })
      }
    } else {
      $('.bodyoverlay').removeClass('show')
      // crossIcon.addClass('icon-magnifying-glass').removeClass('icon-cancel-1')
      $('.ctm_search_bar').removeClass('show')
      $('.ctm_search_bar').slideUp(function () {
        $('.popular_products_slider').slick('destroy')
      })
    }
  })

  $('.mobile-nav .search-dropdown a').on('click', function () {
    $('body').addClass('overflow-hidden-new-mob')
    $('#ctm_country_popup').removeClass('show')
    // Changeing icon on click
    var crossIcon = $(this)
    crossIcon.toggleClass('open')
    if (crossIcon.hasClass('open')) {
      $('#profiledropdownmenu').removeClass('show')
      $('#profiledropdownmenu1').removeClass('show')
      $('.main-mobile-menu').removeClass('show')
      $('.mobile-nav .mobile-menu-toggle>a i')
        .addClass('icon-hamburger-new')
        .removeClass('icon-close')
      $('.ctm_search_bar').addClass('show')
      // $('.ctm_search_bar').slideDown()

      if ($('.popular_products_slider').length) {
        var dir_val = false
        if (document.getElementById('langs') != null) {
          dir_val = true
        }
        $('.popular_products_slider').slick({
          infinite: false,
          autoplay: false,
          draggable: true,
          centerPadding: '0px',
          slidesToShow: 6,
          slidesToScroll: 3,
          centerMode: false,
          rtl: dir_val,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 3,
                centerMode: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 3,
                draggable: true,
                centerMode: false,
                dots: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
                draggable: true,
                dots: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 3,
                draggable: true,
                dots: true,
              },
            },
          ],
        })
      }
    } else {
      $('.ctm_search_bar').removeClass('show')
      $('.ctm_search_bar').slideUp(function () {
        setTimeout(() => {
          $('.popular_products_slider').slick('destroy')
        }, 700)
      })
    }
  })
  $('.csb_close').click(function () {
    $('body').removeClass('overflow-hidden-new-mob')

    $('.mobile-nav .search-dropdown a').toggleClass('open')
    $(
      '.right-nav a[data-target-menu="#search"], .right-nav a[data-target-menu="#search2"]',
    ).toggleClass('open')
    $('.bodyoverlay').removeClass('show')
    $('.ctm_search_bar').removeClass('show')
    $('.ctm_search_bar').slideUp(function () {
      setTimeout(() => {
        $('.popular_products_slider').slick('destroy')
      }, 700)
    })
  })

  $('.mobile-nav .mobile-menu-toggle>a').on('click', function () {
    // Changeing icon on click
    $('#profiledropdownmenu').removeClass('show')
    $('#profiledropdownmenu1').removeClass('show')
    $('.profile-btn .profile-image').removeClass('active')
    var crossIcon = $(this).find('i')
    // if (crossIcon.hasClass('icon-hamburger-new')) {
    //   crossIcon.removeClass('icon-hamburger-new').addClass('icon-close')
    // } else {
    //   crossIcon.addClass('icon-hamburger-new').removeClass('icon-close')
    //   $(
    //     '.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megamenu-level-2',
    //   ).removeClass('slide-left')
    //   $(
    //     '.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megainnermenu-level1',
    //   ).removeClass('slide-left')
    // }
    if ($('.main-mobile-menu').hasClass('show')) {
      crossIcon.removeClass('icon-hamburger-new').addClass('icon-close')
      $('.mobile-bottom-links').addClass('mobile-bottom-menu')
      // $('.bodyoverlay').addClass('overlay_mob');
    } else {
      $('.mobile-bottom-links').removeClass('mobile-bottom-menu')
      crossIcon.addClass('icon-hamburger-new').removeClass('icon-close')
      $(
        '.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megamenu-level-2',
      ).removeClass('slide-left')
      $(
        '.mobile-nav .mobile-megamenu li.hasSubNav .mobile-megainnermenu-level1',
      ).removeClass('slide-left')
      // setTimeout(function () {
      //   $('.bodyoverlay.overlay_mob').removeClass('overlay_mob');
      // }, 1000);
    }
  })

  // Defining the local dataset
  var devices = [
    'iPhone',
    'iPhone 3G',
    'iPhone 3GS',
    'iPhone 4',
    'iPhone 4S',
    'iPhone 5',
    'iPhone 5C',
    'iPhone 5S',
    'iPhone 6 / 6 Plus',
    'iPhone 6S / 6S Plus',
    'iPhone SE',
    'iPhone 7 / 7 Plus',
    'iPhone 8 / 8 Plus',
    'iPhone X',
    'iPhone XS / XS Max',
    'iPhone XR',
    'iPhone 11',
    'iPhone 11 Pro/11 Pro Max',
  ]
  var devices_ar = [
    'آي فون',
    'اي فون الجيل الثالث 3G',
    'اي فون 3GS',
    'ايفون ٤',
    'ايفون ٤ إس',
    'ايفون ٥',
    'ايفون 5C',
    'ايفون ٥ إس',
    'ايفون ٦ / ٦ بلس',
    'ايفون ٦ إس / ٦ إس بلس',
    'اي فون SE',
    'ايفون ٧ / ٧ بلس',
    'ايفون 8/8 بلس',
    'ايفون اكس',
    'آيفون إكس إس / إكس إس ماكس',
    'آيفون إكس آر',
    'ايفون 11',
    'ايفون 11 برو / 11 برو ماكس',
  ]

  // Constructing the suggestion engine
  var devices = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: devices,
  })
  var devices_ar = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: devices_ar,
  })

  // Initializing the typeahead
  $('.typeahead').typeahead(
    {
      hint: true,
      highlight: true,
      /* Enable substring highlighting */
      minLength: 1 /* Specify minimum characters required for showing result */,
    },
    {
      name: 'devices',
      source: $('html').attr('lang') === 'ar' ? devices_ar : devices,
      templates: {
        header:
          $('html').attr('lang') === 'ar'
            ? '<h3 class="search-header">منتجات</h3>'
            : '<h3 class="search-header">Products</h3>',
      },
    },
  )
  $('.typeahead').on('input', function () {
    var inputLength = $(this).val().length
    console.log(inputLength)
    if (inputLength) {
      if ($('.popular_products').length) {
        $('.popular_products').addClass('d-none')
      }
      if ($('.popular_searches').length) {
        $('.popular_searches').addClass('d-none')
      }
      $('.popular_products_slider').slick('destroy')
    } else {
      if ($('.popular_products').length) {
        $('.popular_products').removeClass('d-none')
      }
      if ($('.popular_searches').length) {
        $('.popular_searches').removeClass('d-none')
      }
      if ($('.popular_products_slider').length) {
        var dir_val = false
        if (document.getElementById('langs') != null) {
          dir_val = true
        }
        $('.popular_products_slider').slick({
          infinite: false,
          autoplay: false,
          draggable: true,
          centerPadding: '0px',
          slidesToShow: 6,
          slidesToScroll: 3,
          centerMode: false,
          rtl: dir_val,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 3,
                centerMode: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                slidesToShow: 4,
                draggable: true,
                slidesToScroll: 3,
                centerMode: false,
                dots: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 3,
                draggable: true,
                dots: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToScroll: 3,
                centerPadding: '0px',
                slidesToShow: 2.7,
                draggable: true,
                dots: true,
              },
            },
          ],
        })
      }
    }
  })

  // custom-number-input
  if ($('.custom-number-input').length > 0) {
    $('.custom-number-input').on('click', '.btn', function () {
      var current_target = this
      var cur_wrap = $(current_target).closest('.custom-number-input')
      var curr_input = cur_wrap.find('input')
      var curr_input_val = parseInt(curr_input.val())

      var max_val = curr_input.attr('maxlength')
      var min_val = curr_input.attr('minlength')

      if (this.classList.contains('btn-plus')) {
        if (curr_input_val < max_val) {
          curr_input_val++
          $(curr_input).val(curr_input_val++)
        }
      } else if (this.classList.contains('btn-minus')) {
        if (curr_input_val > min_val) {
          curr_input_val--
          $(curr_input).val(curr_input_val)
        }
      }
    })
  }

  // no-commitment
  $('.pay-options').on('click', function () {
    if ($(this).find('#nc').closest('.custom-radio').hasClass('active')) {
      $('.no_commitment-sect').show()
    } else {
      $('.no_commitment-sect').hide()
    }
  })

  $('.icon-add-1').on('click', function () {
    $(this).parents('.colunm-wrapper').find('.footer-links').toggleClass('open')
  })

  $('.anchor_footer_open').on('click', function () {
    $(this).parents('.colunm-wrapper').find('.footer-links').toggleClass('open')
  })

  $('.filter-option-group .btn-reset').on('click', function () {
    //$(this).parents('.left-content-area').toggleClass('open');
  })
  $(
    '.filters-button-row .close-button-x, .filters-results-row .filter-results-button',
  ).on('click', function () {
    //$('.left-content-area').toggleClass('open');
    //$('.filter-results-tags-row').toggleClass('open');
    //$('.filters-button-control-row').toggleClass('open');
    // $('.filters-results-row-expand').toggleClass('open');
  })

  $('.filters-results-row-expand.filter-results-button').on(
    'click',
    function () {
      //   $(this).parents('filters-results-row-expand').toggleClass('open');
    },
  )
  $('.filters-results-row.filter-results-button').on('click', function () {
    //  $(this).parents('filters-results-row').toggleClass('open');
  })

  function filterOpenClose() {
    if (
      $('.left-content-area').length &&
      $('.left-content-area').hasClass('open')
    ) {
      $('.left-content-area').css({
        width: '',
        'margin-left': '',
        'margin-right': '',
        'padding-left': '',
        'padding-right': '',
        'max-width': '',
        position: '',
        'z-index': '',
        top: '',
      })
      winWidth = $(window).width()
      leftContentWidth = $('.left-content-area').outerWidth()
      space = (winWidth - leftContentWidth) / 2
      topAlign = $('.filters-results-row.filter-expand').outerHeight()
      $('.left-content-area').css({
        width: winWidth,
        'margin-left': space * -1,
        'margin-right': space * -1,
        'padding-left': space,
        'padding-right': space,
        'max-width': 'none',
        position: 'absolute !important',
        'z-index': '9',
        top: topAlign,
      })
    } else if ($('.left-content-area').length) {
      $('.left-content-area').css({
        width: '',
        'margin-left': '',
        'margin-right': '',
        'padding-left': '',
        'padding-right': '',
        'max-width': '',
        position: '',
        'z-index': '',
        top: '',
      })
    }
    //debugger;
    if (
      $('.filters-results-row').length &&
      $('.filters-results-row').hasClass('filter-expand')
    ) {
      $('.filters-results-row').css({
        width: '',
        'margin-left': '',
        'margin-right': '',
        'padding-left': '',
        'padding-right': '',
        'max-width': '',
        position: '',
        'z-index': '',
        height: '',
      })
      winWidthF = $(window).width()
      leftContentWidthF = $('.filters-results-row').outerWidth()
      spaceF = (winWidthF - leftContentWidthF) / 2
      $('.filters-results-row').css({
        width: winWidth,
        'margin-left': spaceF * -1,
        'margin-right': spaceF * -1,
        'padding-left': space,
        'padding-right': space,
        'max-width': 'none',
        position: 'absolute !important',
        'z-index': '9',
        height: topAlign,
      })
    } else if ($('.filters-results-row').length) {
      $('.filters-results-row').css({
        width: '',
        'margin-left': '',
        'margin-right': '',
        'padding-left': '',
        'padding-right': '',
        'max-width': '',
        position: '',
        'z-index': '',
        height: '',
      })
    }
  }

  $(
    '.filters-results-row .filter-results-button, .filters-results-row .buttons-container .save-link-button, .filter-option-group .btn-save',
  ).on('click', function (e) {
    e.preventDefault()
    $('.filters-results-row').toggleClass('filter-expand')
    $('.left-content-area').toggleClass('open')
    $('.filter-results-tags-row').toggleClass('open')
    filterOpenClose()
  })
  $(
    '.filters-results-row .buttons-container .reset-link, .filter-option-group .btn-reset',
  ).on('click', function (e) {
    e.preventDefault()
    $('.filters .filter-option-group input.checkbox').prop('checked', false)
  })

  $('.fav-comp .btn').on('click', function () {
    $(this).toggleClass('active')
  })

  // expand and collaps detail page plans carousal content
  var i = 0
  $('.plan-detail-wrapper .view-more').on('click', function (e) {
    e.preventDefault()
    // 30nov
    var target = $(this).closest('.plan-detail-wrapper').find('.show-more')
    if ($(this).hasClass('english')) {
      var x = $(this)
      if (x.html() === '+ View More') {
        $(this).html('- View Less')
      } else {
        $(this).html('+ View More')
      }
    }
    if ($(this).hasClass('arabic')) {
      var x = $(this)
      if (x.html() === '- مشاهدة أقل') {
        $(this).html('+ مشاهدة المزيد')
      } else {
        $(this).html('- مشاهدة أقل')
      }
    }
    target.slideToggle('slow')
    if (target.hasClass('expand')) {
    }
  })

  // Open and Close Mobile Second level Menu
  if ($('.mobile-megamenu li .mobile-megamenu-level-2').length) {
    $('.mobile-megamenu li .mobile-megamenu-level-2')
      .closest('li')
      .addClass('hasSubNav')
  }
  $(
    '.mobile-megamenu li.hasSubNav a, .mobile-megamenu li.hasSubNav i.icon-right-arrow',
  ).on('click', function (e) {
    e.preventDefault()
    // console.log('meow')
    if (!$(this).hasClass('quick-pay-link')) {
      console.log('wow')
      $('.mobile-bottom-links').removeClass('mobile-bottom-menu')
    }
    // console.log()
    if ($(this).closest('li.hasSubNav').hasClass('with-lvl-1')) {
      $(this)
        .closest('li.hasSubNav')
        .find('.mobile-megainnermenu-level1')
        .addClass('slide-left')
    } else {
      $(this)
        .closest('li.hasSubNav')
        .find('.mobile-megamenu-level-2')
        .addClass('slide-left')
    }
  })
  $(
    '.mobile-megamenu-level-2 .back-link, .mobile-megamenu-level-2 p.heading',
  ).on('click', function (e) {
    e.preventDefault()
    $(this).closest('.mobile-megamenu-level-2').removeClass('slide-left')
  })
  $('.mobile-megainnermenu-level1 .backtomainmenu').on('click', function (e) {
    e.preventDefault()
    $(this).closest('.mobile-megainnermenu-level1').removeClass('slide-left')
  })
  $('.bact-to-main').click(function () {
    console.log('neow')
    $('.mobile-bottom-links').addClass('mobile-bottom-menu')
  })

  // Mobile Second level Accordian open and close
  $('.accordian-menu>li>a').on('click', function (e) {
    e.preventDefault()
    var target = $(this).closest('li').find('.expandable-links')
    if (target.hasClass('expand')) {
      target.removeClass('expand')
      $(this).find('i').removeClass('icon-rotate-180')
    } else {
      $('.accordian-menu>li .expandable-links').removeClass('expand')
      $('.accordian-menu>li a i.icon-rotate-180').removeClass('icon-rotate-180')
      $(this).find('i').addClass('icon-rotate-180')
      target.addClass('expand')
    }
  })

  $('.btn.add-plan').on('click', function (e) {
    var new_position = $('.device-only-tabs').offset()
    $('html, body').stop().animate(
      {
        scrollTop: new_position.top,
      },
      500,
    )
    e.preventDefault()
  })
})

// all JS components init inside this Function
function initJsComponents() {
  // Customs select Init

  if ($('.custom-select').length) {
    function productStyles(selection) {
      if (!selection.id) {
        return selection.text
      }
      var thumb = $(selection.element).data('img')
      if (!thumb) {
        return selection.text
      } else {
        var $selection = $(
          '<img width="16" src="' +
            thumb +
            '" alt=""><span class="img-changer-text">' +
            $(selection.element).text() +
            '</span>',
        )
        return $selection
      }
    }

    $('.custom-select').select2({
      minimumResultsForSearch: -1,
    })
  }

  if ($('.custom-select-main-sum').length) {
    $('.custom-select-main-sum').select2({
      minimumResultsForSearch: -1,
    })
  }

  if ($('.sub-header .custom-select').length) {
    $('.sub-header .custom-select').select2({
      minimumResultsForSearch: -1,
      dropdownAutoWidth: true,
      width: 'auto',
      templateResult: productStyles,
      templateSelection: productStyles,
    })
  }

  if ($('.custom-scroll').length) {
    $('.custom-scroll').mCustomScrollbar({
      theme: 'dark-3',
      axis: 'y',
      autoHideScrollbar: true,
      alwaysShowScrollbar: 1,
    })
  }

  // Set Height of left content for filter section (Profuct Listing Page)
  // add this after-portlat-load function() in liferay
  filterHeight = $('.filters').height()
  $('.filters').closest('[class*=layout-]').css('min-height', filterHeight)

  // set recomanded thumbneil height
  var thumbHeight = $(
    '.product-thumbnail:not(.product-thumbnail.recomanded)',
  ).height()
  $('.product-thumbnail.recomanded .setbg img').css(
    'min-height',
    thumbHeight + 5,
  )

  var dropdownmenu = $('.right-nav #cartdropdownmenu')
  // Add Content in mobile
  if (window.innerWidth < 1200) {
    $('.mobile-nav .cart-dropdown').append(dropdownmenu)
  }
}

// Textarea Message box
$(document).ready(function () {
  $('#iphoneXs').click(function (event) {
    var btn = this,
      toStatus = btn.checked
    //loop through each checkbox
    $('.gift-1').fadeToggle()
  })
  $('#smarthomecamera').click(function (event) {
    var btn = this,
      toStatus = btn.checked
    //loop through each checkbox
    $('.gift-2').fadeToggle()
  })
})

$(document).ready(function () {
  $('.sizes_in a').attr('href', 'javascript:void(0)')
  $('.sizes_in a:first-child').click(function (event) {
    $(this).addClass('active')
    $('.sizes_in a:nth-child(2)').removeClass('active')
    $('.sizes_in a:nth-child(3)').removeClass('active')
  })
  $('.sizes_in a:nth-child(2)').click(function (event) {
    $(this).addClass('active')
    $('.sizes_in a:nth-child(1)').removeClass('active')
    $('.sizes_in a:nth-child(3)').removeClass('active')
  })
  $('.sizes_in a:nth-child(3)').click(function (event) {
    $(this).addClass('active')
    $('.sizes_in a:nth-child(1)').removeClass('active')
    $('.sizes_in a:nth-child(2)').removeClass('active')
  })

  $('.memory_in a').attr('href', 'javascript:void(0)')
  $('.memory_in a:first-child').click(function (event) {
    $(this).addClass('active')
    $('.memory_in a:nth-child(2)').removeClass('active')
    $('.memory_in a:nth-child(3)').removeClass('active')
    $('.memory_in a:nth-child(4)').removeClass('active')
  })
  $('.memory_in a:nth-child(2)').click(function (event) {
    $(this).addClass('active')
    $('.memory_in a:nth-child(1)').removeClass('active')
    $('.memory_in a:nth-child(3)').removeClass('active')
    $('.memory_in a:nth-child(4)').removeClass('active')
  })
  $('.memory_in a:nth-child(3)').click(function (event) {
    $(this).addClass('active')
    $('.memory_in a:nth-child(1)').removeClass('active')
    $('.memory_in a:nth-child(2)').removeClass('active')
    $('.memory_in a:nth-child(4)').removeClass('active')
  })
  $('.memory_in a:nth-child(4)').click(function (event) {
    $(this).addClass('active')
    $('.memory_in a:nth-child(1)').removeClass('active')
    $('.memory_in a:nth-child(2)').removeClass('active')
    $('.memory_in a:nth-child(3)').removeClass('active')
  })
})

$(document).ready(function () {
  $('.colur_in a').attr('href', 'javascript:void(0)')
  $('.colur_in a:first-child').click(function (event) {
    $(this).addClass('active')
    $('.colur_in a:nth-child(2)').removeClass('active')
    $('.colur_in a:nth-child(3)').removeClass('active')
    $('.colur_in a:nth-child(4)').removeClass('active')
    $('.colur_in a:nth-child(5)').removeClass('active')
  })
  $('.colur_in a:nth-child(2)').click(function (event) {
    $(this).addClass('active')
    $('.colur_in a:nth-child(1)').removeClass('active')
    $('.colur_in a:nth-child(3)').removeClass('active')
    $('.colur_in a:nth-child(4)').removeClass('active')
    $('.colur_in a:nth-child(5)').removeClass('active')
  })
  $('.colur_in a:nth-child(3)').click(function (event) {
    $(this).addClass('active')
    $('.colur_in a:nth-child(1)').removeClass('active')
    $('.colur_in a:nth-child(2)').removeClass('active')
    $('.colur_in a:nth-child(4)').removeClass('active')
    $('.colur_in a:nth-child(5)').removeClass('active')
  })
  $('.colur_in a:nth-child(4)').click(function (event) {
    $(this).addClass('active')
    $('.colur_in a:nth-child(1)').removeClass('active')
    $('.colur_in a:nth-child(2)').removeClass('active')
    $('.colur_in a:nth-child(3)').removeClass('active')
    $('.colur_in a:nth-child(5)').removeClass('active')
  })
  $('.colur_in a:nth-child(5)').click(function (event) {
    $(this).addClass('active')
    $('.colur_in a:nth-child(1)').removeClass('active')
    $('.colur_in a:nth-child(2)').removeClass('active')
    $('.colur_in a:nth-child(3)').removeClass('active')
    $('.colur_in a:nth-child(4)').removeClass('active')
  })

  /* Added for extra page cartbox */

  $('.product_slider_new').on(
    'click',
    '.extra-cart-box .icon-exclamatory',
    function () {
      if ($(this).parents('.extra-cart-box').hasClass('show')) {
        $(this).parents('.extra-cart-box').removeClass('show')
      } else {
        $('.kw #wrapper .product-thumbnail.extra-cart-box').removeClass('show')
        $(this).parents('.extra-cart-box').addClass('show')
      }
    },
  )

  $(document).on('click', function (event) {
    var $trigger = $('.extra-cart-box')
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $('.kw #wrapper .product-thumbnail.extra-cart-box').removeClass('show')
    }
  })

  /*Added for Form Validation*/

  $(".form-validation input[type='text']").change(function (e) {
    if (!$(this).val() == '') {
      $(this).parents('.form-group').addClass('data-valid')
      $(this).parents('.form-group').removeClass('not-valid')
    } else {
      $(this).parents('.form-group').removeClass('data-valid')
      $(this).parents('.form-group').addClass('not-valid')
    }
  })

  $(".form-validation input[type='email']").change(function (e) {
    email = $(this).val()
    function validateEmail(emailaddress) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
      if (!emailReg.test(emailaddress)) {
        $(".form-validation input[type='email']")
          .parents('.form-group')
          .addClass('data-in-valid')
        $(".form-validation input[type='email']")
          .parents('.form-group')
          .removeClass('data-valid')
      } else {
        $(".form-validation input[type='email']")
          .parents('.form-group')
          .removeClass('data-in-valid')
        $(".form-validation input[type='email']")
          .parents('.form-group')
          .addClass('data-valid')
      }
    }
    validateEmail(email)
  })
})

$(document).ready(function () {
  $('.product_slider_new_new li:first-child').click(function (event) {
    $(this).addClass('active')
    $('.product_slider_new_new li:nth-child(2)').removeClass('active')
    $('.product_slider_new_new li:nth-child(3)').removeClass('active')
    $('.product_slider_new_new li:nth-child(4)').removeClass('active')
    $('.product_slider_new_new li:nth-child(5)').removeClass('active')
  })
  $('.product_slider_new_new li:nth-child(2)').click(function (event) {
    $(this).addClass('active')
    $('.product_slider_new_new li:nth-child(1)').removeClass('active')
    $('.product_slider_new_new li:nth-child(3)').removeClass('active')
    $('.product_slider_new_new li:nth-child(4)').removeClass('active')
    $('.product_slider_new_new li:nth-child(5)').removeClass('active')
  })
  $('.product_slider_new_new li:nth-child(3)').click(function (event) {
    $(this).addClass('active')
    $('.product_slider_new_new li:nth-child(1)').removeClass('active')
    $('.product_slider_new_new li:nth-child(2)').removeClass('active')
    $('.product_slider_new_new li:nth-child(4)').removeClass('active')
    $('.product_slider_new_new li:nth-child(5)').removeClass('active')
  })
  $('.product_slider_new_new li:nth-child(4)').click(function (event) {
    $(this).addClass('active')
    $('.product_slider_new_new li:nth-child(1)').removeClass('active')
    $('.product_slider_new_new li:nth-child(2)').removeClass('active')
    $('.product_slider_new_new li:nth-child(3)').removeClass('active')
    $('.product_slider_new_new li:nth-child(5)').removeClass('active')
  })
  $('.product_slider_new_new li:nth-child(5)').click(function (event) {
    $(this).addClass('active')
    $('.product_slider_new_new li:nth-child(1)').removeClass('active')
    $('.product_slider_new_new li:nth-child(2)').removeClass('active')
    $('.product_slider_new_new li:nth-child(3)').removeClass('active')
    $('.product_slider_new_new li:nth-child(4)').removeClass('active')
  })

  // Added for plan listing addon-section

  var getAddonListCount = $('.addon-section ul li').length
  var getAddonEachListH = $('.addon-section ul li').height() + 20
  //var getAddonAllListH =  getAddonEachListH*getAddonListCount;

  /*Display List Items*/
  $('.addon-section ul').height(getAddonEachListH * 3)

  $('.addon-section .view-less').hide()

  $('.addon-section .addon-section-label').click(function (e) {
    getAddonAllListH = $(this)
      .parents('.plan-list')
      .find('.addon-section')
      .children('ul')
      .find('li').length
    getAddonAllListH = getAddonEachListH * getAddonAllListH
    $(this)
      .parents('.plan-list')
      .find('.addon-section ul')
      .animate({ height: getAddonAllListH }, 'slow')
    $(this).parents('.plan-list').find('.view-less').show()
  })

  $('.addon-section .view-less').click(function (e) {
    $(this)
      .parents('.plan-list')
      .find('.addon-section ul')
      .animate({ height: getAddonEachListH * 3 }, 'slow')
    $(this).hide()
  })

  $('.addon-section input').each(function (index, element) {
    $(this).prop('checked', false)
  })

  $('.addon-section input').click(function (e) {
    var getPriceCount = $(this)
      .parents('.plan-list')
      .find('.addon-count')
      .text()

    if ($(this).is(':checked')) {
      getPriceCountT = parseInt(getPriceCount) + parseInt($(this).val())
      $(this).parents('.plan-list').find('.addon-count').text(getPriceCountT)
    } else {
      getPriceCountT = parseInt(getPriceCount) - parseInt($(this).val())
      $(this).parents('.plan-list').find('.addon-count').text(getPriceCountT)
    }
  })

  $('.tracking-button button').click(function (e) {
    $('.order-tracking-popup,.bodyoverlay').addClass('show')
  })

  $('.close-tracking').click(function (e) {
    $('.order-tracking-popup,.bodyoverlay,.bodyoverlay-popups').removeClass(
      'show',
    )
  })
  $('.close-tracking').click(function (e) {
    $('.term-and-condition-modal').removeAttr('style')
  })

  $('.close-popup-small').click(function (e) {
    $('.order-tracking-popup,.bodyoverlay, .bodyoverlay-popups').removeClass(
      'show',
    )
  })

  $('.kw #wrapper .profie-setting-section .btn').click(function (e) {
    $(this).toggleClass('active')
  })

  $('.profile-setting-slider').each(function (index, element) {
    $(this).slick({
      arrows: true,
      slidesToShow: 1,
      infinite: false,
      dots: true,
      prevArrow:
        '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
      nextArrow:
        '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 460.98,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    })
  })
})

$(function () {
  $('.product_slider_new_new.sport-slider').addClass('show')
  $('.product_slider_new_new.yellow-slider').removeClass('show')
  $('.product_slider_new_new.green-slider').removeClass('show')
  $('.product_slider_new_new.blue-slider').removeClass('show')
  $('.product_slider_new_new.orange-slider').removeClass('show')
  $('.custom-select.select2-hidden-accessible').change(function () {
    if ($(this).val() == 'sport') {
      $('.product_slider_new_new.sport-slider').addClass('show')
      $('.product_slider_new_new.yellow-slider').removeClass('show')
      $('.product_slider_new_new.green-slider').removeClass('show')
      $('.product_slider_new_new.blue-slider').removeClass('show')
      $('.product_slider_new_new.orange-slider').removeClass('show')
    } else if ($(this).val() == 'yellow') {
      $('.product_slider_new_new.sport-slider').removeClass('show')
      $('.product_slider_new_new.yellow-slider').addClass('show')
      $('.product_slider_new_new.green-slider').removeClass('show')
      $('.product_slider_new_new.blue-slider').removeClass('show')
      $('.product_slider_new_new.orange-slider').removeClass('show')
    } else if ($(this).val() == 'green') {
      $('.product_slider_new_new.sport-slider').removeClass('show')
      $('.product_slider_new_new.yellow-slider').removeClass('show')
      $('.product_slider_new_new.green-slider').addClass('show')
      $('.product_slider_new_new.blue-slider').removeClass('show')
      $('.product_slider_new_new.orange-slider').removeClass('show')
    } else if ($(this).val() == 'blue') {
      $('.product_slider_new_new.sport-slider').removeClass('show')
      $('.product_slider_new_new.yellow-slider').removeClass('show')
      $('.product_slider_new_new.green-slider').removeClass('show')
      $('.product_slider_new_new.blue-slider').addClass('show')
      $('.product_slider_new_new.orange-slider').removeClass('show')
    } else if ($(this).val() == 'orange') {
      $('.product_slider_new_new.sport-slider').removeClass('show')
      $('.product_slider_new_new.yellow-slider').removeClass('show')
      $('.product_slider_new_new.green-slider').removeClass('show')
      $('.product_slider_new_new.blue-slider').removeClass('show')
      $('.product_slider_new_new.orange-slider').addClass('show')
    }
  })

  $('.unit-type').change(function () {
    console.log($(this).val())
    if ($(this).val() == 'House') {
      document.getElementById('avenue-label').innerHTML = 'House'
    } else if ($(this).val() == 'Apartment') {
      document.getElementById('avenue-label').innerHTML = 'Apartment'
    } else if ($(this).val() == 'building') {
      document.getElementById('avenue-label').innerHTML = 'Building'
    }
  })
})

/*Added for Compair Products*/

$(function () {
  $('.select-compare-device select').change(function (e) {
    $(this)
      .parents('.select-compare-device-section')
      .find('img')
      .attr('src', 'images/' + $(this).val() + '.png')

    getcol = $(this).parents('.select-compare-device-section').attr('data-id')
    getSelction = $(this).val()
    getSelctionText = $(this)
      .parents('.select-compare-device-section')
      .find('select option:selected')
      .text()

    if (getcol == 'compare_content_2') {
      $('.compare_content_2').addClass('active')
      $('.compare_content_2 h4').text(getSelctionText)

      if (getSelction == 'no-device') {
        $('.compare_content_2').removeClass('active')
      }
    }

    if (getcol == 'compare_content_3') {
      $('.compare_content_3').addClass('active')
      $('.compare_content_3 h4').text(getSelctionText)
      if (getSelction == 'no-device') {
        $('.compare_content_3').removeClass('active')
      }
    }
  })
})

/*var $window = $(window),
  $header = $('.header'),
  $section_checkout = $('.section-checkout_progressbar'),
  navTop = $header.offset().top;
  checkoutTop = $section_checkout.offset().top;

$window.scroll(function() {
  $header.toggleClass('sticky', $window.scrollTop() > navTop);
  $section_checkout.toggleClass('sticky', $window.scrollTop() > checkoutTop);
});*/

$(function () {
  $('.btn-stripe').click(function (e) {
    $('.cart-mobile').fadeToggle()
  })
  $('.cart-mobile .card-header').click(function (e) {
    $('.cart-mobile').fadeToggle()
  })
  $('.remove-stripe').click(function (e) {
    $('.cart-mobile').fadeToggle()
  })
})

$(function () {
  $('.saved-addresses #address1').click(function (event) {
    $('.saved-addresses #address2').removeClass('active')
    $('.saved-addresses #address3').removeClass('active')
    $('.saved-addresses #address4').removeClass('active')
    $('.saved-addresses #address5').removeClass('active')
    $('.saved-addresses #address6').removeClass('active')
    $('.saved-addresses #address7').removeClass('active')
    $('.saved-addresses #address8').removeClass('active')
    $(this).toggleClass('active')
    $('#select-gov').val('1').trigger('change')
    //$('#safat').val('1').trigger('change');
    //$('#unittype').val('1').trigger('change');

    if (document.getElementById('lang_val') != null) {
      if (document.getElementById('lang_val').value == 'arabic') {
        //  document.getElementById('avenue-label').innerHTML = "منزل";
        $('.main_input').attr('value', 'عنوان مكتب هديل')
        $('#blockport').attr('value', 'منع 1')
        $('#street-address').attr('value', 'شارع 1')
      } else {
        //  document.getElementById('avenue-label').innerHTML = "House";
        $('.main_input').attr('value', "Hadeel's office address")
        $('#blockport').attr('value', 'Block 1')
        $('#street-address').attr('value', 'Street 1')
      }
    } else {
      //  document.getElementById('avenue-label').innerHTML = "House";
    }
  })
  $('.saved-addresses #address2').click(function (event) {
    $('.saved-addresses #address1').removeClass('active')
    $('.saved-addresses #address3').removeClass('active')
    $('.saved-addresses #address4').removeClass('active')
    $('.saved-addresses #address5').removeClass('active')
    $('.saved-addresses #address6').removeClass('active')
    $('.saved-addresses #address7').removeClass('active')
    $('.saved-addresses #address8').removeClass('active')
    $(this).toggleClass('active')
    $('#select-gov').val('2').trigger('change')
    // $('#safat').val('2').trigger('change');
    // $('#unittype').val('2').trigger('change');

    if (document.getElementById('lang_val') != null) {
      if (document.getElementById('lang_val').value == 'arabic') {
        //  document.getElementById('avenue-label').innerHTML = "شقة";
        $('.main_input').attr('placeholder', 'منزل')
        $('#blockport').attr('value', 'منع 2')
        $('#street-address').attr('value', 'شارع 2')
      } else {
        //  document.getElementById('avenue-label').innerHTML = "Apartment";
        $('.main_input').attr('placeholder', 'House')
        $('#blockport').attr('value', 'Block 2')
        $('#street-address').attr('value', 'Street 2')
      }
    } else {
      //  document.getElementById('avenue-label').innerHTML = "Apartment";
    }
  })
  $('.saved-addresses #address3').click(function (event) {
    $('.saved-addresses #address1').removeClass('active')
    $('.saved-addresses #address2').removeClass('active')
    $('.saved-addresses #address4').removeClass('active')
    $('.saved-addresses #address5').removeClass('active')
    $('.saved-addresses #address6').removeClass('active')
    $('.saved-addresses #address7').removeClass('active')
    $('.saved-addresses #address8').removeClass('active')
    $(this).toggleClass('active')
    $('#select-gov').val('3').trigger('change')
    // $('#safat').val('3').trigger('change');
    //  $('#unittype').val('3').trigger('change');

    if (document.getElementById('lang_val') != null) {
      if (document.getElementById('lang_val').value == 'arabic') {
        //  document.getElementById('avenue-label').innerHTML = "بناء";
        $('.main_input').attr('value', 'منزل 3')
        $('#blockport').attr('value', 'منع 3')
        $('#street-address').attr('value', 'شارع 3')
      } else {
        //  document.getElementById('avenue-label').innerHTML = "Building";
        $('.main_input').attr('value', 'House 3')
        $('#blockport').attr('value', 'Block 3')
        $('#street-address').attr('value', 'Street 3')
      }
    } else {
      //  document.getElementById('avenue-label').innerHTML = "Building";
    }
  })
  $('.saved-addresses #address4').click(function (event) {
    $('.saved-addresses #address1').removeClass('active')
    $('.saved-addresses #address2').removeClass('active')
    $('.saved-addresses #address3').removeClass('active')
    $('.saved-addresses #address5').removeClass('active')
    $('.saved-addresses #address6').removeClass('active')
    $('.saved-addresses #address7').removeClass('active')
    $('.saved-addresses #address8').removeClass('active')
    $(this).toggleClass('active')
    $('.main_input').attr('value', 'Office')
    $('#blockport').attr('value', 'Block 4')
    $('#street-address').attr('value', 'Street 4')
    $('#select-gov').val('4').trigger('change')
    // $('#safat').val('4').trigger('change');
    //   $('#unittype').val('1').trigger('change');

    if (document.getElementById('lang_val') != null) {
      if (document.getElementById('lang_val').value == 'arabic') {
        //  document.getElementById('avenue-label').innerHTML = "منزل";
        $('.main_input').attr('value', 'مكتب. مقر. مركز')
        $('#blockport').attr('value', 'منع 4')
        $('#street-address').attr('value', 'شارع 4')
      } else {
        //  document.getElementById('avenue-label').innerHTML = "House";
        $('.main_input').attr('value', 'Office')
        $('#blockport').attr('value', 'Block 4')
        $('#street-address').attr('value', 'Street 4')
      }
    } else {
      //  document.getElementById('avenue-label').innerHTML = "House";
    }
  })
  $('.saved-addresses #address5').click(function (event) {
    $('.saved-addresses #address1').removeClass('active')
    $('.saved-addresses #address2').removeClass('active')
    $('.saved-addresses #address3').removeClass('active')
    $('.saved-addresses #address4').removeClass('active')
    $('.saved-addresses #address6').removeClass('active')
    $('.saved-addresses #address7').removeClass('active')
    $('.saved-addresses #address8').removeClass('active')
    $(this).toggleClass('active')
    $('#select-gov').val('5').trigger('change')
    // $('#safat').val('5').trigger('change');
    //  $('#unittype').val('2').trigger('change');

    if (document.getElementById('lang_val') != null) {
      if (document.getElementById('lang_val').value == 'arabic') {
        //  document.getElementById('avenue-label').innerHTML = "شقة";
        $('.main_input').attr('value', 'خالد')
        $('#blockport').attr('value', 'منع 5')
        $('#street-address').attr('value', 'شارع 5')
      } else {
        //  document.getElementById('avenue-label').innerHTML = "Apartment";
        $('.main_input').attr('value', 'Khaled')
        $('#blockport').attr('value', 'Block 5')
        $('#street-address').attr('value', 'Street 5')
      }
    } else {
      //  document.getElementById('avenue-label').innerHTML = "Apartment";
    }
  })
  $('#home_delivery .custom-radio label[for="knets"]').click(function (event) {
    $(this).toggleClass('active')
    $('.main_input').removeAttr('disabled')
  })

  $(function () {
    $('.saved-cards #address11').click(function (event) {
      $('.saved-cards #address12').removeClass('active')
      $('.saved-cards #address13').removeClass('active')
      $('.saved-cards #address14').removeClass('active')
      $(this).toggleClass('active')
      $('#card-nmbr').val('**** **** 4200')
      $('#card-name').val('Zain')
      $('#exp-date').val('1')
      $('#crnt-year').val('1')
      $('#cvv').val('3333')
      document.getElementById('select2-exp-date-container').innerHTML = '1'
      document.getElementById('select2-crnt-year-container').innerHTML = 'YY'
    })
    $('.saved-cards #address12').click(function (event) {
      $('.saved-cards #address11').removeClass('active')
      $('.saved-cards #address13').removeClass('active')
      $('.saved-cards #address14').removeClass('active')
      $(this).toggleClass('active')
      $('#card-nmbr').val('**** **** 4300')
      $('#card-name').val('Ali')
      $('#exp-date').val('2')
      $('#crnt-year').val('2')
      $('#cvv').val('4444')
      document.getElementById('select2-exp-date-container').innerHTML = '2'
      document.getElementById('select2-crnt-year-container').innerHTML = '18'
    })
    $('.saved-cards #address13').click(function (event) {
      $('.saved-cards #address11').removeClass('active')
      $('.saved-cards #address12').removeClass('active')
      $('.saved-cards #address14').removeClass('active')
      $(this).toggleClass('active')
      $('#card-nmbr').val('**** **** 4400')
      $('#card-name').val('Hassan')
      $('#exp-date').val('2')
      $('#crnt-year').val('2')
      $('#cvv').val('5555')
      document.getElementById('select2-exp-date-container').innerHTML = '3'
      document.getElementById('select2-crnt-year-container').innerHTML = '19'
    })
    $('.saved-cards #address14').click(function (event) {
      $('.saved-cards #address11').removeClass('active')
      $('.saved-cards #address12').removeClass('active')
      $('.saved-cards #address13').removeClass('active')
      $(this).toggleClass('active')
      $('#card-nmbr').val('**** **** 4500')
      $('#card-name').val('Talha')
      $('#exp-date').val('3')
      $('#crnt-year').val('3')
      $('#cvv').val('6666')
      document.getElementById('select2-exp-date-container').innerHTML = '4'
      document.getElementById('select2-crnt-year-container').innerHTML = '20'
    })
  })

  $(function () {
    $('.search-fields').click(function (event) {
      $('#governorate').removeAttr('disabled')
    })
  })

  //Timer picker deliver home/checkout payment

  $('.main-clock .hour1').click(function (event) {
    $('.main-clock .hour1').removeClass('active')
    $(this).addClass('active')
  })

  $('.main-clock .hour2').click(function (event) {
    $('.main-clock .hour2').removeClass('active')
    $(this).addClass('active')
  })

  $('.custom-checkbox.custm_new').click(function (event) {
    $('.custom-checkbox.custm_new').removeClass('active')
    $(this).addClass('active')
  })

  $('.delivery-fields.time-table img, .delivery-fields.time-table h4').click(
    function () {
      $('.clock-sec').show()
    },
  )

  $(document).mouseup(function (e) {
    var container = $(
      '.delivery-fields.time-table img, .delivery-fields.time-table h4',
    )

    if ($('#clock-sec').css('display') == 'block') {
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.clock-sec').hide()
      }
    }
  })

  $('.calendar').click(function () {
    $('.clock-sec').hide()
  })
  $('#clock-sec li').click(function () {
    $('.clock-sec').hide()
  })
  $('.clock-sec .bottom-stripe a').click(function () {
    if ($(this).html() === 'cancel') {
      $('.time-table').find('span').html('Choose Time')
    }
    if ($(this).html() === 'إلغاء') {
      $('.time-table').find('span').html('اختر الوقت')
    }
    $('.clock-sec').hide()
  })

  // dated 8-4-2020 code starts
  /* $('.date_sect_1 .delivery-fields.calendar img, .date_sect_1 .delivery-fields.calendar h4').click(function() {
    $('.date_sect_1 .delivery-fields.calendar + .form-group').fadeToggle();
   });

   $('.date_sect_1 .form-group .bottom-stripe a').click(function() {
    $('.date_sect_1 .calendar + .form-group').fadeOut();
   });


   $('.date_sect_2 .delivery-fields.calendar img, .date_sect_2 .delivery-fields.calendar h4').click(function() {
    $('.date_sect_2 .delivery-fields.calendar + .form-group').fadeToggle();
   });

   $('.date_sect_2 .form-group .bottom-stripe a').click(function() {
    $('.date_sect_2 .calendar + .form-group').fadeOut();
   });*/
  // dated 8-4-2020 code ends
})

function calculate(obj) {
  document.getElementById('clock-time').innerHTML = obj.value
}
function calculater(obj) {
  document.getElementById('time-slot').innerHTML = obj.value
}
$(function () {
  $('#hour16').attr('disabled', 'disabled')
  $('.main-clock label:nth-child(4)').addClass('disabled')
  $('.am').click(function () {
    $(this).removeClass('deselect')
    $(this).addClass('selected')
    $('.pm').removeClass('selected')
    $('.pm').addClass('deselect')
    $('#hour16').removeAttr('disabled', 'disabled')
    $('#hour4').removeAttr('disabled', 'disabled')
    $('.main-clock label:nth-child(4)').removeClass('disabled')
  })
  $('.pm').click(function () {
    $(this).removeClass('deselect')
    $(this).addClass('selected')
    $('.am').removeClass('selected')
    $('.am').addClass('deselect')
    $('#hour16').attr('disabled', 'disabled')
    $('#hour4').attr('disabled', 'disabled')
    $('.main-clock label:nth-child(4)').addClass('disabled')
  })
})

var displayBox = document.querySelector('.display-box')
var clockBox = document.querySelector('.clock-box')
var deliveryPrice = document.querySelector('#hide')
var deliveryRes = document.querySelector('#hide-res')
var priceKD = document.querySelector('#labeldelivery')
var priceKdRes = document.querySelector('#delivery-res')
function delivery() {
  if (document.getElementById('b').checked) {
    displayBox.classList.add('hide')
    clockBox.classList.add('hide')
    deliveryPrice.classList.remove('hide')
    deliveryRes.classList.remove('hide')
    priceKD.innerHTML = 'KD 29'
    priceKdRes.innerHTML = 'KD 29'
  } else if (document.getElementById('c').checked) {
    displayBox.classList.add('hide')
    clockBox.classList.remove('hide')
    deliveryPrice.classList.remove('hide')
    deliveryRes.classList.remove('hide')
    priceKD.innerHTML = 'Free'
    priceKdRes.innerHTML = 'Free'
  } else if (document.getElementById('d').checked) {
    displayBox.classList.remove('hide')
    clockBox.classList.add('hide')
    deliveryPrice.classList.remove('hide')
    deliveryRes.classList.remove('hide')
    priceKD.innerHTML = 'Free'
    priceKdRes.innerHTML = 'Free'
  }
}

/*var searchField = document.querySelector('#area');
var dropdownList = document.querySelector('.dropdown-list');
var addresses = document.querySelectorAll('.li');


  searchField.addEventListener('keyup', function(e){
    var term = e.target.value.toLowerCase();
    Array.from(addresses).forEach(function(address){
      var title = address.firstElementChild.textContent.toLowerCase();
      if(searchField.value.length == 0) {
        address.style.display = 'none';
        address.parentElement.style.display = 'none';
      }
       else if(title.indexOf(term) != -1){
        address.style.display = 'block';
        address.parentElement.style.display = 'block';
      }
      else {
        address.style.display = 'none';
        address.parentElement.style.display = 'none';
      }
    });
  });*/

var changeLabel = document.getElementById('save-address')
$('#gb').change(function () {
  changeLabel.innerHTML = 'Update address'
})

var dir_val = false
if (document.getElementById('langs') != null) {
  dir_val = true
}
if ($(window).width() < 767) {
  if ($('.slick-mobile').length) {
    $('.slick-mobile').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: false,
      rtl: dir_val,
      dots: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1.6,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
          },
        },
      ],
    })
  }
}

// Wait for the DOM to be ready
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

  if ($("form[name='visitForm']").length) {
    $("form[name='visitForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        Avenue: 'required',
        Directions: 'required',
      },
      // Specify validation error messages
      messages: {
        Avenue: 'Please enter Avenue',
        Directions: 'Please enter Directions',
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    })
    $('#complete-btn').click(function () {
      $("form[name='visitForm']").valid()
    })
  }

  if ($("form[name='myForm']").length) {
    $("form[name='myForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        civilid: 'required',
        civil_date: 'required',
      },
      // Specify validation error messages
      messages: {
        civilid: 'Please enter civil id',
        civil_date: 'Please enter Civil ID Expiry date ',
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    })
    $('#complete-btn').click(function () {
      $("form[name='myForm']").valid()
    })

    $('#address1').click(function () {})
    var address1 = document.getElementById('address1')
    var address2 = document.getElementById('address2')
    var address3 = document.getElementById('address3')
    var address4 = document.getElementById('address4')

    address1.addEventListener('click', function () {
      document.getElementById('blockport').selectedIndex = 1
      document.getElementById('select2-blockport-container').innerHTML =
        'Shuwaikh Port 2'
      document.getElementById('safat').selectedIndex = 1
      document.getElementById('select2-safat-container').innerHTML =
        'Safat 13005 2'
      document.getElementById('gb').selectedIndex = 1
      document.getElementById('select2-gb-container').innerHTML = 'Apartment 2'
      //    document.getElementById('avenue').selectedIndex = 1;
      document.getElementById('select2-avenue-container').innerHTML = 'Avenue 2'
    })

    address2.addEventListener('click', function () {
      document.getElementById('blockport').selectedIndex = 2
      document.getElementById('select2-blockport-container').innerHTML =
        'Shuwaikh Port 3'
      document.getElementById('safat').selectedIndex = 2
      document.getElementById('select2-safat-container').innerHTML =
        'Safat 13005 3'
      document.getElementById('gb').selectedIndex = 2
      document.getElementById('select2-gb-container').innerHTML = 'Apartment 3'
      //    document.getElementById('avenue').selectedIndex = 2;
      document.getElementById('select2-avenue-container').innerHTML = 'Avenue 3'
      changeLabel.innerHTML = 'Update address'
    })

    address3.addEventListener('click', function () {
      document.getElementById('blockport').selectedIndex = 3
      document.getElementById('select2-blockport-container').innerHTML =
        'Shuwaikh Port 4'
      document.getElementById('safat').selectedIndex = 3
      document.getElementById('select2-safat-container').innerHTML =
        'Safat 13005 4'
      document.getElementById('gb').selectedIndex = 3
      document.getElementById('select2-gb-container').innerHTML = 'Apartment 4'
      //    document.getElementById('avenue').selectedIndex = 3;
      document.getElementById('select2-avenue-container').innerHTML = 'Avenue 4'
      changeLabel.innerHTML = 'Update address'
    })

    address4.addEventListener('click', function () {
      document.getElementById('blockport').selectedIndex = 0
      document.getElementById('select2-blockport-container').innerHTML =
        'Shuwaikh Port 1'
      document.getElementById('safat').selectedIndex = 0
      document.getElementById('select2-safat-container').innerHTML =
        'Safat 13005 1'
      document.getElementById('gb').selectedIndex = 0
      document.getElementById('select2-gb-container').innerHTML = 'Apartment 1'
      //    document.getElementById('avenue').selectedIndex = 0;
      document.getElementById('select2-avenue-container').innerHTML = 'Avenue 1'
      changeLabel.innerHTML = 'Update address'
    })
  }
})

function seltime(obj) {
  document.getElementById('time-slot').innerHTML = obj.value
}
function deltime(obj) {
  document.getElementById('clock-time').innerHTML = obj.value
  document.getElementById('clock-time').classList.add('clock_time_active')
}

function operate_governorate_area1(vals) {
  if (vals > 0) {
    document.getElementById('governorate_areas1').disabled = false
  } else {
    document.getElementById('governorate_areas1').disabled = true
  }
}

function operate_governorate_area2(vals) {
  if (vals > 0) {
    document.getElementById('governorate_areas2').disabled = false
  } else {
    document.getElementById('governorate_areas2').disabled = true
  }
}

/* Adding sidebar filters starts */
$(function () {
  $('.left-content-area .custom-checkbox input').prop('checked', false)

  $('.right-content-area .row .col-md-4').each(function (index, element) {
    $(this).addClass('filter-items')
  })

  $('.left-content-area .custom-checkbox label').click(function (e) {
    $('.right-content-area .row .filter-items').hide()

    $('.viewmore-link').hide()

    if (
      $(this).parents('.custom-checkbox').find('input').prop('checked') == false
    ) {
      $(this).parents('.custom-checkbox').addClass('active')
    } else {
      $(this).parents('.custom-checkbox').removeClass('active')
    }

    var item_data_info_vals = 0

    var sel_filters_nums = $('.left-content-area .custom-checkbox.active')
      .length

    var i = 0
    var item_nums = 0
    $('.left-content-area .custom-checkbox.active').each(function (
      index,
      element,
    ) {
      var getfilters = $(this).attr('id')

      setTimeout(function () {
        $('.right-content-area .' + getfilters + ' ').fadeIn()
      }, 350)

      i++
    })

    //col-md-4 col-sm-6 pay_montly home entertainment health lifestyle under20 filter-items

    getactive = $('.left-content-area .custom-checkbox.active').length

    if (getactive == 0) {
      $('.right-content-area .row .filter-items').fadeIn()
      $('.viewmore-link').show()
    }
  })
})

$('.filters-results-row .save-link-button, .filters .btn-save').click(function (
  e,
) {
  $('.selected-filtes-mobile').html('')
  $('.left-content-area .custom-checkbox.active').each(function (
    index,
    element,
  ) {
    getSelectFilter = $(this).attr('id')
    getSelectText = $(this).find('label').text()

    $('.selected-filtes-mobile').append(
      '<a id="' +
        getSelectFilter +
        '" class="filter-results-tags">' +
        getSelectText +
        '<span class="close-tag-icon">x</span></a>',
    )
  })
})

jQuery(document).on('click', '.filter-results-tags .close-tag-icon', function (
  event,
) {
  getTheSelectFilter = $(this).parents('a').attr('id')

  $(this).parents('a').remove()
  //$(".left-content-area .custom-checkbox label").trigger("click");

  $('.filters div#' + getTheSelectFilter + ' label').trigger('click')
  //$(".filters #"+getTheSelectFilter).find("input").prop("checked",false);

  //alert(getOBJ)
})

$('.btn-reset,.reset-link').click(function (e) {
  $('.filters').find('input').prop('checked', false)
  $('.filters .custom-checkbox').each(function (index, element) {
    $(this).removeClass('active')
  })
})

$(function () {
  if ($('#countdown-1').length) {
    $('#countdown-1').timeTo(1111420, function () {
      alert('Countdown finished')
    })
  }
  if ($('#countdown-2').length) {
    $('#countdown-2').timeTo(2111111, function () {
      alert('Countdown finished')
    })
  }
  if ($('#countdown-3').length) {
    $('#countdown-3').timeTo(2233311, function () {
      alert('Countdown finished')
    })
  }
  if ($('#countdown-4').length) {
    $('#countdown-4').timeTo(2233311, function () {
      alert('Countdown finished')
    })
  }
  if ($('#countdown-5').length) {
    $('#countdown-5').timeTo(2233311, function () {
      alert('Countdown finished')
    })
  }
})

$(function () {
  $('.plan-popup > span').click(function (e) {
    $(this).toggleClass('active')
  })
})

$(function () {
  $('.preffered-language li').click(function (e) {
    $('.preffered-language li').removeClass('active')
    $(this).addClass('active')
    $('.changes-stripe').fadeIn()
  })
  $('.line-search .btn').click(function (e) {
    $('.bodyoverlay').addClass('show')
    $('.newline-popup').addClass('show')
  })
  $('.displayname-btn').click(function (e) {
    $('.bodyoverlay').addClass('show')
    $('.editline-popup').addClass('show')
  })
  $('.remove-btn').click(function (e) {
    $('.bodyoverlay').addClass('show')
    $('.removeline-popup').addClass('show')
  })

  $('.prfile-adddress li').click(function (e) {
    $('.prfile-adddress li').removeClass('active')
    $(this).addClass('active')
  })

  $('.edit-address').click(function (e) {
    e.preventDefault()
    $('.bodyoverlay').addClass('show')
    $('#ctm-prefilled').addClass('show')
  })

  $('.ctm_country').click(function (e) {
    e.preventDefault()
    $('.main-mobile-menu').removeClass('show')
    $('.mobile-nav .mobile-menu-toggle>a i')
      .addClass('icon-hamburger-new')
      .removeClass(['icon-close', 'active'])
    $('.bodyoverlay').addClass('show')
    $('#ctm_country_popup').addClass('show')
  })

  $('.add-new-address').click(function (e) {
    e.preventDefault()
    $('.bodyoverlay').addClass('show')
    $('#ctm-address-popup').addClass('show')
  })
  $('.main-heading a').click(function (e) {
    e.preventDefault()
    $('.bodyoverlay').addClass('show')
    $('.addcard-popup').addClass('show')
  })
  $('.addcard-link').click(function (e) {
    e.preventDefault()
    $('.bodyoverlay').addClass('show')
    $('.addcard-popup').removeClass('show')
    $('.cardadded-popup').addClass('show')
  })
  $('.card-img a').click(function (e) {
    e.preventDefault()
    $('.bodyoverlay').addClass('show')
    $('.cardremoved-popup').addClass('show')
  })
  $('.changes-stripe ul li:first-child a').click(function (e) {
    e.preventDefault()
    $('.profile-stripe').hide()
    $('.changes-stripe').hide()
    $('.preffered-language ul li').removeClass('active')
  })
  $('.changes-stripe ul li:last-child a').click(function (e) {
    e.preventDefault()
    $('.profile-stripe').fadeIn()
    $('.changes-stripe').hide()
  })

  $('#confirm-link').click(function (e) {
    e.preventDefault()
    $('.deletecard-popup').addClass('show')
    $('.cardremoved-popup').removeClass('show')
  })

  $('.numbers li').click(function (e) {
    $('.numbers li').removeClass('active')
    $(this).addClass('active')
  })

  $('.viewmore-link a').click(function (e) {
    $('.special-boxes').removeClass('hide')
  })
  $('.activebill-btn').click(function (e) {
    $('.bodyoverlay').addClass('show')
    $('.activeprivacy-popup').addClass('show')
  })
  $('.requestpuk-btn').click(function (e) {
    $('.bodyoverlay').addClass('show')
    $('.pukcode-popup').addClass('show')
  })
})

$(function () {
  $('.prfile-adddress ul li a ,.prfile-adddress > a').click(function (e) {
    $('.saved-addresses .box-shadow').fadeIn()
  })

  $('.link-toggle span').click(function (e) {
    $(this).toggleClass('active')
    $('.responsive-strpe ul').slideToggle()
  })
})

$(function () {
  $('.prfile-adddress ul li:first-child a ').click(function (e) {
    $('.saved-addresses .box-shadow').fadeIn()
    $('#blocks').val('blocks1')
    $('#street').val('Ali Street')
    $('#apartment').val('Apartments')
    $('#avenue').val('Avenue')
    $('#cvv').val('4444')
    $('#officeaddress').val('Hadeel Office Address')
    document.getElementById('saved-btn').innerHTML = 'Save Address'
    document.getElementById('select2-governorate2-container').innerHTML =
      'Governorate 2'
    document.getElementById('governorate_areas2').innerHTML =
      '<option>MY Area</option>'
  })

  $('.prfile-adddress > a').click(function (e) {
    $('#blocks').val('')
    $('#street').val('')
    $('#apartment').val('')
    $('#avenue').val('')
    $('#cvv').val('')
    $('#officeaddress').val('')
  })

  $('#adnew-address').click(function (e) {
    document.getElementById('saved-btn').innerHTML = 'Add Address'
    document.getElementById('deleted-btn').innerHTML = 'Cancel'
    $('#officeaddress').val('')
  })
  $('.faq-section + .btn-link').click(function (e) {
    e.preventDefault()
    $('.faq-section').toggleClass('less-section')
    $('.faq-item').toggleClass('hide')
  })
  $('.card .card-header').click(function (e) {
    e.preventDefault()
    $(this + '.collapse').toggleClass('active')
  })
})

// Wait for the DOM to be ready
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

  if ($("form[name='addcard']").length) {
    $("form[name='addcard']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        cardnmbr: 'required',
        cardname: 'required',
        GB: 'required',
        crntyear: 'required',
        cvv: 'required',
      },
      // Specify validation error messages
      messages: {
        cardnmbr: 'Please enter cardnmbr',
        cardname: 'Please enter cardname ',
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    })
    $('#addcard-link').click(function () {
      $("form[name='addcard']").valid()
    })
  }
  if ($("form[name='comment-validate']").length) {
    $("form[name='comment-validate']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        reviewcomment: 'required',
      },
      // Specify validation error messages
      messages: {
        reviewcomment: 'Please enter your review',
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    })
  }
  if ($("form[name='comment-validate1']").length) {
    $("form[name='comment-validate1']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        reviewcomment1: 'required',
      },
      // Specify validation error messages
      messages: {
        reviewcomment1: 'Please enter your review',
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    })
  }
})

// Wait for the DOM to be ready
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

  if ($("form[name='saved-form']").length) {
    $("form[name='saved-form']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        blocks: 'required',
        street: 'required',
        apartment: 'required',
        avenue: 'required',
      },
      // Specify validation error messages
      messages: {
        blocks: 'Please enter blocks',
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
    })
    $('#saved-address').click(function () {
      $("form[name='saved-form']").valid()
    })
  }
})

if ($('#box').length) {
  var list = document.querySelector('#box')
  var searchForm = document.forms['searchbar'].querySelector('input')
  searchForm.addEventListener('keyup', function (e) {
    var term = e.target.value.toLowerCase()
    var books = list.getElementsByTagName('li')
    Array.from(books).forEach(function (book) {
      const title = book.firstElementChild.textContent.toLowerCase()
      if (title.indexOf(term) != -1) {
        book.style.display = 'initial'
      } else {
        book.style.display = 'none'
      }
    })
  })
}

$(function () {
  var hash = window.location.hash
  hash && $('ul.nav a[href="' + hash + '"]').tab('show')

  $('.nav a').click(function (e) {
    $(this).tab('show')
    var scrollmem = $('body').scrollTop() || $('html').scrollTop()
    window.location.hash = this.hash
    $('html,body').scrollTop(scrollmem)
  })
})

if ($(window).width() < 767) {
  $('#my-lines').removeClass('show active')
  $('.select-dropdown select').change(function () {
    if ($(this).val() == 'profile-form') {
      $('.tab-pane').removeClass('show active')
      $('.profile-form').removeClass('hide')
    } else if ($(this).val() == 'lines') {
      $('.tab-pane').removeClass('show active')
      $('#my-lines').addClass('show active')
      $('.profile-form').addClass('hide')
    } else if ($(this).val() == 'lines') {
      $('.tab-pane').removeClass('show active')
      $('#my-lines').addClass('show active')
      $('.profile-form').addClass('hide')
    } else if ($(this).val() == 'cards') {
      $('.tab-pane').removeClass('show active')
      $('#saved-card').addClass('show active')
      $('.profile-form').addClass('hide')
    } else if ($(this).val() == 'address') {
      $('.tab-pane').removeClass('show active')
      $('#saved-address').addClass('show active')
      $('.profile-form').addClass('hide')
    }
  })
}

/*var nmbrlist = document.querySelector('#flag-numbers');
var searchnmbr = document.forms['searchnmbrs'].querySelector('input');
    searchnmbr.addEventListener('keyup', function(e){
       var term = e.target.value.toLowerCase();

       var figures = nmbrlist.getElementsByTagName('li');

      Array.from(figures).forEach(function(figure){

        const title = figure.firstElementChild.textContent.toLowerCase();
        if(title.indexOf(term) != -1){
          figure.style.display = 'inline-block';
          nmbrlist.style.display = 'inline-block';
        }else{
          figure.style.display = "none";
          nmbrlist.style.display = 'none';
        }

      });
});*/

/*var nmbrlist = document.querySelector('#flag-numbers2');
var searchnmbr = document.forms['searchnmbrs2'].querySelector('input');
    searchnmbr.addEventListener('keyup', function(e){
       var term = e.target.value.toLowerCase();

       var figures = nmbrlist.getElementsByTagName('li');

      Array.from(figures).forEach(function(figure){

        const title = figure.firstElementChild.textContent.toLowerCase();
        if(title.indexOf(term) != -1){
          figure.style.display = 'inline-block';
          nmbrlist.style.display = 'inline-block';
        }else{
          figure.style.display = "none";
          nmbrlist.style.display = 'none';
        }

      });
});
*/

// plan-newlines.html JS functions
$(document).ready(function () {
  if ($('div.validate_your_number').length) {
    $(document).on('click', '.existing-line-list ul li a', function () {
      $('#flag-number').val(
        $(this).data('number') + ' - ' + $(this).data('name'),
      )
    })

    $('#flag-number').blur(function () {
      setTimeout(function () {
        $('.existing-line-list').hide()
      }, 300)
    })
  } else {
    $('.line1-save').hide()
    $('.line1-edit').hide()
    $('.line1-contact').hide()
    $('.line1-existing').hide()
    $('.line1-flag-list-new').hide()
    var line1ChoseNo = false
    var addToPlan = false
    // Line 1 existing option panel
    $(document).on('click', '.existing-line-list ul li a', function () {
      $(this)
        .parents('.mainline-content')
        .find('.line1-existing')
        .html('Existing Line')
      $(this)
        .parents('.mainline-content')
        .find('.line1-name')
        .html($(this).data('name'))
      $(this)
        .parents('.mainline-content')
        .find('.recharge-amount-display span:first')
        .attr('data-price', $(this).data('price'))

      $(this)
        .parents('.mainline-content')
        .find('.line1-number')
        .html($(this).data('number'))
      $(this).parents('.mainline-content').find('.existing-line-list').hide()

      $('#flag-number').val(
        $(this).data('number') + ' - ' + $(this).data('name'),
      )

      if ($(this).data('name') == 'Penalty Error') {
        //$(".existing-line-1-error").css("display","block");
        $('.existing-line-1-error').fadeIn()
      } else {
        //$(".existing-line-1-error").css("display","none");
        $('.existing-line-1-error').fadeOut()
      }

      $('.line1-contact').fadeIn()
      $('.line1-existing').fadeIn()
      line1ChoseNo = true
      calculateLinePrices()
    })

    $('#flag-number').blur(function () {
      setTimeout(function () {
        $('.existing-line-list').hide()
      }, 300)
    })
  }

  // Line 1 new line
  /*var nmbrlist = document.querySelector('#line1-search-text');
  var searchnmbr = document.forms['line1-search-new'].querySelector('input');
      searchnmbr.addEventListener('keyup', function(e){
         var term = e.target.value.toLowerCase();
  
         var figures = nmbrlist.getElementsByTagName('li');
  
        Array.from(figures).forEach(function(figure){
  
          const title = figure.firstElementChild.textContent.toLowerCase();
          if(title.indexOf(term) != -1){
            figure.style.display = 'inline-block';
            nmbrlist.style.display = 'inline-block';
          }else{
            figure.style.display = "none";
            nmbrlist.style.display = 'none';
          }
  
        });
  });*/

  $(document).on('click', '.flag-number li a', function () {
    currapp_other_number_cal_total()
  })

  $('.line1-flag-list-new #flag-numbers2 li a').click(function () {
    $('.line1-existing').html('New Line')
    $('.line1-number').html($(this).data('number'))
    $('.line1-flag-list-new').hide()

    $('#line1-search-text').val(
      $(this).data('number') +
        ' ' +
        $(this).data('package') +
        ' ' +
        $(this).data('service'),
    )

    $('.line1-edit').fadeOut('slow', function () {
      $('.line1-save').fadeIn()
    })
    $('.line1-contact').fadeIn()
    $('.line1-existing').fadeIn()
    line1ChoseNo = true
    calculateLinePrices()
  })

  $('.validate-btn').click(function () {
    $('.verify-account').addClass('show')
    $('.bodyoverlay').addClass('show')
  })

  // $(".resend-otp").click(function () {
  // 	$('.verify-account').removeClass('show');
  // 	$('.resent-otp').addClass('show');
  // 	$('.bodyoverlay').addClass('show');
  // 	if (interval) {
  // 		clearInterval(interval);
  // 	}
  // 	operate_down_timers_counter();
  // });

  $('#line1-search-text').blur(function () {
    setTimeout(function () {
      $('.line1-flag-list-new').hide()
    }, 300)
  })

  $('.line1-save .btn').click(function () {
    if ($('#line1-nickname').val() != '') {
      $('.line1-name').html($('#line1-nickname').val())
      $('#line1-nickname-edit').val($('#line1-nickname').val())
      $('.line1-save').fadeOut('slow', function () {
        $('.line1-edit').fadeIn('slow')
      })
    }
  })

  $('.line1-edit .btn').click(function () {
    if ($('#line1-nickname-edit').val() != '') {
      $('.line1-name').html($('#line1-nickname-edit').val())
    }
  })
  $('.product_wrapper .saved_slider_new a').click(function (event) {
    event.preventDefault()
    $(
      '.kw #wrapper .form-group .form-control.custom-select, .kw #wrapper .form-group .form-control',
    ).prop('disabled', false) // Element(s) are now enabled.
  })

  // Line 1 existing and new radio button action
  $(
    '.kw #wrapper .form-group .form-control[type=radio][name=payOption]',
  ).change(function () {
    if (this.value == 'knet') {
      $('.card-details').fadeOut()
      $('.k_net_cc').fadeIn()
      $('.line1-existing').html('Existing Line')
      $('.line1-contact').fadeIn()
      $('.line1-existing').fadeIn()

      $('#flag-number').prop('disabled', false)
      $('#line1-search-text').prop('disabled', true)
      $('#existing_line1_image-icon').show()
    } else if (this.value == '7845') {
      $('.card-details').fadeOut()
      $('.k_net_cc').fadeOut()
      $('.line1-existing').html('Existing Line')
      $('.line1-contact').fadeIn()
      $('.line1-existing').fadeIn()

      $('#flag-number').prop('disabled', false)
      $('#line1-search-text').prop('disabled', true)
      $('#existing_line1_image-icon').show()
    } else if (this.value == '6553') {
      $('.card-details').fadeOut()
      $('.k_net_cc').fadeOut()
      $('.line1-existing').html('Existing Line')
      $('.line1-contact').fadeIn()
      $('.line1-existing').fadeIn()

      $('#flag-number').prop('disabled', false)
      $('#line1-search-text').prop('disabled', true)
      $('#existing_line1_image-icon').show()
    } else if (this.value == '3667') {
      $('.card-details').fadeOut()
      $('.k_net_cc').fadeOut()
      $('.line1-existing').html('Existing Line')
      $('.line1-contact').fadeIn()
      $('.line1-existing').fadeIn()

      $('#flag-number').prop('disabled', false)
      $('#line1-search-text').prop('disabled', true)
      $('#existing_line1_image-icon').show()
    } else if (this.value == 'credit_card') {
      $('.card-details').fadeIn()
      $('.k_net_cc').fadeOut()
      $('.line1-existing').html('New Line')
      $('.line1-contact').fadeIn()
      $('.line1-existing').fadeIn()

      $('#flag-number').prop('disabled', true)
      $('#line1-search-text').prop('disabled', false)
      $('#existing_line1_image-icon').hide()
      $('.existing-line-1-error').fadeOut()
    } else {
      $('#flag-number').prop('disabled', true)
      $('#line1-search-text').prop('disabled', true)
      $('#existing_line1_image-icon').hide()
      $('.existing-line-1-error').fadeOut()
    }
  })

  $('.kw #wrapper .form-group .form-control[type=radio][name=received]').change(
    function () {
      if (this.value == 'person') {
        $('.someone-request').fadeOut()
      } else {
        $('.someone-request').fadeIn()
      }
    },
  )

  // Add to plan button action
  $('.mainline-content .product-detail .btn').click(function () {
    var __this = this
    $('.product_slider_new .product-thumbnail').each(function () {
      //$( this ).addClass( "foo" );
      $(this).removeClass('pink-border')
    })

    $('.product_slider_new .product-thumbnail .btn').each(function () {
      //$( this ).addClass( "foo" );
      $(this).html('Add to plan')
    })

    $(__this)
      .closest('.kw #wrapper .mainline-content .product-thumbnail')
      .toggleClass('pink-border')
    $(__this).text($(__this).text() == 'Remove' ? 'Add to plan' : 'Remove')
    calculateLinePrices()
  })

  // Existing search field show and hide
  $(document).on('focus', '.existing-line-input', function () {
    //alert('aa--22');
    var __this = this
    //alert('11111');
    $('.existing-line-list').hide()
    $(__this).parents('.main-linecontent').find('.existing-line-list').show()

    /* 23-02-2021 starts */

    $('div.existing-line-list ul#flag-numbers')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls0')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls0')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls0 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls2')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls2')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls2 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls3')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls3')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)
        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls3 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls4')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls4')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls4 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls5')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls5')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls5 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    /* pre created elements for quickpay-paybill ==>> request for another numbers starts */
    $('div.existing-line-list ul#flag-numbers-cls01')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls01')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls01 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls02')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls02')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls02 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls03')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls03')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls03 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls04')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls04')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls04 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()

    $('div.existing-line-list ul#flag-numbers-cls05')
      .on('focus', 'li', function () {
        $this = $(this)
        $this.addClass('active').siblings().removeClass()
        $this
          .closest('div.existing-line-list ul#flag-numbers-cls05')
          .scrollTop($this.index() * $this.outerHeight())
      })
      .on('keydown', 'li', function (e) {
        $this = $(this)

        if (e.keyCode == 40) {
          $this.next().focus()
          return false
        } else if (e.keyCode == 38) {
          $this.prev().focus()
          return false
        } else if (e.keyCode == 13) {
          $('div.existing-line-list ul#flag-numbers-cls05 li.active a').click()
          return false
        }
      })
      .find('li')
      .first()
      .focus()
    /* pre created elements for quickpay-paybill ==>> request for another numbers ends */

    //var cstm_flag_elemt = "#fetch_paying_another_no_list div.existing-line-list ul#flag-numbers-cls0" + counter_2;
    //	console.log('333' + cstm_flag_elemt);

    /* 23-02-2021 ends */
  })

  // Existing search field show and hide
  $('#line1-search-text').focus(function () {
    $('.line1-flag-list-new').show()
  })

  function calculateLinePrices() {
    var price = 0
    var PDPrice = 0 // Primary device price.
    var SDPrice = 0 // Secondary device price.
    if (line1ChoseNo == true) {
      price += 800
    }

    // Apply price for all chosen devices
    $('.primary-device .slick-active .pink-border')
      .map(function () {
        price += 29
        PDPrice += 29
      })
      .get()
    console.log(PDPrice)
    $('.pd-price').html(PDPrice) // Show primary device price
    $('.pd-price').fadeIn()

    $('.secondary-device .slick-active .pink-border')
      .map(function () {
        price += 29
        SDPrice += 29
      })
      .get()

    $('.sd-price').html(SDPrice) // Show secondary device price
    $('.sd-price').fadeIn()

    $('.line1-total').html(price)
  }

  // Existing line number search
  $('.line1 .existing-line-input')
    .keyup(function () {
      //alert('aa--33');
      searchExistingNumber()
    })
    .keyup()

  // Search existing number
  function searchExistingNumber() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue
    input = document.getElementById('flag-number')
    filter = input.value.toUpperCase()
    ul = document.getElementById('flag-numbers')
    li = ul.getElementsByTagName('li')

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0]
      txtValue = a.textContent || a.innerText

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
      }
    }
  }

  // New line input keyup action
  $('#line1-search-text')
    .keyup(function () {
      searchNewNumber()
    })
    .keyup()

  // Search existing number
  function searchNewNumber() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue
    input = document.getElementById('line1-search-text')
    filter = input.value.toUpperCase()
    ul = document.getElementById('flag-numbers2')
    li = ul.getElementsByTagName('li')

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0]
      txtValue = a.textContent || a.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
      }
    }
  }

  /*  
  if($('input[name="usr_existing_number_chk"]').prop("checked") == false){
    $(this).parents(".custom-checkbox").addClass("active");
  } else{
    $(this).parents(".custom-checkbox").removeClass("active");
  }*/

  /*if($(this).parents(".custom-checkbox").find("input").prop("checked") == false){
    $(this).parents(".custom-checkbox").addClass("active");
  } else{
    $(this).parents(".custom-checkbox").removeClass("active");
  }*/

  // Existing line number search
  $('.validate_your_number .existing-line-input')
    .keyup(function () {
      //alert('aa--11');
      operate_searchExistingNumber()
    })
    .keyup()

  // Search existing number
  function operate_searchExistingNumber() {
    //fetch_number_to_valid
    // Declare variables
    var input, filter, ul, li, a, i, txtValue
    input = document.getElementById('flag-number')
    filter = input.value.toUpperCase()
    ul = document.getElementById('flag-numbers')
    li = ul.getElementsByTagName('li')

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0]
      txtValue = a.textContent || a.innerText

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
      }
    }
  }
})

// 30nov
function operate_usr_exist_number_chk() {
  $(document).ready(function () {
    // $('input[name="usr_existing_number_chk"]').attr('checked', '');
    // $(this).attr('checked','checked');
    if ($('input[name="usr_existing_number_chk"]').prop('checked') == true) {
      // $("#validate_number_chk_btn").prop("disabled", false);
      $('#flag-number').removeAttr('disabled')
    } else {
      // $("#validate_number_chk_btn").prop("disabled", true);
    }
  })
}

function operate_usr_exist_number_chk1() {
  $(document).ready(function () {
    // $('input[name="usr_existing_number_chk"]').attr('checked', '');
    // $(this).attr('checked','checked');
    if ($('input[name="usr_existing_number_chk1"]').prop('checked') == true) {
      $('#fetch_number_to_valid_error').css('display', 'inline-block')
      $('#fetch_number_to_valid_success').css('display', 'none')

      $('#validate_number_chk_btn').prop('disabled', false)
    } else {
      $('#fetch_number_to_valid_error').css('display', 'none')
      $('#fetch_number_to_valid_success').css('display', 'none')

      $('#validate_number_chk_btn').prop('disabled', true)
    }
  })
}

$(function () {
  $(document).ready(function () {
    $('#flag-number').attr('disabled', 'disabled')
  })
})

// function operate_down_timers_counter() {
// 	var timer2 = '';
// 	var interval = '';
// 	var minutes = ''
// 	var seconds = ''

// 	$(document).ready(function () {
// 		if ($('input[name="usr_existing_number_chk"]').prop("checked") == true) {

// 			if (interval) {
// 				clearInterval(interval);
// 			}

// 			var timer2 = "00:10";
// 			var interval = setInterval(function () {

// 				var timer = timer2.split(':');
// 				//by parsing integer, I avoid all extra string processing
// 				var minutes = parseInt(timer[0], 10);
// 				var seconds = parseInt(timer[1], 10);
// 				--seconds;
// 				minutes = (seconds < 0) ? --minutes : minutes;
// 				if (minutes < 0) clearInterval(interval);
// 				seconds = (seconds < 0) ? 59 : seconds;
// 				seconds = (seconds < 10) ? '0' + seconds : seconds;
// 				//minutes = (minutes < 10) ?  minutes : minutes;
// 				minutes = (minutes < 10) ? '0' + minutes : minutes;
// 				seconds = (seconds < 10) ? '0' + seconds : seconds;

// 				minutes = parseInt(minutes);
// 				seconds = parseInt(seconds);

// 				$('#fetch_down_time_counter_1').html(minutes + ':' + seconds);
// 				$('#fetch_down_time_counter_2').html(minutes + ':' + seconds);
// 				timer2 = minutes + ':' + seconds;
// 				console.log(timer2);
// 			}, 1000);

// 			$(".validate_otp_number_btn").click(function () {
// 				clearInterval(interval);

// 				if ($(".verify-account").hasClass("show")) {
// 					$(".verify-account").removeClass("show");
// 					$(".bodyoverlay").removeClass("show");
// 					$('#fetch_number_to_valid_error').css("display", "none");
// 					$('#fetch_number_to_valid_success').css("display", "inline-block");
// 				}

// 				if ($(".resent-otp").hasClass("show")) {
// 					$(".resent-otp").removeClass("show");
// 					$(".bodyoverlay").removeClass("show");
// 					$('#fetch_number_to_valid_error').css("display", "none");
// 					$('#fetch_number_to_valid_success').css("display", "inline-block");
// 				}
// 			});

// 			$(".close-tracking").click(function () {
// 				clearInterval(interval);
// 			});

// 		}

// 	});
// }

function readFrontURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()
    reader.onload = function (e) {
      $('#upload-front').parent().addClass('hide')
      $('#uploaded-front').removeClass('hide')
      $('#uploaded-front>div>img').addClass('show')
      $('#uploaded-front>div>img').attr('src', '').attr('src', e.target.result)
      $('#upload-front-pass').parent().addClass('hide')
      $('#uploaded-front-pass').removeClass('hide')
      $('#uploaded-front-pass>div>img').addClass('show')
      $('#uploaded-front-pass>div>img')
        .attr('src', '')
        .attr('src', e.target.result)
      $('.next-btn').attr('disabled', false)
    }
    reader.readAsDataURL(input.files[0])
  }
}

function readBackURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader()
    reader.onload = function (e) {
      $('#upload-back').parent().addClass('hide')
      $('#uploaded-back').removeClass('hide')
      $('#uploaded-back>div>img').addClass('show')
      $('#uploaded-back>div>img').attr('src', '').attr('src', e.target.result)
      $('.finish-btn').attr('disabled', false)
      $('.next-btn').attr('disabled', false)
    }
    reader.readAsDataURL(input.files[0])
  }
}

$('.next-btn').click(function (e) {
  e.preventDefault()
  if (!$(this).attr('disabled')) {
    $(this).hide()
    $('.finish-btn').removeClass('hide')
    $('.tab-head ul li').removeClass('active')
    $('.tab-head ul li:first-child').addClass('verified')
    $('.tab-head ul li:last-child').addClass('active')
    $('.extras-popup .tab-content li').removeClass('active')
    $('.extras-popup .tab-content li:last-child').fadeIn()
    $('.extras-popup .tab-content li:first-child').fadeOut()
  }
})
$('.finish-btn').click(function (e) {
  e.preventDefault()
  if (!$(this).attr('disabled')) {
    $('.bodyoverlay').removeClass('show').addClass('hide')
    $('.order-tracking-popup').removeClass('show').addClass('hide')
    $('#card-upload-button>span').html('EDIT/UPLOADED ID')
  }
})
$('#front-tab').click(function (e) {
  return false
  /*
  $('.finish-btn').addClass('hide')
  $('.next-btn').show()
  $('.tab-head ul li').removeClass('active')
  $('.tab-head ul li:first-child').addClass('active')
  $('.extras-popup .tab-content li').removeClass('active')
  $('.extras-popup .tab-content li:first-child').fadeIn()
  $('.extras-popup .tab-content li:last-child').fadeOut()
  */
})
$('.delete').click(function (e) {
  e.preventDefault()
  $('.next-btn').attr('disabled', true)
  $('.finish-btn').attr('disabled', true)
  $(this)
    .parent()
    .parent()
    .parent()
    .siblings('.drag-file')
    .removeClass('hide')
    .addClass('show')
  $(this).parent().parent().parent().addClass('hide')
  // console.log(img.attr('id'));
})
var darkbox, darkboxClose
$('.preview').click(function (e) {
  e.preventDefault()
  darkbox = $('<div/>', {
    id: 'darkbox',
    appendTo: 'body',
  })
  darkboxClose = $('<a/>', {
    id: 'darkbox_close',
    appendTo: darkbox,
    on: {
      'touchstart mousedown': function (e) {
        e.preventDefault()
        darkbox.removeClass('show')
      },
    },
  })
  var src = $(this).parent().siblings('img').attr('src')
  darkbox.css({ backgroundImage: 'none' })
  showImage(src)
})

function showImage(src) {
  // Get size of window so that we can define if
  // background-size needs to be "contain" or "auto".
  var doc = document.documentElement,
    docW = Math.max(doc.clientWidth, window.innerWidth || 0),
    docH = Math.max(doc.clientHeight, window.innerHeight || 0)

  darkbox.addClass('show spinner')

  setTimeout(function () {
    $('<img/>')
      .on('load', function () {
        var bigger = this.width > docW || this.height > docH
        darkbox.removeClass('spinner').css({
          backgroundImage: "url('" + src + "')",
          backgroundSize: bigger ? 'contain' : 'auto',
        })
      })
      .attr('src', src)
  }, 500)
}

$(document).ready(function () {
  var charLimit1 = 1
  $('.otp_inputs1')
    .keydown(function (e) {
      var keys = [
        8,
        9,
        /*16, 17, 18,*/ 19,
        20,
        27,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        45,
        46,
        144,
        145,
      ]

      if (e.which == 8 && this.value.length == 0) {
        $(this).prev('.otp_inputs1').focus()
      } else if ($.inArray(e.which, keys) >= 0) {
        return true
      } else if (this.value.length >= charLimit1) {
        $(this).next('.otp_inputs1').focus()
        return false
      } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
        return false
      }
    })
    .keyup(function () {
      if (this.value.length >= charLimit1) {
        $(this).next('.otp_inputs1').focus()
        return false
      }
    })

  var charLimit2 = 1
  $('.otp_inputs2')
    .keydown(function (e) {
      var keys = [
        8,
        9,
        /*16, 17, 18,*/ 19,
        20,
        27,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        45,
        46,
        144,
        145,
      ]

      if (e.which == 8 && this.value.length == 0) {
        $(this).prev('.otp_inputs2').focus()
      } else if ($.inArray(e.which, keys) >= 0) {
        return true
      } else if (this.value.length >= charLimit2) {
        $(this).next('.otp_inputs2').focus()
        return false
      } else if (e.shiftKey || e.which <= 48 || e.which >= 58) {
        return false
      }
    })
    .keyup(function () {
      if (this.value.length >= charLimit2) {
        $(this).next('.otp_inputs2').focus()
        return false
      }
    })
})

// Javascript to enable link to tab
var url = document.location.toString()
if (url.match('#')) {
  $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show')
}

// Change hash for page-reload
if (location.hash)
  $('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash
    //e.target.hash
  })

//CODE BY HAMZA - changes start from here
// 30nov
function operate_down_timers_counter(view, interval) {
  // console.log(view);
  var interval = interval
  var duration = 10

  $(document).ready(function () {
    if ($('input[name="usr_existing_number_chk1"]').prop('checked') == true) {
      // var display = $('#fetch_down_time_counter_1');
      // startTimer(10, display);
      // console.log(duration);

      if (interval) {
        // console.log(interval);
        // console.log('Hello');
        clearInterval(interval)
      }
      var timer = duration,
        minutes,
        seconds
      interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        if (view == 1) {
          $('#fetch_down_time_counter_1').html(minutes + ':' + seconds)
        } else {
          $('#fetch_down_time_counter_2').html(minutes + ':' + seconds)
        }
        console.log(minutes + ':' + seconds)
        if (--timer < 0) {
          clearInterval(interval)
          timer = '00:00'
        }
      }, 1000)

      $('.validate_otp_number_btn').click(function () {
        clearInterval(interval)

        if ($('.verify-account').hasClass('show')) {
          $('.verify-account').removeClass('show')
          $('.bodyoverlay').removeClass('show')
          $('#fetch_number_to_valid_error').css('display', 'none')
          $('#fetch_number_to_valid_success').css('display', 'inline-block')
        }

        if ($('.resent-otp').hasClass('show')) {
          $('.resent-otp').removeClass('show')
          $('.bodyoverlay').removeClass('show')
          $('#fetch_number_to_valid_error').css('display', 'none')
          $('#fetch_number_to_valid_success').css('display', 'inline-block')
        }
      })

      $('.close-tracking').click(function () {
        clearInterval(interval)
      })

      $('.resend-pin-addons').click(function () {
        $('.verify-account').removeClass('show')
        $('.resent-otp').addClass('show')
        $('.bodyoverlay').addClass('show')
        operate_down_timers_counter(2, interval)
      })
    }
  })
}

$(function () {
  $('#validate_number_chk_btn').click(function () {
    operate_down_timers_counter(1)
  })
})
var total_price = 0
var currapp_ez_recharge_total_price = 0.0
function calculate_price(input) {
  //   var checkbox = $('.number-dropdown input[type="checkbox"]');
  // var checked = checkbox.filter(':checked');
  // checked.each(function () {
  //   var value = $(this).data('value');
  //   total_price = total_price - (-value);
  // });
  // console.log(input);
  // console.log(input.parent().find('.autopay-data-number').html());
  if (
    input.parent().find('.autopay-data-number').html() == 'All' ||
    input.parent().find('.autopay-data-number').html() == 'الجميع'
  ) {
    // console.log(input);
    if (input.is(':checked')) {
      $(input.parent().siblings()).each(function () {
        var value = $(this).find('input').data('value')
        total_price = total_price - -value
      })
    } else {
      total_price = 0
    }
  } else {
    if (input.is(':checked')) {
      var value = input.data('value')
      total_price = total_price - -value
    } else {
      var value = input.data('value')
      total_price = total_price - value
    }
  }
  // console.log(total_price);
  // console.log(total_price.toFixed(2));
  $('.ammount-pricing h3 span').text(total_price.toFixed(2))
  // $('.total_plan_price').text(total_price);
}
$(document).ready(function (e) {
  $('.number-dropdown li input').click(function () {
    var input = $(this)
    // console.log(input.parent().find('.autopay-data-number').text());
    if (
      input.parent().find('.autopay-data-number').text() == 'All' ||
      $(this).parent().find('.autopay-data-number').text() == 'الجميع'
    ) {
      if (!input.is(':checked')) {
        input.parent().removeClass('active')
        input.parent().siblings().removeClass('active')
        $(input.parent().siblings()).each(function () {
          $(this).find('input').removeAttr('checked')
        })
      } else {
        input.parent().addClass('active')
        input.parent().siblings().addClass('active')
        $(input.parent().siblings()).each(function () {
          $(this).find('input').attr('checked', true)
        })
      }
    } else {
      input.parent().toggleClass('active')
    }
    // console.log(input);
    calculate_price(input)
  })

  $(
    '#select-number, span.dropdown-arrow, .search-input, span.number-span, .dropdown-arrow img',
  ).click(function (event) {
    console.log('clicked')
    event.stopPropagation()
    $('.number-dropdown').slideToggle()
    var checkbox = $('.number-dropdown input[type="checkbox"]')
    if ($(this).data('page') == 'eezee-recharge' && checkbox.is(':checked')) {
      var checked = checkbox.filter(':checked')
      $('#other-numbers').empty()
      checked.each(function () {
        var data_del_index = $(this).attr('data-index')
        if (
          $(this).parent().find('.autopay-data-number').text() == 'All' ||
          $(this).parent().find('.autopay-data-number').text() == 'الجميع'
        ) {
          return
        }
        var text = $(this).parent().find('.autopay-data-number').html()
        var pos1 = text.indexOf('>')
        var pos2 = text.indexOf('<', pos1)
        var name = text.slice(pos1 + 1, pos2)
        var number = text.slice(0, text.search('<span>')).trim()
        var placeholder = number + ' (' + name + ')'
        if ($('html').attr('lang') != 'ar') {
          $('#other-numbers').append(
            '<div class="nmbr-sec p-3"><ul><li><div class="row"><div class="col-12"><div class="quick-select"><div class="pay-for-inputs"><div class="form-group"><input type="text" name="" placeholder="' +
              placeholder +
              '" style="border: 0"><a title="Delete" data-del-index="' +
              data_del_index +
              '" class="delete-icon" href="javascript:void(0)"><i class="icon-delete"></i></a></div></div></div></div></div></li></ul><div class="autopay-inner"><div id="home_delivery"> <span class="autopay-select-label">Choose Amount</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"> <span data-price="20" class="kd-recharge">KD 20</span><span class="validity-days">Due Fees</span></div><input type="text" autocomplete="off" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"> <img src="./images/auto-pay-arrow-down.svg" alt=""> </span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list1 pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"> <a href="javascript:void(0)" data-name="Validity 180 Days" data-number="KD 20" data-price="20"><span class="autopay-data-number">KD 20</span> <span class="autopay-data-name">Validity 180 Days</span></a></li><li tabindex="2"> <a href="javascript:void(0)" data-name="Validity 365 Days" data-number="KD 25" data-price="25"><span class="autopay-data-number">KD 25</span> <span class="autopay-data-name">Validity 365 Days</span></a></li><li tabindex="3"> <a href="javascript:void(0)" data-name="Other amount" data-number="KD 0.0" data-price="0.0"><span class="autopay-data-number">Other Amount</span> <span class="autopay-data-name"></span></a></li></ul></div></div></div></div></div></div><div class="other_amount_block" class="mt-3" style="display: none;"><span class="autopay-select-label">Other Amount</span><div class="form-group"><label class="input-label">KD</label><input class="kd-input" id="due_fees_other_amount"name="due_fees_other_amount" type="number" placeholder="0.00" value="" onKeyUp="this.value=this.value.replace(/[^0-9.]/g, "").replace(/(..*)./g, "$1"); /></div></div></div></div>',
          )
        } else {
          $('#other-numbers').append(
            '<div class="nmbr-sec p-3"><ul><li><div class="row"><div class="col-12"><div class="quick-select"><div class="pay-for-inputs"><div class="form-group"><input type="text" name="" placeholder="' +
              placeholder +
              '" style="border: 0"><a title="حذف" data-del-index="' +
              data_del_index +
              '" class="delete-icon" href="javascript:void(0)"><i class="icon-delete"></i></a></div></div></div></div></div></li></ul><div class="autopay-inner"><div id="home_delivery"> <span class="autopay-select-label">اختيار مبلغ</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"> <span data-price="20" class="kd-recharge">KD 20</span><span class="validity-days">الرسوم المستحقة</span></div><input type="text" autocomplete="off" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"> <img src="./images/auto-pay-arrow-down.svg" alt=""> </span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list1 pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"> <a href="javascript:void(0)" data-name="الصلاحية 180 يوم" data-number="KD 20" data-price="20"><span class="autopay-data-number">KD 20</span> <span class="autopay-data-name">الصلاحية 180 يوم</span></a></li><li tabindex="2"> <a href="javascript:void(0)" data-name="الصلاحية 365 يوم" data-number="KD 25" data-price="25"><span class="autopay-data-number">KD 25</span> <span class="autopay-data-name">الصلاحية 365 يوم</span></a></li><li tabindex="3"> <a href="javascript:void(0)" data-name="كمية اخرى" data-number="KD 0.0" data-price="0.0"><span class="autopay-data-number">كمية اخرى</span> <span class="autopay-data-name"></span></a></li></ul></div></div></div></div></div></div><div class="other_amount_block" class="mt-3" style="display: none;"><span class="autopay-select-label">كمية اخرى</span><div class="form-group"><label class="input-label">KD</label><input class="kd-input" id="due_fees_other_amount"name="due_fees_other_amount" type="number" placeholder="0.00" value="" onKeyUp="this.value=this.value.replace(/[^0-9.]/g, "").replace(/(..*)./g, "$1"); /></div></div></div></div>',
          )
        }
      })
    } /* else { */
    //alert('2222');
    var count = checkbox.filter(':checked').length
    console.log('COUNT: ' + count)
    if (count == 1) {
      var text = checkbox
        .filter(':checked')
        .parent()
        .find('.autopay-data-number')
        .html()
      // console.log('TEXT: '+text);
      $('.monthly-amount-display .number-span').empty().html(text)
    } else {
      var selected_checkbox
      checkbox.filter(':checked').each(function () {
        if (
          $(this).parent().find('.autopay-data-number').text() == 'All' ||
          $(this).parent().find('.autopay-data-number').text() == 'الجميع'
        ) {
          selected_checkbox = $(this)
          return false
        }
      })
      // console.log(selected_checkbox);
      var totl_nums = $('.number-dropdown-ez input[type="checkbox"]').length
        ? $('.number-dropdown-ez input[type="checkbox"]').length
        : 5
      if ($('html').attr('lang') != 'ar') {
        if (
          selected_checkbox &&
          selected_checkbox.parent().find('.autopay-data-number').text() ==
            'All'
        ) {
          $('.number-span')
            .empty()
            .html(count - 1 + ' of ' + totl_nums + ' selected')
        } else {
          $('.number-span')
            .empty()
            .html(count + ' of ' + totl_nums + ' selected')
        }
      } else {
        if (
          selected_checkbox &&
          selected_checkbox.parent().find('.autopay-data-number').text() ==
            'الجميع'
        ) {
          $('.number-span')
            .empty()
            .html(count - 1 + ' من ' + totl_nums + ' مختار')
        } else {
          $('.number-span')
            .empty()
            .html(count + ' من ' + totl_nums + ' مختار')
        }
      }
    }
    //currapp_ez_recharge_cal_total();
    currapp_other_number_cal_total()
    // }
  })

  $('.pay-radio input[name="payment"]').change(function () {
    var radio = $(this)
    var value = radio.val()
    if (value == '1') {
      $('.enter-amount').fadeOut(1000)
      var price = $('.ammount-pricing h3 span').text()
      $('.total_plan_price').empty().html(price)
    } else if (value == '2') {
      $('.enter-amount').fadeOut(1000)
      var price = $('.ammount-pricing p span').text()
      // console.log(price);
      $('.total_plan_price').empty().html(price)
    } else {
      $('.total_plan_price').empty().html('00.00')
      $('.enter-amount').fadeIn(1000)
    }
  })
  $('.enter-amount input').keyup(function () {
    var val = $(this).val()
    if (val) {
      $('.total_plan_price').empty().html(val)
    } else {
      $('.total_plan_price').empty().html('00.00')
    }
  })
  // $('.delete-icon').click(function (){
  // })
})

var currapp_other_number_total_price = 0.0
$(document).on('keypress', '.pay-for-inputs input', function (e) {
  var input = $(this)
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false
  }
  // console.log($(this).val());
  // input.parents('.nmbr-sec').find('#home_delivery').fadeIn(1000);
})

document.addEventListener('click', function () {
  $('.number-dropdown').slideUp()
  if ($('.number-dropdown').is(':visible')) {
    var checkbox = $('.number-dropdown input[type="checkbox"]')
    if (checkbox.is(':checked')) {
      var checked = checkbox.filter(':checked')
      $('#other-numbers').empty()
      checked.each(function () {
        var data_del_index = $(this).attr('data-index')

        if (
          $(this).parent().find('.autopay-data-number').text() == 'All' ||
          $(this).parent().find('.autopay-data-number').text() == 'الجميع'
        ) {
          return
        }
        var text = $(this).parent().find('.autopay-data-number').html()
        var pos1 = text.indexOf('>')
        var pos2 = text.indexOf('<', pos1)
        var name = text.slice(pos1 + 1, pos2)
        var number = text.slice(0, text.search('<span>')).trim()

        var placeholder = number + ' (' + name + ')'
        if ($('html').attr('lang') != 'ar') {
          $('#other-numbers').append(
            '<div class="nmbr-sec p-3"><ul><li><div class="row"><div class="col-12"><div class="quick-select"><div class="pay-for-inputs"><div class="form-group"><input type="text" name="" placeholder="' +
              placeholder +
              '" style="border: 0"><a data-del-index="' +
              data_del_index +
              '" title="Delete" class="delete-icon" href="javascript:void(0)"><i class="icon-delete"></i></a></div></div></div></div></div></li></ul><div class="autopay-inner"><div id="home_delivery"> <span class="autopay-select-label">Choose Amount</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"> <span data-price="20" class="kd-recharge">KD 20</span><span class="validity-days">Due Fees</span></div><input type="text" autocomplete="off" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"> <img src="./images/auto-pay-arrow-down.svg" alt=""> </span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list1 pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"> <a href="javascript:void(0)" data-name="Validity 180 Days" data-number="KD 20" data-price="20"><span class="autopay-data-number">KD 20</span> <span class="autopay-data-name">Validity 180 Days</span></a></li><li tabindex="2"> <a href="javascript:void(0)" data-name="Validity 365 Days" data-number="KD 25" data-price="25"><span class="autopay-data-number">KD 25</span> <span class="autopay-data-name">Validity 365 Days</span></a></li><li tabindex="3"> <a href="javascript:void(0)" data-name="Other amount" data-number="KD 0.0" data-price="0.0"><span class="autopay-data-number">Other Amount</span> <span class="autopay-data-name"></span></a></li></ul></div></div></div></div></div></div><div class="other_amount_block" class="mt-3" style="display: none;"><span class="autopay-select-label">Other Amount</span><div class="form-group"><label class="input-label">KD</label><input class="kd-input" id="due_fees_other_amount"name="due_fees_other_amount" type="number" placeholder="0.00" value="" onKeyUp="this.value=this.value.replace(/[^0-9.]/g, "").replace(/(..*)./g, "$1"); /></div></div></div></div>',
          )
        } else {
          $('#other-numbers').append(
            '<div class="nmbr-sec p-3"><ul><li><div class="row"><div class="col-12"><div class="quick-select"><div class="pay-for-inputs"><div class="form-group"><input type="text" name="" placeholder="' +
              placeholder +
              '" style="border: 0"><a title="حذف" data-del-index="' +
              data_del_index +
              '" class="delete-icon" href="javascript:void(0)"><i class="icon-delete"></i></a></div></div></div></div></div></li></ul><div class="autopay-inner"><div id="home_delivery"> <span class="autopay-select-label">اختيار مبلغ</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"> <span data-price="20" class="kd-recharge">د.ك 20</span><span class="validity-days">الرسوم المستحقة</span></div><input type="text" autocomplete="off" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"> <img src="./images/auto-pay-arrow-down.svg" alt=""> </span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list1 pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"> <a href="javascript:void(0)" data-name="الصلاحية 180 يوم" data-number="د.ك 20" data-price="20"><span class="autopay-data-number">د.ك 20</span> <span class="autopay-data-name">الصلاحية 180 يوم</span></a></li><li tabindex="2"> <a href="javascript:void(0)" data-name="الصلاحية 365 يوم" data-number="د.ك 25" data-price="25"><span class="autopay-data-number">د.ك 25</span> <span class="autopay-data-name">الصلاحية 365 يوم</span></a></li><li tabindex="3"> <a href="javascript:void(0)" data-name="كمية اخرى" data-number="د.ك 0.0" data-price="0.0"><span class="autopay-data-number">كمية اخرى</span> <span class="autopay-data-name"></span></a></li></ul></div></div></div></div></div></div><div class="other_amount_block" class="mt-3" style="display: none;"><span class="autopay-select-label">كمية اخرى</span><div class="form-group"><label class="input-label">د.ك</label><input class="kd-input" id="due_fees_other_amount"name="due_fees_other_amount" type="number" placeholder="0.00" value="" onKeyUp="this.value=this.value.replace(/[^0-9.]/g, "").replace(/(..*)./g, "$1"); /></div></div></div></div>',
          )
        }
      })
    } /* else { */
    var count = checkbox.filter(':checked').length
    console.log('COUNT: ' + count)

    if (count == 0) {
      if ($('html').attr('lang') != 'ar') {
        $('.monthly-amount-display .number-span')
          .empty()
          .html('Select a Service')
      } else {
        $('.monthly-amount-display .number-span').empty().html('اختر الخدمة')
      }
    } else if (count == 1) {
      var text = checkbox
        .filter(':checked')
        .parent()
        .find('.autopay-data-number')
        .html()
      // console.log('TEXT: '+text);
      $('.monthly-amount-display .number-span').empty().html(text)
    } else {
      var selected_checkbox
      checkbox.filter(':checked').each(function () {
        if (
          $(this).parent().find('.autopay-data-number').text() == 'All' ||
          $(this).parent().find('.autopay-data-number').text() == 'الجميع'
        ) {
          selected_checkbox = $(this)
          return false
        }
      })
      // console.log(selected_checkbox);
      var totl_nums = $('.number-dropdown-ez input[type="checkbox"]').length
        ? $('.number-dropdown-ez input[type="checkbox"]').length
        : 5
      if ($('html').attr('lang') != 'ar') {
        if (
          selected_checkbox &&
          selected_checkbox.parent().find('.autopay-data-number').text() ==
            'All'
        ) {
          $('.monthly-amount-display .number-span')
            .empty()
            .html(count - 1 + ' of ' + totl_nums + ' selected')
        } else {
          $('.monthly-amount-display .number-span')
            .empty()
            .html(count + ' of ' + totl_nums + ' selected')
        }
      } else {
        if (
          selected_checkbox &&
          selected_checkbox.parent().find('.autopay-data-number').text() ==
            'الجميع'
        ) {
          $('.monthly-amount-display .number-span')
            .empty()
            .html(count - 1 + ' من ' + totl_nums + ' مختار')
        } else {
          $('.monthly-amount-display .number-span')
            .empty()
            .html(count + ' من ' + totl_nums + ' مختار')
        }
      }
    }
    currapp_ez_recharge_cal_total()
  }
})

$(".number-dropdown-ez input[type='checkbox'].service_cls").on(
  'click',
  function (event) {
    var totl_nums = $('.number-dropdown-ez input[type="checkbox"]').length
      ? $('.number-dropdown-ez input[type="checkbox"]').length
      : 5
    var totl_chkd_nums = $('.number-dropdown-ez input[type="checkbox"]:checked')
      .length

    if ($('html').attr('lang') != 'ar') {
      if (totl_chkd_nums == 0) {
        $('.number-span').empty().html('Select a Service')
      } else if (totl_chkd_nums == 1) {
        var text_val = $('.number-dropdown-ez input[type="checkbox"]')
          .filter(':checked')
          .parent()
          .find('.autopay-data-number')
          .html()
        $('.monthly-amount-display .number-span').empty().html(text_val)
      } else {
        $('.monthly-amount-display .number-span')
          .empty()
          .html(totl_chkd_nums + ' of ' + totl_nums + ' selected')
      }
    } else {
      if (totl_chkd_nums == 0) {
        $('.number-span').empty().html('اختر الخدمة')
      } else if (totl_chkd_nums == 1) {
        var text_val = $('.number-dropdown-ez input[type="checkbox"]')
          .filter(':checked')
          .parent()
          .find('.autopay-data-number')
          .html()
        $('.monthly-amount-display .number-span').empty().html(text_val)
      } else {
        $('.monthly-amount-display .number-span')
          .empty()
          .html(totl_chkd_nums + ' من ' + totl_nums + ' مختار')
      }
    }
  },
)

$('.number-dropdown,.del-popup-section').on('click', function (event) {
  event.stopPropagation()
})

// $(document).on('click', '.number-boxes .existing-line-list a', function() {
//   console.log('meow');
//   currapp_other_number_cal_total()
// });

$(document).on('keyup', '.kd-input', function () {
  currapp_other_number_cal_total()
})

function addfield() {
  if ($('html').attr('lang') != 'ar') {
    $('#other-numbers').append(
      '<div class="nmbr-sec p-3"><ul><li><div class="row"><div class="col-12"><div class="quick-select"><div class="pay-for-inputs"><div class="form-group"><input type="text" name="" placeholder="Enter Number: 9XXXXXX"><a title="Delete" class="delete-icon" href="javascript:void(0)"><i class="icon-delete"></i></a></div></div></div></div></div></li></ul><div class="autopay-inner"><div id="home_delivery"> <span class="autopay-select-label">Choose Amount</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"> <span data-price="20" class="kd-recharge">KD 20</span><span class="validity-days">Due Fees</span></div><input type="text" autocomplete="off" readonly="true" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"> <img src="./images/auto-pay-arrow-down.svg" alt=""> </span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"> <a href="javascript:void(0)" data-name="Validity 180 Days" data-number="KD 20" data-price="20"><span class="autopay-data-number">KD 20</span> <span class="autopay-data-name">Validity 180 Days</span></a></li><li tabindex="2"> <a href="javascript:void(0)" data-name="Validity 365 Days" data-number="KD 25" data-price="25"><span class="autopay-data-number">KD 25</span> <span class="autopay-data-name">Validity 365 Days</span></a></li><li tabindex="3"> <a href="javascript:void(0)" data-name="Other amount" data-number="KD 0.0" data-price="0.0"><span class="autopay-data-number">Other Amount</span> <span class="autopay-data-name"></span></a></li></ul></div></div></div></div></div></div><div class="other_amount_block" class="mt-3" style="display: none;"><span class="autopay-select-label">Other Amount</span><div class="form-group"><label class="input-label">KD</label><input class="kd-input" id="due_fees_other_amount" name="due_fees_other_amount" type="number" placeholder="0.00" value="" onKeyUp="this.value=this.value.replace(/[^0-9.]/g, "").replace(/(..*)./g, "$1"); /></div></div></div></div>',
    )
  } else {
    $('#other-numbers').append(
      '<div class="nmbr-sec p-3"><ul><li><div class="row"><div class="col-12"><div class="quick-select"><div class="pay-for-inputs"><div class="form-group"><input type="text" name="" placeholder="أدخل الرقم: 9XXXXXX"><a title="حذف" class="delete-icon" href="javascript:void(0)"><i class="icon-delete"></i></a></div></div></div></div></div></li></ul><div class="autopay-inner"><div id="home_delivery"> <span class="autopay-select-label">اختيار مبلغ</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"> <span data-price="20" class="kd-recharge">د.ك 20</span><span class="validity-days">الرسوم المستحقة</span></div><input type="text" autocomplete="off" readonly="true" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"> <img src="./images/auto-pay-arrow-down.svg" alt=""> </span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"> <a href="javascript:void(0)" data-name="الصلاحية 180 يوم" data-number="د.ك 20" data-price="20"><span class="autopay-data-number">د.ك 20</span> <span class="autopay-data-name">الصلاحية 180 يوم</span></a></li><li tabindex="2"> <a href="javascript:void(0)" data-name="الصلاحية 365 يوم" data-number="د.ك 25" data-price="25"><span class="autopay-data-number">د.ك 25</span> <span class="autopay-data-name">الصلاحية 365 يوم</span></a></li><li tabindex="3"> <a href="javascript:void(0)" data-name="كمية اخرى" data-number="د.ك 0.0" data-price="0.0"><span class="autopay-data-number">كمية اخرى</span> <span class="autopay-data-name"></span></a></li></ul></div></div></div></div></div></div><div class="other_amount_block" class="mt-3" style="display: none;"><span class="autopay-select-label">كمية اخرى</span><div class="form-group"><label class="input-label">د.ك</label><input class="kd-input" id="due_fees_other_amount" name="due_fees_other_amount" type="number" placeholder="0.00" value="" onKeyUp="this.value=this.value.replace(/[^0-9.]/g, "").replace(/(..*)./g, "$1"); /></div></div></div></div>',
    )
  }
  currapp_other_number_cal_total()
}
function currapp_other_number_cal_total() {
  var price = 0
  var totalPrice = 0
  //$(".search-input .recharge-amount-display span").each(function(){

  if ($('.flag-number .active a').length) {
    $('.flag-number .active a').each(function () {
      if ($(this).data('price')) {
        price = parseInt($(this).data('price'))
        if (typeof price !== 'undefined') {
          totalPrice += price
        }
      }
    })
  }

  if ($('input[type=number]').length) {
    $('input[type=number]').each(function () {
      price = parseInt($(this).val())

      if (!isNaN(price)) {
        totalPrice += price
      }
    })
  }

  setTimeout(() => {
    $('.total_plan_price').html(totalPrice.toFixed(2))
  }, 300)

  //$('.total_plan_price').html(totalPrice.toFixed(2));

  /*
  if(totalPrice >0){
      $('.total_plan_price').html(totalPrice.toFixed(2));
  }else{
    $('.total_plan_price').html('0.00');	
  }*/

  /*currapp_other_number_total_price = 0.00;
  var price_span = $.each($('.number-boxes .nmbr-sec .recharge-amount-display span:first'), function () {
    // console.log($(this).data('price'));
    return $(this);
  });
  console.log(price_span);
  $.each(price_span, function () {
    console.log($(this).attr('data-price'));
    currapp_other_number_total_price = currapp_other_number_total_price - (-$(this).data('price'));
  });
  console.log(currapp_other_number_total_price);
  $('.total_plan_price').empty().html(currapp_other_number_total_price.toFixed(2));*/
}

$(document).on('click', '.delete-icon', function (event) {
  //var num_checkbox = $('.number-dropdown input[type="checkbox"]:checked').length;
  //alert('ssss ===>> ' + num_checkbox );

  var data_del_indx = 0
  if ($(this).attr('data-del-index')) {
    data_del_indx = $(this).attr('data-del-index')
  }

  event.stopPropagation()
  var del = $(this)
  $('.delpopup-section #popup-small').removeClass('hide')
  $('.del-popup-section .bodyoverlay').removeClass('hide')
  $('.del-popup-section #popup-small').addClass('show')
  $('.del-popup-section .bodyoverlay').addClass('show')

  /*var mparent = $(this).parent();
  var child_index = $(mparent).index();
  alert( " mm ======> " + child_index );
	
 ///alert( del.parents('.nmbr-sec').index() );
 alert( " nn ======> " + del.parents('.nmbr-sec').index() );*/

  $('.del-popup-section .confirm-popup-small').click(function (e) {
    //alert( "Index: " + listItem.index( "li" ) );
    //alert( "Index: " + del.index() );

    if (del.parents('.nmbr-sec').index() >= 0) {
      if (data_del_indx > 0) {
        var chkElem_id = '.number-dropdown #select-' + data_del_indx
        $(chkElem_id).click() //.prop("checked", false);
        $(chkElem_id).parent().removeClass('active')
        //$(chkElem_id).prop("checked", false);

        var num_checkbox = $('.number-dropdown input[type="checkbox"]:checked')
          .length
        //'.number-dropdown input[type="checkbox"]:checked')
        var chk_all = 0
        if ($('.number-dropdown #select-1:checked')) {
          chk_all = 1
        } else {
          chk_all = 0
        }

        var net_num_checkbox = num_checkbox - chk_all
        if (net_num_checkbox <= 5 && chk_all == 1) {
          $('.number-dropdown #select-1').prop('checked', false)
          $('.number-dropdown #select-1').parent().removeClass('active')
        }

        var num_checkbox = $('.number-dropdown input[type="checkbox"]:checked')
          .length
        var totl_nums = $('.number-dropdown-ez input[type="checkbox"]').length
          ? $('.number-dropdown-ez input[type="checkbox"]').length
          : 5

        if (num_checkbox == 0) {
          if ($('html').attr('lang') != 'ar') {
            $('.monthly-amount-display .number-span')
              .empty()
              .html('Select a Numbers')
          } else {
            $('.monthly-amount-display .number-span').empty().html('حدد أرقام')
          }
        } else if (num_checkbox == 1) {
          var text = $('.number-dropdown input[type="checkbox"]')
            .filter(':checked')
            .parent()
            .find('.autopay-data-number')
            .html()
          $('.monthly-amount-display .number-span').empty().html(text)
        } else {
          if ($('html').attr('lang') != 'ar') {
            $('.number-span')
              .empty()
              .html(num_checkbox + ' of ' + totl_nums + ' selected')
          } else {
            $('.number-span')
              .empty()
              .html(num_checkbox + ' من ' + totl_nums + ' مختار')
          }
        }
      }

      del.parents('.nmbr-sec').remove()
      $(
        '.del-popup-section .order-tracking-popup,.del-popup-section .bodyoverlay',
      ).removeClass('show')
      currapp_other_number_cal_total()
    }
  })

  $('.del-popup-section .cancel-popup-small').click(function (e) {
    $(
      '.del-popup-section .order-tracking-popup,.del-popup-section .bodyoverlay',
    ).removeClass('show')
  })
})
function addotherfield() {
  if ($('html').attr('lang') != 'ar') {
    $('#currapp-ez-recharge-add-fields').append(
      '<div class="autopay-outter pl-0 pr-0 mb-4 pt-4"><div class="quick-select"><div class="row justify-content-md-center"><div class="col-md-12 col-12"><div class="autopay-inner"><div class="quickpay-select"><span class="autopay-select-label d-flex">I whould like to recharge for<a title="Delete" class="delete-icon currapp-quickpay-ez-del-icon ml-auto" href="javascript:void(0)"><i class="icon-delete"></i></a></span><div class="custom-radio form-group mb-0"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form class="existing-1"><div class="input-group form-group m-0 search-fields search-input currapp-ez-recharge"><div class="monthly-amount-display"><span class="kd-recharge currapp-ez-recharge-span">Other Number</span></div><input type="text" class="form-control custom-input-new main_input d-flex existing-line-input" id="" placeholder=""><span class="input-group-addon  border-0"><img src="./images/auto-pay-arrow-down.svg" alt=""></span></div></form><div class="flags-list existing-line-list flags-list-mobile currapp-ez-recharge-list"><ul id="flag-numbers"><li> <a href="javascript:void(0)" data-name="Validity 7 Days" data-number="Recharge Voucher"><span class="autopay-data-number">Recharge Voucher</span> </a> </li><li> <a href="javascript:void(0)" data-name="Validity 15 Days" data-number="Other Number"><span class="autopay-data-number">Other Number</span></a> </li></ul></div></div></div></div></div><div class="pay-for-inputs recharge-input currapp-ez-recharge-input"><div class="form-group"><input type="text" class="" placeholder="Enter Number: 9XXXXX"></div></div><div class="autopay-inner currapp-ez-recharge-dropdown" style="display: none;"><div id="home_delivery"><span class="autopay-select-label">Choose Amount</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"><span data-price="20" class="kd-recharge">KD 20</span><span class="validity-days">Due Fees</span></div><input type="text" autocomplete="off" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"><img src="./images/auto-pay-arrow-down.svg" alt=""></span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list1 pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"><a href="javascript:void(0)" data-name="Validity 180 Days" data-number="KD 20" data-price="20"><span class="autopay-data-number">KD 20</span><span class="autopay-data-name">Validity 180 Days</span></a></li><li tabindex="2"><a href="javascript:void(0)" data-name="Validity 365 Days" data-number="KD 25" data-price="25"><span class="autopay-data-number">KD 25</span><span class="autopay-data-name">Validity 365 Days</span></a></li></ul></div></div></div></div></div></div></div></div></div></div></div></div></div>',
    )
  } else {
    $('#currapp-ez-recharge-add-fields').append(
      '<div class="autopay-outter pl-0 pr-0 mb-4 pt-4"><div class="quick-select"><div class="row justify-content-md-center"><div class="col-md-12 col-12"><div class="autopay-inner"><div class="quickpay-select"><span class="autopay-select-label d-flex">أود إعادة الشحن ل<a title="حذف" class="delete-icon currapp-quickpay-ez-del-icon mr-auto" href="javascript:void(0)"><i class="icon-delete"></i></a></span><div class="custom-radio form-group mb-0"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form  class="existing-1"><div class="input-group form-group m-0 search-fields search-input currapp-ez-recharge"><div class="monthly-amount-display"><span class="kd-recharge currapp-ez-recharge-span">رقم آخر</span></div><input type="text" class="form-control custom-input-new main_input d-flex existing-line-input" id="" placeholder=""><span class="input-group-addon  border-0"><img src="./images/auto-pay-arrow-down.svg" alt=""></span></div></form><div class="flags-list existing-line-list flags-list-mobile currapp-ez-recharge-list"><ul id="flag-numbers"><li> <a href="javascript:void(0)" data-name="Validity 7 Days" data-number="قسيمة إعادة الشحن"><span class="autopay-data-number">قسيمة إعادة الشحن</span> </a> </li><li> <a href="javascript:void(0)" data-name="Validity 15 Days" data-number="رقم آخر"><span class="autopay-data-number">رقم آخر</span></a> </li></ul></div></div></div></div></div><div class="pay-for-inputs recharge-input currapp-ez-recharge-input"><div class="form-group"><input type="text" class="" placeholder="أدخل الرقم: 9XXXXX"></div></div><div class="autopay-inner currapp-ez-recharge-dropdown" style="display: none;"><div id="home_delivery"><span class="autopay-select-label">اختيار مبلغ</span><div class="custom-radio form-group"><div class="main-linecontent addons-logged-bar ml-0"><div class="mainline-content"><div class="form-group control-wrap mb-3 area-section"><form id="searchnmbrs" class="existing-1"><div class="input-group form-group m-0 search-fields search-input"><div class="recharge-amount-display"><span data-price="20" class="kd-recharge">د.ك 20</span><span class="validity-days">الرسوم المستحقة</span></div><input type="text" autocomplete="off" class="form-control main_input d-flex existing-line-input" id="recharge-amount-id-3"><span class="input-group-addon border-0"><img src="./images/auto-pay-arrow-down.svg" alt=""></span></div></form><div class="flags-list existing-line-list flags-list-mobile autopay-list1 pricer_element_3"><ul id="flag-numbers-cls3" class="flag-number"><li class="active" tabindex="1"><a href="javascript:void(0)" data-name="الصلاحية 180 يوم" data-number="د.ك 20" data-price="20"><span class="autopay-data-number">د.ك 20</span><span class="autopay-data-name">الصلاحية 180 يوم</span></a></li><li tabindex="2"><a href="javascript:void(0)" data-name="الصلاحية 180 يوم" data-number="د.ك 25" data-price="25"><span class="autopay-data-number">د.ك 25</span><span class="autopay-data-name">الصلاحية 180 يوم</span></a></li></ul></div></div></div></div></div></div></div></div></div></div></div></div></div>',
    )
  }
}

function currapp_ez_recharge_cal_total() {
  setTimeout(function () {
    currapp_ez_recharge_total_price = 0.0
    var price_span = $.each(
      $('#other-numbers .nmbr-sec .recharge-amount-display .kd-recharge'),
      function () {
        return $(this)
      },
    )
    // var total_price = 0.00;
    $.each(price_span, function () {
      console.log(currapp_ez_recharge_total_price)
      console.log($(this).data('price'))
      currapp_ez_recharge_total_price =
        currapp_ez_recharge_total_price - -$(this).data('price')
    })
    console.log(currapp_ez_recharge_total_price.toFixed(2))
    $('.total_plan_price')
      .empty()
      .html(currapp_ez_recharge_total_price.toFixed(2))
  }, 1000)
}

// $(document).on('click', '.currapp-ez-recharge', function(){
//   $(this).parents('.area-section').find('monthly_autopay_list').slideToggle();
// })

$(document).on(
  'click',
  '#currapp-ez-recharge-add-fields .currapp-ez-recharge-list a',
  function () {
    var value = $(this).data('number')
    $(this)
      .parents('.autopay-outter')
      .find('.currapp-ez-recharge-span')
      .text(value)
    if ($('html').attr('lang') != 'ar') {
      if (value == 'Other Number') {
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-dropdown')
          .fadeOut(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-input')
          .fadeIn(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.flag-number li')
          .removeClass('active')
        currapp_other_number_cal_total()
      } else {
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-dropdown')
          .fadeIn(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-input')
          .fadeOut(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.flag-number li:first')
          .addClass('active')

        $(this)
          .parents('.autopay-outter')
          .find('.recharge-amount-display span:first')
          .attr(
            'data-price',
            $(this)
              .parents('.autopay-outter')
              .find('.flag-number li:first a')
              .data('price'),
          )

        $(this)
          .parents('.autopay-outter')
          .find('.recharge-amount-display span:first')
          .text(
            $(this)
              .parents('.autopay-outter')
              .find('.flag-number li:first a')
              .data('number'),
          )

        currapp_other_number_cal_total()
      }
    } else {
      if (value == 'رقم آخر') {
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-dropdown')
          .fadeOut(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-input')
          .fadeIn(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.flag-number li')
          .removeClass('active')
        currapp_other_number_cal_total()
      } else {
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-dropdown')
          .fadeIn(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.currapp-ez-recharge-input')
          .fadeOut(1000)
        $(this)
          .parents('.autopay-outter')
          .find('.flag-number li:first')
          .addClass('active')

        $(this)
          .parents('.autopay-outter')
          .find('.recharge-amount-display span:first')
          .attr(
            'data-price',
            $(this)
              .parents('.autopay-outter')
              .find('.flag-number li:first a')
              .data('price'),
          )

        $(this)
          .parents('.autopay-outter')
          .find('.recharge-amount-display span:first')
          .text(
            $(this)
              .parents('.autopay-outter')
              .find('.flag-number li:first a')
              .data('number'),
          )

        currapp_other_number_cal_total()
      }
    }
  },
)

$(document).on('click', '.currapp-quickpay-ez-del-icon', function (event) {
  event.stopPropagation()
  var del = $(this)
  $('.delpopup-section #popup-small').removeClass('hide')
  $('.del-popup-section .bodyoverlay').removeClass('hide')
  $('.del-popup-section #popup-small').addClass('show')
  $('.del-popup-section .bodyoverlay').addClass('show')
  $('.del-popup-section .confirm-popup-small').click(function (e) {
    del.parents('.autopay-outter').remove()
    $(
      '.del-popup-section .order-tracking-popup,.del-popup-section .bodyoverlay',
    ).removeClass('show')
    currapp_other_number_cal_total()
  })

  $('.del-popup-section .cancel-popup-small').click(function (e) {
    $(
      '.del-popup-section .order-tracking-popup,.del-popup-section .bodyoverlay',
    ).removeClass('show')
  })
  // $(this).parents('.autopay-outter').remove();
})

operate_booking_form_popup()

function operate_booking_form_popup() {
  $(document).ready(function () {
    setTimeout(() => {
      $('.area-locator > span').click(function (e) {
        $('.area-dropdown').slideToggle()
      })

      $('.branch-locator-button .secondary-button').click(function (event) {
        event.preventDefault()
        $('.branch-appoinment-popup').show()
        $('.bodyoverlay').addClass('show')
        $('html').addClass('overflow')

        var sl_branch_item_id = $(this).attr('data-branch-item-id')
        var sl_branch_item_name = $(this).attr('data-branch-item-name')
        var sl_branch_item_address = $(this).attr('data-branch-item-address')
        var sl_branch_item_working_days = $(this).attr(
          'data-branch-item-working-days',
        )
        var sl_branch_item_working_hours = $(this).attr(
          'data-branch-item-working-hours',
        )

        $('#fetch_sl_branch_id').html(sl_branch_item_id)
        $('#fetch_sl_branch_name').html(sl_branch_item_name)
        $('#fetch_sl_branch_address').html(sl_branch_item_address)
        $('#fetch_sl_branch_working_days').html(sl_branch_item_working_days)
        $('#fetch_sl_branch_work_timing').html(sl_branch_item_working_hours)

        if ($('#fetch_step1_content').length > 0) {
          $('#fetch_step1_content').css('display', 'block')
          $('#fetch_step2_content').css('display', 'none')

          var page_lang_elmt = document.getElementsByClassName(
            'page_lang_vals_elmt',
          )
          if (page_lang_elmt[0].value == 'arabic') {
            $('#fetch_appte_heading1_msg').html('موعد الكتاب')
            $('#fetch_appte_heading2_msg').html(
              'يرجى تعبئة النموذج أدناه لحجز موعدك في أحد فروعنا.',
            )
          } else {
            $('#fetch_appte_heading1_msg').html('Book Appointment')
            $('#fetch_appte_heading2_msg').html(
              'Please fill the below form to reserve your appointment at one of our branches.',
            )
          }
        }
      })

      $('.branch-appoinment-popup .close-tracking').click(function (event) {
        event.preventDefault()
        $('.branch-appoinment-popup').hide()
        $('html').removeClass('overflow')
      })

      $('.map-details a').click(function (event) {
        event.preventDefault()
        $(this).toggleClass('active')
        $('.branch-sec .mobile-filter-item').toggle()
      })

      /*
       
      $(".map-details a").click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');  
        $(".branch-sec .col-md-4").toggle();
      });  
    	
      id="fetch_mobile_filter_options" style="display:none"
    	
      $(".map-details a").click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');  
        $(".branch-sec #fetch_mobile_filter_options").toggle();
      }); */
    }, 1000)
  })
}

function operate_branch_locator_view(paras1) {
  if (paras1 == 'map') {
    document.getElementById('fetch_view_mobile_branches_data').style.display =
      'none'
    document.getElementById('fetch_view_mobile_branches_map').style.display =
      'block'

    document.getElementById('tab_map_btn_elmnt').classList.remove('active')
    document.getElementById('tab_list_btn_elmnt').classList.remove('active')
    document.getElementById('tab_map_btn_elmnt').classList.add('active')
  } else {
    document.getElementById('fetch_view_mobile_branches_data').style.display =
      'block'
    document.getElementById('fetch_view_mobile_branches_map').style.display =
      'none'

    document.getElementById('tab_map_btn_elmnt').classList.remove('active')
    document.getElementById('tab_list_btn_elmnt').classList.remove('active')
    document.getElementById('tab_list_btn_elmnt').classList.add('active')
  }
}
