import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileHeader from './components/ProfileHeader';
import NavBar from './components/NavBar';
import WaveHeader from './components/WaveHeader';


ReactDOM.render(
    <>
        <WaveHeader/>
        <ProfileHeader/>
        <NavBar/>
    </>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
