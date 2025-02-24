import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      <div className={`sidenav ${isOpen ? "active" : ""}`}>
        <nav className="sidenav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/aboutme" className="nav-links" onClick={toggleSidebar}> Inicio </Link>
            </li>
              <Link to="/docker" className="nav-links" onClick={toggleSidebar}> Docker </Link>
            <li className="nav-item">
              <Link to="/htb" className="nav-links" onClick={toggleSidebar}> Hack the box </Link>
            </li>
            <li className="nav-item">
              <Link to="/angeles" className="nav-links" onClick={toggleSidebar}> CCN-CERT </Link>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
