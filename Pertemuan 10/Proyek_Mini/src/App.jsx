import React from 'react';
import OEECalculator from './Komponen/OEECalculator';
import JamDigital from './Komponen/JamDigital';

function App() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div
        className="text-center mb-4 p-5"
        style={{
          background: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        }}
      >
        {/* Judul */}
        <h1
          style={{
            fontWeight: "800",
            color: "#0d47a1",
            fontSize: "2.5rem",
            marginBottom: "8px"
          }}
        >
          Dashboard OEE Produksi
        </h1>

        {/* Garis */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#0d6efd",
            margin: "12px auto 18px",
            borderRadius: "5px"
          }}
        />

        {/* Nama */}
        <p
          style={{
            fontWeight: "500",
            color: "#475569",
            marginBottom: "4px",
            fontSize: "15px"
          }}
        >
          Ardita Natalia (23051430022)
        </p>

        {/* Subjudul */}
        <p
          style={{
            color: "#334155",
            fontSize: "15px",
            margin: 0
          }}
        >
          Praktikum Modul 10 • Kalkulator OEE Sederhana
        </p>
      </div>

      {/* JAM DIGITAL */}
      <JamDigital />

      {/* OEE */}
      <OEECalculator />

    </div>
  );
}

export default App;