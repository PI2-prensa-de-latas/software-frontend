import React from 'react';

import style from './style'

export default class NavBar extends React.Component {
    render () {
        return (
            <div style={style.containner}>
                <div style={style.bar}>
                </div>
                <div style={style.qrButton}>
                </div>
            </div>
        )
    }
}