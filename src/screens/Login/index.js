import React from 'react';

import Login from './../../components/Login';
import LoginHeader from './../../components/LoginHeader';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <>
                <LoginHeader/>
                <Login/>
            </>
        )
    }
}