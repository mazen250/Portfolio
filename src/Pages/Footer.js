import React from "react";
import ContactForm from "../components/ContactForm";
import "../style/Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="leftFooter">
        <a
          href="https://www.google.com/maps/place/FCI/@30.0303514,31.208397,17z/data=!3m1!4b1!4m5!3m4!1s0x145846d0b10057a5:0xd0e400f8bc146e90!8m2!3d30.0303514!4d31.2105857"
          target="_blank"
        >
          <div className="imgaa"></div>
        </a>
      </div>
      <div className="rightFooter">
        <ContactForm />
      </div>
    </div>
  );
}

export default Footer;
