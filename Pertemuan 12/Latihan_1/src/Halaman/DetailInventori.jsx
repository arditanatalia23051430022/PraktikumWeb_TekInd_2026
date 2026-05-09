import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailInventori() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  // loading state
  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <h4>⏳ Memuat detail inventori...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/inventori" className="btn btn-secondary mb-3">
        ← Kembali ke Inventori
      </Link>

      <div className="card shadow">
        <div className="card-body">
          <h3>Detail Inventori #{item.id}</h3>
          <h5 className="mt-3">{item.title}</h5>
          <p className="mt-3">{item.body}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailInventori;