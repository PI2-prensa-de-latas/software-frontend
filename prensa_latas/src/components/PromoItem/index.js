import React from 'react';

import styles from './style';
import colors from './../../style/colors';
import { compileFunction } from 'vm';

export default class PromoItem extends React.Component {

    styleOfRemain(remaining_time) {
        if (remaining_time.type !== 'd') {
            return {
                background: colors.Urgent,
                color: colors.White,
            }
        }
        if (remaining_time.quantity < 5) {
            return {
                background: colors.Warning,
                color: colors.Black,
            }
        }
        return {
            background: colors.MidGreen,
            color: colors.White
        }
    }

    parseTimeText(type) {
        switch (type) {
            case 'd': return 'dias';
            case 'h': return 'hrs';
            case 'm': return 'min';
            default : return '?';
        }
    }

    render() {
        let item = this.props.item;
        let timeLabelStyle = this.styleOfRemain(item.remaining_time);
        let timeText = this.parseTimeText(item.remaining_time.type);

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
                        <div
                            style={{
                                ...styles.label,
                                ...timeLabelStyle
                            }}>
                            {item.remaining_time.quantity + ' ' + timeText}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}