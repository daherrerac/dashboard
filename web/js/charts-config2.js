const lowerChartConfig2 = {  
  series: [{
    name: 'Región 1',
    data: [44, 55]
  }
],
colors: ['#FFFFFF'],
chart: {
  toolbar: {
    show: false
  },
  type: 'bar',
  height: 370
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '60%',
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
    fontSize: '14px',
    colors: ['#ffffff']
  }
},
  xaxis: {
    categories: ['14 a 19 años', '20 a 24 años'],
    labels: {
      style: {
        fontFamily: 'SourceBold',
        fontSize: '14px',
        colors: '#ffffff',
      },
    }
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: 'SourceBold',
        fontSize: '14px',
        colors: '#ffffff',
      },
    }
  },
  fill: {
    colors: ['#14DFFF']
  },
  grid:{
    show:true,
    borderColor:'#002159',
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%"
      }
    }
  },
  title: {
    text: 'Tiempo que lleva trabajando en la institución',
    floating: true,
    offsetY: 0,
    margin: 10,
    align: 'center',
    style: {
      color: '#14DFFF'
    }
  }
};