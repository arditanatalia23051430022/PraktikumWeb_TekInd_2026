function ProductionTable({ data, onDelete }) {
  if (data.length === 0) {
    return (
      <div className="alert alert-warning">
        Belum ada data produksi.
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Shift</th>
            <th>Mesin</th>
            <th>Total</th>
            <th>Reject</th>
            <th>Netto</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.shift}</td>
              <td>{item.machine}</td>
              <td>{item.total}</td>
              <td>{item.reject}</td>
              <td>{item.netto}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    onDelete(item.id)
                  }
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductionTable;