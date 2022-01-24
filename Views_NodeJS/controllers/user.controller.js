var crypto = require('crypto');

const userApi = require('../apis/user.api');
const commonApi = require('../apis/common.api');
const {
  formatCurrency,
  convertOrderStatus,
  formatDate,
} = require('../helpers/index.helper');

exports.getPurchase = async (req, res) => {
  try {
    const user = (await userApi.getUserByUsername(req.session.user.username))
      ?.data;
    return res.render('user/purchase', {
      title: 'Smarket | Đặt hàng',
      user,
    });
  } catch (error) {
    return res.render('404');
  }
};

exports.postOrder = async (req, res) => {
  try {
    let cart = req.body.cart;
    cart = cart.filter((item) => {
      return item.checked === '1' ? true : false;
    });
    let cartItems = [];
    for (const item of cart) {
      let product = (await commonApi.getProductForCart(item.productId))?.data;
      product.quantity = item.quantity;
      product.total = parseInt(item.quantity) * parseInt(product.unitPrice);
      product.checked = item.checked;
      cartItems.push(product);
    }
    const user = (await userApi.getUserByUsername(req.session.user.username))
      ?.data;
    const customer = (await userApi.getCustomerInfo(user.userId))?.data;
    const orders = [];
    for (let item of cartItems) {
      const userStore = (await userApi.getStoreByProductId(item.productId))
        ?.data;
      const store = (await userApi.getStoreInfo(userStore.userId))?.data;
      let status = 0;
      for (let order of orders) {
        if (order.storeId === store.storeId) {
          order.data.push(item);
          order.total += item.total;
          status = 1;
        }
      }
      if (status === 0) {
        const shipCost = (
          await userApi.getCommission(store.storeId, customer.customerId)
        )?.data;
        const newOrder = {
          storeId: store.storeId,
          storeName: userStore.name,
          shipCost,
          total: item.total + shipCost,
          data: [item],
        };
        orders.push(newOrder);
      }
    }

    return res.send(orders);
  } catch (error) {
    console.log(error);
    return res.send([]);
  }
};

exports.getExecuteOrder = async (req, res) => {
  try {
    const user = (await userApi.getUserByUsername(req.session.user.username))
      ?.data;
    const customer = (await userApi.getCustomerInfo(user.userId))?.data;
    const { orders, addressStatus, receive, payment, deliveryDate } = req.body;
    const createDate = new Date().toLocaleString();
    let DeliveryAddress = user.address;
    let ReceiverName = user.name;
    let ReceiverPhone = user.phone;
    if (addressStatus === '1') {
      DeliveryAddress = receive.receiveAddress;
      ReceiverName = receive.receiveName;
      ReceiverPhone = receive.receivePhone;
    }
    for (const order of orders) {
      const orderCode = crypto.randomBytes(10).toString('hex').toUpperCase();
      const entity = {
        CustomerId: customer.customerId,
        ShipperId: 1,
        StoreId: parseInt(order.storeId),
        OrderCode: orderCode,
        OrderStatus: 0,
        OrderTotal: order.total,
        ReceiverName,
        ReceiverPhone,
        DeliveryAddress,
        DeliveryDate: deliveryDate,
        CreateDate: createDate,
      };
      const result = (await userApi.createOrder(entity))?.data;
      const requestShipper = await userApi.getShipperRequest(result.orderId);
    }
    return res.send('Success');
  } catch (error) {
    console.log(error);
    return res.send('Fail');
  }
};

exports.getOrderDetail = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const orderId = req.params.orderId;
    const resOrderDetail =
      (await userApi.getOrderDetail(customerId, orderId)).data || {};
    const resProducts =
      (await userApi.getOrderDetailProducts(orderId)).data || [];
    var orderTotal = 0;
    for (var x in resProducts) {
      orderTotal +=
        parseInt(resProducts[x].unitPrice) * parseInt(resProducts[x].quantity);
    }
    res.render('customer/order-detail', {
      resOrderDetail,
      resProducts,
      orderTotal,
      helpers: {
        formatCurrency,
        convertOrderStatus,
        formatDate,
      },
    });
  } catch (error) {
    console.error('Function getOrderDetail Error: ', error);
    return res.render('404');
  }
};
