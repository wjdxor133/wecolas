import React from "react";
import "./Header.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../images/logo.png";
import logoText from "../images/logo_text.png";
import explore from "../images/explore.png";
import heart from "../images/heart.png";
import profile from "../images/profile.png";
import Login from "../pages/Login/Login";

class Header extends React.Component {
  state = {
    checked: false,
    statusValue: "",
  };
  //로그 아웃
  logOut = () => {
    if (localStorage.getItem("token")) {
      toast.success("성공", {
        position: "bottom-center",
      });
      // prompt("로그아웃 하시겠습니까?");
      // localStorage.removeItem("token");
      // this.setState({ checked: true, statusValue: "200" }, () => {
      //   console.log(this.state.checked, this.state.statusValue);
      // });

      //this.props.his.history.push("/");
    } else {
      toast.error("token 지워짐", {
        position: "bottom-center",
      });
    }
  };

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
            {/* 검색 창 누르면 바뀌는 로직
            headerSearchNone = () => {<div className="header-searchNone">
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
              <img
                src={profile}
                alt="profile"
                onClick={
                  this.state.checked ? (
                    <Login checked={this.state.statusValue} />
                  ) : (
                    this.logOut
                  )
                }
              />
              <ToastContainer />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
