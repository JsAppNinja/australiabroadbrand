import React, { Component } from "react";
import { Link } from "react-router-dom";
import DATA from "./DATA";
import LogoImage from "../../assets/logo.png";

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
          <div className="header-right" />
        </div>
      </div>
    );
  }
}

export default Header;
