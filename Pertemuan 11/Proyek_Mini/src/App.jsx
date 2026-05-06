import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Komponen/Navbar';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
import DetailInventori from './Halaman/DetailInventori';
import LaporanKualitas from './Halaman/LaporanKualitas'; 

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="/inventori/:id" element={<DetailInventori />} />

        {/* TAMBAHAN */}
        <Route path="/laporan" element={<LaporanKualitas />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;