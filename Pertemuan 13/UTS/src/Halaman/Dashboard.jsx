import SummaryCard from "../Komponen/SummaryCard";

import { getProductions } from "../utils/localStorage";

function Dashboard() {
  const data = getProductions();

  const totalProduction = data.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const totalReject = data.reduce(
    (sum, item) => sum + item.reject,
    0
  );

  const netto = totalProduction - totalReject;

  const yieldValue =
    totalProduction > 0
      ? (
          (netto / totalProduction) *
          100
        ).toFixed(2)
      : 0;

  return (
    <div>
      <h2 className="mb-4 fw-bold">
        Dashboard Produksi Harian
      </h2>

      <div className="row g-4">
        <SummaryCard
          title="Total Produksi"
          value={totalProduction}
        />

        <SummaryCard
          title="Total Reject"
          value={totalReject}
        />

        <SummaryCard
          title="Yield"
          value={`${yieldValue}%`}
        />
      </div>
    </div>
  );
}

export default Dashboard;