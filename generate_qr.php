<?php
if (isset($_GET['nickname'])) {
    $nickname = $_GET['nickname'];
    $instagramUrl = "https://www.instagram.com/$nickname/";
    $qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" . urlencode($instagramUrl) . "&size=200x200";
    echo '<img src="' . $qrCodeUrl . '">';
}
?>
