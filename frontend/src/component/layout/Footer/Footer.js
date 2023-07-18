import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Apna Bazzar</h1>
        <p>Naya Bharat Ka Apna Bazzar</p>

        <p>Copyrights {new Date().getFullYear()} &copy; SSJ</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/_.__swagat__._/">Instagram</a>
        <a href="https://www.linkedin.com/in/swagat-jena">LinkedIn</a>
        <a href="https://github.com/Swagat-Satprem-Jena">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
