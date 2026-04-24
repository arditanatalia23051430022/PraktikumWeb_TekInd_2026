import React from 'react';

function KartuKaryawan({ nama, jabatan, bagian }) {
  const warnaJabatan = {
    Manager: 'primary',
    Operator: 'success',
    QC: 'warning',
    Supervisor: 'info',
    Teknisi: 'danger',
    PPIC: 'secondary',
  };

  const badgeColor = warnaJabatan[jabatan] || 'primary';

  return (
    <div
      className="card border-0 shadow-lg h-100"
      style={{
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="card-body text-center p-4">
        <div
          className="mx-auto mb-3 d-flex align-items-center justify-content-center"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #90caf9, #42a5f5)',
            color: 'white',
            fontSize: '32px',
            fontWeight: 'bold',
          }}
        >
          {nama.charAt(0)}
        </div>

        <h5 className="fw-bold text-primary">{nama}</h5>

        <span className={`badge bg-${badgeColor} px-3 py-2 mb-3`}>
          {jabatan}
        </span>

        <hr />

        <p className="mb-0 text-muted">
          Bagian: <strong>{bagian}</strong>
        </p>
      </div>
    </div>
  );
}

export default KartuKaryawan;