import { useState } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav>
      <div className="left">
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>LisaEstate</span>
        </NavLink>
        <NavLink to="/list" className={getActiveClass}>
          List of Apartaments
        </NavLink>
        <NavLink to="/id" className={getActiveClass}>
          New Apartment
        </NavLink>
      </div>
      <div className="right">
        <Link to="/">Sign in</Link>
        <Link to="/" className="register">
          Sign up
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <NavLink to="/" className={getActiveClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getActiveClass}>
            List of Apartaments
          </NavLink>
          <NavLink to="/id" className={getActiveClass}>
            New Apartment
          </NavLink>
          <Link to="/">Sign in</Link>
          <Link to="/">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
