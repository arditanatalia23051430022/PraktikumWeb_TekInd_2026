import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const closeSidebar = () => {

    // auto close di mobile
    if (window.innerWidth <= 991) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? 'show' : ''}`}>

      {/* LOGO */}
      <div className="logo">

        <div className="logo-icon">
          🏭
        </div>

        <div>
          <h2>
            Sistem <br />
            Pabrik
          </h2>

          <p>Dashboard Industri</p>
        </div>

      </div>

      {/* TITLE */}
      <p className="menu-title">
        MENU NAVIGASI
      </p>

      {/* MENU */}
      <nav className="sidebar-menu">

        <NavLink
          to="/"
          end
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? 'menu-item active'
              : 'menu-item'
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/inventori"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? 'menu-item active'
              : 'menu-item'
          }
        >
          Inventori
        </NavLink>

        <NavLink
          to="/laporan"
          onClick={closeSidebar}
          className={({ isActive }) =>
            isActive
              ? 'menu-item active'
              : 'menu-item'
          }
        >
          Laporan Kualitas
        </NavLink>

      </nav>

      {/* FOOTER */}
      <div className="sidebar-footer">

        <h4>
          Ardita Natalia
        </h4>

        <p>
          NIM: 23051430022
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;