const chartConfig = {
  datasetsBackgroundColor: '#14DFFF',
  datasetsBorderColor: '#14DFFF',
  datasetsColor: '#ffffff',
  datasetsBorderWidth: 0,  
  color:'#ffffff',
  fontColor:'#ffffff',  
  responsive:true,
  maintainAspectRatio:true,
  options: {  
    fontColor:'#ffffff',      
    legend: {
      display: false,     
    },    
    borderRadius: 10,
    indexAxis: 'y',
    responsive: true,    
    plugins: {
      title: {
        display: true,
        fullSize:true,
        fontColor:'#ffffff',      
        font:{
          size:20
        },
        padding:{
          top: 0,
          bottom: 10
        },
        text: '',
        color: '#ffffff', 
        align :'center',       
        fontColor:'#ffffff',      
      },
      legend:{
        display:true,
        labels: {
          color: '#ffffff'
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
          color:'#ffffff',
          callback: function(value, index, values) {
              return value + '%';
          }
        },
        fontColor:'#ffffff',      
        grid: {
          display: false,
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

    }
  }
};