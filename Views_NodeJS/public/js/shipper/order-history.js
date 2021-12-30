function onPageItemClick(page) {
	location.href = `/shipper/order-history?page=${page}`;
}

$(document).ready(function () {
	pagination('#pagination', total, pageSize, page, onPageItemClick);
});
