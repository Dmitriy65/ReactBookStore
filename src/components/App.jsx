import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import HomePage from "../containers/HomePage";
import PrivateRouter from "../containers/PrivateRouter";
import { button, welcome } from "./StyledElems";

class App extends Component {
  async componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { isLogged } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />}>
            <div style={welcome}>
              Welcome in our bookStore!
              <br />
              Please select any option to continue using our book store
            </div>
            <div style={button}>
              <Link to="/profile">
                Come in your profile{" "}
                {isLogged === true
                  ? `(you have already authorized)`
                  : "by enter password and email"}
              </Link>
            </div>
            <div style={button}>
              <Link to="/signup">Register new user in the system</Link>
            </div>
          </Route>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRouter path="/profile" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
