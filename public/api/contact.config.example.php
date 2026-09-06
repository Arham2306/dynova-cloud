<?php
/**
 * Dynova Cloud - Hostinger SMTP Configuration Example
 *
 * Copy this file to `contact.config.php` inside `public_html/api/` on your Hostinger server
 * and enter your Hostinger Email SMTP credentials.
 *
 * DO NOT commit the real `contact.config.php` to version control.
 */
return [
    // Hostinger SMTP Server Configuration
    'smtp_host'   => 'smtp.hostinger.com',
    'smtp_port'   => 465,                   // 465 for SSL, 587 for TLS
    'smtp_secure' => 'ssl',                 // 'ssl' or 'tls'
    'smtp_user'   => 'info@dynova.cloud',   // Your full Hostinger email address
    'smtp_pass'   => 'YOUR_EMAIL_PASSWORD', // Your Hostinger email account password

    // Mail Identity
    'from_email'  => 'info@dynova.cloud',
    'from_name'   => 'Dynova Cloud Intake',
    'to_email'    => 'info@dynova.cloud',
];
