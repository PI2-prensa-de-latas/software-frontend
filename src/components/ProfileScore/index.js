import React from 'react'

import canImg from './../../assets/svg/canIconWhite.svg'

import styles from './style'
import './style.css';
import api from './../../services/api';

const USER_TOKEN = localStorage.getItem('token');
const USER_ID = localStorage.getItem('user');
const AuthStr = 'Bearer '.concat(USER_TOKEN);

export default class ProfileScore extends React.Component {

    state = {
        score: '',
    }

    componentDidMount() {
        this.setState({score: this.props.score})
    }

    render() {
        return (
            <>
                <div style={styles.container}>
                    <img style={styles.score}
                         alt=''/>
                </div>
                <div style={styles.circle}>
                    <div style={styles.scoreFont}>
                        {this.state.score.Score}
                        <img src={canImg} alt='' style={styles.smashedCan}/>
                    </div>
                </div>
            </>
        )
    }
}