import { connect } from "react-redux";
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRouter extends Component {
  render() {
    const { component: Component, isLogged, ...rest } = this.props;
    console.log(isLogged);
    
    return (
      <Route
        {...rest}
        render={props =>
          isLogged === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLogged: auth.isLogged
});

export default connect(mapStateToProps, null)(PrivateRouter);
