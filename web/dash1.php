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
?>  -->
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
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js" charset="utf-8"></script>   
    <script src="js/jquery.mapael.min.js"></script>
    <script src="js/papaparse.min.js"></script>

    
    <script src="js/mapahandler.js"></script>    
    


    <title>Dashboard - Page 1</title>
    <style>
        .mapael .mapTooltip {
            color: #022869;
        }
    </style>

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
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                      Encuesta General
                                    </button>
                                  </h2>
                                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="box-buttons">
                                            <a href="dash1.php" class="activo">
                                                <img src="img/icono-02.svg" alt="">
                                                Encuesta general
                                            </a>
                                        </div>
                                        <div class="box-message">
                                            <a href="dash2.php" class="activo">
                                                Experiencia frente a la violencia y la respuesta institucional de las mujeres indígenas y afrodescendientes
                                            </a>
                                        </div>
                                    </div>
                                  </div>
                                </div>                                                                
                            </div>
                                                        
                            
                            <div class="box-buttons">
                                <a href="dash3.html" class="hblue">
                                    <img src="img/icono-03.svg" alt="" >
                                    Encuesta servidores públicos
                                </a>
                                <a href="#exampleModal" class="hblue" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img src="img/info-blue.png" alt="" >    
                                    Ficha técnica
                                </a>
                            </div>
                        </div>
                        <div class="red-menu">
                            <h2>
                                Estudio de Entorno Institucional Habilitante para el Empoderamiento de Género en Colombia
                            </h2>
                            <div class="box-buttons">
                                <a href="dash4.html" class="hred">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional Paz
                                </a>
                                <a href="dash5.html" class="hred">
                                    <img src="img/icono-05.svg" alt="">
                                    Entorno Institucional Mujeres
                                </a>
                                <a href="#" class="hred">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional LGBTIQ
                                </a>
                                <a href="#exampleModal2" class="hblue" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                    <img src="img/info.png" alt="">     
                                    Ficha técnica
                                </a>
                            </div>
                        </div>
                        <div class="gray-menu">
                            <div class="box-buttons">
                                <a href="#" class="blue-bg hblue">
                                    <img src="img/info-w.png" alt="">
                                    Sobre el proyecto
                                </a>
                                <a href="#" class="blue-bg hblue">
                                    <img src="img/chat.png" alt="">
                                    Contácto
                                </a>                        
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
                    <div class="col-xxl-10 col-xl-9 col-md-12">
                        <div class="blue-info">
                            <div class="row">
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
                                <div class="col-4">
                                    <div class="info-box">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="punto"></div>
                                            </div>
                                            <div class="col-8 last">
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
                    <div class="col-xxl-2 col-xl-3 col-md-12">
                        <div class="adicional">
                            <p>MATERIAL ADICIONAL</p>
                            <div class="box-buttons">
                                <a href="#">
                                    <img src="img/down.png" alt="">
                                    <span>|</span>
                                    VER INFOGRAFÍA
                                </a>
                                <a href="#">
                                    <img src="img/play.png" alt="">
                                    <span>|</span>
                                    VER VIDEO
                                </a>                        
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">                
                    <div class="col-xl-12">
                        <div class="util-box">
                            <div class="mapa">
                                <h4>Preguntas</h4>
                                <p>Seleccione una pregunta del Estudio de tolerancia Social e Institucional a las Violencias Contra las Mujeres para ver los resultados</p>
                            </div>
                            <div class="preguntas">
                                <ul>
                                    <li>
                                        <a href="#" >De acuerdo y totalmente de acuerdo con que "Los hombres son la cabeza del hogar"</a>
                                    </li>
                                    <li>
                                        <a href="#" >De acuerdo y totalmente de acuerdo con que "Cuando las mujeres dicenNo, quieren decir Sí"</a>
                                    </li>
                                    <li>
                                        <a href="#" >De acuerdo y totalmente de acuerdo: "A veces está bien que los hombres golpeen a sus parejas"</a>
                                    </li>
                                    <li>
                                        <a href="#">De acuerdo y totalmente de acuerdo: "A veces está bien que los hombres golpeen a sus parejas"</a>
                                    </li>
                                    <li>
                                        <a href="#">De acuerdo y totalmente de acuerdo: "A veces está bien que los hombres golpeen a sus parejas"</a>
                                    </li>
                                    <li>
                                        <a href="#">De acuerdo y totalmente de acuerdo: "A veces está bien que los hombres golpeen a sus parejas"</a>
                                    </li>
                                    <li>
                                        <a href="#">De acuerdo y totalmente de acuerdo: "A veces está bien que los hombres golpeen a sus parejas"</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6 col-lg-6">
                        <div class="util-box">
                            <div class="mapa">
                                <h4>Regiones PDET</h4>
                                <p>Seleccione en el mapa la región PDET que desee consultar</p>
                                <div class="mapcontainer">
                                    <div class="map">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                    
                        <div class="row ">
                            <div class="col-xxl-12 col-xl-12 col-lg-12">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Hombres</h4>
                                    <!-- <div id="chart"></div>
                                    <div id="chartalt" style="display:none"></div> -->
                                    <div class="chart">
                                        <canvas id="myChart"  width="630" height="280"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Mujeres</h4>                                    
                                    <div class="chart">
                                        <canvas id="myChart2" width="630" height="280"></canvas>
                                    </div>
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
                                    <div class="mapa mt-2">
                                        <h4>
                                            SELECCIONE LAS REGIONES PDET QUE DESEE COMPARAR
                                        </h4>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <!-- <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            REGIÓN PDET
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#" id="reg1">BAJO CAUCA Y NORDESTE ANTIOQUENO</a></li>
                                            <li><a class="dropdown-item" href="#" >SUR DE BOLIVAR</a></li>                                          
                                        </ul>
                                    </div> -->
                                    <div class="custom-select mt-3 region">
                                        <select id="region1">
                                            <option>REGIÓN PDET</option>
                                            <option value="1">BAJO CAUCA Y NORDESTE ANTIOQUENO</option> 
                                            <option value="2">REGIÓN 2</option>                                       
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <!-- <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            REGIÓN PDET
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#">BAJO CAUCA Y NORDESTE ANTIOQUENO</a></li>
                                            <li><a class="dropdown-item" href="#" id="reg2">SUR DE BOLIVAR</a></li> 
                                        </ul>
                                    </div> -->
                                    <div class="custom-select mt-3">
                                        <select id="region2">
                                            <option>REGIÓN PDET</option>
                                            <option value="1">CUENCA DEL CAGUAN Y PIEDEMONTE CAQUETENO</option> 
                                            <option value="2">REGIÓN 3</option>                                       
                                        </select>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-lg-12">
                    <div class="util-box">
                        <div class="mapa">
                            <h4 class="text-center">
                                Hombres
                            </h4>
                        </div>
                        <div id="chartb"></div>
                        <div id="chartbalt" style="display: none;"></div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="util-box">
                            <div class="mapa">
                                <h4 class="text-center">
                                    Mujeres
                                </h4>
                            </div>                           
                            <div id="chartc"></div>
                            <div id="chartcalt" style="display: none;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    
    <script>        
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
                    columnWidth: '20%',
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
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ['#022869']
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
                
            }
            ,
            tooltip: {
                y: {
                    formatter: function (val) {
                    return val + " %"
                    }
                }
            }
            ,fill: {
                colors: ['#14DFFF','#022869']
            }
        };

        

       

        var chartb      = new ApexCharts(document.querySelector("#chartb"), options2);
        var chartc      = new ApexCharts(document.querySelector("#chartc"), options2);        
        chartb.render();
        chartc.render();
        
    </script>
    


  
  <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">            
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
                    <img src="fichas/Fichas Tecnicas-01.jpg" alt="">
                </div>
            
            </div>
        </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">            
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body">
                    <img src="fichas/Fichas Tecnicas-02.jpg" alt="">
                </div>
            
            </div>
        </div>
        </div>
    </div>
    
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/mapa/col.js"></script>
    <script src="js/charts-config.js"></script>
    <script src="js/mapa/pdet.js"></script>
    <script src="js/main.js"></script>
    <script>
        // iniciar dashboard
        // iniciar funciones y carga de datos
        let dash = new Dashboard('hogaresGenerales');
    </script>
    

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
    -->
  </body>
</html>