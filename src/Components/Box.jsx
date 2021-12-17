import React from "react";

function Box({ image, content }) {
  return (
    <div className="box-wrap col-12 col-md-6 col-lg-3 px-2 mb-3">
      <div className="box">
        <div className="header__box">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="info">
            <h4>
              قمرة
              <span className="ms-4">
                <i className="fas fa-star me-1"></i>5
              </span>
            </h4>
            <span className="author">
              <b>تطوير :</b>عمر برهوم
            </span>
          </div>
        </div>
        <div className="box__body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
