import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.scss";
import Routes from "./Routes";
// import Login from "./Login/Login";
// import Main from "./pages/Main/Main";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    {/* <Main /> */}
    {/* <Login /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
