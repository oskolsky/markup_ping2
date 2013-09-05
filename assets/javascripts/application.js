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

});