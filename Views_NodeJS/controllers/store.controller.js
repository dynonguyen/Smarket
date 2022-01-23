exports.getProductByStore = async (req, res) => {
  try {
    res.render('./store/product-list.pug');
  } catch (error) {
    console.error('Function getProductByStore Error: ', error);
    return res.render('404');
  }
};
