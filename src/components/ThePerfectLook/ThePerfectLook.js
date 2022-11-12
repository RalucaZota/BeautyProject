import React from "react";
import "../ThePerfectLook/ThePerfectLook.css";
import candle from "../../assets/ThePerfectLook/images/candle.jpeg";
import massage from "../../assets/ThePerfectLook/images/massage.jpeg";
import pila from "../../assets/ThePerfectLook/images/pila.jpg";
import pila2 from "../../assets/ThePerfectLook/images/pila2.jpg";
import roscata from "../../assets/ThePerfectLook/images/roscata.jpg";
import woman from "../../assets/ThePerfectLook/images/woman.jpg";

export default function ThePerfectLook() {
  return (
    <section>
      <div className="perfectlook-div1">
        <h5 className="perfectlook-h5">​The Perfect Look</h5>
        <h2 className="perfectlook-h2">Full Service Beauty Studio</h2>
      </div>
      <div className="perfectlook-div2">
        <img className="perfectlook-images" src={massage}></img>
        <img className="perfectlook-images" src={pila}></img>
        <img className="perfectlook-images" src={pila2}></img>
        <img className="perfectlook-images" src={roscata}></img>
        <img className="perfectlook-images" src={candle}></img>
        <img className="perfectlook-images" src={woman}></img>
      </div>
      <div className="perfectlook-div3">
        <button className="perfectlook-button">CONTACT US</button>
        <h1>bla bla</h1>
      </div>
    </section>
  );
}
