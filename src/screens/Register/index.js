import React from 'react';
import colors from './../../style/colors'

import Register from './../../components/Register';
import Header from './../../components/Header';
import NetworkDetector from './../../components/NetworkDetector';
import HttpsRedirect from 'react-https-redirect';

class RegisterScreen extends React.Component {

    render() {
        return (
            <>
                <HttpsRedirect>
                    <Header link={"/Start"} title={""} background={'rgba(0,0,0,0)'} fill={colors.MidGreen}/>
                    <Register/>
                </HttpsRedirect>
            </>
        )
    }
}

export default NetworkDetector(RegisterScreen);