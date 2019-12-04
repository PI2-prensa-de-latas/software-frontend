import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cam from './screens/Cam';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import QrCodeConfirmationScreen from './screens/QrCodeConfirmation';
import SmashedCansListScreen from './screens/SmashedCansList';
import PromoScreen from './screens/Promo';

import ProfileScreen from './screens/Profile';
import EditProfileScreen from './screens/EditProfile';

import LoginScreen from './screens/Login';
import StartScreen from './screens/Start';

import RegisterScreen from './screens/Register';
import { isAuthenticated } from "./services/auth";
import MapScreen from './screens/Map';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (

                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/Start", state: { from: props.location } }} />
            )
        }
    />
);

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Redirect to={{ pathname: "/Profile", state: { from: props.location } }} />
            ) : (
                <Component {...props} />
            )
        }
    />
);


ReactDOM.render(
<BrowserRouter>
        <Switch>
            <PrivateRoute path="/QrReader" exact={true} component={Cam} />
            <PrivateRoute path="/QrCodeConfirmation" exact={true} component={QrCodeConfirmationScreen} />
			<PrivateRoute path="/SmashedCansList" exact={true} component={SmashedCansListScreen} />
            <PrivateRoute path="/Promo" exact={true} component={PromoScreen} />

            <PrivateRoute path="/Profile" exact={true} component={ProfileScreen} />
            <PublicRoute path="/EditProfile" exact={true} component={EditProfileScreen} />

            <PrivateRoute path="/Map" exact component={MapScreen} />

            <PublicRoute path="/Login" exact component={LoginScreen} />
            <PublicRoute path="/Start" exact component={StartScreen} />
            <PublicRoute path="/Register" exact component={RegisterScreen} />

        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
