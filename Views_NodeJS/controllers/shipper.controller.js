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

exports.getOrderInfo = async (req, res) => {
  const { orderId } = req.params;

  try {
    const apiRes = (await shipperApi.getOrderInfo(orderId))?.data;

    return res.render('./shipper/order-info.pug', {
      orderInfoData: apiRes,
    });
  } catch (error) {
    console.log('Function getOrderInfo Error', error);
    return res.render('404');
  }
};


exports.getProfile = async (req, res) => {
  try {
    const account = (await shipperApi.getAccount(req.session.user.username))?.data;
    const user = (await shipperApi.getUser(account.accountId))?.data;
    const shipper = (await shipperApi.getShipper(user.userId))?.data;
    return res.render('shipper/profile', {
      account,
      shipper,
      user
    })
  } catch (error) {
    return res.render('404');
  }
}