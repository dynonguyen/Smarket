const authApi = require('../apis/auth.api');
const {
	JWT_HEADER,
	ROLES,
	JWT_STORE_KEY,
} = require('../constants/index.constant');
const store = require('store');

const authenticateAndCreateSession = async (req) => {
	const jwt = req.cookies[JWT_HEADER];
	if (!jwt) return false;

	try {
		const apiRes = await authApi.authorization(jwt);
		if (apiRes && apiRes.data) {
			const { username, role, expired } = apiRes.data;

			// Create session
			req.session.user = {
				username,
				role,
				expired,
			};
			store.set(JWT_STORE_KEY, jwt);

			return true;
		}
		return false;
	} catch (error) {
		console.log('authenticationAndCreateSession ERROR: ', error);
		return false;
	}
};

const authenticationMiddleware = async (req, res, next) => {
	const jwt = req.cookies[JWT_HEADER];

	if (!jwt) {
		return next();
	}

	if (req.session.user) {
		const { expired } = req.session.user;
		if (expired < Date.now()) {
			req.session.user = {};
			return next();
		}
	} else {
		// if session hasn't been created then call Authentication API
		const isAuthenticated = await authenticateAndCreateSession(req);
		if (!isAuthenticated) {
			req.session.user = {};
			return next();
		}
	}
	return next();
};

const authorizationMiddleware = (role = ROLES.GUEST) => {
	return async (req, res, next) => {
		if (!req.session.user) {
			const isAuthenticated = await authenticateAndCreateSession(req);
			if (!isAuthenticated) {
				req.session.user = {};
				return res.redirect('/redirector');
			}
		}

		if (req.session.user.role !== role) {
			return res.redirect('/redirector');
		}

		return next();
	};
};

module.exports = { authenticationMiddleware, authorizationMiddleware };
