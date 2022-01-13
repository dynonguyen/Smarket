var revenueChart = null;
var incomeChart = null;

const monthLabels = [
    'T1',
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'T8',
    'T9',
    'T10',
    'T11',
    'T12',
];
const quarterLabels = ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'];
const titleMonthRevenue = 'Doanh thu theo tháng (VNĐ)';
const titleMonthIncome = 'Thu nhập theo tháng (VNĐ)';
const titleQuarterRevenue = 'Doanh thu theo quý (VNĐ)';
const titleQuarterIncome = 'Thu nhập theo quý (VNĐ)';
//line

const chartConfig = (data = [], title, label) => ({
    type: 'line',
    data: {
        labels: label,
        datasets: [
            {
                label: title,
                data: data,
                backgroundColor: ['rgba(105, 0, 132, .2)'],
                borderColor: ['rgba(200, 99, 132, .7)'],
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
    },
});

function loadInitChart() {
    var revenueData = JSON.parse('[' + revenue + ']');
    var incomeData = JSON.parse('[' + income + ']');
    revenueChart = new Chart(
        document.getElementById('revenueChart').getContext('2d'),
        chartConfig(revenueData, titleMonthRevenue, monthLabels)
    );

    incomeChart = new Chart(
        document.getElementById('incomeChart').getContext('2d'),
        chartConfig(incomeData, titleMonthIncome, monthLabels)
    );
}

function getYear() {
    $('#type').change(function () {
        const type = $(this).val();
        if (type == 'month' || type == 'quarter') {
            $('.yearSelection').empty();
            myFetch(`${constant.JAVA_API_BASE_URL}/common/payment`)
                .then(async (response) => {
                    const resApi = await response.json();
                    var yearPayment = new Set();
                    for (var x in resApi) {
                        var year = new Date(
                            resApi[x].paymentTime
                        ).getFullYear();
                        yearPayment.add(year);
                        const arrayTemp = Array.from(yearPayment).sort(
                            (a, b) => a - b
                        );
                        yearPayment = new Set(arrayTemp);
                    }
                    var strHtml =
                        '<select id="yearSelected" name="year"> <option hidden disabled selected> Năm thống kê </option>';
                    yearPayment.forEach(function (value) {
                        strHtml += `<option value="${value}">${value}</option>`;
                    });
                    strHtml += '</select>';
                    $('.yearSelection').append(strHtml);
                })
                .catch((e) => {
                    handlerError();
                })
                .finally(() => {
                    $('select').selectize();
                });
        }
    });
}

function renderChart(chart, data, title, label) {
    switch (chart) {
        case 'revenueChart':
            revenueChart && revenueChart.destroy();
            revenueChart = new Chart(
                document.getElementById('revenueChart').getContext('2d'),
                chartConfig(data, title, label)
            );
            break;
        case 'incomeChart':
            incomeChart && incomeChart.destroy();
            incomeChart = new Chart(
                document.getElementById('incomeChart').getContext('2d'),
                chartConfig(data, title, label)
            );
            break;
    }
}

function normalizeData(typeStatistic, data) {
    if (typeStatistic == 'month') {
        const revenueData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const incomeData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (x in data) {
            var month = new Date(data[x].paymentTime).getMonth();
            revenueData[month] += data[x].totalMoney;
            incomeData[month] +=
                data[x].totalMoney - data[x].shippingMoney - data[x].orderTotal;
        }
        renderChart(
            'revenueChart',
            revenueData,
            titleMonthRevenue,
            monthLabels
        );
        renderChart('incomeChart', incomeData, titleMonthIncome, monthLabels);
    } else if (typeStatistic == 'quarter') {
        const revenueData = [0, 0, 0, 0];
        const incomeData = [0, 0, 0, 0];
        for (x in data) {
            var month = new Date(data[x].paymentTime).getMonth();
            switch (month) {
                case (1, 2, 3):
                    revenueData[0] += data[x].totalMoney;
                    incomeData[0] +=
                        data[x].totalMoney -
                        data[x].shippingMoney -
                        data[x].orderTotal;
                    break;
                case (4, 5, 6):
                    revenueData[1] += data[x].totalMoney;
                    incomeData[1] +=
                        data[x].totalMoney -
                        data[x].shippingMoney -
                        data[x].orderTotal;
                    break;
                case (7, 8, 9):
                    revenueData[2] += data[x].totalMoney;
                    incomeData[2] +=
                        data[x].totalMoney -
                        data[x].shippingMoney -
                        data[x].orderTotal;
                    break;
                case (10, 11, 12):
                    revenueData[3] += data[x].totalMoney;
                    incomeData[3] +=
                        data[x].totalMoney -
                        data[x].shippingMoney -
                        data[x].orderTotal;
                    break;
            }
        }
        renderChart(
            'revenueChart',
            revenueData,
            titleQuarterRevenue,
            quarterLabels
        );
        renderChart(
            'incomeChart',
            incomeData,
            titleQuarterIncome,
            quarterLabels
        );
    }
}

function updateStatisticData() {
    $('.yearSelection').change(function () {
        const yearSelected = $(document.getElementById('yearSelected')).val();

        myFetch(
            `${constant.JAVA_API_BASE_URL}/admin/statistic/income?y=${yearSelected}`
        )
            .then(async (response) => {
                const updateData = await response.json();
                const typeStatistic = $('#type').val();
                normalizeData(typeStatistic, updateData);
            })
            .catch((e) => {
                console.log('Error: ' + e);
            });
    });
}

function getIncomeByRequire() {
    getYear();
    updateStatisticData();
}

$(document).ready(function () {
    $('select').selectize();
    loadInitChart();
    getIncomeByRequire();
});
