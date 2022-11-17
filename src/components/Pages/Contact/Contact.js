import React from "react";
import "../../Pages/Contact/Contact.css";
import Email from "./Email";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-div-principal">
        <div className="contact-div2">
          <h1 className="contact-h1">Subscribe</h1>
          <p className="contact-p">
            Welcome to our page! Please subscribe to be up to date with our
            weekly offers and also with new beauty procedures.{" "}
          </p>
        </div>
        <div className="contact-div3">
          <Email />
        </div>
      </div>
    </section>
  );
}
