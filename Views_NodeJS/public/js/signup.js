
$(document).ready(function () {
	$('form').submit(function (e) {
		e.preventDefault();

		const msgBox = $('#formMsg');
		const username = $('#username').val().trim();
		const password = $('#password').val().trim();
        const confirmPasword = $('#confirm-password').val().trim();
        const email = $('#email').val().trim();
        console.log(check);
		if (!username) {
			return msgBox.text('Vui lòng nhập tên đăng nhập');
		}

		if (!password) {
			return msgBox.text('Vui lòng nhập mật khẩu');
		}

        if (!confirmPasword) {
			return msgBox.text('Vui lòng nhập xác nhận mật khẩu');
		}

		if (!email) {
			return msgBox.text('Vui lòng nhập địa chỉ email');
		}

		if (username.length > 20) {
			return msgBox.text('Tên đăng nhập tối đa 20 ký tự');
		}

		if (password.length > 50) {
			return msgBox.text('Mật khẩu tối đa 50 ký tự');
		}

        if(password !== confirmPasword) {
            return msgBox.text('Xác nhận mật khẩu không trùng khớp')
        }

        if (email.length > 50) {
			return msgBox.text('Địa chỉ email tối đa 50 ký tự');
		}
        
        if(!$('#check').is(':checked')) {
            return msgBox.text('Vui lòng đồng ý với các cam kết');
        }

		msgBox.text('');
		$('button[type="submit"]').addClass('disabled');

		this.submit();
	});
});