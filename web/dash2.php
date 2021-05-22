<!-- <?php
  session_start();
   
  // Controlo si el usuario ya está logueado en el sistema.
  if(isset($_SESSION['email'])){
    // Le doy la bienvenida al usuario.
    echo 'Bienvenido <strong>' . $_SESSION['email'] . '</strong>, <a href="cerrar.php">cerrar sesión</a>';
  }else{
    // Si no está logueado lo redireccion a la página de login.
    header("HTTP/1.1 302 Moved Temporarily"); 
    header("Location: index.html"); 
  }
?>   -->
<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js" charset="utf-8"></script>   
    <script src="js/jquery.mapael.min.js"></script>

    <script>
        $(function () {
            $(".mapcontainer").mapael({
                map: {
                    // Set the name of the map to display
                    name: "col",
                    
                    zoom: {
                        enabled: true,
                        maxLevel: 10
                    }
                    , defaultPlot: {
                        attrs: {
                            fill: "#004a9b"
                            , opacity: 1
                        }
                        , attrsHover: {
                            opacity: 1
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }
                    , defaultArea: {
                        attrs: {
                            fill: "#cccccc"
                            , stroke: "#efefef"
                        }
                        , attrsHover: {
                            fill: "#002e6c"
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }
                },areas: {                    
                    "path107": {
                        attrs: {
                            fill: "#b2b2b2"
                        }
                        , attrsHover: {
                            fill: "#f6f6f6"
                        }
                    }
                },
            });
        });
    </script>
    <title>Dashboard - Page 1</title>
  </head>
  <body style="overflow-y: auto;background: #fbfbfb;">
      
    <div class="container-fluid">
        <div class="fila">
            <div class="columna1">
                <div class="col-lg-12">
                    <div class="menu-lateral">
                        <div class="logo-left">
                            <img src="img/logo.svg" alt="">
                        </div>
                        <div class="blue-menu">
                            <h2>
                                Estudio de tolerancia Social e Institucional a las Violencias Contra las Mujeres
                            </h2>

                            <div class="box-buttons">
                                <a href="dash3.html">
                                    <img src="img/icono-03.svg" alt="">
                                    Encuesta general
                                </a>
                            </div>                            
                            <div class="box-message">
                                <a href="#">
                                    Experiencia frente a la violencia y la respuesta institucional de las mujeres indígenas y afrodescendientes
                                </a>
                            </div>
                            <div class="box-buttons">
                                <a href="dash3.html">
                                    <img src="img/icono-03.svg" alt="">
                                    Encuesta servidores públicos
                                </a>
                                <a href="#">
                                    <img src="img/information-button-svgrepo-com.svg" alt="">    
                                    Ficha técnica
                                </a>
                            </div>
                        </div>
                        <div class="red-menu">
                            <h2>
                                Estudio de Entorno Institucional Habilitante para el Empoderamiento de Género en Colombia
                            </h2>
                            <div class="box-buttons">
                                <a href="dash4.html">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional Paz
                                </a>
                                <a href="dash5.html">
                                    <img src="img/icono-05.svg" alt="">
                                    Entorno Institucional Mujeres
                                </a>
                                <a href="#">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional LGBTIQ
                                </a>
                                <a href="#">
                                    <img src="img/information-button-svgrepo-com.svg" alt="">     
                                    Ficha técnica
                                </a>
                            </div>
                        </div>
                        <div class="gray-menu">
                            <div class="box-buttons">
                                <a href="#" class="blue-bg">
                                    <img src="img/information-button-svgrepo-com.svg" alt="">
                                    Entorno Institucional Paz
                                </a>
                                <a href="#" class="blue-bg">
                                    <img src="img/chat-svgrepo-com.svg" alt="">
                                    Entorno Institucional Mujeres</a>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columna2">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="box-title">
                            <h1>
                                ENCUESTA GENERAL DE TOLERANCIA SOCIAL E INSTITUCIONAL CONTRA LAS MUJERES
                            </h1>
                            <div class="linea"></div>
                            <h2>
                                En el segundo semestre de 2020, USAID/Colombia realizó la medición de la Tolerancia Social e Institucional contra las
                                MujeresTolerancia Social e Institucional contra las Mujeres en 59 municipios PDET y 2 ciudades capitales: Cali y Quibdó.
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10">
                        <div class="blue-info">
                            <div class="row">
                                <div class="col-4">
                                    <div class="info-box primero">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="punto"></div>
                                            </div>
                                            <div class="col-8">
                                                <p>Lorem ipsum
                                                    Etiam a ligula non
                                                 </p>
                                                 <div class="numero">
                                                     123
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="info-box">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="punto"></div>
                                            </div>
                                            <div class="col-8">
                                                <p>Lorem ipsum
                                                    Etiam a ligula non
                                                 </p>
                                                 <div class="numero">
                                                     123
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="info-box">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="punto"></div>
                                            </div>
                                            <div class="col-8">
                                                <p>Lorem ipsum
                                                    Etiam a ligula non
                                                 </p>
                                                 <div class="numero">
                                                     123
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                            </div>                                                       
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="adicional">
                            <p>MATERIAL ADICIONAL</p>
                            <div class="box-buttons">
                                <a href="#">
                                    <img src="img/download-svgrepo-com.svg" alt="">
                                    <span>|</span>
                                    VER INFOGRAFÍA
                                </a>
                                <a href="#">
                                    <img src="img/play-svgrepo-com.svg" alt="">
                                    <span>|</span>
                                    VER VIDEO
                                </a>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5">
                        <div class="util-box">
                            <div class="mapa">
                                <h4>Regiones PDET</h4>
                                <p>Seleccione en el mapa la región PET que desee consultar</p>
                                <div class="mapcontainer">
                                    <div class="map">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="util-box">
                            <div class="mapa">
                                <h4>Preguntas</h4>
                                <p>Seleccione una pregunta del Estudio de tolerancia Social e Institucional a las Violencias Contra las Mujeres para ver los resultados</p>
                            </div>
                            <div class="preguntas">
                                <ul>
                                    <li>
                                        <a href="#" id="trigger-q">De acuerdo y totalmente de acuerdo con que "Los hombres son la cabeza del hogar"</a>
                                    </li>
                                    <li>
                                        <a href="#" id="trigger-qb">De acuerdo y totalmente de acuerdo con que "Cuando las mujeres dicenNo, quieren decir Sí"</a>
                                    </li>
                                    <li>
                                        <a href="#" id="trigger-qc">De acuerdo y totalmente de acuerdo: "A veces está bien que los hombres golpeen a sus parejas"</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Hombres</h4>
                                    <div id="chart"></div>
                                    <div id="chartalt" style="display: none;"></div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Mujeres</h4>
                                    <div id="chart-2"></div>
                                    <div id="chartalt2" style="display: none;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="util-box">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mapa">
                                        <h4>
                                            SELECCIONE LAS REGIONES PDET QUE DESEE COMPARAR
                                        </h4>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            REGIÓN PDET
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#" id="reg1">BAJO CAUCA Y NORDESTE ANTIOQUENO</a></li>
                                            <li><a class="dropdown-item" href="#" >SUR DE BOLIVAR</a></li>                                          
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            REGIÓN PDET
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#">BAJO CAUCA Y NORDESTE ANTIOQUENO</a></li>
                                            <li><a class="dropdown-item" href="#" id="reg2">SUR DE BOLIVAR</a></li> 
                                        </ul>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                    <div class="util-box">
                        <div id="chartb"></div>
                        <div id="chartbalt" style="display: none;"></div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="util-box">
                            <div id="chartc"></div>
                            <div id="chartcalt" style="display: none;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    <script>
        var options = {
            grid:{
                show:false
            },
            series: [{
                data: [37.46, 37.46, 37.46, 37.46, 37.46]
            }],
                chart: {
                type: 'bar',
                height: 280
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            yaxis:{
                labels:{
                    show:true, 
                    style: {
                        colors: ['#ffffff'],
                        fontSize: '12px',                                        
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },        
            xaxis: {
                categories: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años'],
                labels: {
                    show:false,                    
                }, 
                axisBorder: {
                    show: false,                    
                }, 
                axisTicks:{
                    show: false,                    
                },
                forceNiceScale: true,              
            },

            tickAmount: 10
            
        };
        var options3 = {
            grid:{
                show:false
            },
            series: [{
                data: [7.46, 97.46, 37.46, 37.46, 67.46]
            }],
                chart: {
                type: 'bar',
                height: 280
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            yaxis:{
                labels:{
                    show:true, 
                    style: {
                        colors: ['#ffffff'],
                        fontSize: '12px',                                        
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },        
            xaxis: {
                categories: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años'],
                labels: {
                    show:false,                    
                }, 
                axisBorder: {
                    show: false,                    
                }, 
                axisTicks:{
                    show: false,                    
                },
                forceNiceScale: true,              
            },

            tickAmount: 10
            
        };

        var chart    = new ApexCharts(document.querySelector("#chart"), options);
        var chartsub = new ApexCharts(document.querySelector("#chart-2"), options);
        chart.render();
        chartsub.render();

        var options2 = {
            series: [
                {
                    name: 'Región 1',
                    data: [44, 55, 57, 56, 61]
                }, 
                {
                    name: 'Región 2',
                    data: [76, 85, 90, 98, 87]
                }, 
            ],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ['#304758']
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años'],
            },
            yaxis: {
                
            },
            fill: {
                opacity: 0.8
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                    return val + " %"
                    }
                }
            }
        };

        var options4 = {
            grid:{
                show:false
            },
            series: [{
                data: [1.46, 97.46, 17.46, 8.46, 67.46]
            }],
                chart: {
                type: 'bar',
                height: 280
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            yaxis:{
                labels:{
                    show:true, 
                    style: {
                        colors: ['#ffffff'],
                        fontSize: '12px',                                        
                        cssClass: 'apexcharts-xaxis-label',
                    },
                }
            },        
            xaxis: {
                categories: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años'],
                labels: {
                    show:false,                    
                }, 
                axisBorder: {
                    show: false,                    
                }, 
                axisTicks:{
                    show: false,                    
                },
                forceNiceScale: true,              
            },

            tickAmount: 10
            
        };


        var options5 = {
            series: [
                {
                    name: 'Región 1',
                    data: [4, 75, 57, 56, 1]
                }, 
                {
                    name: 'Región 2',
                    data: [6, 85, 90, 98, 7]
                }, 
            ],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    endingShape: 'rounded',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ['#304758']
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años'],
            },
            yaxis: {
                
            },
            fill: {
                opacity: 0.8
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                    return val + " %"
                    }
                }
            }
        };


        var chartb      = new ApexCharts(document.querySelector("#chartb"), options2);
        var chartc      = new ApexCharts(document.querySelector("#chartc"), options2);
        var chartalt    = new ApexCharts(document.querySelector("#chartalt"), options3);
        var chartalt2   = new ApexCharts(document.querySelector("#chartalt2"), options4);
        var chartbalt   = new ApexCharts(document.querySelector("#chartbalt"), options5);
        var chartcalt   = new ApexCharts(document.querySelector("#chartcalt"), options5);
        chartb.render();
        chartc.render();
        chartbalt.render();
        chartcalt.render();
        chartalt.render();
        chartalt2.render();
        
    </script>
    
    
    
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
     
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/mapa/col.js"></script>
    
    

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
    -->
  </body>
</html>