var urlParams = new URLSearchParams(window.location.search);
$.each($('.btn-accept'), function(){
  $(this).click(function(){
      let id = $(this).attr('id');
    myFetch(
    `${constant.JAVA_API_BASE_URL}/admin/management/account/detail?accountId=${id}`,
    )
    .then(async (response) => {
        const user = await response.json();
        const type = parseInt(urlParams.get('type')) || 2;
        myFetch(
        `${constant.JAVA_API_BASE_URL}/admin/management/account/accept/accepted?status=1&id=${type === 2 ? user.shipperId : user.storeId}&type=${type}`,
        )
        .then(async (response) => {
            const res = await response.json();
            if(res === 1) {
                $(this).parent().parent().remove();
                return;
            } else {
                alert('Duyệt không thành công!');
                return;
            }
            
        })
        .catch((e) => {
            alert('Duyệt không thành công!');
            return;
        })
        .finally(() => {
        });
    })
    .catch((e) => {
        alert('Duyệt không thành công!');
        return;
    })
    .finally(() => {
        
    });
  });
});


function onPageItemClick(page) {
  const type = urlParams.get('type') ? urlParams.get('type') : '1';
window.location.href = `/admin/management/approve?type=${type}&page=${page}`;
}
function onTypeClick(type) {
  window.location.href = `/admin/management/approve?type=${type}`
}

$(document).ready(function () {
	pagination('#pagination', total, pageSize, page, onPageItemClick);
    switch(urlParams.get('type')) {
        case '2': {
            $('#shipper').addClass('btn-success');
            break;
        };
        case '3': {
            $('#store').addClass('btn-success');
            break;
        };
        default: {
            $('#shipper').addClass('btn-success');
            break;
        } 
    }
    $('.type-account').each(function() {
        $(this).click(function() {
            switch($(this).text()) {
                case 'Shipper': {
                    return onTypeClick(2);
                };
                case 'Cửa hàng': {
                    return onTypeClick(3);                   
                };
                default: return onTypeClick(2);
            }
        })
    })
});