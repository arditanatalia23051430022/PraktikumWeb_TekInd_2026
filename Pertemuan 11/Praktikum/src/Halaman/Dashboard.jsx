import React from 'react';
import { Link } from 'react-router-dom';
import KartuMesin from '../Komponen/KartuMesin';
import CounterProduksi from '../Komponen/CounterProduksi';
import JamDigital from '../Komponen/JamDigital';

function Dashboard() {
  return (
    <div className="container mt-4">
      <div className="p-4 text-center">
        <h1>Dashboard Utama Pabrik</h1>
        <p>Selamat datang di sistem monitoring terpadu.</p>

        <Link to="/inventori" className="btn btn-primary">
          Ke Halaman Inventori →
        </Link>
      </div>

      <JamDigital />

      <div className="row mt-4">
        <div className="col-md-4">
          <KartuMesin nama="CNC-Turning-01" status="Running" produksi={150} />
        </div>

        <div className="col-md-4">
          <KartuMesin nama="CNC-Milling-02" status="Maintenance" />
        </div>

        <div className="col-md-4">
          <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={85} />
        </div>
      </div>

      <CounterProduksi />
    </div>
  );
}

export default Dashboard;