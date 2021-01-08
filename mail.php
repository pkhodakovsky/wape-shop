<?php
$to = 'pravdivyu@gmail.com';
$subject = 'Стать партнером "royalvape.com.ua"';
$message = htmlspecialchars($_POST['message']);
$headers = 'From: ' . htmlspecialchars($_POST['name']) .
    '<' . htmlspecialchars($_POST['email']) . '>' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
header('Location: http://royalvape.com.ua');
exit;
?>