const commonApi = require('../../apis/common.api');
const {GROUP_TYPES} = require('../../constants/index.constant');
exports.getRegionStatistic = async (req, res) => {
	try {
		const provinces = (await (await commonApi.getAllProvince())?.data) || [];

		return res.render('./admin/region.pug', {
			provinces,
		});
	} catch (error) {
		console.error('Function getRegionStatistic Error: ', error);
		return res.render('404');
	}
};

exports.getProductStatistic = async (req, res) => {
	try {
		const labels = ['Thịt, cá, hải sản', 'Rau, củ, trái cây','Đồ uống', 'Bánh kẹo', 'Mì, cháo, phở, bún', 'Dầu ăn, gia vị', 'Gạo, bột, đồ khô', 'Đồ gia dụng']

		return res.render('admin/product', {
			group: GROUP_TYPES,

		})
	} catch (error) {
		return res.render('404');
	}
}

exports.getProductEachType = async (req, res) => {
	try {
		const response = await commonApi.getProductEachType(req.query.group);
		return res.send(response.data);
	} catch (error) {
		return [];
	}
}
