<?php
	$servername = "localhost";
	$username = " root@localhost";
	$password = "";
	$dbname = "mydatabase";
	
	// Create connection
	$conn = new mysqli("localhost" ,"root@localhost", "", "mydatabase");
	
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	// Get username and password from form
	$user = $_POST["username"];
	$pass = $_POST["password"];
	
	// Check if username and password are valid
	$sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		// Successful login
		echo "Welcome, $user!";
	} else {
		// Failed login
		echo "Invalid username or password.";
	}
	
	$conn->close();
?>
