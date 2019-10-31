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
            <div>
                Sua Participação
            </div>
            <div>
                <div>
                    {item.obtained_score}
                    <img
                        src={canIcon}
                    />
                </div>
                <div>
                    <div>
                        Termina em
                    </div>
                    <div>
                        {this.parseTime}
                    </div>
                </div>
            </div>
            <div>
                Voltar
            </div>
            </>
        );
    }
}
 
export default SpecificPromo;