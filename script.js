var qrCodes = [];

function generateQRCode(event) {
    event.preventDefault();

    var nickname = document.getElementById('nickname').value;
    var instagramUrl = "https://www.instagram.com/" + nickname + "/";
    var qrCodeTable = document.getElementById('qrCodeTable');
    var qrCodeRow = document.createElement('tr');
    var qrCodeCell = document.createElement('td');
    var qrCodeContainer = document.createElement('div');

    var qrCode = new QRCode(qrCodeContainer, {
        text: instagramUrl,
        width: 200,
        height: 200
    });

    qrCodeContainer.className = 'qrCodeContainer';
    qrCodeCell.appendChild(qrCodeContainer);
    qrCodeRow.appendChild(qrCodeCell);
    qrCodeTable.appendChild(qrCodeRow);

    qrCodes.push(qrCodeContainer);
    positionQRCodeContainers();

    var qrCodeLink = document.createElement('a');
    qrCodeLink.href = instagramUrl;
    qrCodeLink.target = "_blank";
    qrCodeLink.innerHTML = "Apri profilo Instagram";

    qrCodeContainer.appendChild(qrCodeLink);
}

function positionQRCodeContainers() {
    for (var i = 0; i < qrCodes.length; i++) {
        var qrCodeContainer = qrCodes[i];
        qrCodeContainer.style.top = (i * 210) + "px";
        qrCodeContainer.style.left = (i * 210) + "px";
    }
}
