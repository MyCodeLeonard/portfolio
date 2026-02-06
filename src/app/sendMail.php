<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"):
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $name = trim($params->name);
        $email = trim($params->email);
        $message = trim($params->massage);

        $recipient = 'contact@leonard-fritzmann.de';
        $subject = "Contact From <$email>";
        $mailMessage = "From: " . $name . "<br>" . nl2br(htmlspecialchars($message)) ;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        $headers[] = "From: $email";

        mail($recipient, $subject, $mailMessage, implode("\r\n", $headers));
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
} 