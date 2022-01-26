const storeApi = require('../apis/store.api');
const { PAGE_SIZE } = require('../constants/index.constant');
const {
  formatCurrency,
  formatDate,
  convertOrderStatus,
} = require('../helpers/index.helper');
const constants = require('../constants/index.constant');
const cloudinary = require('../configs/cloudinary.config');
const csv = require('csv-parser');
const fs = require('fs');

exports.getProductByStore = async (req, res) => {
  const { page = 1 } = req.query;

  try {
    const account = (await storeApi.getAccount(req.session.user.username)).data
      ?.username;

    const userId = (await storeApi.getStoreByUsername(account)).data?.userId;

    const storeId = (await storeApi.getBasicInfo(userId)).data?.storeId;

    const productRes = (
      await storeApi.getProductByStore(storeId, page, PAGE_SIZE)
    )?.data;

    const { total, pageSize = PAGE_SIZE, data = [] } = productRes;

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
    const account = (await storeApi.getAccount(req.session.user.username))
      ?.data;
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

exports.getAddProductPage = async (req, res) => {
  try {
    const CATEGORIES = constants.GROUP_TYPES;
    const account = await storeApi.getAccount(req.session.user.username);
    return res.render('./store/product-add.pug', {
      CATEGORIES,
      account,
    });
  } catch (error) {
    console.log('Function getAddProductPage Error', error);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = (await storeApi.getStoreByUsername(req.session.user.username))
      ?.data;
    const store = (await storeApi.getBasicInfo(user.userId))?.data;
    const account = (await storeApi.getAccount(req.session.user.username))
      ?.data;
    return res.render('store/profile', {
      user: store,
      account,
      store: user,
    });
  } catch (error) {
    return res.render('404');
  }
};

exports.addProduct = async (req, res) => {
  try {
    const data = req.body;
    const username = req.session.user.username;
    const resApi = (await storeApi.getCurrentStoreId(username)).data || [];
    const storeId = resApi.storeId;
    const uploader = async (path) =>
      await cloudinary.uploads(path, 'Certificate');
    let certificate;
    if (req.files.certificate) {
      certificate = await uploader(req.files.certificate[0].path);
    } else {
      certificate = {
        url: ' ',
      };
    }
    const product = {
      StoreId: storeId,
      ProductName: data.name,
      ProductTypeId: parseInt(data.category),
      ProductDes: data.description,
      ProductRating: 5,
      UnitPrice: parseInt(data.unitPrice),
      Unit: parseInt(data.unit),
      QuantitativeUnit: data.quantitative,
      Source: data.source,
      Certificate: certificate.url,
    };
    const productId = (await storeApi.addProduct(product)).data || [];
    return res.redirect('/store/product-list');
  } catch (error) {
    console.log('Function addProduct Error', error);
    return res.render('404');
  }
};

exports.getImport = async (req, res) => {
  try {
    const account = (await storeApi.getAccount(req.session.user.username))?.data;
    return res.render('store/import',{
      account,
    });
  } catch (error) {
    return res.render('404');
  }
}

exports.importProduct = async (req, res) => {
  const user = (await storeApi.getStoreByUsername(req.session.user.username))
      ?.data;
  const account = (await storeApi.getAccount(req.session.user.username))?.data;
  const store = (await storeApi.getBasicInfo(user.userId))?.data;
  try {
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',async function(data){
        try {
            const entity = {
              ProductName: data.ProductName,
              StoreId: store.storeId,
              ProductTypeId: data.ProductTypeId,
              ProductDes: data.ProductDes,
              UnitPrice: data.UnitPrice,
              Unit: data.Unit,
              QuantitativeUnit: data.QuantitativeUnit,
              ProductRating: 5,
              Source: data.Source,
              Certificate: data.Certificate
            }
            const product = (await storeApi.postProduct(entity))?.data;
            const thumbnail = {
              ProductId: product.productId,
              IsThumbnail: 1,
              Source: data.Thumbnail
            }
            const resultThumb = (await storeApi.postProductImage(thumbnail))?.data;
            for (const item of data.Images.split(';')) {
              const image = {
                ProductId: product.productId,
                IsThumbnail: 0,
                Source: item
              }
              const resultImage= (await storeApi.postProductImage(image))?.data;
            }
        }
        catch(err) {
          console.log(err);
          return res.render('store/import', {
            account,
            msg: 'Thêm không thành công'
          })
        }
    })
    .on('end',function(){
        //some final operation
    }); 
    return res.render('store/import',{
      account,
      msg: 'Thêm thành công'
    })
  } catch (error) {
    console.log(error);
    return res.render('store/import', {
      account,
      msg: 'Thêm không thành công'
    })
  }
}

