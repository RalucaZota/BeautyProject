import React from "react";
import { useState } from "react";
import "../Contact/Email.css";

export default function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [emailisTouched, setEmailisTouched] = useState(false);
  const enteredEmailisValid = email.trim() && email.includes("@") !== "";
  const EmailisInvalid = !enteredEmailisValid && emailisTouched;
  let formIsValid = false;

  if (enteredEmailisValid) {
    formIsValid = true;
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!enteredEmailisValid) {
      return;
    }
    console.log(email);
    setEmailisTouched(false);
    e.target.reset();

    try {
      let subscribe = await fetch(
        "https://beautyform-14679-default-rtdb.firebaseio.com/beautybooking.json",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await subscribe.json();
      console.log(data);
      if (subscribe.status === 200) {
        setEmail("");
        setSubscribeMessage("You have subscribed to our page.");
      } else {
        setMessage("Some error occured");
      }
    } catch (error) {
      console.log("Some error has occured.");
    }
  };
  const emailInputBlurHandler = (e) => {
    setEmailisTouched(true);
  };
  const emailInputClasses = EmailisInvalid
    ? "email-form invalid"
    : "email-form";
  return (
    <form onSubmit={handleSubmit}>
      <div className="email-general">
        <div className={`email-form ${emailInputClasses}`}>
          <label htmlFor="Email"> Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={emailInputBlurHandler}
          />
          {EmailisInvalid && (
            <p className="error-text2"> Email must not be empty. </p>
          )}
        </div>
      </div>
      <div>
        <button type="submit" className="email-button">
          SUBSCRIBE
        </button>
      </div>
      <div>
        {subscribeMessage ? <p className="mesaj">{subscribeMessage}</p> : null}
      </div>
    </form>
  );
}
