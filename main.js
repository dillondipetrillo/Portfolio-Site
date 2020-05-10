$(document).ready(function () {
  // NAVBAR ANIMATE OPEN
  $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
  });

  $('.nav-link').on('click', function() {
    $('.top-nav').removeClass('open');
    $('.menu-toggler').removeClass('open');
  });

  // SMOOTH SCROLL NAVBAR
  $('.nav-list li a, .exp-btn a').click(function(e) {
    var targetHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 1000);

    e.preventDefault();
  });

  // SCROLL TO TOP
  $('#up').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  // ANIMATE ON SCROLL SETTINGS
  AOS.init({
    easing: 'ease',
    duration: 900,
    once: 'true'
  });
});
