// Simple converter - real BTC price would be fetched
let btcPrice = 95000; // approx EUR per BTC, update as needed

const satsPerEuro = Math.round(100000000 / btcPrice);

function generateLink() {
    const euro = parseFloat(document.getElementById('euro').value);
    if (!euro || euro <= 0) {
        alert('Ingresa una cantidad válida');
        return;
    }
    const sats = Math.round(euro * satsPerEuro);
    const fakeInvoice = `lnbc${sats.toString()}...`;
    const paymentLink = `lightning:${fakeInvoice}`;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Enlace para ${euro}€ (${sats} sats)</h2>
        <p><a href="${paymentLink}" target="_blank">Abrir en Wallet Lightning</a></p>
        <p>Copia el invoice: ${fakeInvoice}</p>
        <canvas id="qr"></canvas>
    `;

    // Simple QR using canvas or include qrcode lib
    generateQR(paymentLink);
}

function generateQR(text) {
    const canvas = document.getElementById('qr');
    // Placeholder QR logic - in real use qrcode.js
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText('QR para LN', 50, 130);
    // For production, add <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
}