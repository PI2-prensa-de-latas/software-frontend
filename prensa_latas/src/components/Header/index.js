import React from 'react';

import styles from './style';

import { FaChevronLeft } from 'react-icons/fa';

class Header extends React.Component {

    render() {
        return (
            <div style={styles.container}>
                <div
                    style={styles.icon}
                    onClick={this.props.action}
                >
                    <FaChevronLeft/>
                </div>
                <div style={styles.title}>
                    {this.props.title}
                </div>
            </div>
         );
    }
}
 
export default Header;