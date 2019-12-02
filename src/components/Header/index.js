import React from 'react';

import styles from './style';
import { FaChevronLeft } from 'react-icons/fa';
import {Link} from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <div style={{...styles.container, background: this.props.background}}>
                <Link to={this.props.link}>
                    <div
                        style={styles.icon}
                    >
                        <FaChevronLeft style={{fill:this.props.fill}}/>
                    </div>
                </Link>

                <div style={styles.title}>
                    {this.props.title}
                </div>
            </div>
        );
    }
}
 
export default Header;