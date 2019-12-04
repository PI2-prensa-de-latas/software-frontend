import React from 'react'
import axios from 'axios'
import styles from './style'
import defaultPic from './../../assets/images/Pic.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/svg/logo.svg";
import {withRouter} from "react-router-dom";
import api from "../../services/api";


const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const URL = 'http://localhost:1337/user';

export default class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            user: ""
        };
    }

    componentDidMount = async () => {
        await axios
            .get(`${URL}/${USER_ID}`,
                {headers: {Authorization: AuthStr}})
            .then(response => this.setState({user: response.data}));

        if (this.state.user.pic === undefined) {
            this.setState({user: {...this.state.user, pic: defaultPic}})
        }
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0
            && this.state.name.length > 0 && this.state.password !== this.state.passwordConfirm;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const {name, email, password} = this.state;
        if (!name && !email) {
            this.setState({error: "Preencha alguns dos campos para editar"});
        } else {
            try {
                await api.patch("/user", {name, email, password});
            } catch (err) {
                console.log(err);
                this.setState({error: "Ocorreu um erro ao alterar sua conta. T.T"});
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
                            placeholder={this.state.user.name}
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
                            placeholder={this.state.user.email}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="password">
                        <Form.Control
                            style={styles.textInput}
                            value={this.state.password}
                            onChange={this.handleChange}
                            input type="file"
                            placeholder="senha"
                        />
                    </Form.Group>
                    <br></br>
                    <Button
                        style={styles.buttonInput}
                        block
                        type="submit"
                    >
                        Salvar
                    </Button>
                </Form>
            </div>
        );
    }
}
