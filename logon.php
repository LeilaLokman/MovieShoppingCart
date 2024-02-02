<?php

$EMAIL_ID = 745056150; // 9-digit integer value 

require_once '/home/common/php/dbInterface.php'; // Add database functionality
require_once '/home/common/php/mail.php'; // Add email functionality
require_once '/home/common/php/p4Functions.php'; // Add Project 4 base functions

processPageRequest(); // Call the processPageRequest() function

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

function authenticateUser($username, $password) 
{
	$userData = validateUser($username, $password);
	if ($userData !== NULL) {
        session_start(); 

        $_SESSION["userId"] = $userData["ID"];
        $_SESSION["displayName"] = $userData["DisplayName"];
        $_SESSION["emailAddress"] = $userData["Email"];

        return true;
    } else {
        
        return false;
    }
}

function displayLoginForm($message = "")
{
	require_once './templates/logon_form.html';
}

function processPageRequest()
{
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE BELOW THIS LINE
	if(session_status() == PHP_SESSION_ACTIVE)
	{
		session_destroy();
	}
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE
	
	if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST)) {
        // Test whether the $_POST['action'] variable is set
        if (isset($_POST['action'])) {
            $action = $_POST['action'];

            if ($action == 'login') {
                
                $username = $_POST['username']; 
                $password = $_POST['password']; 

                $authenticated = authenticateUser($username, $password);
                if ($authenticated) {
                    header('Location: index.php');
                    exit();
                } else {
                    $errorMessage = "Invalid username or password.";
                    displayLoginForm($errorMessage);
                }
            }
        }
    } else {
        displayLoginForm();
    }
}

?>
