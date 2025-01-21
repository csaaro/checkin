import React, { createContext, useContext, useState } from 'react';

// Kontext erstellen
const ScanContext = createContext();

// Hook für den einfachen Zugriff auf den Kontext
export const useScanContext = () => useContext(ScanContext);

// Kontext-Provider für die App
export const ScanProvider = ({ children }) => {
  const [scanData, setScanData] = useState(null); // Speicher für gescannte Daten

  return (
    <ScanContext.Provider value={{ scanData, setScanData }}>
      {children}
    </ScanContext.Provider>
  );
};