<?php

ini_set('display errors', 1);
error_reporting(E_ALL);

$from = "test@hostinger-submissions.com";
$to = "dillonrdipetrillo@gmail.com";

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$headers = "From:" . $from;
$body = "";

$body .= "From: ".$name. "\r\n";
$body .= "Email: ".$email. "\r\n";
$body .= "Subject: ".$subject. "\r\n";

mail($to,$body,$message,$headers);

header('Location: https://dillondipetrillo.com/#contact');

?>