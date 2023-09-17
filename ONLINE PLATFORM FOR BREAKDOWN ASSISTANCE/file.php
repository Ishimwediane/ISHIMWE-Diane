<?php
 $name=$_post['name'];
 $email=$_post['email'];
 $phone=$_post['phone'];
 $home=$_post['home'];
 $conn= new  mysqli('localhost','root',',mnbvcxz ','account');
if($conn->connect_error){
    die('connection failed :'.$conn->connect_error);

}
else{
    $stmt=$conn->prepare("insert into registration(email,password) values(?,?)");
    $stmt->bind_param("ss",$email,$password);
    $stmt->execute();
    echo "registration succeddfully...";
    $stmt->close();
    $conn->close();
}
 ?>