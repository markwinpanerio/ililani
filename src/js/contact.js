const $contactForm = $('#js-contact-form');
const $inputText = $contactForm.find('.js-input-text');
const $inputEmail = $contactForm.find('.js-input-email');
const baseURL = window.location.origin;

$contactForm.on('submit', function() {
  let flag = false;
  let thisInputText,
      emailInputText;

  for (let inputTextArray = 0; inputTextArray < $inputText.length; inputTextArray++) {
    thisInputText = $inputText.eq(inputTextArray);

    if (thisInputText.val() !== '') {
      flag = true;
      thisInputText.next('.contact-error').fadeOut();
    } else {
      thisInputText.next('.contact-error').fadeIn();
      flag = false;
    }
  }

  if (!flag) {
    return flag;
  } else {
    return flag;
    window.location.replace(`${baseURL}/contact-thanks.html`)
  }
});

function checkEmailFormat(emailAddress) {
  const pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
  return pattern.test(emailAddress);
}