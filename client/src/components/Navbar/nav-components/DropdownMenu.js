/* eslint-disable react/prop-types */
import React from "react";

function DropdownMenu({ pathway }) {
  const pages = pathway.pages;
  const url = pathway.url;
  return (
    <ul className="navbar__drop-down-menu">
      {pages.map((page, index) => {
        return (
          <li key={index}>
            <a className="navbar__drop-down-item" href={`${url}/${page}`}>
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownMenu;
