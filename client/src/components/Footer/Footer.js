import React from "react";
import "./Footer.css";
import gitIcon from "./footer-components/github.svg";
import twitterIcon from "./footer-components/twitter.svg";
import linkedinIcon from "./footer-components/linkedin.svg";
import instagramIcon from "./footer-components/instagram.svg";

function Footer() {
  return (
    <footer className="footer__container">
      <a href="https://github.com/maxrostron">
        <img src={gitIcon} alt="Github Icon" />
      </a>
      <a href="https://twitter.com/maxrostron">
        <img src={twitterIcon} alt="Twitter Icon" />
      </a>
      <a href="https://www.linkedin.com/in/rostronmax/">
        <img src={linkedinIcon} alt="LinkedIn Icon" />
      </a>
      <a href="https://www.instagram.com/max_rostron/">
        <img src={instagramIcon} alt="Instagram Icon" />
      </a>
    </footer>
  );
}

export default Footer;
