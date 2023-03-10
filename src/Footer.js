import React from "react";
//import footerImg from "./img/logo (1).png";

//importing Footer.css
import './Footer.css';


function Footer() {
  return (
    <div className="container footer d-flex">
      <div className="copyright" style={{ color: "white" }}>
        <p>
          Copyright © RapidTech Software, Inc 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
