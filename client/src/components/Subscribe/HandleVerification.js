/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { config } from "../../Constants";
import axios from "axios";

function HandleVerification({ code, email, token }) {
  const [verificationResponse, setVerificationResponse] = useState(null);
  const [resendLink, setResendLink] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    switch (code) {
      case "verify":
        axios
          .get(`${config.url.API_URL}/api/user/verification/${email}/${token}`)
          .then(function (response) {
            setVerificationResponse(`${response.data}`);
          })
          .catch(function (error) {
            setVerificationResponse(error.response.data);
            if (error.response.status === 400) {
              setResendLink(true);
            }
          });

        break;

      case "unsubscribe":
        axios
          .get(`${config.url.API_URL}/api/user/unsubscribe/${email}/${token}`)
          .then(function (response) {
            setVerificationResponse(`${response.data}`);
          })
          .catch(function (error) {
            setVerificationResponse(error.response.data);
          });

        break;

      default:
        break;
    }
  }, []);

  const handleClick = (e) => {
    axios
      .post(`${config.url.API_URL}/api/user/verification/resend`, {
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
      {verificationResponse ? <p>{verificationResponse}</p> : null}
      <br />
      {resendLink ? (
        <p>
          <a href="/" onClick={handleClick}>
            {" "}
            Resend verification link.
          </a>{" "}
        </p>
      ) : null}
      <br />
      {response ? <p>{response.data}</p> : null}
    </div>
  );
}

export default HandleVerification;
