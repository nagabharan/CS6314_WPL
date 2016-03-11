<?php

//sql connection credentials
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "test";

$birthYear = $_POST['inputYear'];

//array for storing results
$babyNames[] = array();

//create connection
$con = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());

//Query
$sql = "Select * from babynames where year='" . $birthYear . "'order by gender, ranking";

//Query Result
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        $babyNames[] = $row["name"];
    }
    
    echo json_encode($babyNames);
} else {
    echo "0 results";
}

mysqli_close($con);
?> 