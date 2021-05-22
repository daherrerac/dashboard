
function parseFile(url) {
    return new Promise( (resolve, reject) => {
      Papa.parse(url, {
        download: true,
        delimiter: ";",	// auto-detect
        newline: "",	// auto-detect
        quoteChar: '"',
        escapeChar: '"',
        complete: function(result) {
          //console.log(result.data);
          resolve(result.data);
        },
        error: function(error) {
          //console.log(error)
          reject(error);
        }
      });
    });
  }
  
  class DataReader {
  
    data;
    filters;
    // ubicacion de archivos csv
    static urls = {
      'hogaresGenerales':'http://dashboard.local/csv/hogares_general.csv',
      'mujeresEtnicas':'http://dashboard.local/csv/hogares_mujeres_etnicas.csv',
      'servidoresPublicos':'http://dashboard.local/csv/encuesta_servidores_publicos.csv',
      'entornoInstitucionalPaz':'http://dashboard.local/csv/entorno_institucional_paz.csv',
      'entornoInstitucionalMujeres':'http://dashboard.local/csv/entorno_institucional_mujeres.csv',
      'entornoInstitucionalLGBTI':'http://dashboard.local/csv/entorno_institucional_lgbti.csv'
    };
  
    // declaracion de filtros
    static filterFields = ['Region PDET', 'Departamento', 'Municipio PDET', 'Grupo de edad', 'Sexo',
    'Tiempo que lleva trabajando en la institución'];
  
  
    async parseFile(url){
      const res = await parseFile(url);
      return res;
    }
  
    async parseFiles(){
      let data={};
      for (let element of Object.keys(DataReader.urls)) {
        let csvData = await this.parseFile(DataReader.urls[element]);
        data[element] = {
          headers: csvData[0].map(el => el.trim()),
          data: csvData // remove table header first row
        };
        data[element].data.shift();
      };
      this.data = data;
      console.log("data", this.data);
      this.getFiltersFromData();
    }
  
    getFiltersFromData(){
      this.filters = {};
      if (this.data){
        for (let element of Object.keys(this.data)) {
          let fileData = this.data[element].data;
          let arrayIndexes = [];
          for (let filter of DataReader.filterFields){
            let i = this.data[element].headers.indexOf(filter);
            if (i!=-1){
              arrayIndexes.push(i);
            }
          }
          this.filters[element] = {indexes: arrayIndexes};
          for (let row of fileData){
            for (let i of arrayIndexes) {
              let header = this.data[element].headers[i];
              if(!this.filters[element][header]){
                this.filters[element][header] = [];
              }
              if(row[i] && !this.filters[element][header].includes(row[i].trim())){
                this.filters[element][header].push(row[i].trim());
              }
            }
          }
        }
        console.log("filters", this.filters);
      }
    }
  }
  
  let dr = new DataReader();
  dr.parseFiles();



$( "#trigger-qb" ).click(function(event) {
    event.preventDefault();
    $( "#chart" ).toggle( function() {
      // Animation complete.
    });
    $( "#chartalt" ).toggle(  function() {
        // Animation complete.
    });
    $( "#chart-2" ).toggle(  function() {
        // Animation complete.
    });
    $( "#chartalt2" ).toggle(  function() {
        // Animation complete.
    });
});
$( "#trigger-qc" ).click(function(event) {
    event.preventDefault();
    $( "#chart" ).toggle(  function() {
      // Animation complete.
    });
    $( "#chartalt" ).toggle(  function() {
        // Animation complete.
    });
    $( "#chart-2" ).toggle(  function() {
        // Animation complete.
    });
    $( "#chartalt2" ).toggle(  function() {
        // Animation complete.
    });
});

$( "#reg1" ).click(function(event) {
    event.preventDefault();
    $( "#chartb" ).toggle(  function() {
      // Animation complete.
    });
    $( "#chartbalt" ).toggle(  function() {
        // Animation complete.
    });
    
});

$( "#reg2" ).click(function(event) {
    event.preventDefault();
    $( "#chartc" ).toggle(  function() {
      // Animation complete.
    });
    $( "#chartcalt" ).toggle(  function() {
        // Animation complete.
    });
    
});