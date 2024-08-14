import React from "react";
import fb from "../assets/images/fb-logp.webp";
import st from "../assets/images/strange-logo.webp";
import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-left">
        <h1>OUR COMPANY</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
      </div>

      <div className="footer-right">
        <div className="rleft">
          <h2>Head Office</h2>
          <p className="rp">
            500 Terry Francine Street San Francisco, CA 94158
          </p>
          <hr className="footer-hr" />
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>

        <div className="rright">
          <div className="texts">
            <h2>Operating Hours</h2>
            <p>Mon - Fri: 8am - 8pm</p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 9am - 8pm</p>
          </div>

          <div className="logos">
            <img src={fb} alt="Facebook logo" />
            <img src={st} alt="Strange logo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
