<?php
  session_start();
   
  // Controlo si el usuario ya está logueado en el sistema.
  if(isset($_SESSION['email'])){
    // Le doy la bienvenida al usuario.    
  }else{
    // Si no está logueado lo redireccion a la página de login.
    header("HTTP/1.1 302 Moved Temporarily"); 
    header("Location: index.html"); 
  }
?>
<!doctype html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>


    <title>Dashboard - Page 1</title>
  </head>
  <body style="overflow-y: auto;background: #fbfbfb;">
      
    <div class="container-fluid">
        <div class="fila">
            <div class="columna1 d-none d-lg-block">
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
                                    <div class="menu-selector">
                                        <a href="dash1.php">
                                            <img src="img/icono-03.svg" alt="">
                                            Encuesta general
                                        </a>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">                                                
                                        </button>
                                    </div>
                                  </h2>
                                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        
                                        <div class="box-message activo" >
                                            <ul>
                                                <li>
                                                    <a href="dash2.php" style="font-weight: 600; text-shadow: 2px 2px 2px black;color:#ffffff">
                                                        Experiencia frente a la violencia y la respuesta institucional de las mujeres indígenas y afrodescendientes
                                                    </a>
                                                </li>
                                            </ul>
                                            
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
                                <a href="#exampleModal" class="hblue" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                <a href="dash6.html" class="hred">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional LGBTI
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
                        <div class="cerrar">
                            <?php
                                if(isset($_SESSION['email'])){    
                                    echo '<img src="img/user.png" alt="">
                                    
                                    <p>
                                        Bienvenido/a
                                        <a href="#">'.$_SESSION['email'].'</a>
                                    </p>
                                    <a href="cerrar.php"> Cerrar sesión</a>
                                    
                                    ';
                                }
                            ?>                                                        
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-mb d-lg-none">
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <div class="hb-menu">
                                <svg viewBox="0 0 100 80" width="30" height="30">
                                    <rect width="100" height="15" rx="8"></rect>
                                    <rect y="30" width="100" height="15" rx="8"></rect>
                                    <rect y="60" width="100" height="15" rx="8"></rect>
                                </svg>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="logo">
                                <img src="img/logo.svg" alt="">                            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-lateral" style="display:none">                    
                    <div class="blue-menu">
                        <h2>
                            La Tolerancia Social e Institucional a las Violencias contra las Mujeres
                        </h2>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">                                    
                                <div class="menu-selector activo">
                                    <a href="dash1.php">
                                        <img src="img/icono-02.svg" alt="">
                                        Encuesta Tolerancia Social 
                                    </a>
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">                                                
                                    </button>
                                </div>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">                                            
                                    <div class="box-message">
                                        <ul>
                                            <li>
                                                <a href="dash2.php" class="activo">
                                                    Experiencia frente a la violencia y la respuesta institucional de las mujeres indígenas y afrodescendientes
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>                                                                
                        </div>
                                                                                
                        <div class="box-buttons">
                            <a href="dash3.html" class="hblue">
                                <img src="img/icono-03.svg" alt="" >
                                Encuesta Tolerancia Institucional
                            </a>
                            <a href="#exampleModal" class="hblue" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            <a href="dash6.html" class="hred">
                                <img src="img/icono-05.svg" alt="">    
                                Entorno Institucional LGBTI
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
                                Contacto
                            </a>                        
                        </div>
                    </div>
                    <div class="cerrar">
                        <?php
                            if(isset($_SESSION['email'])){    
                                echo '<img src="img/user.png" alt="">
                                
                                <p>
                                    Bienvenido/a
                                    <a href="#">'.$_SESSION['email'].'</a>
                                </p>
                                <a href="cerrar.php"> Cerrar sesión</a>
                                
                                ';
                            }
                        ?>                                                        
                    </div>
                </div>
            </div>
            <div id="overlay"></div>
            <div class="columna2">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="box-title">
                            <h1>
                                Encuesta DE Tolerancia Social e Institucional contra las Mujeres a Servidores Públicos
                            </h1>
                            <div class="linea"></div>
                            <h2>
                                En el segundo semestre de 2020, USAID/Colombia realizó la medición de la Tolerancia Social e Institucional 
                                contra las Mujeres en 59 municipios PDET y 2 ciudades capitales: Cali y Quibdó.
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
                                <a href="fichas/PDF.pdf" target="_blank">
                                    <img src="img/down.png" alt="">
                                    <span>|</span>
                                    VER INFOGRAFÍA
                                </a>
                                <a href="#exampleModal3" class="hblue" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    <img src="img/play.png" alt="">
                                    <span>|</span>
                                    VER VIDEO
                                </a>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="util-box">
                            <div class="mapa">
                                <h4>
                                    Preguntas
                                </h4>
                                <p>
                                    Seleccione una pregunta para ver los resultados
                                </p>
                            </div>
                            <div class="preguntas">
                                <ul>
                                    <li>
                                        <a href="#">Cargando preguntas...</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="util-box blue-bg">
                            <h4 class="text-center py-2 border-aux">Hombres</h4>
                            <div id="chart"></div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="util-box blue-bg">
                            <h4 class="text-center py-2 border-aux">Mujeres</h4>
                            <div id="chart-2"></div>
                        </div>
                    </div>
                </div>
                <div class="py-5"></div>
            </div>
        </div>
    </div>
    
    
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/papaparse.min.js"></script>
    <script src="js/charts-config.js"></script>
    <script src="js/main.js"></script>
    
    <script>
        // iniciar dashboard
        // iniciar funciones y carga de datos
        const secondChartConfig = {
            config: lowerChartConfig2,
            labelColumn: 'Tiempo que lleva trabajando en la institución',
                        
            graph1: { 
                id: 'chart',
                filter: { title: 'HOMBRES', filterKey: 'Sexo', filterValue: 'HOMBRE'},
            },
            graph2: { 
                id: 'chart-2',
                filter: { title: 'MUJERES', filterKey: 'Sexo', filterValue: 'MUJER'},
            }
        };
        let dash = new Dashboard('servidoresPublicos', false, undefined, secondChartConfig);
    </script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
    -->
  </body>
</html>