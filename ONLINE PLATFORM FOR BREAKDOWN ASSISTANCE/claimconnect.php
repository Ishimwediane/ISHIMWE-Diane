<?php
require("connect.php");
$fname= $_POST['fname'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$location= $_POST['location'];
$plate= $_POST['plate'];
$message= $_POST['message'];
$insurance= $_POST['insurance'];
if (isset($_POST['create'])) {
   

    $sgl = "INSERT INTO claim(Name,Email,Phone,Home,Plate,Insurance,description) values('$fname','$email','$phone','$location','$plate','$insurance','$message')";
    $result = mysqli_query($connect,$sgl);
    header("location:clientdashboard.html");
}




?>