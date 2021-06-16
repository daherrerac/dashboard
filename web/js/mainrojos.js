//const siteurl = 'http://pruebas.kugelelectronics.com.co/dashboard/';
//const siteurl = 'http://webdash.test/';
const siteurl = 'http://dashboard.local/';
//const siteurl = 'http://pruebadevelopment.com/';



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
  static filterFields = ['Region','Región PDET', 'Departamento', 'Municipio PDET', 'Grupo de edad', 'Sexo',
  'Tiempo que lleva trabajando en la institución', 'Pertenencia étnica', 'MUNICIPIO'];


  async parseFile(url){
    const res = await parseFile(url);
    return res;
  }

  async parseDashboardFile(surveyKey){
    let data={};
    const lowercaseFilters = DashboardDataReader.filterFields.map((el) => el.toLowerCase());

    let csvData = await this.parseFile(DashboardDataReader.urls[surveyKey]);
    let prequestions = csvData[0].filter((value) => {
      return !lowercaseFilters.includes(value.toLowerCase().trim());
    });
    let agentes   = prequestions.splice(0,3);
    let questions = prequestions;
    let headers = csvData[0].map(el => el.trim());
    // eliminar encabezado de tabla de datos
    csvData.shift();
    // crear objeto de resultado final
    data[surveyKey] = {
      questions,
      headers,
      agentes,
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
      // console.log("getting data", labelsHeader, categories);
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
              let val = categories[catKey] || "";
              indexes.push({index:i, value:val.trim().toLowerCase()});
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
          return DashboardDataReader.clearValue(el[i], true);
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

  /**
   * Obtiene los datos de una fila segun los filtros dados
   * @param {*} survey 
   * @param {*} values 
   * @returns 
   */
   getRowData(survey, columns, filters){
    if (this.data[survey]) {
      let lowerCaseHeaders = this.data[survey].headers.map((el) => el.toLowerCase().trim());
      for (let column of columns) {
        let i = lowerCaseHeaders.indexOf(column.toLowerCase().trim());
        if (i!=-1){
          let evalData = this.data[survey].data;
          if (filters){
            // si categorias, filtrar informacion dejando unicamente los datos relacionados con los
            // campos dados por parametro
            let indexes=[];
            for (let catKey of Object.keys(filters)) {
              let i = lowerCaseHeaders.indexOf(catKey.toLowerCase().trim());
              if (i!= -1){
                indexes.push({index:i, value:filters[catKey].trim().toLowerCase()});
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
          }

          // buscar indice de categoria en la columna
          let rowData = evalData.map((el) => {
            let newEl = [];
            for(let column of columns){
              let i = lowerCaseHeaders.indexOf(column.toLowerCase().trim());
              if (i!= -1){
                newEl.push(DashboardDataReader.clearValue(el[i],false));
              }
            }
            return newEl;
          });
          return rowData[0];
        } else {
          console.log("Column not found ", column, this.data[survey]);
        }
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
  static createPreguntasLiElement(pregunta, respuesta, respuesta2){
    let div1 = document.createElement('div');
    div1.classList.add('fila-cajon');
    let div2 = document.createElement('div');
    div2.classList.add('cajon');
    div2.classList.add('ask');
    div2.innerHTML = pregunta;
    let div3 = document.createElement('div');
    div3.classList.add('cajon');
    div3.classList.add('white');
    let div4 = document.createElement('div');
    div4.classList.add('cajon');
    div4.classList.add('ans');
    div4.innerHTML = respuesta;
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    if (respuesta2) {
      let div5 = document.createElement('div');
      div5.classList.add('cajon');
      div5.classList.add('white');
      let div6 = document.createElement('div');
      div6.classList.add('cajon');
      div6.classList.add('ans');
      div6.innerHTML = respuesta2;
      div1.appendChild(div5);
      div1.appendChild(div6);
    }
    return div1;
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
  municipio;
  selectedQuestion;

  compareRegionSelection1;
  compareRegionSelection2;
  compareMunicipioSelection1;
  compareMunicipioSelection2;
  
  filterAgente1;
  filterAgente2;
  filterAgente3;
  

  constructor(survey){
    this.dr = new DashboardDataReader();
    this.survey = survey;
    this.mapClickCallback = (municipio) => {
      if (municipio){
        let filter1 = {'MUNICIPIO': municipio};
        let rowData = this.dr.getRowData(this.survey,['Región PDET'], filter1);
        if (rowData && rowData.length){
          this.region = rowData[0];
          selOption(document.getElementById("regionA"), this.region);
          this.loadMunicipios('regionA');
          this.municipio = municipio;
          selOption(document.getElementById("municipioA"), this.municipio);
          this.loadQuestions();
        }else {
          console.log("Municipio ", municipio, "No encontrado en base de datos");
        }
      }
    }
    
    this.init();
  }

  async init(){
    // TODO iniciar un loader o algo aca
  
    await this.dr.parseDashboardFile(this.survey);

    this.selectedQuestion = this.dr.getQuestions(this.survey)[0]; // seleccionar la primera pregunta de la lista
    

    //Cargar Agentes
    this.loadAgente();


    // cargar regiones en selectores inferiores
    this.loadRegions();

    this.loadMunicipios();
    

    // cargar informacion de preguntas de preguntas por defecto
    this.loadQuestions();
    this.loadQuestions(true);

    initMapHandler(this.mapClickCallback);

  
    // TODO esconder loader
  }

  loadQuestions(comparePart){
    let self = this;
    let questions = this.dr.getQuestions(this.survey);
    
    let pregUL = document.querySelector('.respuestas');
    if (comparePart){
      pregUL = document.querySelector('.compare.respuestas');
    }
    // limpiar preguntas
    pregUL.innerHTML = '';
    // insertar preguntas en DOM
    questions.forEach((q, i) => {
      if (comparePart){
        let filter1 = {'Región PDET':self.compareRegionSelection1, 'MUNICIPIO': this.compareMunicipioSelection1};
        let filter2 = {'Región PDET':self.compareRegionSelection2, 'MUNICIPIO': this.compareMunicipioSelection2};
        let graphData1 = this.dr.getRowData(this.survey,questions, filter1);
        let graphData2 = this.dr.getRowData(this.survey,questions, filter2);
        if (graphData1 && graphData2)
          pregUL.append(HTMLbuilder.createPreguntasLiElement(q, graphData1[i],graphData2[i]));
      } else {
        let filter = {'Región PDET':self.region, 'MUNICIPIO': this.municipio};
        let graphData1 = this.dr.getRowData(this.survey,questions, filter);
        if (graphData1)
          pregUL.append(HTMLbuilder.createPreguntasLiElement(q, graphData1[i]));
      }
    });
  }

  loadRegions(){
    let self = this;
    const regionsDropDown = document.querySelectorAll('.region.custom-select select');
    const regionsList = this.dr.getFilters(this.survey, 'Región PDET');

    self.region = regionsList[0];
    self.compareRegionSelection1 = regionsList[0];
    self.compareRegionSelection2 = regionsList[0];
    regionsDropDown.forEach((selector, i) => {
      // limpiar opciones
      selector.innerHTML = '';
      // adicionar atributo de selector
      regionsList.forEach((q) => {
        selector.add(HTMLbuilder.createSelectorOptionElement(q),null);
      });
      let callback = (value) => {
        if (selector.getAttribute('id') == "regionA"){
          self.region = value;
          self.loadMunicipios('regionA');
          self.loadQuestions();
        } else if (selector.getAttribute('id') == "region1"){
          self.compareRegionSelection1 = value;
          self.loadMunicipios('region1');
          self.loadQuestions(true);
        } else if (selector.getAttribute('id') == 'region2'){
          self.compareRegionSelection2 = value;
          self.loadMunicipios('region2');
          self.loadQuestions(true);
        }
        
        //console.log("Region seleccionada:", value, "sel1:", self.compareRegionSelection1, "sel2:",self.compareRegionSelection2);
      };
      // definir selecciones por defecto de ambos selectores
      if (selector.getAttribute('id') == "regionA"){
        selector.selectedIndex = 0;
      } else if (selector.getAttribute('id') == 'region1'){
        selector.selectedIndex = 0;
      } else if (selector.getAttribute('id') == 'region2'){
        selector.selectedIndex = 0;
      }
      updateOption(selector, callback, regionsList[selector.selectedIndex]);
    });
  }

  loadAgente(){
    let self = this;
    const agente1Items = document.querySelectorAll('.agente1');
    const agente2Items = document.querySelectorAll('.agente2');
    const agente3Items = document.querySelectorAll('.agente3');
    
    const agente1List = this.dr.getFilters(this.survey, 'Agente1' );
    const agente2List = this.dr.getFilters(this.survey, 'Agente2' );
    const agente3List = this.dr.getFilters(this.survey, 'Agente3' );

    self.filterAgente1 = agente1List[0];
    self.filterAgente2 = agente2List[0];
    self.filterAgente3 = agente3List[0];
    
    agente1Items.forEach((selector, i) => {      
      agente1List.forEach((q) => {
        selector.innerHTML = this.filterAgente1 + "%";
      });                        
    });
    agente2Items.forEach((selector, i) => {      
      agente2List.forEach((q) => {
        selector.innerHTML = this.filterAgente2 + "%";
      });                        
    });
    agente3Items.forEach((selector, i) => {      
      agente3List.forEach((q) => {
        selector.innerHTML = this.filterAgente3 + "%";
      });                  
    });
  }

  updateAgente(id){
    let self = this;
    const agente1Items = document.querySelectorAll('.agente1');
    const agente2Items = document.querySelectorAll('.agente2');
    const agente3Items = document.querySelectorAll('.agente3');
    
    const agente1List = this.dr.getFilters(this.survey, 'Agente1' );
    const agente2List = this.dr.getFilters(this.survey, 'Agente2' );
    const agente3List = this.dr.getFilters(this.survey, 'Agente3' );

    self.filterAgente1 = agente1List[id];
    self.filterAgente2 = agente2List[id];
    self.filterAgente3 = agente3List[id];
    
    agente1Items.forEach((selector, i) => {      
      agente1List.forEach((q) => {
        selector.innerHTML = this.filterAgente1 + "%";
      });                        
    });
    agente2Items.forEach((selector, i) => {      
      agente2List.forEach((q) => {
        selector.innerHTML = this.filterAgente2 + "%";
      });                        
    });
    agente3Items.forEach((selector, i) => {      
      agente3List.forEach((q) => {
        selector.innerHTML = this.filterAgente3 + "%";
      });                  
    });
  }

  loadMunicipios(region){
    let self = this;
    const regionsDropDown = document.querySelectorAll('.municipio.custom-select select');

    //console.log(regionsList);
    let regionList = [];
    if (region && region == 'regionA'){
      regionList = this.dr.getColumnData(this.survey, 'MUNICIPIO',undefined, {'Región PDET':self.region}).data;
      self.municipio = regionList[0];
    } else if(region && region == 'region1'){
      regionList = this.dr.getColumnData(this.survey, 'MUNICIPIO',undefined, {'Región PDET':self.compareRegionSelection1}).data;
      self.compareMunicipioSelection1 = regionList[0];
    } else if(region && region == 'region2'){
      regionList = this.dr.getColumnData(this.survey, 'MUNICIPIO',undefined, {'Región PDET':self.compareRegionSelection2}).data;
      self.compareMunicipioSelection2 = regionList[0];
    }else{
      regionList = this.dr.getColumnData(this.survey, 'MUNICIPIO',undefined, {'Región PDET':self.region}).data;
      self.municipio = regionList[0];
      self.compareMunicipioSelection1 = regionList[0];
      self.compareMunicipioSelection2 = regionList[0];
    }
    regionsDropDown.forEach((selector, i) => {
      let addData = false;
      if (region){
        if(region == 'regionA' && selector.getAttribute('id') == "municipioA"){
          addData = true;
        } else if(region == 'region1' && selector.getAttribute('id') == "municipio1"){
          addData = true;
        } else if(region == 'region2' && selector.getAttribute('id') == "municipio2"){
          addData = true;
        }
      } else {
        addData = true;
      }
      if(addData) {
        // limpiar opciones
        selector.innerHTML = '';
        // adicionar atributo de selector
        regionList.forEach((q) => {
          selector.add(HTMLbuilder.createSelectorOptionElement(q),null);
        });
        let callback = (value) => {
          if (selector.getAttribute('id') == "municipioA"){
            self.municipio = value;
            self.loadQuestions();
          } else if (selector.getAttribute('id') == "municipio1"){
            self.compareMunicipioSelection1 = value;
            self.loadQuestions(true);
          } else if (selector.getAttribute('id') == 'municipio2'){
            self.compareMunicipioSelection2 = value;
            self.loadQuestions(true);
          }
          // console.log("Region seleccionada:", value, "sel1:", self.compareMunicipioSelection1, "sel2:",self.compareMunicipioSelection2);
        };
        // definir selecciones por defecto de ambos selectores
        if (selector.getAttribute('id') == "municipioA"){
          selector.selectedIndex = 0;
        } else if (selector.getAttribute('id') == 'municipio1'){
          selector.selectedIndex = 0;
        } else if (selector.getAttribute('id') == 'municipio2'){
          selector.selectedIndex = 0;
        }
        updateOption(selector, callback, regionList[selector.selectedIndex]);
      }
    });
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
      if(select.options[i].value.trim().toLowerCase() === value.trim().toLowerCase()) {
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