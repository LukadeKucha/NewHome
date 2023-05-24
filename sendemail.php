<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject = $_POST['sub'];
  $message = $_POST['message'];

  // Construct the email headers and body
  $to = 'lukakuchaidze@gmail.com'; // Replace with the email account you created in Vesta
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\n\n$message";

  // Send the email
  $result = mail($to, $subject, $body, $headers);

  if ($result) {
    echo 'Email sent successfully.';
  } else {
    echo 'Error sending email.';
  }
}
?>
