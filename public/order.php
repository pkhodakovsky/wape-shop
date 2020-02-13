<?php
$to = 'pravdivyu@gmail.com,p.khodakovsky@gmail.com';
$subject = 'Заказ "royalvape.com.ua"';
$message = htmlspecialchars($_POST['name']) . "\r\n" .
    htmlspecialchars($_POST['phone']) . "\r\n" .
    htmlspecialchars($_POST['address']) . "\r\n" .
    htmlspecialchars($_POST['order']);
$headers = 'From: ' . 'Order royalvape.com.ua' .
    '<' . 'order@royalvape.com.ua' . '>' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
header('Location: http://royalvape.com.ua/v2/#cart');
exit;
?>