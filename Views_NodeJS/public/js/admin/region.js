let userChart = null;
let shipperChart = null;
let storeChart = null;

const defaultChartData = [1, 1, 1, 1];

const chartOptions = (data = [], title) => ({
	type: 'pie',
	data: {
		labels: ['Vùng xanh', 'Vùng vàng', 'Vùng cam', 'Vùng đỏ'],
		datasets: [
			{
				data,
				backgroundColor: [
					'rgb(73, 231, 165)',
					'rgb(255, 205, 86)',
					'rgb(247, 92, 30)',
					'rgb(233, 51, 51)',
				],
				hoverOffset: 4,
				spacing: 0,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			title: {
				display: true,
				text: title,
				font: {
					size: 18,
				},
			},
		},
	},
});

function loadInitChart() {
	userChart = new Chart(
		document.getElementById('userChart'),
		chartOptions(defaultChartData, 'Khách hàng'),
	);
	shipperChart = new Chart(
		document.getElementById('shipperChart'),
		chartOptions(defaultChartData, 'Shipper'),
	);
	storeChart = new Chart(
		document.getElementById('storeChart'),
		chartOptions(defaultChartData, 'Cửa hàng'),
	);
}

function renderChart(chartId, data, title) {
	switch (chartId) {
		case 'userChart':
			userChart && userChart.destroy();
			userChart = new Chart(
				document.getElementById(chartId),
				chartOptions(data, title),
			);
			break;
		case 'shipperChart':
			shipperChart && shipperChart.destroy();
			shipperChart = new Chart(
				document.getElementById(chartId),
				chartOptions(data, title),
			);
			break;
		case 'storeChart':
			storeChart && storeChart.destroy();
			storeChart = new Chart(
				document.getElementById(chartId),
				chartOptions(data, title),
			);
	}
}

function statisticData(charId, title, chartBoxId, userType, provinceId) {
	fetch(
		`${constant.JAVA_API_BASE_URL}/statistic/region?userType=${userType}&provinceId=${provinceId}`,
	).then(async (response) => {
		let userChartData = await response.json();
		if (!userChartData || userChartData.every((i) => i === 0)) {
			userChartData = [1, 0, 0, 0];
		}

		renderChart(charId, userChartData, title);
		$(`#${chartBoxId}.chart-box`).removeClass('loading');
	});
}

function onProvinceChange() {
	$('#province').change(async function () {
		const provinceId = Number($(this).val());
		$('.chart-box').addClass('loading');

		statisticData(
			'userChart',
			'Khách hàng',
			'userBox',
			constant?.USER_TYPES?.CUSTOMER || 1,
			provinceId,
		);

		statisticData(
			'shipperChart',
			'Shipper',
			'shipperBox',
			constant?.USER_TYPES?.SHIPPER || 2,
			provinceId,
		);

		statisticData(
			'storeChart',
			'Cửa hàng',
			'storeBox',
			constant?.USER_TYPES?.STORE || 3,
			provinceId,
		);
	});
}

$(document).ready(function () {
	$('select').selectize();
	onProvinceChange();
	loadInitChart();
});
