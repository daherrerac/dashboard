const chartConfig = {
  datasetsBackgroundColor: '#14DFFF',
  datasetsBorderColor: '#14DFFF',
  datasetsColor: '#ffffff',
  datasetsBorderWidth: 0,
  options: {
    legend: {
      display: false,
      color: '#ffffff'
    },
    borderRadius: 10,
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '',
        color: '#ffffff',
        padding: {
          top: 10,
          bottom: 10,
          left: 50,
          right: 50
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          min: 0,
          max: 100,
          stepSize: 10
        },
        grid: {
          display: false,

        },

      },
      y: {
        grid: {
          display: false,
        },
      }

    }
  }
};