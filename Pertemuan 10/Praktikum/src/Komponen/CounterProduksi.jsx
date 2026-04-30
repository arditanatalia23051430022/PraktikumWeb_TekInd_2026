import React, { useState } from 'react';

function CounterProduksi() {
  const [jumlah, setJumlah] = useState(0);
  const [target, setTarget] = useState(100);

  const tambahProduksi = () => {
    setJumlah(jumlah + 1);
  };

  const reset = () => {
    setJumlah(0);
  };

  return (
    <div className="text-center p-4 border rounded bg-light mt-4">
      <h3>Simulasi Hitung Produk</h3>
      <h1 className="display-4">{jumlah}</h1>
      <p>Target: {target} Unit</p>

      {jumlah >= target ? (
        <div className="alert alert-success d-inline-block">
          Target Tercapai!
        </div>
      ) : (
        <div className="alert alert-secondary d-inline-block">
          Produksi Berjalan...
        </div>
      )}

      <div className="mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={tambahProduksi}
        >
          +1 Unit (Sensor OK)
        </button>

        <button
          className="btn btn-danger"
          onClick={reset}
        >
          Reset Shift
        </button>
      </div>
    </div>
  );
}

export default CounterProduksi;