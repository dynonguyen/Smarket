const { ROLES } = require('../constants/index.constant');

const redirectorMiddleware = (req, res, next) => {
	const role = req.session.user?.role || ROLES.GUEST;

	switch (role) {
		case ROLES.CUSTOMER:
		case ROLES.GUEST:
			return res.redirect('/');
		case ROLES.SHIPPER:
			return res.redirect('/shipper');
		case ROLES.STORE:
			return res.redirect('/store');
		case ROLES.ADMIN:
			return res.redirect('/admin');
		default:
			return res.redirect('/');
	}
};

module.exports = redirectorMiddleware;
