import React, { Component } from 'react';
import style from './style';
import logo from '../../assets/images/logo.svg';
import check from '../../assets/images/check_circle.svg';
import { Link } from 'react-router-dom';
import api from './../../services/api';

const USER_TOKEN = localStorage.getItem('token');
const AuthStr = 'Bearer '.concat(USER_TOKEN);

class QrCodeConfimartion extends Component {
    state = {
        machine_name: '',
    }

    componentDidMount() {
        this.getMachineName()
    }

    async getMachineName() {
        const response = await api.get(`/machine/${this.props.data.machine_id}`,
            {headers: {'Authorization': AuthStr}})
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
                data: {
                            machine_id: this.props.data.machine_id,
                            initial_timestamp: this.props.data.initial_timestamp}
                }}>
                <button style={style.button}>Prosseguir</button>
            </Link>
        </div>)
    }
}

export default QrCodeConfimartion;