import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem("isLogged") === "true" ? true : false;

  return (
    <Route
      {...rest}
      render={props =>
        isLogged === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
