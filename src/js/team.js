const $teamLink = $('.js-team-link');
const $teamContent = $('.js-team-content');

$(window).on('load', function() {

  if (!$teamLink.hasClass('is-active')) {
    $teamContent.eq(0).fadeIn();
    $teamLink.eq(0).addClass('is-active');
  }
})

let hrefValue;
$teamLink.on('click', function(e) {
  e.preventDefault();
  const $this = $(this);
  hrefValue = $this.attr('href');

  $teamContent.fadeOut();
  $(hrefValue).fadeIn();

  $teamLink.removeClass('is-active');
  $this.addClass('is-active');
})