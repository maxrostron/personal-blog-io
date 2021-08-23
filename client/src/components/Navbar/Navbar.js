import React, { useState } from "react";
import NavItem from "./nav-components/NavItem";
import "./Navbar.css";
import pageLogo from "../../assets/images/logo_header_transparent.svg";

const Navbar = () => {
  const [open, setOpen] = useState();
  const pathways = {
    made: {
      url: "/made",
      displayName: "Made:",
      pages: [
        "25Veg",
        "Placeholder",
        "Placeholder",
        "Placeholder",
        "Placeholder",
      ],
    },
    open: {
      url: "/open",
      displayName: "Open:",
      pages: [
        "OKRs",
        "Media",
        "Beliefs",
        "Photos",
        "Gear",
        "FAQ",
        "This",
        "Now",
      ],
    },
    blog: {
      url: "/blog",
      displayName: "Blog",
      pages: [],
    },
    subscribe: {
      url: "/subscribe",
      displayName: "Subscribe",
      pages: [],
    },
    contact: {
      url: "/contact",
      displayName: "Contact",
      pages: [],
    },
  };

  return (
    <header className="navbar">
      <div className="navbar__contents">
        <div className="navbar__logo">
          <img alt="logo" src={pageLogo} className="navbar__logo-icon"></img>
          {/* <a className="navbar__logo-title">Max | Rostron</a> */}
        </div>

        <nav className="navbar_nav-item-container">
          <NavItem pathway={pathways.made} open={open} setOpen={setOpen} />
          <NavItem pathway={pathways.open} open={open} setOpen={setOpen} />
          <NavItem pathway={pathways.blog} open={open} setOpen={setOpen} />
          <NavItem pathway={pathways.subscribe} open={open} setOpen={setOpen} />
          <NavItem pathway={pathways.contact} open={open} setOpen={setOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;