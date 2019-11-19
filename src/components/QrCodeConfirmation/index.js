import React, { Component } from 'react';
import style from './style';
import logo from '../../assets/images/logo.svg';
import check from '../../assets/images/check_circle.svg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import url from '../../env';

class QrCodeConfimartion extends Component {
    state = {
        machine_name: '',
        redirect_smashed_cans_list: false,
    }

    componentDidMount() {
        console.log(this.props.state.user_id)
        console.log(this.props.state.machine_id)
        this.getMachineName()
    }

    async getMachineName() {
        const current_url = `${url}/machine/${this.props.state.machine_id}`
        const response = await axios.get(current_url,
            {headers: {'Authorization': this.props.state.user_token}})
        const machine_name = response.data.alias;
        this.setState({ machine_name: machine_name });
    }

    setRedirectSmashedCansList = () => {
        this.setState({
            redirect_smashed_cans_list: true
        })
    }

    redirectSmashedCansList() {
        if(this.state.redirect_smashed_cans_list) {
            return <Redirect 
                to={{
                    pathname: "/SmashedCansList",
                    state: { user_token: this.props.state.user_token,
                             user_id: this.props.state.user_id,
                             machine_id: this.props.state.machine_id,
                             initial_timestamp: this.props.state.initial_timestamp}
                }} 
            />
        }
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
                {this.redirectSmashedCansList()}
                <button style={style.button} onClick={this.setRedirectSmashedCansList}>Prosseguir</button>
            </div>
        )
    }
}

export default QrCodeConfimartion;