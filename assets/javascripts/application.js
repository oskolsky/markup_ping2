$(function() {

  var mainSlide = $('.slider').cycle({
    fx: 'scrollHorz',
    timeout: 0,
    speed:   500,
    slides:  '.page',
    pager:   '.nav',
    pagerTemplate: '',
    centerHorz: true,
    centerVert: true
  });

  mainSlide.on('cycle-before', function(event, optionHash) {
    $('.header_t').fadeOut().text();
  });

  mainSlide.on('cycle-after', function(event, optionHash) {
    $('.scroll-pane').jScrollPane();
    $('.header_t').text(optionHash.header).fadeIn();
    $('.index_side').removeAttr('style').resizeToMaxHeight();
  });

  var defaultHdr = $('.cycle-pager-active').data('header');
  $('.header_t').text(defaultHdr).fadeIn();

  $('.scroll-pane').jScrollPane();

  $(document).ready(function () {
    $("#background-image").fullscreenBackground();
  });

  $(window).resize(function() {
    $('.scroll-pane').jScrollPane();
  });

  $('.index_side').removeAttr('style').resizeToMaxHeight();

  // SELECT DROPDOWN
  // ----------------------------------------------------------------------------------------------------
  $('.select').click(function() {
    if ( $('.select').find('.select_dropdown').is(':hidden') ) {
      $(this).addClass('__active');
      $(this).find('.select_dropdown').show();
    } else {
      $(this).removeClass('__active');
      $(this).find('.select_dropdown').hide();
    }
    return false;
  });

  $('.select').find('dd').click(function() {
    var value = $(this).text();
    $('.select_hidden').attr('value', value);
    $('.select_title').text(value);
    $('.select').find('.select_dropdown').hide();
    $('.select').removeClass('__active');
    return false;
  });

  /* Close dialog */
  $(document).on('click', '.dialog_close', function() {
    $.arcticmodal('close');
    return false;
  });

});