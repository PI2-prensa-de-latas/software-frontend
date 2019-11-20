import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './style';
import api from "../../services/api";
import { login } from "../../services/auth";

export default class Login extends Component {
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

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                const response = await api.post("/login", { email, password });
                login(response.data.token);
                this.props.history.push("/Profile");
            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    };

    render() {
        return (
            <div style={styles.container}>
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