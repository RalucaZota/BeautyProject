import React, { useState } from "react";
import useInput from "./hooks/use-Input";
import "./Form.css";

export default function Form(props) {
  const [submitMessage, setsubmitMessage] = useState("");
  const isNotEmpty = (value) => value.trim() !== "";
  const {
    value: enteredName,
    isValid: nameIsValid,
    valueHasError: nameHasError,
    valueChangeHandler: changeNameInputHandler,
    inputBlurHandler: changeNameInputBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredPhone,
    isValid: phoneIsValid,
    valueHasError: phoneHasError,
    valueChangeHandler: changephoneInputHandler,
    inputBlurHandler: changephoneInputBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueHasError: messageHasError,
    valueChangeHandler: changeMessageInputHandler,
    inputBlurHandler: changeMessageInputBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && phoneIsValid && messageIsValid) {
    formIsValid = true;
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!nameIsValid && !phoneIsValid && !messageIsValid) {
      return;
    }
    e.target.reset();

    try {
      let app = await fetch(
        "https://beautyproject1-81357-default-rtdb.firebaseio.com/beautybooking.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: enteredName,
            phone: enteredPhone,
            message: enteredMessage,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await app.json();
      console.log(data);
      if (app.status === 200) {
        resetName("");
        resetPhone("");
        resetMessage("");
        setsubmitMessage("The appointment was successfully completed!");
      } else {
        setsubmitMessage("Some error occured");
      }
    } catch (error) {
      console.log("Some error has occured.");
    }
  };

  const InputClasses =
    nameHasError && phoneHasError && messageHasError
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
            value={enteredName}
            onChange={changeNameInputHandler}
            onBlur={changeNameInputBlurHandler}
          />
          {nameHasError && (
            <p className="error-text"> Name must not be empty. </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="Phone">Phone</label>
          <input
            type="phone"
            placeholder="Enter your phone(e.g. +14155521...)"
            value={enteredPhone}
            onChange={changephoneInputHandler}
            onBlur={changephoneInputBlurHandler}
          />
          {phoneHasError && (
            <p className="error-text"> Phone must be not empty. </p>
          )}
        </div>
        <div className="form-control Message-form">
          <label htmlFor="Message">Message</label>
          <input
            placeholder="Your message"
            type="text"
            value={enteredMessage}
            onChange={changeMessageInputHandler}
            onBlur={changeMessageInputBlurHandler}
          />
          {messageHasError && (
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
