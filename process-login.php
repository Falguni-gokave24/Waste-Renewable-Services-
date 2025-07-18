<?php
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "mydatabase";

$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='".$username."' AND password='".$password."'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    echo "Login successful!";
} else {
    echo "Invalid username or password!";
}

$conn->close();
?>
