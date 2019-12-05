import React from 'react'
import axios from 'axios'
import styles from './style'
import defaultPic from './../../assets/images/Pic.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from "../../services/api";
import './style.css'

import camIcon from "../../assets/svg/camIcon.svg";

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const AuthStrImg = 'Bearer '.concat('82ac7643e61293e');
const URL = 'http://localhost:1337/user';

export default class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            user: "",
            img: "",
            info: "",
        };
    }

    componentDidMount = async () => {
        await api
            .get(`/user/${USER_ID}`,
                {headers: {Authorization: AuthStr}})
            .then(response => this.setState({user: response.data}));

        if (this.state.user.pic === undefined) {
            this.setState({user: {...this.state.user, pic: defaultPic}})
        }
    }

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
        const {name, email, img} = this.state.user;
        console.log("upload button");

        if (!name && !email && !img) {
            this.setState({error: "Preencha alguns dos campos para editar"});
            console.log("error");
        } else {
            try {
                console.log("upload image");
                await axios.post("https://api.imgur.com/3/upload",{img},{headers: {Authorization: AuthStrImg}}).then(response => (this.info = response))
                console.log(this.state.info)
                await axios.patch(`${URL}/${USER_ID}`, {name, email, img}, {headers: {Authorization: AuthStr}},).then(response => console.log(response));
            } catch (err) {
                console.log(err);
                this.setState({error: "Ocorreu um erro ao alterar sua conta. T.T"});
            }
        }
    };

    render() {
        return (
            <div style={styles.container}>
                <Form style={styles.containerLogin} onSubmit={this.handleSubmit}>
                    <img src={this.state.user.pic} alt='Logo' style={styles.profilePic}/>

                    <Form.Group controlId="img">
                    <div className="image-upload">
                        <label style={styles.camIcon} htmlFor="file-input">
                            <img src={camIcon} alt='Camera Icon'/>
                        </label>
                        <input id="file-input" value={this.state.img} onChange={this.handleChange} type="file"/>
                    </div>
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Control
                            style={styles.textInput}
                            autoFocus
                            type="name"
                            value={this.state.user.name}
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
                            value={this.state.user.email}
                            onChange={this.handleChange}
                            placeholder={this.state.user.email}
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
