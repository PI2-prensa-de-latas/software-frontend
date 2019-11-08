import React from 'react'

import styles from './style'
import axios from 'axios'
import './style.css';

export default class ProfileFeed extends React.Component {
    state = {
        notification: []
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/nvfr8')
            .then(response => this.setState({notification: response.data.notification}))
    }

    render() {
        console.log(this.state.notification[0])

        return (
            <>
                <div style={styles.containerFeed}>
                    <h1 style={styles.feed}>Feed:</h1>

                    <div>
                        {
                            this.state.notification.map((notification, ind) => { return (

                                <div style={styles.container} onclick="myFunction()">
                                    <div style={styles.imgContainer}>
                                        <img style={styles.img}src={notification.image}></img>
                                    </div>

                                    <div style={styles.infoContainer}>
                                        {notification.text}
                                    </div>
                                </div>

                            )} )
                        }
                    </div>

                </div>
            </>
        )
    }
}