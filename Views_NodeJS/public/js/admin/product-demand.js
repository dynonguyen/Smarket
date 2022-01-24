const chartOptions = {
  type: 'pie',
  data: {
    labels: products,
    datasets: [
      {
        data: quantities,
        backgroundColor: [
          'rgb(73, 231, 165)',
          'rgb(255, 205, 86)',
          'rgb(247, 92, 30)',
          'rgb(233, 51, 51)',
          'rgb(30, 30, 46)',
          'rgb(120, 201, 195)',
          'rgb(114, 162, 14)',
          'rgb(255, 202, 40)',
        ],
        borderColor: 'transparent',
        hoverOffset: 4,
        spacing: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
};

$(document).ready(function () {
  new Chart(document.getElementById('chart').getContext('2d'), chartOptions);
});
