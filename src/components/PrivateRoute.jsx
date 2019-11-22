/*import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component,...rest }) => {
  const isLoggIn = localStorage.getItem("isLogged") === "true" ? true : false;
  const { isLogged } = props;
  console.log(isLogged);
  
  return (
    <Route
      {...rest}
      render={props =>
        isLoggIn === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;*/
