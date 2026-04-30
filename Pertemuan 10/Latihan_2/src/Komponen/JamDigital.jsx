import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  const [kota, setKota] = useState('Yogyakarta');

  useEffect(() => {
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    document.title = `Jam ${kota}`;
  }, [kota]);

  return (
    <div className="alert alert-info text-center mt-3">
      <h4>Jam Kota {kota}</h4>
      <h2 className="fw-bold">
        {waktu.toLocaleTimeString()}
      </h2>

      <div className="mt-3">
        <input
          type="text"
          className="form-control text-center"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
        />
      </div>
    </div>
  );
}

export default JamDigital;