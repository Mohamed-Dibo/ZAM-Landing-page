import React from "react";
import icon1 from "../Assets/images/icon1.jpeg"
import icon2 from "../Assets/images/icon2.jpeg"
import icon3 from "../Assets/images/icon3.jpeg"
import dotPattern from "../Assets/images/Dot Pattern 2.png"
import ellipse from "../Assets/images/Ellipse 250.png"
import zidAppVideo from "../Assets/video/zidapp.gif"
import '../Styles/ZidApp.scss'
function ZidApps() {
  return (
    <section className="zid__app">
      <div className="container">
        <div className="row">
          <div className="content col-12 col-lg-5 mb-5 mb-xl-0 ps-4 ps-lg-0">
            <h2>كل ما تحتاجه لنمو متجرك فى مكان واحد</h2>
            <p>
              مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات
              وحلول سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
            </p>
            <ul>
              <li>
                <figure>
                  <img src={icon1} alt="icon" />
                </figure>
                <p>سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك</p>
              </li>
              <li>
                <figure>
                  <img src={icon2} alt="icon" />
                </figure>
                <p>دعم فني و تقني متكامل متوفر على مدار الساعة</p>
              </li>
              <li>
                <figure>
                  <img src={icon3} alt="icon" />
                </figure>
                <p>أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة</p>
              </li>
            </ul>
            <a href="#" className="btn__primary">
              تصفح التطبيقات <i className="far fa-chevron-left ms-1"></i>
            </a>
          </div>
          <div className="description__video col-12 col-lg-7">
            <figure className="dot__pattern">
              <img src={dotPattern} alt="" />
            </figure>
            <figure className="zidapp__gif">
              <img src={zidAppVideo} alt="" />
            </figure>
            <figure className="ellipse">
              <img src={ellipse} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZidApps;
