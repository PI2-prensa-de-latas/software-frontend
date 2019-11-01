import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cam from './screens/Cam';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QrCodeConfirmationScreen from './screens/QrCodeConfirmation';
import PromoScreen from './screens/Promo';

ReactDOM.render(
<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/QrReader" exact={true} component={Cam} />            
            <Route path="/QrCodeConfirmation" exact={true} component={QrCodeConfirmationScreen} />
            <Route path="/Promo" exact={true} component={PromoScreen} />
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
