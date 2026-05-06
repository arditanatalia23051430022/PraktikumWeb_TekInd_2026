import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailInventori() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container mt-4">
      <Link to="/inventori" className="btn btn-secondary mb-3">
        ← Kembali ke Inventori
      </Link>

      <div className="card shadow">
        <div className="card-body">
          <h3>Detail Inventori #{item?.id}</h3>
          <h5 className="mt-3">{item?.title}</h5>
          <p className="mt-3">{item?.body}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailInventori;