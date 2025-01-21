import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import { useScanContext } from '../context/ScanContext';

export default function QRScanner() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setScanData } = useScanContext(); // Zugriff auf den Kontext

  const successScan = async (decodedText) => {
    setLoading(true);
    try {
      setScanData(decodedText);
      navigate('/checkin/success'); // Navigiert zur Erfolgsseite
    } catch (err) {
      toast.error("Invalid BIBO QR Code. Please try again.");
    }
  };

  useEffect(() => {
    const qrScanner = new Html5Qrcode('reader');

    const startScanner = async () => {
      try {
        await qrScanner.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: 250 },
          successScan,
          // (decodedText) => {
          //   qrScanner.stop();
          //   successScan(decodedText)
          //   console.log('*************** erfolg dann navigate');
          // },
          (errorMessage) => {
            console.error('Fehler beim Scannen:', errorMessage);
          }
        );
      } catch (err) {
        console.error('Scanner konnte nicht gestartet werden:', err);
      }
    };

    if (!loading) startScanner();

    return () => {
      if (qrScanner && qrScanner.isScanning) {
        qrScanner.stop();
      }
    };
  }, [navigate, setScanData, loading]);

  return (
    <div>
      <div
        id="reader"
        style={{
          width: '300px',
          height: '300px',
          border: '2px dashed #0070f3',
          borderRadius: '8px',
          margin: '20px auto',
          backgroundColor: '#fff',
        }}
      >
        Kamera wird geladen...
      </div>
    </div>
  );
}