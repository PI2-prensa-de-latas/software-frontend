import React from 'react'

import {
    MdEdit
} from "react-icons/md";

import axios from 'axios'
import styles from './style'

const USER_TOKEN = localStorage.getItem('token');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const URL = 'http://localhost:1337/user';

export default class ProfileHeader extends React.Component {
    
    state = {
        user: ''
    }
    
    componentDidMount(){
        axios
            .get(URL,
                {headers: {Authorization: AuthStr}})
        .then(response => this.setState({user: response.data}))
    }
    
    render() {
        return (
            <>
                <div style={styles.container} >
                    <img style={styles.profile_pic_uri}
                        src={this.state.user.pic}
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