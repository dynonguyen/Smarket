$(document).ready(function () {
	$('form').submit(function (e) {
		e.preventDefault();

		const msgBox = $('#formMsg');
		const username = $('#username').val().trim();
		const password = $('#password').val().trim();

		if (!username) {
			return msgBox.text('Vui lòng nhập username');
		}

		if (!password) {
			return msgBox.text('Vui lòng nhập mật khẩu');
		}

		if (username.length > 20) {
			return msgBox.text('Username tối đa 20 ký tự');
		}

		if (password.length > 50) {
			return msgBox.text('Mật khẩu tối đa 50 ký tự');
		}

		msgBox.text('');
		$('button[type="submit"]').addClass('disabled');

		this.submit();
	});
});
