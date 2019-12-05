import React from 'react'

import styles from './style'

import headerImg from './../../assets/images/header_waves.svg'

/* eslint-disable */

export default class WaveHeader extends React.Component {
    render() {
        console.log(headerImg);
        return (
            <>
                <div style={styles.container}>
                    <img style={styles.img}
                         src={headerImg}
                         alt={"Wave Header"}
                    />
                    <p style={styles.title}>
                        {this.props.title}
                    </p>
                </div>
                <div style={styles.blankSpace}/>
            </>
        )
    }
}