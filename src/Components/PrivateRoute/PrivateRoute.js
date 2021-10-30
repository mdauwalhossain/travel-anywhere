import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
// console.log(children);
    const {user}= useAuth();
// console.log(user);
    return (
        <div>
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state:  {from: location}
                }}
              />
            )
          }
        />
        </div>
    );
};

export default PrivateRoute;