function findNearestStoreByLocation() {
    var provinceId = 1;
    var districtId = 0;
    var wardId = 0;
    $('#province').change(function() {
        provinceId = $(this).val();
    });

    $('#district').change(function() {
        districtId = $(this).val();
    });

    $('#ward').change(function() {
        wardId = $(this).val();
    });

    var regionInfo = {
        provinceId: provinceId,
        districtId: districtId,
        wardId: wardId,
    };

    $('.modal-footer button.btn-primary').click(function() {
        window.location.href = `/common/product-by-region?provinceId=${provinceId}&districtId=${districtId}&wardId=${wardId}`;
    });
}

$(document).ready(function() {
    findNearestStoreByLocation();
});