import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './QrCodeConfimartion.css';

class QrCodeConfimartion extends Component {
    render () {
        return (
            <div className="qrcode-confirmation">
                <h1>Conectado à maquina</h1>
                <p>Nome da Máquina</p>
            </div>
        )
    }
}

export default QrCodeConfimartion;