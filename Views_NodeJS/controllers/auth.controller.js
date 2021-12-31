const authApi = require('../apis/auth.api');
const { JWT_HEADER, JWT_STORE_KEY } = require('../constants/index.constant');
const store = require('store');

exports.getLogin = (req, res) => {
	return res.render('login.pug');
};

exports.postLogin = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) return res.render('login.pug');

	try {
		const apiRes = await authApi.login(username, password);
		const { jwt, username: user, role, expired } = apiRes.data;

		if (!jwt) {
			throw new Error("JWT Token doesn't exist");
		}

		// Create session & cookie
		req.session.user = {
			username: user,
			role,
			expired,
		};
		res.cookie(JWT_HEADER, jwt, {
			expires: new Date(expired),
		});
		store.set(JWT_STORE_KEY, jwt);

		return res.redirect('/');
	} catch (error) {
		let msg = 'Đăng nhập thất bại, thử lại !';

		if (error.response) {
			msg = error.response.data?.msg;
			console.error('Function postLogin Error:', msg);
		} else {
			console.error('Function postLogin Error:', error);
		}

		return res.render('login.pug', {
			msg,
			username,
		});
	}
};
