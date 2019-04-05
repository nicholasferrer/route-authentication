import React from 'react'
import { isAuthenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Login Page</h1>} />
            <PrivateRoute path="/app" component={() => <h1>You are logged in</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;