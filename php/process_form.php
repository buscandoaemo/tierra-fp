<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Configure the email
    $to = 'buscandoaemo@gmail.com'; // Replace with your email address info@tierra-fp.com
    $subject = 'New contact message: ' . $subject;
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n"; // Allows HTML format in the email

    // Create the email body in HTML format
    $mailBody = "
    <html>
    <head>
        <title>New contact message</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { width: 80%; margin: auto; }
            .header { background: #f2f2f2; padding: 10px; border-bottom: 2px solid #ddd; }
            .content { padding: 20px; }
            .footer { background: #f2f2f2; padding: 10px; border-top: 2px solid #ddd; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New contact message:</h2>
            </div>
            <div class='content'>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Subject:</strong> $subject</p>
                <p><strong>Message:</strong></p>
                <p>$message</p>
            </div>
            <div class='footer'>
                <p>This message was sent from the contact form on your website.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Send the email
    if (mail($to, $subject, $mailBody, $headers)) {
        echo "The message has been sent successfully.";
    } else {
        echo "There was an error sending the message.";
    }
}
?>
