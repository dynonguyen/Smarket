const storeApi = require('../apis/store.api');
const { PAGE_SIZE } = require('../constants/index.constant');
const { 
  formatCurrency,
  formatDate,
  convertOrderStatus,
   } = require('../helpers/index.helper');

exports.getProductByStore = async (req, res) => {
  const { page = 1 } = req.query;
  const storeId = 1;

  try {
    const productRes = (
      await storeApi.getProductByStore(storeId, page, PAGE_SIZE)
    )?.data;

    const { total, pageSize = PAGE_SIZE, data = [] } = productRes;
    const account = (await storeApi.getAccount(req.session.user.username))?.data;
    return res.render('./store/product-list.pug', {
      total,
      page,
      pageSize,
      productList: data,
      helpers: {
        formatCurrency,
      },
      account,
    });
  } catch (error) {
    console.error('Function getProductByStore Error: ', error);
    return res.render('404');
  }
};

exports.getProductDetailById = async (req, res) => {
  const { productId } = req.params;
  try {
    const productDetailRes = await storeApi.getProductDetailById(productId);
    const productImageRes = await storeApi.getProductImageById(productId);
    const account = (await storeApi.getAccount(req.session.user.username))?.data;
    return res.render('./store/product-detail.pug', {
      productDetailData: productDetailRes.data,
      productImageData: productImageRes.data,
      helpers: {
        formatCurrency,
      },
      account,
    });
  } catch (error) {
    console.log('Function getProductDetailById Error', error);
    return res.render('404');
  }
};


exports.getProfile = async (req, res) => {
  try {
    const user = (await storeApi.getStoreByUsername(req.session.user.username))?.data;
    const store = (await storeApi.getBasicInfo(user.userId))?.data;
    const account = (await storeApi.getAccount(req.session.user.username))?.data;
    return res.render('store/profile', {
      user: store,
      account,
      store: user,
    })
  } catch (error) {
    return res.render('404');
  }
}

exports.getOrders = async (req, res) => {
  try {
    const user = (await storeApi.getStoreByUsername(req.session.user.username))?.data;
    const store = (await storeApi.getBasicInfo(user.userId))?.data;
    let orders = (await storeApi.getOrders(store.storeId))?.data;
    const account = (await storeApi.getAccount(req.session.user.username))?.data;
    orders = orders.map(item => {
      return {
        ...item,
        status: convertOrderStatus(item.orderStatus),
      }
    })
    orders = orders.sort((item1, item2) => {
      return item2.orderId - item1.orderId;
    })
    return res.render('store/orders', {
      helpers: {
        formatDate,
        formatCurrency,
      },
      orders,
      account,
    })
  } catch (error) {
    return res.render('404');
  }
}

exports.sendOrders = async (req, res) => {
  try {
    const user = (await storeApi.getStoreByUsername(req.session.user.username))?.data;
    const store = (await storeApi.getBasicInfo(user.userId))?.data;
    let orders = (await storeApi.getOrders(store.storeId))?.data;
    const account = (await storeApi.getAccount(req.session.user.username))?.data;
    orders = orders.map(item => {
      return {
        ...item,
        status: convertOrderStatus(item.orderStatus),
      }
    })
    orders = orders.map(item => {
      delete item.orderStatus;
      delete item.orderDetail;
      delete item.payment;
      delete item.refund;
      delete item.customer;
      delete item.shipper;
      delete item.store;
      item.deliveryAddress = item.deliveryAddress.replace(/,/g, '');
      return item;
    })
    orders = orders.sort((item1, item2) => {
      return item2.orderId - item1.orderId;
    })
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(400).send([]);
  }
}