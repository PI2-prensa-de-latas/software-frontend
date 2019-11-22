import React from 'react'

import canImg from './../../assets/svg/canIconWhite.svg'

import axios from 'axios'
import styles from './style'
import './style.css';
import defaultPic from "../../assets/images/Pic.png";

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const URL = 'http://localhost:1337/score';

export default class ProfileScore extends React.Component {

    state = {
        score: '',
    }

    componentDidMount() {
        axios
            .post(URL, {user: USER_ID}, {headers: {Authorization: AuthStr}},
            )
            .then(response => this.setState({score: response.data}));
        console.log('state', this.state)
    }

    render() {
        return (
            <>
                <div style={styles.container}>
                    <img style={styles.score}/>
                </div>
                <div style={styles.circle}>
                    <div style={styles.scoreFont}>
                        {this.state.score.Score}
                        <img src={canImg} alt='Logo' style={styles.smashedCan}/>
                    </div>
                </div>
            </>
        )
    }
}