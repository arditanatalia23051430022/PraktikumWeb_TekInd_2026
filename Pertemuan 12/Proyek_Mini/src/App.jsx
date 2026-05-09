import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './Komponen/Sidebar';

import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import DetailInventori from './Halaman/DetailInventori';
import LaporanKualitas from './Halaman/LaporanKualitas';
import NotFound from './Halaman/NotFound';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // otomatis tutup sidebar saat resize desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="layout">

      {/* TOGGLE BUTTON MOBILE */}
      <button
        className="menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* CONTENT */}
      <main className="main-content">

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/inventori"
            element={<Inventori />}
          />

          <Route
            path="/inventori/:id"
            element={<DetailInventori />}
          />

          <Route
            path="/laporan"
            element={<LaporanKualitas />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>
    </div>
  );
}

export default App;