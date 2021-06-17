<?php
  session_start();
   
  // Controlo si el usuario ya está logueado en el sistema.
  if(isset($_SESSION['email'])){    
    
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js" charset="utf-8"></script>   
    <script src="js/jquery.mapael.min.js"></script>
    <script src="js/papaparse.min.js"></script>
    <script src="js/mapahandler-red.js"></script>    
    

    

    <title>Entorno LGBTI</title>
    <style>
        .mapael .mapTooltip {
            color:#C2113B;
        }
    </style>
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
                                <a href="toleranciainstitucional.php" class="hblue">                                    
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
                                <a href="entornopaz.php" class="hred">
                                    <img src="img/icono-05.svg" alt="">    
                                    Entorno Institucional Paz
                                </a>
                                <a href="entornomujeres.php" class="hred">
                                    <img src="img/icono-05.svg" alt="">
                                    Entorno Institucional Mujeres
                                </a>
                                <a href="entornolgbti.php" class="hred activo-red">
                                    <img src="img/icono-05-w.png" alt="">    
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
                            <a href="toleranciainstitucional.php" class="hblue">
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
                        <div class="box-title red">
                            <h1>
                                Estudio de entorno institucional habilitante para el empoderamiento de género en Colombia 
                            </h1>
                            <div class="linea"></div>
                            <h2>
                                En el segundo semestre de 2020, USAID/Colombia realizó el estudio Retos del Entorno 
                                Institucional para el Empoderamiento de Género en Colombia en 65 municipios PDET y tres ciudades capitales: Cali, Quibdó y Cartagena.
                            </h2>
                        </div>
                    </div>
                </div>                
                <div class="row">
                    <div class="col-xxl-10 col-xl-9 col-md-12">
                        <div class="blue-info red-bg">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="info-box">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="pin">
                                                    <img src="img/pin.png" alt="" class=img-fluid>
                                                </div>
                                            </div>
                                            <div class="col-8">
                                                <p>
                                                    Municipios que cuentan con mecanismos de víctimas o paz
                                                 </p>
                                                 <div class="numero agente1">
                                                    21
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="info-box">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="pin">
                                                    <img src="img/pin.png" alt="" class=img-fluid>
                                                </div>
                                            </div>
                                            <div class="col-8">
                                                <p>
                                                    Municipios que cuentan con mecanismos de genero
                                                 </p>
                                                 <div class="numero agente2">
                                                    19
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="info-box">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="pin">
                                                    <img src="img/pin.png" alt="" class=img-fluid>
                                                </div>
                                            </div>
                                            <div class="col-8 last">
                                                <p>
                                                    Municipios en los que se plantea la formulación de política para los sectores LGBTI
                                                 </p>
                                                 <div class="numero agente3">
                                                    17
                                                 </div>
                                            </div>                                                                    
                                        </div>
                                    </div>
                                </div>
                            </div>                                                       
                        </div>
                    </div>
                    <div class="col-xxl-2 col-xl-3 col-md-12">
                        <div class="adicional red-bg">
                            <p>MATERIAL ADICIONAL</p>
                            <div class="box-buttons">
                                <a href="fichas/Retos del entorno institucional para el empoderamiento de genero en Colombia.pdf" class="hred" target="_blank">
                                    <img src="img/down-red.png" alt="">
                                    <span>|</span>
                                    VER INFOGRAFÍA
                                </a>
                                <a href="#exampleModal3" class="hred" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                    <img src="img/play-red.png" alt="">
                                    <span>|</span>
                                    VER VIDEO
                                </a>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-5">
                        <div class="util-box adp-hg2">
                            <div class="mapa">
                                <h4 class="red">Municipios donde se llevó a cabo el estudio</h4>
                                <p>Seleccione en el mapa el municipio que sesee consultar</p>
                                <div class="mapcontainer">
                                    <div class="map red">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="util-box">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mapa">
                                        <p class="mt-4">Seleccione región y municipio</p>
                                    </div>                                    
                                </div>
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="region custom-select extr">
                                                <select id="regionA">
                                                    <option>REGIÓN</option>
                                                    <option value="1">Chocó</option>                                             
                                                </select>
                                            </div> 
                                        </div>
                                        <div class="col-6">
                                            <div class="municipio custom-select extr">
                                                <select id="municipioA">
                                                    <option>MUNICIPIO</option>
                                                    <option value="1">Anorí</option>                                             
                                                </select>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="util-box" style="max-height: 465px;height: 100%;">                           
                            <div class="mapa">
                                <h4 class="red">
                                    PREGUNTAS
                                </h4>
                                <p>
                                    Seleccione una pregunta del estudio para ver los resultados.
                                </p>                                
                            </div>
                            <div class="respuestas">
                                                                    
                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se incluyen datos cualitativos sobre la situación de los sectores sociales LGBT? 
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        SI
                                    </div>
                                </div>   
                                
                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se incluyen datos cuantitativos sobre la situación de los sectores sociales LGBT? 
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO
                                    </div>
                                </div> 

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se  mencionan las personas de los Sectores Sociales LGBTI como participantes en la formulación del plan ? 
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO APLICA
                                    </div>
                                </div> 

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se planea formulación de política?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO
                                    </div>
                                </div> 

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se plantea implementación de política?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        SI
                                    </div>
                                </div> 
                                                                                                                                
                                
                            </div>                                                       
                        </div>                        
                    </div>
                </div>

                <div class="py-3"></div>

                <div class="row">
                    <div class="col-12">
                        <div class="blue-info red-bg comparacion">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mapa">
                                        <h4 class="mt-5">COMPARACION ENTRE MUNICIPIOS</h4>
                                        <p>Planeación y gestión de políticas en planes de desarrollo.</p>                                        
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mapa">                                        
                                        <p class="mt-4 text-center">Seleccione dos municipios para hacer un comparativo</p>                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="region custom-select extr">
                                                <select id="region1">
                                                    <option>REGIÓN</option>
                                                    <option value="1">Chocó</option>                                             
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="region custom-select extr">
                                                <select id="region2">
                                                    <option>REGIÓN</option>
                                                    <option value="1">Putumayo</option>                                             
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="municipio custom-select extr">
                                                <select id="municipio1">
                                                    <option>MUNICIPIO</option>
                                                    <option value="1">Anorí</option>                                             
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="municipio custom-select extr">
                                                <select id="municipio2">
                                                    <option>MUNICIPIO</option>
                                                    <option value="1">Mesetas</option>                                             
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="util-box">
                            <div class="compare respuestas full">

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Hay vinculación de los programas de gobierno construcción de paz y la implementación del AF con enfoque de género?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        SI
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        SI
                                    </div>
                                </div>

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Hay presencia de politicas públicas para las victimas del conflicto armado?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        NO
                                    </div>
                                </div>

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se planea formulación de política públicas en el tema?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        SI
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        SI
                                    </div>
                                </div>

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se plantea implementación de política?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        NO
                                    </div>
                                </div>

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se planean ambas?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO APLICA
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        NO APLICA
                                    </div>
                                </div>

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Cuentan con mecanismos de victimas o paz?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        SI
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        SI
                                    </div>
                                </div>
                                        
                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se busca implementar?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        NO
                                    </div>
                                </div>
    
                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se nombran los consejos territoriales de paz o los consejos municipales de paz?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        SI
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        SI
                                    </div>
                                </div>
                                 

                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        ¿Se planea la creación o implementación de los consejos territoriales de paz?
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        NO
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        NO
                                    </div>
                                </div>
                                    
    
    
                                <div class="fila-cajon">
                                    <div class="cajon ask">
                                        Inclusión del enfoque de género en el ambito de la implementación de los AF
                                    </div>                                    
                                    <div class="cajon white"></div>
                                    <div class="cajon ans">
                                        SI
                                    </div>
                                    <div class="cajon white"></div>
                                    <div class="cajon ans2">
                                        SI
                                    </div>
                                </div>
                                    
                            </div>
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
    <script src="js/mapa/municipios.js"></script>
    <script src="js/mainrojos.js"></script>
    <script>
    // iniciar dashboard
        // iniciar funciones y carga de datos
        
        let dash = new Dashboard('entornoInstitucionalLGBTI');
    </script>
    
    

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
    -->
  </body>
</html>