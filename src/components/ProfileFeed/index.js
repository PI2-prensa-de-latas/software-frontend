import React from 'react'

import styles from './style'
import axios from 'axios'
import './style.css';
import style from "../NavBar/style";

const USER_ID = localStorage.getItem('user');
const USER_TOKEN = localStorage.getItem('token');
const AuthStr = 'Bearer '.concat(USER_TOKEN);
const URL = 'http://localhost:1337/Notification';


export default class ProfileFeed extends React.Component {
    state = {
        notification: []
    }

    //
    // componentDidMount() {
    //     axios
    //         .get(`${URL}/${USER_ID}`,
    //             {headers: {Authorization: AuthStr}})
    //         .then(response => this.setState({notification: response.data})).then()
    // }

    render() {
        console.log(this.state.notification[0])

        return (
            <>
                <div style={styles.containerFeed}>
                    <h1 style={styles.feed}>Feed:</h1>

                    <div>
                        {
                            this.state.notification.map((notification, ind) => {
                                return (
                                    <div style={styles.container} onClick={() => this.redirectTo(notification.link)}>
                                        <div style={styles.imgContainer}>
                                            <img style={styles.img} src={notification.image}
                                                 alt={"Notification"}
                                            ></img>
                                        </div>

                                        <div style={styles.infoContainer}>
                                            {notification.text}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={style.blankSpace}/>
                </div>
            </>
        )
    }

    redirectTo(sUrl) {
        console.log(sUrl);
        window.location.href = sUrl;
    }
}