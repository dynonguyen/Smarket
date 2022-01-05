function onPageItemClick(page) {
	location.href = `/admin/management/order?page=${page}`;
}

$(document).ready(function () {
	pagination('#pagination', total, pageSize, page, onPageItemClick);
});
