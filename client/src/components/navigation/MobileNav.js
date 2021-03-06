import React from "react";
import { NavLink } from 'react-router-dom';

const MobileNav = (props) => {
    let overlayState;
    let mobileSlideout;
    if (props.mobileToggle === true && props.mobileView === true) {
          overlayState =  "overlay--active";
          mobileSlideout = "mobile-nav--slide-out"
        } else {
          overlayState = "overlay--hidden";
          mobileSlideout = "";
        }
      return (
        <div>
        <div className={`overlay ${overlayState}`}></div>
        <div className={`mobile-nav ${mobileSlideout}`}>
        <ul className="mobile-nav__list">
        <span className="mobile-nav__list__item mobile-nav__list__item__close-icon">
              <span className="mobile-nav__list__item__close-icon--close" onClick={props.toggleBtn}>
              <i className="far fa-times-circle"></i>
              </span>
            </span>
            <NavLink onClick={props.toggleBtn} className="mobile-nav__list__item" to="/skills" activeClassName="mobile-nav-active">
              <li>Skills</li>
            </NavLink>
            <NavLink onClick={props.toggleBtn} className="mobile-nav__list__item" to="/work-history" activeClassName="mobile-nav-active">
              <li>Work History</li>
            </NavLink>
            <NavLink onClick={props.toggleBtn} className="mobile-nav__list__item" to="/projects" activeClassName="mobile-nav-active">
              <li>Projects</li>
            </NavLink>
            <NavLink onClick={props.toggleBtn} className="mobile-nav__list__item" to="/education" activeClassName="mobile-nav-active">
              <li>Education</li>
            </NavLink>
            <NavLink onClick={props.toggleBtn} className="mobile-nav__list__item" to="/contact" activeClassName="mobile-nav-active">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    )
}

export default MobileNav;
