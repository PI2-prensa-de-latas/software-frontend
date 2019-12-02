import React, { Component } from "react";
import styles from './style';
import logo from './../../assets/svg/logo.svg'
import login_waves from "../../assets/images/login_waves.svg";

export default class LoginHeader extends Component {
    render() {
        return (
            <div style={styles.container}>
                <img src={logo} alt='Logo' style={styles.logoIcon}/>
                <img src={login_waves} alt='login_waves' style={styles.loginWaves}/>
            </div>
        );
    }
}