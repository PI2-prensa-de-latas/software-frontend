import React from 'react'

import styles from './style'
import './style.css';
import style from "../NavBar/style";


export default class ProfileFeed extends React.Component {
    state = {
        notification: [],
    }

    componentDidMount() {
        this.setState({notification: this.props.notification})
    }

    render() {
        return (
            <>
                <div style={styles.containerFeed}>
                    <h1 style={styles.feed}>Feed:</h1>

                    <div>
                        {
                            this.state.notification.map((notification, ind) => {
                                return (
                                    <div style={styles.container} onClick={() => this.redirectTo("/Profile")}>
                                        <div style={styles.imgContainer}>
                                            <img style={styles.img} src={notification.iconUri}
                                                 alt={"Notification"}
                                            ></img>
                                        </div>

                                        <div style={styles.infoContainer}>
                                            {notification.description}
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