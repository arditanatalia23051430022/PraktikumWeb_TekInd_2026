import React from 'react';
import { Link } from 'react-router-dom';

import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';
import CounterProduksi from '../Komponen/CounterProduksi';
import JamDigital from '../Komponen/JamDigital';

function Dashboard() {
  return (
    <div className="container-fluid mt-4">

      {/* HEADER */}
      <div className="row mb-4">
        <div className="col-12">
          <h2>Dashboard Pintar 4.0</h2>
          <hr />
        </div>
      </div>

      {/* GRAFIK + KPI */}
      <div className="row mb-4">

        {/* grafik */}
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <GrafikProduksi />
            </div>
          </div>
        </div>

        {/* KPI */}
        <div className="col-md-4">

          <div className="card bg-primary text-white mb-3">
            <div className="card-body">
              <h5>Total Output Hari Ini</h5>
              <h2>1,030 Unit</h2>
              <small>Update terakhir: 13:00</small>
            </div>
          </div>

          <div className="card bg-success text-white">
            <div className="card-body">
              <h5>Efficiency Rate</h5>
              <h2>92.4%</h2>
              <small>+1.2% dari kemarin</small>
            </div>
          </div>

        </div>
      </div>

      {/* JAM */}
      <JamDigital />

      {/* STATUS MESIN */}
      <div className="row mt-4">

        <div className="col-12">
          <h4>Status Mesin Aktif</h4>
        </div>

        <div className="col-md-3">
          <KartuMesin
            nama="CNC-01"
            status="Running"
            produksi={320}
          />
        </div>

        <div className="col-md-3">
          <KartuMesin
            nama="CNC-02"
            status="Running"
            produksi={310}
          />
        </div>

        <div className="col-md-3">
          <KartuMesin
            nama="Press-01"
            status="Stop"
            produksi={150}
          />
        </div>

        <div className="col-md-3">
          <KartuMesin
            nama="Weld-04"
            status="Maintenance"
            produksi={0}
          />
        </div>

      </div>

      {/* COUNTER */}
      <CounterProduksi />

      {/* tombol inventori */}
      <div className="mt-4 text-center">
        <Link to="/inventori" className="btn btn-primary">
          Ke Halaman Inventori →
        </Link>
      </div>

    </div>
  );
}

export default Dashboard;