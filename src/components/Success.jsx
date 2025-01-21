import React from 'react';
import { useScanContext } from '../context/ScanContext';
import foto from '/public/foto.png';

export default function Success() {
  const { scanData } = useScanContext(); // Zugriff auf gescannte Daten

  if (!scanData) {
    return <p>Keine Daten gefunden. Bitte scannen Sie erneut.</p>; // Fallback, falls keine Daten vorhanden sind
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Check-In Erfolgreich</h1>
      <img
        src={foto}
        alt="Benutzerfoto"
        style={{
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          margin: '20px 0',
        }}
      />
    <div
  style={{
    padding: '20px',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '400px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }}
>
  <p><strong>QR-Daten:</strong></p>
  <div>
    {scanData.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </div>
</div>
      <button
        onClick={() => (window.location.href = '/checkin/')}
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px auto',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        ✓
      </button>
    </div>
  );
}