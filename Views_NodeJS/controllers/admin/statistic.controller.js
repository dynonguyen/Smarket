exports.getRegionStatistic = async (req, res) => {
	try {
		return res.render('./admin/region.pug', {
			title: 'Smarket | Thống kê theo vùng',
		});
	} catch (error) {
		console.error('Function getRegionStatistic Error: ', error);
		return res.render('404');
	}
};
