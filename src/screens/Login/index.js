import React from 'react';

import Login from './../../components/Login';
import LoginHeader from './../../components/LoginHeader';
import Header from './../../components/Header';
import NetworkDetector from './../../components/NetworkDetector';

class LoginScreen extends React.Component {

    render() {
        return (
            <>
                <Header link={"/Start"} title={""} fill={"white"}/>
                <LoginHeader/>
                <Login/>
            </>
        )
    }
}

export default NetworkDetector(LoginScreen);