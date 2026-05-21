import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getProductions,
  saveProductions,
} from "../utils/localStorage";

function ProductionForm() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [shift, setShift] = useState("Pagi");
  const [machine, setMachine] = useState("");
  const [total, setTotal] = useState(0);
  const [reject, setReject] = useState(0);

  const netto = total - reject;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: Date.now(),
      date,
      shift,
      machine,
      total: Number(total),
      reject: Number(reject),
      netto: Number(netto),
    };

    const oldData = getProductions();

    saveProductions([newData, ...oldData]);

    alert("Data berhasil disimpan!");

    navigate("/history");
  };

  return (
    <div className="card shadow border-0">
      <div className="card-body">
        <h3 className="mb-4">
          Input Laporan Produksi
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              Tanggal
            </label>

            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Shift
            </label>

            <select
              className="form-select"
              value={shift}
              onChange={(e) =>
                setShift(e.target.value)
              }
            >
              <option>Pagi</option>
              <option>Siang</option>
              <option>Malam</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Nama Mesin
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Contoh: Mesin CNC 01"
              value={machine}
              onChange={(e) =>
                setMachine(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Jumlah Produksi
            </label>

            <input
              type="number"
              className="form-control"
              value={total}
              onChange={(e) =>
                setTotal(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Jumlah Reject
            </label>

            <input
              type="number"
              className="form-control"
              value={reject}
              onChange={(e) =>
                setReject(e.target.value)
              }
              required
            />
          </div>

          <div className="alert alert-info">
            <strong>Netto Produksi:</strong>{" "}
            {netto}
          </div>

          <button className="btn btn-primary w-100">
            Simpan Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductionForm;