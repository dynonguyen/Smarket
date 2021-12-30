const constant = require('../constants/index.constant');

module.exports = passVariableToClientMiddleware = (req, res, next) => {
	res.locals.constant = JSON.stringify({
		JAVA_API_BASE_URL: process.env.JAVA_API_BASE_URL,
		CSHARP_API_BASE_URL: process.env.CSHARP_API_BASE_URL,
		USER_TYPES: constant.USER_TYPES,
	});

	next();
};
