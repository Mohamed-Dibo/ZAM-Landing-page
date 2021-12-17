import React from "react";
import footerImage from "../Assets/images/footerImage.png"
import '../Styles/Footer.scss'
function Footer() {
  return (
    <footer>
      <figure>
        <img src={footerImage} alt="logo" />
      </figure>
      <ul className="icons">
        <li>
          <i className="fab fa-youtube"></i>
        </li>
        <li>
          <i className="fab fa-linkedin-in"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
