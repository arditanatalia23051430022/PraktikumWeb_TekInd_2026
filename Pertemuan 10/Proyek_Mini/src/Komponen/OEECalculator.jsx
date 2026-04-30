import React, { useState } from 'react';

function OEECalculator() {
  const [planTime, setPlanTime] = useState(480);
  const [runTime, setRunTime] = useState(420);
  const [totalParts, setTotalParts] = useState(800);
  const [goodParts, setGoodParts] = useState(760);

  const standar = 2; // unit per menit (dari dosen)

  // RESET
  const handleReset = () => {
    setPlanTime(0);
    setRunTime(0);
    setTotalParts(0);
    setGoodParts(0);
  };

  // RUMUS (pakai versi dosen)
  const availability = planTime > 0 ? runTime / planTime : 0;
  const performance = runTime > 0 ? totalParts / (runTime * standar) : 0;
  const quality = totalParts > 0 ? goodParts / totalParts : 0;

  const oee = availability * performance * quality * 100;

  // KATEGORI (gabungan punyamu + dosen)
  let warna = "#fbbf24";
  let bg = "linear-gradient(135deg,#fef3c7,#fde68a)";
  let label = "Acceptable";

  if (oee >= 85) {
    warna = "#22c55e";
    bg = "linear-gradient(135deg,#dcfce7,#bbf7d0)";
    label = "World Class 🏆";
  } else if (oee < 50) {
    warna = "#ef4444";
    bg = "linear-gradient(135deg,#fee2e2,#fecaca)";
    label = "Need Improvement";
  }

  return (
    <div
      className="container mt-4 p-4"
      style={{
        borderRadius: "20px",
        background: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}
    >
      <h3 className="text-center fw-bold mb-2">
        Kalkulator OEE Sederhana
      </h3>

      <p className="text-center text-muted mb-4">
        Standar: {standar} unit/menit
      </p>

      {/* INPUT */}
      <div className="row g-3">
        <InputBox label="Plan Time" value={planTime} setValue={setPlanTime} />
        <InputBox label="Run Time" value={runTime} setValue={setRunTime} />
        <InputBox label="Total Parts" value={totalParts} setValue={setTotalParts} />
        <InputBox label="Good Parts" value={goodParts} setValue={setGoodParts} />
      </div>

      {/* HASIL */}
      <div
        className="text-center mt-5 p-5"
        style={{
          borderRadius: "20px",
          background: bg,
          boxShadow: `0 10px 25px ${warna}33`,
          transition: "0.3s"
        }}
      >
        <h6>OEE Score</h6>

        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "800",
            color: warna,
            textShadow: `0 0 20px ${warna}55`
          }}
        >
          {oee.toFixed(1)}%
        </h1>

        <span
          style={{
            background: warna,
            color: "white",
            padding: "8px 20px",
            borderRadius: "999px",
            fontWeight: "600"
          }}
        >
          {label}
        </span>
      </div>

      {/* DETAIL */}
      <div className="row text-center mt-4">
        <FactorBox title="Availability" value={availability} />
        <FactorBox title="Performance" value={performance} />
        <FactorBox title="Quality" value={quality} />
      </div>

      {/* RESET */}
      <div className="text-center mt-4">
        <button
          onClick={handleReset}
          style={{
            background: "linear-gradient(135deg,#ef4444,#dc2626)",
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: "12px",
            fontWeight: "600",
            fontSize: "15px",
            boxShadow: "0 4px 12px rgba(239,68,68,0.4)",
            cursor: "pointer"
          }}
        >
          Reset Data
        </button>
      </div>

    </div>
  );
}

/* INPUT */
function InputBox({ label, value, setValue }) {
  return (
    <div className="col-md-3">
      <label className="fw-semibold">{label}</label>
      <input
        type="number"
        className="form-control mt-1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
}

/* FAKTOR */
function FactorBox({ title, value }) {
  const percent = (value * 100).toFixed(1);

  return (
    <div className="col-md-4">
      <div
        className="p-3 mt-2"
        style={{
          borderRadius: "15px",
          background: "#f1f5f9",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
        }}
      >
        <h6 className="text-muted">{title}</h6>
        <h5 className="fw-bold">{percent}%</h5>
      </div>
    </div>
  );
}

export default OEECalculator;