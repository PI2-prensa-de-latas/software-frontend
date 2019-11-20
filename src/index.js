import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cam from './screens/Cam';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QrCodeConfirmationScreen from './screens/QrCodeConfirmation';
import SmashedCansListScreen from './screens/SmashedCansList';
import PromoScreen from './screens/Promo';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/Login';
import StartScreen from './screens/Start';
import RegisterScreen from './screens/Register';
import MapScreen from './screens/Map';

ReactDOM.render(
<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/QrReader" exact={true} component={Cam} />            
            <Route path="/QrCodeConfirmation" exact={true} component={QrCodeConfirmationScreen} />
			<Route path="/SmashedCansList" exact={true} component={SmashedCansListScreen} />
            <Route path="/Promo" exact={true} component={PromoScreen} />
            <Route path="/Profile" exact={true} component={ProfileScreen} />
            <Route path="/Login" exact component={LoginScreen} />
            <Route path="/Start" exact component={StartScreen} />
            <Route path="/Register" exact component={RegisterScreen} />
            <Route path="/Map" exact component={MapScreen} />
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
