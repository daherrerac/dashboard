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
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js"></script>
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
                            fill: "#cccccc"
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
                    "path430": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path440": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path432": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path293": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path8": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path255": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path248": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path144": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
                    "path244": {
                        attrs: {
                            fill: "#767676"
                        }
                        , attrsHover: {
                            fill: "#022869"
                        }
                    },
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
                            <div class="box-buttons">
                                <a href="dash3.html" class="hblue">
                                    <img src="img/icono-03.svg" alt="" >
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
                                    Entorno Institucional Paz
                                </a>
                                <a href="#" class="blue-bg hblue">
                                    <img src="img/chat.png" alt="">
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
                    <div class="col-lg-9">
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
                    <div class="col-lg-3">
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
                                        <a href="#" id="btn1">De acuerdo y totalmente de acuerdo con que "Los hombres son la cabeza del hogar"</a>
                                    </li>
                                    <li>
                                        <a href="#" id="btn2">De acuerdo y totalmente de acuerdo con que "Cuando las mujeres dicenNo, quieren decir Sí"</a>
                                    </li>
                                    <li>
                                        <a href="#" id="trigger-qc">De acuerdo y totalmente de acuerdo: "A veces está bien que los hombres golpeen a sus parejas"</a>
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
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Hombres</h4>
                                    <!-- <div id="chart"></div>
                                    <div id="chartalt" style="display:none"></div> -->
                                    <canvas id="myChart" width="400" height="280" ></canvas>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="util-box blue-bg">
                                    <h4 class="py-2">Mujeres</h4>
                                    <div id="chart-2"></div>
                                    <canvas id="myChart2" width="400" height="280" ></canvas>
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
                        
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="util-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    
    <script>
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var data = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años', '40 a 44 años'],
            datasets: [{                
                data: [37.43, 30.78, 85.95, 95.97, 29.86, 50.96],
                backgroundColor: [
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF'
                ],
                borderColor: [
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF'
                ],
                color:'#ffffff',
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                display: false,
                color:'#ffffff'
            },
            borderRadius: 10,
            indexAxis: 'y',
            responsive:true,
            plugins: {
                title: {
                    display: true,
                    text: 'De acuerdo y totalmente de acuerdo con que "Los hombres son la cabeza del hogar"',
                    color:'#ffffff',
                    padding: {
                        top: 10,
                        bottom: 10,
                        left:50,
                        right:50
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 10
                    },
                    grid: {
                        display: false,
                        
                    },
                    
                },
                y:{
                    grid: {
                        display: false,                        
                    },
                }
                
            }
        }
    });
    var datab = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años', '40 a 44 años'],
            datasets: [{                
                data: [90.43, 30.78, 85.95, 5.97, 29.86, 50.96],
                backgroundColor: [
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF'
                ],
                borderColor: [
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF',
                    '#14DFFF'
                ],
                color:'#ffffff',
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                display: false,
                color:'#ffffff'
            },
            indexAxis: 'y',
            borderRadius: 10,
            responsive:true,
            plugins: {
                title: {
                    display: true,
                    text: 'De acuerdo y totalmente de acuerdo con que "Los hombres son la cabeza del hogar"',
                    color:'#ffffff',
                    padding: {
                        top: 10,
                        bottom: 10,
                        left:50,
                        right:50
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 10
                    },
                    grid: {
                        display: false,
                        
                    },
                    
                },
                y:{
                    grid: {
                        display: false,                        
                    },
                }
                
            }
        }
    });

    $("#btn1").on("click", function() {
        event.preventDefault();
        data.destroy();
        var data1 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años', '40 a 44 años'],
                datasets: [{                
                    data: [7.43, 3.78, 85.95, 95.97, 29.86, 5.96],
                    backgroundColor: [
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF'
                    ],
                    borderColor: [
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF'
                    ],
                    color:'#ffffff',
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false,
                    color:'#ffffff'
                },
                indexAxis: 'y',
                borderRadius: 10,
                responsive:true,
                plugins: {
                    title: {
                        display: true,
                        text: 'De acuerdo y totalmente de acuerdo con que "Los hombres son la cabeza del hogar"',
                        color:'#ffffff',
                        padding: {
                            top: 10,
                            bottom: 10,
                            left:50,
                            right:50
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            min: 0,
                            max: 100,
                            stepSize: 10
                        },
                        grid: {
                            display: false,
                            
                        },
                        
                    },
                    y:{
                        grid: {
                            display: false,                        
                        },
                    }
                    
                }
            }
        });

    });
    $("#btn2").on("click", function() {
        event.preventDefault();
        datab.destroy();
        var data2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['14 a 19 años', '20 a 24 años', '25 a 29 años', '30 a 34 años', '35 a 39 años', '40 a 44 años'],
                datasets: [{                
                    data: [70.43, 3.78, 85.95, 50.97, 29.86, 50.96],
                    backgroundColor: [
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF'
                    ],
                    borderColor: [
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF',
                        '#14DFFF'
                    ],
                    color:'#ffffff',
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false,
                    color:'#ffffff'
                },
                indexAxis: 'y',
                borderRadius: 10,
                responsive:true,
                plugins: {
                    title: {
                        display: true,
                        text: 'De acuerdo y totalmente de acuerdo con que "Los hombres son la cabeza del hogar"',
                        color:'#ffffff',
                        padding: {
                            top: 10,
                            bottom: 10,
                            left:50,
                            right:50
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            min: 0,
                            max: 100,
                            stepSize: 10
                        },
                        grid: {
                            display: false,
                            
                        },
                        
                    },
                    y:{
                        grid: {
                            display: false,                        
                        },
                    }
                    
                }
            }
        });
    });

   
    
    
</script>
    
    
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/mapa/col.js"></script>
    <script src="js/main.js"></script>
    
    

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" integrity="sha384-lpyLfhYuitXl2zRZ5Bn2fqnhNAKOAaM/0Kr9laMspuaMiZfGmfwRNFh8HlMy49eQ" crossorigin="anonymous"></script>
    -->
  </body>
</html>