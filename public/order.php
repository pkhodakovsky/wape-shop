<?php
$to = 'pravdivyu@gmail.com,p.khodakovsky@gmail.com';

$subject = 'Заказ "royalvape.com.ua"';

$message = '<html><body>';
$message .= '<h1>' . htmlspecialchars($_POST['name']) . '</h1>';
$message .= '<h2>' . htmlspecialchars($_POST['phone']) . '</h2>';
$message .= '<h2>' . htmlspecialchars($_POST['address']) . '</h2>';
$message .= $_POST['order'];
$message .= '</body></html>';

$message = wordwrap($message, 70, "\r\n");

$headers = 'From: Order royalvape.com.ua' . '<order@royalvape.com.ua>' . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

mail($to, $subject, $message, $headers);
header('Location: http://royalvape.com.ua/#cart');
exit;
?>