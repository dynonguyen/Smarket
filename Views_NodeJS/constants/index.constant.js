module.exports = {
  USER_TYPES: {
    CUSTOMER: 1,
    SHIPPER: 2,
    STORE: 3,
    ADMIN: 4,
  },
  ROLES: {
    CUSTOMER: 'ROLE_CUSTOMER',
    SHIPPER: 'ROLE_SHIPPER',
    STORE: 'ROLE_STORE',
    ADMIN: 'ROLE_ADMIN',
    GUEST: 'ROLE_GUEST',
  },
  GROUP_TYPES: [
    {
      label: 'Thịt, cá, hải sản',
      id: 1,
    },
    {
      label: 'Rau, củ, trái cây',
      id: 2,
    },
    {
      label: 'Đồ uống',
      id: 3,
    },
    {
      label: 'Bánh kẹo',
      id: 4,
    },
    {
      label: 'Mì, cháo, phở, bún',
      id: 5,
    },
    {
      label: 'Dầu ăn, gia vị',
      id: 6,
    },
    {
      label: 'Gạo, bột, đồ khô',
      id: 7,
    },
    {
      label: 'Đồ gia dụng',
      id: 8,
    },
  ],

  JWT_HEADER: 'Authorization',
  JWT_STORE_KEY: 'jwt',

  PAGE_SIZE: 8,

  ORDER_STATUS: {
    'Đang tìm shipper': 0,
    'Shipper đã nhận': 1,
    'Cửa hàng chuẩn bị': 2,
    'Đang giao hàng': 3,
    'Đã giao hàng': 4,
    'Đã thanh toán': 5,
    'Đã hoàn trả': 6,
    'Đã huỷ': 7,
  },

  AREAS: {
    'Vùng Xanh': 1,
    'Vùng Vàng': 2,
    'Vùng Cam': 3,
    'Vùng Đỏ': 4,
  },

  STORE_STATUS: {
    'Chưa duyệt': 0,
    'Đã duyệt': 1,
    'Đang hoạt động': 2,
    'Tạm nghỉ': 3,
    'Đóng cửa': 4,
    'Bị chặn': 5,
  },
  SHIPPER_STATUS: {
    'Chưa duyệt': 0,
    'Đang nghỉ': 1,
    'Đang chờ': 2,
    'Đang giao': 3,
  }
};
