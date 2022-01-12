const commonApi = require('../apis/common.api');

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
    return res.render('home');
  } catch (error) {
    console.error('Function getHomeGuest Error: ', error);
    return res.render('404');
  }
};
