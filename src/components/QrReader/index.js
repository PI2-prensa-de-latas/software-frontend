import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';
import './style.css';
import style from './style';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import url from '../../env';

class QrReaderCam extends Component {
    state = {
        result: 'No result',
        message_error: false,
        redirect_qr_code_confirmation: false,
        user_id: 1,
        user_token: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTczODQwNDUyfQ.vgumqjUn4yVXF5gMfXq41k4kGtbcovzJWxMZBAoY2LI',
        initial_timestamp: null,
        machine_id: 0,
    }

    handleScan = data => {
        if (data) {
            let result = data.split(":")
            let code = result[0]
            if (code === "prensaLatas") {
                let initial_timestamp = new Date()/1;
                let machine_id = result[1]
                machine_id = parseInt(machine_id)
                let current_url = `${url}/machine/${machine_id}`;
                this.updateConnectedUserMachine(current_url)
                this.setState({
                    redirect_qr_code_confirmation: true,
                    initial_timestamp: initial_timestamp,
                    machine_id: machine_id
                })
            } else {
                this.setState({
                    message_error: true,
                })
                console.log('error')
            }
            this.setState({
                result: data,
            })
        }
    }

    redirectQrCodeConfirmation = () => {
        if(this.state.redirect_qr_code_confirmation) {
            return <Redirect 
                to={{
                    pathname: "/QrCodeConfirmation",
                    state: { user_token: this.state.user_token,
                             user_id: this.state.user_id,
                             machine_id: this.state.machine_id,
                             initial_timestamp: this.state.initial_timestamp}
                }} 
            />
        }
    }

    async updateConnectedUserMachine (current_url) {
        axios.put(current_url, 
            {connectUser: this.state.user_id}, 
            {headers: {'Authorization': this.state.user_token}})
    }

    handleError = err => {
        console.error(err)
    }

    closeErrorMessage = message_error => {
        if (message_error) {
            this.setState({
                message_error: false,
            })
        }
    }

    render() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.renderErrorMessage}
                    onScan={this.handleScan}
                    className="qr-reader"
                />
                {console.log(this.state.result)}
                {this.redirectQrCodeConfirmation()}
                <div style={style.corner}>
                    <div style={Object.assign({}, style.top, style.left)}></div>
                    <div style={Object.assign({}, style.top, style.right)}></div>
                    <div style={Object.assign({}, style.bottom, style.left)}></div>
                    <div style={Object.assign({}, style.bottom, style.right)}></div>
                </div>
                <div style={style.cornerBorder}>
                </div>
                <div>
                    <Link to='/'>
                        <button style={style.back}>
                            <p style={style.arrow}></p>
                        </button>
                    </Link>
                </div>
                {this.state.message_error === true ? (
                    <div style={style.popupError}>
                        <p style={style.popupError.p}>Não Parece um QR Code nosso :(</p>
                        <button onClick={this.closeErrorMessage} style={style.popupError.button}>Ok</button>
                    </div>
                ) : (
                        <div></div>
                    )}
            </div>
        )
    }
}

export default QrReaderCam;