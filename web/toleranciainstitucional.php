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
    <link rel="icon" type="image/vnd.microsoft.icon" href="img/favicon.ico">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>


    <title>Tolerancia Institucional</title>
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
                                La Tolerancia Social e Institucional a las Violencias contra las Mujeres
                            </h2>

                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                  <h2 class="accordion-header" id="flush-headingOne">                                    
                                    <div class="menu-selector">
                                        <a href="toleranciasocial.php">
                                            <img src="img/icono-03.svg" alt="">
                                            Encuesta Tolerancia Social
                                        </a>
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">                                                
                                        </button>
                                    </div>
                                  </h2>
                                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        
                                        <div class="box-message" >
                                            <ul>
                                                <li>
                                                    <a href="experienciaalaviolencia.php" style="font-weight: 600; text-shadow: 2px 2px 2px black;color:#ffffff">
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
                                <a href="toleranciainstitucional.php" class="hblue activo">
                                    <img src="img/icono-02.svg" alt="">
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
                                <a href="entornopaz.php" class="hred">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional Paz
                                </a>
                                <a href="entornomujeres.php" class="hred">
                                    <img src="img/icono-05.svg" alt="">
                                    Entorno Institucional Mujeres
                                </a>
                                <a href="entornolgbti.php" class="hred">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional LGBTI
                                </a>
                                <a href="#exampleModal2" class="hred" data-bs-toggle="modal" data-bs-target="#exampleModal2">
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
                        <div class="col-12">
                            <div class="hb-menu">
                                <svg viewBox="0 0 100 80" width="30" height="30">
                                    <rect width="100" height="15" rx="8"></rect>
                                    <rect y="30" width="100" height="15" rx="8"></rect>
                                    <rect y="60" width="100" height="15" rx="8"></rect>
                                </svg>
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
                                <div class="menu-selector">
                                    <a href="toleranciasocial.php">
                                        <img src="img/icono-03.svg" alt="">
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
                                                <a href="experienciaalaviolencia.php" class="activo">
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
                            <a href="toleranciainstitucional.php" class="hblue activo">
                                <img src="img/icono-02.svg" alt="" >
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
                            <a href="entornopaz.php" class="hred">
                                <img src="img/icono-05.svg" alt="">    
                                Entorno Institucional Paz
                            </a>
                            <a href="entornomujeres.php" class="hred">
                                <img src="img/icono-05.svg" alt="">
                                Entorno Institucional Mujeres
                            </a>
                            <a href="entornolgbti.php" class="hred">
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
                                ENCUESTA DE TOLERANCIA SOCIAL E INSTITUCIONAL A LAS VIOLENCIAS CONTRA LAS MUJERES
                            </h1>
                            <div class="linea"></div>
                            <h2>
                                En el segundo semestre de 2020, USAID/Colombia realizó la medición de la Tolerancia Social e Institucional a las Violencias contra las Mujeres 
                                en 14 regiones PDET y 2 ciudades capitales: Cali y Quibdó
                            </h2>
                        </div>
                    </div>
                </div>                
                <div class="row">
                <div class="col-xxl-10 col-xl-9 col-md-12 d-none d-md-block">
                        <div class="blue-info">
                            <div class="row">
                                <div class="col-lg-5 col-md-4 col-sm-12">
                                    <div class="info-box init">
                                        <div class="row">
                                            <div class="col-3">
                                                <div class="pin">
                                                    <img src="img/manito-01.svg" alt="" class=img-fluid>
                                                </div>
                                            </div>
                                            <div class="col-9">
                                                <p>Agentes de cambio frente a las 
                                                    Violencias contra las Mujeres
                                                 </p>
                                                 <div class="numero agente1">
                                                    48.3%
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-12">
                                    <div class="info-box middle">
                                        <div class="row">
                                            <div class="col-3">
                                            <div class="pin">
                                                    <img src="img/manito-01.svg" alt="" class=img-fluid>
                                                </div>
                                            </div>
                                            <div class="col-9">
                                                <p>En ruta de cambio
                                                 </p>
                                                 <div class="numero agente2">
                                                    20.8%
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="info-box">
                                        <div class="row">
                                            <div class="col-3">
                                            <div class="pin">
                                                <img src="img/manito-01.svg" alt="" class=img-fluid>
                                                </div>
                                            </div>
                                            <div class="col-9 last">
                                                <p>Tolerantes a las Violencias
                                                 </p>
                                                 <div class="numero agente3">
                                                    30.9%
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
                                <a href="fichas/La Tolerancia Social e Institucional a las Violencias contra las Mujeres.pdf" target="_blank" class="hblue">
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
                    <div class="col-xl-12">
                        <div class="util-box">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="mapa">
                                        <p class="mt-4">Seleccione el filtro de la pregunta</p>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12">
                                    <div class="preg custom-select ext">
                                        <select id="filtro">
                                            <option>GRUPO DE PREGUNTA</option>                                                                                 
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
                    <div class="col-lg-12">
                        <div class="util-box blue-bg hg">
                            <h4 class="text-center py-2 border-aux">Mujeres</h4>
                            <div id="chart-2"></div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="util-box blue-bg hg">
                            <h4 class="text-center py-2 border-aux">Hombres</h4>
                            <div id="chart"></div>
                        </div>
                    </div>
                </div>
                <div class="py-5"></div>
            </div>
        </div>
    </div>

     <!-- Modal -->
     <div class="ficha">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">            
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <img src="fichas/Fichas Tecnicas-01.jpg" alt="" class="img-fluid">
                    </div>
                
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="ficha">
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">            
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <img src="fichas/Fichas Tecnicas-02.jpg" alt="" class="img-fluid">
                    </div>
                
                </div>
            </div>
            </div>
        </div>
    </div>
    
    <div class="video">
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">            
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body">
                    <video controls>
                        <source src="fichas/video.mp4" type="video/mp4">                        
                        Your browser does not support the video tag.
                    </video>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
    
    
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/papaparse.min.js"></script>
    <script src="js/charts-config2.js"></script>
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