import React from "react";
import "../../Pages/Section3/Section3.css";

import image from "../../../assets/Section3-img/block-fce2/images/image.png";

export default function Section3() {
  return (
    <section className="section3">
      <div className="section3-div">
        <div className="section3-div-img">
          <img src={image} id="section3-img1" alt="section3-img"></img>
        </div>
        <div className="section3-div-text">
          <h6 id="section3-h6">Face ​treatments</h6>
          <h2 id="section3-h2">​Massage and relaxation</h2>
          <p id="section3-p">
            ​Sit amet purus gravida quis blandit turpis cursus in. Viverra
            suspendisse potenti nullam ac tortor vitae purus. Nisi vitae
            suscipit tellus mauris a diam maecenas. Id velit ut tortor pretium
            viverra suspendisse. Tempor id eu nisl nunc mi ipsum faucibus vitae.
          </p>
          <div>
            <a
              target="_blank"
              href="https://www.amtamassage.org/find-massage-therapist/25-reasons-to-get-a-massage/"
            >
              <button className="section3-button">LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
