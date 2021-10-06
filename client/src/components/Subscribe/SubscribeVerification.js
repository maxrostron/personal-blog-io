/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

function SubscribeVerification({ code, value }) {
  const [verificationResponse, setVerificationResponse] = useState(null);

  useEffect(() => {
    switch (code) {
      case "unknown":
        setVerificationResponse(
          `We were unable to find an account associated with ${value}. Please subscribe first.`
        );
        break;
      case "verified":
        setVerificationResponse(`${value} has already been verified.`);
        break;

      case "error":
        setVerificationResponse(`${value}`);
        break;

      case "success":
        setVerificationResponse(
          `${value} has been successfully verified! You will now receive email notifications whenever a new update is posted.`
        );
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="subscribe__container">
      {verificationResponse ? <p>{verificationResponse}</p> : null}
    </div>
  );
}

export default SubscribeVerification;
