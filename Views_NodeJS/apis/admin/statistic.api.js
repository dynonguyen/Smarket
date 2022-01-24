const { axiosJava } = require('../axiosClient');

const BASE_URL = '/admin/statistic';

const statisticApi = {
  getIncome: () => {
    const data = axiosJava.get(`${BASE_URL}/income`);
    return data;
  },

  getProductDemand: () => {
    const data = axiosJava.get(`${BASE_URL}/product-demand`);
    return data;
  },
};

module.exports = statisticApi;
