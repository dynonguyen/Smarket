const defaultChartData = [1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 1, 1, 1, 2, 4];
const defaultLabels = ['Thịt bò', 'Thịt lợn', 'Thịt gà', 'Cá thu', 'Cá tra', 'Cá diêu hồng', 'Ốc mỡ', 'Ốc móng tay', 'Ốc mỡ', 'Ốc móng tay', 'Thịt bò', 'Thịt lợn', 'Thịt gà', 'Cá thu', 'Cá tra'];
const groupLabels = ['Thịt, cá, hải sản', 'Rau, củ, trái cây','Đồ uống', 'Bánh kẹo', 'Mì, cháo, phở, bún', 'Dầu ăn, gia vị', 'Gạo, bột, đồ khô', 'Đồ gia dụng'];
let groupChart = null;
let typeChart = null;
let groupChartData = null;


const chartOptions = (data = [], title) => ({
	type: 'pie',
	data: {
		labels: groupLabels,
		datasets: [
			{
				data,
				backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#7d77a6', '#27AE60', '#884EA0', '#D35400',  '#00eeff'],
				borderColor: 'transparent',
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
const typeChartOption = (data = [], labels = [], title ) => ({
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: labels[0],
      data: data,
      backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#7d77a6', '#27AE60', '#884EA0', '#D35400', '#00eeff'],
      borderColor: 'tranparent',
      borderWidth: 1
    }],
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



function renderChart(chartId, data, title, labels = defaultLabels) {
  switch (chartId) {
		case 'groupChart':
			groupChart && groupChart.destroy();
			groupChart = new Chart(
				document.getElementById(chartId).getContext('2d'),
				chartOptions(data, title),
			);
			break;
		case 'typeChart':
			typeChart && typeChart.destroy();
			typeChart = new Chart(
				document.getElementById(chartId),
				typeChartOption(data, labels, title),
			);
			break;
	}

}

function renderGroupChart() {
  function handlerError() {
		const chart = Chart.getChart('groupChart');
		chart?.destroy();

		const canvas = document.getElementById('groupChart');
		const ctx = canvas.getContext('2d');
		ctx.textAlign = 'center';
		ctx.fillText('Không có dữ liệu', canvas.width / 2, canvas.height / 2);
	}
  //renderChart('groupChart', defaultChartData, 'Thống kê nhu yếu phẩm theo nhóm');
  myFetch(
    `${constant.JAVA_API_BASE_URL}/admin/statistic/type/amount-product`,
  )
    .then(async (response) => {
      let userChartData = await response.json();
      let data = [];
      if (!userChartData || userChartData.every((i) => i === 0)) {
        handlerError();
      } else {
        for (const item of userChartData) {
          data.push(item.amount);
        }
        renderChart('groupChart', data, 'Thống kê số lượng nhu yếu phẩm theo nhóm');
      }
    })
    .catch((e) => {
      handlerError();
    })
    .finally(() => {
      $(`#groupChart.chart-box`).removeClass('loading');
    });
  
}


function renderTypeChart(groupType) {
  function handlerError() {
		const chart = Chart.getChart('typeChart');
		chart?.destroy();

		const canvas = document.getElementById('typeChart');
		const ctx = canvas.getContext('2d');
		ctx.textAlign = 'center';
		ctx.fillText('Không có dữ liệu', canvas.width / 2, canvas.height / 2);
	}
  myFetch(
    `${constant.JAVA_API_BASE_URL}/admin/statistic/type/amount-type?group=${groupType}`,
  )
    .then(async (response) => {
      let userChartData = await response.json();
      let data = [];
      let labels = [];
      if (!userChartData || userChartData.every((i) => i === 0)) {
        handlerError();
      } else {
        for (const item of userChartData) {
          data.push(item.amount);
          labels.push(item.name)
        }
        renderChart('typeChart', data, 'Thống kê số lượng nhu yếu phẩm theo loại', labels);
      }
    })
    .catch((e) => {
      handlerError();
    })
    .finally(() => {
      $(`#groupChart.chart-box`).removeClass('loading');
    });
  
}

async function  onGroupChange() {
  renderTypeChart($('#groupType').val());
  $('#tbody').empty();
  const data = await $.get( `${window.location.origin}/admin/statistic/product/amount-type?group=${$('#groupType').val()}`);
  for (const item of data) {
    $('#tbody').append(`
      <tr>
        <td>${item.productTypeName}</td>
        <td>${item.name}</td>
        <td>${item.productId}</td>
        <td>${item.productName}</td>
        <td>${item.unitPrice}</td>
        <td>${item.unit}/${item.quantitativeUnit}</td>
      </tr>
    `);
  }
}
convertArrayOfObjectsToCSV = args => {  
  const data = args.data;
  if (!data || !data.length) return;

  const columnDelimiter = args.columnDelimiter || ',';
  const lineDelimiter = args.lineDelimiter || '\n';

  const keys = Object.keys(data[0]);

  let result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(item => {
    ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;
      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

downloadCSV = async args => {
  const Data = await $.get( `${window.location.origin}/admin/statistic/product/amount-type?group=${$('#groupType').val()}`);
  let csv = convertArrayOfObjectsToCSV({
    data: Data
  });
  if (!csv) return;
  const filename = args.filename || 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv;
  }
  const data = encodeURI(csv);

  const link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', filename);
  link.click();
}

async function Printer() {

  downloadCSV({filename: groupLabels[$('#groupType').val()]}); 
}
$(document).ready(function () {
  renderGroupChart();
  $('#printer').hide();
  renderChart('typeChart', defaultChartData, 'Thống kê số lượng nhu yếu phẩm theo loại', defaultLabels);
  $('#groupType').on('change', function() {
    $('#printer').show();
    onGroupChange();
  })
  $('#printer').click(Printer);
});
