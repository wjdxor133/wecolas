import React from "react";
import img from "../../images/logo_text.png";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      userPW: "",
      idChecked: false,
      pwChecked: false,
      btnColor: "#b2dffc",
    };
  }

  // 메인으로 이동
  goToMain = () => {
    console.log(this.props);
    this.props.history.push("/Main");
  };

  // 아이디 값 체크
  idInputCheck = (event) => {
    this.setState({ userName: event.target.value });
    if (event.target.value.includes("@")) {
      this.setState({ idChecked: true }, () => this.btnChangeColor());
    } else {
      this.setState({ idChecked: false }, () => this.btnChangeColor());
    }
  };

  // 비밀번호 값 체크
  pwInputCheck = (event) => {
    this.setState({ userPW: event.target.value });
    if (event.target.value.length >= 5) {
      this.setState({ userName: event.target.value, pwChecked: true }, () =>
        this.btnChangeColor()
      );
    } else {
      this.setState({ pwChecked: false }, () => this.btnChangeColor());
    }
  };

  // 버튼 변화
  btnChangeColor = () => {
    if (this.state.idChecked && this.state.pwChecked) {
      this.setState({ btnColor: "#83ccfb" });
    } else {
      this.setState({ btnColor: "#b2dffc" });
    }
  };

  // 버튼 클릭
  btnClick = () => {
    console.log("사용자 ID :", this.state.userName);
    console.log("사용자 Password :", this.state.userPW);
    // this.goToMain();
  };

  render() {
    return (
      <div className="Login">
        <div className="login-form">
          <img src={img} alt="Logo" />
          <input
            className="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.idInputCheck}
          />
          <input
            className="userPw"
            type="password"
            placeholder="비밀번호"
            onChange={this.pwInputCheck}
          />
          <button
            className="loginBtn"
            type="button"
            style={{ backgroundColor: this.state.btnColor }}
            onClick={this.btnClick}
          >
            로그인
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
