import React from "react";
import ContactForm from "../components/ContactForm";
import "../style/Footer.css";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import Githubicon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="leftFooter">
        <a
          href="https://www.google.com/maps/place/FCI/@30.0303514,31.208397,17z/data=!3m1!4b1!4m5!3m4!1s0x145846d0b10057a5:0xd0e400f8bc146e90!8m2!3d30.0303514!4d31.2105857"
          target="_blank"
          rel="noreferrer"
        >
          <div className="imgaa"></div>
        </a>
      </div>
      <div className="rightFooter">
        <ContactForm />
      </div>
      <div className='footer'>
            <div className="socialMedia">
              
                <a
                    href='https://github.com/mazen250'
                    target="_blank" rel='noopener noreferrer'
                >
                    <Githubicon className='icon' />
                </a>
                <a
                    href='https://wa.me/01005785550'
                    target="_blank" rel='noopener noreferrer'
                >
                    <WhatsappIcon className='icon' />
                </a>
                <a
                    href='https://www.facebook.com/mazen.fayezmano/'
                    target="_blank" rel='noopener noreferrer'
                >
                    <FacebookIcon className='icon' />
                </a>
                <a
                    href="https://www.instagram.com/biscotti_egy/"
                    target="_blank" rel='noopener noreferrer'
                >
                    <InstagramIcon className='icon' />
                </a>
            </div>
            <p className="copyright">&copy; 2022 MAZEN.COM</p>
        </div>
    </div>
  );
}

export default Footer;
