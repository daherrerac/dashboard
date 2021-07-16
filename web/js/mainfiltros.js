//const siteurl = 'http://pruebas.kugelelectronics.com.co/dashboard/';
const siteurl = 'http://pruebadevelopment.com/';
//const siteurl = 'http://webdash.test/';
//const siteurl = 'http://dashboard.local/';



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
    'hogaresGenerales':siteurl + 'csv/EncuestaHogares_General.csv', //archivo prueba
    'mujeresEtnicas':siteurl + 'csv/EncuestaHogares_MujeresEtnicas.csv',
    'servidoresPublicos':siteurl + 'csv/EncuestaServidoresPublicos.csv',
    'entornoInstitucionalPaz':siteurl + 'csv/EntornoInstitucional_Paz.csv',
    'entornoInstitucionalMujeres':siteurl + 'csv/entorno_institucional_mujeres.csv',
    'entornoInstitucionalLGBTI':siteurl + 'csv/entorno_institucional_lgbti.csv',
  };

  // declaracion de filtros
  static filterFields = ['Region','Region PDET', 'Departamento', 'Municipio PDET', 'Gedad', 'Sexo',
  'Tiempo que lleva trabajando en la institución', 'Pertenencia étnica','Filtro','Pregunta','Agente1','Agente2','Agente3'];


  async parseFile(url){
    const res = await parseFile(url);
    return res;
  }

  async parseDashboardFile(surveyKey){
    let data={};
    const lowercaseFilters = DashboardDataReader.filterFields.map((el) => el.toLowerCase());

    let csvData = await this.parseFile(DashboardDataReader.urls[surveyKey]);
    let questions = csvData[0].filter((value) => {
      return !lowercaseFilters.includes(value.toLowerCase().trim());
    });
    let headers = csvData[0].map(el => el.trim());
    // eliminar encabezado de tabla de datos
    csvData.shift();
    // crear objeto de resultado final
    data[surveyKey] = {
      questions,
      headers,
      data: csvData 
    };
    this.data = data;
    this.getFiltersFromData();
    console.log("data", this.data);
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

  /**
   * Retorna un array con la lista de preguntas filtradas por los parametros dados
   * @param {string} survey un survey de la siguiente lista:  hogaresGenerales, mujeresEtnicas, 
   * servidoresPublicos, entornoInstitucionalPaz, entornoInstitucionalMujeres, entornoInstitucionalLGBTI
   * @returns Array
   */
  getQuestionsFiltered(survey, selectedFilter){
    if (this.data[survey]) {
      let filterPreguntas = this.getColumnData(survey, 'Filtro', undefined, undefined, false).data;
      let preguntas = this.getColumnData(survey, 'Pregunta', undefined, undefined, false).data;
      //console.log("pregutnas", preguntas, filterPreguntas);
      let uniqueQuestions = [];
      let preguntasFiltradas =  preguntas.filter((val, index) => {
        if (val && filterPreguntas[index]){
          //console.log("comparing ", selectedFilter, filterPreguntas[index]);
          if(!uniqueQuestions.includes(val) && selectedFilter.trim().toLowerCase() === filterPreguntas[index].trim().toLowerCase()){
            return true;
          }
        }
        return false;
      });
      return preguntasFiltradas;
    }
    return [];
  }

  /**
   * Retorna la lista de elementos de los campos de filros del survey dado. 
   * Ej. Grupo de edad, Sexo, o region del survey  hogaresGenerales. 
   * @param {string} survey un survey de la siguiente lista:  hogaresGenerales, mujeresEtnicas, 
   * servidoresPublicos, entornoInstitucionalPaz, entornoInstitucionalMujeres, entornoInstitucionalLGBTI
   * @param {string} filterKey uno de los campos de filtro del survey
   * @returns array con valores unicos del filtro especificado para cada survey
   */
  getFilters(survey, filterKey){
    if (this.data[survey] &&  this.data[survey].filters[filterKey]) {
      return this.data[survey].filters[filterKey];
    }
    return [];
  }

  getColumnData(survey, column, labelsHeader= undefined, categories=undefined, numbers = true){
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
              conditionMet = conditionMet && value[indexObj.index] && value[indexObj.index].trim().toLowerCase() === indexObj.value;
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
          return DashboardDataReader.clearValue(el[i], numbers);
        });
        return res;
      } else {
        console.log("Column not found ", column);
      }
    } else {
      console.log("Survey not found in data: ", survey );
    }
    return {};
  }

  /**
   * Limpia los valores recibidos como string y convierte a flotante si puede
   * @param {string} value 
   * @param {*} emptyValue 
   * @returns 
   */
  static clearValue(value, numeric=false, emptyValue = ''){
    if (value){
      // limpiar los datos debido a que vienen forma de string y con el simbolo porcentaje
      let matches = value.match(/^(\d*,\d+)%$/);
      let newValue = value;
      if (matches) {
        value = matches[1].replace(",",".");
        newValue = parseFloat(value);
      }
      if (newValue && newValue!==NaN)
        return newValue;

      if (numeric){
        return 0;
      }
    }
    return emptyValue;
    
  }
}

