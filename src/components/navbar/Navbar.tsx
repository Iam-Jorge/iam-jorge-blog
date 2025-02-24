import React from 'react';
import './navbar.css';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Iam-Jorge</h1>
      <button className="menu-icon" onClick={toggleSidebar}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;