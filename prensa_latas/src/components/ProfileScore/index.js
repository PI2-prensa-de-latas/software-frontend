import React from 'react'

import {
    GiSodaCan
} from "react-icons/gi";

import styles from './style'
import './style.css';
import headerImg from './../../assets/svg/arc.svg'

export default class ProfileScore extends React.Component {
    render() {
        return (
            <>
                <div style={styles.container} >
                    <img style={styles.score}/>
                </div>
                <div style={styles.circle}>
                    <div style={styles.scoreFont}>
                        480
                        <GiSodaCan></GiSodaCan>
                    </div>

                </div>
                
            </>
        )
    }
}