class HTMLbuilder {
  static createPreguntasLiElement(pregunta){
    let liEl = document.createElement('li');
    let aEl = document.createElement('a');
    aEl.href = "#";
    aEl.innerHTML = pregunta;
    liEl.appendChild(aEl);
    return liEl;
  }

  static createSelectorOptionElement(option, attrs = undefined){
    let optionEl = document.createElement('option');
    optionEl.text = option;
    optionEl.value = option;
    if (attrs) {
      for (let key of Object.keys(attrs)){
        optionEl.setAttribute(key, attrs[key]);
      }
    }
    return optionEl;
  }
}

class Dashboard {

  dr;
  survey;
  region;
  filtro; //filtro preguntas
  menGraph;
  womenGraph;
  selectedQuestion;
  upGraphs;
  hasMap;
  lowerGraphs;

  graphRegionSelection1;
  graphRegionSelection2;

  graphAgeSelection1;
  graphAgeSelection2;

  filterQuestionSelection1;
  filterQuestionSelection2;

  filterAgente1;
  filterAgente2;
  filterAgente3;
  

  constructor(survey, hasMap = true, mapGraphs, lowerGraphs){
    this.dr = new DashboardDataReader();
    this.survey = survey;
    this.hasMap = hasMap;
    this.mapGraphs = mapGraphs;
    this.lowerGraphs = lowerGraphs;
    let self = this;
    if (this.hasMap && this.mapGraphs){
      this.mapClickCallback = (region) => {
        let previousRegionSelected = this.region;
        this.region = region;
        
        selOption(document.getElementById("regionA"), region);
        let updatedOptions = {
          areas:{}
        };
        updatedOptions.areas[region] = {
          attrs: {fill: "#022869", opacity: 1}
        };
        updatedOptions.areas[previousRegionSelected] ={
          attrs: {fill: "#767676", opacity: 1}
        };
        $(".mapcontainer").trigger('update', [{
          mapOptions: updatedOptions, 
          animDuration: 100
        }]);
        let filtroEdad = document.getElementById("edad").value;           
        self.updateGraph3(self.lowerGraphs.graph1.id, {Region:region, [self.lowerGraphs.graph1.filter.filterKey]:self.lowerGraphs.graph1.filter.filterValue,Gedad:filtroEdad});
        self.updateGraph3(self.lowerGraphs.graph2.id, {Region:region, [self.lowerGraphs.graph2.filter.filterKey]:self.lowerGraphs.graph2.filter.filterValue,Gedad:filtroEdad});        
      }
    }
    this.init();
  }

  async init(){
    // TODO iniciar un loader o algo aca
  
    await this.dr.parseDashboardFile(this.survey);

    // asignar parametros por defecto
    if (this.hasMap){
      this.region = this.dr.getFilters(this.survey, "Region")[0]; // seleccionar la primera region de la lista
    }
    this.selectedQuestion = this.dr.getQuestions(this.survey)[0]; // seleccionar la primera pregunta de la lista
    this.filtro = this.dr.getFilters(this.survey,'Filtro')[0];

    //Cargar Agentes
    this.loadAgente();

    //Cargar filtros de preguntas
    this.loadFilterQuestion();

    // cargar informacion de preguntas de preguntas por defecto
    this.loadQuestions();

    // cargar regiones en selectores inferiores
    this.loadRegions();

    // cargar filtro de edad
    
    if (this.lowerGraphs){
      this.initGraphsmini();
    }
    if (this.lowerGraphs){
      this.initGraphsmini2();
    }

    

    // incializar mapa
    if (this.hasMap){
      initMapHandler(this.mapClickCallback);
    }

    // TODO esconder loader
  }

