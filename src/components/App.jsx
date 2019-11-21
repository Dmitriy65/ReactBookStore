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
import PrivateRoute from "../components/PrivateRoute";
import { Button, Welcom } from "../components/HelpComponents";

class App extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { isLogged } = this.props;
    const username = localStorage.getItem("username");
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/profile" />}>
              <Welcom>
                Welcome in our bookStore!
                <br />
                Please select any option to continue using our book store`
              </Welcom>
              <Button>
                <Link to="/profile">
                  Come in your profile{" "}
                  {isLogged === true
                    ? `(${username} you have already authorized)`
                    : "by enter pass and email"}
                </Link>
              </Button>
              <Button>
                <Link to="/signup">Register new user in the system</Link>
              </Button>
            </Route>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
