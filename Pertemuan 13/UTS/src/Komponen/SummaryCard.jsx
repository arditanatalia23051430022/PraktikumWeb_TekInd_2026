function SummaryCard({ title, value }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm border-0 h-100">
        <div className="card-body text-center">
          <h5 className="text-secondary">{title}</h5>

          <h2 className="fw-bold text-primary">
            {value}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;