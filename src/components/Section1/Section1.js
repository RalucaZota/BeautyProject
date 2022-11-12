import React from "react";
import "../Section1/Section1.css";
import blackw from "../../assets/Section1Img/images/blackw.jpg";

export default function Section1() {
  return (
    <section className="section1">
      <div className="main-div">
        <div>
          <img className="section1-img" src={blackw} />
        </div>
        <div>
          <h1 className="section1-h1">
            ​Best Beauty
            <br />
            Treatments
          </h1>
          <p className="section1-p">
            ​Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div>
          <button>CONTACT US</button>
        </div>
      </div>
    </section>
  );
}
