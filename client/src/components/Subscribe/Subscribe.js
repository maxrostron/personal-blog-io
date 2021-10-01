/* eslint-disable no-undef */
import React, { useState } from "react";
import { config } from "../../Constants";
import axios from "axios";

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
