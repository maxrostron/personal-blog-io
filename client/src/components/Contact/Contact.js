/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Contact.css";
import mailIcon from "./contact-assets/mail.svg";
import gitIcon from "./contact-assets/github.svg";
import instaIcon from "./contact-assets/instagram.svg";
import linkedIcon from "./contact-assets/linkedin.svg";
import twitterIcon from "./contact-assets/twitter.svg";

const contactList = [
  {
    type: "Email",
    icon: mailIcon,
    caption: "Send me an email",
    href: "mailto:hey@maxrostron.com",
    circleColor: "rgb(208, 244, 231)",
    iconColor:
      "invert(49%) sepia(13%) saturate(1991%) hue-rotate(131deg) brightness(92%) contrast(90%)",
  },
  {
    type: "Twitter",
    icon: twitterIcon,
    caption: "Tweet @ me",
    href: "https://twitter.com/maxrostron",
    circleColor: "rgb(224, 242, 254)",
    iconColor:
      "invert(89%) sepia(17%) saturate(6304%) hue-rotate(173deg) brightness(104%) contrast(98%)",
  },
  {
    type: "Github",
    icon: gitIcon,
    caption: "Profile on GitHub",
    href: "https://github.com/maxrostron/",
    circleColor: "rgb(245, 245, 244)",
    iconColor:
      "invert(100%) sepia(3%) saturate(795%) hue-rotate(301deg) brightness(89%) contrast(86%)",
  },
  {
    type: "LinkedIn",
    icon: linkedIcon,
    caption: "Connect with me",
    href: "https://www.linkedin.com/in/rostronmax/",
    circleColor: "rgb(219, 234, 254)",
    iconColor:
      "invert(72%) sepia(33%) saturate(3699%) hue-rotate(190deg) brightness(112%) contrast(108%)",
  },
  {
    type: "Instagram",
    icon: instaIcon,
    caption: "Follow me",
    href: "https://www.instagram.com/max_rostron/",
    circleColor: "rgb(247, 200, 206)",
    iconColor:
      "invert(40%) sepia(38%) saturate(2606%) hue-rotate(323deg) brightness(95%) contrast(95%)",
  },
];

function Contact() {
  console.log(typeof contactList);
  return (
    <div className="contact__container">
      <h1>Contact</h1>
      <span>
        Feel free to reach out to me through whatever medium you find is
        easiest. I&apos;m happy to answer questions, collaborate, or chat if I
        have the time.
      </span>
      <ul className="contact__cards-container">
        {contactList.map((contact, index) => {
          return <ContactCard contact={contact} key={index} />;
        })}
      </ul>
    </div>
  );
}

function ContactCard({ contact }) {
  console.log(contact.icon);

  const icon = contact.icon;
  return (
    <li className="contact__card">
      <div className="contact__card-image">
        <div
          style={{
            backgroundColor: `${contact.circleColor}`,
          }}
        />
        <img
          src={icon}
          alt="Twitter Icon"
          className={contact.iconClass}
          style={{
            filter: `${contact.iconColor}`,
          }}
        />
      </div>
      <div className="contact__card-text">
        <p>{contact.type}</p>
        <a href={contact.href}>{contact.caption} &#8594;</a>
      </div>
    </li>
  );
}

export default Contact;
