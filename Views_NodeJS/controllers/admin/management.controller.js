const managementApi = require('../../apis/admin/management.api');
const {
	formatCurrency,
	convertOrderStatus,
	formatDate,
} = require('../../helpers/index.helper');
exports.getOrderInfor = async (req, res) => {
	try {
		const { page = 1 } = req.query;
		const OrderList = await managementApi.getOrderAll(page);
		const OrderInfor = OrderList.data;
		const total = OrderInfor.total;
		const pageSize = OrderInfor.pageSize;
		var data = OrderInfor.data;
	
		
		res.render('./admin/order.pug', {
			total,
			page,
			pageSize,
			orderList: data,
			helpers: {
				formatCurrency,
				convertOrderStatus,
				formatDate,
			},
		})
	} catch (error) {
		console.error('Function getRegionStatistic Error: ', error);
		return res.render('404');
	}
};


exports.getOrderDetail = async (req, res) => {
	try {
		const { oid = 1 } = req.query;
		const resApi = (await managementApi.getOrderDetail(oid)).data;
		const createDate = resApi.createDate;
		const receiverName = resApi.cusName;
		const receiverPhone = resApi.cusPhone;
		const shipperName = resApi.shipperName;
		const shipperPhone = resApi.shipperPhone;
		const status = resApi.status;
		const orderCode = resApi.orderCode;
		const data = resApi.data;
		var orderTotal = 0 ;
		for(i of data){
			orderTotal += (i.unitPrice*i.quantity);
		}
		res.render('./admin/order-detail',{
			createDate,
			receiverName,
			receiverPhone,
			shipperName,
			shipperPhone,
			orderCode,
			status,
			data,
			orderTotal,
			helpers: {
				formatCurrency,
				convertOrderStatus,
				formatDate,
			},
		})
	} catch (error) {
		console.error('Function getRegionStatistic Error: ', error);
		return res.render('404');
	}
};
