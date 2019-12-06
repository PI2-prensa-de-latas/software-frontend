import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from './style';
import logo from "../../assets/svg/logo.svg";
import {withRouter} from "react-router-dom";
import api from "../../services/api";

class Register extends Component {
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
            && this.state.name.length > 0 && this.state.password !== this.state.passwordConfirm;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {name, email, password, passwordConfirm} = this.state;
        if (!name || !email || !password || !passwordConfirm) {
            this.setState({error: "Preencha todos os dados para se cadastrar"});
            alert("Preencha todos os dados para se cadastrar")
        } else if (password !== passwordConfirm) {
            alert("Sua senha precisa ser igual")
        } else {
            try {
                await api.post("/user", {name, email, password});
                this.props.history.push("/Login");
            } catch (err) {
                console.log(err);
                this.setState({error: "Ocorreu um erro ao registrar sua conta. T.T"});
            }
        }
    };

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
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(Register);