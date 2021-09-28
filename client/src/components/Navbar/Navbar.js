import React, { useState } from "react";
import NavItem from "./nav-components/NavItem";
import "./Navbar.css";
import pageLogo from "./nav-components/logo_header_transparent.svg";
import { A } from "hookrouter";

const Navbar = () => {
  const [open, setOpen] = useState();
  const pathways = {
    made: {
      url: "/made",
      displayName: "Made:",
      pages: [
        { display: "This Website", url: "/this" },
        { display: "Coming Soon", url: "/soon" },
      ],
    },
    open: {
      url: "",
      displayName: "More:",
      pages: [
        { display: "Now", url: "/now" },
        { display: "Open", url: "/open" },
        { display: "Books", url: "/books" },
        { display: "Photos", url: "/photos" },
        { display: "My Gear", url: "/gear" },
        { display: "FAQ", url: "/faq" },
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
        <A href="/" className="navbar__logo">
          <img alt="logo" src={pageLogo} className="navbar__logo-icon"></img>
        </A>

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
