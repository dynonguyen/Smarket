const { ROLES } = require('../constants/index.constant');

const redirectorMiddleware = (req, res) => {
	const { role } = req.session.user;

	switch (role) {
		case ROLES.CUSTOMER:
			return res.redirect('/customer');
		case ROLES.SHIPPER:
			return res.redirect('/shipper');
		case ROLES.STORE:
			return res.redirect('/store');
		case ROLES.ADMIN:
			return res.redirect('/admin');
		default:
			return res.redirect('/auth/login');
	}
};

module.exports = redirectorMiddleware;
