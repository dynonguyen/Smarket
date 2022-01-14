const commonApi = require('../apis/common.api');
const constants = require('../constants/index.constant');
const {
  formatCurrency,
  cloudinaryOptimize,
  formatDate,
} = require('../helpers/index.helper');

exports.getProvince = async (req, res) => {
  try {
    const province = await commonApi.getAllProvince();
    if (province) {
      return res.send(province.data);
    } else {
      return res.send([]);
    }
  } catch (error) {
    return res.send([]);
  }
};

exports.getDistrict = async (req, res) => {
  try {
    const district = await commonApi.getDistrict(req.query.provinceid);
    if (district) {
      return res.send(district.data);
    } else {
      return res.send([]);
    }
  } catch (error) {
    return res.send([]);
  }
};

exports.getWard = async (req, res) => {
  try {
    const ward = await commonApi.getWard(req.query.districtid);
    if (ward) {
      return res.send(ward.data);
    } else {
      return res.send([]);
    }
  } catch (error) {
    return res.send([]);
  }
};

exports.getHomeGuest = async (req, res) => {
  try {
    const productCategories = [];
    const promises = [];

    constants.GROUP_TYPES.forEach((gp, index) => {
      promises.push(
        commonApi.getProductsByGroupType(gp.id, 1, 8).then((apiRes) => {
          productCategories.push({
            groupTypeName: gp.label,
            groupTypeId: gp.id,
            products: apiRes.data || [],
          });
        })
      );
    });

    await Promise.all(promises);

    return res.render('home.pug', {
      productCategories,
      helpers: {
        formatCurrency,
        cloudinaryOptimize,
      },
    });
  } catch (error) {
    console.error('Function getHomeGuest Error: ', error);
    return res.render('404');
  }
};

exports.getProductPage = async (req, res) => {
  try {
    const productId = req.params['productId'];
    const response = await commonApi.getDetailProduct(productId);
    const imagesRes = await commonApi.getImagesOfProduct(productId);
    const soldRes = await commonApi.getProductSold(productId);
    const feedbackRes = await commonApi.getProductFeedback(productId);
    const storeRes = await commonApi.getProductStore(productId);
    
    const product = response.data;
    const typeRes = await commonApi.getProductType(product.productTypeId);
    const type = typeRes.data;
    const groupCartRes = await commonApi.getProductsByGroupType(type.groupType, Math.floor(Math.random()*3), Math.floor(Math.random()*6) + 3);
    const products = groupCartRes.data;
    let group;
    for (const item of constants.GROUP_TYPES) {
      if(item.id = type.groupType) {
        group = item.label;
        break;
      }
    }
    const images = imagesRes.data;
    let index = -1;
    for (let item of images) {
      item.index = ++index;
    }

    const sold = soldRes.data;
    let quantitySold = 0;
    for (const item of sold) {
      quantitySold += item.quantity;
    }

    let feedback = feedbackRes.data;
    const statisticFeedback = [0, 0, 0, 0, 0] 
      
    
    for (const item of feedback) {
      const star = parseInt(item.rating);
      statisticFeedback[star-1]++;
      item.rating = star;
    }
    const store = storeRes.data;
    const rating = parseFloat(product.productRating).toFixed(1);
    const reRating = Math.round(rating);
    return res.render('common/product', {
      helpers: {
        formatCurrency,
        formatDate,
        cloudinaryOptimize,
      },
      group,
      product,
      images,
      store,
      feedback,
      rating,
      reRating,
      statisticFeedback,
      quantitySold,
      quantityFeedback: feedback.length,
      products,
      type,




    })
  } catch (error) {
    console.log(error);
    return res.send('abc');
  }
}