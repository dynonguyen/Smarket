const storeApi = require('../apis/store.api');
const { PAGE_SIZE } = require('../constants/index.constant');
const { formatCurrency } = require('../helpers/index.helper');

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
