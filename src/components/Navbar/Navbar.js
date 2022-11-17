import React from "react";
import Header from "../Header";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="Navbar navBar">
      <Header />
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose
            style={{ color: "#000000", width: "20px", height: "20px" }}
          />
        ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "20px", height: "20px" }} />
        )}
      </button>
      <div className="elements">
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <Link
              to="/"
              id="general"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/form"
              id="general"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Appointments
            </Link>
          </li>

          <li className="active">
            <Link
              to="/contact"
              id="general"
              className="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Subscribe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
