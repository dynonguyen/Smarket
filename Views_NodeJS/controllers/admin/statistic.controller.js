const commonApi = require('../../apis/common.api');
const statisticApi = require('../../apis/admin/statistic.api');
exports.getRegionStatistic = async (req, res) => {
  try {
    const provinces = (await (await commonApi.getAllProvince())?.data) || [];

    return res.render('./admin/region.pug', {
      provinces,
    });
  } catch (error) {
    console.error('Function getRegionStatistic Error: ', error);
    return res.render('404');
  }
};

exports.getIncome = async (req, res) => {
  try {
    const resApi = (await (await statisticApi.getIncome())?.data) || [];
    const revenue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const income = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var x in resApi) {
      const month = new Date(resApi[x].paymentTime).getMonth();
      revenue[month] += resApi[x].totalMoney;
      income[month] +=
        resApi[x].totalMoney - resApi[x].shippingMoney - resApi[x].orderTotal;
    }
    return res.render('./admin/income.pug', {
      revenue,
      income,
    });
  } catch (error) {
    console.error('Function getIncome Error: ', error);
    return res.render('404');
  }
};
