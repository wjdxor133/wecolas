import React from "react";
import "./Header.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import logoText from "../images/logo_text.png";
import explore from "../images/explore.png";
import heart from "../images/heart.png";
import profile from "../images/profile.png";

class Header extends React.Component {
  render() {
    return (
      <nav className="Header">
        <div className="header-box">
          <div className="logo-option">
            <div className="header-logo">
              <img src={logo} alt="logo" className="logo-img" />
              <img src={logoText} alt="logo-text" className="logo-text" />
            </div>
          </div>
          <div className="logo-option">
            <div className="header-search">
              <FontAwesomeIcon className="i" icon={faSearch} size="7x" />
              <span>검색</span>
            </div>
            {/* {headerSearchNone = () => {<div className="header-searchNone">
              <div className="searchNone-firstItem">
              <FontAwesomeIcon className="i" icon={faSearch} size="7x" />
                <input type="text" placeholder="검색" />
              </div>
              <div className="searchNone-endItem">
                <i className="fa fa-times-circle" aria-hidden="true"></i>
              </div>
            </div>}  } */}
          </div>
          <div className="logo-option">
            <div className="header-item">
              <img src={explore} alt="explore" />
              <img src={heart} alt="heart" />
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
