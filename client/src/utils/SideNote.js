/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Utilities.css";

function SideNote({ title, body }) {
  const [show, setShow] = useState(false);

  return (
    <div className="utility__sidenote-container">
      <div className="utility__sidenote-icon" onClick={() => setShow(!show)}>
        <div className="utility__sidenote-icon-inner">{show ? "i" : "+"}</div>
      </div>
      <div className="utility__sidenote-bar"></div>
      <div className="utility__sidenote-contents">
        <p>{title}</p>

        {show ? (
          <p>{body}</p>
        ) : (
          <p style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            Click &quot;+&quot; to reveal information
          </p>
        )}
      </div>
    </div>
  );
}

export default SideNote;
