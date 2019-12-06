import React from 'react';

import Start from './../../components/Start';
import LoginHeader from './../../components/LoginHeader';
import NetworkDetector from './../../components/NetworkDetector';
import HttpsRedirect from 'react-https-redirect';

class StartScreen extends React.Component {

    render() {
        return (
            <HttpsRedirect>
                <>
                    <LoginHeader/>
                    <Start/>
                </>
            </HttpsRedirect>
        )
    }
}

export default NetworkDetector(StartScreen);