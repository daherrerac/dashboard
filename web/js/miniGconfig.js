let miniCharts = {
    series: [{
      name: 'Inflation',
      data: [2.3]
      }],
  chart: {
      height: 390,
      type: 'bar',
      toolbar: {
          show: false
      },
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -50,
    style: {
      fontSize: '35px',
      colors: ["#FFFFFF"]
    }
  },
  
  xaxis: {
    categories: [""],          
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#14DFFF',
          colorTo: '#14DFFF',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 1,
        }
      }
    }    
  },
  grid:{
      show:false
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    forceNiceScale: false,
    showForNullSeries:false,
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  tooltip:{
    enabled: true,    
    onDatasetHover: {
      highlightDataSeries: true,
  },
  }
      // title: {
      //     text: 'Grafica',
      //     floating: true,
      //     offsetY: 290,
      //     align: 'center',
      //     style: {
      //         fontWeight:  'normal',
      //         color: '#FFFFFF',                    
      //     }
      // },
      // subtitle:{
      //     text: 'Grafica sub',
      //     floating: true,
      //     offsetY: 305,
      //     align: 'center',
      //     style: {
      //         fontWeight:  'normal',
      //         color: '#FFFFFF'
      //     }
      // },
      
  };

