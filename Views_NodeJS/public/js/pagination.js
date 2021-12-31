// generate pagination
// options - documentation: https://pagination.js.org/index.html
function pagination(
	selector,
	totalItems = 0,
	pageSize = DEFAULT.PAGE_SIZE,
	currentPage = 1,
	onPageItemClick = (pageNum) => {},
	options = {},
) {
	const totalPage = Math.ceil(total / pageSize);

	if (selector && currentPage <= totalPage) {
		$(selector).pagination({
			dataSource: new Array(totalItems).fill(true),
			pageSize,
			pageNumber: currentPage,
			pageRange: 1,
			autoHidePrevious: true,
			autoHideNext: true,
			...options,
			callback: function () {
				$('.paginationjs-page').click(function () {
					const pageNum = $(this).attr('data-num');
					onPageItemClick(pageNum);
				});
			},
		});
	}
}
