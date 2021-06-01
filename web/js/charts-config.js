const chartConfig = {
  datasetsBackgroundColor: '#14DFFF',
  datasetsBorderColor: '#14DFFF',
  datasetsColor: '#ffffff',
  datasetsBorderWidth: 0,  
  color:'#ffffff',
  fontColor:'#ffffff',  
  maintainAspectRatio: false,
  options: {                      
    borderRadius: 10,
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,   
    plugins: {
      title: {
        display: true,
        fullSize:true,
        fontColor:'#ffffff',      
        font:{
          size:18
        },
        padding:{
          top: 0,
          bottom: 10
        },
        text: '',
        color: '#ffffff', 
        align :'start',       
        fontColor:'#ffffff',      
      },
      legend:{
        display:true,
        labels: {
          color: '#ffffff'
        },
        onClick: null
      },
      tooltip: {
        backgroundColor:'#ffffff',
        titleColor:'#000',
        bodyColor:'#000',
        callbacks: {
            label: function(context) {
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
          callback: function(value, index, values) {
              return value + '%';
          }
        },
        fontColor:'#022869',      
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
        ticks:{
          color:'#ffffff',
        }      
      }

    },
    
  }
};

const lowerChartConfig = {
  series: [
      {
          name: 'Región 1',
          data: [44, 55]
      }, 
      {
          name: 'Región 2',
          data: [76, 85]
      }, 
  ],
  colors: ['#14DFFF','#022869'],
  chart: {
      toolbar:{
        show:false
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
          colors:{
              ranges:{
                  from: 0,
                  to: 100,
                  color:'#022869'
              }
              
          }
      },
  },
  dataLabels: {      
      offsetY: 10,
      style: {
          fontSize: '12px'          
      }
  },  
  xaxis: {
      categories: ['14 a 19 años', '20 a 24 años'],
      labels:{
        style:{
          fontFamily: 'SourceBold',
          fontSize: '14px'
        },        
      }      
  },
  yaxis:{
    labels:{
      style:{
        fontFamily: 'SourceBold',
        fontSize: '14px'
      }      
    }    
  },
  fill: {
    colors: ['#14DFFF','#022869']
  }
};