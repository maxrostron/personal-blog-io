/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { config } from "../../Constants";
import axios from "axios";
import "./Subscribe.css";

//So need to make this page look nicer & include a button for "resending verificaiton link"
// Also need to explore how to send custom "update" emails
// Also need to figure out how to sned emails from various domains i.e.
// Manage subscription preferences?
// verify@maxrostron.com for signup
// hey@mr.com for contact
// updates@maxrostron.com for blog posts.

export default function Subscribe() {
  const [subscribed, setSubscribed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customMessage, setCustomMessage] = useState(null);

  return (
    <div className="subscribe">
      <div className="subscribe__heading">
        <h1>Stay updated!</h1>
        <h2>
          Receive an email notification whenever I post a new article or update.
        </h2>
      </div>

      {subscribed ? (
        <Confirmation name={name} email={email} customMessage={customMessage} />
      ) : (
        <SubscribeForm
          setSubscribed={setSubscribed}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          setCustomMessage={setCustomMessage}
        />
      )}
    </div>
  );
}

function SubscribeForm({
  setSubscribed,
  name,
  email,
  setName,
  setEmail,
  setCustomMessage,
}) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [unsubscribe, setUnsubscribe] = useState(false);

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleSubscribe = (e) => {
    axios
      .post(`${config.url.API_URL}/api/user/signup`, {
        name: `${name}`,
        email: `${email}`,
      })
      .then(function (response) {
        setCustomMessage(response);
        setSubscribed(true);
      })
      .catch(function (error) {
        setErrorMsg(error.response.data);
        setUnsubscribe(true);
      });

    e.preventDefault();
  };

  const handleUnsubscribe = (e) => {
    axios
      .post(`${config.url.API_URL}/api/user/unsubscribe`, {
        name: `${name}`,
        email: `${email}`,
      })
      .then(function (response) {
        setErrorMsg(response.data);
        setUnsubscribe(false);
      })
      .catch(function (error) {
        setErrorMsg(error.response.data);
      });

    e.preventDefault();
  };

  return (
    <form
      onSubmit={unsubscribe ? handleUnsubscribe : handleSubscribe}
      className="subscribe__container"
    >
      <input
        className="subscribe__text-input"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Type your name..."
        required
      />

      <input
        className="subscribe__text-input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Type your email..."
        required
      />

      {errorMsg ? (
        <p style={{ color: "red", fontSize: "0.7rem", marginBottom: "1rem" }}>
          {errorMsg}
        </p>
      ) : null}

      <input
        type="submit"
        value={unsubscribe ? "Unsubscribe" : "Subscribe!"}
        className="subscribe__button"
      />
    </form>
  );
}

function Confirmation({ name, email, customMessage }) {
  const [response, setResponse] = useState(null);

  const handleClick = (e) => {
    axios
      .post(`${config.url.API_URL}/api/user/verification/resend`, {
        name: `${name}`,
        email: `${email}`,
      })
      .then(function (response) {
        setResponse(response);
      })
      .catch(function (error) {
        setResponse(error.response.data);
      });

    e.preventDefault();
  };
  return (
    <div className="subscribe__container">
      <p>&#9989;</p>
      <p>Success! Thank you for subscribing.</p>
      <br />
      <p>&#128235;</p>
      {customMessage ? (
        <p>
          {customMessage.data} <br /> <br /> To complete your sign up, please
          check your inbox for a confirmation email. It will be expire after one
          day.
        </p>
      ) : null}
      <br />
      <p>&#10068;</p>

      <p>
        Didn&apos;t receive an email? Make sure to check your spam inbox, or
        <a href="/" onClick={handleClick}>
          {" "}
          click here
        </a>{" "}
        to resend the link.
      </p>
      <br />
      {response ? <p>{response.data}</p> : null}
    </div>
  );
}
