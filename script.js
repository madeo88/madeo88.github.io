function generateQRCode() {
    var nickname = document.getElementById('nickname').value;
    var instagramUrl = "https://www.instagram.com/" + nickname + "/";
    var qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = '';

    var qrCode = new QRCode(qrCodeContainer, {
        text: instagramUrl,
        width: 200,
        height: 200
    });
}
