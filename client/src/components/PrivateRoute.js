import React from  'react';
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = this.props.user[0];
  console.log(user);
  const isLoggedIn = user.isLoggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
         <Redirect to={{pathname: '/user/login', state: { from: props.location }}} />
        )
      }
    />
  )
};

export default PrivateRoute;