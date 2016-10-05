<?php
    if (isset($_POST["submit"])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $human = intval($_POST['human']);
        $from = 'Birchwood Estates West Contact Form'; 
        $to = 'jmarie9345@gmail.com'; 
        $subject = 'Message from Birchwood Estates West Contact Form ';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";

            if ($human !== 5) {
            $errHuman = 'Your anti-spam is incorrect';
            }

            if (!$errHuman) {
                if (mail ($to, $subject, $body, $from)) {
                    $result='<div class="alert alert-success">Thank You! I will be in touch</div>';
                } 
                    else {
                    $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
                    }
            }

    }



