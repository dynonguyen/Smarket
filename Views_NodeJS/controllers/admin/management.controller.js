const managementApi = require('../../apis/admin/management.api');
const {
	formatCurrency,
	convertOrderStatus,
	formatDate,
	convertAccountType,
} = require('../../helpers/index.helper');

exports.getAccount = async (req, res) => {
	try {
		const {page = 1, type = 1} = req.query;
		const accountRes = await managementApi.getAcount(page, type);
		const accounts = accountRes.data;
		const total = accounts.total;
		const pageSize = accounts.pageSize;
		return res.render('admin/account', {
			accountList:accounts.data,
			total,
			page,
			type,
			pageSize,
			helpers: {
				convertAccountType,
				formatDate
			}
		})
	} catch (error) {
		return res.render('404');
	}
}

exports.getUserInfo = async (req, res) => {
	try {
		const accountId = req.query.id;
		const accRes = await managementApi.getAccountInfo(accountId);
		const userRes = await managementApi.getUser(accountId);
		const user = userRes.data;
		const account = accRes.data;
		let status ='';
		let rating = 0;
		if(account.accountType === 2) {
			rating = parseInt(user.shipperRating) ? parseInt(user.shipperRating) : 3;
			switch(user.status) {
				case 0: {
					status = 'Chưa duyệt';
					break;
				}
				case 1: {
					status = 'Đã duyệt';
					break;
				}
				case 2: {
					status = 'Đang nhận đơn hàng';
					break;
				}
				case 3: {
					status = 'Đang giao hàng';
					break;
				}
				default: status = 'Đã duyệt';
			}
		} 
		if(account.accountType === 3) {
			if(user.status === 0) {
				status = 'Chưa duyệt';
			} else {
				status = 'Đã duyệt';
			}
		}
		return res.render('admin/user-detail', {
			account,
			user,
			status,
			rating,
		})
	} catch (error) {
		
	}
}

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
