
/** Funcion para leer archivos csv */
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
  
class DashboardDataReader {

  data;
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
  static filterFields = ['Region','Region PDET', 'Departamento', 'Municipio PDET', 'Grupo de edad', 'Sexo',
  'Tiempo que lleva trabajando en la institución'];


  async parseFile(url){
    const res = await parseFile(url);
    return res;
  }

  async parseFiles(){
    let data={};
    const lowercaseFilters = DashboardDataReader.filterFields.map((el) => el.toLowerCase());
    for (let element of Object.keys(DashboardDataReader.urls)) {
      let csvData = await this.parseFile(DashboardDataReader.urls[element]);
      let questions = csvData[0].filter((value) => {
        return !lowercaseFilters.includes(value.toLowerCase().trim());
      });
      let headers = csvData[0].map(el => el.trim());
      // eliminar encabezado de tabla de datos
      csvData.shift();
      // crear objeto de resultado final
      data[element] = {
        questions,
        headers,
        data: csvData 
      };
    };
    this.data = data;
    this.getFiltersFromData();
    console.log("data", this.data);
  }

  getFiltersFromData(){
    const lowercaseFilters = DashboardDataReader.filterFields.map((el) => el.toLowerCase());
    if (this.data){
      for (let element of Object.keys(this.data)) {
        let fileData = this.data[element].data;
        let arrayIndexes = [];
        let lowerCaseHeaders = this.data[element].headers.map((el) => el.toLowerCase());
        for (let filter of lowercaseFilters){
          let i = lowerCaseHeaders.indexOf(filter);
          if (i!=-1){
            arrayIndexes.push(i);
          }
        }
        this.data[element].filterIndexes=arrayIndexes;
        this.data[element].filters = {};
        for (let row of fileData){
          for (let i of arrayIndexes) {
            let header = this.data[element].headers[i];
            if(!this.data[element].filters[header]){
              this.data[element].filters[header] = [];
            }
            if(row[i] && !this.data[element].filters[header].includes(row[i].trim())){
              this.data[element].filters[header].push(row[i].trim());
            }
          }
        }
      }
    }
  }
  /**
   * Retorna un array con la lista de preguntas para la encuesta dada
   * @param {string} survey un survey de la siguiente lista:  hogaresGenerales, mujeresEtnicas, 
   * servidoresPublicos, entornoInstitucionalPaz, entornoInstitucionalMujeres, entornoInstitucionalLGBTI
   * @returns Array
   */
  getQuestions(survey){
    if (this.data[survey]) {
      return this.data[survey].questions;
    }
    return [];
  }

  getFilters(survey, filterKey){
    if (this.data[survey] &&  this.data[survey].filters[filterKey]) {
      return this.data[survey].filters[filterKey];
    }
    return [];
  }

  getColumnData(survey, column, labelsHeader= undefined, categories=undefined){
    if (this.data[survey]) {
      let lowerCaseHeaders = this.data[survey].headers.map((el) => el.toLowerCase().trim());
      let i = lowerCaseHeaders.indexOf(column.toLowerCase().trim());
      if (i!=-1){
        let res={ data: []};
        let evalData = this.data[survey].data;
        if (categories){
          // si categorias, filtrar informacion dejando unicamente los datos relacionados con los
          // campos dados por parametro

          // buscar indice de categoria en la columna
          let indexes=[];
          for (let catKey of Object.keys(categories)) {
            let i = lowerCaseHeaders.indexOf(catKey.toLowerCase().trim());
            if (i!= -1){
              indexes.push({index:i, value:categories[catKey].trim().toLowerCase()});
            }
          }
          // console.log("ind", indexes);
          evalData = evalData.filter((value) => {
            let conditionMet = true;
            for (let indexObj of indexes) {
              conditionMet = conditionMet && value[indexObj.index].trim().toLowerCase() === indexObj.value;
            }
            return conditionMet;
          });
          // console.log("evalDataFilter", evalData);
        }
        if (labelsHeader){
          let h = lowerCaseHeaders.indexOf(labelsHeader.toLowerCase().trim());
          res.labels = evalData.map((el) => {
            return DashboardDataReader.clearValue(el[h]);
          });
        }
        res.data = evalData.map((el) => {
          return DashboardDataReader.clearValue(el[i]);
        });
        return res;
      } else {
        console.log("Column not found ", column, this.data[survey]);
      }
    } else {
      console.log("Survey not found in data: ", survey );
    }
    return {};
  }

  static clearValue(value, emptyValue = ''){
    if (value){
      // limpiar los datos debido a que vienenen forma de string y con el simbolo porcentaje
      let matches = value.match(/^(\d+,\d+)%$/);
      let newValue = value;
      if (matches) {
        value = matches[1].replace(",",".");
        newValue = parseFloat(value);
      }
      return newValue;
    } else {
      return emptyValue;
    }
  }
}