  initGraphsmini(){
    let config1 = JSON.parse(JSON.stringify(this.lowerGraphs.config));
    let config2 = JSON.parse(JSON.stringify(this.lowerGraphs.config));
    config1.chart.id = this.lowerGraphs.graph1.id;
    config2.chart.id = this.lowerGraphs.graph2.id;

    const labelColumn = this.lowerGraphs.labelColumn;

    let filter  = {[this.lowerGraphs.graph1.filter.filterKey]:this.lowerGraphs.graph1.filter.filterValue};
    let filter2 = {[this.lowerGraphs.graph2.filter.filterKey]:this.lowerGraphs.graph2.filter.filterValue};
    if (this.hasMap){
      filter.Region=this.graphRegionSelection1;
      filter.Gedad=this.graphAgeSelection1;
      filter2.Region=this.graphRegionSelection1;
      filter2.Gedad=this.graphAgeSelection1;
    }
    let menGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    let womenGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter2);
        
    config1.series[0].name = this.graphRegionSelection1;
    config1.series[0].data = menGraphDataSeries.data;
    config2.series[0].name = this.graphRegionSelection1;
    config2.series[0].data = womenGraphDataSeries.data;
     
    //config1.xaxis.categories = menGraphDataSeries.labels;
    //carga de graficas
    config1.yaxis.max = function(val) {if(val < 6){return val + 70} else if( 6 <= val < 15){return val + 75}else if(15 <= val < 40){return val + 60}else if(40 <= val < 90){return val + 10}else if(90 <= val <= 100){return val}}  
    config1.dataLabels.formatter = function (val) {return val + "%"};
    
    config2.yaxis.labels.formatter = function (val) {return val + "%"};  
    config2.yaxis.max = function(val) {if(val < 6){return val + 70} else if( 6 <= val < 15){return val + 75}else if(15 <= val < 40){return val + 60}else if(40 <= val < 90){return val + 10}else if(90 <= val <= 100){return val}}  
    config2.dataLabels.formatter = function (val) {return val + "%"};

