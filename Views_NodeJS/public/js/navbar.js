const urlProvince = `${window.location.origin}/common/province-all`;
const urlDistrict = `${window.location.origin}/common/district?provinceid=`;
const urlWard = `${window.location.origin}/common/ward?districtid=`;

let provinces = [];

async function getProvincesAjax() {
  const pRes = await fetch(urlProvince, {
    method: 'GET',
  });
  provinces = (await pRes.json()) || [];
}

async function getDistrictAjax(provinceId) {
  const dRes = await fetch(`${urlDistrict}${provinceId}`, { method: 'GET' });
  return await dRes.json();
}

async function getWardAjax(districtId) {
  const wRes = await fetch(`${urlWard}${districtId}`, { method: 'GET' });
  return await wRes.json();
}

function renderProvinceToSelect(selector) {
  const provinceOptions = provinces
    .map((p) => `<option value="${p.provinceId}">${p.provinceName}</option>`)
    ?.join();
  const html = `
  <option selected, disabled, hidden, value="">Chọn tỉnh / thành</option>
  ${provinceOptions}
`;

  $(selector).html(html);
}

function onProvinceChange(selector) {
  $(selector).change(async function () {
    const id = Number($(this).val());
    if (!id || isNaN(id)) return;
    const districts = (await getDistrictAjax(id)) || [];

    const select = $(selector).siblings('#district');
    const selectize = select[0].selectize;
    selectize.clearOptions();

    // reset ward select
    const wardSelect = $(selector).siblings('#ward')[0]?.selectize;
    wardSelect?.clear();
    wardSelect?.clearOptions();

    districts.forEach((d) =>
      selectize.addOption({
        text: `${d.prefix} ${d.districtName}`,
        value: d.districtId,
      })
    );

    onDistrictChange(select);
  });
}

function onDistrictChange(jqSelector) {
  jqSelector.change(async function () {
    const id = Number($(this).val());
    if (!id || isNaN(id)) return;

    const wards = (await getWardAjax(id)) || [];

    const select = jqSelector.siblings('#ward');
    const selectize = select[0].selectize;
    selectize.clearOptions();

    wards.forEach((w) =>
      selectize.addOption({
        text: `${w.prefix} ${w.wardName}`,
        value: w.wardId,
      })
    );
  });
}

function searchProduct() {
  window.location.href = `${window.location.origin}/common/search?keyword=${$('#search-input').val()}`
}

function loadCart(){
  const cart = JSON.parse(localStorage.getItem('cart'));
  $('#cart').append(`
    <span class="cart-total">${cart.length}</span>
  `)
}
$(document).ready(async function () {
  await getProvincesAjax();
  loadCart();
  renderProvinceToSelect('#province');
  $('#locationModal select').selectize();
  $('#search').click(function(){
    searchProduct();
  });
  onProvinceChange('#province');
});
