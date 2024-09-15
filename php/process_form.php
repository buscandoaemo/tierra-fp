<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email configuration
    $to = 'your-email@example.com'; // Replace with your email address
    $subject = 'New contact message: ' . $subject;
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n"; // To use HTML in the email

    // Email body in HTML format
    $mailBody = "
    <html>
    <head>
        <title>New contact message</title>
    </head>
    <body>
        <h2>New contact message:</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    </body>
    </html>
    ";

    // Send email
    if (mail($to, $subject, $mailBody, $headers)) {
        // Display success message
        echo '<div id="form-container" class="row mb-2">
                <div class="col">
                    <p class="alert alert-success">The message has been sent successfully. Thank you for contacting us!</p>
                </div>
              </div>';
    } else {
        // Display error message
        echo '<div id="form-container" class="row mb-2">
                <div class="col">
                    <p class="alert alert-danger">There was an error sending your message. Please try again later.</p>
                </div>
              </div>';
    }
} else {
    echo '<div class="alert alert-danger">Unauthorized access</div>';
}
?>
