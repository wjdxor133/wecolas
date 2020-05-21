import React from "react";
import img from "../../images/logo_text.png";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
      idChecked: false,
      pwChecked: false,
      btnColor: "#b2dffc",
    };
  }

  //메인으로 이동
  goToMain = () => {
    if (this.state.localValue) {
      this.props.history.push("/Main");
    }
  };

  // 아이디 값 체크
  idInputCheck = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.value.includes("@")) {
      this.setState({ idChecked: true }, () => this.btnChangeColor());
    } else {
      this.setState({ idChecked: false }, () => this.btnChangeColor());
    }
  };

  // 비밀번호 값 체크
  pwInputCheck = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.value.length >= 5) {
      this.setState(
        { [event.target.name]: event.target.value, pwChecked: true },
        () => this.btnChangeColor()
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
    console.log("사용자 ID :", this.state.id);
    console.log("사용자 Password :", this.state.password);
    // this.goToMain();
  };

  // API 연결
  handleSubmit = () => {
    // const data = {
    //   id: this.state.id,
    //   password: this.state.password,
    // };
    fetch("http://10.58.5.168:8000/api/user/login", {
      //post하고 싶을때는 이렇게 {}안에 정보를 넣는다 .
      method: "POST",
      headers: {
        "Content-Type": "application/json", //안써줘도 문제는 없는데 일단은.
      },
      body: JSON.stringify({
        id: this.state.id,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.Authorization) {
          localStorage.setItem("wtw_token", response.Authorization);
        } else {
          alert("nope");
        }
      });
  };

  render() {
    return (
      <div className="Login">
        <div className="login-form">
          <img src={img} alt="Logo" />
          <input
            className="userId"
            name="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.idInputCheck}
          />
          <input
            className="userPw"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={this.pwInputCheck}
          />
          <button
            className="loginBtn"
            type="button"
            style={{ backgroundColor: this.state.btnColor }}
            onClick={this.handleSubmit}
          >
            로그인
          </button>
        </div>
        <div className="signIn">
          <p>
            계정이 없으신가요?
            <a href="/Main">가입하기</a>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
