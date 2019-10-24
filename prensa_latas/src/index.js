import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WaveHeader from './components/WaveHeader';
import NavBar from './components/NavBar';
import QrCodeConfirmationScreen from './screens/QrCodeConfirmation';

ReactDOM.render(
<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/QrCodeConfirmation" exact={true} component={QrCodeConfirmationScreen} />
        </Switch>
    </BrowserRouter>
//     <>
//         <WaveHeader title={'Título Exemplo'}/>
//         <p style={{ fontSize: 50 }}>
//                 This is a giant content
//         </p>
//         <p style={{ fontSize: 50 }}>
//                 This is a giant content
//         </p>
//         <p style={{ fontSize: 50 }}>
//                 This is a giant content
//         </p>
//         <p style={{ fontSize: 50 }}>
//                 This is a giant content
//         </p>
//         <p style={{ fontSize: 50 }}>
//                 This is a giant content
//         </p>
//         <p style={{ fontSize: 50 }}>
//                 This is a giant content
//         </p>
//         <p style={{ fontSize: 50 }}>
//                 This is a giant content
//         </p>
//         <NavBar/>
//     </>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
