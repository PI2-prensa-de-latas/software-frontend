import React from 'react'

import styles from './style'

import headerImg from './../../assets/images/header_waves.svg'

export default class WaveHeader extends React.Component {
    render() {
        return (
            <div style={styles.container} >
                <img style={styles.img}
                    src={headerImg}
                />
            </div>
        )
    }
}