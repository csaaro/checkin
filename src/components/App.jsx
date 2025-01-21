import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScanProvider } from '../context/ScanContext';
import QRScanner from './QRScanner';
import Success from './Success';

export default function App() {
  return (
    <ScanProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/checkin" element={<QRScanner />} />
          <Route path="/checkin/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </ScanProvider>
  );
}