<html>
<body>
<?php
	$uname = $_POST["username"];
	$fname = $_POST["fullname"];
	$email = $_POST["email"];
	
	if($uname!=''&& $fname!=''&& $email !='') {
		$username = root;
		$password = "";

		$db = new PDO("mysql:host=localhost;dbname=test", $username, $password);
		$stmt = $db->query("select * from users where username='".$uname."'") or die(mysql_error());
		$result = $stmt->fetch();

		if($result){
			setcookie('uName',$uname);
			setcookie('fName', $result['fullname']);
			setcookie('emailID', $result['email']);
			
			$panimal = $result['power_animal'];
			setcookie('panimal',$panimal);
			setcookie('count',1);
			
			if (!isset($_COOKIE['count']))
			{
				echo 'Thank you for visiting our page first time!'; 

				$cookie = 1;
				setcookie("count", $cookie);
			}
			else
			{
				$cookie = ++$_COOKIE['count'];
				setcookie("count", $cookie);

		}	
		header('location: welcome.php');
	}
	else {
		echo "Please Log In First";
		echo "<script>setTimeout(\"location.href = 'login.html';\",2500);</script>";
	}
}
else {
	echo'Please enter all the details';
	echo "<script>setTimeout(\"location.href = 'login.html';\",2500);</script>";
}

$db = NULL;

?>
</body>
</html>