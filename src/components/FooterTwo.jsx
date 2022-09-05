import React, { useEffect } from "react";
import "../style/footerTwo.css";
import gmail from "../images/email.png";
import location from "../images/location.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="footerContainer" id="contact">
      <div
        className="footer"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-easing="ease-in-out"
      >
        <div className="contact">
          <h1>contact us</h1>
          <div className="mail">
            <img src={gmail} alt="" width={17} />
            <a href="mailto:mazenfayez56@gmail.com" target="blank">
              mazenfayez56@gmail.com
            </a>
          </div>
          <div className="loc">
            <img src={location} alt="" width={13} />
            <p>el nozha el gdida ,Cairo</p>
          </div>
        </div>

        <div className="soc">
          <h1>Social Media</h1>
          <div className="bottunns">
            <div className="buttonn">
              <a href="https://www.facebook.com/mazen.fayezmano" target="blank">
                {" "}
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="buttonn">
              <a href="https://www.instagram.com/mazenfayez/" target="blank">
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="buttonn">
              <a
                href="https://www.linkedin.com/in/mazen-fayez-31b693152/"
                target="blank"
              >
                {" "}
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copy">
        &copy; all copyrights reserved to <span>Mazen Fayez</span>
      </p>
    </div>
  );
};

export default Footer;
