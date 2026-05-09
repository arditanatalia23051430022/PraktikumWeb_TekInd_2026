import React from 'react';
import { Link } from 'react-router-dom';

import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikDonat from '../Komponen/GrafikDonat';

import KartuMesin from '../Komponen/KartuMesin';
import CounterProduksi from '../Komponen/CounterProduksi';
import JamDigital from '../Komponen/JamDigital';

function Dashboard() {

  const dataProduksi = [145, 170, 190, 180, 210, 225];

  const totalOutput = dataProduksi.reduce((a, b) => a + b, 0);

  const totalTarget = 150 * dataProduksi.length;

  const efficiency = ((totalOutput / totalTarget) * 100).toFixed(1);

  return (
    <div className="container-fluid p-4">

      {/* HEADER */}
      <div
        className="d-flex justify-content-between align-items-center mb-4 p-4"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}
      >
        <div>

          <h2 className="fw-bold mb-1">
            Dashboard Smart Factory
          </h2>

          <p className="text-muted mb-1">
            Monitoring Real-Time Smart Factory
          </p>

          {/* IDENTITAS */}
          <small
            style={{
              color: '#6b7280',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Ardita Natalia (23051430022)
          </small>

        </div>

        <div className="d-flex align-items-center">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="rounded-circle"
            width="55"
            height="55"
          />

          <div className="ms-3">

            <h6 className="mb-0 fw-bold">
              Operator
            </h6>

            <small className="text-muted">
              Admin Produksi
            </small>

          </div>
        </div>
      </div>

      {/* KPI */}
      <div className="row g-4 mb-4">

        <div className="col-lg-6">
          <div
            className="p-4 text-white"
            style={{
              borderRadius: '22px',
              background:
                'linear-gradient(135deg, #2563eb, #3b82f6)',
              minHeight: '170px'
            }}
          >
            <h4 className="fw-bold">
              Total Output Hari Ini
            </h4>

            <h1
              className="fw-bold mt-4"
              style={{ fontSize: '4rem' }}
            >
              {totalOutput}
            </h1>

            <h5>Unit Produksi</h5>
          </div>
        </div>

        <div className="col-lg-6">
          <div
            className="p-4 text-white"
            style={{
              borderRadius: '22px',
              background:
                'linear-gradient(135deg, #10b981, #14b8a6)',
              minHeight: '170px'
            }}
          >
            <h4 className="fw-bold">
              Efficiency Rate
            </h4>

            <h1
              className="fw-bold mt-4"
              style={{ fontSize: '4rem' }}
            >
              {efficiency}%
            </h1>

            <h5>Berdasarkan target produksi</h5>
          </div>
        </div>

      </div>

      {/* GRAFIK */}
      <div className="row g-4 mb-4">

        <div className="col-lg-8">
          <div
            className="bg-white p-4"
            style={{
              borderRadius: '22px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            <GrafikProduksi dataProduksi={dataProduksi} />
          </div>
        </div>

        <div className="col-lg-4">
          <div
            className="bg-white p-4"
            style={{
              borderRadius: '22px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            <GrafikDonat />
          </div>
        </div>

      </div>

      {/* JAM DIGITAL */}
      <div className="mb-4">
        <JamDigital />
      </div>

      {/* STATUS MESIN */}
      <div
        className="bg-white p-4 mb-4"
        style={{
          borderRadius: '22px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}
      >

        <h3 className="fw-bold mb-4">
          Status Mesin Aktif
        </h3>

        <div className="row">

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
      </div>

      {/* COUNTER */}
      <div
        className="bg-white p-4 mb-4"
        style={{
          borderRadius: '22px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}
      >
        <CounterProduksi />
      </div>

      {/* TOMBOL */}
      <div className="text-center mt-4">
        <Link
          to="/inventori"
          className="btn btn-primary px-4 py-2 rounded-pill"
        >
          Ke Halaman Inventori →
        </Link>
      </div>

    </div>
  );
}

export default Dashboard;