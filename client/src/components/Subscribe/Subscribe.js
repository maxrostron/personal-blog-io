/* eslint-disable no-undef */
import React, { useState } from "react";
import { config } from "../../Constants";
import axios from "axios";

//So need to make this page look nicer & include a button for "resending verificaiton link"
// Also need to explore how to send custom "update" emails
// Also need to figure out how to sned emails from various domains i.e.
// verify@maxrostron.com for signup
// hey@mr.com for contact
// updates@maxrostron.com for blog posts.

function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    axios
      .post(`${config.url.API_URL}/api/user/signup`, {
        name: `${name}`,
        email: `${email}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <input type="submit" value="Subscribe!" />
    </form>
  );
}

export default Subscribe;
