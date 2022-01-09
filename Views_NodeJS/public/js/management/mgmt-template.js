const SIDEBAR_STATUS_LS_KEY = 'hide-sidebar';

function loadSidebar() {
	const hideSidebar =
		parseInt(localStorage.getItem(SIDEBAR_STATUS_LS_KEY)) === 1 ? true : false;

	if (hideSidebar) {
		$('#sidebar').css('display', 'none');
		$('#toggleSidebar')
			.removeClass('bi-layout-sidebar-inset-reverse')
			.addClass('bi-layout-sidebar-inset');
	}
}

$(document).ready(function () {
	const sidebar = $('#sidebar');

	// load side bar from show sidebar status LS
	loadSidebar();

	// toggle sidebar
	$('#toggleSidebar').click(function () {
		sidebar.animate({ width: 'toggle' }, 150);

		if ($(this).hasClass('bi-layout-sidebar-inset')) {
			$(this)
				.removeClass('bi-layout-sidebar-inset')
				.addClass('bi-layout-sidebar-inset-reverse');

			localStorage.setItem(SIDEBAR_STATUS_LS_KEY, 0);
		} else {
			$(this)
				.removeClass('bi-layout-sidebar-inset-reverse')
				.addClass('bi-layout-sidebar-inset');

			localStorage.setItem(SIDEBAR_STATUS_LS_KEY, 1);
		}
	});

	// auto active menu item
	const { pathname } = window.location;

	$(`.menu-item[data-path="${pathname}"]`).addClass('active');
});
