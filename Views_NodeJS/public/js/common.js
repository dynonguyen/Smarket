const DEFAULT = {
  PAGE_SIZE: 8,
};
const JWT_HEADER = 'Authorization';

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function myFetch(url = '', options = {}) {
  return fetch(url, {
    headers: {
      [JWT_HEADER]: getCookie(JWT_HEADER),
    },
    ...options,
  });
}

// show & hide toast message
function showToastMsg(toast, message = 'Message', type = '', timeout = 3000) {
  if (toast) {
    toast
      .html(`${message} <div class="close-icon">x</div>`)
      .addClass(`${type} show`);

    if (timeout !== 0) {
      setTimeout(() => {
        toast.removeClass(`${type} show`);
      }, timeout);
    }
  }
}

// auto register when DOM loaded
$(document).ready(function () {
  // Hide toast message
  $('.toast-msg').click(function () {
    $(this).removeClass('show danger warning');
  });

  // show & hide view password input
  $('.view-password-icon').click(function () {
    const that = $(this);
    const passwordField = $('input[name="password"]');

    if (that.hasClass('bi-eye-fill')) {
      that.removeClass('bi-eye-fill').addClass('bi-eye-slash-fill');
      passwordField.attr('type', 'password');
    } else {
      that.removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
      passwordField.attr('type', 'text');
    }
  });

  $('#scrollTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});
