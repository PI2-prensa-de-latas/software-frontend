import React from 'react';

import canIcon from './../../../assets/svg/canIcon.svg'

import styles from './style';

class SpecificPromo extends React.Component {
    render() {
        let item = this.props.item;
        return (
            <>
            <div style={styles.imgContainer}>
                <img
                    style={styles.img}
                    src={item.img}
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
                    />
                </div>
                <div style={styles.whiteBorder}/>
                <div style={styles.timeColumn}>
                    <div style={styles.finishOn}>
                        Termina em
                    </div>
                    <div style={styles.date}>
                        2 dias
                    </div>
                </div>
            </div>
            <button>
                Voltar
            </button>
            </>
        );
    }
}
 
export default SpecificPromo;