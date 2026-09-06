<?php
/**
 * Dynova Cloud — Authoritative Contact Form Mailer
 * Handles form submissions using PHPMailer over authenticated Hostinger SMTP.
 * Direct web requests are strictly limited to POST and OPTIONS (same-origin).
 */

header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");

// String length helper with mb_strlen fallback
function safe_strlen(string $value): int {
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

// Handle preflight if applicable
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Reject any HTTP method other than POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

// Validate Content-Type (accepts application/json with or without charset)
$contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') === false) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Content-Type must be application/json"]);
    exit;
}

// Read raw JSON input
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);

if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit;
}

// Honeypot check: silently accept and discard bot submissions
if (!empty($input['_hp_check'])) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Inquiry received successfully"]);
    exit;
}

// 1. Read raw field strings before sanitization
$rawFullName = (string)($input['fullName'] ?? '');
$rawEmail    = (string)($input['email'] ?? '');
$rawPhone    = (string)($input['phone'] ?? 'Not provided');
$rawService  = (string)($input['service'] ?? 'General Inquiry');
$rawMessage  = (string)($input['message'] ?? '');

// 2. Validate header-injection characters BEFORE sanitizing input
if (preg_match('/[\r\n]/', $rawFullName . $rawEmail . $rawPhone . $rawService)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid input."]);
    exit;
}

// 3. Sanitize inputs
$fullName = trim(strip_tags($rawFullName));
$email    = trim(filter_var($rawEmail, FILTER_SANITIZE_EMAIL));
$phone    = trim(strip_tags($rawPhone));
$service  = trim(strip_tags($rawService));
$message  = trim($rawMessage);

// Validate required fields
if ($fullName === '' || $email === '' || $service === '' || $message === '') {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields"]);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please enter a valid email address"]);
    exit;
}

// Server-side length limits using safe_strlen()
if (safe_strlen($fullName) > 100 || safe_strlen($email) > 120 || safe_strlen($service) > 100 || safe_strlen($phone) > 50) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "One or more fields exceed maximum allowed length"]);
    exit;
}

if (safe_strlen($message) < 8 || safe_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Project brief must be between 8 and 5000 characters"]);
    exit;
}

// Verify PHPMailer dependencies and configuration exist
$autoloadPath = __DIR__ . '/vendor/autoload.php';
$configPath   = __DIR__ . '/contact.config.php';

if (!file_exists($autoloadPath)) {
    error_log("Dynova Contact API: PHPMailer autoloader missing at " . $autoloadPath);
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Unable to send inquiry right now"]);
    exit;
}

if (!file_exists($configPath)) {
    error_log("Dynova Contact API: contact.config.php missing. Create it from contact.config.example.php");
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Unable to send inquiry right now"]);
    exit;
}

$config = require $configPath;
if (!is_array($config) || empty($config['smtp_user']) || empty($config['smtp_pass'])) {
    error_log("Dynova Contact API: Invalid or incomplete SMTP configuration in contact.config.php");
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Unable to send inquiry right now"]);
    exit;
}

require $autoloadPath;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Authenticated Hostinger SMTP
    $mail->isSMTP();
    $mail->Host       = (string)($config['smtp_host'] ?? 'smtp.hostinger.com');
    $mail->SMTPAuth   = true;
    $mail->Username   = (string)$config['smtp_user'];
    $mail->Password   = (string)$config['smtp_pass'];
    
    $secureMode = strtolower((string)($config['smtp_secure'] ?? 'ssl'));
    if ($secureMode === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($secureMode === 'tls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    }
    
    $mail->Port    = (int)($config['smtp_port'] ?? 465);
    $mail->CharSet = 'UTF-8';
    $mail->Timeout = 10;

    // Sender & Recipient Identity
    $fromEmail = (string)($config['from_email'] ?? $config['smtp_user']);
    $fromName  = (string)($config['from_name'] ?? 'Dynova Cloud Intake');
    $toEmail   = (string)($config['to_email'] ?? 'info@dynova.cloud');

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, $fullName);

    // Subject
    $mail->Subject = "New Lead Blueprint: " . $fullName . " (" . $service . ")";

    // HTML Email Template
    $safeName    = htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8');
    $safeEmail   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safePhone   = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $safeService = htmlspecialchars($service, ENT_QUOTES, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
    $timestamp   = gmdate("Y-m-d H:i:s") . " UTC";

    $mail->isHTML(true);
    $mail->Body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #000814; margin: 0; padding: 24px; color: #F5F7FA; }
        .container { max-width: 600px; margin: 0 auto; background: #001226; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); }
        .header { background: #000814; padding: 28px; text-align: center; border-bottom: 2px solid #FFC300; }
        .header h1 { color: #FFC300; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
        .header p { color: #AAB4C3; margin: 6px 0 0 0; font-size: 13px; }
        .content { padding: 28px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 11px; color: #FFC300; text-transform: uppercase; font-weight: 700; letter-spacing: 0.08em; margin-bottom: 6px; }
        .value { font-size: 15px; color: #F5F7FA; background: rgba(0, 29, 61, 0.4); padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.08); }
        .value a { color: #FFD60A; text-decoration: none; }
        .footer { background: #000814; padding: 16px; text-align: center; font-size: 12px; color: #708096; border-top: 1px solid rgba(255, 255, 255, 0.06); }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Dynova Cloud</h1>
            <p>New Inbound Project Blueprint</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Client Name</div>
                <div class='value'>{$safeName}</div>
            </div>
            <div class='field'>
                <div class='label'>Work Email</div>
                <div class='value'><a href='mailto:{$safeEmail}'>{$safeEmail}</a></div>
            </div>
            <div class='field'>
                <div class='label'>Phone Number</div>
                <div class='value'>{$safePhone}</div>
            </div>
            <div class='field'>
                <div class='label'>Selected Capability</div>
                <div class='value'><strong>{$safeService}</strong></div>
            </div>
            <div class='field'>
                <div class='label'>Project Brief / Requirements</div>
                <div class='value'>{$safeMessage}</div>
            </div>
        </div>
        <div class='footer'>
            Received via Dynova Cloud Intake System &bull; {$timestamp}
        </div>
    </div>
</body>
</html>";

    // Plain text alternative
    $mail->AltBody = "Dynova Cloud - Inbound Lead Blueprint\n\n"
        . "Client Name: " . $fullName . "\n"
        . "Work Email: " . $email . "\n"
        . "Phone Number: " . $phone . "\n"
        . "Selected Capability: " . $service . "\n\n"
        . "Project Brief:\n" . $message . "\n\n"
        . "Received: " . $timestamp;

    $mail->send();

    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Inquiry received successfully"]);
} catch (Exception $e) {
    error_log("Dynova PHPMailer Exception: " . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Unable to send inquiry right now"]);
}
