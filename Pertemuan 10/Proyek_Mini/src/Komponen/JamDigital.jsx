import React, { useState, useEffect } from "react";

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="text-center mb-4 p-3"
      style={{
        background: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
        borderRadius: "12px",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h5 className="mb-1">Waktu Sistem</h5>
      <h4 className="fw-bold text-primary">
        {waktu.toLocaleTimeString()}
      </h4>
    </div>
  );
}

export default JamDigital;