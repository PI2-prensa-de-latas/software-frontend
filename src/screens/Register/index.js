import React from 'react';
import colors from './../../style/colors'

import Register from './../../components/Register';
import Header from './../../components/Header';
import NetworkDetector from './../../components/NetworkDetector';

class RegisterScreen extends React.Component {

    render() {
        return (
            <>
                <Header link={"/Start"} title={""} background={'rgba(0,0,0,0)'} fill={colors.MidGreen}/>
                <Register/>
            </>
        )
    }
}

export default NetworkDetector(RegisterScreen);