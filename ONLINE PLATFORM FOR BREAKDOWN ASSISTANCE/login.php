<?php
require("connect.php");
$fname = $_POST['fname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$home = $_POST['home'];
$dob = $_POST['DOB'];
$sex = $_POST['sex'];
$plate = $_POST['plate'];
$nameofcar = $_POST['nameofcar'];
$payment = $_POST['payment'];
$nameofgarage = $_POST['nameofgarage'];
$categories = $_POST['categories'];
$password = $_POST['plate'];
if (isset($_POST['create'])) {
    if($categories === 'client'){

    $sgl = "INSERT INTO client(Name,Phone_number,Home_location,Date_of_birth,Plate,name_car,sex,Email) values('$fname','$phone','$home','$dob','$plate','$nameofcar','$sex','$email')";
    $result = mysqli_query($connect,$sgl);
    header("location:clientdashboard.html");
    }
    else {
        $sgl = "INSERT INTO mechanic(Name,Phone_number,Home_location,Date_of_birth,Name_of_garage,Payment_account,sex,Email) values('$fname','$phone','$home','$dob','$nameofgarage','$payment','$sex','$email')";
        $result = mysqli_query($connect,$sgl);
        header("location:mechanicdashboard.html");
    
    }
}




?>