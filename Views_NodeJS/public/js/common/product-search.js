var urlParams = new URLSearchParams(window.location.search);

async function viewMoreProduct() {
  const products = await $.get(`${window.location.origin}/common/search/more/?keyword=${keyword}&page=${page++}`);
    if(products.length > 0) {
      if(products.length < 12) {
        $('#view-more').hide();
      }
      for (const product of products) {
        $('#products').append(`
          <div class="my-2 mx-2">
            <div class="product-card"><a class="product-card__top" href="/common/product/${product.productId}}"> <img src="${product.thumbnail}" class="thumbnail" alt="${product.productName}" onerror="this.onerror=null;this.src='https://res.cloudinary.com/tuan-cloudinary/image/upload/v1642031448/smarket/no-img.png'" /></a>
                <div class="product-card__body"><a class="product-card__title" href="/common/product/${product.productId}">${product.productName}</a>
                    <div class="mt-auto">
                        <p class="product-card__price"><span class="price">${product.unitPrice}</span><span class="unit">&nbsp;/&nbsp;${product.quantitativeUnit}</span></p>
                    </div>
                </div>
                <div class="product-card__bottom"><button class="btn btn-primary w-100 add-cart">Thêm giỏ hàng <i class="bi bi-cart-plus"></i></button></div>
            </div>
          </div>
        `)
      }
    } else {
      $('#view-more').hide();
    }
}

$(document).ready(function() {
  $('#view-more').click(function() {
    viewMoreProduct();
  })
})