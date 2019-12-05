import React from 'react'
import axios from 'axios'
import styles from './style'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import api from "../../services/api";
import './style.css'
import {logout} from "../../services/auth";

import {
    FiLogOut
} from "react-icons/fi";

import camIcon from "../../assets/svg/camIcon.svg";

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const AuthStrImg = 'Bearer '.concat('82ac7643e61293e');


export default class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            user: "",
            img: "",
            info: "",
            error: "",
        };
    }

    componentDidMount = async () => {
        this.setState({user: this.props.user})
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.name.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(this.state)
    };

    handleSubmit = async e => {
        e.preventDefault();
        let {name, email, img} = this.state;
        if(name==='')
        {
            name=this.state.name
        }
        if(email==='') {
            email=this.state.email
        }
        if(img==='')
        {
            img=this.img
        }
        console.log(name);
        console.log(email);
        
        console.log(img);
        console.log("upload button");

        try {
            await api.patch(`user/${USER_ID}`, {
                name,
                email,
                img,
            }, {headers: {Authorization: AuthStr}},).then(response => console.log(response));
            console.log("upload image");
            await axios.post("https://api.imgur.com/3/upload", {img}, {headers: {Authorization: AuthStrImg}}).then(response => (this.info = response))
            console.log(this.state.info)

        } catch (err) {
            console.log(err);
            this.setState({error: "Ocorreu um erro ao alterar sua conta. T.T"});
        }
    };

    handleLogout = async e => {
        console.log("asd");
        logout();
        window.location.href = '/Start';
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
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            defaultValue={this.state.user.name}
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
                            defaultValue={this.state.user.email}
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
                <div style={styles.containerLogin}>
                    <Button
                        style={styles.buttonLogout}
                        block
                        type="logout"
                        onClick={this.handleLogout}
                        name="logout"
                    >
                        <FiLogOut style={styles.logoutIcon}/> Log out
                    </Button>
                </div>

            </div>
        );
    }
}
