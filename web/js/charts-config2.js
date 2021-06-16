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
    height: 420
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      horizontal: false,
      columnWidth: '40%',
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
    forceNiceScale: true,                
  },
  grid:{
    show:true,
    borderColor:'#002159',
  },
  tickAmount: 10,
  title: {
    text: 'Tiempo que lleva trabajando en la institución',
    floating: true,
    offsetY: 0,
    align: 'center',
    style: {
      color: '#14DFFF'
    }
  }
};