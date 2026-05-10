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

      {/* MOBILE HEADER */}
      <div className="mobile-topbar">

        <button
          className={`menu-toggle ${sidebarOpen ? 'active' : ''}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <h3 className="mobile-title">
          Smart Factory
        </h3>

      </div>

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