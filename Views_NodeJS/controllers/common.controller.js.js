const commonApi = require('../apis/common.api');
const constants = require('../constants/index.constant');
const {
  formatCurrency,
  cloudinaryOptimize,
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
