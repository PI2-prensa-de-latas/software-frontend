import React, {Component} from "react";
import Button from 'react-bootstrap/Button'
import styles from './style';
import { NavLink } from 'react-router-dom'

export default class Start extends Component {

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.containerButton}>

                    <NavLink to="/Register" style={styles.buttonInput}> Cadastre-se </NavLink>

                    <NavLink to="/Login" style={styles.buttonInput}> Login </NavLink>

                    <div style={styles.text}>
                        Recuperar senha
                    </div>
                </div>

            </div>
        );
    }
}