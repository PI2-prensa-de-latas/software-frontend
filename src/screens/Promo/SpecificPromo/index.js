import React from 'react';

import canIcon from './../../../assets/svg/canIcon.svg';
import styles from './style';

import parseTime from './../../../utils/parseTime';
import styleOfRemain from './../../../utils/styleOfRemaining';

/* eslint-disable */

class SpecificPromo extends React.Component {

    render() {
        let item = this.props.item;
        let timeText = parseTime(item.remaining_time.type);
        let timeLabelStyle = styleOfRemain(item.remaining_time);

        return (
            <>
            <div style={styles.imgContainer}>
                <img
                    style={styles.img}
                    src={item.img}
                    alt={"Promo item"}
                />
            </div>
            <div style={styles.description}>
                {item.description}
            </div>
            <div style={styles.participation}>
                Sua participação
            </div>
            <div style={styles.infoColumns}>
                <div style={styles.scoreColumn}>
                    {item.obtained_score}
                    <img
                        style={styles.canIcon}
                        src={canIcon}
                        alt={"can icon"}
                    />
                </div>
                <div style={styles.whiteBorder}/>
                <div style={{...styles.timeColumn, ...timeLabelStyle}}>
                    <div style={styles.finishOn}>
                        Termina em
                    </div>
                    <div style={styles.date}>
                        {item.remaining_time.quantity + ' ' + timeText}
                    </div>
                </div>
            </div>
            <div
                style={styles.backButton}
                onClick={this.props.backButton}
            >
                Voltar
            </div>
            </>
        );
    }
}
 
export default SpecificPromo;