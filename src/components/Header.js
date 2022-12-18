import React from "react";
import img from "../assets/Header/Bell.png";
import "../components/Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="div-logo">
      <div>
        <Link to="/">
          <img src={img} alt="Bell-logo" className="logo" />
        </Link>
      </div>
    </header>
  );
}