    let chartb = new ApexCharts(document.querySelector("#"+this.lowerGraphs.graph1.id), config1);
    let chartc = new ApexCharts(document.querySelector("#"+this.lowerGraphs.graph2.id), config2);              
    chartb.render();    
    chartc.render();    
  }
  
  updateGraph1(graph, filter){
    const labelColumn = "Grupo de edad";
    // cargar datos del grafico
    let newData = this.dr.getColumnData(this.survey, this.selectedQuestion, labelColumn, filter);
    //console.log("graphData1", newData);
    
    graph.data.labels =newData.labels;
    graph.data.datasets[0].data = newData.data;
    //dividir texto (pregunta) en 2 para ajustar mejor el label en la grafica
    graph.data.datasets[0].label =  this.region;
    let indexArray;
    if(this.dr.data.hogaresGenerales){
      indexArray = this.dr.data.hogaresGenerales.filters.Region.indexOf(this.region);
    }
    if(this.dr.data.mujeresEtnicas){
      indexArray = this.dr.data.mujeresEtnicas.filters.Region.indexOf(this.region);
    } 
    if(this.dr.data.servidoresPublicos){
      indexArray = this.dr.data.servidoresPublicos.filters.Region.indexOf(this.region);
    }    
    graph.options.plugins.title.text = Dashboard.splitText(this.selectedQuestion);
    graph.update();
    this.updateAgente(indexArray);
  }

  loadQuestions(){
    let self = this;
    let questions = this.dr.getQuestionsFiltered(this.survey, this.filtro);
    // console.log("questions", questions);
    let pregUL = document.querySelector('.preguntas ul');
    // limpiar preguntas
    pregUL.innerHTML = '';
    // insertar preguntas en DOM
    questions.forEach((q) => {
      pregUL.append(HTMLbuilder.createPreguntasLiElement(q));
    });
    

    // inicializar eventos de clic en cada pregunta y pregunta seleccionada por defecto
    const aTags = document.querySelectorAll('.preguntas ul li a');
    aTags.forEach((a, index) => {
      // seleccionar pregunta por defecto
      if (index==0){
        a.classList.add('selected');
      }
      a.addEventListener('click', function(event) {
        event.preventDefault();
        self.selectedQuestion = event.target.innerHTML;
        // Limpiar la clase selected en todos los elementos
        const aTags2 = document.querySelectorAll('.preguntas ul li a');
        aTags2.forEach((a) => {
          a.classList.remove('selected');
        });
        // adicionar clase selected al elemento del evento
        this.classList.add('selected');
        console.log("Click question", self.selectedQuestion);
        document.getElementById("qIndigenas").innerHTML = self.selectedQuestion;
        document.getElementById("qAfro").innerHTML = self.selectedQuestion;
        let filtroEdad   = document.getElementById("edad").value;
        let filtroRegion = document.getElementById("regionA").value;
        if (self.hasMap){
          self.updateGraph2(self.lowerGraphs.graph1.id, {Region:filtroRegion, [self.lowerGraphs.graph1.filter.filterKey]:self.lowerGraphs.graph1.filter.filterValue,Gedad:filtroEdad});
          self.updateGraph2(self.lowerGraphs.graph2.id, {Region:filtroRegion, [self.lowerGraphs.graph2.filter.filterKey]:self.lowerGraphs.graph2.filter.filterValue,Gedad:filtroEdad});
        }        
      });
    });
  }

  loadRegions(){
    let self = this;
    let previousRegionSelected;
    let filtroEdad; 
    let filtroRegion;
    let filtroRegion2;
    let regionSt;
    const regionsDropDown = document.querySelectorAll('.region.custom-select select');    
    const regionsList = this.dr.getFilters(this.survey, 'Region');
    self.graphRegionSelection1 = regionsList[0];
    self.graphRegionSelection2 = regionsList[1];
    regionsDropDown.forEach((selector, i) => {
      // limpiar opciones
      selector.innerHTML = '';
      // adicionar atributo de selector
      regionsList.forEach((q) => {
        selector.add(HTMLbuilder.createSelectorOptionElement(q),null);
      });      
      let callback = (value) => {        
        previousRegionSelected = self.region;
        if (selector.getAttribute('id') == "regionA"){
          self.region = value; 
          filtroEdad = document.getElementById("edad").value;           
          self.updateGraph3(self.lowerGraphs.graph1.id, {Region:self.region, [self.lowerGraphs.graph1.filter.filterKey]:self.lowerGraphs.graph1.filter.filterValue,Gedad:filtroEdad});
          self.updateGraph3(self.lowerGraphs.graph2.id, {Region:self.region, [self.lowerGraphs.graph2.filter.filterKey]:self.lowerGraphs.graph2.filter.filterValue,Gedad:filtroEdad});        
          let updatedOptions = {'areas': {}};
          updatedOptions.areas[value] ={
            attrs: {fill: "#022869", opacity: 1}
          },
          updatedOptions.areas[previousRegionSelected] ={
            attrs: {fill: "#767676", opacity: 1}
          }
          $(".mapcontainer").trigger('update', [{
            mapOptions: updatedOptions, 
            animDuration: 100
          }]);
        } else if (selector.getAttribute('id') == "region1"){
          filtroRegion2 = document.getElementById("region2").value;
          filtroEdad    = document.getElementById("fil_edad").value;
          self.updateGraph4(self.lowerGraphs.graph3.id, {Region:value, [self.lowerGraphs.graph3.filter.filterKey]:self.lowerGraphs.graph3.filter.filterValue,Gedad:filtroEdad});                        
          self.updateGraph4(self.lowerGraphs.graph5.id, {Region:filtroRegion2, [self.lowerGraphs.graph5.filter.filterKey]:self.lowerGraphs.graph5.filter.filterValue,Gedad:filtroEdad});                        
          self.updateGraph4(self.lowerGraphs.graph4.id, {Region:value, [self.lowerGraphs.graph4.filter.filterKey]:self.lowerGraphs.graph4.filter.filterValue,Gedad:filtroEdad});                        
          self.updateGraph4(self.lowerGraphs.graph6.id, {Region:filtroRegion2, [self.lowerGraphs.graph6.filter.filterKey]:self.lowerGraphs.graph6.filter.filterValue,Gedad:filtroEdad});                                  
        } else if (selector.getAttribute('id') == 'region2'){          
          filtroRegion2 = document.getElementById("region1").value;
          filtroEdad    = document.getElementById("fil_edad").value;
          self.updateGraph4(self.lowerGraphs.graph3.id, {Region:filtroRegion2, [self.lowerGraphs.graph3.filter.filterKey]:self.lowerGraphs.graph3.filter.filterValue,Gedad:filtroEdad});                        
          self.updateGraph4(self.lowerGraphs.graph5.id, {Region:value, [self.lowerGraphs.graph5.filter.filterKey]:self.lowerGraphs.graph5.filter.filterValue,Gedad:filtroEdad});                        
          self.updateGraph4(self.lowerGraphs.graph4.id, {Region:filtroRegion2, [self.lowerGraphs.graph4.filter.filterKey]:self.lowerGraphs.graph4.filter.filterValue,Gedad:filtroEdad});                        
          self.updateGraph4(self.lowerGraphs.graph6.id, {Region:value, [self.lowerGraphs.graph6.filter.filterKey]:self.lowerGraphs.graph6.filter.filterValue,Gedad:filtroEdad});                                  
        }        
        console.log("Region seleccionada:", value, "sel1:", self.graphRegionSelection1, "sel2:",self.graphRegionSelection2);
        
        let indexArray;
                
        indexArray = this.dr.data.mujeresEtnicas.filters.Region.indexOf(this.region);
        
        this.updateAgente(indexArray);
      };
      // definir selecciones por defecto de ambos selectores
      if (selector.getAttribute('id') == "regionA"){
        selector.selectedIndex = 0;
      } else if (selector.getAttribute('id') == 'region1'){
        selector.selectedIndex = 0;
      } else if (selector.getAttribute('id') == 'region2'){
        selector.selectedIndex = 1;
      }
      updateOption(selector, callback, regionsList[selector.selectedIndex]);
      
    });
    const edadesDropDown = document.querySelectorAll('.fedad.custom-select select');
    const edadesList = this.dr.getFilters(this.survey, 'Gedad');
    self.graphAgeSelection1 = edadesList[0];
    self.graphAgeSelection2 = edadesList[1];
    edadesDropDown.forEach((selector, i) => {
      // limpiar opciones
      selector.innerHTML = '';
      // adicionar atributo de selector
      edadesList.forEach((q) => {
        selector.add(HTMLbuilder.createSelectorOptionElement(q),null);
      });      
      let callback = (value) => {        
        if (selector.getAttribute('id') == "edad"){
          self.edad = value;   
          filtroRegion = document.getElementById("regionA").value;
          self.updateGraph3(self.lowerGraphs.graph1.id, {Region:filtroRegion, [self.lowerGraphs.graph1.filter.filterKey]:self.lowerGraphs.graph1.filter.filterValue,Gedad:self.edad});
          self.updateGraph3(self.lowerGraphs.graph2.id, {Region:filtroRegion, [self.lowerGraphs.graph2.filter.filterKey]:self.lowerGraphs.graph2.filter.filterValue,Gedad:self.edad});                        
        }else if(selector.getAttribute('id') == "fil_edad"){          
          self.edad = value;
          filtroRegion  = document.getElementById("region1").value;
          filtroRegion2 = document.getElementById("region2").value;
          self.updateGraph4(self.lowerGraphs.graph3.id, {Region:filtroRegion, [self.lowerGraphs.graph3.filter.filterKey]:self.lowerGraphs.graph3.filter.filterValue,Gedad:self.edad});                        
          self.updateGraph4(self.lowerGraphs.graph5.id, {Region:filtroRegion2, [self.lowerGraphs.graph5.filter.filterKey]:self.lowerGraphs.graph5.filter.filterValue,Gedad:self.edad});                        
          self.updateGraph4(self.lowerGraphs.graph4.id, {Region:filtroRegion, [self.lowerGraphs.graph4.filter.filterKey]:self.lowerGraphs.graph4.filter.filterValue,Gedad:self.edad});                        
          self.updateGraph4(self.lowerGraphs.graph6.id, {Region:filtroRegion2, [self.lowerGraphs.graph6.filter.filterKey]:self.lowerGraphs.graph6.filter.filterValue,Gedad:self.edad});                                  
        }        
      };
      // definir selecciones por defecto de ambos selectores
      if (selector.getAttribute('id') == "edad"){
        selector.selectedIndex = 0;
      } else if (selector.getAttribute('id') == 'fil_edad'){
        selector.selectedIndex = 0;
      } 
      updateOption(selector, callback, edadesList[selector.selectedIndex]);
      
    });
  }
  

  updateGraph2(graphId, filter){
    this.lowerGraphs.config.chart.height       = 390;
    this.lowerGraphs.config.dataLabels.offsetY = -80;
    this.lowerGraphs.config.dataLabels.style   ={fontSize: '65px'}

    const labelColumn = "Grupo de edad";
    // cargar datos del grafico
    
    filter.Region = document.getElementById("regionA").value;
    let menGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);    
    
    let series = [
      {
        name: filter.Region,
        data: menGraphDataSeries.data,
      },
    ];

    if(menGraphDataSeries.data == '-'){
      document.getElementById(graphId).style.display = "none";
    }else{
      document.getElementById(graphId).style.display = "block";
      ApexCharts.exec(graphId, 'updateSeries', series, true);
    }
    
  }

  updateGraph3(graphId, filter){
    this.lowerGraphs.config.chart.height       = 390;
    this.lowerGraphs.config.dataLabels.offsetY = -80;
    this.lowerGraphs.config.dataLabels.style   ={fontSize: '65px'}
    const labelColumn = "Grupo de edad";
    // cargar datos del grafico
    filter.Region = document.getElementById("regionA").value;
    let menGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    //filter.Region=this.graphRegionSelection2;        
    let series = [
      {
        name: filter.Region,
        data: menGraphDataSeries.data,
      },
    ];
    
    if(menGraphDataSeries.data == '-'){
      document.getElementById(graphId).style.display = "none";
    }else{
      document.getElementById(graphId).style.display = "block";
      ApexCharts.exec(graphId, 'updateSeries', series, true);
    }
    
  }
  
  updateGraph4(graphId, filter){
    this.lowerGraphs.config.chart.height       = 390;
    this.lowerGraphs.config.dataLabels.offsetY = -80;
    this.lowerGraphs.config.dataLabels.style   ={fontSize: '65px'}
    const labelColumn = "Grupo de edad";
    // cargar datos del grafico    
    let menGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    //filter.Region=this.graphRegionSelection2;        
    let series = [
      {
        name: filter.Region,
        data: menGraphDataSeries.data,
      },
    ];
    
    if(menGraphDataSeries.data == '-'){
      document.getElementById(graphId).style.display = "none";
    }else{
      document.getElementById(graphId).style.display = "block";
      ApexCharts.exec(graphId, 'updateSeries', series, true);
    }
    
  }

  //parte para cargar filtros de preguntas
  loadFilterQuestion(){
    let self = this;
    const filtrosDropDown = document.querySelectorAll('.preg.custom-select select');
    const filtrosList = this.dr.getFilters(this.survey, 'Filtro');
    self.filtro = filtrosList[0];

    filtrosDropDown.forEach((selector, i) => {
      // limpiar opciones
      selector.innerHTML = '';
      // adicionar atributo de selector
      filtrosList.forEach((q) => {
        selector.add(HTMLbuilder.createSelectorOptionElement(q),null);
      });
      let callback = (value) => {                
        console.log("Pregunta seleccionada:", value);
        self.filtro = value;
        self.loadQuestions();
      };
      
      updateOption(selector, callback, filtrosList[selector.selectedIndex]);
    });
  }

  loadAgente(){
    let self = this;
    const agente1Items = document.querySelector('.agente1');
    const agente2Items = document.querySelector('.agente2');
    const agente3Items = document.querySelector('.agente3');
    
    const agente1List = this.dr.getFilters(this.survey, 'Agente1' );
    agente1List.push("38.9");
    const agente2List = this.dr.getFilters(this.survey, 'Agente2' );
    const agente3List = this.dr.getFilters(this.survey, 'Agente3' );

    self.filterAgente1 = agente1List[0];
    self.filterAgente2 = agente2List[0];
    self.filterAgente3 = agente3List[0];
    
    agente1Items.innerHTML = this.filterAgente1 + "%";
    agente2Items.innerHTML = this.filterAgente2 + "%";
    agente3Items.innerHTML = this.filterAgente3 + "%";
  }

  updateAgente(id){
    let self = this;
    const agente1Items = document.querySelector('.agente1');
    const agente2Items = document.querySelector('.agente2');
    const agente3Items = document.querySelector('.agente3');
    
    const agente1List = this.dr.getFilters(this.survey, 'Agente1' );
    agente1List.push("38.9");
    const agente2List = this.dr.getFilters(this.survey, 'Agente2' );
    const agente3List = this.dr.getFilters(this.survey, 'Agente3' );

    self.filterAgente1 = agente1List[id];
    self.filterAgente2 = agente2List[id];
    self.filterAgente3 = agente3List[id];
    
    agente1Items.innerHTML = this.filterAgente1 + "%";
    agente2Items.innerHTML = this.filterAgente2 + "%";
    agente3Items.innerHTML = this.filterAgente3 + "%";
  }


  //Segundo grupo de gráficas

  initGraphsmini2(){
    this.lowerGraphs.config.chart.height       = 140;
    this.lowerGraphs.config.dataLabels.offsetY = -65;
    this.lowerGraphs.config.dataLabels.style   ={fontSize: '40px'}
    //this.lowerGraphs.config.tooltip.style      ={color: '#000000'}
    let config1 = JSON.parse(JSON.stringify(this.lowerGraphs.config));
    let config2 = JSON.parse(JSON.stringify(this.lowerGraphs.config));
    let config3 = JSON.parse(JSON.stringify(this.lowerGraphs.config));
    let config4 = JSON.parse(JSON.stringify(this.lowerGraphs.config));

    config1.chart.id = this.lowerGraphs.graph3.id;
    config2.chart.id = this.lowerGraphs.graph4.id;
    config3.chart.id = this.lowerGraphs.graph5.id;
    config4.chart.id = this.lowerGraphs.graph6.id;
    
    const labelColumn = "";

    let filter  = {[this.lowerGraphs.graph3.filter.filterKey]:this.lowerGraphs.graph3.filter.filterValue};
    let filter2 = {[this.lowerGraphs.graph4.filter.filterKey]:this.lowerGraphs.graph4.filter.filterValue};
    let filter3 = {[this.lowerGraphs.graph5.filter.filterKey]:this.lowerGraphs.graph5.filter.filterValue};
    let filter4 = {[this.lowerGraphs.graph6.filter.filterKey]:this.lowerGraphs.graph6.filter.filterValue};
    if (this.hasMap){
      filter.Region=this.graphRegionSelection1;
      filter.Gedad=this.graphAgeSelection1;
      filter2.Region=this.graphRegionSelection1;
      filter2.Gedad=this.graphAgeSelection1;
      filter3.Region=this.graphRegionSelection2;
      filter3.Gedad=this.graphAgeSelection1;
      filter4.Region=this.graphRegionSelection2;
      filter4.Gedad=this.graphAgeSelection1;
    }

    let IndgGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    let AfroGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter2);
    let IndgBGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter3);
    let AfroBGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter4);
    
        
    config1.series[0].name = this.graphRegionSelection1;
    config1.series[0].data = IndgGraphDataSeries.data;
    config2.series[0].name = this.graphRegionSelection1;
    config2.series[0].data = AfroGraphDataSeries.data;
    config3.series[0].name = this.graphRegionSelection2;
    config3.series[0].data = IndgBGraphDataSeries.data;
    config4.series[0].name = this.graphRegionSelection2;
    config4.series[0].data = AfroBGraphDataSeries.data;
     
    //config1.xaxis.categories = menGraphDataSeries.labels;
    config1.yaxis.labels.formatter = function (val) {return val + "%"};  
    config1.yaxis.max = function(val) {if(val < 6){return val + 70} else if( 6 <= val < 15){return val + 65}else if(15 <= val < 40){return val + 60}else if(40 <= val < 90){return val + 10}else if(90 <= val <= 100){return val}}
    config1.dataLabels.formatter = function (val) {return val + "%"};
    
    config2.yaxis.labels.formatter = function (val) {return val + "%"};  
    config2.yaxis.max = function(val) {if(val < 6){return val + 70} else if( 6 <= val < 15){return val + 65}else if(15 <= val < 40){return val + 60}else if(40 <= val < 90){return val + 10}else if(90 <= val <= 100){return val}}
    config2.dataLabels.formatter = function (val) {return val + "%"};

    config3.yaxis.labels.formatter = function (val) {return val + "%"};  
    config3.yaxis.max = function(val) {if(val < 6){return val + 70} else if( 6 <= val < 15){return val + 65}else if(15 <= val < 40){return val + 60}else if(40 <= val < 90){return val + 10}else if(90 <= val <= 100){return val}}
    config3.dataLabels.formatter = function (val) {return val + "%"};
    
    config4.yaxis.labels.formatter = function (val) {return val + "%"};  
    config4.yaxis.max = function(val) {if(val < 6){return val + 70} else if( 6 <= val < 15){return val + 65}else if(15 <= val < 40){return val + 60}else if(40 <= val < 90){return val + 10}else if(90 <= val <= 100){return val}}
    config4.dataLabels.formatter = function (val) {return val + "%"};

    let charta = new ApexCharts(document.querySelector("#"+this.lowerGraphs.graph3.id), config1);
    let chartb = new ApexCharts(document.querySelector("#"+this.lowerGraphs.graph4.id), config2); 
    let chartc = new ApexCharts(document.querySelector("#"+this.lowerGraphs.graph5.id), config3);
    let chartd = new ApexCharts(document.querySelector("#"+this.lowerGraphs.graph6.id), config4);              
    charta.render();    
    chartb.render(); 
    chartc.render();    
    chartd.render();    
  }




  /**
   * Funcion que divide el texto por uno de los espacios si supera un maximo dado.
   * Si el texto no supera la cantidad retorna el mismo texto.
   * @param {string} text texto a dividir
   * @param {numeric} Optional maxLength 
   * @returns arreglo de textos segun las lineas divididas
   */
  static splitText(text, maxLength=60){
    const lines = text.match(new RegExp(`.{1,${maxLength}}(\\s|$)`, 'g'));
    if (lines){
      return lines.map(line => line.trim());
    }
    
    return text;
  }
}




