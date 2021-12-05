import React from "react";
import "./Contact.css";
import ComponentTitle from "../ComponentTitle/ComponentTitle";
import Contactcard from "../Contactcard/Contactcard";

import { Element } from "react-scroll";

const Contact = () => {
  const contactdet = [
    {
      icon: "fas fa-paper-plane",
      contactid: (
        <a href="mailto:cmprabhakarjan27@gmail.com">
          cmprabhakarjan27@gmail.com
        </a>
      ),
      title: "Email",
    },
    {
      icon: "fas fa-map-marker-alt",
      contactid: "Chennai, India",
      title: "Address",
    },
    {
      icon: "fas fa-phone",
      contactid: <a href="tel:8489397667">+918489397667</a>,
      title: "Phone",
    },
  ];
  return (
    <Element className="contact" id="contact">
      <ComponentTitle comptitle="Contact" />
      <div className="getintouch">
        {contactdet.map((detail, index) => (
          <Contactcard
            key={index}
            icon={detail.icon}
            contactid={detail.contactid}
            title={detail.title}
          />
        ))}
      </div>
    </Element>
  );
};
export default Contact;
