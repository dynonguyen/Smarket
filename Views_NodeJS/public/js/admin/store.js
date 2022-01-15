function onPageItemClick(page) {
  location.href = `/admin/management/store?page=${page}`;
}

$(document).ready(function () {
  pagination('#pagination', total, pageSize, page, onPageItemClick);
});
