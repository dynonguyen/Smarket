function onPageItemClick(page) {
  location.href = `/shipper/order-history?page=${page}`;
}

$(document).ready(function () {
  pagination('#pagination', total, pageSize, page, onPageItemClick);
  let status = 0;
  $('.change-status').each(function () {
    const id = $(this).attr('id').slice(13);
    $(`#change-status${id}`).on('click', function (e) {
      let orderStatusHTML = $(`#order-status${id}`).html();

      if (orderStatusHTML === 'Đang tìm shipper') {
        status = 0;
      } else if (orderStatusHTML === 'Shipper đã nhận') {
        status = 1;
      } else if (orderStatusHTML === 'Cửa hàng chuẩn bị') {
        status = 2;
      } else if (orderStatusHTML === 'Đang giao hàng') {
        status = 3;
      } else if (orderStatusHTML === 'Đã giao hàng') {
        status = 4;
      } else if (orderStatusHTML === 'Đã thanh toán') {
        status = 5;
      } else if (orderStatusHTML === 'Đã hoàn trả') {
        status = 6;
      } else if (orderStatusHTML === 'Đã huỷ') {
        status = 7;
      }

      console.log('status', status);
      if (status != 7) {
        myFetch(
          `${
            constant.JAVA_API_BASE_URL
          }/shipper/order/change-status?orderId=${id}&status=${++status}`
        );
      } else {
        alert('Không thể chuyển trạng thái');
      }
      window.location.href = '/shipper/order-history';
    });
  });
});
