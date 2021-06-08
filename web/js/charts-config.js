const chartConfig = {
  datasetsBackgroundColor: '#14DFFF',
  datasetsBorderColor: '#14DFFF',
  datasetsColor: '#ffffff',
  datasetsBorderWidth: 0,
  color: '#ffffff',
  fontColor: '#ffffff',
  maintainAspectRatio: false,
  options: {
    borderRadius: 10,
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        fullSize: true,
        fontColor: '#ffffff',
        font: {
          size: 18
        },
        padding: {
          top: 0,
          bottom: 10
        },
        text: '',
        color: '#ffffff',
        align: 'start',
        fontColor: '#ffffff',
      },
      legend: {
        display: true,
        labels: {
          color: '#ffffff'
        },
        onClick: null
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#000',
        bodyColor: '#000',
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.x !== null) {
              label = label + context.parsed.x + '%';
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          min: 0,
          max: 100,
          stepSize: 10,
          color:'#022869',
          callback: function(value) {
              return value + '%';
          }
        },
        fontColor: '#022869',
        grid: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff',
        }
      }
    },
    "animation": {
      "duration": 0,
      "onComplete": function(context) {
        var chartInstance = context,
          ctx = chartInstance.chart.ctx;

        ctx.font = Chart.helpers.fontString(13, 13, 'SourceBold');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillStyle ='#ffffff';

        this.data.datasets.forEach(function(dataset, i) {
          var meta = chartInstance.chart.getDatasetMeta(i);
          meta.data.forEach(function(bar, index) {
            var data = dataset.data[index];
            if(data < 95){
              ctx.fillText(data + "%", bar.x + 25, bar.y + 8);
            }            
            else{
              ctx.fillText(data + "%", bar.x - 20, bar.y + 8);
            }
          });
        });
      }
    },
  }
};

const lowerChartConfig = {
  series: [{
      name: 'Región 1',
      data: [44, 55]
    },
    {
      name: 'Región 2',
      data: [76, 85]
    },
  ],
  colors: ['#14DFFF', '#022869'],
  chart: {
    toolbar: {
      show: false
    },
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '80%',
      endingShape: 'rounded',
      dataLabels: {
        position: 'top', // top, center, bottom  
      },
      colors: {
        ranges: {
          from: 0,
          to: 100,
          color: '#022869'
        }

      }
    },
  },
  dataLabels: {
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#022869']
    }
  },
  xaxis: {
    categories: ['14 a 19 años', '20 a 24 años'],
    labels: {
      style: {
        fontFamily: 'SourceBold',
        fontSize: '14px'
      },
    }
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: 'SourceBold',
        fontSize: '14px'
      },
    }
  },
  fill: {
    colors: ['#14DFFF', '#022869']
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%"
      }
    }
  }
};

const lowerChartConfig2 = {  
  series: [{
    name: 'Región 1',
    data: [44, 55]
  }],
  chart: {
    toolbar: {
      show: false
    },
    type: 'bar',
    height: 400
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      horizontal: false,
      columnWidth: '20%',
      colors: {
        ranges: [          
          {
            from: 0,
            to: 100,
            color: "#35E4FF"
        }],
      },
    }
  },
  dataLabels: {
    offsetY: 0,
    style: {
      fontSize: '12px',
      colors: ['#FFFFFF']
    }
  },
  yaxis: {
    labels: {      
      style: {
        colors: ['#ffffff'],
        fontSize: '12px',        
      },
    }
  },
  xaxis: {
    categories: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años'],
    labels: {
      show: true,
      style:{
          colors:"#ffffff"
      }
    },
    
    axisTicks: {
      show: false,
    },
    forceNiceScale: false,                
  },
  grid:{
    show:true,
    borderColor:'#002159',
  },
  tickAmount: 10
};