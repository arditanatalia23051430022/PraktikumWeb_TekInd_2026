import React from 'react';
import { Link } from 'react-router-dom';

import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikDonat from '../Komponen/GrafikDonat';

import KartuMesin from '../Komponen/KartuMesin';
import CounterProduksi from '../Komponen/CounterProduksi';
import JamDigital from '../Komponen/JamDigital';

function Dashboard() {

  // data produksi harian
  const dataProduksi = [145, 170, 190, 180, 210, 225];

  // hitung total output
  const totalOutput = dataProduksi.reduce((a, b) => a + b, 0);

  // target produksi
  const totalTarget = 150 * dataProduksi.length;

  // hitung efficiency rate
  const efficiency = ((totalOutput / totalTarget) * 100).toFixed(1);

  return (
    <div className="container-fluid mt-4">

      {/* HEADER */}
      <div className="row mb-4">
        <div className="col-12">
          <h2>Dashboard Pintar 4.0</h2>
          <hr />
        </div>
      </div>

      {/* GRAFIK */}
      <div className="row mb-4">

        {/* grafik produksi */}
        <div className="col-md-8">
          <div className="card shadow-sm h-100">
            <div className="card-body">

              <GrafikProduksi dataProduksi={dataProduksi} />

            </div>
          </div>
        </div>

        {/* grafik donat */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">

              <GrafikDonat />

            </div>
          </div>
        </div>

      </div>

      {/* KPI */}
      <div className="row mb-4">

        <div className="col-md-6">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              <h5>Total Output Hari Ini</h5>

              <h2>{totalOutput} Unit</h2>

              <small>
                Update terakhir: 13:00
              </small>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              <h5>Efficiency Rate</h5>

              <h2>{efficiency}%</h2>

              <small>
                Berdasarkan target produksi harian
              </small>
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