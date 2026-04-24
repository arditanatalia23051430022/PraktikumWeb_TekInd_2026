import React from 'react';
import KartuKaryawan from './Komponen/KartuKaryawan';

function App() {
  const daftarKaryawan = [
    { nama: 'Budi Santoso', jabatan: 'Manager', bagian: 'Produksi' },
    { nama: 'Siti Aminah', jabatan: 'Operator', bagian: 'Mesin CNC' },
    { nama: 'Andi Pratama', jabatan: 'QC', bagian: 'Quality Control' },
    { nama: 'Rina Maharani', jabatan: 'Supervisor', bagian: 'Assembly' },
    { nama: 'Dedi Kurniawan', jabatan: 'Teknisi', bagian: 'Maintenance' },
    { nama: 'Laila Putri', jabatan: 'PPIC', bagian: 'Perencanaan Produksi' },
  ];

  return (
    <div
      className="container py-4"
      style={{ backgroundColor: '#f4f9ff', minHeight: '100vh' }}
    >
      {/* Header */}
      <div
        className="text-center text-white p-5 mb-5 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #0d6efd, #4dabf7, #74c0fc)',
          borderRadius: '25px',
        }}
      >
        <h1 className="fw-bold text-white mb-3">
          Proyek Mini - Kartu Karyawan
        </h1>
        <p className="mb-1 fs-5">Ardita Natalia</p>
        <p className="mb-0 fs-5">23051430022</p>
      </div>

      {/* Statistik */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-3">
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: '20px' }}
          >
            <div className="card-body">
              <h2 className="text-primary fw-bold">
                {daftarKaryawan.length}
              </h2>
              <p className="mb-0">Total Karyawan</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: '20px' }}
          >
            <div className="card-body">
              <h2 className="text-primary fw-bold">3</h2>
              <p className="mb-0">Jabatan Utama</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: '20px' }}
          >
            <div className="card-body">
              <h2 className="text-primary fw-bold">6</h2>
              <p className="mb-0">Divisi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Karyawan */}
      <div className="row g-4">
        {daftarKaryawan.map((karyawan, index) => (
          <div className="col-md-4" key={index}>
            <KartuKaryawan
              nama={karyawan.nama}
              jabatan={karyawan.jabatan}
              bagian={karyawan.bagian}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;