function openNav() {
  document.getElementById("mySidenav").style.width = "260px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}

function selOption(select, value){
  if (select){
    let parent = select.parentElement;
    let selectorOptionsVisible = parent.querySelector('.select-items');
    let selectorSelectedVisible = parent.querySelector('.select-selected');
    // seleccionar opcion en select
    let validOption=false;
    for(let i=0; i < select.options.length; i++){
      if(select.options[i].value === value) {
        validOption=true;
        select.selectedIndex = i;
        break;
      }
    }
    if (validOption){
      // seleccionar opcion en custom element
      selectorSelectedVisible.innerHTML = value;
      let innerDivs = selectorOptionsVisible.querySelectorAll("div");
      innerDivs.forEach((div) => {
        // limpiar classes
        div.classList.remove("same-as-selected");
        if (div.innerHTML == value){
          div.classList.add("same-as-selected");
        }
      });
    }
  }
}

function updateOption(select, callback, selValue){
  // get div next to selector
  let parent = select.parentElement;
  let selectorVisible = parent.querySelector('.select-items');
  selectorVisible.innerHTML = '';
  for (j = 0; j < select.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = select.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
        if (callback) {
          callback(s.options[s.selectedIndex].innerHTML);
        }
    });
    selectorVisible.appendChild(c);
  }
  if (selValue) {
    let selectorVisibleSelected = parent.querySelector('.select-selected');
    selectorVisibleSelected.innerHTML = selValue;
  }
}

function updateOption2(select, callback, selValue){
  // get div next to selector
  let parent = select.parentElement;
  let selectorVisible = parent.querySelector('.select-items');  
  for (j = 0; j < select.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = select.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
        if (callback) {
          callback(s.options[s.selectedIndex].innerHTML);
        }
    });
    selectorVisible.appendChild(c);
  }
  if (selValue) {
    let selectorVisibleSelected = parent.querySelector('.select-selected');
    selectorVisibleSelected.innerHTML = selValue;
  }
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

$( ".hb-menu" ).click(function(){
  $(".menu-mb .menu-lateral").toggle();
  $("#overlay").toggle();
});