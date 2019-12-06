import React from 'react';

import Login from './../../components/Login';
import LoginHeader from './../../components/LoginHeader';
import Header from './../../components/Header';
import NetworkDetector from './../../components/NetworkDetector';
import HttpsRedirect from 'react-https-redirect';


class LoginScreen extends React.Component {
    render() {
        return (
            <>
                <HttpsRedirect>
                    <Header link={"/Start"} title={""} fill={"white"}/>
                    <LoginHeader/>
                    <Login/>
                </HttpsRedirect>
            </>
        )
    }
}

export default NetworkDetector(LoginScreen);