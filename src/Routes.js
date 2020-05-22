import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";

class Routes extends React.Component {
  localstorage = () => {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
