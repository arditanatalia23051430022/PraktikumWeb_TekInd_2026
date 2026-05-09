import React from 'react';

const dataCacat = [
  {
    id: 1,
    tanggal: '2024-12-01',
    mesin: 'CNC-01',
    jenisCacat: 'Dimensi tidak sesuai',
    jumlah: 3
  },
  {
    id: 2,
    tanggal: '2024-12-01',
    mesin: 'Press-02',
    jenisCacat: 'Permukaan kasar',
    jumlah: 5
  },
  {
    id: 3,
    tanggal: '2024-12-02',
    mesin: 'CNC-01',
    jenisCacat: 'Retak halus',
    jumlah: 2
  },
  {
    id: 4,
    tanggal: '2024-12-02',
    mesin: 'Lathe-03',
    jenisCacat: 'Diameter oversize',
    jumlah: 1
  },
  {
    id: 5,
    tanggal: '2024-12-03',
    mesin: 'Press-02',
    jenisCacat: 'Cracking',
    jumlah: 4
  }
];

function LaporanKualitas() {
  const totalCacat = dataCacat.reduce(
    (sum, d) => sum + d.jumlah,
    0
  );

  return (
    <div className="page-card">
      <div className="page-header">
        <div>
          <h1>📊 Laporan Produksi</h1>
          <p>Monitoring kualitas dan defect produksi</p>
        </div>

        <div className="total-box">
          <h3>{totalCacat}</h3>
          <span>Total Cacat</span>
        </div>
      </div>

      <div className="custom-table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Mesin</th>
              <th>Jenis Cacat</th>
              <th>Jumlah</th>
            </tr>
          </thead>

          <tbody>
            {dataCacat.map((d) => (
              <tr key={d.id}>
                <td>{d.tanggal}</td>

                <td>
                  <span className="machine-tag">
                    {d.mesin}
                  </span>
                </td>

                <td>{d.jenisCacat}</td>

                <td>
                  <span className="status-badge danger">
                    {d.jumlah} Unit
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LaporanKualitas;