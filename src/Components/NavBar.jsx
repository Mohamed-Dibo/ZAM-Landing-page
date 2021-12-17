import React from 'react'
import logo from "../Assets/images/zid-logo 1.png"
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav links__container">
              <li className="nav-item">
                <a className="nav-link text-black" aria-current="page" href="#">
                  الرئيسية
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  التصنيفات
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  التطبيقات
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black">طور تطبيق</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