class HTMLbuilder {
  static createPreguntasUL(pregunta){
    let liEl = document.createElement('li');
    let aEl = document.createElement('a');
    aEl.href = "#";
    aEl.innerHTML = pregunta;
    liEl.appendChild(aEl);
    return liEl;
  }
}

class Dashboard {

  dr;
  survey;
  region;
  menGraph;
  womenGraph;
  selectedQuestion;

  constructor(){
    this.dr = new DashboardDataReader();
    this.survey = Object.keys(DashboardDataReader.urls)[0];
    this.init();
  }

  async init(){
    // TODO iniciar un loader o algo aca

    await this.dr.parseFiles();

    // esconder loader

    // asignar parametros por defecto
    this.region = this.dr.getFilters(this.survey, "Region")[0]; // seleccionar la primera region de la lista
    this.selectedQuestion = this.dr.getQuestions(this.survey)[0]; // seleccionar la primera pregunta de la lista
    // inicializar graficas
    this.initGraphs();
    
    // cargar informacion de preguntas de preguntas por defecto
    this.loadQuestions();
  }

  initGraphs(){
    let menGraphEl = document.getElementById('myChart').getContext('2d');
    let womenGraphEl = document.getElementById('myChart2').getContext('2d');
    const filter = {Region:this.region, Sexo:"HOMBRE"};
    const labelColumn = "Grupo de edad";
    let graphData1 = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    // console.log("graphData1", graphData1);
    this.menGraph = new Chart(menGraphEl, {
      type: 'bar',
      data: {
        labels: graphData1.labels,
        datasets: [{
          data: graphData1.data,
          backgroundColor: Array(6).fill(chartConfig.datasetsBackgroundColor),
          borderColor: Array(6).fill(chartConfig.datasetsBorderColor),
          color: chartConfig.datasetsColor,
          borderWidth: chartConfig.datasetsBorderWidth
        }]
      },
      options: chartConfig.options
    });
    const filter2 = {Region:this.region, Sexo:"MUJER"};
    let graphData2 = this.dr.getColumnData(this.survey, this.selectedQuestion, labelColumn, filter2);
    // console.log("graphData2", graphData2);


    this.womenGraph = new Chart(womenGraphEl, {
      type: 'bar',
      data: {
        labels: graphData2.labels,
        datasets: [{
          data: graphData2.data,
          backgroundColor: Array(6).fill(chartConfig.datasetsBackgroundColor),
          borderColor: Array(6).fill(chartConfig.datasetsBorderColor),
          color: chartConfig.datasetsColor,
          borderWidth: chartConfig.datasetsBorderWidth
        }]
      },
      options: chartConfig.options
    });
    // fix graphs default title
    this.menGraph.options.plugins.title.text = this.selectedQuestion;
    this.menGraph.update();
    this.womenGraph.options.plugins.title.text = this.selectedQuestion;
    this.womenGraph.update();
  }

  updateGraph(graph, newData, title){
    this.selectedQuestion = title;
    graph.data.labels = newData.labels;
    graph.data.datasets[0].data = newData.data;
    graph.options.plugins.title.text = title;
    graph.update();
  }

  loadQuestions(){
    let self = this;
    let questions = this.dr.getQuestions(this.survey);
    let pregUL = document.querySelector('.preguntas ul');
    // limpiar preguntas
    pregUL.innerHTML = '';
    // insertar preguntas en DOM
    questions.forEach((q) => {
      pregUL.append(HTMLbuilder.createPreguntasUL(q));
    });
    // inicializar eventos de clic en cada pregunta
    const aTags = document.querySelectorAll('.preguntas ul li a');
    aTags.forEach((a) => {
      a.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Click question", event.target);
        const labelColumn = "Grupo de edad";
        // cargar datos del grafico 1
        const filter = {Region:self.region, Sexo:"HOMBRE"};
        let graphData1 = self.dr.getColumnData(self.survey, event.target.innerHTML, labelColumn, filter);
        //console.log("graphData1", graphData1);
        self.updateGraph(self.menGraph, graphData1, event.target.innerHTML);

        // cargar datos del grafico 2
        const filter2 = {Region:self.region, Sexo:"MUJER"};
        let graphData2 = self.dr.getColumnData(self.survey, event.target.innerHTML, labelColumn, filter2);
        //console.log("graphData2", graphData2);
        self.updateGraph(self.womenGraph, graphData2, event.target.innerHTML);
      });
    });
  }
}

// procesar archivos CSV
let dash = new Dashboard();
dash.init();



// cargar informacion de charts

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