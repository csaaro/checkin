import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function QRScanner() {
  const [qrContent, setQrContent] = useState(''); // QR-Inhalt
  const [error, setError] = useState(''); // Fehleranzeige

  useEffect(() => {
    const qrScanner = new Html5Qrcode("reader");

    const startScanner = async () => {
      try {
        await qrScanner.start(
          { facingMode: "environment" }, // Kamera-Modus
          { fps: 10, qrbox: 250 },
          (decodedText) => {
            setQrContent(decodedText); // QR-Inhalt setzen
            qrScanner.stop(); // Scanner stoppen
          },
          (errorMessage) => {
            console.error(errorMessage); // Fehler in der Konsole
          }
        );
      } catch (err) {
        setError("QR-Code-Scanner konnte nicht gestartet werden.");
      }
    };

    startScanner();

    return () => qrScanner.stop(); // Aufräumen beim Verlassen
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        id="reader"
        style={{
          width: '300px',
          height: '300px',
          border: '2px dashed #0070f3',
          margin: '20px auto',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        Kamera wird geladen...
      </div>
      <div>
        {qrContent ? <p>QR-Inhalt: {qrContent}</p> : <p>Bitte scannen Sie einen QR-Code.</p>}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}