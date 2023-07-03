<?php
if (isset($_POST['nickname'])) {
    $nickname = $_POST['nickname'];
    $instagramUrl = "https://www.instagram.com/$nickname/";
	echo $instagramUrl;
	echo urlencode($instagramUrl);
    
}
?>
