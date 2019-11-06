import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import style from './style';
import logo from '../../assets/images/logo.svg';
import check from '../../assets/images/check_circle.svg';

class QrCodeConfimartion extends Component {
    render () {
        return (
            <div style={style.qrcodeConfirmation}>
                <div style={style.connected}>
                    <p>Conectado à máquina</p>
                </div>
                <p style={style.machine}>{this.props.name}</p>
                <img src={logo} alt='Logo' style={style.logo} />
                <img src={check} alt='Check' style={style.check} />
                <button style={style.button}>Prosseguir</button>
            </div>
        )
    }
}

export default QrCodeConfimartion;