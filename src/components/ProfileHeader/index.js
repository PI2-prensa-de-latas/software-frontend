import React from 'react'

import {
    MdMenu
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
    };

    componentDidMount = async () => {
        this.setState({user: this.props.user})
    };

    render() {
        console.log(this.state.user.name, 'user');
        return (
            <>
                <div style={styles.container}>
                    {this.state.user.profile_pic_uri !== '' ? (
                        <img style={styles.profilePic}
                            src={this.state.user.profile_pic_uri}
                            alt={""} 
                        />
                    ) : (
                        <img style={styles.profilePic}
                            src={defaultPic}
                            alt={""}
                        />
                    )}
                    <div style={styles.name}>
                        {this.state.user.name}
                        <Link to="/EditProfile">
                            <MdMenu style={styles.editIcon}/>
                        </Link>
                    </div>

                </div>
            </>
        )
    }
}