function onPageItemClick(page) {
  location.href = `/store/product-list?&page=${page}`;
}

$(document).ready(function () {
  pagination('#pagination', total, pageSize, page, onPageItemClick);
});
