const shipperApi = require('../apis/shipper.api');
const { PAGE_SIZE } = require('../constants/index.constant');
const {
	formatCurrency,
	convertOrderStatus,
	formatDate,
} = require('../helpers/index.helper');

exports.getOrderHistory = async (req, res) => {
	const { page = 1 } = req.query;
	const shipperId = 1;

	try {
		const apiRes = (await shipperApi.getOrderHistory(shipperId, page))?.data;
		const { total, pageSize = PAGE_SIZE, data = [] } = apiRes;

		return res.render('./shipper/order-history.pug', {
			total,
			page,
			pageSize,
			orderList: data,
			helpers: {
				formatCurrency,
				convertOrderStatus,
				formatDate,
			},
		});
	} catch (error) {
		console.error('Function getOrderHistory Error: ', error);
		return res.render('404');
	}
};
