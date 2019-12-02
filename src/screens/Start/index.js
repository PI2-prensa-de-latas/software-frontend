import React from 'react';

import Start from './../../components/Start';
import LoginHeader from './../../components/LoginHeader';

export default class StartScreen extends React.Component {

    render() {
        return (
            <>
                <LoginHeader/>
                <Start/>
            </>
        )
    }
}