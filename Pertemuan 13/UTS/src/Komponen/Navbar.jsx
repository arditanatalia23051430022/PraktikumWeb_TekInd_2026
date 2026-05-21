import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Production System
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>

          <Link className="nav-link" to="/input">
            Input Laporan
          </Link>

          <Link className="nav-link" to="/history">
            Riwayat Data
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;