import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Komponen/Navbar';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventori" element={<Inventori />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;