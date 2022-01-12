const { ORDER_STATUS, USER_TYPES } = require('../constants/index.constant');

exports.formatCurrency = (money) => {
  return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
};

exports.formatDate = (dateStr = new Date()) => {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    return '_';
  }

  const h = `0${date.getHours()}`.slice(-2);
  const m = `0${date.getMinutes()}`.slice(-2);
  const d = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const y = date.getFullYear();

  return `${h}:${m} ${d}-${month}-${y}`;
};

exports.convertOrderStatus = (status = 1) => {
  for (let key in ORDER_STATUS) {
    if (ORDER_STATUS[key] === status) {
      return key;
    }
  }
};

exports.convertAccountType = (type) => {
	for (let key in USER_TYPES) {
		if (USER_TYPES[key] === type) {
			switch(key) {
				case 'CUSTOMER': {
					return 'Khách hàng'
				};
				case 'SHIPPER': {
					return 'Shipper'
				};
				case 'STORE': {
					return 'Cửa hàng'
				};
				case 'ADMIN': {
					return 'Admin'
				};
			}			
		}
	}
}