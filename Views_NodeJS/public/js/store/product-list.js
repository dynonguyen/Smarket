function onPageItemClick(storeId, page) {
  location.href = `/store/product-list?storeId=${storeId}&page=${page}`;
}

$(document).ready(function () {
  pagination('#pagination', total, pageSize, page, onPageItemClick);
});
