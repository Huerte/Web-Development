<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipientEmail = $_POST['recipientEmail'];
    $yourEmail = $_POST['yourEmail'];
    $message = $_POST['message'];

    $to = $recipientEmail;
    $subject = "New Message from Contact Form";
    $body = "Sender Email: $yourEmail\nMessage: $message";
    $headers = "From: $yourEmail";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
