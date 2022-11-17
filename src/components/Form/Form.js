import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setsubmitMessage] = useState("");
  const [nameisTouched, setNameisTouched] = useState(false);
  const [phoneisTouched, setphoneisTouched] = useState(false);
  const [messageTouched, setMessageisTouched] = useState(false);

  const enteredNameisValid = name.trim() !== "";
  const enteredPhoneisValid = phone.trim() !== "";
  const enteredMessageisValid = message.trim() !== "";

  const nameisInvalid = !enteredNameisValid && nameisTouched;
  const phoneisInvalid = !enteredPhoneisValid && phoneisTouched;
  const messageisInvalid = !enteredMessageisValid && messageTouched;

  let formIsValid = false;
  if (enteredNameisValid && enteredPhoneisValid && enteredMessageisValid) {
    formIsValid = true;
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!enteredNameisValid && !enteredPhoneisValid && !enteredMessageisValid) {
      return;
    }

    console.log(name, phone, message);
    setNameisTouched(false);
    setphoneisTouched(false);
    setMessageisTouched(false);
    e.target.reset();

    try {
      let app = await fetch(
        "https://beautyform-14679-default-rtdb.firebaseio.com/beautybooking.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            phone: phone,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await app.json();
      console.log(data);
      if (app.status === 200) {
        setName("");
        setPhone("");
        setMessage("");
        setsubmitMessage("The appointment was successfully completed!");
      } else {
        setMessage("Some error occured");
      }
    } catch (error) {
      console.log("Some error has occured.");
    }
  };
  const nameInputBlurHandler = (e) => {
    setNameisTouched(true);
  };
  const phoneInputBlurHandler = (e) => {
    setphoneisTouched(true);
  };
  const messageInputBlurHandler = (e) => {
    setMessageisTouched(true);
  };

  const InputClasses =
    nameisInvalid && phoneisInvalid && messageisInvalid
      ? "form-control invalid"
      : "form-control";
  return (
    // <section className="Form">
    <div className={`Form ${InputClasses}`}>
      <h2 className="h2-form">Make an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={nameInputBlurHandler}
          />
          {nameisInvalid && (
            <p className="error-text"> Name must not be empty. </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="Phone">Phone</label>
          <input
            type="phone"
            placeholder="Enter your phone(e.g. +14155521...)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={phoneInputBlurHandler}
          />
          {phoneisInvalid && (
            <p className="error-text"> Phone must be not empty. </p>
          )}
        </div>
        <div className="form-control Message-form">
          <label htmlFor="Message">Message</label>
          <input
            placeholder="Your message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={messageInputBlurHandler}
          />
          {messageisInvalid && (
            <p className="error-text"> Message must be not empty. </p>
          )}
        </div>
        <button className="button-form" type="submit">
          SUBMIT
        </button>
        <div>
          {submitMessage ? <p className="mesaj-form">{submitMessage}</p> : null}
        </div>
      </form>
    </div>
    // </section>
  );
}
