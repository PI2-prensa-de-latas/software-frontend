import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './style';
import logo from "../../assets/svg/logo.svg";

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0
            && this.state.name.length > 0 && this.state.password != this.state.passwordConfirm;
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
                <Form style={styles.containerLogin} onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Control
                            style={styles.textInput}
                            autoFocus
                            type="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="nome"
                        />
                    </Form.Group>
                    <br></br>
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
                    <br></br>
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
                    <Form.Group controlId="passwordConfirm">
                        <Form.Control
                            style={styles.textInput}
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="confirme sua senha"
                        />
                    </Form.Group>
                    <br></br>
                    <Button
                        style={styles.buttonInput}
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Form>
            </div>
        );
    }
}