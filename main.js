const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');
const navLogo = document.querySelector('.burger-logo');
const topLine = document.querySelector('.start');
const bottomLine = document.querySelector('.bottom');

burger.addEventListener('click', function(){ //burger menu function

  overlay.classList.toggle('open');
  burgerNav.classList.toggle('open');
  body.classList.toggle('noScroll');
  topLine.classList.toggle('open');
  bottomLine.classList.toggle('open');

});

overlay.addEventListener('click', function(){ //overlay click function

  if (overlay.classList.contains('open')) {
    overlay.classList.remove('open');
    burgerNav.classList.remove('open');
    body.classList.remove('noScroll');
    topLine.classList.remove('open');
    bottomLine.classList.remove('open');
  }

});

navLogo.addEventListener('click', function() { //nav logo click function

  overlay.classList.remove('open');
  burgerNav.classList.remove('open');
  body.classList.remove('noScroll');
  topLine.classList.remove('open');
  bottomLine.classList.remove('open');

});

$('.burger-nav ul a').click(function() { //burger nav item function
  
  overlay.classList.remove('open');
  burgerNav.classList.remove('open');
  body.classList.remove('noScroll');
  topLine.classList.remove('open');
  bottomLine.classList.remove('open');

});

