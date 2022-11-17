import React from "react";
import "../MusicEducation/MusicEducation.css";
import image from "../../../assets/MusicEducation/images/image.png";

export default function MusicEducation() {
  return (
    <section className="music-education">
      <div className="music-education-div">
        <div>
          <h2 className="music-education-h2">Music Education</h2>
          <p className="music-education-p">
            ​Sit amet purus gravida quis blandit turpis cursus in. Viverra
            suspendisse potenti nullam ac tortor vitae purus. Nisi vitae
            suscipit tellus mauris a diam maecenas. Id velit ut tortor pretium
            viverra suspendisse. Tempor id eu nisl nunc mi ipsum faucibus vitae.
            Tincidunt lobortis feugiat vivamus at. Consectetur adipiscing elit
            ut aliquam purus sit amet.
          </p>
          <a href="https://www.goodreads.com/shelf/show/music-education">
            <button className="music-education-button">LEARN MORE</button>
          </a>
        </div>

        <img src={image} id="music-education-id" alt="music-education"></img>
      </div>
    </section>
  );
}
