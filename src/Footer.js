import React from "react";
import footerImg from "./img/logo (1).png";

//importing Footer.css
import './Footer.css';


function Footer() {
  return (
    <div
      className="footer"
      /*style={{ padding: "10px 20px", zIndex: "100" }}*/
    >
      <img src={footerImg} alt="" className="footer__img pointer" />
      <span
        className="copyright"
        style={{ color: "white", fontSize: "10px", opacity: "0.75" }}
      >
        <p>Developed with love by Irvene Kwambana, founder and Lead Software Engineer at BluFlareSoftware.</p>
        <br></br>
        <p>Copyright© BluFlareSoftware, Inc.</p>
        <p>All Rights Reserved, 2022 production.</p> 
      </span>
    </div>
  );
}

export default Footer;
