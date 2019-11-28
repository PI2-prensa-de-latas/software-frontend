import React, { Component } from 'react';
import style from './style';
import logo from '../../assets/images/logo.svg';
import check from '../../assets/images/check_circle.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from '../../env';

class QrCodeConfimartion extends Component {
    state = {
        machine_name: '',
        user_token: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTczODQwNDUyfQ.vgumqjUn4yVXF5gMfXq41k4kGtbcovzJWxMZBAoY2LI'
    }

    componentDidMount() {
        this.getMachineName()
    }

    async getMachineName() {
        const current_url = `${url}/machine/${this.props.state.machine_id}`
        const response = await axios.get(current_url,
            {headers: {'Authorization': this.props.state.user_token}})
        const machine_name = response.data.alias;
        this.setState({ machine_name: machine_name });
    }

    render () {
        return (
        <div style={style.qrcodeConfirmation}>
            <div style={style.connected}>
                <p>Conectado à máquina</p>
            </div>
            <p style={style.machine}>{this.state.machine_name}</p>
            <img src={logo} alt='Logo' style={style.logo} />
            <img src={check} alt='Check' style={style.check} />
            <Link to={{
                pathname: "/SmashedCansList",
                state: {
                            user_id: this.props.state.user_id,
                            machine_id: this.props.state.machine_id,
                            initial_timestamp: this.props.state.initial_timestamp}
                }}>
                <button style={style.button}>Prosseguir</button>
            </Link>
        </div>)
    }
}

export default QrCodeConfimartion;