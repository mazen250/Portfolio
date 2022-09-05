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
      {/* <div className="footer">
        <div className="left">
          <h1>WORKING HOURS </h1>
          <div className="hours">
            <p>Sunday-Thursday 10 AM - 8 PM</p>
            <p>Friday-Saturday 12 PM - 8 PM</p>
          </div>
        </div>
        <div className="right">
          <h1>ADDRESS</h1>
          <div className="hourss">
            <p>SOUL GYM -Sheraton heliopolis</p>
            <p>12 Ahmed zaki st.</p>
          </div>
        </div>
      </div>
      <p>&copy; 2022 ABDELRAHMAN ATWA</p> */}
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
