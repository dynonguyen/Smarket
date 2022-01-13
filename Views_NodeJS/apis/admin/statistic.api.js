const { axiosJava } = require('../axiosClient');

const BASE_URL = '/admin/statistic';

const statisticApi = {
  getIncome: () => {
    const data = axiosJava.get(`${BASE_URL}/income`);
    return data;
  },
};

module.exports = statisticApi;
