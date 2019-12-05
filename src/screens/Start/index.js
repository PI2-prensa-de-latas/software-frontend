import React from 'react';

import Start from './../../components/Start';
import LoginHeader from './../../components/LoginHeader';
import NetworkDetector from './../../components/NetworkDetector';

class StartScreen extends React.Component {

    render() {
        return (
            <>
                <LoginHeader/>
                <Start/>
            </>
        )
    }
}

export default NetworkDetector(StartScreen);