import ScrollMagic from 'scrollmagic';

const $section = $('.js-section');
const controller = new ScrollMagic.Controller({});

$(window).on('load', function(){
  $('.l-header').addClass('is-shown');
  
  for (let i = 0; i < $section.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: $section.eq(i)[0],
      triggerHook: 'onEnter',
      offset: 0
    })
      .on('enter', function() {
        $section.eq(i).addClass('is-active');
      })
      .addTo(controller);
  }

  setTimeout(function() {
    $('.hero-content').addClass('is-shown');
  }, 1000);
})