exports.getOrders = async (req, res) => {
  try {
    const user = (await storeApi.getStoreByUsername(req.session.user.username))
      ?.data;
    const store = (await storeApi.getBasicInfo(user.userId))?.data;
    let orders = (await storeApi.getOrders(store.storeId))?.data;
    const account = (await storeApi.getAccount(req.session.user.username))
      ?.data;
    orders = orders.map((item) => {
      return {
        ...item,
        status: convertOrderStatus(item.orderStatus),
      };
    });
    orders = orders.sort((item1, item2) => {
      return item2.orderId - item1.orderId;
    });
    return res.render('store/orders', {
      helpers: {
        formatDate,
        formatCurrency,
      },
      orders,
      account,
    });
  } catch (error) {
    return res.render('404');
  }
};

exports.getOrderDetail = async (req, res) => {
  try {
    const account = (await storeApi.getAccount(req.session.user.username))
      ?.data;
    const username = req.session.user.username;
    const resApi = (await storeApi.getCurrentStoreId(username)).data || [];
    const storeId = resApi.storeId;
    const orderId = req.params.orderId;
    const resOrderDetail =
      (await storeApi.getOrderDetail(storeId, orderId)).data || [];
    const resProducts =
      (await storeApi.getOrderDetailProducts(orderId)).data || [];
    const shippingMoney = (await storeApi.getShippingMoney(orderId)).data || 0;
    var orderTotal = 0;
    for (var x in resProducts) {
      orderTotal +=
        parseInt(resProducts[x].unitPrice) * parseInt(resProducts[x].quantity);
    }
    res.render('store/order-detail', {
      resOrderDetail,
      resProducts,
      orderTotal,
      shippingMoney,
      account,
      helpers: {
        formatCurrency,
        convertOrderStatus,
        formatDate,
      },
    });
  } catch (error) {
    return res.render('404');
  }
};

exports.sendOrders = async (req, res) => {
  try {
    const user = (await storeApi.getStoreByUsername(req.session.user.username))
      ?.data;
    const store = (await storeApi.getBasicInfo(user.userId))?.data;
    let orders = (await storeApi.getOrders(store.storeId))?.data;
    const account = (await storeApi.getAccount(req.session.user.username))
      ?.data;
    orders = orders.map((item) => {
      return {
        ...item,
        status: convertOrderStatus(item.orderStatus),
      };
    });
    orders = orders.map((item) => {
      delete item.orderStatus;
      delete item.orderDetail;
      delete item.payment;
      delete item.refund;
      delete item.customer;
      delete item.shipper;
      delete item.store;
      item.deliveryAddress = item.deliveryAddress.replace(/,/g, '');
      return item;
    });
    orders = orders.sort((item1, item2) => {
      return item2.orderId - item1.orderId;
    });
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(400).send([]);
  }
};

exports.getFeedback = async (req, res) => {
  try {
    let feedbacks = (await storeApi.getFeedback())?.data;
    const account = (await storeApi.getAccount(req.session.user.username))
      ?.data;
    feedbacks = feedbacks.sort((item1, item2) => {
      return item2.feedbackId - item1.feedbackId;
    });
    return res.render('store/feedback', {
      helpers: {
        formatDate,
      },
      feedbacks,
      account,
    });
  } catch (error) {
    return res.render('404');
  }
};

exports.postFeedback = async (req, res) => {
  try {
    const { content } = req.body;
    const createDate = new Date().toLocaleString();
    const user = (await storeApi.getStoreByUsername(req.session.user.username))
      ?.data;
    const store = (await storeApi.getBasicInfo(user.userId))?.data;
    const feedback = {
      StoreId: store.storeId,
      Content: content,
      FeedbackTime: createDate,
    };
    const result = (await storeApi.postFeedback(feedback))?.data;
    return res.status(200).send('Success');
  } catch (error) {
    return res.status(400).send('fail');
  }
};
