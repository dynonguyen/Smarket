let orderItems = [];
let purchaseStatus = 0;
function getOrders() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  let checkCart = 0;
  for (const item of cart) {
    if(item.checked === 1) {
      checkCart = 1;
      break;
    }
  }
  if(checkCart === 0) {
    alert('Không có sản phẩm được chọn, vui lòng chọn sản phẩm để đặt hàng');
    window.location.href = '/common/cart';
    return 0;
  }
  $.ajax({
    type: 'POST',
    url: '/user/purchase/orders',
    data: {cart: cart},
    async: false,
    success: function(data) {
      return data;
    },
    error: function(error) {
      setValueForOrderItems(JSON.parse(error.responseText));
    },
    dataType: 'application/json'
  });
}
function setValueForOrderItems(data) {
  orderItems = data;
}
function renderPurchase() {
  for (const order of orderItems) {
    $('#order-items').append(`
      <div class="row justify-content-md-center mb-2" id="container-${order.storeId}">
        <div class="col col-md-4 bg-light py-1 pt-2 rounded-top">
            <a href="/common/store/${order.storeId}">Cửa hàng: ${order.storeName}</a>
        </div>
        <div class="col-md-5"></div>
        <div class="col col-md-9 row justify-content-md-center bg-light py-3" id="${order.storeId}">
        </div>
      </div>
    `);
    for (const item of order.data) {
      $(`#${order.storeId}`).append(`
        <div class="col col-md-11 row align-items-md-center my-1">
          <a href="/common/product/${item.productId}" class="col-sm-2"><img class="img-thumbnail" src="${item.thumbnail}" /></a>
          <div class="col-sm-4 product-name">
              <a href="/common/product/${item.productId}">${item.productName}</a>
          </div>
          <div class="col-sm-2 text-center">
              <div>${item.unitPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
          </div>
          <div class="col-sm-2 text-center">
              <div>2</div>
          </div>
          <div class="col-sm-2 text-center text-danger">
              <div>${item.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
          </div>
        </div>
      `)
    }
    $(`#container-${order.storeId}`).append(`
      <div class="col col-md-4 border-top border-right bg-light py-1 pt-2 rounded-top d-flex justify-content-between align-items-center py-1">
        <div>Phí vận chuyển </div>
        <div>${order.shipCost.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
      </div>
      <div class="col col-md-5 border-top bg-light py-1 pt-2 rounded-top d-flex justify-content-between align-items-center py-1">
        <div>Tổng tiền</div>
        <div class="text-danger">${order.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
      </div>
    `)
  }
  let totalProduct = 0;
  let totalShip = 0
  for (const order of orderItems) {
    totalShip += order.shipCost;
    for (const item of order.data) {
      totalProduct += item.total;
    }
  }
  let totalOrder = totalProduct + totalShip;
  $('#total-product').text(totalProduct.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
  $('#total-ship').text(totalShip.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
  $('#total-order').text(totalOrder.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));

}

async function purchase() {
  let payment = 1;
  let addressStatus;
  let receive = 'abc';
  const deliveryDate = $('#delivery-date').val();
  if($('#original').is(':checked')) {
    addressStatus = 0
  } else {
    addressStatus = 1;
    receive = {
      receiveName: $('#receive-name').val(),
      receivePhone: $('#receive-phone').val(),
      receiveAddress: $('#receive-address').val()
    }
  }
  if($('#online').is(':checked')) {
    payment = 0;
  } 
  $.ajax({
    type: 'POST',
    url: '/user/purchase/execute',
    data: {
      orders: orderItems,
      payment,
      addressStatus,
      receive,
      deliveryDate
    },
    async: false,
    error: function(error) {
      if(error.responseText === 'Success') {
        alert('Đặt hàng thành công');
        setValueForStatus(1);
      } else {
        alert('Đặt hàng không thành công, vui lòng thử lại sau.');
        setValueForStatus(0);
      }
    },
    dataType: 'application/json'
  });
}
function setValueForStatus(status) {
  purchaseStatus = status;
}

function redirect(status) {
  if(status === 1) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => {
      return item.checked === 1 ? false : true;
    })
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = '/user/history';

  } else {
    window.location.href = '/common/cart';
  }
}
$(document).ready(function(){
  getOrders();
  renderPurchase();
  $('#get-order').click(function(e) {
    if($('#delivery-date').val() === '') {
      alert('Vui lòng điền thời gian nhận hàng');
      e.preventDefault();
      return;
    }
    purchase();
    redirect(purchaseStatus);
  })
})