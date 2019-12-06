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
import defaultPic from "../../assets/images/Pic.png";

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const AuthStrImg = 'Client-ID '.concat('82ac7643e61293e');


export default class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            user: "",
            img: null,
            img_link: "",
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

    handleChangeFields = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleChangeImage = event => {
        this.setState({
            img: event.target.files[0],
        })
    }

    handleSubmit = async e => {
        console.log(this.state.user)
        e.preventDefault();
        let {name, email, img, img_link} = this.state;

        // const current_user = await axios.get(`user/${USER_ID}`, {headers: {Authorization: AuthStr}})
        console.log(name)
        console.log(email)
        console.log(img)
        if(name==='')
        {
            name=this.state.user.name
        }
        if(email==='') {
            email=this.state.user.email
        }
        if(img===null)
        {
            img_link=this.state.user.profile_pic_uri
        }
        console.log(name);
        console.log(email);
        console.log(img);
        console.log("upload button");
        
        // blob = img.blob()
        if (img) {
            var formData = new FormData()
            formData.append('type', 'file')
            formData.append('image', img, img.name)
        }

        console.log(img)

        try {
            if (img) {
                await axios.post("https://api.imgur.com/3/image", 
                    img, 
                    {headers: {Authorization: AuthStrImg}}
                ).then(response => {
                    console.log(response.data.data.link)
                    img_link = response.data.data.link
                })
            }

            await api.patch(`user/${USER_ID}`, {
                "name": name,
                "email": email,
                "profile_pic_uri": img_link,
            }, {headers: {Authorization: AuthStr}},).then(response => console.log(response))
            .then( () => {
                window.location.reload();
            })
            console.log("upload image");

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
                    {this.state.user.profile_pic_uri !== '' ? (
                        <img src={this.state.user.profile_pic_uri} alt='Logo' style={styles.profilePic}/>
                    ) : (
                        <img src={defaultPic} alt='Logo' style={styles.profilePic}/>
                    )}

                    <Form.Group controlId="img">
                        <div className="image-upload">
                            <label style={styles.camIcon} htmlFor="file-input">
                                <img src={camIcon} alt='Camera Icon'/>
                            </label>
                            <input id="file-input" onChange={this.handleChangeImage} type="file"/>
                        </div>
                    </Form.Group>

                    {this.state.img !== null ? (
                        <p style={styles.picName}>{this.state.img.name}</p>
                    ) : (
                        <p></p>
                    )}

                    <Form.Group controlId="name">
                        <Form.Control
                            style={styles.textInput}
                            autoFocus
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChangeFields}
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
                            onChange={this.handleChangeFields}
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
