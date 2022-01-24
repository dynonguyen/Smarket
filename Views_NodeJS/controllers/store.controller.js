const storeApi = require('../apis/store.api');
const { PAGE_SIZE } = require('../constants/index.constant');

exports.getProductByStore = async (req, res) => {
  try {
    let { storeId = 1, page = 1, pageSize = 8 } = req.query;
    const productRes = await storeApi.getProductByStore(
      storeId,
      page,
      pageSize
    );
    const productData = productRes.data;
    const total = productData.total;

    console.log('productData', productData);

    return res.render('./store/product-list.pug', {
      total,
      page,
      pageSize,
      productList: productData.data,
    });
  } catch (error) {
    console.error('Function getProductByStore Error: ', error);
    return res.render('404');
  }
};
