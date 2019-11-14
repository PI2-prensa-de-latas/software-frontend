import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './style';
import logo from './../../assets/svg/logo.svg'
import login_waves from "../../assets/images/login_waves.svg";

export default class LoginHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div style={styles.container}>
                <img src={logo} alt='Logo' style={styles.logoIcon}/>
                <img src={login_waves} alt='login_waves' style={styles.loginWaves}/>
                <Form style={styles.containerLogin} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Control
                            style={styles.textInput}
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="e-mail"
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            style={styles.textInput}
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="senha"
                        />
                    </Form.Group>
                    <br></br>
                    <Button
                        style={styles.buttonInput}
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}