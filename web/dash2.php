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
    

    
    <title>Dashboard - Page 2</title>
    <style>
        .mapael .mapTooltip {
            font-family:'SourceBold';
            position: absolute;
            background-color: #ffffff;            
            border-radius: 10px;
            padding: 10px;
            z-index: 1000;
            max-width: 200px;
            display: none;
            color: #022869;
            border: 1px solid #a6a6a6;
            text-align: center;
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
                                La tolerancia social e institucional a las violencias contra las mujeres.
                            </h2>

                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingOne">                                    
                                    <div class="menu-selector activo">
                                        <a href="dash1.php">
                                            <img src="img/icono-02.svg" alt="">
                                            Encuesta general
                                        </a>
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">                                                
                                        </button>
                                    </div>
                                  </h2>
                                  <div id="flush-collapseOne" class="accordion-collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        
                                        <div class="box-message activo" >
                                            <a href="dash2.php" style="font-weight: 600; text-shadow: 2px 2px 2px black;color:#ffffff">
                                                Experiencia frente a la violencia y la respuesta institucional de las mujeres indígenas y afrodescendientes
                                            </a>
                                        </div>
                                    </div>
                                  </div>
                                </div>                                                                
                            </div>
                            <div class="box-buttons">
                                <a href="dash3.html" class="hblue">
                                    <img src="img/icono-03.svg" alt="">
                                    Encuesta servidores públicos
                                </a>
                                <a href="#" class="hblue">
                                    <img src="img/info-blue.png" alt="" >  
                                    Ficha técnica
                                </a>
                            </div>
                        </div>
                        <div class="red-menu">
                            <h2>
                                Retos del entorno institucional para el empoderamiento de género en Colombia
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
                                <a href="#" class="hred">
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
                                    Contacto
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
                    <div class="col-lg-5">
                        <div class="util-box" style="height:97%">
                            <div class="mapa">
                                <h4>Regiones</h4>
                                <p>Seleccione en el mapa la región que desee consultar</p>
                                <div class="mapcontainer">
                                    <div class="map">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="util-box" style="height:420px">
                            <div class="mapa">
                                <h4>Preguntas</h4>
                                <p>Seleccione una pregunta del Estudio de tolerancia Social e Institucional a las Violencias Contra las Mujeres para ver los resultados</p>
                            </div>
                            <div class="preguntas">
                                <ul>
                                    <li>
                                        <a href="#" >Cargando preguntas...</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Indigena</h4>
                                    <!-- <div id="chart"></div>
                                    <div id="chartalt" style="display:none"></div> -->
                                    <div class="chart">
                                        <canvas id="myChart"  width="630" height="280"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Afrodescendiente</h4>                                    
                                    <div class="chart">
                                        <canvas id="myChart2"  width="630" height="280"></canvas>
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
                                            SELECCIONE LAS REGIONES QUE DESEE COMPARAR
                                        </h4>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">                                    
                                    <div class="region custom-select mt-3">
                                        <select id="region1">
                                            <option>REGIÓN</option>
                                            <option value="1">BAJO CAUCA Y NORDESTE ANTIOQUENO</option> 
                                            <option value="2">REGIÓN 2</option>                                       
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">                                   
                                    <div class="region custom-select mt-3">
                                        <select id="region2">
                                            <option>REGIÓN</option>
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
                <div class="pb-5"></div>
            </div>
        </div>
        
    </div>

    
    
    
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>    
    <script src="js/charts-config.js"></script>
    <script src="js/mapa/pdet.js"></script>
    <script src="js/main.js"></script>
    <script>
        // iniciar dashboard
        // iniciar funciones y carga de datos
        const mapGrahs = [
            { title: 'Indigena', filterKey: 'Pertenencia étnica', filterValue: 'Indigena'},
            { title: 'Afrodescendiente', filterKey: 'Pertenencia étnica', filterValue: 'Afrodescendiente'}
        ];
        const secondChartConfig = {
            config: lowerChartConfig,
            labelColumn: 'Grupo de edad',
            graph1: { 
                id: 'chartb',
                filter: { title: 'Afrodescendiente', filterKey: 'Pertenencia étnica', filterValue: 'Afrodescendiente'},
            },
            graph2: { 
                id: 'chartc',
                filter: { title: 'Indigena', filterKey: 'Pertenencia étnica', filterValue: 'Indigena'},
            }
        };
        let dash = new Dashboard('mujeresEtnicas', true, mapGrahs, secondChartConfig);
    </script>
    
    

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
    -->
  </body>
</html>