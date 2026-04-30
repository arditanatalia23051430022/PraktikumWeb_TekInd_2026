import React from 'react';

// Komponen
import KartuMesin from './Komponen/KartuMesin';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';

function App() {
  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1>Monitoring Lini Produksi A</h1>
        <p className="text-muted">
          Modul 10 - State, Hooks, dan Conditional Rendering
        </p>
      </div>

      {/* JAM DIGITAL */}
      <JamDigital />

      {/* KARTU MESIN */}
      <div className="row mt-3">
        <div className="col-md-4">
          <KartuMesin
            nama="CNC-Turning-01"
            status="Running"
            produksi={150}
          />
        </div>

        <div className="col-md-4">
          {/* test default props (produksi = 0) */}
          <KartuMesin
            nama="CNC-Milling-02"
            status="Maintenance"
          />
        </div>

        <div className="col-md-4">
          <KartuMesin
            nama="Press-Hydraulic-05"
            status="Stop"
            produksi={85}
          />
        </div>
      </div>

      {/* COUNTER */}
      <CounterProduksi />

    </div>
  );
}

export default App;