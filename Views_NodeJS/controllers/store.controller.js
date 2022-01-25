const storeApi = require('../apis/store.api');
const { PAGE_SIZE } = require('../constants/index.constant');
const { formatCurrency } = require('../helpers/index.helper');
const constants = require('../constants/index.constant');
const cloudinary = require('../configs/cloudinary.config');

exports.getProductByStore = async (req, res) => {
  const { page = 1 } = req.query;
  const storeId = 1;

  try {
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

    return res.render('./store/product-detail.pug', {
      productDetailData: productDetailRes.data,
      productImageData: productImageRes.data,
      helpers: {
        formatCurrency,
      },
    });
  } catch (error) {
    console.log('Function getProductDetailById Error', error);
    return res.render('404');
  }
};

exports.getAddProductPage = async (req, res) => {
  try {
    const CATEGORIES = constants.GROUP_TYPES;
    return res.render('./store/product-add.pug', {
      CATEGORIES,
    });
  } catch (error) {
    console.log('Function getAddProductPage Error', error);
    return res.render('404');
  }
};

exports.addProduct = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.files);
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
