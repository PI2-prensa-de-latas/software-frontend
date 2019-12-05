import React from 'react'

import {
    MdEdit
} from "react-icons/md";

import styles from './style'
import defaultPic from './../../assets/images/Pic.png'
import api from './../../services/api';
import {Link} from "react-router-dom";

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);

export default class ProfileHeader extends React.Component {

    state = {
        user: ''
    }

    componentDidMount = async () => {
        await api
            .get(`/user/${USER_ID}`, {
            headers: {Authorization: AuthStr}
        }) 
            .then( response => this.setState({user: response.data}) );

        if (this.state.user.pic === undefined) {
            this.setState({user: {...this.state.user, pic: defaultPic}})
        };
    }

    render() {
        console.log(this.state.user.name, 'user');
        return (
            <>
                <div style={styles.container}>
                    <img style={styles.profilePic}
                         src={this.state.user.pic}
                         alt={""}
                    />
                    <div style={styles.name}>
                        {this.state.user.name}
                        <Link to="/EditProfile">
                        <MdEdit style={styles.editIcon}/>
                        </Link>
                    </div>

                </div>
            </>
        )
    }
}