const urlProvince = `${window.location.origin}/common/province-all`;
const urlDistrict = `${window.location.origin}/common/district?provinceid=`;
const urlWard = `${window.location.origin}/common/ward?districtid=`;

$(document).ready(async function () {
  let provinces;
  try {
    provinces = await $.get(urlProvince);
  } catch (error) {
    alert('Lỗi không tải được dữ liệu tỉnh thành, vui lòng thử lại sau');
  }

  $('form').submit(function (e) {
    e.preventDefault();
    const msgBox = $('#formMsg');
    try {
      const username = $('#username').val().trim();
      const password = $('#password').val().trim();
      const confirmPasword = $('#confirm-password').val().trim();
      const email = $('#email').val().trim();
      const name = $('#name').val();
      const phone = $('#phone').val();
      const province = $('#province').val();
      const district = $('#district').val();
      const ward = $('#ward').val();
      const address = $('#address').val();
      const peopleid = $('#peopleId').val();
      let certificate;
      let categories;
      if ($('#type').val() === '2') {
        certificate = $('#certificate').val();
        categories = $('#categories').val();
      }
      if ($('#type').val() === '3') {
        certificate = $('#certificate').val();
      }

      if (!username) {
        return msgBox.text('Vui lòng nhập tên đăng nhập');
      }

      if (!password) {
        return msgBox.text('Vui lòng nhập mật khẩu');
      }

      if (!confirmPasword) {
        return msgBox.text('Vui lòng nhập xác nhận mật khẩu');
      }

      if (!email) {
        return msgBox.text('Vui lòng nhập địa chỉ email');
      }

      if (username.length > 20) {
        return msgBox.text('Tên đăng nhập tối đa 20 ký tự');
      }

      if (password.length > 50) {
        return msgBox.text('Mật khẩu tối đa 50 ký tự');
      }

      if (password !== confirmPasword) {
        return msgBox.text('Xác nhận mật khẩu không trùng khớp');
      }

      if (email.length > 50) {
        return msgBox.text('Địa chỉ email tối đa 50 ký tự');
      }

      if (!$('#check').is(':checked')) {
        return msgBox.text('Vui lòng đồng ý với các cam kết');
      }

      // if(!name || !phone || !province || !district || !address || !ward || !peopleid || !certificate) {
      // 	return msgBox.text('Vui lòng nhập đầy đủ thông tin');
      // }

      msgBox.text('');
      $('button[type="submit"]').addClass('disabled');

      this.submit();
    } catch (error) {
      return msgBox.text(error);
    }
  });
  $('select').on('change', function () {
    $('#option-clear').remove();
    switch ($(this).val()) {
      case '1': {
        $('#addition').empty();
        $('#addition').html(`
					<div class="col">
						<div class="form-group"><label class="form-control-label" for="name">HỌ TÊN</label><input class="form-control" id="name" type="text" name="name" maxLength="50" /></div>
						<div class="form-group"><label class="form-control-label" for="peopleid">CCCD/CMND</label><input class="form-control" id="peopleid" type="text" name="peopleid" maxLength="13" /></div>
						<div class="form-group"><label class="form-control-label" for="phone">SỐ ĐIỆN THOẠI</label><input class="form-control" id="phone" type="text" name="phone" maxLength="10" /></div>
						<div class="form-group"><label class="form-control-label" for="address">ĐỊA CHỈ CỤ THỂ</label><input class="form-control" id="address" type="text" name="address" maxLength="1000" /></div>
					</div>
					<div class="col">
						<div class="form-group"> <label class="form-control-label" for="province">TỈNH/THÀNH PHỐ</label><select class="custom-select form-select" id="province" name="province">
								<option id="option-clear" value="1">Tỉnh/Thành phố</option>
							</select></div>
						<div class="form-group"> <label class="form-control-label" for="district">QUẬN/HUYỆN</label><select class="custom-select form-select" id="district" name="district">
								<option id="option-clear" value="1">Quận/Huyện</option>
							</select></div>
						<div class="form-group"> <label class="form-control-label" for="ward">PHƯỜNG/XÃ</label><select class="custom-select form-select" id="ward" name="ward">
								<option id="option-clear" value="1">Phường/Xã</option>
							</select></div>
						<div><a id="contract" href="/common/contract" target="_blank">Nội dung cam kết</a></div>
						<div class="form-check constract mt-3"><input class="form-check-input mt-2"  id="check" type="checkbox" /><label class="form-check-label form-control-label" for="check">Đồng ý với cam kết trên </label></div>
					</div>
				`);
        break;
      }
      case '2': {
        $('#addition').empty();
        $('#addition').html(`
				<div class="col">
				<div class="form-group"><label class="form-control-label" for="name">HỌ TÊN</label><input class="form-control" id="name" type="text" name="name" maxlength="50" /></div>
				<div class="form-group"><label class="form-control-label" for="peopleid">CCCD/CMND</label><input class="form-control" id="peopleid" type="text" name="peopleid" maxlength="13" /></div>
				<div class="form-group"><label class="form-control-label" for="phone">SỐ ĐIỆN THOẠI</label><input class="form-control" id="phone" type="text" name="phone" maxlength="10" /></div>
				<div class="form-group"><label class="form-control-label" for="address">ĐỊA CHỈ CỤ THỂ</label><input class="form-control" id="address" type="text" name="address" maxlength="1000" /></div>
				</div>
				<div class="col">
					<div class="form-group"><label class="form-control-label" for="certificate">GIẤY XÁC NHẬN TIÊM CHỦNG</label><input class="form-control" accept="image/*" id="certificate" type="file" name="certificate" maxLength="50" /></div>
					<div class="form-group"><label class="form-control-label" for="province">TỈNH/THÀNH PHỐ</label><select class="custom-select form-select" id="province" name="province">
							<option id="option-clear" value="1">Tỉnh/Thành phố</option>
						</select></div>
					<div class="form-group"><label class="form-control-label" for="district">QUẬN/HUYỆN</label><select class="custom-select form-select" id="district" name="district">
							<option id="option-clear" value="1">Quận/Huyện</option>
						</select></div>
					<div class="form-group"><label class="form-control-label" for="ward">PHƯỜNG?XÃ</label><select class="custom-select form-select" id="ward" name="ward">
							<option id="option-clear" value="1">Phường/Xã</option>
						</select></div>
					<div class="text-center"><a id="contract" href="/common/contract" target="_blank">Nội dung cam kết</a></div>
					<div class="form-check constract mt-3"><input class="form-check-input mt-2" id="check" type="checkbox" /><label class="form-check-label form-control-label" for="check">Đồng ý với cam kết</label></div>
				</div>
				`);
        break;
      }
      case '3': {
        $('#addition').empty();
        $('#addition').html(`
				<div class="col">
				<div class="form-group"><label class="form-control-label" for="name">TÊN CỬA HÀNG/SIÊU THỊ</label><input class="form-control" id="name" type="text" name="name" maxlength="50" /></div>
				<div class="form-group"><label class="form-control-label" for="storeType">LOẠI CƠ SỞ</label><select class="custom-select form-select" id="storeType" name="storeType">
						<option value="1">Cửa hàng</option>
						<option value="2">Siêu thị</option>
					</select></div>
				<div class="form-group"><label class="form-control-label" for="peopleid">MÃ ĐĂNG KÝ KINH DOANH</label><input class="form-control" id="peopleid" type="text" name="peopleid" maxlength="13" /></div>
				<div class="form-group"><label class="form-control-label" for="phone">SỐ ĐIỆN THOẠI</label><input class="form-control" id="phone" type="text" name="phone" maxlength="10" /></div>
				<div class="form-group"><label class="form-control-label" for="categories">DANH MỤC KINH DOANH</label><input class="form-control" id="phone" type="text" name="categories" maxlength="500" /></div>
				</div>
				<div class="col">
					<div class="form-group"><label class="form-control-label" for="certificate">CHỨNG CHỈ KINH DOANH</label><input class="form-control" accept="image/*" id="certificate" type="file" name="certificate" maxLength="50" /></div>
					<div class="form-group"><label class="form-control-label" for="province">TỈNH/THÀNH PHỐ</label><select class="custom-select form-select" id="province" name="province">
							<option id="option-clear" value="0">Tỉnh/Thành phố</option>
						</select></div>
					<div class="form-group"><label class="form-control-label" for="district">QUẬN/HUYỆN</label><select class="custom-select form-select" id="district" name="district">
							<option id="option-clear" value="0">Quận/Huyện</option>
						</select></div>
					<div class="form-group"><label class="form-control-label" for="ward">PHƯỜNG?XÃ</label><select class="custom-select form-select" id="ward" name="ward">
							<option id="option-clear" value="0">Phường/Xã</option>
						</select></div>
					<div class="form-group"><label class="form-control-label" for="address">ĐỊA CHỈ CỤ THỂ</label><input class="form-control" id="address" type="text" name="address" maxlength="1000" /></div>
					<div><a id="contract" href="/common/contract" target="_blank">Nội dung cam kết</a></div>
					<div class="form-check constract mt-3"><input class="form-check-input mt-2" id="check" type="checkbox" /><label class="form-check-label form-control-label" for="check">Đồng ý với cam kết</label></div>
				</div>
				`);
        break;
      }
    }
    for (const item of provinces) {
      $('#province').append(`
				<option value="${item.provinceId}">${item.provinceName}</option>
			`);
    }
    $('#province').on('change', async function () {
      $('#district').empty();
      $('#ward').empty();
      $('#district').append(`
				<option id="option-clear" value="0">Quận/Huyện</option>
			`);
      $('#ward').append(`
				<option id="option-clear" value="0">Phường/Xã</option>
			`);
      const districts = await $.get(`${urlDistrict}${$(this).val()}`);
      for (const item of districts) {
        $('#district').append(`
					<option value="${item.districtId}">${
          item.prefix + ' ' + item.districtName
        }</option>
				`);
      }
    });
    $('#district').on('change', async function () {
      $('#ward').empty();
      $('#ward').append(`
				<option id="option-clear" value="0">Phường/Xã</option>
			`);
      const wards = await $.get(`${urlWard}${$(this).val()}`);
      for (const item of wards) {
        $('#ward').append(`
					<option value="${item.wardId}">${item.prefix + ' ' + item.wardName}</option>
				`);
      }
    });
  });
});
