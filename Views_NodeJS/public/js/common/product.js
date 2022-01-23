
function loadCart(){
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  $('#cart').append(`
    <span class="cart-total">${cart.length}</span>
  `)
}

$(document).ready(function(){

  $('.img-thumbnail').each(function(){
    $(this).click(function(){
      $('.active img').attr('src', $(this).attr('src'));
    })
  })

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

  $('#add-cart').click(function(){
    const productId = parseInt(window.location.href.slice(window.location.href.indexOf('product/') + 8));
    let products = JSON.parse(localStorage.getItem('cart'));
    if(products) {
      for (let item of products) {
        if(item.productId === productId) {
          item.quantity = parseInt(item.quantity) + parseInt($('#quantity').val());
          localStorage.setItem('cart', JSON.stringify(products));
          alert('Thêm giỏ hàng thành công!');
          $('#quantity').val('1');
          loadCart();
          return;
        }
      }
      const product = {
        productId: productId,
        quantity: parseInt($('#quantity').val()),
        checked: 0
      }
      products.push(product);
      localStorage.setItem('cart', JSON.stringify(products));
    } else {
      products = [];
      const product = {
        productId: productId,
        quantity: parseInt($('#quantity').val()),
        checked: 0
      }
      products.push(product);
      localStorage.setItem('cart', JSON.stringify(products));
      alert('Thêm giỏ hàng thành công!');
      $('#quantity').val('1');
      loadCart();
    }
    
  })

    
});