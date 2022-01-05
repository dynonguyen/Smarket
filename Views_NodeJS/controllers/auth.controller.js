const authApi = require('../apis/auth.api');
const { JWT_HEADER, JWT_STORE_KEY } = require('../constants/index.constant');
const store = require('store');

exports.getLogin = (req, res) => {
	return res.render('login.pug');
};

exports.getLogout = (req, res) => {
	store.remove(JWT_STORE_KEY);
	res.clearCookie(JWT_HEADER);
	req.session.user = {};
	return res.redirect('/auth/login');
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

exports.getSignUP = (req, res) => {
	return res.render('signup');
}

exports.postSignUp = async (req, res) => {
	const account = req.body;
	if(!account.username || !account.password || !account.type || !account.email) {
		return res.render('/signup', {
			msg: "Đăng ký thất bại, vui lòng thử lại!"
		})
	}
	try {
		const entity = {
			Username: account.username,
			Password: account.password,
			Email: account.email,
			AccountType: account.type,
			CreateTime: new Date()
		}
		const apiRes = await authApi.signup(entity);
		if(apiRes.data === 'Success') {
			return res.redirect('/auth/login');
		} else {
			return res.render('signup', {
				msg: 'Đăng ký thất bại, vui lòng kiểm tra lại các thông tin'
			});
		}
		
	} catch (error) {
		console.log(error);
		return res.render('signup', {
			msg: 'Đăng ký thất bại, vui lòng thử lại!.'
		});
	}	
}