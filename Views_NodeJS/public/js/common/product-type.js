
var urlParams = new URLSearchParams(window.location.search);

function onPageItemClick(page) {
  const type = urlParams.get('type') ? urlParams.get('type') : '1';
window.location.href = `/admin/management/account?type=${type}&page=${page}`;
}

function onTypeChange() {
  let url = `${window.location.origin}/common/categories/${groupId}?`;
  const type = $('#type').val();
  const order = urlParams.get('order') ?urlParams.get('order') : null;
  if(type) {
    url+= `type=${type}`;
  } 
  if(order) {
    url+= `&order=${order}`;
  }
  window.location.href = url;
}


async function viewMoreProduct() {

  if(urlParams.get('type') && urlParams.get('type') !== '0') {
    const products = await $.get(`${window.location.origin}/common/categories/${groupId}/view-more?type=${urlParams.get('type')}&page=${page++}`);
    if(products.length > 0) {
      if(products.length < 12) {
        $('#view-more').hide();
      }
      for (const product of products) {
        $('#products').append(`
          <div class="my-2 mx-2">
            <div class="product-card"><a class="product-card__top" href="/common/product/${product.productId}"> <img src="${product.thumbnail}" class="thumbnail" alt="${product.productName}" onerror="this.onerror=null;this.src='https://res.cloudinary.com/tuan-cloudinary/image/upload/v1642031448/smarket/no-img.png'" /></a>
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
  } else {
      const products = await $.get(`${window.location.origin}/common/categories/${groupId}/view-more?page=${page++}`);
      if(products.length > 0) {
        if(products.length < 12) {
          $('#view-more').hide();
        }
        for (const product of products) {
          $('#products').append(`
            <div class="my-2 mx-2">
              <div class="product-card"><a class="product-card__top" href="/common/product/${product.productId}"> <img src="${product.thumbnail}" class="thumbnail" alt="${product.productName}" onerror="this.onerror=null;this.src='https://res.cloudinary.com/tuan-cloudinary/image/upload/v1642031448/smarket/no-img.png'" /></a>
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
  
}

async function sortProducts() {
  $('#products').empty();
  if(urlParams.get('type') && urlParams.get('type') !== '0') {
    const products = await $.get(`${window.location.origin}/common/categories/${groupId}/sort?type=${urlParams.get('type')}&page=${page}&order=${$('#order').val()}`);
    if(products.length > 0) {
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
    }   else {
      $('#view-more').hide();
    } 
  } else {
      const products = await $.get(`${window.location.origin}/common/categories/${groupId}/sort?page=${page}&order=${$('#order').val()}`);
      if(products.length > 0) {
        for (const product of products) {
          $('#products').append(`
            <div class="my-2 mx-2">
              <div class="product-card"><a class="product-card__top" href="/common/product/${product.productId}"> <img src="${product.thumbnail}" class="thumbnail" alt="${product.productName}" onerror="this.onerror=null;this.src='https://res.cloudinary.com/tuan-cloudinary/image/upload/v1642031448/smarket/no-img.png'" /></a>
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
}

$(document).ready(function(){
  $('#type').on('change', function() {
    onTypeChange();
  })
  $('#order').on('change', function(){
    sortProducts();
  })
  $('#view-more').click(function(){
    viewMoreProduct();
  })
  
})