//const siteurl = 'http://pruebas.kugelelectronics.com.co/dashboard/';
const siteurl = 'http://webdash.test/';
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
    'hogaresGenerales':siteurl + 'csv/hogares_general.csv',
    'mujeresEtnicas':siteurl + 'csv/hogares_mujeres_etnicas.csv',
    'servidoresPublicos':siteurl + 'csv/encuesta_servidores_publicos.csv',
    'entornoInstitucionalPaz':siteurl + 'csv/entorno_institucional_paz.csv',
    'entornoInstitucionalMujeres':siteurl + 'csv/entorno_institucional_mujeres.csv',
    'entornoInstitucionalLGBTI':siteurl + 'csv/entorno_institucional_lgbti.csv'
  };

  // declaracion de filtros
  static filterFields = ['Region','Region PDET', 'Departamento', 'Municipio PDET', 'Grupo de edad', 'Sexo',
  'Tiempo que lleva trabajando en la institución'];


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
  menGraph;
  womenGraph;
  selectedQuestion;
  hasMap;

  graphRegionSelection1;
  graphRegionSelection2;
  

  constructor(survey, hasMap = true){
    this.dr = new DashboardDataReader();
    this.survey = survey;
    this.hasMap = hasMap;
    if (this.hasMap){
      this.mapClickCallback = (region) => {
        this.region = region;
        this.updateGraph1(this.menGraph, {Region:this.region, Sexo:"HOMBRE"});
        this.updateGraph1(this.womenGraph, {Region:this.region, Sexo:"MUJER"});
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
    
    // cargar informacion de preguntas de preguntas por defecto
    this.loadQuestions();

    // cargar regiones en selectores inferiores
    this.loadRegions();

    //Cargar región individual
    this.loadSingleRegion();

    // inicializar graficas
    this.initGraphs1();
    this.initGraphs2();

    // incializar mapa
    if (this.hasMap){
      initMapHandler(this.mapClickCallback);
    }

    // TODO esconder loader
  }

  initGraphs1(){
    let menGraphEl = document.getElementById('myChart').getContext('2d');
    let womenGraphEl = document.getElementById('myChart2').getContext('2d');
    let filter = {Sexo:"HOMBRE"};
    if (this.hasMap){
      filter.Region=this.region;
    }
    const labelColumn = "Grupo de edad";
    let graphData1 = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);

    this.menGraph = new Chart(menGraphEl, {
      type: 'bar',
      data: {
        labels: graphData1.labels,
        datasets: [{
          label: this.region,
          data: graphData1.data,
          backgroundColor: Array(6).fill(chartConfig.datasetsBackgroundColor),
          borderColor: Array(6).fill(chartConfig.datasetsBorderColor),
          color: chartConfig.datasetsColor,
          borderWidth: chartConfig.datasetsBorderWidth
        }]
      },
      options: chartConfig.options
    });
    let filter2 = {Region:this.region, Sexo:"MUJER"};
    if (this.hasMap){
      filter2.Region=this.region;
    }
    let graphData2 = this.dr.getColumnData(this.survey, this.selectedQuestion, labelColumn, filter2);

    this.womenGraph = new Chart(womenGraphEl, {
      type: 'bar',
      data: {
        labels: graphData2.labels,
        datasets: [{
          label: this.region,
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

  updateGraph1(graph, filter){
    const labelColumn = "Grupo de edad";
    // cargar datos del grafico
    let newData = this.dr.getColumnData(this.survey, this.selectedQuestion, labelColumn, filter);
    //console.log("graphData1", graphData1);
    graph.data.labels = newData.labels;
    graph.data.datasets[0].data = newData.data;
    graph.data.datasets[0].label = this.region;
    graph.options.plugins.title.text = this.selectedQuestion;
    graph.update();
  }

  initGraphs2(){
    let config1 = JSON.parse(JSON.stringify(lowerChartConfig));
    let config2 = JSON.parse(JSON.stringify(lowerChartConfig));
    
    config1.chart.id = 'menChart';
    config2.chart.id = 'womenChart';
    const labelColumn = "Grupo de edad";
    
    
    let filter = {Sexo:"HOMBRE"};
    if (this.hasMap){
      filter.Region=this.graphRegionSelection1;
    }
    
    let menGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    if (this.hasMap){
      filter.Region=this.graphRegionSelection2;
    }
    let womenGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    config1.series[0].name = this.graphRegionSelection1;
    config1.series[0].data = menGraphDataSeries.data;
    config1.series[1].name = this.graphRegionSelection2;
    config1.series[1].data = womenGraphDataSeries.data;
    config1.xaxis.categories = menGraphDataSeries.labels;

    console.log("config", config1);

    let filter2 = {Sexo:"MUJER"};
    if (this.hasMap){
      filter2.Region=this.graphRegionSelection1;
    }
    menGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter2);
    if (this.hasMap){
      filter2.Region=this.graphRegionSelection2;
    }
    womenGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter2);
    config2.series[0].name = this.graphRegionSelection1;
    config2.series[0].data = menGraphDataSeries.data;
    config2.series[1].name = this.graphRegionSelection2;
    config2.series[1].data = womenGraphDataSeries.data;
    config2.xaxis.categories = menGraphDataSeries.labels;

    console.log("config2", config2);
    
    let chartb = new ApexCharts(document.querySelector("#chartb"), config1);
    let chartc = new ApexCharts(document.querySelector("#chartc"), config2);        
    chartb.render();
    chartc.render();
  }

  updateGraph2(graphId, filter){
    const labelColumn = "Grupo de edad";
    // cargar datos del grafico
    filter.Region=this.graphRegionSelection1;
    let menGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    filter.Region=this.graphRegionSelection2;
    let womenGraphDataSeries = this.dr.getColumnData(this.survey,this.selectedQuestion, labelColumn, filter);
    let series = [
      {
        name:this.graphRegionSelection1,
        data: menGraphDataSeries.data,
      },
      {
        name:this.graphRegionSelection2,
        data:womenGraphDataSeries.data,
      }
    ];
    //config2.xaxis.categories = menGraphDataSeries.labels;

    //console.log("graphData1", graphData1);
    ApexCharts.exec(graphId, 'updateSeries', series, true);
  }

  

  loadQuestions(){
    let self = this;
    let questions = this.dr.getQuestions(this.survey);
    let pregUL = document.querySelector('.preguntas ul');
    // limpiar preguntas
    pregUL.innerHTML = '';
    // insertar preguntas en DOM
    questions.forEach((q) => {
      pregUL.append(HTMLbuilder.createPreguntasLiElement(q));
    });
    // inicializar eventos de clic en cada pregunta
    const aTags = document.querySelectorAll('.preguntas ul li a');
    aTags.forEach((a) => {
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
        self.updateGraph1(self.menGraph, {Region:self.region, Sexo:"HOMBRE"});
        self.updateGraph1(self.womenGraph, {Region:self.region, Sexo:"MUJER"});
        self.updateGraph2("menChart", {Region:'', Sexo:"HOMBRE"});
        self.updateGraph2("womenChart", {Region:'', Sexo:"MUJER"});
      });
    });
  }

  loadRegions(){
    let self = this;
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
        if (selector.getAttribute('id') == "region1"){
          self.graphRegionSelection1 = value;
        } else if (selector.getAttribute('id') == 'region2'){
          self.graphRegionSelection2 = value;
        }
        self.updateGraph2("menChart", {Region:'', Sexo:"HOMBRE"});
        self.updateGraph2("womenChart", {Region:'', Sexo:"MUJER"});
        console.log("Region seleccionada:", value, "sel1:", self.graphRegionSelection1, "sel2:",self.graphRegionSelection2);
      };
      // definir selecciones por defecto de ambos selectores
      if (selector.getAttribute('id') == "region1"){
        selector.selectedIndex = 0;
      } else if (selector.getAttribute('id') == 'region2'){
        selector.selectedIndex = 1;
      }
      updateOption(selector, callback, regionsList[selector.selectedIndex]);
    });
  }

  loadSingleRegion(){
    let self = this;
    const regionsDropDown = document.querySelectorAll('.custom-select.ext select');
    const regionsList = this.dr.getFilters(this.survey, 'Region');
    self.graphRegionSelection1 = regionsList[0];
    regionsDropDown.forEach((selector, i) => {
      // limpiar opciones
      selector.innerHTML = '';
      // adicionar atributo de selector
      regionsList.forEach((q) => {
        selector.add(HTMLbuilder.createSelectorOptionElement(q),null);
      });
      let callback = (value) => {
        if (selector.getAttribute('id') == "regionA"){
          self.graphRegionSelection1 = value;
        } 
        
      };
      
    });
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