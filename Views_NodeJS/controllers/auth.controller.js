const authApi = require('../apis/auth.api');

exports.getLogin = (req, res) => {
	return res.render('login.pug');
};

exports.postLogin = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) return res.render('login.pug');

	try {
		const apiRes = await authApi.login(username, password);
		console.log(apiRes.data);
	} catch (error) {
		let msg = 'Đăng nhập thất bại, thử lại !';

		if (error.response) {
			const { data } = error.response;
			msg = data;
			console.error('Function postLogin Error:', data);
		} else {
			console.error('Function postLogin Error:', error);
		}

		return res.render('login.pug', {
			msg,
			username,
		});
	}
};
