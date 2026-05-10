import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-card text-center">
        <h4>⏳ Memuat data inventori...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-card text-center">
        <h4 className="text-danger">❌ Error: {error}</h4>
      </div>
    );
  }

  return (
    <div className="page-card">
      <div className="page-header">
        <div>
          <h1>📦 Data Inventori</h1>
          <p>Monitoring stok bahan baku produksi</p>
        </div>

        <Link to="/" className="dashboard-back-btn">
          ← Dashboard
        </Link>
      </div>

      <div className="custom-table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Bahan</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="table-id">
                    #{item.id}
                  </span>
                </td>

                <td>
                  <Link
                    to={`/inventori/${item.id}`}
                    className="table-link"
                  >
                    {item.title}
                  </Link>
                </td>

                <td>
                  <span className="status-badge success">
                    Available
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventori;