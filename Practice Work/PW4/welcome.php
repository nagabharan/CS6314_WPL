<?php
session_start();
	
$uname = $_COOKIE['uName'];
$power_animal	= $_COOKIE['panimal'] ;
$fname	= $_COOKIE['fName'];
$email	= $_COOKIE['emailID'];
$count = $_COOKIE['count'];
	
echo "<h2>Hi ".$fname."!</h2>";

echo "<h2>Total Number of visits ".$count."</h2>";
echo "<h2>Email is ".$email." </h2>";
echo "<h2>Username is ".$uname." </h2>";
echo "<h2>Power animal is </h2>";

echo "<img src='".$power_animal."' alt='Power Animal View' style='width:300px;height:300px;'>";

?>


<!DOCTYPE html>
<html>
<body>

</body>
</html>