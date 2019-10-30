import React from 'react';

import styles from './style';

export default class PromoItem extends React.Component {
    render() {
        let item = this.props.item;

        return (
            <div style={styles.container}>
                <div style={styles.imgContainer}>
                    <img
                        style={styles.img}
                        src={item.img}
                    />
                </div>
                <div style={styles.infoContainer}>
                    <div style={styles.title}>
                        {item.name}
                    </div>
                    <div style={styles.labelContainer}>
                        <div style={styles.label}>

                        </div>
                        <div style={styles.label}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}