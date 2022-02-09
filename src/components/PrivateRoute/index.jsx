import React from "react";
import PropTypes from "prop-types";
import { useLogin } from "../../contexts/loginContext";
import { Redirect } from "@reach/router";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isLoggedIn } = useLogin();
  return (
    <Route
      {...rest}
      render={() =>
        isLoggedIn ? <Component {...rest} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
