import React from 'react';

import styles from './style';
import colors from './../../style/colors';
import canIcon from './../../assets/svg/canIcon.svg';

import parseTime from './../../utils/parseTime';
import styleOfRemain from './../../utils/styleOfRemaining';

export default class PromoItem extends React.Component {

    render() {
        let item = this.props.item;
        let timeLabelStyle = styleOfRemain(item.remaining_time);
        let timeText = parseTime(item.remaining_time.type);

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
                            {item.obtained_score}
                            <img
                                style={styles.canIcon}
                                src={canIcon}
                            />
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