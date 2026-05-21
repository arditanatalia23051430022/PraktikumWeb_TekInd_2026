import { useState } from "react";

import ProductionTable from "../Komponen/ProductionTable";

import {
  getProductions,
  saveProductions,
} from "../utils/localStorage";

function HistoryPage() {
  const [data, setData] = useState(
    getProductions()
  );

  const handleDelete = (id) => {
    const confirmDelete = confirm(
      "Yakin ingin menghapus data?"
    );

    if (!confirmDelete) return;

    const filteredData = data.filter(
      (item) => item.id !== id
    );

    setData(filteredData);

    saveProductions(filteredData);
  };

  return (
    <div>
      <h2 className="mb-4 fw-bold">
        Riwayat Data Produksi
      </h2>

      <ProductionTable
        data={data}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default HistoryPage;