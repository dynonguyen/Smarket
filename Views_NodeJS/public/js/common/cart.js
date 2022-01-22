$('#plus').click(function(){
  let quantity = parseInt($('#quantity').val());
  if(quantity < 100) {
    $('#quantity').val(quantity + 1);
  }
})
$('#minus').click(function(){
  let quantity = parseInt($('#quantity').val());
  if(quantity > 1) {
    $('#quantity').val(quantity - 1);
  }
})

async function renderCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if(cart.length === 0) {
    $('#products').append(`
      .col-md-6.alert.alert-danger Không có sản phẩm trong giỏ hàng 
    `)
    $('#get-order').remove();
    $('#action').append(`
      <a href="/" class="btn btn-primary> Xem hàng hóa trên hệ thống </a>
    `)
    return;
  }
  let cartItems = [];
  for (const item of cart) {
    let product = await $.get(`/common/cart/product?id=${item.productId}`);
    product.quantity = item.quantity;
    product.total = parseInt(item.quantity) * parseInt(product.unitPrice);
    cartItems.push(product);
  }
  for (const item of cartItems) {
    $('#products').append(`
      <div class="col col-md-9 row bg-light w-100 py-2 rounded my-2" id="${item.productId}">
        <div class="col col-md-2 d-flex flex-row align-items-center">
          <input class="form-check-input check" id="check${item.productId}" type="checkbox" />
          <a href="/common/product/${item.productId}">
            <img class="img-thumbnail" src="${item.thumbnail}" />
          </a>
        </div>
        <div class="col col-md-3 p-0">
          <a href="/common/product/${item.productId}">
            <h6 class="productname mt-3">${item.productName}</h6>
          </a>
        </div>
        <div class="col col-md-2 d-flex align-items-center">
          <h7 class="price">${item.unitPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h7>
        </div>
        <div class="col col-md-1 d-flex align-items-center ">
          <i class="bi bi-trash-fill mr-1 del-icon" id="del-icon-${item.productId}"></i>
          <div class="del-text" id="del-text-${item.productId}">Xóa</div>
        </div>
        <div class="col col-md-2 d-flex align-items-center row justify-content-center">
          <div class="col col-sm-3 btn btn-primary col-4 minus" id="minus${item.productId}">- </div>
          <input class="col col-sm-5 form-control px-auto col-4 quantity" id="quantity${item.productId}" type="text" value="${item.quantity}" readonly />
          <div class="col col-sm-3 btn btn-primary col-4 plus" id="plus${item.productId}">+ </div>
        </div>
        <div class="col col-md-2 d-flex align-items-center justify-content-end text-danger">
          <h7 class="total-price">${item.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h7>
        </div>
      </div>
    `)
  }
  $.each($('.minus'),function(){
    $(this).click(function(){
      const id = $(this).attr('id').slice(5);
      let quantity = parseInt($(`#quantity${id}`).val());
      updateQuantityItemCart(id, quantity - 1);
      if(quantity < 100) {
        $(`#quantity${id}`).val(quantity - 1);
      }
    })
  })
  $.each($('.plus'),function(){
    $(this).click(function(){
      const id = $(this).attr('id').slice(4);
      let quantity = parseInt($(`#quantity${id}`).val());
      updateQuantityItemCart(id, quantity + 1);
      if(quantity > 1) {
        $(`#quantity${id}`).val(quantity + 1);
      }
    })
  })
  $.each($('.del-icon'),function(){
    $(this).click(function(){
      const id = $(this).attr('id').slice(9);
      deleteItemInCart(id);
      $(`#${id}`).remove();
    })
  })
  $.each($('.del-text'),function(){
    $(this).click(function(){
      const id = $(this).attr('id').slice(9);
      deleteItemInCart(id);
      $(`#${id}`).remove();
    })
  })
  $.each($('.check'), function(){
    $(this).click(function(){
      const id = $(this).attr('id').slice(5);
      let cart = JSON.parse(localStorage.getItem('cart'));
      let status = null;
      if($(this).is(':checked')) {
        status = 1;
      } else {
        status = 0;
      }
      cart = cart.map(item => {
        if(item.productId === id) {
          return {
            productId: id,
            quantity: item.quantity,
            checked: status
          }
        }
        return item;
      })
      localStorage.setItem('cart', JSON.stringify(cart));
    })
  })
}
function deleteItemInCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart = cart.filter(item => {
    return item.productId === productId ? false : true;
  })
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantityItemCart(productId, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart = cart.map(item => {
    if(item.productId === productId) {
      return  {
        productId: productId,
        quantity: quantity,
        checked: item.checked || 0
      }
    } 
    return item;
  })
  localStorage.setItem('cart', JSON.stringify(cart));
}
$(document).ready(function(){
  renderCartItems();
  
  
})