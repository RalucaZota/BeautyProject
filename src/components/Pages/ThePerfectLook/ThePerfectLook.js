import React from "react";
import "../ThePerfectLook/ThePerfectLook.css";
import candle from "../../../assets/ThePerfectLook/images/candle.jpeg";
import massage from "../../../assets/ThePerfectLook/images/massage.jpeg";
import pila from "../../../assets/ThePerfectLook/images/pila.jpg";
import pila2 from "../../../assets/ThePerfectLook/images/pila2.jpg";
import roscata from "../../../assets/ThePerfectLook/images/roscata.jpg";
import woman from "../../../assets/ThePerfectLook/images/woman.jpg";
import { Link } from "react-router-dom";
export default function ThePerfectLook() {
  return (
    <section className="perfectlook-section">
      <div className="perfectlook-div1">
        <h5 className="perfectlook-h5">​The Perfect Look</h5>
        <h2 className="perfectlook-h2">Full Service Beauty Studio</h2>
      </div>
      <div className="perfectlook-div2">
        <ul className="perfectlook-ul">
          <li className="perfectlook-li">
            <img className="perfectlook-images" alt="masaj" src={massage}></img>
          </li>
          <li className="perfectlook-li">
            <img className="perfectlook-images" alt="pila" src={pila}></img>
          </li>
          <li className="perfectlook-li">
            <img className="perfectlook-images" alt="pila2" src={pila2}></img>
          </li>
          <li className="perfectlook-li">
            <img
              className="perfectlook-images"
              alt="roscata"
              src={roscata}
            ></img>
          </li>
          <li className="perfectlook-li">
            <img className="perfectlook-images" alt="candle" src={candle}></img>
          </li>

          <li className="perfectlook-li">
            <img className="perfectlook-images" alt="woman" src={woman}></img>
          </li>
        </ul>
      </div>
      <div className="perfectlook-div3">
        <button className="perfectlook-button">
          <Link to="/form" id="perfectlook-b">
            {" "}
            CONTACT US
          </Link>
        </button>
      </div>
    </section>
  );
}
