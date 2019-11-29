import React from 'react'

import {
    MdEdit
} from "react-icons/md";

import axios from 'axios'
import styles from './style'
import defaultPic from './../../assets/images/Pic.png'


const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const URL = 'http://localhost:1337/user';

export default class ProfileHeader extends React.Component {

    state = {
        user: ''
    }

    componentDidMount = async () => {
        await axios
            .get(`${URL}/${USER_ID}`,
                {headers: {Authorization: AuthStr}})
            .then(response => this.setState({user: response.data}));

        if (this.state.user.pic === undefined) {
            this.setState({user: {...this.state.user, pic: defaultPic}})
        };
    }

    render() {
        return (
            <>
                <div style={styles.container}>
                    <img style={styles.profilePic}
                         src={this.state.user.pic}
                         alt={""}
                    />
                    <div style={styles.name}>
                        {this.state.user.name}
                        <MdEdit style={styles.editIcon}/>
                    </div>

                </div>
            </>
        )
    }
}