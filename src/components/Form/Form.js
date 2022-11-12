import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <section className="Form">
      <h2 className="h2-form">Book an Appointment</h2>
      <form>
        <div className="Name-form">
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Enter your Name" />
        </div>
        <div className="Phone-form">
          <label htmlFor="Phone">Phone</label>
          <input
            type="phone"
            placeholder="Enter your phone(e.g. +14155521...)"
          />
        </div>
        <div className="Message-form">
          <label htmlFor="Message">Message</label>
          <input type="text" />
        </div>
        <button className="button-form">SUBMIT</button>
        {/* <p className="mesaj-form">You have submitted your data.</p> */}
      </form>
    </section>
  );
}
