import React from "react";
import img from "../assets/Header/Bell.png";
import "../components/Header.css";
export default function Header() {
  return (
    <header className="div-logo">
      <div>
        <img src={img} className="logo" />
      </div>
    </header>
  );
}
