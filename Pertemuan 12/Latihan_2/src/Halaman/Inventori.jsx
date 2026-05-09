import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        setProducts(data.slice(0, 5));
        setLoading(false); // 
      })
      .catch(err => {
        setError(err.message);
        setLoading(false); // error
      });
  }, []);

  // LOADING
  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <h4>⏳ Memuat data...</h4>
      </div>
    );
  }

  // ERROR 
  if (error) {
    return (
      <div className="container mt-4 text-center">
        <h4 className="text-danger">❌ Error: {error}</h4>
      </div>
    );
  }

  //  SUCCESS
  return (
    <div className="container mt-4">
      <h1>Data Inventori Bahan Baku</h1>

      <Link to="/" className="btn btn-secondary mb-3">
        ← Kembali ke Dashboard
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID Item</th>
            <th>Nama Bahan</th>
            <th>Status Supplier</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              {/* link ke detail */}
              <td>
                <Link to={`/inventori/${item.id}`}>
                  {item.title}
                </Link>
              </td>

              <td>
                <span className="badge bg-success">
                  Available
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventori;