import React, { Component } from "react";
import { Link } from "react-router-dom";
import DATA from "./DATA";
import LogoImage from "../../assets/logo.png";
import PhoneSvg from "../../assets/svgs/header-phone.svg";

import "./style.scss";

const isCurrent = (to, current) => {
  if (to === "/" && current === to) {
    return true;
  } else if (to !== "/" && current.includes(to)) {
    return true;
  }

  return false;
};

class Header extends Component {
  render() {
    const { isAuthenticated, current } = this.props;

    return (
      <div className="header">
        <div className="header-left">
          <div className="header-left__logo">
            <Link to="/">
              <img src={LogoImage} alt="Riseonic" />
            </Link>
          </div>
          <div className="header-left__menu">
            <ul id="links">
              {DATA.map((item, index) => (
                <li className={isCurrent(item.to, current) ? "current" : ""}>
                  <Link key={index} to={item.to}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right__terms">
            <ul className="header-right__items">
              <li
                className={
                  isCurrent("/", current)
                    ? "current header-right__items__phone"
                    : "header-right__items__phone"
                }
              >
                <Link to="/">
                  <img src={PhoneSvg} alt="phone" />
                </Link>
              </li>
              <li
                className={
                  isCurrent("/login", current)
                    ? "current header-right__items__login"
                    : "header-right__items__login"
                }
              >
                <div>
                  <Link to="/login">Login</Link>
                </div>
              </li>
              <li
                className={
                  isCurrent("/support", current)
                    ? "current header-right__items__support"
                    : "header-right__items__support"
                }
              >
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
