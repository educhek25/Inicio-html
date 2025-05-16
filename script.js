function startQRScanner() {
  const qrReader = document.getElementById("qr-reader");
  qrReader.style.display = "block";

  const html5QrCode = new Html5Qrcode("qr-reader");

  html5QrCode.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250
    },
    qrCodeMessage => {
      console.log("Código QR detectado:", qrCodeMessage);
      alert("Código QR detectado: " + qrCodeMessage);

      html5QrCode.stop().then(() => {
        qrReader.style.display = "none";
      });
    },
    errorMessage => {
      console.warn("Error escaneando:", errorMessage);
    }
  ).catch(err => {
    console.error("No se pudo iniciar el escaneo:", err);
    alert("Error iniciando la cámara. Asegúrate de dar permisos.");
  });
}
