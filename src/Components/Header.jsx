import React from "react";
import NavBar from "./NavBar";
import dotPattern from "../Assets/images/Dot Pattern 2.png"
import ellipse from "../Assets/images/Ellipse 250.png"
import headerVideo from "../Assets/video/9d22e51e16561f96575713284c465150.gif"
import '../Styles/Header.scss'
function Header() {
  return (
    <header>
      <div className="container">
        <NavBar />
        <div className="header__content">
          <h1>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
          <p>
            طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
            أرباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
          </p>
          <a href="#" className="btn__primary">
            تصفح التطبيقات <i className="far fa-chevron-left ms-1"></i>
          </a>
        </div>
        <div className="description">
          <figure className="dot__pattern">
            <img src={dotPattern} alt="" />
          </figure>
          <figure className="gif">
            <img
              src={headerVideo}
              alt=""
            />
          </figure>
          <figure className="ellipse">
            <img src={ellipse} alt="" />
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Header;
