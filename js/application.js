$(function() {

  //****************************************************************************************************
  //
  // .. YEPNOPE
  //
  //****************************************************************************************************
  yepnope([

    //
    // .. HTML5 placeholder polyfill
    //
    {
      test: Modernizr.input.placeholder,
      nope: '/js/polyfill/vendor/jquery.placeholder.js'
    }

  ]);

  //
  // .. Global init form elements
  //
  $('.form').customForm(); // $('#checkbox').customForm() to init single element; $('body').customForm() to init all elements


  
  //****************************************************************************************************
  //
  // .. DIALOGS
  //
  //****************************************************************************************************
  $.arcticmodal('setDefault', {
    overlay: {
      css: {
        backgroundColor: '#000',
        opacity: .66
      }
    },
    openEffect: {
      speed: 200
    },
    closeEffect: {
      speed: 200
    }
  });



  //****************************************************************************************************
  //
  // .. SCROLL TO
  //
  //****************************************************************************************************
  $('a[data-scroll="true"]').click(function() {
    var       $this = $(this),
             anchor = $this.attr('href'),
        destination = $(anchor).offset().top;
    $('html, body').animate({scrollTop: destination}, 500);
    return false;
  });

});