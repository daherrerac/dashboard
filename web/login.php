<?php
  session_start();
 
  

  //datos DB
  $nombreServidor = "localhost";
  $nombreUsuario = "root";
  $passwordBaseDeDatos = "";
  $nombreBaseDeDatos = "usaid";

  // $nombreServidor = "localhost";
  // $nombreUsuario = "kugelele_usaid";
  // $passwordBaseDeDatos = "USA.202I";
  // $nombreBaseDeDatos = "kugelele_usaid";


  $conn = mysqli_connect($nombreServidor, $nombreUsuario, $passwordBaseDeDatos, $nombreBaseDeDatos)  or die ($conn);

  // Obtengo los datos cargados en el formulario de login.
  $email = mysqli_real_escape_string($conn,$_POST['email']);
  $password = mysqli_real_escape_string($conn,$_POST['password']);
  

   
 
  $sql = "SELECT * FROM usuarios WHERE email='$email' AND password ='$password';";
  error_log($sql);

  if ($result = mysqli_query($conn,$sql))
  {
    // Return the number of rows in result set
    $rowcount = mysqli_num_rows($result);
    error_log("Result set has %d rows: ".$rowcount);
    // Free result set
    mysqli_free_result($result);
  }else{
    $rowcount = 0;
  }
  
  

  // Esto se puede remplazar por un usuario real guardado en la base de datos.
  if($rowcount != 0){
    // Guardo en la sesión el email del usuario.
    $_SESSION['email'] = $email;
     
    // Redirecciono al usuario a la página principal del sitio.
    header("HTTP/1.1 302 Moved Temporarily"); 
    header("Location: dash1.php");    
  }else{
    // header("HTTP/1.1 302 Moved Temporarily"); 
    // header("Location: index.html");     
    echo'<script type="text/javascript">
      alert("Usuario no registrado o contraseña erronea" );
      window.location.href="index.html";
    </script>';
    
  }
 
?>