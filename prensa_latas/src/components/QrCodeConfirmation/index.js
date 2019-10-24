import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style';

class QrCodeConfimartion extends Component {
    render () {
        return (
            <div style={style.qrcodeConfirmation}>
                <h1>Conectado à maquina</h1>
                <p>Nome da Máquina</p>
            </div>
        )
    }
}

export default QrCodeConfimartion;