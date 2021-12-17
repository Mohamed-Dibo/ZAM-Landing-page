import React, { useState } from "react";
import "../Styles/Scroll.scss";
function Scroll() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="scroll" style={{ display: visible ? "inline" : "none" }}>
      <div className="container">
        <div className="content">
          <button className="comment">
            <i className="fas fa-comments-alt"></i>
          </button>
          <button className="arrow" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
