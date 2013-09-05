$(function() {

  $('.scroll-pane').jScrollPane();

  $('.cycle-slideshow').on('cycle-after', function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag) {
    $('.scroll-pane').jScrollPane();
  });

  $(document).ready(function () {
    $("#background-image").fullscreenBackground();
  });

});