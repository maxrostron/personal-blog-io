/* eslint-disable react/prop-types */
import React from "react";
import { A } from "hookrouter";
import onClickOutside from "react-onclickoutside";

function DropdownMenu({ pathway, setOpen }) {
  const pages = pathway.pages;
  const url = pathway.url;

  DropdownMenu.handleClickOutside = () => setOpen("");

  return (
    <ul className="navbar__drop-down-menu">
      {pages.map((page, index) => {
        return (
          <li key={index}>
            <A className="navbar__drop-down-item" href={`${url}/${page}`}>
              {page}
            </A>
          </li>
        );
      })}
    </ul>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownMenu.handleClickOutside,
};

export default onClickOutside(DropdownMenu, clickOutsideConfig);
