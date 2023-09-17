<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>
</title>
</head>
<body>

<form action="site.php" method="get"><br>
color:<br><input type="text" name="color"><br>
plular noun:<br><input type="text" name="pluraln"><br>
celebrilty:<br><input type="text" name="celebrity"><br>
<input type="submit"><br>
</form>
<?php  
$a=$_GET["color"];
$b=$_GET["pluraln"];
$c=$_GET["celebrity"];
echo "rose is $a";
echo "$b are blue";
echo"i love $c";

?>


</body> 
    </html>