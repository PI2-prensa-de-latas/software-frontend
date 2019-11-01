import React from 'react'

import {
    GiSodaCan
} from "react-icons/gi";

import axios from 'axios'
import styles from './style'
import './style.css';

export default class ProfileScore extends React.Component {

    state = {
        user: ''
    }
    
    componentDidMount(){
    axios.get('https://api.myjson.com/bins/ssseg')
        .then(response => this.setState({user: response.data}))
    }

    render() {
        return (
            <>
                <div style={styles.container} >
                    <img style={styles.score}/>
                </div>
                <div style={styles.circle}>
                    <div style={styles.scoreFont}>
                        {this.state.user.score}
                        <GiSodaCan></GiSodaCan>
                    </div>

                </div>
                
            </>
        )
    }
}