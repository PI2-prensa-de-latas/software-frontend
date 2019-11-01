import React from 'react'

import styles from './style'

export default class ProfileScore extends React.Component {
    render() {
        return (
            <>
                <div style={styles.container} >
                    <img style={styles.img}
                        src={props.user.score}
                    />
                </div>
                <div style={styles.blankSpace} />
            </>
        )
    }
}