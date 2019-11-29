import React from 'react';
import colors from './../../style/colors'

import Register from './../../components/Register';
import Header from './../../components/Header';

export default class RegisterScreen extends React.Component {

    render() {
        return (
            <>
                <Header link={"/Start"} title={""} background={'rgba(0,0,0,0)'} fill={colors.MidGreen}/>
                <Register/>
            </>
        )
    }
}