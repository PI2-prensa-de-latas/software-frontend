import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import style from './style';
import logo from '../../assets/images/logo.svg';

class QrCodeConfimartion extends Component {
    render () {
        return (
            <div style={style.qrcodeConfirmation}>
                <div style={style.connected}>
                    <p>Conectado à máquina</p>
                </div>
                <p style={style.machine}>Nome da Máquina</p>
                <img src={logo} alt='Logo' style={style.logo} />
                <button onClick={this.closeErrorMessage} style={style.button}>Prosseguir</button>
            </div>
        )
    }
}

export default QrCodeConfimartion;