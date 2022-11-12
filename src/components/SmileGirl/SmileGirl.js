import React from "react";
import "../SmileGirl/SmileGirl.css";
import Smilegirl from "../../assets/SmileGirl/smilegirl.png";
export default function SmileGirl() {
  return (
    <section className="SmileGirl">
      <div>
        <img src={Smilegirl} className="Smilegirl-img" />
      </div>
      <div>
        <h2 className="Smilegirl-h2">Listening is everything</h2>
        <p className="Smilegirl-p">
          ​Sit amet purus gravida quis blandit turpis cursus in. Viverra
          suspendisse potenti nullam ac tortor vitae purus. Nisi vitae suscipit
          tellus mauris a diam maecenas. Id velit ut tortor pretium viverra
          suspendisse.
        </p>
        <button className="Smilegirl-button">LEARN MORE</button>
      </div>
    </section>
  );
}
