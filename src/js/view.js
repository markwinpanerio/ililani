$('.cyclorama').cyclorama({
  useKeyboard: true
});

$('.js-floor-link').on('click', function(e) {
  const $this = $(this);
  let $target = $($this.attr('href'));
  e.preventDefault();

  $('.js-floor-link').removeClass('is-active');
  $this.addClass('is-active');

  $('.js-floor').fadeOut();
  $target.fadeIn();
})