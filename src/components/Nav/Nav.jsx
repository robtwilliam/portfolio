import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import "./nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          <div className="nav__title">
            {/* <img src={icon} alt="Juliet logo" height="50px" width="50px"/> */}
            <span className="nav__title__text">Rob Wittstock</span>
          </div>
        </NavLink>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/projects?id=cyclistic-bikeshare"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Projects
              </NavLink>
            </li>
            {/* <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                CV
              </NavLink>
            </li> */}
            {/* <li className="nav__item">
              <NavLink
                to="/blog?id=8"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Blog
              </NavLink>
            </li> */}
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav__item">
              <a href="https://github.com/robtwilliam" target="_blank" className="nav__link" onClick={closeMenuOnMobile}>
                <IoLogoGithub size="22px" />
              </a>
            </li>
            <li className="nav__item">
              <a href="https://www.linkedin.com/in/robwittstock/" target="_blank" className="nav__link" onClick={closeMenuOnMobile}>
                <IoLogoLinkedin size="22px" />
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose color="white" size="22px" />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu color="white" size="22px" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;