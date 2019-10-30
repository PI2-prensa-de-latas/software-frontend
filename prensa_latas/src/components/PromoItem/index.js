import React from 'react';

import styles from './style';

export default class PromoItem extends React.Component {
    render() {
        let item = this.props.item;

        return (
            <div style={styles.container}>
                <img
                    src={item.img}
                />
                <h1>{item.name}</h1>
            </div>
        )
    }
}