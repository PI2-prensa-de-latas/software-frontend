import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './style';

export default class Home extends Component {

    render() {
        return (
            <div style={styles.container}>
                <Button
                    style={styles.buttonInput}
                    block
                    disabled={!this.validateForm()}
                    type="submit"
                >
                    Cadastre-se
                </Button>
                <Button
                    style={styles.buttonInput}
                    block
                    disabled={!this.validateForm()}
                    type="submit"
                >
                    Login
                </Button>


            </div>
        );
    }
}