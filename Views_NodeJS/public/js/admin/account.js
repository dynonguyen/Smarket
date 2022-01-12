function onPageItemClick(page) {
    const type = urlParams.get('type') ? urlParams.get('type') : '1';
	window.location.href = `/admin/management/account?type=${type}&page=${page}`;
}
function onTypeClick(type) {
    window.location.href = `/admin/management/account?type=${type}`
}
var urlParams = new URLSearchParams(window.location.search);
$(document).ready(function () {
	pagination('#pagination', total, pageSize, page, onPageItemClick);
    switch(urlParams.get('type')) {
        case '1': {
            $('#customer').addClass('btn-success');
            break;
        };
        case '2': {
            $('#shipper').addClass('btn-success');
            break;
        };
        case '3': {
            $('#store').addClass('btn-success');
            break;
        };
        case '4': {
            $('#admin').addClass('btn-success');
            break;
        };
        default: {
            $('#customer').addClass('btn-success');
            break;
        } 
    }
    $('.type-account').each(function() {
        $(this).click(function() {
            switch($(this).text()) {
                case 'Khách hàng': {                   
                    return onTypeClick(1);
                };
                case 'Shipper': {
                    return onTypeClick(2);
                };
                case 'Cửa hàng': {
                    return onTypeClick(3);                   
                };
                case 'Người quản lý': {
                    return onTypeClick(4);
                };
                default: return onTypeClick(1);
            }
        })
    })
});
