
function checkCart() {
  const productId = window.location.href.slice(window.location.href.indexOf('product/') + 8);
  const products = JSON.parse(localStorage.getItem('cart'));
  if(products) {
    for (const product of products) {
      if(product.productId === productId) {
        const quantity = product.quantity;
        $('#quantity').val(quantity);
        $('#add-cart').html(`
          Cập nhật giỏ hàng
          <i class="bi bi-cart-plus"/>
        `)
      }
      
    }
  }
}

$(document).ready(function(){
  checkCart();

  $('.img-thumbnail').each(function(){
    $(this).click(function(){
      $('.active img').attr('src', $(this).attr('src'));
    })
  })

  $('#plus').click(function(){
    let quantity = parseInt($('#quantity').val());
    if(quantity < 20) {
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
    const productId = window.location.href.slice(window.location.href.indexOf('product/') + 8);
    let products = JSON.parse(localStorage.getItem('cart'));
    if(products) {
      for (let item of products) {
        if(item.productId === productId) {
          item.quantity = $('#quantity').val();
          localStorage.setItem('cart', JSON.stringify(products));
          return;
        }
      }
    } else {
      products = [];
      const product = {
        productId: productId,
        quantity: $('#quantity').val()
      }
      products.push(product);
      localStorage.setItem('cart', JSON.stringify(products));
      $('#add-cart').html(`
        Cập nhật giỏ hàng
        <i class="bi bi-cart-plus"/>
      `)
    }  
  })

    
});