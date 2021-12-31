const DEFAULT = {
	PAGE_SIZE: 8,
};

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
});
