import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="alert alert-info text-center mt-3">
      <h4>Waktu Sistem Server: {waktu.toLocaleTimeString()}</h4>
    </div>
  );
}

export default JamDigital;