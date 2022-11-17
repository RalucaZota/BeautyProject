import React from "react";
import "../SmileGirl/SmileGirl.css";
import Smilegirl from "../../../assets/SmileGirl/smilegirl.png";
export default function SmileGirl() {
  return (
    <section className="SmileGirl">
      <div className="SmileGirl-div">
        <div>
          <img src={Smilegirl} className="Smilegirl-img" alt="smilegirl-img" />
        </div>
        <div className="SmileGirl-div-mare">
          <h2 className="Smilegirl-h2">Listening is everything</h2>
          <p className="Smilegirl-p">
            ​Sit amet purus gravida quis blandit turpis cursus in. Viverra
            suspendisse potenti nullam ac tortor vitae purus. Nisi vitae
            suscipit tellus mauris a diam maecenas. Id velit ut tortor pretium
            viverra suspendisse.
          </p>
          <div className="button-div">
            <a
              target="_blank"
              href="https://www.nytimes.com/guides/tmagazine/skincare-routine"
            >
              <button className="Smilegirl-button">LEARN MORE</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
