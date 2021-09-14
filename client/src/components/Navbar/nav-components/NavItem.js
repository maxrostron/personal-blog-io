/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import { navigate } from "hookrouter";

function NavItem({ pathway, open, setOpen }) {
  const [dropDown, setDropDown] = useState(false);
  const [highlight, setHighlight] = useState("");
  let subscribeBtn = "";

  pathway.url === "/subscribe"
    ? (subscribeBtn = " subscribeBtn")
    : (subscribeBtn = "");

  useEffect(() => {
    pathway.pages.length > 0 && pathway.url === open
      ? (setDropDown(true), setHighlight("-highlight"))
      : (setDropDown(false), setHighlight(""));
  }, [open]);

  const handleClick = () => {
    pathway.pages.length > 0 ? setOpen(pathway.url) : navigate(pathway.url);
  };

  return (
    <>
      <div>
        <div
          style={{ color: highlight }}
          onClick={handleClick}
          className={"navbar__navitem" + highlight + subscribeBtn}
        >
          {pathway.displayName}
          {pathway.pages.length > 0 && (
            <span className={"navbar__caret" + highlight}></span>
          )}{" "}
        </div>

        {dropDown && <DropdownMenu pathway={pathway} setOpen={setOpen} />}
      </div>
    </>
  );
}

export default NavItem;
